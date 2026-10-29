# Review for your decision: ticket #4471

This reviews the supplied knowledge-base export, not a live production system. Its snapshot is dated October 4; the review is dated October 29, 2026. Nothing has been published.

## Counts and what they mean

The export contains 427 rows, representing 412 unique report IDs. The 15 repeated rows are exact duplicates. All 412 unique reports are merged into #4471. There is no evidence here that two different IDs should be collapsed merely because their text resembles another report.

| Filing according to the supplied code | Explicit swapped date pair | Unresolved symptom | Too little detail | Total |
|---|---:|---:|---:|---:|
| parser | 370 | 5 | 4 | 379 |
| hint | 33 | 0 | 0 | 33 |
| Total | 403 | 5 | 4 | 412 |

These are two views of the same reports, not competing totals. The code files reports using the tenant locale and reporting channel/form. A separate check extracts named dates from every body and tests whether day and month are reversed. I read the report descriptions and examined all nine exceptions. No production bug was reproduced.

## Proposed issues

1. Shared month-first parser: 379 reports filed by configuration, with 370 explicit transpositions and nine caveats listed below. If we describe only directly evidenced swaps, the supported count is 370. Keep both figures labelled rather than silently moving the nine to a supposedly proven third cause.
2. Booking-v3 date hint conflicts with tenant interpretation: 33 reports. All describe transpositions; all use the form channel for day-first tenants running booking-v3. Its hint says MM/DD/YYYY while the supplied code describes interpretation in tenant order. A separate form fix is warranted by this mechanism, subject to reproduction.

Representative parser evidence: R-41203, 2 December becomes 12 February. Representative hint evidence: R-41230, 6 January versus 1 June, copper.studio, form, booking-v3. Similar text alone cannot distinguish these mechanisms.

The code and intake tags disagree on 38 reports: 23 parser-classified reports were tagged hint, and 15 hint-classified reports were tagged parser. Browser locale and intake tag therefore cannot be used as authoritative cause labels.

## Cases requiring your attention

- R-41202: May 12 versus May 11 is not a day/month transposition. Investigate the original event, invite, calendar timezone and conversion path.
- R-41209: June-only one-day shifts are not demonstrated day/month swaps. Obtain affected event dates and times and compare June with adjacent months.
- R-41236: Alleged arrival before booking is an ordering symptom. Obtain booking creation and delivery logs with explicit timezones; no timestamps here establish causality.
- R-41344: Lisbon Tuesday versus Toronto Monday is compatible with a single instant displayed in different timezones. Obtain event time and timezone; this can be correct behavior. DST error remains unproven.
- R-41620: October 6 shown as Monday is a weekday/day-shift symptom, not an explicit transposition. Need the full displayed date and original calendar event.
- R-41290: Request for a day-first setting is consistent with locale friction, but supplies no original/result date pair or reproduction.
- R-41417: Wrong-day customer impact is clear, but no dates or reproduction identify the mechanism.
- R-41514: Using words and phone calls is a reported workaround and product impact, not proof of a specific parsing mechanism.
- R-41615: October-to-January is compatible with a swap for certain day numbers, but absent day numbers prevent verification.

The first five are the desk-noted exceptions; the other four were found by inspecting the full set. Do not call the five one proven timezone bug. Your DST/midnight hypothesis remains worth testing, especially the cross-location case, but appointment timestamps and timezone payloads are missing. Report receipt and merge timestamps do not establish appointment creation or event times.

## Process and documentation findings

The accepted decision from June 2024 says to merge on normalized subject alone. The executable duplicate explorer instead compares computed cause and does not equate two unknown causes. Identical subjects can describe different mechanisms; different subjects can describe the same mechanism. Preserve the accepted decision as history and propose a replacement decision rather than rewriting its text.

The incident article says one issue and one queued fix; its own computed table yields two filing groups. It should explain that discrepancy and retain the unresolved reports. The busiest merge day is 2026-07-02 (184 reports). Receiving and merging are different events; a merge spike is not evidence of a new failure spike.

## Suggested review

Start with R-41203 and R-41230, then compare them with R-41202 and R-41344. Decide whether you agree with keeping nine caveats visible under the code's filing counts while investigating their actual mechanisms separately. Next we can draft the issues and a signed page with calculated tables, rendered in the supplied knowledge-base components. This report is a review artifact, not the final course submission.
