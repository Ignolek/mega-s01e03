# Shared month-first parser conflicts with day-first tenants — 379 filed reports

## Problem

The supplied `src/lib/kb/causes.ts` describes a shared parser that reads every date month first. For day-first tenants on the parser route, ambiguous dates are transposed. Example: R-41203, lantern.row, app: "Booked for 2 December. The invite says 12 February."

## Count and scope

379 unique reports merged into #4471 are assigned `parser` by the supplied code using tenant locale and channel/form. Of those, 370 bodies explicitly give reversed day/month pairs, five describe unresolved symptoms, and four lack enough detail to verify the mechanism. This is a filing count, not 379 independently reproduced parser defects.

The entire export has 427 rows but 412 unique IDs; 15 exact repeated rows must not increase the count. The other 33 reports are assigned to the booking-v3 hint issue and are excluded here. All 11 tenants have reports in this parser group; received dates range from 2026-04-01 through 2026-10-04. Intake tagged 356 as parser and 23 as hint, so intake tags are not a reliable cause count.

## Routing evidence

- Tenant configuration comes from `src/lib/data/tenants/*.json`, loaded by `src/lib/kb/locales.ts`.
- `dayFirst()` asks `Intl.DateTimeFormat` for the tenant locale's part order.
- `causeOf()` assigns parser for day-first tenants except form reports on booking-v3's month-first hint path.
- App and email reports from booking-v3 tenants still route to parser. Browser locale does not replace tenant locale.

## Explicit caveats

These remain in the 379 filing count without asserting a confirmed parser cause:

- R-41202: May 12 versus May 11; one-day discrepancy.
- R-41209: one-day errors only in June.
- R-41236: invite allegedly arrived before booking creation.
- R-41344: same meeting shows Tuesday in Lisbon and Monday in Toronto; may be correct timezone display.
- R-41620: October 6 displayed as Monday.
- R-41290: asks for a day-first setting without a date pair.
- R-41417: wrong-day customer impact without dates.
- R-41514: telephone/words workaround without reproducible dates.
- R-41615: October-to-January change without day numbers.

The first five are listed in `desk-notes.json`. The other four were found during the full body review. Appointment timestamps, IDs, original calendar payloads and event timezone fields are absent. A human proposed timezone conversion across midnight or incorrect seasonal offsets as hypotheses; neither has been established. Receipt and merge times are support workflow times.

## Proposed acceptance checks

- Reproduce the ambiguous-date path using configured tenant order, including 02/12 versus 12/02.
- Parse and serialize without changing the intended local date; include unambiguous dates and invalid-input checks.
- Verify app/email and relevant form paths, preserving the separate booking-v3 hint scope.
- Obtain original events and explicit timezone/creation/delivery evidence for unresolved symptoms; split into further issues only when evidence warrants it.

No production fix or reproduction is claimed. Snapshot: supplied export dated 2026-10-04; reviewed 2026-10-29. Recompute against refreshed data before relying on counts operationally.
