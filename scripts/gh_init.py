#!/usr/bin/env python3
"""One-time: create the FIRST commit on an empty repo via Git Data API.
Surrogate credentials only (custom.github-pat). After this, gh.py push works."""
import base64
import json
import os
import sys
import urllib.request

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request, read_json_response

API = "https://api.github.com"
CRED = "custom.github-pat"
REPO = "heartheakerboy/aapkaneta"
BRANCH = "main"

FILES = [
    "BLUEPRINT.md", "README.md", "astro.config.mjs", "package.json",
    "package-lock.json", "public/favicon.svg", "scripts/cf_d1.py",
    "src/data/pilot.ts", "src/layouts/Layout.astro", "src/pages/index.astro",
    "src/pages/kshetra/[slug].astro", "src/pages/methodology.astro",
    "src/pages/neta/[slug].astro", "src/pages/rti.astro", "src/pages/tulna.astro",
    "tsconfig.json", ".gitignore",
]


def api(method, path, data=None):
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(API + path, data=body, method=method)
    req.add_header("Content-Type", "application/json")
    req.add_header("Accept", "application/vnd.github+json")
    add_surrogate_to_request(req, CRED, allowed_hosts=["api.github.com"])
    with urllib.request.urlopen(req, timeout=120) as resp:
        return read_json_response(resp)


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    tree = []
    for rel in FILES:
        with open(os.path.join(root, rel), "rb") as f:
            content = base64.b64encode(f.read()).decode()
        b = api("POST", f"/repos/{REPO}/git/blobs",
                {"content": content, "encoding": "base64"})
        tree.append({"path": rel, "mode": "100644", "type": "blob", "sha": b["sha"]})
        print("blob:", rel)
    t = api("POST", f"/repos/{REPO}/git/trees", {"tree": tree})
    print("tree:", t["sha"])
    c = api("POST", f"/repos/{REPO}/git/commits",
            {"message": "AapkaNeta.org MVP: Palghar pilot (Astro + D1 schema + 18 pages)",
             "tree": t["sha"]})
    print("commit:", c["sha"])
    r = api("POST", f"/repos/{REPO}/git/refs",
            {"ref": f"refs/heads/{BRANCH}", "sha": c["sha"]})
    print("ref:", r["ref"], "->", r["object"]["sha"])


main()
