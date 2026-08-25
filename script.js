let currentCardIndex = 0;
let isFlipped = false;

/* ============================================================
   SCHEDULE — the one block to edit each academic year.
   ------------------------------------------------------------
   Everything the dashboard's "Exam Countdown" and "Homework"
   panels show is derived from here. All dates are ISO
   (YYYY-MM-DD) so there is no DD/MM vs MM/DD ambiguity.

   Homework added through the dashboard's "+" button is stored
   in the browser (localStorage) and merged with this list, so
   the panel can be kept current without editing any code.
   ============================================================ */
const SCHEDULE = {
  exam: {
    title: "R093 Written Paper",
    // OCR J834/01 "Creative iMedia in the media industry", 1 h 30 min.
    // Monday 14 June 2027, afternoon session. OCR publishes all afternoon
    // exams as starting at 1.30 pm; a centre may move it between 1.00 and
    // 2.00 pm, so check your own exam board notice.
    // Source: OCR June 2027 final exam timetable (GCSE and Cambridge Nationals).
    // Contingency day for the June 2027 series is Wednesday 23 June 2027.
    date: "2027-06-14",
    time: "13:30"
  },

  // School holidays between now and the exam, used to convert the
  // calendar countdown into "school weeks". Approximate term dates are
  // fine — they only affect the secondary line of the countdown card.
  holidays: [
    { name: "Autumn half term", start: "2026-10-26", end: "2026-10-30" },
    { name: "Christmas", start: "2026-12-21", end: "2027-01-01" },
    { name: "February half term", start: "2027-02-15", end: "2027-02-19" },
    { name: "Easter", start: "2027-03-29", end: "2027-04-09" },
    { name: "May bank holiday", start: "2027-05-03", end: "2027-05-03" },
    { name: "May half term", start: "2027-05-31", end: "2027-06-04" }
  ],

  homework: [
    {
      title: "1.2 Job Roles (Technical)",
      due: "2027-03-17",
      task: "Make revision cards on technical job roles in the media industry: Camera operator, Games programmer, Sound editor, Video editor, Web developer."
    },
    {
      title: "1.2 Job Roles (Senior)",
      due: "2027-03-24",
      task: "Make revision cards on senior job roles in the media industry: Campaign manager, Creative director, Director, Editor, Production manager."
    },
    {
      title: "TA1.1 & 1.2 Revision",
      due: "2027-03-31",
      task: "Answer exam questions on Topic Areas 1.1 and 1.2 (Sectors, Products, Roles). Red pen – Go over the exam questions making notes on what you got wrong."
    },
    {
      title: "TA1 Seneca Learning",
      due: "2027-04-07",
      task: "Complete Seneca Learning Quizzes on Topic Area 1. Review all TA1 keywords and concepts."
    },
    {
      title: "TA1 Exam Questions",
      due: "2027-04-14",
      task: "Answer exam questions on Topic Area 1: Media industry and job roles."
    },
    {
      title: "R093 Past Paper",
      due: "2027-04-21",
      task: "Complete a full R093 past paper under timed conditions. Review all topic areas."
    },
    {
      title: "R093 Revision: TA2 Focus",
      due: "2027-04-28",
      task: "Focus on Topic Area 2. Review audience demographics, psychographics, and primary/secondary research methods."
    },
    {
      title: "R093 Revision: TA3 Focus",
      due: "2027-05-05",
      task: "Focus on Topic Area 3 (Pre-production). Practice creating a mind map and review Legal/Ethical constraints (Privacy, Defamation, Copyright)."
    },
    {
      title: "R093 Revision: TA4 Focus",
      due: "2027-05-12",
      task: "Focus on Topic Area 4 (Distribution). Revise properties of digital files, file formats (JPEG, MP4, MP3), and compression (Lossy vs Lossless)."
    },
    {
      title: "R093 Second Mock Paper",
      due: "2027-05-19",
      task: "Complete a second full R093 past paper. Use the mark scheme to self-assess with a red pen and highlight areas for final improvement."
    },
    {
      title: "R093 Final Prep",
      due: "2027-05-26",
      task: "Final Exam Prep! Use the interactive flashcards and match-up games on the dashboard to test your keyword knowledge before the big day."
    }
  ]
};

/* ============================================================
   STORAGE
   ------------------------------------------------------------
   Every key this site writes is namespaced, so a shared school
   machine keeps one student's progress out of the way of the
   next one's, and nothing can collide with a checklist ID.
   Reads fall back to the old unprefixed keys once, so existing
   progress survives the change.
   ============================================================ */
const STORE_NS = 'imh:';

const LEGACY_KEYS = [
  'theme', 'total-xp', 'streak-count', 'streak-last-visit',
  'topic-scores', 'card-confidence', 'custom-homework',
  'ach-quizzes', 'ach-games', 'ach-cards'
];

function lsGet(key, fallback) {
  try {
    const value = localStorage.getItem(STORE_NS + key);
    return value === null ? (fallback === undefined ? null : fallback) : value;
  } catch (err) {
    return fallback === undefined ? null : fallback;
  }
}

function lsSet(key, value) {
  try { localStorage.setItem(STORE_NS + key, value); } catch (err) { /* quota or private mode */ }
}

function lsRemove(key) {
  try { localStorage.removeItem(STORE_NS + key); } catch (err) { /* ignore */ }
}

// One-time move of any pre-namespace progress into the new keys.
function migrateStorage() {
  try {
    if (localStorage.getItem(STORE_NS + 'migrated')) return;

    LEGACY_KEYS.forEach(key => {
      const old = localStorage.getItem(key);
      if (old !== null && localStorage.getItem(STORE_NS + key) === null) {
        localStorage.setItem(STORE_NS + key, old);
      }
      localStorage.removeItem(key);
    });

    // Checklist ticks were stored under the raw checkbox element ID.
    Object.keys(localStorage)
      .filter(k => !k.startsWith(STORE_NS) && /^(r09|task|t\d)/i.test(k))
      .forEach(k => {
        const value = localStorage.getItem(k);
        if (value === 'true' || value === 'false') {
          localStorage.setItem(STORE_NS + 'check:' + k, value);
          localStorage.removeItem(k);
        }
      });

    localStorage.setItem(STORE_NS + 'migrated', '1');
  } catch (err) { /* storage unavailable — nothing to migrate */ }
}

// Wipes this browser's progress. Offered in the sidebar, because a shared
// machine needs a way to hand over cleanly.
function resetAllProgress() {
  if (!window.confirm('Clear your XP, streak, quiz scores, card ratings, homework and checklists on this device? This cannot be undone.')) return;

  try {
    Object.keys(localStorage)
      .filter(k => k.startsWith(STORE_NS) && k !== STORE_NS + 'theme')
      .forEach(k => localStorage.removeItem(k));
  } catch (err) { /* ignore */ }

  localStorage.setItem(STORE_NS + 'migrated', '1');
  recordVisit();
  refreshAchievements();
  updateXpDisplay();
  loadContent(DEFAULT_TOPIC);

  const announcer = document.getElementById('route-announcer');
  if (announcer) announcer.textContent = 'Progress cleared.';
}

const CUSTOM_HOMEWORK_KEY = 'custom-homework';

/* ============================================================
   COURSE ORDER
   ------------------------------------------------------------
   The reading order of the site. This is what gives every page
   its breadcrumb, its "page 5 of 9" position and its next and
   previous links, and what colours it by unit.

   To reorder or add a page, edit this list — nothing else needs
   to change. Pages left out of it (the dashboard, Quiz Trainer,
   the flashcard deck) simply get no course chrome.
   ============================================================ */
const COURSE = [
  {
    unit: 'r093',
    code: 'R093',
    label: 'R093: Media Industry',
    kind: 'Exam unit',
    sections: [
      { label: 'Unit overview', pages: ['r093_hub'] },
      { label: 'Topic Area 1', pages: ['ta1', 'r093_1_1', 'r093_1_2', 'timeline_game'] },
      { label: 'Topic Area 2', pages: ['ta2', 'r093_2_1', 'r093_2_2', 'r093_2_3', 'r093_2_4', 'r093_2_5'] },
      { label: 'Topic Area 3', pages: ['ta3', 'r093_3_1', 'r093_3_2', 'r093_3_3', 'r093_3_3b', 'r093_3_3c', 'r093_3_3d', 'r093_3_3e', 'r093_3_3f', 'r093_3_5', 'r093_3_4_1', 'r093_3_4_2', 'r093_3_4_3', 'legal_sort_game', 'r093_3_4_4'] },
      { label: 'Topic Area 4', pages: ['ta4', 'r093_4_1', 'r093_4_2_1', 'r093_4_2_2', 'r093_4_2_3', 'r093_4_2_4', 'format_match_up'] }
    ]
  },
  {
    unit: 'r094',
    code: 'R094',
    label: 'R094: Visual Identity',
    kind: 'Coursework',
    sections: [
      { label: 'Unit overview', pages: ['r094_hub'] },
      { label: 'Topic Area 1', pages: ['r094_ta1', 'r094_1_1', 'r094_1_2', 'r094_1_3'] },
      { label: 'Topic Area 2', pages: ['r094_ta2', 'r094_2_1', 'r094_2_2', 'r094_2_3'] },
      { label: 'Topic Area 3', pages: ['r094_ta3', 'r094_3_1', 'r094_3_2', 'r094_3_3'] },
      { label: 'Assessment', pages: ['r094_criteria', 'r094_task_1', 'r094_task_2', 'r094_guidance'] },
      { label: 'Software skills', pages: ['r094_skill_photoshop', 'r094_skill_canva', 'r094_skill_rocketcake', 'r094_skill_maya'] }
    ]
  },
  {
    unit: 'r096',
    code: 'R096',
    label: 'R096: Animation',
    kind: 'Coursework',
    sections: [
      { label: 'Unit overview', pages: ['r096_hub'] },
      { label: 'Topic Area 1', pages: ['r096_ta1', 'r096_1_1', 'r096_1_2', 'r096_1_3'] },
      { label: 'Topic Area 2', pages: ['r096_ta2', 'r096_2_1', 'r096_2_2', 'r096_2_3'] },
      { label: 'Topic Area 3', pages: ['r096_ta3', 'r096_3_1', 'r096_3_2'] },
      { label: 'Assessment', pages: ['r096_criteria', 'r096_task_1', 'r096_task_2', 'r096_task_3', 'r096_guidance'] },
      { label: 'Software skills', pages: ['r096_skill_maya', 'r096_skill_wick', 'r096_skill_line', 'r096_skill_blender', 'r096_skill_pencil2d'] }
    ]
  }
];

// --- 3. HELPER FUNCTIONS ---

// Parses "YYYY-MM-DD" into a local-midnight Date. Returns null if malformed,
// so one bad entry in the config can never blank the whole panel.
function parseISODate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || '').trim());
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  d.setHours(0, 0, 0, 0);
  return isNaN(d) ? null : d;
}

