# Supplier 360 SRM Demo Prototype

A static front-end prototype for a custom Supplier 360 / SRM dashboard.

## Data privacy note

All supplier names, supplier IDs, contact names, emails, phone numbers, relationship notes, and business records in this repository are **dummy demo data**.

This repository does **not** contain production SharePoint exports, SAP exports, real supplier records, real contact information, or confidential company data.

## What this prototype demonstrates

- Supplier 360 dashboard layout
- Supplier master / SAP-style data panel
- Supplier extra information panel
- Material group table
- Supplier contacts with add/edit/delete actions
- Relationship traces with major/routine categorization
- Basic performance charts

## Files

```text
index.html
style.css
script.js
server.py
```

## Run locally

```bash
python server.py
```

Then open:

```text
http://localhost:8000/index.html
```

## Notes

This is a static prototype. Data is stored in JavaScript memory only. Changes made in the UI are not persisted after page refresh.
