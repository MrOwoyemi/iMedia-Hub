# iMedia Hub

A revision dashboard for **OCR Cambridge Nationals Creative iMedia (Level 1/2, J834)**, covering
the R093 written paper and the R094 and R096 coursework units.

It is a static site — no build step, no framework, no server. Open `index.html` and it runs.

## What's in it

- **82 revision pages** across R093 Topic Areas 1–4, plus R094 (visual identity and digital
  graphics) and R096 (animation with audio), including marking criteria and assessment guidance.
- **Quiz Trainer** — 423 questions with per-answer explanations. Thirteen revision topics hold a
  bank of **30 questions each**, and every sitting draws **10 at random**, so a topic can be
  revisited without repeating the same set. Plus four past-paper sets, a timed 25-question full
  exam mode, and six long-answer questions with indicative-content mark schemes.
- **Revision Card Quiz** — 143 keyword flashcards. Rate each card **Got it** or **Not yet**; the
  deck reorders so weak cards come first, and a card marked wrong reappears later in the sitting.
- **Three drag-and-drop games** — production phase timeline, legal and ethical scenario sort, and
  file format match-up.
- **A revision plan** — the dashboard keeps your last score in each topic and lists them
  weakest-first, with one tap through to the topic you're worst at.
- **Course navigation** — every page carries a breadcrumb, its position in the topic area, and
  next/previous links, all derived from the `COURSE` list at the top of `script.js`.
- **Progress tracking** — XP, levels, rank bands, day streak and achievement counters, all stored
  in the browser's `localStorage`. XP is paid per question (10 each) with a completion bonus for
  past papers and the full test, so a longer activity is always worth more than a shorter one.
- **Printable** — a print stylesheet strips the app chrome, flattens the cards and sets the notes
  in a serif for paper.

## Running it

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Every page has its own URL (`index.html#r093_3_3b`), so pages can be bookmarked and shared, and
the browser Back button works.

## Files

| File | What it holds | When it loads |
| --- | --- | --- |
| `index.html` | Page shell: sidebar, topbar, search, main content area | always |
| `style.css` | All styling, including the light and dark themes | always |
| `data-titles.js` | Every page's title, so pages can be named before their content arrives | always |
| `data-keywords.js` | The 143-term keyword bank (flashcards + search) | always |
| `data-content-core.js` | The dashboard and tool pages | always |
| `script.js` | Application logic: routing, search, quiz engine, games, progress | always |
| `app-init.js` | Bootstrap — router wiring and first render | always |
| `data-content-r093.js` | The 33 R093 pages | on demand |
| `data-content-r094.js` | The 21 R094 pages | on demand |
| `data-content-r096.js` | The 22 R096 pages | on demand |
| `data-quiz.js` | The Quiz Trainer question bank | on demand |
| `images/` | Reference images used in the notes | per page |

Only what the dashboard needs is loaded up front — **55 KB gzipped**. The unit pages and the
question bank are fetched when first needed, and prefetched once the browser goes idle, so a
student almost never waits for one. See `loadUnitContent()` and `loadQuizBank()` in `script.js`.

The theme is applied by a small inline script in `<head>` rather than by the app, so dark mode
does not flash white before the deferred scripts run.

## Keeping it up to date

Two config blocks at the top of `script.js` control everything that changes year to year.

**`COURSE`** is the reading order of the site — which pages belong to which unit and topic area,
and in what sequence. Every breadcrumb, "page 5 of 9" counter and next/previous link is derived
from it, so adding or reordering a page means editing this one list. Pages left out of it (the
dashboard, Quiz Trainer, the flashcard deck) simply get no course navigation.

**`SCHEDULE`** holds everything dated.

- `SCHEDULE.exam` — the date and start time of the R093 written paper. Check this against the
  current OCR exam timetable at the start of each academic year.
- `SCHEDULE.holidays` — term dates, used to report "school weeks" as well as calendar weeks.
- `SCHEDULE.homework` — the taught homework schedule.

Homework can also be added without touching the code: the **+** button on the dashboard's
Homework panel saves entries to the browser, and they are merged with `SCHEDULE.homework`.

## Accessibility

The site is keyboard-navigable throughout, announces page changes to screen readers, ships a
skip link, honours `prefers-reduced-motion`, and meets WCAG AA contrast in both light and dark
themes — verified across all 82 pages and the quiz results screen.

Also: quiz results are marked with a tick or cross as well as colour, dialogs trap the keyboard
and hand focus back to whatever opened them, every control clears the 24&nbsp;px minimum target
size, and heading levels are normalised at render time so the outline never skips a level. That
last one is why component headings are styled by component (`.card h2, .card h3, .card h4`)
rather than by tag — the level is free to be whatever the document structure needs.

## Progress and shared computers

All progress lives in this browser under `imh:`-prefixed keys. **Clear my progress** at the
foot of the sidebar wipes XP, streak, quiz scores, card ratings, homework and checklists,
keeping only the theme preference — so a shared classroom machine can be handed over cleanly.
