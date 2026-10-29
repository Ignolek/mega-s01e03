# Report-by-report review of #4471

Snapshot: supplied export dated 2026-10-04. Reviewed 2026-10-29. All 412 unique IDs are represented once; duplicate rows are not additional complaints. Filing classification and evidence judgment are separate.

## R-41200

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-01T09:12:00+01:00; merged: 2026-07-02T09:03:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Our 7 April reminder went out on 4 July. Is this a joke. It is not April Fools where we are.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41201

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-01T09:34:00+01:00; merged: 2026-07-02T09:05:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Sorry. 4 July went out on 7 April. I have been up since five.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41202

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-04-02T10:41:00+02:00; merged: 2026-07-02T09:06:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Invite says Tuesday 12 May. Calendar says Monday 11 May. My client turned up on the Monday. We had coffee.
- Judgment: unresolved-symptom. May 12 versus May 11 is not a day/month transposition. Investigate the original event, invite, calendar timezone and conversion path.
- Confidence: insufficient evidence for a confirmed root cause.
- Additional duplicate export rows: 0.

## R-41203

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-04-03T12:14:00+02:00; merged: 2026-07-02T09:09:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Booked for 2 December. The invite says 12 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41204

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-04-04T21:55:00+02:00; merged: 2026-07-02T09:10:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Invite says Thursday 10 December. We agreed Monday 12 October. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41205

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-04-05T12:29:00+02:00; merged: 2026-07-02T09:13:00+02:00; ticket: 4471.
- Subject: Booking shows a different day
- Report: Customer booked 3 October and got an invite for 10 March. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41206

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-04-05T16:54:00+02:00; merged: 2026-07-02T09:15:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Second time this month: 4 March turned into 3 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41208

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-04-06T14:52:00+02:00; merged: 2026-07-02T09:18:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Booked for 2 March. The invite says 3 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41209

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-04-06T15:18:00+02:00; merged: 2026-07-02T09:19:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Every booking in June is one day off. Only June. Why only June.
- Judgment: unresolved-symptom. June-only one-day shifts are not demonstrated day/month swaps. Obtain affected event dates and times and compare June with adjacent months.
- Confidence: insufficient evidence for a confirmed root cause.
- Additional duplicate export rows: 0.

## R-41210

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-04-07T08:53:00+02:00; merged: 2026-07-02T09:20:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Second time this month: 12 April turned into 4 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41211

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-04-07T09:28:00+01:00; merged: 2026-07-02T09:23:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The reminder for 5 March arrived for 3 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41212

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-07T10:22:00+01:00; merged: 2026-07-02T09:25:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Every booking we make shows the wrong day. 8 December is now 12 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41213

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-04-07T17:14:00+02:00; merged: 2026-07-02T09:27:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Monday 1 June showed as Tuesday 6 January. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41214

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: email.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-04-08T18:22:00+02:00; merged: 2026-07-02T09:28:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Invite says Thursday 9 July. We agreed Monday 7 September. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41215

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-04-08T19:23:00+02:00; merged: 2026-07-02T09:30:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: My client came on 3 February instead of 2 March. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41216

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-04-11T12:34:00+02:00; merged: 2026-07-02T09:33:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: We had two people show up on 5 December. They were booked for 12 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41217

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-04-12T15:23:00+02:00; merged: 2026-07-02T09:34:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The reminder for 9 May arrived for 5 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41218

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: email.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-04-12T18:55:00+01:00; merged: 2026-07-02T09:35:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Customer booked 6 November and got an invite for 11 June. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41219

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-13T13:46:00+01:00; merged: 2026-07-02T09:36:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Thursday 12 March showed as Thursday 3 December. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41220

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-04-13T18:08:00+02:00; merged: 2026-07-02T09:38:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: We had two people show up on 5 June. They were booked for 6 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41221

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-04-13T21:27:00+02:00; merged: 2026-07-02T09:41:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Booked for 2 July. The invite says 7 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41222

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-04-14T17:49:00+01:00; merged: 2026-07-02T09:43:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Customer booked 1 October and got an invite for 10 January. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41223

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-04-14T19:08:00+02:00; merged: 2026-07-02T09:44:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Tuesday 8 December showed as Wednesday 12 August. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41224

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-04-17T13:50:00+02:00; merged: 2026-07-02T09:47:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Every booking we make shows the wrong day. 10 September is now 9 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41225

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: email.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-04-17T14:02:00+02:00; merged: 2026-07-02T09:48:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: The reminder for 3 May arrived for 5 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41227

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-17T14:23:00+01:00; merged: 2026-07-02T09:50:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: We had two people show up on 2 June. They were booked for 6 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41228

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-04-17T17:27:00+02:00; merged: 2026-07-02T09:51:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Customer booked 2 July and got an invite for 7 February. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41229

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-17T20:59:00+01:00; merged: 2026-07-02T09:54:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Every booking we make shows the wrong day. 5 March is now 3 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41230

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: en-GB; intake tag: parser; computed filing: hint.
- Received: 2026-04-17T22:44:00+02:00; merged: 2026-07-02T09:56:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: My client came on 1 June instead of 6 January. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41231

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-04-18T11:22:00+02:00; merged: 2026-07-02T09:58:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Second time this month: 8 January turned into 1 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41232

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-19T13:15:00+01:00; merged: 2026-07-02T10:00:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Second time this month: 6 January turned into 1 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41233

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-04-19T21:27:00+02:00; merged: 2026-07-02T10:01:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: We had two people show up on 10 November. They were booked for 11 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41234

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-04-20T07:46:00+01:00; merged: 2026-07-02T10:03:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Every booking we make shows the wrong day. 1 March is now 3 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41235

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-04-20T10:50:00+02:00; merged: 2026-07-02T10:06:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Second time this month: 2 May turned into 5 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41236

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-04-20T11:52:00+02:00; merged: 2026-07-02T10:08:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: The invite arrived before I made the booking. I would like to know how.
- Judgment: unresolved-symptom. Alleged arrival before booking is an ordering symptom. Obtain booking creation and delivery logs with explicit timezones; no timestamps here establish causality.
- Confidence: insufficient evidence for a confirmed root cause.
- Additional duplicate export rows: 0.

