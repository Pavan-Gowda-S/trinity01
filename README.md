# CyberPredict AI

TRINITY — Predictive Cybercrime Intelligence Platform

Build a complete, polished, functional prototype web application called TRINITY from scratch.

This is an SIH 2026 prototype for the problem statement:

“Development of a Predictive Analytics Framework for Cybercrime Complaints to Forecast Likely Cash Withdrawal Locations in Advance, Enabling Generation of Actionable Intelligence for Timely and Proactive Cybercrime Intervention.”

TRINITY is NOT a replacement for NCRP, CFCFRMS, banks, or police systems.

It is a predictive intelligence layer that conceptually integrates with the existing ecosystem and analyzes authorized/synthetic case data to predict likely cash-out locations and time windows.

IMPORTANT:

- This is a prototype/demo.
- Use completely synthetic/mock data.
- Do not claim actual access to NCRP, I4C, CFCFRMS, bank APIs, police databases, or real financial data.
- Simulate integrations through internal mock APIs/data flows.
- The application must actually work interactively using the demo data.
- Do not create unnecessary features outside this specification.
- Do not overload the UI.
- Prioritize visual polish, clarity, realistic workflows, and demonstrable functionality.

---

1. CORE CONCEPT

TRINITY answers two questions for an authorized cybercrime investigator:

WHERE is the money most likely to be cashed out?

WHEN is the cash-out most likely to happen?

The system connects multiple signals:

1. Cybercrime case
2. Transaction/money-flow relationships
3. Connected/split transaction patterns
4. Historical similar cases
5. Time patterns
6. Geographic relationships
7. ATM locations
8. ATM clustering
9. Risk scoring
10. Prediction confidence

Then it produces:

- Predicted ATM cluster
- Predicted location/zone
- Predicted time window
- Risk score
- Confidence score
- Explanation of why the prediction was made
- Nearest police station
- Actionable alert

The central principle is:

Evidence → Analysis → Prediction → Explanation → Action

---

2. VISUAL IDENTITY

The UI must feel:

- Premium
- Minimal
- Futuristic
- Intelligent
- Professional
- Cybersecurity-oriented
- Government-grade
- Clean
- Calm

DO NOT create an excessively cyberpunk interface.

DO NOT fill the screen with glowing cards, excessive neon, huge charts, or unnecessary animations.

The interface must have plenty of breathing space.

TRINITY BACKGROUND IDENTITY

This is extremely important.

Do NOT place “TRINITY” as a large logo at the top.

Instead:

Use the word TRINITY as a huge, subtle background element across the application.

It should span behind the main interface/content.

The word should be:

- Very large
- Thin/elegant typography
- Dark/subtle green
- Slight green glow
- Low opacity
- Fixed or slowly floating in the background

Around and slightly over the letters, create a small number of tiny green particles.

The particles should gently move/orbit like atoms.

Animation must be:

- Very slow
- Smooth
- Subtle
- Non-distracting

The TRINITY background should feel like the atmosphere/identity of the entire application, not like a normal logo.

The foreground UI must remain highly readable above it.

---

3. COLOR DIRECTION

Primary environment:

- Very dark background
- Near-black / deep charcoal
- Subtle green accents
- White/light gray text

Risk colors:

- High = red
- Medium = amber/orange
- Low = green

Use colors carefully.

Do not make every element glow.

Green should be the primary TRINITY identity.

Use subtle glassmorphism only where it improves hierarchy.

---

4. APPLICATION STRUCTURE

Create these four conceptual portals/interfaces:

Portal 1 — NCRP Citizen Portal

Purpose:
Citizen reports cybercrime.

User:
Citizen.

Tabs:

- Home
- Register Complaint
- My Complaints
- Track Complaint
- Notifications
- Profile

Features:

Register Complaint

Simple prototype form containing only necessary demo fields.

After submission:

Show:

“Complaint successfully registered.”

Generate a mock complaint ID such as:

"NCRP-2026-001"

The submitted complaint should become available to the internal TRINITY demo workflow.

My Complaints

Show submitted synthetic complaints.

Track Complaint

Show:

- Complaint ID
- Status
- Date
- Current stage

Do not build a huge citizen portal.

