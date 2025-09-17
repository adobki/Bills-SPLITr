# **Bills SPLITr**

## Tagline
"Split bills quickly, fairly, and effortlessly"

## Description
Bills SPLITr is a user-friendly mobile app designed to simplify shared expenses. Whether you’re dining out with friends, splitting rent with roommates, or managing group activities, this app calculates each person’s share instantly. It also automatically factors in taxes and tips if included, allowing for accurate, stress-free bill splitting. The interface is clean and intuitive, making it accessible even to users with minimal tech experience.
<!-- Splitr is a simple bill splitting calculator wep app. It allows a group of people to easily calculate the split/ratios for a shared bill/expenses. -->

## Key Features
1. **Easy Bill Entry:** Input total bill amount, number of people, and optional tip percentage.
2. **Automatic Split Calculation:** Quickly calculates how much each person owes.
3. **Tax & Tip Integration:** Includes local taxes and optional tip percentages for accurate totals.
4. **Itemized Splits:** Optionally assign individual items to specific people for precise sharing.
5. **Simple, Intuitive UI:** Minimalist design for fast, frictionless usage.
6. **Results Display:** Clean, colorful summary (list + chart). e.g. `“Anna owes Ben $12.50.”`
7. **Share/Export:** Generate a short shareable link OR copy results as text.

### Extra Features (if time allows)
- Currency selection.
- Save past bills to history.
- Basic authentication (optional).
- Nice-to-have: QR code share.

## Use Case/Impact Highlights
- Helps friends avoid awkward payment conversations.
- Saves time calculating splits manually.
- Ensures fair contributions for group expenses.
- Can be a handy tool for events, dining, or shared living situations.

## Demo feel
At a dinner, someone opens their phone:
- “Food: $70” → assign people.
- “Drinks: $30” → assign people.
- “Tip: $20” → split evenly.
Hit calculate → neat, colorful results: “Anna owes Ben $12.50.” A big “Share link” button sends a summary to everyone. It feels like a group-friendship saver tool. Clean, instant, practical.

## Week Breakdown
- **Day 1:** Project setup, UI wireframes, basic bill input form.
- **Day 2:** Logic for splitting bills (per item & evenly).
- **Day 3:** Results display (summary list + chart).
- **Day 4:** Share link/text export.
- **Day 5:** UI/UX polish (animations, responsive design).
- **Day 6:** Final testing, deploy, write project case study.

## Technology Stack
The project uses the following technologies:
- Language: TypeScript
- Main Framework: React (with Vite)
- Database and Authentication: Supabase
- Styling: Tailwind CSS with shadcn/ui components, Recharts for pie/bar charts in Bill Details, and Framer Motion for smooth transitions (modals, item lists, etc.)
- State and Data Handling: Supabase (Primary Data layer) - Postgres DB for bills, items, and participants; realtime subscriptions if we implement collaborative editing later; Supabase client handles data fetching and mutation directly in React. React Query (TanStack Query) for data fetching + caching - Handles async state (loading, error, stale vs fresh); pairs perfectly with Supabase SDK.
- Testing: Jest + React Testing Library for unit/component testing, and Playwright (optional) for end-to-end/integration testing for flows like “create bill → add items → share.”

## APP DEVELOPMENT: Phase 1
These are the features/pages/app screens to be implemented first as the base/foundation to build the more advanced features on subsequently. 
<!-- ### Local/browser session management (@localStorage) -->

### Screen 1: Welcome/Bills List
Acts as the main hub where users can view all existing bills or create new ones.

**Description:**
- Displays a list of bills with metadata (bill name, total, creation date).
- First-time users see an onboarding/welcome prompt.
- Supports two states: empty (no bills yet) and populated (existing bills).

**Core actions:**
- Create new bill (primary CTA).
- View bill details.
- Return here after editing, deleting, or creating a bill.

**Wireframe Diagram:**
```
--------------------------------------------------
|   Bills SPLITr                                 |
--------------------------------------------------
|   [ + Create New Bill ]                        |
--------------------------------------------------

-- If no bills yet (first visit):
|   "Welcome! Start by creating your first bill."|
--------------------------------------------------

-- If bills exist:
|   Bills:                                       |
|   -------------------------------------------  |
|   Friday Dinner     | Total: $120   [ View ]   |
|   Movie Night       | Total: $45    [ View ]   |
|   Trip Snacks       | Total: $89    [ View ]   |
|   -------------------------------------------  |
|   [ + Create New Bill ]                        |
--------------------------------------------------
```

### Screen 2: Add Bill
Allows users to create or edit a bill by entering items, costs, and optional assignments.