## R-41237

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-04-20T21:02:00+01:00; merged: 2026-07-02T10:08:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: The reminder for 12 January arrived for 1 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41238

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-04-20T22:16:00+02:00; merged: 2026-07-02T10:11:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Every booking we make shows the wrong day. 8 March is now 3 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41239

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: form.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-21T10:21:00+02:00; merged: 2026-07-02T10:13:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: The reminder for 8 November arrived for 11 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41240

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: form.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-04-21T12:34:00+02:00; merged: 2026-07-02T10:14:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Second time this month: 7 February turned into 2 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41241

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-04-21T19:21:00+02:00; merged: 2026-07-02T10:15:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: We had two people show up on 8 June. They were booked for 6 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41242

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-04-22T14:50:00+02:00; merged: 2026-07-02T10:16:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: The reminder for 5 October arrived for 10 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41243

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-22T21:56:00+01:00; merged: 2026-07-02T10:18:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: My client came on 5 October instead of 10 May. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41244

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-04-23T13:35:00+02:00; merged: 2026-07-02T10:19:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Second time this month: 1 December turned into 12 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41245

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-04-23T18:38:00+02:00; merged: 2026-07-02T10:21:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: My client came on 10 November instead of 11 October. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41246

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: form.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-04-24T10:27:00+01:00; merged: 2026-07-02T10:22:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: We had two people show up on 12 June. They were booked for 6 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41247

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-04-24T12:30:00+02:00; merged: 2026-07-02T10:25:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Customer booked 11 March and got an invite for 3 November. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41248

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: form.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-04-24T15:13:00+02:00; merged: 2026-07-02T10:27:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Invite says Wednesday 5 August. We agreed Friday 8 May. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41249

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-04-24T19:27:00+02:00; merged: 2026-07-02T10:28:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: My client came on 10 November instead of 11 October. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41250

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-04-24T19:35:00+01:00; merged: 2026-07-02T10:29:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Booked for 10 December. The invite says 12 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41251

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: form.
- Browser locale: pt-PT; intake tag: parser; computed filing: hint.
- Received: 2026-04-25T20:48:00+01:00; merged: 2026-07-02T10:30:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Wednesday 7 January showed as Wednesday 1 July. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41252

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-04-26T15:56:00+02:00; merged: 2026-07-02T10:31:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: The reminder for 3 January arrived for 1 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41253

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-27T13:56:00+01:00; merged: 2026-07-02T10:33:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: My client came on 4 February instead of 2 April. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41254

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-04-28T20:08:00+01:00; merged: 2026-07-02T10:35:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The reminder for 8 April arrived for 4 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41255

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-04-29T13:22:00+02:00; merged: 2026-07-02T10:38:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Customer booked 6 December and got an invite for 12 June. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41256

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: form.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-04-29T16:38:00+02:00; merged: 2026-07-02T10:40:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: My client came on 6 July instead of 7 June. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41257

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-04-30T09:53:00+01:00; merged: 2026-07-02T10:42:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Every booking we make shows the wrong day. 12 August is now 8 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41258

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-05-01T11:08:00+02:00; merged: 2026-07-02T10:44:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: We had two people show up on 9 December. They were booked for 12 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41259

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: es-ES; intake tag: parser; computed filing: hint.
- Received: 2026-05-01T12:24:00+02:00; merged: 2026-07-02T10:45:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Customer booked 11 April and got an invite for 4 November. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41260

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-01T21:18:00+01:00; merged: 2026-07-02T10:47:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Second time this month: 1 November turned into 11 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41261

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-05-02T10:47:00+02:00; merged: 2026-07-02T10:50:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Booked for 2 September. The invite says 9 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41262

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: form.
- Browser locale: pt-PT; intake tag: parser; computed filing: hint.
- Received: 2026-05-02T13:17:00+01:00; merged: 2026-07-02T10:52:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: We had two people show up on 3 February. They were booked for 2 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41263

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-05-02T15:49:00+01:00; merged: 2026-07-02T10:53:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: The reminder for 3 February arrived for 2 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41264

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: email.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-05-02T18:18:00+02:00; merged: 2026-07-02T10:56:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Invite says Sunday 5 April. We agreed Monday 4 May. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41265

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: form.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-05-03T08:12:00+02:00; merged: 2026-07-02T10:59:00+02:00; ticket: 4471.
- Subject: Booking shows a different day
- Report: The reminder for 7 August arrived for 8 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41266

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: email.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-05-03T11:40:00+02:00; merged: 2026-07-02T11:01:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Every booking we make shows the wrong day. 12 November is now 11 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41267

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-05-03T14:36:00+02:00; merged: 2026-07-02T11:02:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: The calendar invite for 12 November landed on 11 December. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41268

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-05-03T16:23:00+01:00; merged: 2026-07-02T11:03:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: The reminder for 5 February arrived for 2 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41269

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-05-04T14:49:00+02:00; merged: 2026-07-02T11:05:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Second time this month: 5 August turned into 8 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41270

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-05-04T16:03:00+02:00; merged: 2026-07-02T11:08:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Our 5 June invoice meeting is shown as 6 May. We paid someone on the wrong day because of this. Not your problem. Noting it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41271

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-05-04T16:33:00+02:00; merged: 2026-07-02T11:10:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Second time this month: 12 January turned into 1 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41272

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-05-04T21:05:00+02:00; merged: 2026-07-02T11:11:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: We had two people show up on 12 January. They were booked for 1 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41273

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-05-07T10:16:00+02:00; merged: 2026-07-02T11:14:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Saturday 3 January showed as Sunday 1 March. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41274

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-05-07T15:27:00+02:00; merged: 2026-07-02T11:16:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Friday 7 August showed as Wednesday 8 July. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41275

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-05-07T18:27:00+02:00; merged: 2026-07-02T11:18:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: My client came on 11 July instead of 7 November. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41276

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-08T12:58:00+02:00; merged: 2026-07-02T11:20:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Customer booked 11 June and got an invite for 6 November. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41277

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-05-08T17:43:00+02:00; merged: 2026-07-02T11:23:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The reminder for 11 January arrived for 1 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41278

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-05-08T18:54:00+02:00; merged: 2026-07-02T11:25:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Invite says Thursday 10 September. We agreed Friday 9 October. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41279

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-05-08T19:21:00+02:00; merged: 2026-07-02T11:28:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Second time this month: 6 November turned into 11 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41280

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-10T16:29:00+01:00; merged: 2026-07-02T11:31:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Every booking we make shows the wrong day. 11 January is now 1 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41281

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: email.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-05-11T09:44:00+02:00; merged: 2026-07-02T11:34:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Booked for 7 June. The invite says 6 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41282

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-12T13:50:00+01:00; merged: 2026-07-02T11:37:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Second time this month: 11 April turned into 4 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41283

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-05-12T16:23:00+01:00; merged: 2026-07-02T11:40:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: My client came on 10 December instead of 12 October. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41284

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-14T11:06:00+01:00; merged: 2026-07-02T11:42:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Every booking we make shows the wrong day. 6 August is now 8 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41285

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: form.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-05-14T22:27:00+02:00; merged: 2026-07-02T11:43:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Booked for 1 December. The invite says 12 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41286

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-05-17T09:27:00+02:00; merged: 2026-07-02T11:45:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Invite says Monday 9 November. We agreed Friday 11 September. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41287

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-05-17T17:10:00+02:00; merged: 2026-07-02T11:47:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Second time this month: 8 February turned into 2 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41288

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-05-17T21:53:00+02:00; merged: 2026-07-02T11:49:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Customer booked 7 October and got an invite for 10 July. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41289

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-18T15:42:00+01:00; merged: 2026-07-02T11:50:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Every booking we make shows the wrong day. 7 August is now 8 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41290

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-05-19T13:44:00+02:00; merged: 2026-07-02T11:51:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Is there a setting for "my country writes the day first". I have looked. I would pay for it.
- Judgment: insufficient-detail. Request for a day-first setting is consistent with locale friction, but supplies no original/result date pair or reproduction.
- Confidence: insufficient evidence for a confirmed root cause.
- Additional duplicate export rows: 0.