Keep this portal simple because the main innovation is TRINITY.

---

5. PORTAL 2 — TRINITY PREDICTIVE INTELLIGENCE PORTAL

This is the MAIN portal.

User:
Authorized Police / State & UT LEA investigator.

This should receive most of the design attention.

Navigation:

- Dashboard
- Cases
- AI Predictions
- Risk Heatmap
- Alerts
- Reports
- Audit Log

---

6. TRINITY DASHBOARD

The dashboard should answer:

“What is happening right now?”

Do not overload it.

Show a clean top-level overview:

Summary cards

- High Risk Cases
- Medium Risk Cases
- Low Risk Cases
- Active Alerts

Use realistic synthetic numbers.

Main sections

1. Risk Heatmap
2. Priority Alerts
3. Top Predicted Cash-out Zones
4. Recent Cases
5. System Activity

Keep each section compact.

---

7. RISK HEATMAP

Create an interactive map using synthetic Bengaluru demo data.

The map should show:

- Risk zones
- ATM clusters
- Police stations
- High-risk areas

Use different risk intensities.

The map should be functional:

- Zoom
- Pan
- Click cluster
- Open cluster details

Do not use real sensitive information.

Synthetic locations are fine.

---

8. CASES PAGE

Create a clean case table.

Columns:

- Case ID
- Fraud Amount
- Risk
- Predicted Zone
- Predicted Time
- Status
- Last Updated

Example:

"NCRP-001"

"₹85,000"

"91/100"

"Cluster 07"

"6:40–7:30 PM"

"Active"

Clicking a case must open the Case Intelligence page.

This is one of the most important interactions in the entire prototype.

---

9. CASE INTELLIGENCE PAGE

When an investigator clicks a case, show a detailed intelligence workspace.

Do NOT simply show a normal case-details page.

It must visually explain how TRINITY connected the dots.

Structure:

A. Case Overview

Show:

- Case ID
- Fraud amount
- Complaint time
- Crime category
- Current status

---

10. MONEY FLOW GRAPH

Create an interactive visual relationship graph.

Example:

Victim

↓

Account A

↓

Account B

↙ ↓ ↘

Mule A / Mule B / Mule C

↓

Potential cash-out locations

Use synthetic/masked identifiers.

Example:

"ACC-AX21"

"MULE-B104"

Never use real bank account numbers.

The graph should visually demonstrate that a suspicious amount may move through multiple connected accounts.

The purpose is to show:

TRINITY connects financial dots before predicting location.

The graph should support:

- Click node
- Highlight connected nodes
- Show amount
- Show timestamp
- Show relationship
- Focus/reset graph

---

11. SPLIT TRANSACTION VISUALIZATION

For selected cases, demonstrate a simple example of funds being distributed across multiple connected accounts.

Example:

₹1,00,000

↓

Account A

↓

₹40,000 → Account B

₹35,000 → Account C

₹25,000 → Account D

Then show those accounts connected to different potential cash-out clusters.

Do not present this as instructions for criminals.

Present it purely as:

“Suspicious money-flow pattern detected.”

---

12. AI PREDICTION ENGINE

The prototype must simulate a believable predictive analytics pipeline.

The visible logic should be:

Case received

↓

Money-flow analyzed

↓

Connected accounts identified

↓

Historical patterns matched

↓

Time pattern analyzed

↓

Nearby ATM locations identified

↓

ATM locations grouped into clusters

↓

Risk calculated

↓

Top clusters ranked

↓

WHERE + WHEN prediction generated

↓

Nearest police station identified

↓

Alert generated

The system should make this process visually understandable.

---

13. ATM CLUSTER PREDICTION

Do NOT make the prototype claim:

“ATM 27 will definitely be used.”

Instead predict ATM clusters / high-risk zones.

Example:

Cluster 07

- 6 ATMs
- Kengeri
- Risk: 91/100
- Confidence: 86%
- Predicted window: 6:40–7:30 PM

Cluster 12

- 4 ATMs
- Rajajinagar
- Risk: 76/100
- Confidence: 72%

Cluster 04

- 5 ATMs
- Electronic City
- Risk: 63/100
- Confidence: 65%