function startOfToday() {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  return t;
}

function formatShortDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yy = String(date.getFullYear()).slice(-2);
  return `${dd}/${mm}/${yy}`;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Homework the student or teacher added through the dashboard "+" button.
function getCustomHomework() {
  try {
    const raw = JSON.parse(lsGet(CUSTOM_HOMEWORK_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    return raw.filter(hw => hw && hw.title && parseISODate(hw.due));
  } catch (err) {
    return [];
  }
}

function saveCustomHomework(list) {
  lsSet(CUSTOM_HOMEWORK_KEY, JSON.stringify(list));
}

function addCustomHomework(entry) {
  const list = getCustomHomework();
  list.push({ id: 'hw-' + Date.now(), title: entry.title, due: entry.due, task: entry.task || '' });
  saveCustomHomework(list);
}

function removeCustomHomework(id) {
  saveCustomHomework(getCustomHomework().filter(hw => hw.id !== id));
}

function createHomeworkCard(title, dueDate, task) {
  const today = startOfToday();
  const diffDays = Math.round((dueDate - today) / (1000 * 60 * 60 * 24));

  let statusText = "";
  let isUpcoming = false;
  if (diffDays < 0) {
    statusText = "Overdue";
  } else if (diffDays === 0) {
    statusText = "Due Tonight";
    isUpcoming = true;
  } else if (diffDays === 1) {
    statusText = "Due Tomorrow";
    isUpcoming = true;
  } else {
    statusText = diffDays + " Days Left";
    isUpcoming = true;
  }

  const cls = isUpcoming ? "exam-item upcoming" : "exam-item";
  const statusCls = isUpcoming ? "exam-status upcoming" : "exam-status";
  const summary = task.length > 60 ? task.substring(0, 60) + '…' : task;

  return `
    <div class="${cls}">
      <div>
        <p class="exam-item-title">${escapeHTML(title)}</p>
        <p class="exam-item-date">Due ${formatShortDate(dueDate)} &middot; ${escapeHTML(summary)}</p>
      </div>
      <span class="${statusCls}">${statusText}</span>
    </div>
  `;
}

// Whole school days (Mon–Fri) left before the exam, minus configured holidays.
function schoolWeeksUntil(examDate) {
  const today = startOfToday();
  let schoolDays = 0;

  const holidayDays = new Set();
  SCHEDULE.holidays.forEach(h => {
    const start = parseISODate(h.start);
    const end = parseISODate(h.end);
    if (!start || !end) return;
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      holidayDays.add(d.toDateString());
    }
  });

  for (let d = new Date(today); d < examDate; d.setDate(d.getDate() + 1)) {
    const day = d.getDay();
    if (day === 0 || day === 6) continue;        // weekend
    if (holidayDays.has(d.toDateString())) continue; // school holiday
    schoolDays++;
  }

  return Math.round(schoolDays / 5);
}

function createExamCountdownHTML() {
  const examDate = parseISODate(SCHEDULE.exam.date);

  if (!examDate) {
    return `
      <div class="exam-item">
        <div>
          <p class="exam-item-title">${escapeHTML(SCHEDULE.exam.title)}</p>
          <p class="exam-item-date">No exam date set — add one in SCHEDULE.exam at the top of script.js.</p>
        </div>
        <span class="exam-status">Not set</span>
      </div>
    `;
  }

  const today = startOfToday();
  const diffDays = Math.round((examDate - today) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    // The date has passed. Say so plainly and point at the fix, rather than
    // leaving the panel looking like there is simply nothing to revise for.
    return `
      <div class="exam-item completed">
        <div>
          <p class="exam-item-title">${escapeHTML(SCHEDULE.exam.title)}</p>
          <p class="exam-item-date">Sat on ${formatShortDate(examDate)} — set next year's date in SCHEDULE.exam.</p>
        </div>
        <span class="exam-status completed">Completed</span>
      </div>
    `;
  }

  if (diffDays === 0) {
    return `
      <div class="exam-item">
        <div>
          <p class="exam-item-title">${escapeHTML(SCHEDULE.exam.title)}</p>
          <p class="exam-item-date">Today at ${escapeHTML(SCHEDULE.exam.time || '')} — good luck!</p>
        </div>
        <span class="exam-status">Today</span>
      </div>
    `;
  }

  const totalWeeks = Math.ceil(diffDays / 7);
  const schoolWeeks = schoolWeeksUntil(examDate);

  return `
    <div class="exam-item">
      <div>
        <p class="exam-item-title">${escapeHTML(SCHEDULE.exam.title)}</p>
        <p class="exam-item-date">${schoolWeeks} school weeks &middot; ${totalWeeks} total weeks &middot; ${formatShortDate(examDate)}</p>
      </div>
      <span class="exam-status">${diffDays} ${diffDays === 1 ? 'Day' : 'Days'}</span>
    </div>
  `;
}

function getUpcomingHomeworkHTML() {
  const today = startOfToday();

  // Merge the taught schedule with anything added through the "+" button.
  const upcoming = SCHEDULE.homework
    .concat(getCustomHomework())
    .map(hw => ({ ...hw, dueDate: parseISODate(hw.due) }))
    .filter(hw => hw.dueDate && hw.dueDate >= today);

  upcoming.sort((a, b) => a.dueDate - b.dueDate);

  const nextThree = upcoming.slice(0, 3);

  if (nextThree.length === 0) {
    return `<div class="empty-state">Nothing due right now. Use <strong>+</strong> to add your own homework.</div>`;
  }

  return nextThree.map(hw => createHomeworkCard(hw.title, hw.dueDate, hw.task || '')).join('');
}

// Whole days between today and the exam. Null when no valid date is set.
function daysUntilExam() {
  const examDate = parseISODate(SCHEDULE.exam.date);
  if (!examDate) return null;
  return Math.round((examDate - startOfToday()) / (1000 * 60 * 60 * 24));
}

// The dashboard hero leads on the countdown, so it is filled from the same
// SCHEDULE data as the panel below it.
function renderHeroCountdown() {
  const num = document.getElementById('hero-days');
  const unit = document.getElementById('hero-days-unit');
  const sub = document.getElementById('hero-sub');
  if (!num || !unit || !sub) return;

  const days = daysUntilExam();
  const examDate = parseISODate(SCHEDULE.exam.date);

  if (days === null) {
    num.textContent = '—';
    unit.textContent = 'no exam date set';
    sub.textContent = 'Add one in SCHEDULE.exam at the top of script.js.';
    return;
  }

  if (days < 0) {
    num.textContent = '🎓';
    unit.textContent = 'exam done';
    sub.textContent = `Sat on ${formatShortDate(examDate)}. Set next year's date in SCHEDULE.exam.`;
    return;
  }

  if (days === 0) {
    num.textContent = 'Today';
    unit.textContent = `— ${SCHEDULE.exam.time}`;
    sub.textContent = 'Good luck. You have done the work.';
    return;
  }

  num.textContent = days;
  unit.textContent = days === 1 ? 'day until the R093 exam' : 'days until the R093 exam';
  sub.textContent = `${schoolWeeksUntil(examDate)} school weeks left · ${formatShortDate(examDate)} at ${SCHEDULE.exam.time}`;
}

/* ============================================================
   REVISION PLAN
   ------------------------------------------------------------
   Quiz results used to be discarded the moment the student left
   the results screen. Keeping the last score per topic lets the
   dashboard answer "what should I revise tonight?".
   ============================================================ */
const TOPIC_SCORES_KEY = 'topic-scores';
const REVISION_PLAN_ROWS = 6;

function getTopicScores() {
  try {
    const raw = JSON.parse(lsGet(TOPIC_SCORES_KEY) || '{}');
    return (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
  } catch (err) {
    return {};
  }
}

function recordTopicScore(topic, score, total) {
  if (!topic || !total) return;
  const scores = getTopicScores();
  scores[topic] = { score: score, total: total, at: isoDay() };
  lsSet(TOPIC_SCORES_KEY, JSON.stringify(scores));
}

// The 13 bite-sized revision topics, in the order the menu shows them.
function getRevisionTopics() {
  if (typeof quizQuestionBank === 'undefined') return [];
  return Object.keys(quizQuestionBank)
    .filter(t => t !== 'Long Questions (6-12 Marks)' && !QUIZ_PAST_PAPER_TOPICS.includes(t))
    .sort();
}

function renderRevisionPlan() {
  const body = document.getElementById('revision-plan-body');
  if (!body) return;

  const topics = getRevisionTopics();

  // The bank has not been fetched yet on a cold load; pull it in, then redraw.
  if (!topics.length) {
    body.innerHTML = '<p class="empty-state">Loading your topics…</p>';
    loadQuizBank().then(renderRevisionPlan).catch(() => {
      body.innerHTML = '<p class="empty-state">Open the Quiz Trainer to start building your revision plan.</p>';
    });
    return;
  }

  const scores = getTopicScores();

  const rows = topics.map(topic => {
    const record = scores[topic];
    const pct = record ? Math.round((record.score / record.total) * 100) : null;
    return { topic: topic, record: record, pct: pct };
  });

  // Attempted topics first, weakest at the top; never-attempted after them,
  // because a score you have is more actionable than one you have not.
  const attempted = rows.filter(r => r.pct !== null).sort((a, b) => a.pct - b.pct);
  const untried = rows.filter(r => r.pct === null);
  const ordered = attempted.concat(untried).slice(0, REVISION_PLAN_ROWS);

  const target = (attempted[0] || untried[0] || rows[0]).topic;

  // Past papers were being recorded and then filtered out, so the results
  // accumulated unseen. They are the closest thing here to a mock, so they
  // get their own short list rather than being thrown away.
  const papers = QUIZ_PAST_PAPER_TOPICS
    .filter(t => scores[t])
    .map(t => ({ topic: t, record: scores[t], pct: Math.round((scores[t].score / scores[t].total) * 100) }))
    .sort((a, b) => a.pct - b.pct);

  const paperRows = papers.length ? `
    <h4 class="plan-subhead">Past papers</h4>
    ${papers.map(row => {
      const band = row.pct < 50 ? ' bar-low' : row.pct < 70 ? ' bar-mid' : ' bar-high';
      return `
      <button type="button" class="plan-row" onclick="startTopicQuiz(${JSON.stringify(row.topic).replace(/"/g, '&quot;')})">
        <span class="plan-main">
          <span class="plan-name">${escapeHTML(row.topic.replace(/^Topic Area /, 'TA'))}</span>
          <span class="plan-bar${band}"><span style="width:${row.pct}%"></span></span>
        </span>
        <span class="plan-score">${row.record.score}/${row.record.total}</span>
      </button>`;
    }).join('')}` : '';

  body.innerHTML = ordered.map(row => {
    const band = row.pct === null ? '' : row.pct < 50 ? ' bar-low' : row.pct < 70 ? ' bar-mid' : ' bar-high';
    const width = row.pct === null ? 0 : row.pct;
    const label = row.record ? `${row.record.score}/${row.record.total}` : 'Not tried';
    return `
      <button type="button" class="plan-row" onclick="startTopicQuiz(${JSON.stringify(row.topic).replace(/"/g, '&quot;')})">
        <span class="plan-main">
          <span class="plan-name">${escapeHTML(row.topic)}</span>
          <span class="plan-bar${band}"><span style="width:${width}%"></span></span>
        </span>
        <span class="plan-score${row.record ? '' : ' plan-score--none'}">${label}</span>
      </button>`;
  }).join('') + paperRows + `
    <button type="button" class="plan-cta" onclick="startTopicQuiz(${JSON.stringify(target).replace(/"/g, '&quot;')})">
      Revise ${escapeHTML(target)}
    </button>`;
}