## R-41291

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: email.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-05-20T09:56:00+01:00; merged: 2026-07-02T11:53:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: The calendar invite for 12 February landed on 2 December. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41292

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-05-20T14:29:00+01:00; merged: 2026-07-02T11:54:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Tuesday 10 November showed as Sunday 11 October. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41293

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: email.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-05-20T21:10:00+01:00; merged: 2026-07-02T11:55:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Customer booked 1 September and got an invite for 9 January. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41294

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: form.
- Browser locale: pt-PT; intake tag: parser; computed filing: hint.
- Received: 2026-05-21T21:10:00+01:00; merged: 2026-07-02T11:58:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Thursday 5 November showed as Monday 11 May. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41295

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-05-22T20:49:00+02:00; merged: 2026-07-02T12:01:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Invite says Monday 2 March. We agreed Tuesday 3 February. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41296

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: email.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-05-23T18:39:00+02:00; merged: 2026-07-02T12:04:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Invite says Monday 6 July. We agreed Sunday 7 June. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41297

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-23T21:58:00+01:00; merged: 2026-07-02T12:06:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Customer booked 7 June and got an invite for 6 July. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41298

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-24T14:52:00+02:00; merged: 2026-07-02T12:08:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The reminder for 12 January arrived for 1 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41299

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-24T14:39:00+01:00; merged: 2026-07-02T12:08:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: We had two people show up on 9 October. They were booked for 10 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41300

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-05-24T22:57:00+02:00; merged: 2026-07-02T12:10:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Booked for 12 October. The invite says 10 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41301

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-26T09:53:00+01:00; merged: 2026-07-02T12:12:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Booked for 2 July. The invite says 7 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41302

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-05-26T18:23:00+02:00; merged: 2026-07-02T12:14:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: The reminder for 5 November arrived for 11 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41303

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-05-27T08:55:00+02:00; merged: 2026-07-02T12:16:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Booked for 8 November. The invite says 11 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41304

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: form.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-05-27T09:16:00+02:00; merged: 2026-07-02T12:18:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: The calendar invite for 8 January landed on 1 August. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41305

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-05-27T13:04:00+02:00; merged: 2026-07-02T12:19:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Booked for 9 August. The invite says 8 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41306

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-27T14:19:00+01:00; merged: 2026-07-02T12:22:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Thursday 10 December showed as Monday 12 October. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41308

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-05-28T09:27:00+02:00; merged: 2026-07-02T12:25:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: We had two people show up on 3 May. They were booked for 5 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41309

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-05-28T17:27:00+02:00; merged: 2026-07-02T12:28:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Thursday 8 January showed as Saturday 1 August. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41310

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-05-29T21:44:00+02:00; merged: 2026-07-02T12:29:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: The calendar invite for 12 July landed on 7 December. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41311

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: email.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-05-30T10:55:00+02:00; merged: 2026-07-02T12:30:00+02:00; ticket: 4471.
- Subject: Booking shows a different day
- Report: Booked for 8 May. The invite says 5 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41312

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-05-30T20:00:00+01:00; merged: 2026-07-02T12:33:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: We had two people show up on 4 June. They were booked for 6 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41313

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-05-31T09:05:00+02:00; merged: 2026-07-02T12:36:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Customer booked 11 May and got an invite for 5 November. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41314

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-05-31T13:28:00+02:00; merged: 2026-07-02T12:37:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Booked for 8 April. The invite says 4 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41315

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-05-31T19:21:00+02:00; merged: 2026-07-02T12:38:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: The calendar invite for 1 November landed on 11 January. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41316

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-01T18:59:00+01:00; merged: 2026-07-02T12:40:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Friday 2 October showed as Tuesday 10 February. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41317

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-06-01T20:05:00+01:00; merged: 2026-07-02T12:42:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Second time this month: 1 September turned into 9 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41318

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-06-02T22:28:00+02:00; merged: 2026-07-02T12:44:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Every booking we make shows the wrong day. 12 November is now 11 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41319

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-03T12:43:00+01:00; merged: 2026-07-02T12:45:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Invite says Wednesday 4 November. We agreed Saturday 11 April. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41320

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-04T15:35:00+01:00; merged: 2026-07-02T12:47:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: We had two people show up on 5 November. They were booked for 11 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41321

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: form.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-04T16:56:00+01:00; merged: 2026-07-02T12:49:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Customer booked 12 May and got an invite for 5 December. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41322

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-06-05T09:57:00+02:00; merged: 2026-07-02T12:52:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: My client came on 10 December instead of 12 October. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41323

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: form.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-06-05T12:35:00+02:00; merged: 2026-07-02T12:53:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: The reminder for 12 August arrived for 8 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41324

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-06-05T16:33:00+02:00; merged: 2026-07-02T12:56:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Customer booked 4 December and got an invite for 12 April. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41325

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-06-05T22:13:00+02:00; merged: 2026-07-02T12:59:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: The reminder for 12 June arrived for 6 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41327

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-06-06T08:52:00+02:00; merged: 2026-07-02T13:02:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: My client came on 9 January instead of 1 September. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41328

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-06-06T20:06:00+02:00; merged: 2026-07-02T13:05:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: My client came on 2 May instead of 5 February. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41329

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-07T11:27:00+01:00; merged: 2026-07-02T13:06:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The calendar invite for 12 November landed on 11 December. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41330

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-06-07T16:11:00+02:00; merged: 2026-07-02T13:08:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Customer booked 7 April and got an invite for 4 July. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41331

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-07T17:36:00+02:00; merged: 2026-07-02T13:09:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Customer booked 2 April and got an invite for 4 February. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41332

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-06-07T20:06:00+02:00; merged: 2026-07-02T13:11:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: We had two people show up on 1 September. They were booked for 9 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41333

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-06-07T22:08:00+02:00; merged: 2026-07-02T13:14:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Saturday 12 September showed as Wednesday 9 December. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41334

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-06-08T10:59:00+02:00; merged: 2026-07-02T13:15:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: My client came on 2 May instead of 5 February. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41335

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-08T20:22:00+02:00; merged: 2026-07-02T13:16:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: The calendar invite for 9 October landed on 10 September. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41336

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-06-08T20:25:00+02:00; merged: 2026-07-02T13:19:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Tuesday 12 May showed as Saturday 5 December. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41337

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-06-08T21:27:00+02:00; merged: 2026-07-02T13:21:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: We had two people show up on 8 June. They were booked for 6 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41338

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-06-09T08:51:00+02:00; merged: 2026-07-02T13:22:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Saturday 7 February showed as Thursday 2 July. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41339

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-06-09T22:38:00+02:00; merged: 2026-07-02T13:25:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: The calendar invite for 5 March landed on 3 May. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41340

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-06-10T18:22:00+02:00; merged: 2026-07-02T13:27:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Invite says Sunday 9 August. We agreed Tuesday 8 September. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41341

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-06-10T22:43:00+02:00; merged: 2026-07-02T13:29:00+02:00; ticket: 4471.
- Subject: Booking shows a different day
- Report: The calendar invite for 9 June landed on 6 September. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41342

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-06-11T08:32:00+01:00; merged: 2026-07-02T13:31:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Every booking we make shows the wrong day. 4 March is now 3 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41343

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-06-11T15:23:00+02:00; merged: 2026-07-02T13:33:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: The calendar invite for 6 May landed on 5 June. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41344

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: email.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-06-12T09:58:00+01:00; merged: 2026-07-02T13:35:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Client in Lisbon got Tuesday. Client in Toronto got Monday. Same meeting. We held it twice.
- Judgment: unresolved-symptom. Lisbon Tuesday versus Toronto Monday is compatible with a single instant displayed in different timezones. Obtain event time and timezone; this can be correct behavior. DST error remains unproven.
- Confidence: insufficient evidence for a confirmed root cause.
- Additional duplicate export rows: 0.