Display them ranked.

Clicking a cluster should open detailed cluster information.

---

14. CLUSTER DETAIL

When an investigator clicks a cluster:

Show:

- Cluster ID
- Area
- Number of ATMs
- Risk score
- Confidence
- Predicted time
- ATMs inside cluster
- Map
- Historical activity
- Recent activity
- Similar cases
- Geographic relationship
- Nearest police station

Example:

ATM Cluster 07

Risk:
"91/100"

Confidence:
"86%"

Prediction:
"6:40 PM – 7:30 PM"

Nearest Police Station:
"Synthetic Kengeri Police Station"

Keep this synthetic.

---

15. EXPLAINABLE AI

This is a major feature.

Every prediction must show:

WHY THIS CLUSTER?

Example:

Historical pattern — +25

Recent activity — +20

Time similarity — +15

Geographic proximity — +18

Similar cases — +13

---

Final Risk — 91/100

Use a clean visual representation.

Do not simply say:

“AI predicted Cluster 07.”

The system must communicate:

“Here is the evidence contributing to the prediction.”

The numbers above are illustrative demo scoring values, not claimed scientific weights.

---

16. WHERE + WHEN PREDICTION

Every high-confidence case should clearly display:

WHERE

"ATM Cluster 07 — Kengeri"

WHEN

"6:40 PM – 7:30 PM"

RISK

"91/100"

CONFIDENCE

"86%"

NEAREST POLICE STATION

"Synthetic Kengeri Police Station"

Use strong visual hierarchy.

This should be one of the most visually impressive parts of the application.

---

17. PREDICTION TIMELINE

For every selected case, show a timeline:

10:05 — Complaint received

↓

10:06 — Transaction analyzed

↓

10:07 — Connected accounts identified

↓

10:08 — Historical patterns matched

↓

10:09 — ATM clusters generated

↓

10:09 — Cluster 07 ranked highest

↓

10:09 — Time window predicted

↓

10:10 — Alert generated

The timeline should animate subtly when the demo workflow is running.

---

18. AI PREDICTIONS PAGE

Show all active predictions.

Columns/cards:

- Case ID
- Predicted cluster
- Area
- Risk
- Confidence
- Time window
- Status

Filters:

- High / Medium / Low
- Active / Monitoring / Resolved

Clicking one opens its Case Intelligence page.

---

19. RISK HEATMAP PAGE

Create a dedicated full-page GIS view.

Features:

- Map
- Risk zones
- ATM clusters
- Police stations
- Cluster ranking
- Risk filter
- Time filter

Click a hotspot.

Show:

- Cluster ID
- Risk
- Confidence
- Predicted time
- Number of ATMs
- Nearest police station

---

20. ALERTS PAGE

Show actionable intelligence alerts.

Example:

HIGH PRIORITY

"NCRP-001"

Potential cash-out activity predicted.

Location:
"ATM Cluster 07"

Time:
"6:40–7:30 PM"

Risk:
"91/100"

Confidence:
"86%"

Actions:

- View Case
- Acknowledge
- Mark Monitoring
- Generate Report

Do not create functionality that directly dispatches real police teams.

This is only a prototype.

---

21. REPORTS PAGE

Allow the investigator to generate/view a synthetic intelligence report.

Report should contain:

- Case ID
- Risk level
- Money-flow summary
- Predicted cluster
- Predicted time
- Risk factors
- Confidence
- Similar cases
- Nearest police station
- Alert status
- Timestamp

Provide a polished report preview.

If possible, allow download as PDF using client-side/demo generation.

---

22. AUDIT LOG

Show system activity:

Examples:

- Complaint received
- Case analyzed
- Prediction generated
- Alert created
- Investigator opened case
- Alert acknowledged
- Report generated

Each entry:

- Time
- User role
- Action
- Case ID

This demonstrates accountability.

---

23. PORTAL 3 — BANK / FINANCIAL INSTITUTION

Create a separate role-based portal.

User:
Authorized bank/FI personnel.

Navigation:

- Dashboard
- Alerts
- ATM/Location Risk
- Relevant Transactions
- Linked Cases
- Action Status
- Alert History

The bank should NOT see all police intelligence.