// Opens the Quiz Trainer straight into a topic.
let pendingQuizTopic = null;

function startTopicQuiz(topic) {
  pendingQuizTopic = topic;
  loadContent('quiz_trainer');
}

// Redraws all dashboard panels. Called on every visit to the dashboard so
// the countdown, homework and revision plan are correct even if the tab
// was left open overnight.
function renderDashboardPanels() {
  renderHeroCountdown();

  const exam = document.getElementById('exam-countdown-body');
  if (exam) exam.innerHTML = createExamCountdownHTML();

  const homework = document.getElementById('homework-panel-body');
  if (homework) homework.innerHTML = getUpcomingHomeworkHTML();

  renderRevisionPlan();
}

// The inline script in <head> has already stamped the class on <html> before
// first paint; this only keeps the toggle button's label in step.
function applySavedTheme() {
  const isDark = lsGet('theme') === 'dark';
  document.documentElement.classList.toggle('dark-mode', isDark);
  updateThemeToggle(isDark);
}

function updateThemeToggle(isDark) {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  const icon = btn.querySelector('.theme-icon');
  if (icon) icon.textContent = isDark ? '☀️' : '🌙';
  btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

migrateStorage();
applySavedTheme();




// --- Night Mode Logic ---
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark-mode');
  lsSet('theme', isDark ? 'dark' : 'light');
  updateThemeToggle(isDark);
}

/* ============================================================
   PAGE TITLES
   ------------------------------------------------------------
   Every page in contentData starts with an <h1>. Reading those
   once gives search, the Back button and document.title a real
   human-readable name instead of the raw object key.
   ============================================================ */
let pageTitleCache = null;

// Titles ship separately from the page content (data-titles.js, 4 KB) so a
// page can be named in search, breadcrumbs and next/previous links before
// its bundle has been fetched.
function getPageTitles() {
  if (pageTitleCache) return pageTitleCache;
  pageTitleCache = Object.assign({}, PAGE_TITLES);
  return pageTitleCache;
}

function getPageTitle(topic) {
  return getPageTitles()[topic] || String(topic).replace(/_/g, ' ').toUpperCase();
}

/* ============================================================
   SEARCH INDEX
   ------------------------------------------------------------
   Titles alone are mostly spec numbers, so searching a term a
   student half-remembers found the flashcard and nothing else.
   This strips the markup off every page once, on first search,
   so the page that actually teaches the term is findable too.
   ============================================================ */
let searchIndexCache = null;

function getSearchIndex() {
  if (searchIndexCache) return searchIndexCache;

  searchIndexCache = {};
  Object.keys(contentData).forEach(key => {
    searchIndexCache[key] = contentData[key]
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&[a-z]+;/gi, ' ')
      .replace(/\s+/g, ' ')
      .toLowerCase();
  });

  return searchIndexCache;
}

// A short piece of the page either side of the match, so the result shows
// why it matched rather than just asserting that it did.
function searchSnippet(key, term) {
  const text = getSearchIndex()[key];
  const at = text.indexOf(term);
  if (at < 0) return '';

  const from = Math.max(0, at - 40);
  const raw = text.slice(from, at + term.length + 60).trim();
  return (from > 0 ? '…' : '') + raw + '…';
}

// --- Search Logic ---
const SEARCH_RESULT_LIMIT = 8;

function handleSearch(query) {
  const resultsDiv = document.getElementById('search-results');
  const input = document.getElementById('global-search');
  if (!resultsDiv) return;

  const term = String(query || '').trim().toLowerCase();

  if (term.length < 2) {
    closeSearchResults();
    return;
  }

  // Searching implies the student may go anywhere, so make sure every page's
  // text is available. Titles match immediately; body matches fill in when
  // the bundles land, which the prefetch has usually already done.
  if (Object.keys(contentData).length < Object.keys(PAGE_TITLES).length) {
    loadAllUnitContent().then(() => {
      const input = document.getElementById('global-search');
      if (input && input.value.trim().toLowerCase() === term) handleSearch(input.value);
    });
  }

  const titles = getPageTitles();
  const index = getSearchIndex();

  // Title matches rank above body matches, but a page that merely explains
  // the term is still offered — that is usually the one wanted.
  const titleHits = [];
  const bodyHits = [];
  Object.keys(titles).forEach(key => {
    if (titles[key].toLowerCase().includes(term) || key.toLowerCase().includes(term)) titleHits.push(key);
    else if (index[key] && index[key].includes(term)) bodyHits.push(key);
  });

  titleHits.sort((a, b) => titles[a].toLowerCase().indexOf(term) - titles[b].toLowerCase().indexOf(term));

  const pageMatches = titleHits.concat(bodyHits).slice(0, SEARCH_RESULT_LIMIT);

  // Keyword hits remember which card they are, so selecting one opens
  // that card rather than always dropping the student on card 1.
  const keywordMatches = r093Keywords
    .map((k, index) => ({ ...k, index }))
    .filter(k => k.term.toLowerCase().includes(term) || k.def.toLowerCase().includes(term))
    .slice(0, SEARCH_RESULT_LIMIT);

  if (!pageMatches.length && !keywordMatches.length) {
    resultsDiv.innerHTML = `<p class="search-empty">No matches for “${escapeHTML(query)}”.</p>`;
    resultsDiv.style.display = 'block';
    if (input) input.setAttribute('aria-expanded', 'true');
    return;
  }

  resultsDiv.innerHTML =
    pageMatches.map(key => {
      const isBodyHit = !titles[key].toLowerCase().includes(term) && !key.toLowerCase().includes(term);
      const snippet = isBodyHit ? searchSnippet(key, term) : '';
      return `
      <button type="button" class="search-item" role="option" onclick="selectSearchResult('page', '${key}')">
        <span class="search-kind">Page</span>${escapeHTML(titles[key])}
        ${snippet ? `<span class="search-snippet">${escapeHTML(snippet)}</span>` : ''}
      </button>`;
    }).join('') +
    keywordMatches.map(k => `
      <button type="button" class="search-item" role="option" onclick="selectSearchResult('term', ${k.index})">
        <span class="search-kind">Term</span>${escapeHTML(k.term)}
      </button>`).join('');

  resultsDiv.style.display = 'block';
  if (input) input.setAttribute('aria-expanded', 'true');
}

function selectSearchResult(kind, value) {
  closeSearchResults();
  const input = document.getElementById('global-search');
  if (input) input.value = '';

  if (kind === 'page') {
    loadContent(value);
  } else {
    openFlashcardAt(Number(value));
  }
}

function closeSearchResults() {
  const resultsDiv = document.getElementById('search-results');
  if (resultsDiv) {
    resultsDiv.style.display = 'none';
    resultsDiv.innerHTML = '';
  }
  const input = document.getElementById('global-search');
  if (input) input.setAttribute('aria-expanded', 'false');
}

// Opens the flashcard deck on a specific keyword.
function openFlashcardAt(index) {
  pendingFlashcardIndex = index;
  loadContent('r093_quiz');
}

let pendingFlashcardIndex = null;

let cardsCompletedThisSession = false;

// Snapshot of the keyword bank in its original TA1 → TA4 spec order.
// shuffleArray() mutates r093Keywords in place, so we keep this master copy
// to restore the original sequence whenever the quiz reopens or is reset.
const r093KeywordsOriginalOrder = r093Keywords.slice();

function resetCardState(startIndex) {
  const target = Number.isInteger(startIndex) ? startIndex : 0;
  currentCardIndex = Math.min(Math.max(target, 0), r093Keywords.length - 1);
  isFlipped = false;
  cardsCompletedThisSession = false;

  // Reset visual flip state
  const card = document.getElementById("flashcard");
  if (card) card.style.transform = "rotateY(0deg)";

  // Use a slightly longer timeout to ensure the DOM is fully rendered
  setTimeout(() => {
    updateCardDisplay();
  }, 150);
}

/* ============================================================
   CARD CONFIDENCE
   ------------------------------------------------------------
   Rating a card "Not yet" brings it round sooner: the deck is
   ordered so unknown and unrated cards come first, and a card
   marked wrong reappears a few cards later in the same sitting.
   ============================================================ */
const CARD_CONFIDENCE_KEY = 'card-confidence';
const CARD_REVIEW_GAP = 5;