## R-41345

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-06-12T22:52:00+02:00; merged: 2026-07-02T13:38:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Customer booked 9 February and got an invite for 2 September. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41346

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-06-13T13:25:00+02:00; merged: 2026-07-02T13:39:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Booked for 11 January. The invite says 1 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41347

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-06-13T17:11:00+02:00; merged: 2026-07-02T13:41:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Second time this month: 1 July turned into 7 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41348

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-06-14T12:50:00+02:00; merged: 2026-07-02T13:42:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The reminder for 10 July arrived for 7 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41349

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: form.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-14T14:49:00+02:00; merged: 2026-07-02T13:43:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Thursday 10 September showed as Friday 9 October. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41350

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-06-15T16:29:00+02:00; merged: 2026-07-02T13:45:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Second time this month: 2 June turned into 6 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41351

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-06-16T08:43:00+02:00; merged: 2026-07-02T13:47:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Every booking we make shows the wrong day. 11 February is now 2 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41352

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-16T10:44:00+02:00; merged: 2026-07-02T13:48:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Second time this month: 5 March turned into 3 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41353

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: email.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-06-16T10:46:00+02:00; merged: 2026-07-02T13:50:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Every booking we make shows the wrong day. 3 August is now 8 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41354

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-06-16T15:49:00+02:00; merged: 2026-07-02T13:53:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: The calendar invite for 8 June landed on 6 August. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41355

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-06-16T20:42:00+02:00; merged: 2026-07-02T13:56:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Customer booked 6 November and got an invite for 11 June. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41356

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-17T12:32:00+01:00; merged: 2026-07-02T13:58:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Wednesday 5 August showed as Friday 8 May. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41357

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-06-17T14:48:00+02:00; merged: 2026-07-02T14:01:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Wednesday 1 July showed as Wednesday 7 January. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41358

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-17T21:40:00+01:00; merged: 2026-07-02T14:04:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: The reminder for 1 July arrived for 7 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41359

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-06-18T08:01:00+02:00; merged: 2026-07-02T14:06:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Invite says Friday 4 September. We agreed Thursday 9 April. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41360

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-06-18T11:29:00+02:00; merged: 2026-07-02T14:09:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: We had two people show up on 4 October. They were booked for 10 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41361

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-18T21:08:00+01:00; merged: 2026-07-02T14:12:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The calendar invite for 1 August landed on 8 January. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41362

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-06-19T13:21:00+02:00; merged: 2026-07-02T14:14:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Customer booked 12 February and got an invite for 2 December. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41363

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-06-19T14:27:00+02:00; merged: 2026-07-02T14:15:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: My client came on 12 January instead of 1 December. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41364

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-06-20T14:19:00+02:00; merged: 2026-07-02T14:16:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: We had two people show up on 10 January. They were booked for 1 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41365

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-06-20T21:21:00+02:00; merged: 2026-07-02T14:19:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Invite says Tuesday 4 August. We agreed Wednesday 8 April. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41366

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-06-21T13:17:00+02:00; merged: 2026-07-02T14:22:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Sunday 11 October showed as Tuesday 10 November. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41367

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-06-22T12:14:00+02:00; merged: 2026-07-02T14:25:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Wednesday 11 March showed as Tuesday 3 November. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41368

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-06-24T09:08:00+02:00; merged: 2026-07-02T14:27:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: We had two people show up on 9 April. They were booked for 4 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41369

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: form.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-25T11:43:00+02:00; merged: 2026-07-02T14:27:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Booked for 5 November. The invite says 11 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41370

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: email.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-06-25T11:59:00+01:00; merged: 2026-07-02T14:29:00+02:00; ticket: 4471.
- Subject: Booking shows a different day
- Report: The calendar invite for 9 December landed on 12 September. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41371

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-06-25T15:06:00+02:00; merged: 2026-07-02T14:32:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: The calendar invite for 7 June landed on 6 July. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41372

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-06-25T20:34:00+02:00; merged: 2026-07-02T14:35:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Invite says Tuesday 8 September. We agreed Sunday 9 August. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41373

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-06-26T09:18:00+02:00; merged: 2026-07-02T14:37:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Booked for 7 March. The invite says 3 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41374

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-06-26T09:57:00+02:00; merged: 2026-07-02T14:39:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: The reminder for 9 November arrived for 11 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41375

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-06-27T11:13:00+02:00; merged: 2026-07-02T14:41:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The calendar invite for 7 April landed on 4 July. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41376

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-27T19:29:00+02:00; merged: 2026-07-02T14:42:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: The reminder for 12 March arrived for 3 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41377

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-28T10:38:00+01:00; merged: 2026-07-02T14:43:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Second time this month: 2 March turned into 3 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41378

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-06-29T08:06:00+02:00; merged: 2026-07-02T14:44:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The reminder for 7 February arrived for 2 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41379

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-06-30T08:21:00+01:00; merged: 2026-07-02T14:47:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: We had two people show up on 12 October. They were booked for 10 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41380

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-06-30T10:27:00+02:00; merged: 2026-07-02T14:49:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: We had two people show up on 7 May. They were booked for 5 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41381

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-06-30T16:46:00+02:00; merged: 2026-07-02T14:52:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: My client came on 10 February instead of 2 October. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41382

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-06-30T18:12:00+02:00; merged: 2026-07-02T14:53:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Every booking we make shows the wrong day. 6 August is now 8 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41383

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-07-01T13:45:00+02:00; merged: 2026-07-02T14:55:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Monday 3 August showed as Sunday 8 March. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41384

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: es-ES; intake tag: parser; computed filing: hint.
- Received: 2026-07-01T15:19:00+02:00; merged: 2026-07-02T14:56:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: The calendar invite for 8 January landed on 1 August. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41385

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-01T20:36:00+01:00; merged: 2026-07-02T14:57:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Second time this month: 5 December turned into 12 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41386

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: form.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-01T21:52:00+01:00; merged: 2026-07-02T15:00:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Second time this month: 10 August turned into 8 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41387

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-07-02T08:17:00+02:00; merged: 2026-07-02T15:01:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Invite says Sunday 4 October. We agreed Friday 10 April. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41388

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: email.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-07-02T21:41:00+01:00; merged: 2026-07-03T00:32:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Invite says Sunday 4 January. We agreed Wednesday 1 April. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41389

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-07-03T19:42:00+02:00; merged: 2026-07-03T23:58:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Wednesday 4 February showed as Thursday 2 April. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41390

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-07-05T08:08:00+01:00; merged: 2026-07-05T10:56:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: We had two people show up on 9 August. They were booked for 8 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41391

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: email.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-07-05T11:06:00+02:00; merged: 2026-07-05T15:27:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The reminder for 12 October arrived for 10 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41392

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-05T13:19:00+02:00; merged: 2026-07-05T17:02:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: The reminder for 3 February arrived for 2 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41393

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-07-06T12:22:00+02:00; merged: 2026-07-06T15:28:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The reminder for 1 July arrived for 7 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41394

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-07-06T13:12:00+02:00; merged: 2026-07-06T18:00:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: We had two people show up on 1 September. They were booked for 9 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41395

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-07-07T17:15:00+02:00; merged: 2026-07-07T18:54:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Sunday 5 July showed as Thursday 7 May. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41396

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-07-07T19:19:00+02:00; merged: 2026-07-07T23:59:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: My client came on 10 April instead of 4 October. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41397

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: form.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-07-07T19:05:00+01:00; merged: 2026-07-08T00:24:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: My client came on 4 December instead of 12 April. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41398

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-07-07T22:47:00+02:00; merged: 2026-07-08T00:12:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: The calendar invite for 7 June landed on 6 July. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41399

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-07-08T12:03:00+02:00; merged: 2026-07-08T12:54:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: The reminder for 2 March arrived for 3 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41400

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: es-ES; intake tag: parser; computed filing: hint.
- Received: 2026-07-09T15:16:00+02:00; merged: 2026-07-09T19:04:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: We had two people show up on 11 October. They were booked for 10 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41401

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-07-09T16:13:00+02:00; merged: 2026-07-09T17:31:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: We had two people show up on 10 June. They were booked for 6 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41402

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-07-10T13:17:00+01:00; merged: 2026-07-10T15:17:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: The reminder for 4 September arrived for 9 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41403

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-07-10T16:32:00+02:00; merged: 2026-07-10T20:11:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The reminder for 7 February arrived for 2 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41404

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-10T15:56:00+01:00; merged: 2026-07-10T20:23:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: My client came on 1 February instead of 2 January. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41405

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-07-11T15:22:00+02:00; merged: 2026-07-11T15:45:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Every booking we make shows the wrong day. 1 October is now 10 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41406

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: form.
- Browser locale: pt-PT; intake tag: parser; computed filing: hint.
- Received: 2026-07-11T17:06:00+01:00; merged: 2026-07-11T20:34:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Every booking we make shows the wrong day. 8 July is now 7 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41408

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-12T14:40:00+02:00; merged: 2026-07-12T16:14:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Every booking we make shows the wrong day. 12 November is now 11 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41409

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-07-12T14:52:00+02:00; merged: 2026-07-12T18:38:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: My client came on 4 June instead of 6 April. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41410

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: form.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-12T15:02:00+02:00; merged: 2026-07-12T16:52:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Invite says Friday 2 October. We agreed Tuesday 10 February. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41411

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-07-12T17:04:00+02:00; merged: 2026-07-12T20:29:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Invite says Friday 7 August. We agreed Wednesday 8 July. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41412

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-07-12T22:40:00+02:00; merged: 2026-07-13T00:16:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Wednesday 8 July showed as Friday 7 August. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41413

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: email.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-07-13T16:27:00+02:00; merged: 2026-07-13T19:21:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: The reminder for 10 May arrived for 5 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41414

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-13T20:54:00+01:00; merged: 2026-07-13T22:12:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Invite says Monday 6 July. We agreed Sunday 7 June. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41415

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: form.
- Browser locale: pt-PT; intake tag: parser; computed filing: hint.
- Received: 2026-07-14T07:43:00+01:00; merged: 2026-07-14T12:44:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The calendar invite for 9 January landed on 1 September. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41416

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-07-14T09:29:00+01:00; merged: 2026-07-14T14:01:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: The reminder for 1 November arrived for 11 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41417

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-07-14T14:21:00+02:00; merged: 2026-07-14T15:49:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Your software sent my mother to the dentist on the wrong day. She went anyway. They fitted her in. This is not a complaint about the dentist.
- Judgment: insufficient-detail. Wrong-day customer impact is clear, but no dates or reproduction identify the mechanism.
- Confidence: insufficient evidence for a confirmed root cause.
- Additional duplicate export rows: 0.

