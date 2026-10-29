# Booking-v3 date hint conflicts with day-first interpretation — 33 reports

## Problem

For day-first tenants, booking-v3 prints `MM/DD/YYYY` under its date field, while the supplied `src/lib/kb/causes.ts` describes the form interpreting dates in tenant order. Following that hint can therefore transpose day and month. This is a distinct mechanism from the shared parser and needs a separate fix.

## Count and scope

33 unique reports merged into #4471 meet the supplied rule: a day-first tenant, channel `form`, and booking-v3. All 33 bodies explicitly describe reversed day/month pairs. They span three tenants: alder.physio (`de-DE`), copper.studio (`es-ES`), and pale.harbour (`pt-PT`). Received dates range from 2026-04-17 through 2026-09-22.

The intake tags identify only 18 as hint and mislabel 15 as parser. Use tenant configuration plus channel/form, not browser locale, subject or intake guess. These 33 are excluded from the parser issue's 379 filing count; the two counts total all 412 unique reports. Exact repeated export rows count once per ID.

## Examples

- R-41230, copper.studio, form: "My client came on 1 June instead of 6 January. We sorted it out." Intake tagged it parser; the configured route assigns hint.
- R-41241, alder.physio, form: "We had two people show up on 8 June. They were booked for 6 August." Browser locale is en-US, but tenant locale is de-DE and form is booking-v3.

## Evidence and limits

`DATE_HINT` in `src/lib/kb/causes.ts` maps booking-v2 to `DD/MM/YYYY` and booking-v3 to `MM/DD/YYYY`. `causeOf()` assigns hint to the affected form route. `locales.ts` loads tenant locale and form version from the tenant directory. `CauseTable.svelte` groups unique report IDs using these functions.

This export contains support data and classification logic, not the production booking implementation. The descriptions and configuration support the proposed mechanism; production reproduction is still required.

## Proposed acceptance checks

- Make the displayed hint, accepted input, parsing order and stored/output date consistent for the configured tenant locale.
- Reproduce 06/01 and 01/06 for all three affected tenant configurations and verify intended-date round trips.
- Compare booking-v2, and ensure app/email flows from these tenants remain separately covered by the parser issue.
- Show distinct-cause triage even when subjects match; do not merge this issue back into parser solely on a shared symptom.

No fix or production reproduction is claimed. Snapshot: supplied export dated 2026-10-04; reviewed 2026-10-29. Refresh and recompute before treating the count as current.