Only show information relevant to the bank/FI.

Example alert:

“High-risk cash-out prediction associated with your network.”

Show:

- Case reference
- Risk
- Predicted zone
- Time window
- Relevant ATM/network information
- Alert status

Use synthetic data.

---

24. PORTAL 4 — I4C INTELLIGENCE DASHBOARD

User:
Authorized I4C analyst/officer.

Navigation:

- National Dashboard
- India Risk Map
- Cross-State Intelligence
- Analytics & Trends
- Priority Alerts
- Cases
- Reports
- Audit & Access

This portal should provide a broader national/cross-jurisdiction view.

Use synthetic data.

Show:

- State-level risk
- Emerging hotspots
- Cross-state case relationships
- Alert volume
- Risk trends
- High-priority clusters

Do not create unnecessary operational controls.

---

25. ROLE-BASED ACCESS

Implement simple role-based demo login.

Roles:

Citizen

Can access:

- Citizen portal
- Own complaints only

Police / LEA

Can access:

- Predictive Intelligence Portal
- Authorized demo cases
- Predictions
- Heatmap
- Alerts
- Reports
- Audit logs

Bank/FI

Can access:

- Bank portal
- Relevant alerts/cases only

I4C

Can access:

- I4C dashboard
- Broader synthetic intelligence data

Admin

Can access:

- Basic user/role management
- System configuration
- Audit logs

The prototype must visibly demonstrate that different roles see different information.

---

26. DEMO DATA

Keep data small.

Do NOT create a huge database.

Use a believable synthetic dataset such as:

- 8–10 cybercrime cases
- 15–20 synthetic accounts
- 20–30 synthetic transactions
- 15–20 ATM locations
- 5–6 ATM clusters
- 5–8 historical cases
- 5–8 synthetic police stations
- 10–15 alerts

Make relationships internally consistent.

Use Bengaluru as the primary demo geography.

Use fictional/synthetic identifiers.

Do not use real personal data.

---

27. MAKE THE PROTOTYPE ACTUALLY WORK

This must not be a collection of static screens.

Implement working interactions.

Examples:

Demo flow 1

Login as Police.

↓

Dashboard loads.

↓

Click Cases.

↓

Open "NCRP-001".

↓

Case Intelligence page opens.

↓

Money-flow graph appears.

↓

Prediction pipeline can be played.

↓

ATM clusters appear.

↓

Cluster 07 becomes the top-ranked prediction.

↓

Map focuses on Cluster 07.

↓

Prediction details appear.

↓

Nearest police station appears.

↓

Alert can be acknowledged.

↓

Audit log updates.

---

28. LIVE DEMO SIMULATION

Add a subtle button:

“Run Prediction”

When clicked, simulate the backend pipeline.

Show steps progressively:

1. Receiving case
2. Analyzing money flow
3. Finding connected accounts
4. Matching historical patterns
5. Analyzing geographic patterns
6. Clustering ATM locations
7. Calculating risk
8. Ranking clusters
9. Generating prediction
10. Creating alert

At completion:

Show:

Prediction generated

Cluster 07

Risk 91/100

Confidence 86%

6:40–7:30 PM

Nearest Police Station

Then add the alert to the Alerts page.

This makes the prototype feel like a functioning predictive system rather than static mock screens.

---

29. MOCK BACKEND ARCHITECTURE

Use a clean prototype architecture.

Suggested:

Frontend:

- React
- TypeScript
- Tailwind CSS
- Modern component library if useful

Backend/data:

- Supabase or another simple backend supported by Lovable
- PostgreSQL-style data model

Create mock services/functions for:

- Complaint ingestion
- Transaction analysis
- Money-flow analysis
- Historical matching
- ATM clustering
- Risk scoring
- Prediction generation
- Alert generation

Keep the implementation simple.

Do not build real government integrations.

---

30. DATA MODEL

Use simple tables/entities:

complaints

- id
- case_id
- amount
- crime_type
- timestamp
- status

transactions

- id
- case_id
- from_account
- to_account
- amount
- timestamp

accounts

- id
- masked_id
- type

atms

- id
- cluster_id
- latitude
- longitude
- area

atm_clusters