**Description:**
- Bill name (optional, defaults to timestamp).
- Itemized list of entries (name, cost, assigned people).
- Supports adding multiple items dynamically.
- Optional “Add People” button → opens modal for participant entry.
- Primary CTA: Save Bill → persists data and redirects to Bill Details.
- Autosave/staging behavior (optional stretch).

**Wireframe Diagram:**
```
----------------------------------------------------
|   Add Bill                                       |
----------------------------------------------------
|   Bill Name: [ Friday Dinner          ]          |
|   Number of People: (manual input/total People)  |
----------------------------------------------------
|   Items:                                         |
|   ---------------------------------------------  |
|   Item Name    | Cost  | Assigned To             |
|   Pizza        | $40   | Alice, Bob              |
|   Drinks       | $20   | (None) -> split all     |
|   Salad        | $15   | Bob                     |
|   ---------------------------------------------  |
|   [ + Add Item ]                                 |
----------------------------------------------------
|   [ Add People ] (modal trigger, optional)       |
----------------------------------------------------
|   [ Save Bill ]                                  |
----------------------------------------------------
```

#### Screen 2a: Add People Modal
Enables users to define participants to whom costs can be assigned.

Description:
- Modal overlay triggered from Add Bill.
- Input field for name + add action.
- Displays current participants list.
- Non-blocking → user can skip and still save bill (default: equal split).
- Data persists only within the parent bill context.

**Wireframe Diagram:**
```
-------------------------------------------------
|   Add People                                  |
-------------------------------------------------
|   Enter name: [ Alice       ]  [ + Add ]      |
|   Enter name: [ Bob         ]  [ + Add ]      |
|                                               |
|   Current People: Alice, Bob, Charlie         |
-------------------------------------------------
|   [ Done ]                                    |
-------------------------------------------------
```

### Screen 3: Bill Details
Provides a summary of the selected bill, showing totals, breakdowns, and actions.

**Description:**
- Displays bill name and total.
- Breakdown: itemized or per-person owed amount.
- Includes a visualization (pie chart or stacked bar).
- **Responsive layout:** data-first on mobile, data + chart on desktop.

**Core actions:**
- Edit Bill → reopens Add Bill with data prefilled.
- Share Results → opens Share modal.
- Delete Bill → removes bill and returns to Bills List.

**Wireframe Diagram:**
```
-------------------------------------------------
|   Bill: Friday Dinner                          |
-------------------------------------------------
|   Total: $120                                  |
-------------------------------------------------
|   Breakdown:                                   |
|   Alice owes   $40                             |
|   Bob owes     $55                             |
|   Charlie owes $25                             |
-------------------------------------------------
|   Visualization (pie chart or bars)            |
|    [  Alice  |■■■■■■■■            ]            |
|    [   Bob   |■■■■■■■■■■■         ]            |
|    [ Charlie |■■■■■               ]            |
-------------------------------------------------
|   [ Edit Bill ]   [ Share Results ]   [ Delete ]|
-------------------------------------------------
```

### Screen 4: Share Results (Modal/Popup)
Allows users to export or distribute the calculated split in a user-friendly way.

**Description:**
- Displays bill summary (who owes what).
- Lightweight, non-blocking → closes back into Bill Details.

**Share methods (MVP):**
- Copy to clipboard (plain text).

**Share methods (optional stretch features):**
- Generate a shareable link (requires backend).
- Display QR code.

**Wireframe Diagram:**
```
-------------------------------------------------
|   Share Bill: Friday Dinner                    |
-------------------------------------------------
|   Summary:                                     |
|   Alice owes   $40                             |
|   Bob owes     $55                             |
|   Charlie owes $25                             |
-------------------------------------------------
|   Share Options:                               |
|   [ Copy to Clipboard ]                        |
|   [ Generate Shareable Link ]                  |
|   [ Show QR Code ] (optional stretch feature)  |
-------------------------------------------------
|   [ Close ]                                    |
-------------------------------------------------
```

### User Flow Diagram
```
[ Screen 1: Bills SPLITr (Bills List) ]
            |
            v
   [ + Create New Bill ]
            |
            v
[ Screen 2: Add Bill ]
   |    \
   |     \--> [ Add People Modal ]
   |
   v
[ Save Bill ]
            |
            v
[ Screen 3: Bill Details ] <----------------------\
   |    |         \                                \
   |    |          \--> [ Delete Bill ] --> [ Confirmation ] --> (Back to Bills List)
   |    |
   |    \--> [ Edit Bill ] --> (Back to Bills List)
   |
   \--> [ Share Results ]
              |
              v
  [ Screen 4: Share Results Modal ] --> (Back to Bill Details)
```