## R-41418

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-07-14T17:03:00+02:00; merged: 2026-07-14T21:39:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: The reminder for 1 December arrived for 12 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41419

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: email.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-07-15T17:57:00+02:00; merged: 2026-07-15T18:38:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Booked for 9 August. The invite says 8 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41420

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: email.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-07-15T21:14:00+02:00; merged: 2026-07-15T21:37:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Invite says Monday 9 November. We agreed Friday 11 September. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41421

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-15T22:49:00+02:00; merged: 2026-07-15T23:24:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: My client came on 7 August instead of 8 July. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41422

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-07-16T09:20:00+02:00; merged: 2026-07-16T11:45:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Invite says Wednesday 6 May. We agreed Friday 5 June. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41423

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-07-16T12:00:00+02:00; merged: 2026-07-16T16:33:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: We had two people show up on 10 August. They were booked for 8 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41424

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-07-16T20:03:00+02:00; merged: 2026-07-17T00:53:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Customer booked 4 August and got an invite for 8 April. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41425

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-07-16T22:17:00+02:00; merged: 2026-07-16T23:53:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Invite says Thursday 8 January. We agreed Saturday 1 August. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41427

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-07-18T18:09:00+02:00; merged: 2026-07-18T22:18:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: We had two people show up on 7 October. They were booked for 10 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41428

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: es-ES; intake tag: parser; computed filing: hint.
- Received: 2026-07-19T08:01:00+02:00; merged: 2026-07-19T11:13:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: My client came on 6 July instead of 7 June. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41429

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-07-19T15:45:00+02:00; merged: 2026-07-19T19:24:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Booked for 5 December. The invite says 12 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41430

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-07-19T22:06:00+02:00; merged: 2026-07-19T22:42:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Tuesday 1 September showed as Friday 9 January. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41431

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-20T12:27:00+01:00; merged: 2026-07-20T15:43:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Invite says Friday 10 April. We agreed Sunday 4 October. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41432

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-07-20T15:14:00+02:00; merged: 2026-07-20T16:02:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Monday 12 January showed as Tuesday 1 December. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41433

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-21T13:32:00+01:00; merged: 2026-07-21T15:19:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Customer booked 12 July and got an invite for 7 December. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41434

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-07-21T18:41:00+02:00; merged: 2026-07-21T21:10:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The reminder for 1 October arrived for 10 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41435

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-21T19:00:00+01:00; merged: 2026-07-22T00:47:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Customer booked 7 October and got an invite for 10 July. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41436

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-07-21T21:40:00+02:00; merged: 2026-07-22T00:01:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Customer booked 2 January and got an invite for 1 February. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41437

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-07-22T07:02:00+01:00; merged: 2026-07-22T10:59:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Wednesday 4 March showed as Friday 3 April. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41438

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-07-22T11:54:00+02:00; merged: 2026-07-22T16:24:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Wednesday 3 June showed as Friday 6 March. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41439

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-07-22T14:51:00+02:00; merged: 2026-07-22T15:38:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Booked for 3 January. The invite says 1 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41440

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-07-23T16:06:00+02:00; merged: 2026-07-23T18:10:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Booked for 1 November. The invite says 11 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41441

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-07-23T15:17:00+01:00; merged: 2026-07-23T17:49:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: The reminder for 6 April arrived for 4 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41442

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-07-24T10:15:00+02:00; merged: 2026-07-24T11:20:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Every booking we make shows the wrong day. 4 June is now 6 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41443

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-07-24T12:28:00+02:00; merged: 2026-07-24T16:23:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Second time this month: 10 May turned into 5 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41444

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-07-25T21:59:00+01:00; merged: 2026-07-26T00:11:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Customer booked 2 May and got an invite for 5 February. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41445

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-07-26T09:05:00+02:00; merged: 2026-07-26T10:34:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Second time this month: 10 March turned into 3 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41446

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-07-27T18:22:00+02:00; merged: 2026-07-27T20:30:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: We had two people show up on 6 May. They were booked for 5 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41447

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-07-27T21:45:00+02:00; merged: 2026-07-27T22:50:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: My client came on 6 February instead of 2 June. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41448

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-07-28T09:48:00+02:00; merged: 2026-07-28T12:42:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Tuesday 4 August showed as Wednesday 8 April. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41449

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: de-DE; intake tag: parser; computed filing: hint.
- Received: 2026-07-29T17:47:00+02:00; merged: 2026-07-29T22:38:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Thursday 8 January showed as Saturday 1 August. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41450

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-07-29T20:22:00+02:00; merged: 2026-07-30T01:08:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Sunday 5 April showed as Monday 4 May. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41451

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-07-30T11:32:00+02:00; merged: 2026-07-30T14:50:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: We had two people show up on 6 August. They were booked for 8 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41452

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-07-30T11:48:00+02:00; merged: 2026-07-30T14:34:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: We had two people show up on 2 October. They were booked for 10 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41453

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-07-30T15:44:00+02:00; merged: 2026-07-30T19:05:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Booked for 10 February. The invite says 2 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41454

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-07-31T16:31:00+02:00; merged: 2026-07-31T20:19:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: The calendar invite for 10 June landed on 6 October. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41455

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-07-31T17:03:00+02:00; merged: 2026-07-31T21:06:00+02:00; ticket: 4471.
- Subject: Booking shows a different day
- Report: My client came on 5 September instead of 9 May. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41456

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-07-31T17:35:00+02:00; merged: 2026-07-31T21:49:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: My client came on 6 January instead of 1 June. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41457

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-07-31T19:10:00+02:00; merged: 2026-07-31T20:30:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Customer booked 6 February and got an invite for 2 June. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41458

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-01T08:35:00+02:00; merged: 2026-08-01T11:44:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Customer booked 2 September and got an invite for 9 February. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41459

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-01T09:27:00+01:00; merged: 2026-08-01T11:21:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Second time this month: 9 June turned into 6 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41460

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: form.
- Browser locale: pt-PT; intake tag: parser; computed filing: hint.
- Received: 2026-08-01T13:05:00+01:00; merged: 2026-08-01T15:09:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Second time this month: 5 July turned into 7 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41461

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-08-01T16:27:00+02:00; merged: 2026-08-01T18:12:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: We had two people show up on 5 March. They were booked for 3 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41462

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-01T16:35:00+01:00; merged: 2026-08-01T21:29:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Every booking we make shows the wrong day. 8 April is now 4 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41463

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-08-02T07:37:00+01:00; merged: 2026-08-02T11:04:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Second time this month: 5 October turned into 10 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41464

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-08-02T14:27:00+02:00; merged: 2026-08-02T19:08:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Invite says Friday 4 December. We agreed Sunday 12 April. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41465

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-08-04T07:55:00+01:00; merged: 2026-08-04T09:39:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The calendar invite for 10 August landed on 8 October. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41466

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-08-04T22:44:00+02:00; merged: 2026-08-05T01:00:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: We had two people show up on 9 November. They were booked for 11 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41467

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: form.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-05T14:32:00+02:00; merged: 2026-08-05T15:41:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Saturday 10 January showed as Thursday 1 October. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41468

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-08-05T14:53:00+02:00; merged: 2026-08-05T18:30:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Booked for 6 May. The invite says 5 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41469

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-05T13:59:00+01:00; merged: 2026-08-05T18:37:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: The reminder for 1 August arrived for 8 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41470

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-08-06T11:37:00+01:00; merged: 2026-08-06T15:35:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: The calendar invite for 10 December landed on 12 October. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41471

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-08-06T18:29:00+01:00; merged: 2026-08-06T20:29:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Second time this month: 11 January turned into 1 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41472

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-08-09T20:37:00+02:00; merged: 2026-08-09T23:31:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Tuesday 9 June showed as Sunday 6 September. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41473

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-08-10T15:27:00+02:00; merged: 2026-08-10T20:20:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Wednesday 1 July showed as Wednesday 7 January. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41474

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-08-11T11:28:00+02:00; merged: 2026-08-11T16:09:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The calendar invite for 4 January landed on 1 April. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41475

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-08-11T19:53:00+02:00; merged: 2026-08-11T23:22:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Booked for 2 July. The invite says 7 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41476

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-08-12T09:16:00+02:00; merged: 2026-08-12T12:12:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Booked for 2 March. The invite says 3 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41477

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-08-12T22:58:00+02:00; merged: 2026-08-12T23:38:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Every booking we make shows the wrong day. 10 June is now 6 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41478

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-13T09:09:00+01:00; merged: 2026-08-13T13:41:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: We had two people show up on 3 June. They were booked for 6 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41479

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-08-14T09:32:00+02:00; merged: 2026-08-14T14:25:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Invite says Thursday 10 September. We agreed Friday 9 October. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41480

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-08-14T14:24:00+02:00; merged: 2026-08-14T15:01:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Monday 8 June showed as Thursday 6 August. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41481

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-08-14T15:28:00+02:00; merged: 2026-08-14T20:20:00+02:00; ticket: 4471.
- Subject: Booking shows a different day
- Report: We had two people show up on 12 January. They were booked for 1 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41482

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: email.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-08-14T14:59:00+01:00; merged: 2026-08-14T18:56:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The reminder for 1 November arrived for 11 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41483

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-08-14T17:27:00+02:00; merged: 2026-08-14T20:25:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The reminder for 2 May arrived for 5 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41484

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-08-14T17:28:00+02:00; merged: 2026-08-14T20:17:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Thursday 8 January showed as Saturday 1 August. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41485

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: form.
- Browser locale: de-DE; intake tag: parser; computed filing: hint.
- Received: 2026-08-14T21:55:00+02:00; merged: 2026-08-14T22:20:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: The reminder for 4 November arrived for 11 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41486

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-08-15T09:19:00+02:00; merged: 2026-08-15T10:14:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Customer booked 5 December and got an invite for 12 May. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41487

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-15T14:00:00+02:00; merged: 2026-08-15T15:55:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: The reminder for 10 September arrived for 9 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41488

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-08-17T16:50:00+02:00; merged: 2026-08-17T21:49:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Monday 6 July showed as Sunday 7 June. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41489

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-18T09:32:00+02:00; merged: 2026-08-18T13:37:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: The reminder for 5 April arrived for 4 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41490

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-08-18T10:36:00+02:00; merged: 2026-08-18T12:17:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: We had two people show up on 6 February. They were booked for 2 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41491

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-08-18T17:53:00+02:00; merged: 2026-08-18T18:22:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Booked for 12 October. The invite says 10 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41492

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-19T12:08:00+02:00; merged: 2026-08-19T16:11:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Second time this month: 12 November turned into 11 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41493

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-08-19T11:18:00+01:00; merged: 2026-08-19T17:16:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: The reminder for 2 July arrived for 7 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41494

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-08-19T16:11:00+02:00; merged: 2026-08-19T18:42:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Customer booked 3 November and got an invite for 11 March. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41495

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-08-19T15:12:00+01:00; merged: 2026-08-19T19:04:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Invite says Tuesday 10 February. We agreed Friday 2 October. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41496

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-08-19T18:17:00+02:00; merged: 2026-08-19T19:47:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Booked for 11 February. The invite says 2 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41497

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-08-19T22:37:00+02:00; merged: 2026-08-20T02:54:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Second time this month: 12 November turned into 11 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41498

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-08-20T14:10:00+02:00; merged: 2026-08-20T16:29:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Second time this month: 9 August turned into 8 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41499

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-08-20T16:53:00+02:00; merged: 2026-08-20T17:33:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Second time this month: 3 June turned into 6 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41500

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-08-20T22:53:00+02:00; merged: 2026-08-20T23:41:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Second time this month: 6 February turned into 2 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41501

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-08-21T08:13:00+02:00; merged: 2026-08-21T11:55:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Invite says Monday 7 September. We agreed Thursday 9 July. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41502

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-08-21T09:49:00+02:00; merged: 2026-08-21T09:59:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Thursday 5 March showed as Sunday 3 May. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41503

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-21T17:09:00+02:00; merged: 2026-08-21T18:38:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: My client came on 1 February instead of 2 January. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41504

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-08-21T19:24:00+02:00; merged: 2026-08-21T20:13:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Customer booked 9 November and got an invite for 11 September. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41505

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-08-22T12:08:00+02:00; merged: 2026-08-22T13:25:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Customer booked 9 June and got an invite for 6 September. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41506

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-08-22T14:21:00+02:00; merged: 2026-08-22T15:30:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Invite says Friday 8 May. We agreed Wednesday 5 August. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41508

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-08-22T18:19:00+01:00; merged: 2026-08-22T23:00:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Booked for 12 July. The invite says 7 December.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41509

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-08-24T15:09:00+02:00; merged: 2026-08-24T15:25:00+02:00; ticket: 4471.
- Subject: Booking shows a different day
- Report: Sunday 7 June showed as Monday 6 July. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41510

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-08-24T20:19:00+02:00; merged: 2026-08-24T21:54:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Customer booked 12 March and got an invite for 3 December. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41511

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-08-26T14:32:00+02:00; merged: 2026-08-26T18:54:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Every booking we make shows the wrong day. 5 October is now 10 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41512

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-08-26T21:51:00+02:00; merged: 2026-08-27T00:32:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Monday 8 June showed as Thursday 6 August. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41513

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-08-26T22:28:00+02:00; merged: 2026-08-27T00:01:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Second time this month: 2 September turned into 9 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41514

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-08-27T17:35:00+02:00; merged: 2026-08-27T19:49:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: I have started telling clients the date in words. "The second Tuesday." It works. Your product is now a phone call.
- Judgment: insufficient-detail. Using words and phone calls is a reported workaround and product impact, not proof of a specific parsing mechanism.
- Confidence: insufficient evidence for a confirmed root cause.
- Additional duplicate export rows: 0.