function getCardConfidence() {
  try {
    const raw = JSON.parse(lsGet(CARD_CONFIDENCE_KEY) || '{}');
    return (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
  } catch (err) {
    return {};
  }
}

function setCardConfidence(term, value) {
  const all = getCardConfidence();
  if (value) all[term] = value; else delete all[term];
  lsSet(CARD_CONFIDENCE_KEY, JSON.stringify(all));
}

// Orders the working deck: cards marked "not yet" first, then unrated,
// then the ones already known.
function orderDeckByConfidence(cards) {
  const conf = getCardConfidence();
  const rank = k => (conf[k.term] === 'no' ? 0 : conf[k.term] === 'ok' ? 2 : 1);
  return cards.slice().sort((a, b) => rank(a) - rank(b));
}

function setDeck(cards) {
  r093Keywords.length = 0;
  cards.forEach(k => r093Keywords.push(k));
}

function rateCard(known) {
  const card = r093Keywords[currentCardIndex];
  if (!card) return;

  setCardConfidence(card.term, known ? 'ok' : 'no');

  if (!known) {
    // Put it back into the deck a few cards ahead so it comes round again
    // before the sitting ends.
    const target = Math.min(currentCardIndex + CARD_REVIEW_GAP, r093Keywords.length);
    if (!r093Keywords.slice(currentCardIndex + 1).includes(card)) {
      r093Keywords.splice(target, 0, card);
    }
  }

  updateDeckProgress();

  if (currentCardIndex < r093Keywords.length - 1) {
    nextCard();
  } else {
    updateCardDisplay();
  }
}

function updateDeckProgress() {
  const conf = getCardConfidence();
  const terms = r093KeywordsOriginalOrder.map(k => k.term);
  const total = terms.length || 1;
  const ok = terms.filter(t => conf[t] === 'ok').length;
  const no = terms.filter(t => conf[t] === 'no').length;

  const okSeg = document.getElementById('deck-seg-ok');
  const noSeg = document.getElementById('deck-seg-no');
  if (okSeg) okSeg.style.width = (ok / total * 100) + '%';
  if (noSeg) noSeg.style.width = (no / total * 100) + '%';

  const bar = document.getElementById('deck-progress');
  if (bar) bar.setAttribute('aria-label', `${ok} known, ${no} to review, ${total - ok - no} not yet rated`);

  const meta = document.getElementById('deck-meta');
  if (meta) {
    meta.textContent = no
      ? `${ok} known · ${no} to come back to · ${total - ok - no} not yet rated`
      : `${ok} known · ${total - ok} not yet rated`;
  }

  // Mark the current card's buttons so the existing rating is visible.
  const card = r093Keywords[currentCardIndex];
  const state = card ? conf[card.term] : null;
  const okBtn = document.querySelector('.conf-btn--ok');
  const noBtn = document.querySelector('.conf-btn--no');
  if (okBtn) okBtn.classList.toggle('is-set', state === 'ok');
  if (noBtn) noBtn.classList.toggle('is-set', state === 'no');
}

// Rebuilds the deck from only the cards marked "not yet".
function reviewWeakCards() {
  const conf = getCardConfidence();
  const weak = r093KeywordsOriginalOrder.filter(k => conf[k.term] === 'no');

  const meta = document.getElementById('deck-meta');
  if (!weak.length) {
    if (meta) meta.textContent = 'Nothing marked "not yet" — rate a few cards first.';
    return;
  }

  setDeck(weak);
  resetCardState(0);
}

function resetCardConfidence() {
  lsRemove(CARD_CONFIDENCE_KEY);
  initQuizInOrder();
}

// Used when the revision card quiz first opens — weakest cards first,
// otherwise TA1 → TA4 spec order.
function initQuizInOrder() {
  setDeck(orderDeckByConfidence(r093KeywordsOriginalOrder));

  // A search hit for a keyword asks for that specific card, so honour the
  // spec order in that case and jump straight to it.
  let startIndex = pendingFlashcardIndex;
  if (Number.isInteger(startIndex)) {
    setDeck(r093KeywordsOriginalOrder);
  }
  pendingFlashcardIndex = null;
  resetCardState(startIndex);
}

// Triggered by the "Shuffle the deck" button — randomises the order.
function initQuiz() {
  setDeck(r093KeywordsOriginalOrder);
  shuffleArray(r093Keywords);
  resetCardState();
}

function updateCardDisplay() {
  const termEl = document.getElementById("card-term");
  const defEl = document.getElementById("card-def");
  const countEl = document.getElementById("card-counter");

  // Check if elements exist before trying to update text
  if (termEl && defEl && r093Keywords[currentCardIndex]) {
    termEl.innerText = r093Keywords[currentCardIndex].term;
    defEl.innerText = r093Keywords[currentCardIndex].def;
    if (countEl) countEl.innerText = (currentCardIndex + 1) + " / " + r093Keywords.length;
    updateDeckProgress();
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function flipCard() {
  const card = document.getElementById("flashcard");
  if (!card) return;
  isFlipped = !isFlipped;
  card.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
}

function nextCard() {
  if (currentCardIndex < r093Keywords.length - 1) {
    isFlipped = false;
    const card = document.getElementById("flashcard");
    if (card) card.style.transform = "rotateY(0deg)";

    setTimeout(() => {
      currentCardIndex++;
      updateCardDisplay();
      if (currentCardIndex === r093Keywords.length - 1 && !cardsCompletedThisSession) {
        cardsCompletedThisSession = true;
        incrementAchievement('cards');
      }
    }, 200);
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    isFlipped = false;
    const card = document.getElementById("flashcard");
    if (card) card.style.transform = "rotateY(0deg)";

    setTimeout(() => {
      currentCardIndex--;
      updateCardDisplay();
    }, 200);
  }
}

/* ============================================================
   NAVIGATION
   ------------------------------------------------------------
   Each page has a real URL (#page_key), so the browser Back
   button, refresh-in-place and shareable links all work. Every
   sidebar link carries that href; navTo() intercepts the click
   so middle-click and "copy link" still behave normally.
   ============================================================ */
const DEFAULT_TOPIC = 'home';

/* ============================================================
   CONTENT BUNDLES
   ------------------------------------------------------------
   The dashboard needs none of the 76 unit pages, so they are
   split per qualification and fetched on demand. They are also
   prefetched once the browser is idle, so a student who does
   navigate almost never waits for one.
   ============================================================ */
const bundlePromises = {};

// Which bundle owns a page, derived from COURSE so the two cannot drift.
function bundleForTopic(topic) {
  const place = getCourseIndex()[topic];
  return place ? place.unit : null;
}

function loadUnitContent(unit) {
  if (!unit) return Promise.resolve();
  if (bundlePromises[unit]) return bundlePromises[unit];

  bundlePromises[unit] = new Promise((resolve, reject) => {
    const tag = document.createElement('script');
    tag.src = `data-content-${unit}.js`;
    tag.onload = () => {
      // New pages mean the cached title and search indexes are stale.
      pageTitleCache = null;
      searchIndexCache = null;
      resolve();
    };
    tag.onerror = () => { bundlePromises[unit] = null; reject(new Error('Could not load ' + unit + ' pages')); };
    document.head.appendChild(tag);
  });

  return bundlePromises[unit];
}

function loadAllUnitContent() {
  return Promise.all(COURSE.map(u => loadUnitContent(u.unit).catch(() => null)));
}

// Warms the bundles once the first page is on screen. Browsers hold idle
// callbacks back entirely while a tab is in the background, so a timer backs
// it up — whichever fires first wins, and the other becomes a no-op.
let prefetchStarted = false;

function prefetchUnitContent() {
  const go = () => {
    if (prefetchStarted) return;
    prefetchStarted = true;
    loadAllUnitContent();
  };

  if ('requestIdleCallback' in window) requestIdleCallback(go, { timeout: 3000 });
  setTimeout(go, 3000);
}

// A page exists if it is loaded, or if a bundle we can fetch owns it.
function topicExists(topic) {
  return !!(topic && (contentData[topic] || PAGE_TITLES[topic]));
}

function topicFromHash() {
  const raw = decodeURIComponent(String(location.hash || '').replace(/^#/, '')).trim();
  return topicExists(raw) ? raw : DEFAULT_TOPIC;
}

// Click handler for any in-app link. Falls through to the browser for
// modified clicks (ctrl/cmd/shift/middle) so "open in new tab" still works.
function navTo(event, topic) {
  if (event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return;
    event.preventDefault();
  }
  loadContent(topic);
}

// --- Mobile sidebar ---
function setNavOpen(open) {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const burger = document.getElementById('nav-hamburger');
  if (!sidebar) return;

  sidebar.classList.toggle('sidebar-open', open);
  if (overlay) overlay.hidden = !open;
  if (burger) {
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  }

  if (open) {
    const firstLink = sidebar.querySelector('.nav-link');
    if (firstLink) firstLink.focus();
  }
}

function toggleNav() {
  const sidebar = document.getElementById('sidebar');
  setNavOpen(!(sidebar && sidebar.classList.contains('sidebar-open')));
}

function closeNav() {
  setNavOpen(false);
  const burger = document.getElementById('nav-hamburger');
  if (burger && window.innerWidth <= 768) burger.focus();
}

// --- Sidebar highlighting ---
// Driven by the topic being shown rather than by whatever was clicked, so
// submenu items, search results and Back all light up the right row.
function setActiveNav(topic) {
  // Kept tolerant of the old call style (an element) in case any page still uses it.
  if (topic && topic.nodeType === 1) {
    const href = topic.getAttribute('href') || '';
    topic = href.startsWith('#') ? href.slice(1) : null;
  }

  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  if (!topic) return;

  const match = document.querySelector(`.sidebar-nav a[href="#${CSS.escape(topic)}"]`);
  if (match) {
    match.classList.add('active');
    // Open the parent group so an active submenu item is actually visible.
    const submenu = match.closest('.submenu');
    if (submenu && !submenu.classList.contains('show-submenu')) {
      const toggle = document.querySelector(`.nav-toggle[aria-controls="${submenu.id}"]`);
      setSubMenuOpen(submenu, toggle, true);
    }
  }
}

// --- Submenus ---
function setSubMenuOpen(menu, btn, open) {
  if (!menu) return;
  menu.classList.toggle('show-submenu', open);
  if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function toggleSubMenu(menuId, btn) {
  const menu = document.getElementById(menuId || 'r093-submenu');
  if (!menu) return;
  const toggle = btn || document.querySelector(`.nav-toggle[aria-controls="${menu.id}"]`);
  setSubMenuOpen(menu, toggle, !menu.classList.contains('show-submenu'));
}

// Back-compatible wrappers for the older per-unit toggle names.
function toggleR094SubMenu() { toggleSubMenu('r094-submenu'); }
function toggleR096SubMenu() { toggleSubMenu('r096-submenu'); }

/* ============================================================
   CONTENT LOADING
   ============================================================ */
function loadContent(topic, options) {
  const opts = options || {};
  const display = document.getElementById('display-area');
  if (!display) return;

  if (!topicExists(topic)) topic = DEFAULT_TOPIC;

  // Any timer or dropdown belonging to the page we are leaving must stop
  // before its DOM is replaced, or it keeps firing against dead nodes.
  clearInterval(quizTimer);
  closeSearchResults();

  // The page's bundle may not have arrived yet — fetch it, then render.
  if (!contentData[topic]) {
    const unit = bundleForTopic(topic);
    display.innerHTML = `<p class="empty-state">Loading ${escapeHTML(getPageTitle(topic))}…</p>`;
    loadUnitContent(unit).then(() => {
      if (contentData[topic]) loadContent(topic, opts);
      else display.innerHTML = '<p class="empty-state">That page could not be loaded. Check your connection and try again.</p>';
    }).catch(() => {
      display.innerHTML = '<p class="empty-state">That page could not be loaded. Check your connection and try again.</p>';
    });
    return;
  }

  display.innerHTML = contentData[topic];
  applyCourseChrome(topic, display);
  enhanceContent(display);
  restoreChecks();

  // --- URL / history ---
  if (!opts.fromHistory) {
    const previous = (history.state && history.state.topic) || null;
    const state = { topic: topic, prevTopic: previous };
    if (previous === null) {
      history.replaceState(state, '', '#' + topic);
    } else if (previous !== topic) {
      history.pushState(state, '', '#' + topic);
    }
  }

  currentTopic = topic;

  // --- Page identity ---
  const title = getPageTitle(topic);
  document.title = topic === DEFAULT_TOPIC
    ? 'iMedia Hub | Student Dashboard'
    : `${title} | iMedia Hub`;

  // --- Back button ---
  const backBtn = document.getElementById('floating-back-btn');
  const backBtnText = document.getElementById('back-btn-text');
  const prevTopic = (history.state && history.state.prevTopic) || null;
  if (backBtn) backBtn.hidden = (topic === DEFAULT_TOPIC);
  if (backBtnText) {
    backBtnText.setAttribute('data-hover', '← Back to ' + getPageTitle(prevTopic || DEFAULT_TOPIC));
  }

  // Page-specific initialisation
  if (topic === DEFAULT_TOPIC) renderDashboardPanels();
  if (topic === 'r093_quiz') initQuizInOrder();
  if (topic === 'quiz_trainer') {
    loadQuizBank().then(() => {
      quizInitMenu();
      // Arriving from the revision plan opens that topic straight away.
      if (pendingQuizTopic) {
        const wanted = pendingQuizTopic;
        pendingQuizTopic = null;
        if (quizQuestionBank[wanted]) quizStartSession(wanted);
      }
    }).catch(showQuizBankError);
  }

  // Refresh XP / level displays after any page load (topbar always, home stats if present)
  if (typeof updateXpDisplay === 'function') updateXpDisplay();
  if (typeof refreshAchievements === 'function') refreshAchievements();

  setActiveNav(topic);

  if (window.innerWidth <= 768) setNavOpen(false);

  // --- Announce the change ---
  // Screen readers get told the page changed, and focus is moved into the
  // new content so the next Tab starts in the right place.
  const announcer = document.getElementById('route-announcer');
  if (announcer) announcer.textContent = title + ' loaded';

  if (!opts.silent) {
    const heading = display.querySelector('h1');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}

let currentTopic = DEFAULT_TOPIC;

/* ============================================================
   COURSE CHROME
   Breadcrumb, position and next/previous links, all derived
   from COURSE so no page template has to carry them.
   ============================================================ */
let courseIndexCache = null;

function getCourseIndex() {
  if (courseIndexCache) return courseIndexCache;

  courseIndexCache = {};
  COURSE.forEach(unit => {
    // A flat run of the unit's pages, so next/previous can cross sections.
    const flat = unit.sections.reduce((all, s) => all.concat(s.pages), []);

    unit.sections.forEach(section => {
      section.pages.forEach((page, i) => {
        const at = flat.indexOf(page);
        courseIndexCache[page] = {
          unit: unit.unit,
          code: unit.code,
          unitLabel: unit.label,
          unitKind: unit.kind,
          hub: unit.sections[0].pages[0],
          sectionLabel: section.label,
          sectionStart: section.pages[0],
          positionInSection: i + 1,
          sectionLength: section.pages.length,
          prev: at > 0 ? flat[at - 1] : null,
          next: at < flat.length - 1 ? flat[at + 1] : null
        };
      });
    });
  });

  return courseIndexCache;
}

function crumbLink(topic, label) {
  return `<a href="#${topic}" onclick="navTo(event, '${topic}')">${escapeHTML(label)}</a>`;
}

// Injects the breadcrumb/position header above the page's <h1>, and the
// next/previous pager at the foot. Pages outside COURSE get neither.
function applyCourseChrome(topic, root) {
  if (!root) return;

  root.removeAttribute('data-unit');
  const place = getCourseIndex()[topic];
  if (!place) return;

  root.setAttribute('data-unit', place.unit);

  const heading = root.querySelector('h1');
  const isUnitOverview = place.sectionLabel === 'Unit overview';

  // --- header ---
  const header = document.createElement('div');
  header.className = 'page-chrome';

  // On the unit's own overview page a link back to itself is just noise.
  const crumbs = isUnitOverview ? [] : [crumbLink(place.hub, place.code)];
  if (!isUnitOverview && place.sectionStart !== topic) {
    crumbs.push(crumbLink(place.sectionStart, place.sectionLabel));
  }

  const pct = Math.round((place.positionInSection / place.sectionLength) * 100);

  header.innerHTML = `
    <p class="unit-eyebrow">${escapeHTML(place.code)} <span aria-hidden="true">·</span> ${escapeHTML(place.unitKind)}</p>
    <nav class="crumbs" aria-label="Breadcrumb">
      ${crumbs.map(c => c + '<span aria-hidden="true">›</span>').join('')}
      <span class="crumb-current" aria-current="page">${escapeHTML(getPageTitle(topic))}</span>
    </nav>
    ${place.sectionLength > 1 ? `
      <div class="progress-line">
        <span class="progress-label">${escapeHTML(place.sectionLabel)}</span>
        <span class="progress-track" role="progressbar" aria-label="Progress through ${escapeHTML(place.sectionLabel)}"
          aria-valuemin="1" aria-valuemax="${place.sectionLength}" aria-valuenow="${place.positionInSection}">
          <span style="width:${pct}%"></span>
        </span>
        <span class="progress-count">page ${place.positionInSection} of ${place.sectionLength}</span>
      </div>` : ''}
  `;

  // The <h1> is not always a direct child — on some pages it sits inside a
  // wrapper — so walk up to the top-level block that contains it.
  let anchor = heading;
  while (anchor && anchor.parentElement !== root) anchor = anchor.parentElement;
  root.insertBefore(header, anchor || root.firstChild);

  // --- pager ---
  if (!place.prev && !place.next) return;

  const pager = document.createElement('nav');
  pager.className = 'pager';
  pager.setAttribute('aria-label', 'Page navigation');
  pager.innerHTML = `
    ${place.prev ? `
      <a class="pager-link" href="#${place.prev}" onclick="navTo(event, '${place.prev}')">
        <span class="dir">← Previous</span>
        <span class="to">${escapeHTML(getPageTitle(place.prev))}</span>
      </a>` : '<span></span>'}
    ${place.next ? `
      <a class="pager-link pager-next" href="#${place.next}" onclick="navTo(event, '${place.next}')">
        <span class="dir">Next →</span>
        <span class="to">${escapeHTML(getPageTitle(place.next))}</span>
      </a>` : '<span></span>'}
  `;
  root.appendChild(pager);
}

/* The 293-question bank is 75 KB that only the Quiz Trainer needs, so it is
   fetched the first time that page is opened rather than on every visit to
   the site. The promise is cached, so it is only ever fetched once. */
let quizBankPromise = null;

function loadQuizBank() {
  if (typeof quizQuestionBank !== 'undefined') return Promise.resolve();
  if (quizBankPromise) return quizBankPromise;

  quizBankPromise = new Promise((resolve, reject) => {
    const tag = document.createElement('script');
    tag.src = 'data-quiz.js';
    tag.onload = resolve;
    tag.onerror = () => { quizBankPromise = null; reject(new Error('Could not load data-quiz.js')); };
    document.head.appendChild(tag);
  });

  return quizBankPromise;
}

function showQuizBankError() {
  const menu = document.getElementById('quiz-topic-grid');
  if (menu) {
    menu.innerHTML = '<p class="empty-state">The question bank could not be loaded. Check your connection and refresh the page.</p>';
  }
}

// Rewrites a heading to a different level, keeping its attributes, content
// and place in the document. Element tag names cannot be changed in place.
function setHeadingLevel(heading, level) {
  const replacement = document.createElement('h' + level);
  [...heading.attributes].forEach(a => replacement.setAttribute(a.name, a.value));
  replacement.innerHTML = heading.innerHTML;
  heading.parentNode.replaceChild(replacement, heading);
  return replacement;
}

// Walks the headings in document order and closes any gap of more than one
// level, so h1 → h3 becomes h1 → h2. Deeper structure is kept intact.
function normaliseHeadingLevels(root) {
  const headings = [...root.querySelectorAll('h1, h2, h3, h4, h5, h6')];
  if (!headings.length) return;

  let previous = 1;
  headings.forEach((heading, index) => {
    const level = Number(heading.tagName[1]);

    if (index === 0) { previous = level; return; }

    const corrected = level > previous + 1 ? previous + 1 : level;
    if (corrected !== level) setHeadingLevel(heading, corrected);
    previous = corrected;
  });
}

/* Post-injection pass over freshly rendered content.
   Content pages are hand-written HTML with inline onclick handlers; rather
   than rewrite 200 of them, this gives every one of them the keyboard
   behaviour a real button has, and puts wide tables in a scroll container. */
function enhanceContent(root) {
  if (!root) return;

  root.querySelectorAll('[onclick]').forEach(el => {
    const tag = el.tagName;
    if (tag === 'BUTTON' || tag === 'A' || tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
    if (el.hasAttribute('data-enhanced-button')) return;

    el.setAttribute('data-enhanced-button', '');
    if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    el.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        el.click();
      }
    });
  });

  // Cards written as "⚠️ SOMETHING" headings become proper warning callouts,
  // so every aside on the site reads the same way instead of relying on an
  // emoji plus whatever colour that page happened to hard-code.
  root.querySelectorAll('.card > h3, .card > h4').forEach(heading => {
    if (!/^\s*[⚠❗❌]/u.test(heading.textContent)) return;
    const card = heading.parentElement;
    if (card.classList.contains('card--warn')) return;
    card.classList.add('card--warn');
    // The component supplies the icon now; drop the literal one.
    heading.textContent = heading.textContent.replace(/^\s*[⚠❗❌]️?\s*/u, '');
    heading.style.removeProperty('color');
  });

  // Screen readers navigate a long page by heading level, so the outline must
  // never skip one. Pages written with cards under the title jumped h1 → h3,
  // reading as though a section were missing. Relative nesting is preserved;
  // a heading is only ever promoted to close a gap. Component CSS is bound to
  // the component rather than the tag, so nothing changes visually.
  normaliseHeadingLevels(root);

  // Card header plates that show a caption on the default gradient need a
  // dark-mode repaint; ones that set their own background — a logo image or
  // a brand colour — already look after themselves.
  root.querySelectorAll('.card-image').forEach(plate => {
    const inline = plate.getAttribute('style') || '';
    if (!/background/i.test(inline) && plate.textContent.trim()) {
      plate.classList.add('card-image--text');
    }
  });

  // Wide tables scroll inside their own box instead of widening the page.
  root.querySelectorAll('table').forEach(table => {
    if (table.parentElement && table.parentElement.classList.contains('table-scroll')) return;
    const wrap = document.createElement('div');
    wrap.className = 'table-scroll';
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('role', 'region');
    wrap.setAttribute('aria-label', 'Table, scrolls sideways');
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });
}

// --- Back button: uses real browser history so it stays in step with the URL ---
function goBack() {
  if (history.state && history.state.prevTopic) {
    history.back();
  } else {
    loadContent(DEFAULT_TOPIC);
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = data ? document.getElementById(data) : null;
  const dropZone = ev.target.closest('.drop-zone');
  const feedback = document.getElementById('game-feedback');

  // Anything that isn't one of the game tiles — a link, selected text, a
  // file dragged in from the desktop — resolves to nothing. Ignore it.
  if (!draggedElement || !draggedElement.classList.contains('draggable-role')) return;
  if (!feedback) return;

  if (dropZone) {
    const correctPhase = draggedElement.getAttribute('data-phase');
    const targetPhase = dropZone.id;

    // A role is correct if it matches the phase OR works in 'all' phases
    if (correctPhase === targetPhase || correctPhase === 'all') {
      dropZone.appendChild(draggedElement);
      draggedElement.style.background = "#2E7D32"; // Green
      draggedElement.style.cursor = "default";
      draggedElement.setAttribute("draggable", "false"); // Lock it in
      feedback.innerText = "Correct! " + draggedElement.innerText + " is placed correctly.";
      feedback.style.color = "green";

      // Detect game completion: no remaining draggable items in the bank
      const bank = document.getElementById('legal-bank') || document.getElementById('role-bank');
      if (bank && bank.querySelectorAll('.draggable-role[draggable="true"]').length === 0) {
        if (!bank.dataset.completed) {
          bank.dataset.completed = '1';
          incrementAchievement('games');
          feedback.innerText = '🎉 All items placed correctly! Game complete.';
        }
      }
    } else {
      feedback.innerText = "Try again! That role doesn't primarily belong in " + targetPhase + ".";
      feedback.style.color = "red";
    }
  }
}

// --- CHECKLIST & MODAL LOGIC ---

/* Opens and closes the coursework checklists. Routed through the dialog
   helpers so they trap the keyboard and hand focus back like any other. */
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  if (modal.style.display === "block") closeDialog(modal);
  else openDialog(modal);
}

// 2. Save Checkbox State to LocalStorage
function saveCheck(checkbox) {
  lsSet('check:' + checkbox.id, checkbox.checked);
}

// 3. Restore Checkbox States (Run this when page loads)
function restoreChecks() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(box => {
    const savedState = lsGet('check:' + box.id);
    if (savedState === 'true') {
      box.checked = true;
    }
  });
}

// 4. Close Modal if clicking outside content
window.onclick = function (event) {
  if (event.target.classList && event.target.classList.contains('modal')) {
    closeDialog(event.target);
  }
}

/* ============================================================
   DIALOG FOCUS
   ------------------------------------------------------------
   A dialog has to keep the keyboard inside it while it covers
   the page, and hand focus back to whatever opened it. Used by
   the homework editor and the coursework checklists.
   ============================================================ */
const FOCUSABLE = 'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])';
let dialogOpener = null;

function focusableIn(dialog) {
  return [...dialog.querySelectorAll(FOCUSABLE)].filter(el => !el.disabled && el.offsetParent !== null);
}

function onDialogKeydown(event) {
  if (event.key !== 'Tab') return;
  const dialog = event.currentTarget;
  const items = focusableIn(dialog);
  if (!items.length) return;

  const first = items[0];
  const last = items[items.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openDialog(dialog) {
  if (!dialog) return;
  dialogOpener = document.activeElement;
  dialog.style.display = 'block';
  dialog.addEventListener('keydown', onDialogKeydown);
  const items = focusableIn(dialog);
  if (items.length) items[0].focus();
}

function closeDialog(dialog) {
  if (!dialog) return;
  dialog.style.display = 'none';
  dialog.removeEventListener('keydown', onDialogKeydown);
  if (dialogOpener && document.contains(dialogOpener)) dialogOpener.focus();
  dialogOpener = null;
}

/* ============================================================
   HOMEWORK EDITOR — the dashboard "+" button
   ------------------------------------------------------------
   Adds and removes homework in localStorage so the panel can be
   kept current without editing SCHEDULE in the source.
   ============================================================ */
function openHomeworkEditor() {
  let modal = document.getElementById('homework-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'homework-modal';
    modal.innerHTML = `
      <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="hw-modal-title">
        <div class="modal-header">
          <h3 id="hw-modal-title" style="margin:0; font-size:1.05rem; color:#fff;">Add homework</h3>
          <button type="button" class="close-modal" aria-label="Close" onclick="closeHomeworkEditor()">&times;</button>
        </div>
        <form class="hw-form" onsubmit="return submitHomework(event)">
          <div class="hw-field">
            <label for="hw-title">Title</label>
            <input type="text" id="hw-title" maxlength="80" required placeholder="e.g. TA2 Exam Questions">
          </div>
          <div class="hw-field">
            <label for="hw-due">Due date</label>
            <input type="date" id="hw-due" required>
          </div>
          <div class="hw-field">
            <label for="hw-task">What to do (optional)</label>
            <textarea id="hw-task" rows="3" maxlength="400"
              placeholder="e.g. Answer the past-paper questions on audience segmentation."></textarea>
          </div>
          <p class="hw-error" id="hw-error" role="alert"></p>
          <div class="hw-actions">
            <button type="submit" class="hw-save">Add homework</button>
            <button type="button" class="hw-cancel" onclick="closeHomeworkEditor()">Cancel</button>
          </div>
        </form>
        <div class="hw-custom-list" id="hw-custom-list"></div>
      </div>`;
    document.body.appendChild(modal);
  }

  renderCustomHomeworkList();

  const due = document.getElementById('hw-due');
  if (due && !due.value) due.value = isoDay();

  openDialog(modal);
}

function closeHomeworkEditor() {
  closeDialog(document.getElementById('homework-modal'));
}

function submitHomework(event) {
  event.preventDefault();
  const title = document.getElementById('hw-title').value.trim();
  const due = document.getElementById('hw-due').value;
  const task = document.getElementById('hw-task').value.trim();
  const error = document.getElementById('hw-error');

  if (!title) {
    error.textContent = 'Give the homework a title.';
    return false;
  }
  if (!parseISODate(due)) {
    error.textContent = 'Pick a due date.';
    return false;
  }

  error.textContent = '';
  addCustomHomework({ title, due, task });

  document.getElementById('hw-title').value = '';
  document.getElementById('hw-task').value = '';

  renderCustomHomeworkList();
  renderDashboardPanels();
  return false;
}

function renderCustomHomeworkList() {
  const wrap = document.getElementById('hw-custom-list');
  if (!wrap) return;

  const list = getCustomHomework().sort((a, b) => parseISODate(a.due) - parseISODate(b.due));
  if (!list.length) {
    wrap.innerHTML = '<h4>Your homework</h4><p class="hw-error" style="color:var(--muted-text)">Nothing added yet.</p>';
    return;
  }

  wrap.innerHTML = '<h4>Your homework</h4>' + list.map(hw => `
    <div class="hw-custom-row">
      <span>${escapeHTML(hw.title)} &middot; ${formatShortDate(parseISODate(hw.due))}</span>
      <button type="button" onclick="deleteCustomHomework('${hw.id}')"
        aria-label="Remove ${escapeHTML(hw.title)}">Remove</button>
    </div>`).join('');
}

function deleteCustomHomework(id) {
  removeCustomHomework(id);
  renderCustomHomeworkList();
  renderDashboardPanels();
}

function checkFormats() {
  const r1 = document.getElementById('res1').value;
  const f1 = document.getElementById('fmt1').value;
  const r2 = document.getElementById('res2').value;
  const f2 = document.getElementById('fmt2').value;
  const fb = document.getElementById('format-feedback');

  if (r1 === "300" && f1 === "high" && r2 === "72" && f2 === "lossy") {
    fb.innerText = "Excellent! You understand that print needs high resolution (300 DPI) while web needs compression (72 PPI).";
    fb.style.color = "green";
    if (!fb.dataset.completed) {
      fb.dataset.completed = '1';
      incrementAchievement('quizzes');
    }
  } else {
    fb.innerText = "Not quite right. Remember: Print = 300 DPI/Uncompressed. Web = 72 PPI/Lossy.";
    fb.style.color = "red";
  }
}

function checkBrief() {
  const aud = document.getElementById('ans_aud').value.toLowerCase();
  const con = document.getElementById('ans_con').value.toLowerCase();
  const sty = document.getElementById('ans_sty').value.toLowerCase();
  const fb = document.getElementById('brief-feedback');

  if (aud.includes("professionals") && con.includes("500") && sty.includes("neon")) {
    fb.innerText = "Perfect Interpretation! You identified the 20-30 professionals, the £500 budget constraint, and the neon/futuristic style.";
    fb.style.color = "green";
    if (!fb.dataset.completed) {
      fb.dataset.completed = '1';
      incrementAchievement('quizzes');
    }
  } else {
    fb.innerText = "Check the brief again! Did you catch the specific budget and the style requested?";
    fb.style.color = "orange";
  }
}
// ============================================================
// QUIZ TRAINER — merged from iMedia Trivia Revision
// ============================================================


// --- QUIZ TRAINER ENGINE ---
let quizCurrentQuestions = [];
let quizCurrentIndex = 0;
let quizScore = 0;
let quizTimer;
let quizTimeLeft = 30;
let quizIsTestMode = false;
let quizIsLongMode = false;
let quizCurrentXp = 10; // XP awarded per correct answer in the current session
let quizCurrentMode = null; // topic key of the session in progress, for the retry button
let quizXpEarned = 0; // XP banked during the current session, shown on the results screen
let quizScoreableCount = 0; // questions in this session that can actually be marked
let quizTypedCount = 0; // long-answer questions in this session, self-assessed
let quizCompletionBonus = 0; // XP added for finishing a harder mode

// Long-answer questions have no options and are marked by the student against
// the mark scheme, so they can never contribute to a score.
function quizIsTypedQuestion(q) {
  return !!q && (q.type === 'typed' || !Array.isArray(q.options) || !q.options.length);
}

// How many questions one sitting of a revision topic draws from its bank.
const QUIZ_TOPIC_SESSION_LENGTH = 10;

// Effort is paid per question, so a long activity is always worth more than
// a short one. Harder modes add a bonus on completion.
const QUIZ_XP_PER_QUESTION = 10;
const QUIZ_BONUS_PAST_PAPER = 50;
const QUIZ_BONUS_FULL_TEST = 100;

const QUIZ_PAST_PAPER_TOPICS = [
    "Topic Area 1: The media industry",
    "Topic Area 2: Factors influencing product design",
    "Topic Area 3: Pre-production planning",
    "Topic Area 4: Distribution considerations"
];

// --- ACHIEVEMENTS HELPERS ---
function incrementAchievement(key) {
    const id = 'ach-' + key;
    const next = parseInt(lsGet(id) || '0', 10) + 1;
    lsSet(id, next);
    refreshAchievements();
    return next;
}

function refreshAchievements() {
    ['quizzes', 'games', 'cards'].forEach(k => {
        const el = document.getElementById('ach-' + k);
        if (el) el.innerText = parseInt(lsGet('ach-' + k) || '0', 10);
    });
    // Activities Done lives on the dashboard and depends on these counters
    if (typeof updateXpDisplay === 'function') updateXpDisplay();
}

/* --- DAY STREAK ---
   Consecutive days the hub has been opened. Both the topbar pill and the
   dashboard stat card read this, so they can no longer disagree. */
const STREAK_COUNT_KEY = 'streak-count';
const STREAK_DATE_KEY = 'streak-last-visit';

function isoDay(date) {
    const d = date || new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getStreak() {
    return parseInt(lsGet(STREAK_COUNT_KEY) || '0', 10) || 0;
}

// Called once per page load: extends the streak on consecutive days,
// leaves it alone on repeat visits, and resets it after a missed day.
function recordVisit() {
    const today = isoDay();
    const last = lsGet(STREAK_DATE_KEY);

    if (last === today) return getStreak();

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const next = (last === isoDay(yesterday)) ? getStreak() + 1 : 1;
    lsSet(STREAK_COUNT_KEY, next);
    lsSet(STREAK_DATE_KEY, today);
    return next;
}

// --- XP / LEVEL HELPERS ---
function getTotalXp() {
    return parseInt(lsGet('total-xp') || '0', 10);
}

function addXp(amount) {
    if (!amount) return getTotalXp();
    const total = getTotalXp() + amount;
    lsSet('total-xp', total);
    updateXpDisplay();
    return total;
}

function getLevel() {
    return Math.floor(getTotalXp() / 100) + 1;
}

function getRank() {
    // Rank advances every 15 levels: F(1-15) → E(16-30) → D(31-45) → C(46-60) → B(61-75) → A(76-90) → S(91+)
    const lvl = getLevel();
    const tiers = ['F', 'E', 'D', 'C', 'B', 'A', 'S'];
    const idx = Math.min(tiers.length - 1, Math.floor((lvl - 1) / 15));
    return tiers[idx];
}

function updateXpDisplay() {
    const xp = getTotalXp();
    const lvl = getLevel();
    const into = xp % 100;
    const pct = into; // already out of 100
    const rank = getRank();
    const streak = getStreak();

    // Topbar rank avatar
    const rankBadge = document.getElementById('user-rank');
    if (rankBadge) rankBadge.innerHTML = `<span class="sr-only">Rank </span>${rank}`;

    // Topbar streak pill
    const streakEl = document.getElementById('streak-days');
    if (streakEl) streakEl.innerText = streak;

    // Topbar level pill
    const topbarLvl = document.querySelector('.user-level .level-label');
    if (topbarLvl) topbarLvl.innerText = `Lv.${lvl}`;
    const topbarFill = document.querySelector('.user-level .level-fill');
    if (topbarFill) topbarFill.style.width = pct + '%';
    const topbarBar = document.querySelector('.user-level .level-bar');
    if (topbarBar) topbarBar.setAttribute('aria-valuenow', String(pct));

    // Dashboard hero (home page only)
    const heroLevel = document.getElementById('hero-level');
    if (heroLevel) heroLevel.innerText = lvl;
    const heroRank = document.getElementById('hero-rank');
    if (heroRank) heroRank.innerText = rank;
    const heroXp = document.getElementById('hero-xp');
    if (heroXp) heroXp.innerText = xp;
    const ring = document.getElementById('level-ring');
    if (ring) {
        ring.style.setProperty('--ring-pct', pct);
        ring.setAttribute('aria-label', `Level ${lvl}, ${into} of 100 XP to the next level`);
    }

    // Welcome banner meta (retained for any page still using the old banner)
    const wm = document.querySelectorAll('.welcome-meta span');
    if (wm && wm.length >= 3) {
        wm[0].innerText = `Rank ${rank}`;
        wm[1].innerText = `${xp} Total XP`;
        wm[2].innerText = `Level ${lvl}`;
    }

    // Stats grid (home page only)
    const statCards = document.querySelectorAll('.stats-grid .stat-card');
    if (statCards && statCards.length >= 4) {
        const xpVal = statCards[0].querySelector('.stat-value');
        if (xpVal) xpVal.innerText = xp;
        const lvlValue = statCards[1].querySelector('.stat-value');
        const lvlLabel = statCards[1].querySelector('.stat-label');
        const lvlFill = statCards[1].querySelector('.stat-progress .fill');
        if (lvlValue) lvlValue.innerText = `Lv.${lvl}`;
        if (lvlLabel) lvlLabel.innerText = `${into}/100 XP`;
        if (lvlFill) lvlFill.style.width = pct + '%';
        // Day Streak (3rd card) — same source as the topbar pill
        const streakVal = statCards[2].querySelector('.stat-value');
        if (streakVal) streakVal.innerText = streak;
        // Activities Done (4th card) = sum of all achievements
        const total = ['quizzes','games','cards']
            .reduce((sum, k) => sum + parseInt(lsGet('ach-' + k) || '0', 10), 0);
        const actVal = statCards[3].querySelector('.stat-value');
        if (actVal) actVal.innerText = total;
    }
}

function quizInitMenu() {
    const topicGrid = document.getElementById('quiz-topic-grid');
    const pastPapersGrid = document.getElementById('quiz-past-papers-grid');
    if (topicGrid) topicGrid.innerHTML = '';
    if (pastPapersGrid) pastPapersGrid.innerHTML = '';

    const pastPaperTopics = [
        "Topic Area 1: The media industry",
        "Topic Area 2: Factors influencing product design",
        "Topic Area 3: Pre-production planning",
        "Topic Area 4: Distribution considerations"
    ];

    const sortedTopics = Object.keys(quizQuestionBank).sort();

    sortedTopics.forEach(topic => {
        if (topic === "Long Questions (6-12 Marks)") return;

        const bankSize = quizQuestionBank[topic].length;
        const isPastPaper = pastPaperTopics.includes(topic);
        const draw = isPastPaper ? bankSize : Math.min(QUIZ_TOPIC_SESSION_LENGTH, bankSize);

        const btn = document.createElement('button');
        btn.className = isPastPaper ? 'past-paper-btn' : 'topic-card';

        const name = document.createElement('span');
        name.className = 'quiz-card-name';
        name.textContent = topic;

        const meta = document.createElement('span');
        meta.className = 'quiz-card-meta';
        meta.textContent = isPastPaper
            ? `${bankSize} questions`
            : `${draw} questions, drawn from ${bankSize}`;

        btn.append(name, meta);
        btn.onclick = () => quizStartSession(topic);

        if (isPastPaper) {
            if (pastPapersGrid) pastPapersGrid.appendChild(btn);
        } else if (topicGrid) {
            topicGrid.appendChild(btn);
        }
    });
}

function quizStartSession(mode) {
    quizIsTestMode = (mode === 'TEST');
    quizIsLongMode = (mode === 'Long Questions (6-12 Marks)');
    quizCurrentMode = mode;
    quizScore = 0;
    quizXpEarned = 0;
    quizCurrentIndex = 0;

    const results = document.getElementById('quiz-results-area');
    if (results) results.classList.add('hidden');

    // XP is paid per question, not per mode. Paying per mode meant a
    // five-question past paper was worth two and a half times a ten-question
    // topic quiz, which rewarded doing the shortest thing available. Modes
    // that ask more of the student earn a completion bonus instead.
    quizCurrentXp = quizIsLongMode ? 0 : QUIZ_XP_PER_QUESTION;
    quizCompletionBonus = quizIsTestMode ? QUIZ_BONUS_FULL_TEST
        : QUIZ_PAST_PAPER_TOPICS.includes(mode) ? QUIZ_BONUS_PAST_PAPER
        : 0;

    if (quizIsTestMode) {
        let allQ = [];
        Object.keys(quizQuestionBank).forEach(k => {
            if (k !== "Long Questions (6-12 Marks)") allQ = allQ.concat(quizQuestionBank[k]);
        });
        // Fisher–Yates: a random comparator is not a uniform shuffle, so the
        // same questions kept surfacing in the 25 drawn from the full bank.
        shuffleArray(allQ);
        quizCurrentQuestions = allQ.slice(0, 25);
        document.getElementById('quiz-topic-display').innerText = "FULL EXAM MODE";
    } else {
        quizCurrentQuestions = [...quizQuestionBank[mode]];

        if (!quizIsLongMode) {
            shuffleArray(quizCurrentQuestions);
            // A revision topic holds a bank of 30; each sitting draws 10 of them,
            // so the same topic can be revisited without repeating the same set.
            // Past-paper sets are short curated papers and are always sat whole.
            if (!QUIZ_PAST_PAPER_TOPICS.includes(mode)) {
                quizCurrentQuestions = quizCurrentQuestions.slice(0, QUIZ_TOPIC_SESSION_LENGTH);
            }
        }

        document.getElementById('quiz-topic-display').innerText = `TOPIC: ${mode.toUpperCase()}`;
    }

    // Past-paper sets mix marked questions with self-assessed long answers.
    // Only the marked ones can count towards a score.
    quizTypedCount = quizCurrentQuestions.filter(quizIsTypedQuestion).length;
    quizScoreableCount = quizCurrentQuestions.length - quizTypedCount;

    document.getElementById('quiz-main-menu').classList.add('hidden');
    document.getElementById('quiz-area').classList.remove('hidden');
    document.getElementById('quiz-area').classList.add('fade-in');

    if (quizIsLongMode) {
        document.getElementById('quiz-progress-wrapper').classList.add('hidden');
        document.getElementById('quiz-score-display').classList.add('hidden');
        document.getElementById('quiz-timer-display').classList.add('hidden');
    } else {
        document.getElementById('quiz-progress-wrapper').classList.remove('hidden');
        document.getElementById('quiz-header-info').classList.remove('hidden');
        document.getElementById('quiz-score-display').classList.remove('hidden');
        document.getElementById('quiz-score-display').innerText = "Score: 0";
    }

    quizNextQuestion();
}

function quizNextQuestion() {
    if (quizCurrentIndex >= quizCurrentQuestions.length) {
        quizShowResults(); return;
    }
    const qData = quizCurrentQuestions[quizCurrentIndex];

    document.getElementById('quiz-feedback-area').innerHTML = '';
    document.getElementById('quiz-feedback-area').classList.remove('fade-in');
    document.getElementById('quiz-continue-btn').classList.add('hidden');

    if (!quizIsLongMode) {
        document.getElementById('quiz-progress-bar').style.width = `${((quizCurrentIndex + 1) / quizCurrentQuestions.length) * 100}%`;
    }

    document.getElementById('quiz-question-text').innerText = qData.q;

    const isTypedQuestion = quizIsLongMode || qData.type === "typed";

    if (isTypedQuestion) {
        document.getElementById('quiz-options-container').classList.add('hidden');
        const longBox = document.getElementById('quiz-long-answer-box');
        longBox.classList.remove('hidden');
        longBox.value = '';

        const container = document.getElementById('quiz-options-container');
        container.innerHTML = `<button id="quiz-submit-long-btn" onclick="quizHandleLongAnswer()">SUBMIT & REVEAL MARK SCHEME</button>`;
        container.classList.remove('hidden');

        clearInterval(quizTimer);
        document.getElementById('quiz-timer-display').innerText = "UNTIMED - TAKE YOUR TIME";

    } else {
        document.getElementById('quiz-long-answer-box').classList.add('hidden');
        document.getElementById('quiz-options-container').classList.remove('hidden');
        quizRenderOptions(qData);
        if (quizIsTestMode) quizStartTimer();
        else document.getElementById('quiz-timer-display').innerText = "";
    }

    quizCurrentIndex++;
}

function quizHandleLongAnswer() {
    const f = document.getElementById('quiz-feedback-area');
    const qData = quizCurrentQuestions[quizCurrentIndex - 1];

    document.getElementById('quiz-submit-long-btn').classList.add('hidden');

    const formattedMarkScheme = qData.why.replace(/\n/g, '<br>');

    f.innerHTML = `<h3>Self-Assessment</h3><p style="text-align:left; font-size:1.1rem;">${formattedMarkScheme}</p><p style="color:#9A6206; margin-top:15px; font-weight:bold;">Review your typed answer above against the points in the mark scheme.</p>`;
    f.classList.add('fade-in');

    document.getElementById('quiz-continue-btn').classList.remove('hidden');
}

function quizStartTimer() {
    clearInterval(quizTimer); quizTimeLeft = 30;
    document.getElementById('quiz-timer-display').innerText = `TIME: ${quizTimeLeft}s`;
    quizTimer = setInterval(() => {
        quizTimeLeft--;
        document.getElementById('quiz-timer-display').innerText = `TIME: ${quizTimeLeft}s`;
        if (quizTimeLeft <= 0) { clearInterval(quizTimer); quizHandleAnswer(null, quizCurrentQuestions[quizCurrentIndex - 1].a, quizCurrentQuestions[quizCurrentIndex - 1].why); }
    }, 1000);
}

function quizRenderOptions(qData) {
    const container = document.getElementById('quiz-options-container');
    container.innerHTML = '';
    const options = [...qData.options];
    shuffleArray(options);
    options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        // Lettered and left-aligned, the way options appear on the real paper.
        const letter = document.createElement('span');
        letter.className = 'option-letter';
        letter.setAttribute('aria-hidden', 'true');
        letter.textContent = 'ABCDEFGH'[i] || '•';
        const label = document.createElement('span');
        label.className = 'option-text';
        label.textContent = opt;
        btn.append(letter, label);
        btn.onclick = () => quizHandleAnswer(opt, qData.a, qData.why);
        container.appendChild(btn);
    });
}

function quizHandleAnswer(choice, correct, why) {
    if (typeof quizTimer !== 'undefined') clearInterval(quizTimer);

    const btns = document.querySelectorAll('#quiz-options-container .option-btn');

    const cleanChoice = choice ? choice.trim() : "";
    const cleanCorrect = correct.trim();

    // Marks are shown as well as colour: red and green alone are unreadable
    // for a colour-blind student, and that is roughly one in twelve boys.
    const markButton = (b, symbol, label) => {
        const mark = document.createElement('span');
        mark.className = 'option-mark';
        mark.setAttribute('aria-hidden', 'true');
        mark.textContent = symbol;
        b.appendChild(mark);
        const text = b.querySelector('.option-text');
        b.setAttribute('aria-label', `${text ? text.textContent.trim() : ''} — ${label}`);
    };

    btns.forEach(b => {
        b.disabled = true;
        b.style.opacity = "0.5";

        // Read the label only — the button also carries its A/B/C/D letter.
        const labelEl = b.querySelector('.option-text');
        const btnText = (labelEl ? labelEl.textContent : b.innerText).trim();

        if (btnText === cleanCorrect) {
            b.classList.add('correct-answer');
            b.style.opacity = "1";
            markButton(b, '✓', cleanChoice === cleanCorrect ? 'correct, your answer' : 'the correct answer');
        }

        if (btnText === cleanChoice && btnText !== cleanCorrect) {
            b.classList.add('wrong-answer');
            b.style.opacity = "1";
            markButton(b, '✗', 'your answer, incorrect');
        }
    });

    const f = document.getElementById('quiz-feedback-area');
    if (cleanChoice === cleanCorrect) {
        let xpBadge = '';
        if (quizCurrentXp > 0) {
            addXp(quizCurrentXp);
            quizXpEarned += quizCurrentXp;
            xpBadge = `<div class="xp-badge">+${quizCurrentXp} XP</div>`;
        }
        f.innerHTML = `<span style="color:#27ae60; font-weight:bold; font-size:1.2rem;">CORRECT!</span> ${xpBadge}<br><br>` + why;
        quizScore++;
    } else {
        f.innerHTML = `<span style="color:#c0392b; font-weight:bold; font-size:1.2rem;">INCORRECT.</span><br><br>` + why;
    }

    f.classList.add('fade-in');
    document.getElementById('quiz-continue-btn').classList.remove('hidden');

    if (!quizIsLongMode) {
        document.getElementById('quiz-score-display').innerText = `Score: ${quizScore}`;
    }
}

function quizShowHint() {
    const qData = quizCurrentQuestions[quizCurrentIndex - 1];
    const feedback = document.getElementById('quiz-feedback-area');
    if (!qData || !feedback) return;

    // Rendered inline rather than through alert(), which on mobile Safari
    // blocks the whole page behind a system dialog.
    const existing = document.getElementById('quiz-hint-text');
    if (existing) existing.remove();

    const hint = document.createElement('p');
    hint.id = 'quiz-hint-text';
    hint.style.margin = '0';
    hint.innerHTML = `<strong>HINT:</strong> ${escapeHTML(qData.hint || 'No hint for this one.')}`;
    feedback.prepend(hint);
    feedback.classList.add('fade-in');
}

function quizShowMenu() {
    clearInterval(quizTimer);
    loadContent('quiz_trainer');
}

// Score bands, worst first. The message names the next thing to do rather
// than just grading the attempt.
const QUIZ_VERDICTS = [
    { min: 0,  title: 'Worth another go',  message: 'Read back through the topic pages, then take another ten. The explanation under each wrong answer is the fastest way in.' },
    { min: 50, title: 'Getting there',     message: 'Solid start. Look again at the questions you missed — the explanation under each one tells you exactly what the examiner wanted.' },
    { min: 70, title: 'Strong pass',       message: 'Comfortably above a pass on this topic. Another ten will pull in questions you have not seen yet.' },
    { min: 90, title: 'Outstanding',       message: 'Close to full marks. Try the timed full test, or move on to a topic you have practised less.' }
];

function quizVerdict(pct) {
    return QUIZ_VERDICTS.reduce((best, band) => (pct >= band.min ? band : best), QUIZ_VERDICTS[0]);
}

function quizShowResults() {
    document.getElementById('quiz-area').classList.add('hidden');
    document.getElementById('quiz-results-area').classList.remove('hidden');

    const eyebrow = document.getElementById('quiz-results-topic');
    const title = document.getElementById('quiz-results-title');
    const message = document.getElementById('quiz-results-message');
    const ring = document.getElementById('quiz-score-ring');
    const fraction = document.getElementById('quiz-score-fraction');
    const pctLabel = document.getElementById('quiz-score-pct');
    const breakdown = document.getElementById('quiz-results-breakdown');
    const retry = document.getElementById('quiz-results-retry');

    incrementAchievement('quizzes');

    if (eyebrow) {
        eyebrow.textContent = quizIsTestMode ? 'Full exam mode' : (quizCurrentMode || '');
    }

    if (quizIsLongMode) {
        // No score to report — long answers are self-assessed against the mark scheme.
        if (title) title.textContent = 'Extended writing practice complete';
        if (message) message.textContent = 'Compare each answer you typed against the indicative content, and note any point you did not make.';
        if (ring) ring.hidden = true;
        if (breakdown) breakdown.hidden = true;
        if (retry) retry.hidden = true;
        return;
    }

    // Score out of the questions that could be marked, not out of every
    // question asked — otherwise a flawless past paper reports as a fail.
    const total = quizScoreableCount || quizCurrentQuestions.length;
    const pct = total ? Math.round((quizScore / total) * 100) : 0;
    const verdict = quizVerdict(pct);

    // Kept so the dashboard can tell the student where they are weakest.
    if (!quizIsTestMode && quizCurrentMode) {
        recordTopicScore(quizCurrentMode, quizScore, total);
    }

    if (ring) {
        ring.hidden = false;
        ring.style.setProperty('--ring-pct', pct);
        ring.style.setProperty('--ring-colour', pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--note-amber)' : 'var(--danger)');
        ring.setAttribute('aria-label', `Scored ${quizScore} out of ${total}, ${pct} per cent`);
    }
    if (fraction) fraction.textContent = `${quizScore}/${total}`;
    if (pctLabel) pctLabel.textContent = `${pct}%`;
    if (title) title.textContent = verdict.title;
    if (message) {
        message.textContent = quizTypedCount
            ? `${verdict.message} The ${quizTypedCount} written ${quizTypedCount === 1 ? 'answer' : 'answers'} in this paper are not marked here — check them against the mark scheme yourself.`
            : verdict.message;
    }

    // Finishing a harder mode is worth something on its own.
    if (quizCompletionBonus) {
        addXp(quizCompletionBonus);
        quizXpEarned += quizCompletionBonus;
    }

    if (breakdown) {
        breakdown.hidden = false;
        document.getElementById('quiz-results-correct').textContent = quizScore;
        document.getElementById('quiz-results-missed').textContent = total - quizScore;
        document.getElementById('quiz-results-xp').textContent = quizXpEarned;

        // Only shown when the paper contained written answers.
        const selfCell = document.getElementById('quiz-results-selfassess-cell');
        if (selfCell) {
            selfCell.hidden = !quizTypedCount;
            document.getElementById('quiz-results-selfassess').textContent = quizTypedCount;
        }
    }

    if (retry) {
        // Past-paper sets are sat whole, so "another ten" makes no sense there.
        const canRedraw = !quizIsTestMode && quizCurrentMode && !QUIZ_PAST_PAPER_TOPICS.includes(quizCurrentMode);
        retry.hidden = !canRedraw;
        retry.textContent = `Another ${QUIZ_TOPIC_SESSION_LENGTH} from this topic`;
    }
}

// Redraws a fresh random set from the same topic.
function quizRetrySession() {
    if (!quizCurrentMode) { quizShowMenu(); return; }
    document.getElementById('quiz-results-area').classList.add('hidden');
    quizStartSession(quizCurrentMode);
}

