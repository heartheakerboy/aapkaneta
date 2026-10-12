#!/usr/bin/env python3
"""AapkaNeta D1 admin — main Cloudflare account (custom.cloudflare).
Creates the database and applies schema. Surrogate credentials only."""
import json
import sys
import urllib.request
import urllib.parse

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request, read_json_response

API = "https://api.cloudflare.com/client/v4"
CRED = "custom.cloudflare"
ACCOUNT = "1cd8be7b2bb9ffa8f67e341e2049ddbd"


def api(method, path, data=None):
    url = API + path
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(url, data=body, method=method)
    if body:
        req.add_header("Content-Type", "application/json")
    add_surrogate_to_request(req, CRED, allowed_hosts=["api.cloudflare.com"])
    with urllib.request.urlopen(req, timeout=90) as resp:
        return read_json_response(resp)


SCHEMA_1 = [
    """CREATE TABLE IF NOT EXISTS netas (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, party TEXT, party_short TEXT,
      photo_url TEXT, current_post TEXT, bio TEXT,
      created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')))""",
    """CREATE TABLE IF NOT EXISTS constituencies (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, type TEXT NOT NULL, number INTEGER,
      district TEXT, state TEXT DEFAULT 'Maharashtra', reservation TEXT)""",
    """CREATE TABLE IF NOT EXISTS tenures (
      id TEXT PRIMARY KEY, neta_id TEXT NOT NULL REFERENCES netas(id),
      constituency_id TEXT REFERENCES constituencies(id),
      post TEXT, party TEXT, start_year TEXT, end_year TEXT)""",
]

SCHEMA_2 = [
    """CREATE TABLE IF NOT EXISTS works (
      id TEXT PRIMARY KEY, neta_id TEXT NOT NULL REFERENCES netas(id),
      tenure_id TEXT REFERENCES tenures(id), title TEXT NOT NULL, category TEXT,
      badge TEXT NOT NULL DEFAULT 'dawa', description TEXT, work_date TEXT,
      created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')))""",
    """CREATE TABLE IF NOT EXISTS sources (
      id TEXT PRIMARY KEY, work_id TEXT NOT NULL REFERENCES works(id),
      type TEXT NOT NULL, label TEXT, url TEXT, file_path TEXT, obtained_date TEXT)""",
    """CREATE TABLE IF NOT EXISTS funds (
      id TEXT PRIMARY KEY, neta_id TEXT NOT NULL REFERENCES netas(id),
      tenure_id TEXT REFERENCES tenures(id), scheme TEXT NOT NULL,
      allocated_paise INTEGER, utilized_paise INTEGER, utilization_pct REAL,
      fiscal_year TEXT, note TEXT)""",
    """CREATE TABLE IF NOT EXISTS corrections (
      id TEXT PRIMARY KEY, work_id TEXT REFERENCES works(id),
      reported_by TEXT, contact TEXT, note TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')))""",
]


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else "help"
    if cmd == "create-db":
        r = api("POST", f"/accounts/{ACCOUNT}/d1/database",
                {"name": "aapkaneta-db", "primary_location_hint": "enam"})
        d = r.get("result", {})
        print("created:", d.get("uuid"), d.get("name"))
    elif cmd == "list":
        r = api("GET", f"/accounts/{ACCOUNT}/d1/database")
        for d in r.get("result", []):
            print(d["uuid"], d["name"])
    elif cmd == "schema":
        uuid = sys.argv[2]
        stmts = SCHEMA_1 + SCHEMA_2
        for i, q in enumerate(stmts, 1):
            r = api("POST", f"/accounts/{ACCOUNT}/d1/database/{uuid}/query",
                    {"sql": q})
            ok = r.get("success") and not r.get("errors")
            print(f"stmt {i}/{len(stmts)}: {'OK' if ok else 'FAILED'}")
            if not ok:
                print(json.dumps(r)[:2000])
                sys.exit(1)
    elif cmd == "tables":
        uuid = sys.argv[2]
        r = api("POST", f"/accounts/{ACCOUNT}/d1/database/{uuid}/query",
                {"sql": "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"})
        print([x["name"] for x in r["result"][0]["results"]])
    else:
        print("usage: create-db | list | schema <uuid> | tables <uuid>")


main()