## R-41515

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-08-27T20:34:00+01:00; merged: 2026-08-28T02:32:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Booked for 6 April. The invite says 4 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41516

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-08-28T07:30:00+01:00; merged: 2026-08-28T08:56:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: My client came on 7 December instead of 12 July. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41517

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-08-29T09:25:00+02:00; merged: 2026-08-29T14:20:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Customer booked 10 September and got an invite for 9 October. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41518

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: app.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-08-29T18:47:00+02:00; merged: 2026-08-29T21:45:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: My client came on 7 November instead of 11 July. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41519

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-08-29T19:02:00+02:00; merged: 2026-08-29T23:24:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Invite says Friday 3 April. We agreed Wednesday 4 March. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41520

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-08-29T19:09:00+01:00; merged: 2026-08-30T00:14:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: The calendar invite for 7 November landed on 11 July. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41521

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-08-30T11:29:00+02:00; merged: 2026-08-30T15:39:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Customer booked 7 May and got an invite for 5 July. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41522

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-08-30T14:29:00+02:00; merged: 2026-08-30T17:41:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Customer booked 7 December and got an invite for 12 July. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41523

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-08-31T11:17:00+02:00; merged: 2026-08-31T16:08:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: My client came on 11 July instead of 7 November. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41524

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-08-31T13:30:00+02:00; merged: 2026-08-31T16:12:00+02:00; ticket: 4471.
- Subject: Booking shows a different day
- Report: The calendar invite for 11 October landed on 10 November. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41525

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-08-31T19:47:00+02:00; merged: 2026-08-31T23:25:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Customer booked 12 January and got an invite for 1 December. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41527

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-08-31T22:57:00+02:00; merged: 2026-09-01T03:49:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: We had two people show up on 9 October. They were booked for 10 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41528

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-09-01T08:30:00+02:00; merged: 2026-09-01T12:36:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Wednesday 7 January showed as Wednesday 1 July. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41529

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: form.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-09-01T20:06:00+02:00; merged: 2026-09-02T00:10:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Booked for 5 November. The invite says 11 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41530

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-01T20:56:00+02:00; merged: 2026-09-01T21:53:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: We had two people show up on 3 July. They were booked for 7 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41531

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-09-02T09:34:00+02:00; merged: 2026-09-02T12:37:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Customer booked 3 August and got an invite for 8 March. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41532

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: email.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-09-02T09:00:00+01:00; merged: 2026-09-02T13:04:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Booked for 5 August. The invite says 8 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41533

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-03T12:19:00+02:00; merged: 2026-09-03T14:39:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: The calendar invite for 10 September landed on 9 October. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41534

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-03T19:14:00+02:00; merged: 2026-09-03T20:42:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Saturday 5 December showed as Tuesday 12 May. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41535

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-09-03T20:34:00+01:00; merged: 2026-09-03T21:45:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Booked for 5 August. The invite says 8 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41536

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-09-04T13:31:00+02:00; merged: 2026-09-04T16:10:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: The reminder for 5 December arrived for 12 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41537

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-09-04T14:11:00+02:00; merged: 2026-09-04T15:08:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Saturday 10 January showed as Thursday 1 October. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41538

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-09-04T16:25:00+02:00; merged: 2026-09-04T19:14:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Invite says Wednesday 4 February. We agreed Thursday 2 April. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41539

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: es-ES; intake tag: parser; computed filing: hint.
- Received: 2026-09-04T16:31:00+02:00; merged: 2026-09-04T19:44:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: The reminder for 2 March arrived for 3 February.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41540

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-09-05T13:58:00+02:00; merged: 2026-09-05T15:57:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Invite says Tuesday 2 June. We agreed Friday 6 February. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41541

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-06T10:14:00+02:00; merged: 2026-09-06T12:15:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: My client came on 10 January instead of 1 October. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41542

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: form.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-09-06T14:06:00+02:00; merged: 2026-09-06T15:36:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The reminder for 11 May arrived for 5 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41543

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-09-06T15:04:00+02:00; merged: 2026-09-06T19:17:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Second time this month: 1 February turned into 2 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41544

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-06T17:10:00+01:00; merged: 2026-09-06T18:43:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Sunday 10 May showed as Monday 5 October. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41545

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-09-07T08:06:00+01:00; merged: 2026-09-07T11:42:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Wednesday 6 May showed as Friday 5 June. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41546

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-09-07T09:00:00+01:00; merged: 2026-09-07T11:35:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: The calendar invite for 1 December landed on 12 January. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41547

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-07T21:27:00+02:00; merged: 2026-09-08T01:17:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Every booking we make shows the wrong day. 8 November is now 11 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41548

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-09-08T08:51:00+01:00; merged: 2026-09-08T12:33:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: My client came on 9 December instead of 12 September. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41549

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-08T10:00:00+01:00; merged: 2026-09-08T15:59:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Friday 3 July showed as Saturday 7 March. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41550

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-08T17:55:00+02:00; merged: 2026-09-08T22:17:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Monday 7 September showed as Thursday 9 July. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41551

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-09-08T18:03:00+02:00; merged: 2026-09-08T22:44:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Second time this month: 9 June turned into 6 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41552

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-09-09T10:06:00+02:00; merged: 2026-09-09T13:15:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: We had two people show up on 5 January. They were booked for 1 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41553

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-09-09T14:21:00+01:00; merged: 2026-09-09T16:21:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Booked for 11 February. The invite says 2 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41554

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-09T17:50:00+02:00; merged: 2026-09-09T19:56:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Customer booked 8 February and got an invite for 2 August. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41555

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-10T15:00:00+02:00; merged: 2026-09-10T16:14:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: My client came on 1 November instead of 11 January. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41556

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-09-10T21:14:00+01:00; merged: 2026-09-10T22:39:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: Invite says Tuesday 10 February. We agreed Friday 2 October. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41557

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-09-11T09:38:00+02:00; merged: 2026-09-11T12:37:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: The calendar invite for 4 October landed on 10 April. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41558

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-11T13:08:00+02:00; merged: 2026-09-11T14:29:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: The reminder for 4 June arrived for 6 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41559

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-09-11T20:20:00+01:00; merged: 2026-09-12T01:56:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Invite says Sunday 2 August. We agreed Sunday 8 February. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41560

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-09-12T18:31:00+02:00; merged: 2026-09-12T19:45:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Second time this month: 10 August turned into 8 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41561

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: email.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-09-12T20:47:00+02:00; merged: 2026-09-13T01:44:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Customer booked 1 April and got an invite for 4 January. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41562

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-09-13T09:32:00+01:00; merged: 2026-09-13T14:59:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: We had two people show up on 9 October. They were booked for 10 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41563

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-09-13T12:54:00+02:00; merged: 2026-09-13T16:36:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Customer booked 1 September and got an invite for 9 January. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41564

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-13T17:15:00+02:00; merged: 2026-09-13T20:36:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Booked for 7 August. The invite says 8 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41565

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-14T16:40:00+01:00; merged: 2026-09-14T20:51:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Booked for 9 March. The invite says 3 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41566

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-14T17:31:00+01:00; merged: 2026-09-14T19:03:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Second time this month: 7 June turned into 6 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41567

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-15T15:52:00+01:00; merged: 2026-09-15T17:51:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Thursday 11 June showed as Friday 6 November. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41568

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-09-15T20:35:00+02:00; merged: 2026-09-15T21:02:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Booked for 4 December. The invite says 12 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41569

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-09-16T13:14:00+02:00; merged: 2026-09-16T16:48:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Booked for 10 February. The invite says 2 October.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41570

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-17T12:08:00+02:00; merged: 2026-09-17T12:56:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Second time this month: 1 June turned into 6 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41571

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-17T13:08:00+02:00; merged: 2026-09-17T13:32:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: The reminder for 4 November arrived for 11 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41572

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-09-17T17:17:00+02:00; merged: 2026-09-17T20:38:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: Invite says Sunday 5 July. We agreed Thursday 7 May. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41573

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: email.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-09-17T22:45:00+02:00; merged: 2026-09-18T00:06:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The reminder for 3 February arrived for 2 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41574

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-09-18T12:27:00+02:00; merged: 2026-09-18T15:54:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Wednesday 12 August showed as Tuesday 8 December. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41575

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-18T12:46:00+02:00; merged: 2026-09-18T14:41:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Thursday 2 July showed as Saturday 7 February. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41576

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-19T22:35:00+02:00; merged: 2026-09-19T23:55:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Customer booked 12 January and got an invite for 1 December. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41577

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-20T10:02:00+02:00; merged: 2026-09-20T11:35:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The calendar invite for 8 June landed on 6 August. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41578

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-20T19:01:00+02:00; merged: 2026-09-20T23:38:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Invite says Thursday 10 September. We agreed Friday 9 October. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41579

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: email.
- Browser locale: pt-PT; intake tag: parser; computed filing: parser.
- Received: 2026-09-20T18:49:00+01:00; merged: 2026-09-20T22:51:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: The calendar invite for 1 March landed on 3 January. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41580

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-21T08:29:00+01:00; merged: 2026-09-21T14:20:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Saturday 5 December showed as Tuesday 12 May. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41581

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: app.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-09-22T12:37:00+02:00; merged: 2026-09-22T15:54:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: My client came on 10 May instead of 5 October. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41582

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: form.
- Browser locale: pt-PT; intake tag: parser; computed filing: hint.
- Received: 2026-09-22T17:15:00+01:00; merged: 2026-09-22T20:56:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: The reminder for 7 March arrived for 3 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41583

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-22T19:21:00+02:00; merged: 2026-09-23T00:08:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: My client came on 2 May instead of 5 February. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41584

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: form.
- Browser locale: en-US; intake tag: hint; computed filing: hint.
- Received: 2026-09-22T20:01:00+02:00; merged: 2026-09-23T00:10:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Every booking we make shows the wrong day. 7 November is now 11 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Tenant uses booking-v3 with an MM/DD/YYYY hint while the tenant interpretation is day first. Hint classification is supported by supplied routing logic; a production reproduction is still needed.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41585

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-09-22T20:01:00+02:00; merged: 2026-09-22T21:49:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: My client came on 11 January instead of 1 November. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41586

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-09-23T10:51:00+02:00; merged: 2026-09-23T13:29:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: Booked for 6 May. The invite says 5 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41587

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: form.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-23T14:33:00+01:00; merged: 2026-09-23T19:16:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: My client came on 4 December instead of 12 April. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41588

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: app.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-09-23T22:11:00+02:00; merged: 2026-09-23T23:52:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The calendar invite for 5 March landed on 3 May. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41589

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-24T11:34:00+01:00; merged: 2026-09-24T13:29:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Every booking we make shows the wrong day. 4 August is now 8 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41590

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-09-24T12:40:00+01:00; merged: 2026-09-24T14:25:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Second time this month: 8 May turned into 5 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41591

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-24T19:45:00+01:00; merged: 2026-09-25T01:23:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: The reminder for 6 March arrived for 3 June.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41592

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-24T22:01:00+02:00; merged: 2026-09-24T23:49:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: My client came on 3 November instead of 11 March. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41593

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: email.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-09-25T08:37:00+02:00; merged: 2026-09-25T11:58:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Saturday 3 January showed as Sunday 1 March. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41594

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: email.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-09-25T12:58:00+02:00; merged: 2026-09-25T15:27:00+02:00; ticket: 4471.
- Subject: Dates mixed up
- Report: Customer booked 4 June and got an invite for 6 April. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41595