- id
- area
- risk_score
- confidence
- predicted_time

historical_cases

- id
- area
- amount
- timestamp
- cluster_id

predictions

- id
- case_id
- cluster_id
- risk_score
- confidence
- predicted_time
- explanation

alerts

- id
- case_id
- cluster_id
- priority
- status
- created_at

police_stations

- id
- name
- latitude
- longitude
- area

audit_logs

- id
- user_role
- action
- case_id
- timestamp

Do not add dozens of unnecessary database tables.

---

31. PREDICTION LOGIC

The prototype should use a transparent demo scoring engine.

For each ATM cluster, calculate a synthetic risk score based on:

- Historical activity
- Recent activity
- Time similarity
- Geographic proximity
- Similar-case similarity

Example conceptual logic:

Risk Score =
Historical Pattern
+
Recent Activity
+
Time Similarity
+
Geographic Proximity
+
Similar Cases

Normalize the result to 0–100.

The exact weights can be configured in code.

The UI must explain the factors.

Important:

Do not falsely claim that this prototype has been trained on real government cybercrime data.

Label the model clearly as:

Prototype Predictive Model

---

32. HANDLING LOW CONFIDENCE

The system must not always pretend to know the answer.

If evidence is insufficient:

Show:

LOW CONFIDENCE

“Insufficient evidence for a reliable location prediction. Manual investigation recommended.”

This improves credibility.

---

33. SECURITY / PRIVACY UI

Include small but visible indicators such as:

- Authorized Access
- Synthetic Demo Data
- Role-based access
- Activity logged

Do not expose:

- Real account numbers
- Aadhaar
- Real victim identities
- Real financial credentials
- Sensitive personal information

Use masked identifiers everywhere.

---

34. RESPONSIVE DESIGN

The main investigator dashboard should be optimized for desktop/laptop because this is a government operations-style prototype.

Still make it responsive enough for tablets.

Do not prioritize mobile over desktop.

---

35. NAVIGATION

Use a clean left-side navigation for internal portals.

The active section should be obvious.

Keep navigation minimal.

Do not add unnecessary menu items.

---

36. ANIMATIONS

Animations should be subtle.

Use:

- Smooth page transitions
- Gentle particle movement
- Soft hover effects
- Graph node highlighting
- Prediction pipeline progression
- Map transitions
- Alert appearance

Avoid:

- Excessive bouncing
- Constant glowing
- Fast particle movement
- Distracting 3D effects
- Excessive loading animations

The application should feel advanced because of its intelligence and polish, not because of excessive visual effects.

---

37. IMPORTANT TRINITY BACKGROUND IMPLEMENTATION

The large TRINITY text must remain part of the visual identity across the entire application.

It should look approximately like:

                T R I N I T Y

      ·        ·       ·       ·

    ·     subtle green particles      ·

             MAIN APPLICATION
    ┌─────────────────────────────┐
    │ Dashboard / Case / Map      │
    │                             │
    └─────────────────────────────┘

The text must be behind the content.

It should NOT become:

- Navbar logo
- Header title
- Large card
- Hero section
- Top-center branding

It is the background identity of TRINITY.

---

38. LANDING / LOGIN

Create a minimal login screen.

Dark background.

Huge subtle TRINITY text behind everything.

Small floating green particles.

Centered login card.

Title:

TRINITY

Subtitle:

Predictive Cybercrime Intelligence

Demo role selector:

- Citizen
- Police / LEA
- Bank / FI
- I4C
- Admin

For prototype purposes, selecting a role and clicking login should take the user directly to the appropriate portal.

Do not require real authentication.

Clearly mark it as:

Prototype Environment

---

39. DESIGN PRINCIPLE

The entire application should follow:

LESS BUT BETTER

Do not try to show every possible piece of information simultaneously.

Use progressive disclosure.

Dashboard:
Overview

Case:
Investigation

Prediction:
WHERE + WHEN

Explanation:
WHY

Alert:
ACTION

Report:
DOCUMENTATION

---

40. FINAL DEMO EXPERIENCE

The ideal jury demonstration should be:

1. Login as Police/LEA.
2

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://trinity01.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c803cf88-dd22-499f-abae-58585d885d37).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