- Tenant: copper.studio; configured locale: es-ES; form: booking-v3; channel: email.
- Browser locale: es-ES; intake tag: parser; computed filing: parser.
- Received: 2026-09-25T16:43:00+02:00; merged: 2026-09-25T17:24:00+02:00; ticket: 4471.
- Subject: Booking shows a different day
- Report: The calendar invite for 4 August landed on 8 April. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41596

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-26T09:05:00+02:00; merged: 2026-09-26T11:11:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Invite says Sunday 8 November. We agreed Tuesday 11 August. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41597

- Tenant: pale.harbour; configured locale: pt-PT; form: booking-v3; channel: app.
- Browser locale: en-US; intake tag: hint; computed filing: parser.
- Received: 2026-09-26T09:25:00+01:00; merged: 2026-09-26T13:13:00+02:00; ticket: 4471.
- Subject: Reminder went out on the wrong day
- Report: The calendar invite for 10 April landed on 4 October. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41598

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-09-26T11:38:00+02:00; merged: 2026-09-26T16:27:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Invite says Tuesday 1 December. We agreed Monday 12 January. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41599

- Tenant: long.table; configured locale: it-IT; form: booking-v2; channel: app.
- Browser locale: it-IT; intake tag: parser; computed filing: parser.
- Received: 2026-09-26T16:12:00+02:00; merged: 2026-09-26T17:09:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: The calendar invite for 8 July landed on 7 August. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41600

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-09-27T13:57:00+02:00; merged: 2026-09-27T18:27:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: My client came on 9 March instead of 3 September. We sorted it out.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41601

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-09-27T13:22:00+01:00; merged: 2026-09-27T15:08:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: We had two people show up on 11 June. They were booked for 6 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41602

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: app.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-27T15:53:00+02:00; merged: 2026-09-27T17:16:00+02:00; ticket: 4471.
- Subject: Invite came on the wrong day
- Report: The reminder for 11 March arrived for 3 November.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41603

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-27T19:00:00+01:00; merged: 2026-09-28T00:23:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: The calendar invite for 6 March landed on 3 June. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41604

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-09-27T22:20:00+02:00; merged: 2026-09-28T02:52:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: Booked for 4 December. The invite says 12 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41605

- Tenant: morrow.tax; configured locale: fr-FR; form: booking-v2; channel: app.
- Browser locale: fr-FR; intake tag: parser; computed filing: parser.
- Received: 2026-09-28T09:39:00+02:00; merged: 2026-09-28T11:56:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Customer booked 5 August and got an invite for 8 May. Please look at this.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41606

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-09-29T10:46:00+02:00; merged: 2026-09-29T14:16:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Booked for 3 July. The invite says 7 March.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41608

- Tenant: nine.lanterns; configured locale: pl-PL; form: booking-v2; channel: email.
- Browser locale: pl-PL; intake tag: parser; computed filing: parser.
- Received: 2026-09-30T19:43:00+02:00; merged: 2026-09-30T22:00:00+02:00; ticket: 4471.
- Subject: Calendar invite is wrong
- Report: We had two people show up on 8 September. They were booked for 9 August.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 1.

## R-41609

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-10-01T09:03:00+02:00; merged: 2026-10-01T13:28:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: The calendar invite for 10 November landed on 11 October. Nobody here touched it.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41610

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-10-01T13:56:00+02:00; merged: 2026-10-01T14:23:00+02:00; ticket: 4471.
- Subject: Client turned up on the wrong day
- Report: Booked for 4 July. The invite says 7 April.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41611

- Tenant: kettle.books; configured locale: nl-NL; form: booking-v2; channel: app.
- Browser locale: nl-NL; intake tag: parser; computed filing: parser.
- Received: 2026-10-01T14:30:00+02:00; merged: 2026-10-01T18:39:00+02:00; ticket: 4471.
- Subject: Wrong date again
- Report: Booked for 1 April. The invite says 4 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41612

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: app.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-10-01T15:38:00+01:00; merged: 2026-10-01T20:22:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Invite says Friday 3 April. We agreed Wednesday 4 March. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41613

- Tenant: alder.physio; configured locale: de-DE; form: booking-v3; channel: app.
- Browser locale: de-DE; intake tag: parser; computed filing: parser.
- Received: 2026-10-01T17:50:00+02:00; merged: 2026-10-01T19:21:00+02:00; ticket: 4471.
- Subject: Month and day swapped?
- Report: We had two people show up on 1 February. They were booked for 2 January.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41614

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-10-02T08:45:00+02:00; merged: 2026-10-02T10:27:00+02:00; ticket: 4471.
- Subject: Booking on the wrong date
- Report: Thursday 8 January showed as Saturday 1 August. I moved it myself.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41615

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-10-02T12:16:00+01:00; merged: 2026-10-02T16:44:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Our October bookings came through for January. We are a heating company. January is when we need them. Thank you, actually.
- Judgment: insufficient-detail. October-to-January is compatible with a swap for certain day numbers, but absent day numbers prevent verification.
- Confidence: insufficient evidence for a confirmed root cause.
- Additional duplicate export rows: 0.

## R-41616

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: email.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-10-02T18:03:00+01:00; merged: 2026-10-02T19:27:00+02:00; ticket: 4471.
- Subject: Wrong day on the invite
- Report: Invite says Friday 7 August. We agreed Wednesday 8 July. Which one do I trust?
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41617

- Tenant: stone.and.sons; configured locale: en-IE; form: booking-v2; channel: form.
- Browser locale: en-IE; intake tag: parser; computed filing: parser.
- Received: 2026-10-03T16:42:00+01:00; merged: 2026-10-03T18:08:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Every booking we make shows the wrong day. 5 April is now 4 May.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41618

- Tenant: ridge.clinic; configured locale: da-DK; form: booking-v2; channel: email.
- Browser locale: da-DK; intake tag: parser; computed filing: parser.
- Received: 2026-10-03T20:42:00+02:00; merged: 2026-10-03T21:05:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Every booking we make shows the wrong day. 7 May is now 5 July.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41619

- Tenant: harbour.dental; configured locale: en-GB; form: booking-v2; channel: email.
- Browser locale: en-GB; intake tag: parser; computed filing: parser.
- Received: 2026-10-04T20:30:00+01:00; merged: 2026-10-04T21:58:00+02:00; ticket: 4471.
- Subject: Appointment moved by itself
- Report: Booked for 9 December. The invite says 12 September.
- Judgment: swap-compatible. Body explicitly describes reversed day/month values. Day-first tenant and channel/form route match the supplied parser classification. Compatible evidence, not independently reproduced production causality.
- Confidence: high that the text describes a transposition; mechanism inferred from configuration.
- Additional duplicate export rows: 0.

## R-41620

- Tenant: lantern.row; configured locale: cs-CZ; form: booking-v2; channel: email.
- Browser locale: cs-CZ; intake tag: parser; computed filing: parser.
- Received: 2026-10-04T21:49:00+02:00; merged: 2026-10-04T21:58:00+02:00; ticket: 4471.
- Subject: Date is wrong
- Report: Tuesday 6 October showed as Monday. I moved it myself. I have stopped reporting these but my colleague says it helps you.
- Judgment: unresolved-symptom. October 6 shown as Monday is a weekday/day-shift symptom, not an explicit transposition. Need the full displayed date and original calendar event.
- Confidence: insufficient evidence for a confirmed root cause.
- Additional duplicate export rows: 0.

