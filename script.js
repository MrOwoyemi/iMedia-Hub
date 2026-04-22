const r093Keywords = [
  { term: "Traditional Media", def: "Communication methods that existed before the internet (e.g., Print, Radio, TV)." },
  { term: "New Media", def: "Content that is digital, internet-based, and interactive (e.g., Social Media, Apps, Games)." },
  { term: "Demographics", def: "Statistical data about a population, such as Age, Gender, Income, and Location." },
  { term: "Psychographics", def: "Categorising an audience based on their personality, interests, lifestyle, and opinions." },
  { term: "Primary Research", def: "New research carried out by you specifically for the current project (e.g., Questionnaires, Focus Groups)." },
  { term: "Secondary Research", def: "Using existing research gathered by someone else (e.g., Census data, Books, Internet articles)." },
  { term: "Quantitative Data", def: "Data that can be measured and written in numbers (Fact-based)." },
  { term: "Qualitative Data", def: "Data that describes qualities, opinions, and feelings (Subjective)." },
  { term: "House Style", def: "A set of rules (colours, fonts, logo placement) ensuring consistency across a brand." },
  { term: "Iconography", def: "Visual images and symbols used in a work of art or the study or interpretation of these." },
  { term: "Work Plan", def: "A structured timeline showing tasks, milestones, resources, and deadlines for a project." },
  { term: "Contingency", def: "Extra time or resources set aside in a plan to handle unforeseen problems ('Plan B')." },
  { term: "Milestone", def: "A key point in a project that marks the completion of a significant phase." },
  { term: "Risk Assessment", def: "Identifying potential hazards and planning measures to mitigate (reduce) them." },
  { term: "Recce", def: "A pre-filming visit to a location to check its suitability (lighting, sound, safety)." },
  { term: "Copyright", def: "Legal protection for intellectual property (music, art, film). It is automatic." },
  { term: "Trademark", def: "A registered symbol, word, or words legally established to represent a company or product." },
  { term: "Intellectual Property", def: "Intangible property that is the result of creativity (e.g., patents, copyrights)." },
  { term: "Defamation", def: "Damaging the good reputation of someone (Slander is spoken, Libel is written)." },
  { term: "Model Release", def: "A legal form signed by a person granting permission for their image to be used commercially." },
  { term: "GDPR", def: "General Data Protection Regulation. Laws controlling how personal data is collected and stored." },
  { term: "Lossy Compression", def: "Reducing file size by permanently deleting data, lowering quality (e.g., JPG, MP3)." },
  { term: "Lossless Compression", def: "Reducing file size without losing any data, retaining quality (e.g., PNG, FLAC)." },
  { term: "Resolution", def: "The number of pixels in an image (Width x Height). Higher resolution = better quality." },
  { term: "DPI / PPI", def: "Dots Per Inch (Print) / Pixels Per Inch (Screen). A measure of pixel density." },
  { term: "Bitmap / Raster", def: "Images made of a grid of pixels. They lose quality when resized (e.g., JPEG, PNG)." },
  { term: "Vector", def: "Images made of mathematical paths. They can be scaled infinitely without quality loss (e.g., SVG, EPS)." },
  { term: "Sample Rate", def: "The number of times an audio wave is measured per second (Hz)." },
  { term: "Bit Depth", def: "The amount of information in each audio sample (Dynamic Range)." }
];

let currentCardIndex = 0;
let isFlipped = false;

const homeworkBank = [
  {
    title: "1.2 Job Roles (Technical)",
    dateStr: "18/03/26",
    task: "Make revision cards on technical job roles in the media industry: Camera operator, Games programmer, Sound editor, Video editor, Web developer."
  },
  {
    title: "1.2 Job Roles (Senior)",
    dateStr: "25/03/26",
    task: "Make revision cards on senior job roles in the media industry: Campaign manager, Creative director, Director, Editor, Production manager."
  },
  {
    title: "TA1.1 & 1.2 Revision",
    dateStr: "01/04/26",
    task: "Answer exam questions on Topic Areas 1.1 and 1.2 (Sectors, Products, Roles). Red pen – Go over the exam questions making notes on what you got wrong."
  },
  {
    title: "TA1 Seneca Learning",
    dateStr: "08/04/26",
    task: "Complete Seneca Learning Quizzes on Topic Area 1. Review all TA1 keywords and concepts."
  },
  {
    title: "TA1 Exam Questions",
    dateStr: "15/04/26",
    task: "Answer exam questions on Topic Area 1: Media industry and job roles."
  },
  {
    title: "R093 Past Paper",
    dateStr: "22/04/26",
    task: "Complete a full R093 past paper under timed conditions. Review all topic areas."
  },
  {
    title: "R093 Revision: TA2 Focus",
    dateStr: "29/04/26",
    task: "Focus on Topic Area 2. Review audience demographics, psychographics, and primary/secondary research methods."
  },
  {
    title: "R093 Revision: TA3 Focus",
    dateStr: "06/05/26",
    task: "Focus on Topic Area 3 (Pre-production). Practice creating a mind map and review Legal/Ethical constraints (Privacy, Defamation, Copyright)."
  },
  {
    title: "R093 Revision: TA4 Focus",
    dateStr: "13/05/26",
    task: "Focus on Topic Area 4 (Distribution). Revise properties of digital files, file formats (JPEG, MP4, MP3), and compression (Lossy vs Lossless)."
  },
  {
    title: "R093 Second Mock Paper",
    dateStr: "20/05/26",
    task: "Complete a second full R093 past paper. Use the mark scheme to self-assess with a red pen and highlight areas for final improvement."
  },
  {
    title: "R093 Final Prep",
    dateStr: "27/05/26",
    task: "Final Exam Prep! Use the interactive flashcards and match-up games on the dashboard to test your keyword knowledge before the big day."
  }
];

// --- 3. HELPER FUNCTIONS ---
function createHomeworkCard(title, dateStr, task) {
  const parts = dateStr.split('/');
  const dueDate = new Date("20" + parts[2], parts[1] - 1, parts[0]);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  dueDate.setHours(0, 0, 0, 0);
  const diffTime = dueDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
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
  return `
    <div class="${cls}">
      <div>
        <p class="exam-item-title">${title}</p>
        <p class="exam-item-date">Due ${dateStr} &middot; ${task.length > 60 ? task.substring(0, 60) + '…' : task}</p>
      </div>
      <span class="${statusCls}">${statusText}</span>
    </div>
  `;
}

function createExamCountdownHTML() {
  // Set the exam date (Year, Month index [0-11], Day, Hour, Minute)
  const examDate = new Date(2026, 5, 8, 13, 20); // June 8, 2026
  const today = new Date();

  const diffTime = examDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.ceil(diffDays / 7);

  if (diffDays <= 0) {
    return `
      <div class="exam-item upcoming" style="background: #DCFCE7;">
        <div>
          <p class="exam-item-title">Creative iMedia R093 Paper</p>
          <p class="exam-item-date">Exam completed</p>
        </div>
        <span class="exam-status" style="color: #16A34A;">Completed</span>
      </div>
     `;
  }

  // --- School Weeks Logic ---
  let holidayWeeks = 0;

  // Easter Break 2026 (~March 30 to April 10) - 2 weeks
  const easterStart = new Date(2026, 2, 30);
  if (today < easterStart) {
    holidayWeeks += 2;
  }

  // May Half Term 2026 (~May 25 to May 29) - 1 week
  const mayHalfTermStart = new Date(2026, 4, 25);
  if (today < mayHalfTermStart) {
    holidayWeeks += 1;
  }

  // Calculate school weeks by subtracting holidays
  const schoolWeeks = Math.max(0, diffWeeks - holidayWeeks);

  return `
    <div class="exam-item">
      <div>
        <p class="exam-item-title">R093 Written Paper</p>
        <p class="exam-item-date">${schoolWeeks} school weeks &middot; ${diffWeeks} total weeks</p>
      </div>
      <span class="exam-status">${diffDays} Days</span>
    </div>
  `;
}

function getUpcomingHomeworkHTML() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 1. Process dates and filter out old homework
  const upcoming = homeworkBank.map(hw => {
    const parts = hw.dateStr.split('/');
    // Convert DD/MM/YY string to a real Date object
    const dueDate = new Date("20" + parts[2], parts[1] - 1, parts[0]);
    dueDate.setHours(0, 0, 0, 0);
    return { ...hw, dueDate: dueDate };
  }).filter(hw => {
    // Keep it if the due date is today or in the future
    return hw.dueDate >= today;
  });

  // 2. Sort chronologically (closest dates first)
  upcoming.sort((a, b) => a.dueDate - b.dueDate);

  // 3. Grab exactly the top 3
  const nextThree = upcoming.slice(0, 3);

  // 4. Generate the HTML or show a celebration message if empty!
  if (nextThree.length === 0) {
    return `<div class="empty-state">No homework yet. You're all caught up! 🎉</div>`;
  }

  // Use your existing createHomeworkCard function
  return nextThree.map(hw => createHomeworkCard(hw.title, hw.dateStr, hw.task)).join('');
}

// Run this function at the start of your script to apply saved preference
function applySavedTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.innerText = '☀️';
  }
}
applySavedTheme();

const contentData = {
  home: `
    <section class="welcome-banner">
      <h1>Welcome Back!</h1>
      <p>Ready to level up your Creative iMedia skills?</p>
      <div class="welcome-meta">
        <span>Rank F</span>
        <span>0 Total XP</span>
        <span>Level 1</span>
      </div>
      <div class="banner-monogram">iM</div>
    </section>

    <section class="stats-grid">
      <div class="stat-card">
        <div>
          <div class="stat-value">0</div>
          <div class="stat-label">Total XP</div>
        </div>
      </div>
      <div class="stat-card">
        <div style="flex:1;">
          <div class="stat-value">Lv.1</div>
          <div class="stat-label">0/100 XP</div>
          <div class="stat-progress"><div class="fill" style="width:0%"></div></div>
        </div>
      </div>
      <div class="stat-card">
        <div>
          <div class="stat-value">0</div>
          <div class="stat-label">Day Streak</div>
        </div>
      </div>
      <div class="stat-card">
        <div>
          <div class="stat-value">0</div>
          <div class="stat-label">Activities Done</div>
        </div>
      </div>
    </section>

    <section class="dashboard-row">
      <div class="panel">
        <div class="panel-header">
          <h3 class="panel-title">Exam Countdown</h3>
        </div>
        <p class="panel-subtitle">Days until your GCSE Creative iMedia exams</p>
        ${createExamCountdownHTML()}
      </div>

      <div class="panel">
        <div class="panel-header">
          <h3 class="panel-title">Homework</h3>
          <button class="panel-action-btn" onclick="loadContent('all_revision_resources')" title="View all">+</button>
        </div>
        ${getUpcomingHomeworkHTML()}
      </div>
    </section>

    <h2 class="section-title">Quick Start</h2>
    <section class="quickstart-grid">
      <div class="quickstart-card">
        <div class="quickstart-body">
          <h3>Quiz Trainer</h3>
          <p>R093 exam practice — topics, timed tests &amp; long-answer questions.</p>
          <button class="quickstart-btn" onclick="loadContent('quiz_trainer')">Start Training</button>
        </div>
      </div>

      <div class="quickstart-card">
        <div class="quickstart-body">
          <h3>Revision Resources</h3>
          <p>Interactive games, quizzes and study tools.</p>
          <button class="quickstart-btn" onclick="loadContent('all_revision_resources')">Study Now</button>
        </div>
      </div>

      <div class="quickstart-card">
        <div class="quickstart-body">
          <h3>R094 Coursework</h3>
          <p>Plan and create your visual identity NEA.</p>
          <button class="quickstart-btn" onclick="loadContent('r094_hub')">Open</button>
        </div>
      </div>

      <div class="quickstart-card">
        <div class="quickstart-body">
          <h3>R096 Animation</h3>
          <p>Plan and produce your animation with audio.</p>
          <button class="quickstart-btn" onclick="loadContent('r096_hub')">Open</button>
        </div>
      </div>
    </section>
  `,

  all_revision_resources: `
    <h1>Revision Resources Hub</h1>
    <p>Use these interactive tools to test your knowledge and prepare for your R093 exam and NEA tasks.</p>

    <h2 class="section-title">Interactive Quizzes & Games</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('quiz_trainer')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--pastel-violet); color: var(--dark-purple);">Trainer</div>
        <div class="card-info">
          <h3>R093 Quiz Trainer</h3>
          <p>Full topic practice, 25-question timed exam, and 6-12 mark long answers. </p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_quiz')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Quiz</div>
        <div class="card-info">
          <h3>R093 Keyword Flashcards</h3>
          <p>Over 30 essential terms for the written exam. </p>
        </div>
      </div>

      <div class="card" onclick="loadContent('legal_sort_game')" style="cursor: pointer; border-top: 5px solid #d32f2f;">
        <div class="card-image" style="background: #ffebee; color: #d32f2f;">Sort</div>
        <div class="card-info">
          <h3>Legal & Ethical Sort</h3>
          <p>Practice identifying Privacy, Defamation, and Copyright scenarios. </p>
        </div>
      </div>

      <div class="card" onclick="loadContent('format_match_up')" style="cursor: pointer; border-top: 5px solid #2196f3;">
        <div class="card-image" style="background: #e3f2fd; color: #2196f3;">Match</div>
        <div class="card-info">
          <h3>File Format Match-up</h3>
          <p>Test your knowledge of DPI, PPI, and suitable file formats. </p>
        </div>
      </div>
    </div>

    <h2 class="section-title">NEA Planning Tools</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('brief_interpreter')" style="cursor: pointer; border-top: 5px solid #FFD700;">
        <div class="card-image" style="background: #fffdf2; color: #856404;">Brief</div>
        <div class="card-info">
          <h3>Client Brief Interpreter</h3>
          <p>Practice breaking down a client brief for the "Eco-Bolt" scenario. </p>
        </div>
      </div>

      <div class="card" onclick="loadContent('timeline_game')" style="cursor: pointer; border-top: 5px solid #E0BBE4;">
        <div class="card-image" style="background: var(--pastel-violet); color: var(--dark-purple);">Time</div>
        <div class="card-info">
          <h3>Production Timeline Challenge</h3>
          <p>Drag job roles into Pre-Production, Production, and Post-Production. </p>
        </div>
      </div>
    </div>

    <h2 class="section-title">External Study Tools</h2>
    <div class="card" onclick="window.open('https://mrowoyemi.github.io/iMediaTrainer/', '_blank')" style="cursor: pointer; border-left: 5px solid #28a745;">
      <div class="card-info">
        <h3 style="color: #28a745;">iMedia Trainer (External)</h3>
        <p>A comprehensive external tool with additional knowledge organisers and quizzes. </p>
      </div>
    </div>
  `,

  quiz_trainer: `
    <div id="quiz-trainer-wrap">
      <div id="quiz-progress-wrapper" class="hidden">
        <div id="quiz-progress-bar"></div>
      </div>

      <div id="quiz-header-info" class="hidden">
        <div id="quiz-topic-display"></div>
        <div id="quiz-timer-display"></div>
        <div id="quiz-score-display">Score: 0</div>
      </div>

      <div id="quiz-main-menu">
        <h1 style="color: var(--dark-purple);">Quiz Trainer</h1>
        <p>OCR Cambridge Nationals Creative iMedia R093 Exam Practice — choose a topic, take the timed test, or tackle long-answer questions.</p>

        <div id="quiz-past-papers-section">
          <h2>Past Papers &amp; Exam Practice</h2>
          <div id="quiz-past-papers-grid"></div>
          <button id="quiz-long-q-btn" onclick="quizStartSession('Long Questions (6-12 Marks)')">PRACTICE LONG QUESTIONS (6-12 MARKS)</button>
        </div>

        <hr style="border-top: 2px solid var(--border-color); margin: 30px 0; border-bottom: none; border-left: none; border-right: none;">

        <h2>Bite-Sized Revision</h2>
        <button id="quiz-full-test-btn" onclick="quizStartSession('TEST')">START FULL TEST (25 RANDOM - TIMED)</button>
        <div id="quiz-topic-grid"></div>
      </div>

      <div id="quiz-area" class="hidden">
        <div class="card" style="margin-bottom: 20px;">
          <h2 id="quiz-question-text" style="margin: 0;"></h2>
        </div>

        <div id="quiz-options-container"></div>
        <textarea id="quiz-long-answer-box" class="hidden" rows="8" placeholder="Type your extended answer here..."></textarea>
        <div id="quiz-feedback-area"></div>

        <div id="quiz-nav-controls">
          <button class="leave-btn" onclick="quizShowMenu()">LEAVE TOPIC</button>
          <button id="quiz-hint-btn" onclick="quizShowHint()">NEED A HINT?</button>
          <button id="quiz-continue-btn" class="hidden" onclick="quizNextQuestion()">CONTINUE</button>
        </div>
      </div>

      <div id="quiz-results-area" class="hidden">
        <div class="card" style="text-align: center; padding: 40px;">
          <h1>Session Complete</h1>
          <p id="quiz-final-score-text" style="font-size: 2rem; color: var(--dark-purple); font-weight: bold;"></p>
          <button id="quiz-results-return-btn" style="margin-top: 20px;" onclick="quizShowMenu()">RETURN TO MAIN MENU</button>
        </div>
      </div>
    </div>
  `,

  // --- UPDATED R093 HUB PAGE ---
  r093_hub: `
    <h1>Unit R093: Creative iMedia in the media industry</h1>
    <p>This is the mandatory exam unit. It covers the sectors, products, and job roles within the media industry, as well as the legal and ethical issues you need to know.</p>

    <h2 class="section-title">Topic Areas</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('ta1')" style="cursor: pointer;">
        <div class="card-image">TA1</div>
        <div class="card-info">
          <h3>Topic Area 1: The Media Industry</h3>
          <p>Sectors, products, and job roles.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('ta2')" style="cursor: pointer;">
        <div class="card-image">TA2</div>
        <div class="card-info">
          <h3>Topic Area 2: Factors Influencing Design</h3>
          <p>Purpose, style, client requirements, and audience.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('ta3')" style="cursor: pointer;">
        <div class="card-image">TA3</div>
        <div class="card-info">
          <h3>Topic Area 3: Pre-production Planning</h3>
          <p>Work plans, visualisation, and legal issues.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('ta4')" style="cursor: pointer;">
        <div class="card-image">TA4</div>
        <div class="card-info">
          <h3>Topic Area 4: Distribution</h3>
          <p>Distribution platforms and file formats.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Interactive Activities</h2>
      <div class="card-grid">
        <div class="card" onclick="loadContent('r093_quiz')" style="cursor: pointer; border-top: 5px solid #FF9800;">
          <div class="card-image" style="background: #FFF3E0; color: #E65100;">Quiz</div>
          <div class="card-info">
            <h3>Revision Card Quiz</h3>
            <p>Test your knowledge with flip-card style revision questions.</p>
          </div>
        </div>

        <div class="card" onclick="loadContent('legal_sort_game')" style="cursor: pointer; border-top: 5px solid #d32f2f;">
          <div class="card-image" style="background: #ffebee; color: #d32f2f;">Sort</div>
          <div class="card-info">
            <h3>Legal & Ethical Sort</h3>
            <p>Drag scenarios into Privacy, Defamation, or Copyright.</p>
          </div>
        </div>

        <div class="card" onclick="loadContent('format_match_up')" style="cursor: pointer; border-top: 5px solid #2196f3;">
          <div class="card-image" style="background: #e3f2fd; color: #2196f3;">Match</div>
          <div class="card-info">
            <h3>Technical Match-up</h3>
            <p>Match products to correct DPI and File Formats.</p>
          </div>
        </div>
      </div>

      <div class="card" onclick="loadContent('resources')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Revise</div>
        <div class="card-info">
          <h3>Revision Resources</h3>
          <p>Access Seneca Learning and past paper guidance.</p>
        </div>
      </div>
    </div>
    
  `,

  brief_interpreter: `
  <h1>Client Brief Interpreter</h1>
    <div class="homework-box" style="border-left: 10px solid #FFD700; background: #fffdf2;">
      <h2 style="margin-top: 0;">CLIENT BRIEF: "Eco-Bolt" Electric Bikes</h2>
      <p><strong>Scenario:</strong> We need a digital poster for our new high-speed e-bike. It must appeal to 20-30 year old city professionals. You have a budget of £500 and the poster must be finished by next Friday. Use our logo, neon green colors, and a futuristic style.</p>
    </div>

    <div class="card-grid">
      <div class="card">
        <h3>1. Target Audience</h3>
        <input type="text" id="ans_aud" placeholder="Who is it for?" style="width: 100%; padding: 8px;">
      </div>
      <div class="card">
        <h3>2. Constraints</h3>
        <input type="text" id="ans_con" placeholder="Budget/Timescales?" style="width: 100%; padding: 8px;">
      </div>
      <div class="card">
        <h3>3. Style Requirements</h3>
        <input type="text" id="ans_sty" placeholder="Colors/Theme?" style="width: 100%; padding: 8px;">
      </div>
    </div>

    <button onclick="checkBrief()" style="margin-top: 20px; padding: 15px 30px; background: var(--dark-purple); color: white; border: none; border-radius: 8px; cursor: pointer;">Submit Interpretation</button>
    <div id="brief-feedback" style="margin-top: 15px; font-weight: bold;"></div>
  `,

  // --- R094 HUB PAGE (CORRECTED) ---
  r094_hub: `
    <h1>Unit R094: Visual identity and digital graphics</h1>
    <p>This mandatory coursework unit focuses on creating visual identities (branding) and digital graphics for a specific client brief.</p>

    <h2 class="section-title">Coursework Theory</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r094_ta1')" style="cursor: pointer;">
        <div class="card-image">TA1</div>
        <div class="card-info">
          <h3>Topic Area 1: Develop Visual Identity</h3>
          <p>Understanding logos, typography, and design elements.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r094_ta2')" style="cursor: pointer;">
        <div class="card-image">TA2</div>
        <div class="card-info">
          <h3>Topic Area 2: Plan Digital Graphics</h3>
          <p>Pre-production, assets, and visualisation diagrams.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r094_ta3')" style="cursor: pointer;">
        <div class="card-image">TA3</div>
        <div class="card-info">
          <h3>Topic Area 3: Create Digital Graphics</h3>
          <p>Using editing software, sourcing assets, and exporting.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Coursework Tasks (NEA)</h2>
    <div class="card-grid">
      
      <div class="card" onclick="loadContent('r094_task_1')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Task 1</div>
        <div class="card-info">
          <h3>Task 1: Visual Identity & Planning</h3>
          <p>Designing the brand identity and planning the layout.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_task_2')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Task 2</div>
        <div class="card-info">
          <h3>Task 2: Creation & Evaluation</h3>
          <p>Creating the digital graphic and saving in correct formats.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_guidance')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Guide</div>
        <div class="card-info">
          <h3>Assessment Guidance</h3>
          <p>Step-by-step help to achieve Mark Band 3.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_criteria')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Marks</div>
        <div class="card-info">
          <h3>Marking Criteria</h3>
          <p>Check your work against the official OCR mark bands.</p>
        </div>
      </div>

    </div>

    <h2 class="section-title">Design Skills</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r094_skill_photoshop')" style="cursor: pointer; border-top: 5px solid #31A8FF;">
        <div class="card-image" style="background: #001E36; color: #31A8FF;">Ps</div>
        <div class="card-info">
          <h3>Adobe Photoshop</h3>
          <p>Industry standard for raster graphics editing, photo manipulation, and digital art.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_skill_canva')" style="cursor: pointer; border-top: 5px solid #00C4CC;">
        <div class="card-image" style="background: linear-gradient(135deg, #00C4CC, #7D2AE8); color: white;">Ca</div>
        <div class="card-info">
          <h3>Canva</h3>
          <p>Web-based graphic design tool. Excellent for quick layouts, mood boards, and social media assets.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_skill_rocketcake')" style="cursor: pointer; border-top: 5px solid #E040FB;">
        <div class="card-image" style="background: #E040FB; color: white;">Rc</div>
        <div class="card-info">
          <h3>RocketCake</h3>
          <p>Free responsive web design editor. Useful for visualizing how graphics appear on web pages.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_skill_maya')" style="cursor: pointer; border-top: 5px solid #0696D7;">
        <div class="card-image" style="background: #0696D7; color: white;">Ma</div>
        <div class="card-info">
          <h3>Autodesk Maya</h3>
          <p>Professional 3D animation and modeling software. Used for creating 3D assets and environments.</p>
        </div>
      </div>
    </div>

  `,

  // --- UPDATED R096 HUB PAGE ---
  r096_hub: `
    <h1>Unit R096: Animation with audio</h1>
    <p>This unit involves planning, creating, and reviewing an animation with a synchronized audio track.</p>

    <h2 class="section-title">Coursework Theory</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r096_ta1')" style="cursor: pointer;">
        <div class="card-image">TA1</div>
        <div class="card-info">
          <h3>Topic Area 1: Plan Animation</h3>
          <p>Understanding animation types, audio properties, and pre-production techniques.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r096_ta2')" style="cursor: pointer;">
        <div class="card-image">TA2</div>
        <div class="card-info">
          <h3>Topic Area 2: Create Animation</h3>
          <p>Animation techniques, audio mixing, and technical integration.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r096_ta3')" style="cursor: pointer;">
        <div class="card-image">TA3</div>
        <div class="card-info">
          <h3>Topic Area 3: Review Animation</h3>
          <p>Testing, reviewing effectiveness, and identifying improvements.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Coursework Tasks (NEA)</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r096_task_1')" style="cursor: pointer; border-left: 5px solid var(--nav-bg);">
        <div class="card-image" style="background: var(--nav-bg); color: white;">Task 1</div>
        <div class="card-info">
          <h3>Task 1: Planning</h3>
          <p>Interpreting the brief, creating storyboards, scripts, and asset lists.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r096_task_2')" style="cursor: pointer; border-left: 5px solid var(--nav-bg);">
        <div class="card-image" style="background: var(--nav-bg); color: white;">Task 2</div>
        <div class="card-info">
          <h3>Task 2: Creation</h3>
          <p>Developing the animation and mixing the final audio track.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r096_task_3')" style="cursor: pointer; border-left: 5px solid var(--nav-bg);">
        <div class="card-image" style="background: var(--nav-bg); color: white;">Task 3</div>
        <div class="card-info">
          <h3>Task 3: Review</h3>
          <p>Testing the final product and writing the evaluation.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Guidance & Marks</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r096_guidance')" style="cursor: pointer; border-left: 5px solid var(--nav-bg);">
        <div class="card-image" style="background: var(--nav-bg); color: white;">Guide</div>
        <div class="card-info">
          <h3>Assessment Guidance</h3>
          <p>Step-by-step help to achieve Mark Band 3.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r096_criteria')" style="cursor: pointer; border-left: 5px solid var(--nav-bg);">
        <div class="card-image" style="background: var(--nav-bg); color: white;">Marks</div>
        <div class="card-info">
          <h3>Marking Criteria</h3>
          <p>Check your work against the official OCR mark bands.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Animation Skills & Software</h2>
    <div class="card-grid">
      
      <div class="card" onclick="loadContent('r096_skill_maya')" style="cursor: pointer; border-top: 5px solid #0696D7;">
        <div class="card-image" style="background: #0696D7; color: white;">Ma</div>
        <div class="card-info">
          <h3>Autodesk Maya</h3>
          <p>Industry standard for 3D animation. Used for rigging, keyframing, and character motion.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_skill_wick')" style="cursor: pointer; border-top: 5px solid #F44336;">
        <div class="card-image" style="background: #F44336; color: white;">Wi</div>
        <div class="card-info">
          <h3>Wick Editor</h3>
          <p>Free, web-based tool for 2D vector animation. Great for beginners and simple interactive projects.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_skill_line')" style="cursor: pointer; border-top: 5px solid #4CAF50;">
        <div class="card-image" style="background: #4CAF50; color: white;">Ln</div>
        <div class="card-info">
          <h3>Line Drawing</h3>
          <p>Traditional techniques for hand-drawn animation, including onion skinning and rotoscoping.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_skill_blender')" style="cursor: pointer; border-top: 5px solid #E67E22;">
        <div class="card-image" style="background: #E67E22; color: white;">Bl</div>
        <div class="card-info">
          <h3>Blender</h3>
          <p>Powerful free open-source software for 3D modelling, rigging, and animation.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_skill_pencil2d')" style="cursor: pointer; border-top: 5px solid #673AB7;">
        <div class="card-image" style="background: #673AB7; color: white;">P2</div>
        <div class="card-info">
          <h3>Pencil2D</h3>
          <p>Simple, free tool for traditional 2D hand-drawn animation. Excellent for frame-by-frame work.</p>
        </div>
      </div>

    </div>

  `,

  r096_task_1: `
    <div class="checklist-btn" onclick="toggleModal('r096_t1_modal')" title="Open Checklist">✓</div>
    <h1>R096 Task 1: Planning Animation & Audio</h1>
    <p>Focus on interpreting the client requirements and planning the synchronization between visuals and sound.</p>

    <h2 class="section-title">Planning Documentation</h2>
    <h2 class="section-title">Strand 1a: Brief & Audience</h2>
    <div class="card-grid">
      <div class="card">
        <div class="card-info">
          <h3>Client Brief Interpretation</h3>
          <p>Analyze the requirements to show a deep understanding of the project's goals.</p>
          <ul>
            <li><strong>Breakdown:</strong> Identify the purpose, theme, and mandatory content.</li>
            <li><strong>Starter Sentence:</strong> "The client requires an animation that aims to... I will achieve this by including..."</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-info">
          <h3>Target Audience Appeal</h3>
          <p>Explain how your creative choices (colours, sounds, pacing) link to your audience.</p>
          <ul>
            <li><strong>Breakdown:</strong> Consider demographics like age and interests.</li>
            <li><strong>Example:</strong> "For a younger audience, I will use bright primary colors and up-beat non-diegetic audio to maintain engagement."</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 class="section-title">Strand 1b: Pre-Production Documents</h2>
    <div class="card-grid">
      <div class="card">
        <div class="card-info">
          <h3>Detailed Storyboard</h3>
          <p>A visual map of every shot in your animation.</p>
          <ul>
            <li><strong>Breakdown:</strong> Include sketches, camera angles (Close-up, Long shot), and scene durations.</li>
            <li><strong>Starter Sentence:</strong> "In Scene 1, the camera will use a low angle to make the character appear powerful, synchronized with a heavy bass sound effect."</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-info">
          <h3>Production Script</h3>
          <p>The written blueprint for dialogue and technical cues.</p>
          <ul>
            <li><strong>Breakdown:</strong> Format with character names, dialogue, and clear notes for SFX/Music.</li>
            <li><strong>Example:</strong> "[Character Name]: (Whispering) 'Did you hear that?' [SFX: Distant floorboard creak]."</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 class="section-title">Strand 1c: Assets & Technical Properties</h2>
    <div class="card-grid">
      <div class="card">
        <div class="card-info">
          <h3>Visual & Audio Asset Log</h3>
          <p>List every component you intend to create or source.</p>
          <ul>
            <li><strong>Breakdown:</strong> Detail file formats (.png, .wav), resolutions, and legal permissions.</li>
            <li><strong>Starter Sentence:</strong> "I will source a royalty-free background track in .wav format to ensure high-quality audio at 44.1kHz."</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-info">
          <h3>Style & Integration</h3>
          <p>Explain how assets contribute to the overall effectiveness of the genre.</p>
          <ul>
            <li><strong>Breakdown:</strong> Justify how visuals and audio work together.</li>
            <li><strong>Example:</strong> "By using high-contrast lighting and minor-key music, I am establishing a clear horror genre convention."</li>
          </ul>
        </div>
      </div>
    </div>

    
    <div id="r096_t1_modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 style="margin:0; color:white;">Task 1: Planning Checklist</h2>
          <span class="close-modal" onclick="toggleModal('r096_t1_modal')">&times;</span>
        </div>
        <div class="checklist-items" style="padding: 20px; max-height: 70vh; overflow-y: auto;">
          
          <div class="check-item">
            <input type="checkbox" id="r96t1_brief_detailed" onchange="saveCheck(this)">
            <label for="r96t1_brief_detailed">
              <strong>Interpretation of Brief:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Identify the purpose (e.g. educate, promote) and all client constraints.</li>
                <li>Explain how your choices (style, colour, pace) appeal to your specific audience.</li>
                <li>Define the brand identity and how the animation reinforces the client's ethos.</li>
              </ul>
            </label>
          </div>

          <div class="check-item">
            <input type="checkbox" id="r96t1_assets_detailed" onchange="saveCheck(this)">
            <label for="r96t1_assets_detailed">
              <strong>Asset Log & Technical Properties:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>List all visual assets (characters, backgrounds) and audio assets (SFX, music, VO).</li>
                <li>State technical properties: resolution (e.g. 1080p), file formats (.mp4, .wav), and sample rates.</li>
                <li>Note legal status: identify copyrighted material vs your own original creations.</li>
              </ul>
            </label>
          </div>

          <div class="check-item">
            <input type="checkbox" id="r96t1_story_detailed" onchange="saveCheck(this)">
            <label for="r96t1_story_detailed">
              <strong>Comprehensive Storyboard:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Provide clear scene sketches with shot types (Close-up, Long shot) and camera movement.</li>
                <li>Include scene durations and total frame counts (ensure 24 FPS is used).</li>
                <li>Mark specific 'Audio Cues' to show exactly when sounds sync with visual actions.</li>
              </ul>
            </label>
          </div>
          
          

          <div class="check-item">
            <input type="checkbox" id="r96t1_script_detailed" onchange="saveCheck(this)">
            <label for="r96t1_script_detailed">
              <strong>Script & Audio Direction:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Full dialogue with directions on tone (e.g. enthusiastic, serious) for voice actors.</li>
                <li>Detailed notes on non-diegetic music (mood/tempo) and diegetic sound effects (SFX).</li>
                <li>Plan for 'Ducking': note when background music volume must drop for clear speech.</li>
              </ul>
            </label>
          </div>

        </div>
      </div>
    </div>
  `,

  r096_task_2: `
    <div class="checklist-btn" onclick="toggleModal('r096_t2_modal')" title="Open Checklist">✓</div>
    
    <h1>R096 Task 2: Creation & Technical Skills</h1>
    <p>This phase is where your planning from Task 1 comes to life. To achieve Mark Band 3, you must provide clear evidence of your ability to use professional tools and show that your final product is fully fit for purpose.</p>

    <div class="card" style="margin-bottom: 20px;">
      <p><strong>Goal:</strong> Use screenshots to evidence your technical skills in both animation and audio editing.</p>
    </div>

    <h2 class="section-title">Strand 2a: Visual Asset Creation</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Component Creation</h3>
        <p>Before animating, you must prepare your visual components.</p>
        <div class="homework-box">
          <ul>
            <li><strong>Digital Creation:</strong> Screenshots of creating original characters and backgrounds.</li>
            <li><strong>Grouping:</strong> Evidence of grouping elements (e.g. limbs) to allow for movement.</li>
            <li><strong>Asset Management:</strong> Organising files into named folders or software libraries.</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <h3>Technical Compatibility</h3>
        <ul>
          <li><strong>Resolution:</strong> Ensure all assets are created at a suitable resolution for the final platform.</li>
          <li><strong>Continuity:</strong> Maintain consistent lighting and camera positions if using stop-motion.</li>
        </ul>
      </div>
    </div>

    <div class="card" style="margin-top: 20px; background: #fdfbff; border-left: 5px solid var(--dark-purple);">
      <p><em><strong>Mark Band 3 Tip:</strong> All assets must be prepared at a suitable resolution, and you must explicitly show technical compatibility.</em></p>
    </div>

    <h2 class="section-title">Strand 2b: Animation & Audio Integration</h2>
    
    <div class="card" style="margin-bottom: 20px;">
      <p><strong>Goal:</strong> Build the animation using professional tools while ensuring audio is perfectly synchronised.</p>
    </div>

    <div class="card-grid">
      <div class="card">
        <h3>Animation Techniques</h3>
        <p></p>
        <ul>
          <li><strong>Keyframing:</strong> Markers on the timeline defining start and end points.</li>
          <li><strong>Tweening:</strong> Using the software to generate smooth intermediate frames.</li>
          <li><strong>Layers:</strong> Screenshot your timeline to prove you used separate layers for characters and backgrounds.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Audio Mixing & Sync</h3>
        <p></p>
        <ul>
          <li><strong>Multi-track Mixing:</strong> Evidence of layering dialogue, SFX, and music.</li>
          <li><strong>Ducking:</strong> Automatically lowering music volume when a voiceover speaks.</li>
          <li><strong>Synchronisation:</strong> Prove audio happens exactly when visual triggers occur (e.g. a door slam).</li>
        </ul>
      </div>
    </div>

    <h2 class="section-title">Strand 2c: Saving & Exporting</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Native Project Files</h3>
        <p><strong>Format:</strong> .FLA, .MB, or similar.</p>
        <p><strong>Why:</strong> To keep all layers and timelines intact for future editing.</p>
      </div>
      <div class="card">
        <h3>Final Distribution Format</h3>
        <p><strong>Format:</strong> .MP4 or .MOV.</p>
        <p><strong>Why:</strong> Standard formats required for playback on the intended distribution platform.</p>
      </div>
    </div>

    <div id="r096_t2_modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 style="margin:0; color:white;">Task 2: Creation Checklist</h2>
          <span class="close-modal" onclick="toggleModal('r096_t2_modal')">&times;</span>
        </div>
        <div class="checklist-items" style="padding: 20px; max-height: 70vh; overflow-y: auto;">
          
          <div class="check-item">
            <input type="checkbox" id="r96t2_assets_ev" onchange="saveCheck(this)">
            <label for="r96t2_assets_ev">
              <strong>Asset Creation:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Have I screenshotted the process of creating or preparing visual assets?</li>
                <li>Are my assets organised into a library or systematic folder structure?</li>
              </ul>
            </label>
          </div>

          <div class="check-item">
            <input type="checkbox" id="r96t2_keys_detailed" onchange="saveCheck(this)">
            <label for="r96t2_keys_detailed">
              <strong>Animation Techniques:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Do I have evidence of keyframing and tweening to show smooth motion?</li>
                <li>Have I used layers to separate backgrounds, characters, and foreground items?</li>
              </ul>
            </label>
          </div>

          <div class="check-item">
            <input type="checkbox" id="r96t2_audio_mixing" onchange="saveCheck(this)">
            <label for="r96t2_audio_mixing">
              <strong>Audio Mixing:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Is there evidence of multi-track editing (layering music, SFX, and VO)?</li>
                <li>Have I applied techniques like 'ducking' to ensure dialogue is audible?</li>
              </ul>
            </label>
          </div>

          <div class="check-item">
            <input type="checkbox" id="r96t2_sync_check" onchange="saveCheck(this)">
            <label for="r96t2_sync_check">
              <strong>Synchronisation:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Does my audio line up perfectly with visual triggers on the timeline?</li>
                <li>Is lip-syncing (if applicable) accurate and convincing?</li>
              </ul>
            </label>
          </div>

          <div class="check-item">
            <input type="checkbox" id="r96t2_export_final" onchange="saveCheck(this)">
            <label for="r96t2_export_final">
              <strong>Exporting:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Have I exported to a standard video format (e.g. .MP4 or .MOV)?</li>
                <li>Do the final properties (resolution/frame rate) match my Task 1 plan?</li>
              </ul>
            </label>
          </div>

        </div>
      </div>
    </div>

    <div style="margin-top: 30px;">
    </div>
  `,

  r096_task_3: `
    <div class="checklist-btn" onclick="toggleModal('r096_t3_modal')" title="Open Checklist">✓</div>
    
    <h1>R096 Task 3: Testing & Evaluation</h1>
    <p style="margin-bottom: 30px;">The final stage of your NEA requires you to prove that your animation is functional and effectively meets the needs of both the client and the target audience. To reach Mark Band 3, your review must be critical and your testing comprehensive.</p>

    <div class="card" style="margin-bottom: 20px;">
      <p><strong>Goal:</strong> Finalise the project by checking technical performance, reviewing against the brief, and suggesting professional improvements.</p>
    </div>

    <h2 class="section-title">Strand 3a: Technical Testing</h2>
    <div class="card-grid">
      <div class="card">
        <h3>The Test Plan</h3>
        <p>You must demonstrate that your final product works as intended across different technical areas.</p>
                <div class="homework-box">
          <ul>
            <li><strong>Visual Quality:</strong> Testing for frame rate consistency and lack of pixelation.</li>
            <li><strong>Audio Functionality:</strong> Checking for audio clarity and correct volume levels (ducking).</li>
            <li><strong>Sync Accuracy:</strong> Verifying that all audio cues match the visual triggers.</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h3>Iterative Testing</h3>
        <p>For higher marks, you must show results, retests, and how you resolved any identified errors.</p>
        <div class="homework-box">
           <p><strong>Starter Sentence:</strong> "During the testing phase, I identified that the audio on Track 2 was slightly out of sync with the character's movement. To resolve this, I used the time-shift tool to..."</p>
        </div>
      </div>

      <div class="card" style="border-top: 5px solid var(--dark-purple);">
        <h3>Test Plan Example Question</h3>
        <p>When writing your test plan, follow this structured format for each test to ensure clarity and professional rigour.</p>
        <div class="homework-box" style="background: #f9f9f9; border-left: 5px solid #2D033B;">
          <p><strong>Test Objective:</strong> Does the background music effectively 'duck' during the voiceover?</p>
          <p><strong>Test Procedure:</strong> Play the animation from 00:15 to 00:30 where the narrator introduces the product.</p>
          <p><strong>Expected Result:</strong> Music volume should drop by 15dB to allow the speech to be clearly audible.</p>
          <p><strong>Actual Result:</strong> Music remained at full volume; narrator was difficult to hear.</p>
          <p><strong>Action Taken:</strong> Applied a volume envelope to the music track to reduce gain during speech frames.</p>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 20px; background: #fdfbff; border-left: 5px solid var(--dark-purple);">
      <p><em><strong>Mark Band 3 Tip:</strong> Your testing is only fully effective if you show how you identified and then fixed technical issues found during the process.</em></p>
    </div>

    <h2 class="section-title">Strand 3b: Review & Effectiveness</h2>
    
    <div class="card" style="margin-bottom: 20px;">
      <p><strong>Goal:</strong> Critically analyse how your animation meets the original client brief and engages the target audience.</p>
    </div>

    <div class="card-grid">
      <div class="card">
        <h3>Client Requirements</h3>
        <p>Go back to your Task 1 plan. Did you include everything the client asked for?</p>
        <div class="homework-box">
          <p><strong>Starter Sentence:</strong> "My final animation successfully meets the client's requirement for a [duration] product by... I have ensured the house style was maintained through the use of [colour/font]..."</p>
        </div>
      </div>
      <div class="card">
        <h3>Audience Appeal</h3>
        <p>Explain <strong>why</strong> the animation and audio choices you made are effective for your chosen demographic.</p>
        <div class="homework-box">
          <p><strong>Example:</strong> "The use of upbeat, high-tempo background music is particularly effective for my teenage audience as it creates an energetic atmosphere that complements the fast-paced animation style..."</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Strand 3c: Future Developments</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Technical Improvements</h3>
        <p>Even a perfect project can be improved. Identify specific technical areas for development.</p>
        <div class="homework-box">
          <p><strong>Starter Sentence:</strong> "If I were to develop this product further for a professional release, I would improve the character rigging to allow for more complex facial expressions, which would..."</p>
        </div>
      </div>
      <div class="card">
        <h3>Further Expansion</h3>
        <p>Consider how the project could grow beyond the original brief.</p>
        <p><strong>Example:</strong> "To improve the immersive quality of the audio, I could incorporate more detailed Foley sounds, such as individual footsteps on different surfaces, to enhance the realism for the viewer."</p>
      </div>
    </div>

    <div id="r096_t3_modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 style="margin:0; color:white;">Task 3 Checklist</h2>
          <span class="close-modal" onclick="toggleModal('r096_t3_modal')">&times;</span>
        </div>
        <div class="checklist-items" style="padding: 20px; max-height: 70vh; overflow-y: auto;">
          
          <div class="check-item">
            <input type="checkbox" id="r96t3_test_plan" onchange="saveCheck(this)">
            <label for="r96t3_test_plan">
              <strong>Comprehensive Testing:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Have I tested frame rate, audio clarity, and synchronisation?</li>
                <li>Have I documented the results, errors found, and how they were fixed?</li>
              </ul>
            </label>
          </div>

          <div class="check-item">
            <input type="checkbox" id="r96t3_brief_review" onchange="saveCheck(this)">
            <label for="r96t3_brief_review">
              <strong>Review against Brief:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Have I explained how the product meets all client requirements?</li>
                <li>Have I critically analysed the effectiveness of the animation for the audience?</li>
              </ul>
            </label>
          </div>

          <div class="check-item">
            <input type="checkbox" id="r96t3_improv_detailed" onchange="saveCheck(this)">
            <label for="r96t3_improv_detailed">
              <strong>Future Developments:</strong>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem; color: var(--secondary-text);">
                <li>Have I suggested specific technical improvements for the animation and audio?</li>
                <li>Are my recommendations fully explained and linked to audience engagement?</li>
              </ul>
            </label>
          </div>

        </div>
      </div>
    </div>

  `,

  ta1: `
    <h1>Topic Area 1: The Media Industry</h1>
    <p>Understanding the different sectors, products, and professional roles that make up the media landscape.</p>
    
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_1_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Sectors & Products</div>
        <div class="card-info">
          <h3>1.1 Media industry sectors and products</h3>
          <p>Traditional media and New media sectors and their specific products. Click to view full details.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_1_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Job Roles</div>
        <div class="card-info">
          <h3>1.2 Job roles in the media industry</h3>
          <p>Creative roles (Animator, Script writer), Technical roles (Camera operator, Web developer), and Senior roles (Director, Production manager).</p>
        </div>
      </div>
    </div>
  `,

  r093_1_1: `
    <h1>1.1 Media Industry Sectors and Products</h1>
    <p>Understanding the landscape of traditional and new media, and the diverse products they create.</p>

    <div class="homework-box">
      <h2 class="section-title">Sectors of the Media Industry</h2>
      <p>The industry is categorized by the technology used to deliver the content and the historical era in which the sector originated.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Traditional Media Sectors</h3>
          <p>Sectors predating the widespread use of computers and the internet, focusing on broadcast and physical distribution.</p>
          <ul>
            <li><strong>Film:</strong> A global industry encompassing major Hollywood studios and independent creators producing narrative and documentary content for cinema.</li>
            <li><strong>Television:</strong> Broadcast networks and cable channels that deliver episodic content, news, and live events according to a fixed linear schedule.</li>
            <li><strong>Radio:</strong> Audio-based broadcasting that provides music, talk shows, and news to audiences via terrestrial or satellite signals.</li>
            <li><strong>Print Publishing:</strong> The production of tangible media products, including newspapers, magazines, journals, and physical books.</li>
          </ul>
        </div>
        
        <div class="card">
          <h3>New Media Sectors</h3>
          <p>Sectors born from digital infrastructure, prioritizing on-demand access and user engagement.</p>
          <ul>
            <li><strong>Computer Games:</strong> Software-based entertainment designed for specialized consoles, high-performance PCs, and mobile devices.</li>
            <li><strong>Interactive Media:</strong> Digital products designed for active user participation, such as educational software, kiosks, and interactive maps.</li>
            <li><strong>Internet:</strong> The global network hosting the World Wide Web, streaming platforms, cloud services, and social networking sites.</li>
            <li><strong>Digital Publishing:</strong> The electronic distribution of text and images, allowing for instant updates and multimedia integration in news and literature.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Media Industry Products</h2>
      <p>Modern media products are often versatile, designed to function across multiple sectors and devices simultaneously.</p>
      
      <div class="card-grid">
        <div class="card">
          <ul>
            <li><strong>Video:</strong> Moving image content ranging from high-budget feature films to short-form viral clips and livestreamed broadcasts.</li>
            <li><strong>Audio & Music:</strong> Produced sound content including commercial music tracks, Foley sound effects, podcasts, and immersive audiobooks.</li>
            <li><strong>Animation:</strong> The technique of creating the illusion of movement through a sequence of static images, used in 2D, 3D, and stop-motion formats.</li>
            <li><strong>SFX & VFX:</strong> Critical components of modern storytelling used to create realistic environments, creatures, or events that would be impossible or unsafe to film.</li>
            <li><strong>Digital Imaging/Graphics:</strong> Visual elements created or edited on computers, including logos, UI/UX designs, and digital illustrations.</li>
            <li><strong>Social Media:</strong> Platforms that facilitate the creation and sharing of user-generated content, serving as a hub for community and advertising.</li>
            <li><strong>Digital Games:</strong> Complex software products that combine logic, art, and sound into an interactive experience for entertainment or education.</li>
          </ul>
        </div>
        <div class="card">
          <ul>
            <li><strong>Websites:</strong> Digital hubs that organize information using HTML, CSS, and assets like video and graphics for browser-based access.</li>
            <li><strong>Multimedia:</strong> Products that integrate multiple forms of media—such as text, audio, and video—into a single cohesive digital experience.</li>
            <li><strong>Comics/Graphic Novels:</strong> Visual storytelling that uses sequential art; these are increasingly consumed through digital "webtoon" platforms.</li>
            <li><strong>eBooks:</strong> Electronic versions of printed books designed for e-readers, tablets, and smartphones, often featuring adjustable text and search functions.</li>
            <li><strong>AR/VR:</strong> Emerging formats that redefine how users interact with data and entertainment by merging or replacing their physical surroundings.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Industry Knowledge</h2>
      <ul>
        <li><strong>Evolving Sectors:</strong> Media sectors are not static; they are in a constant state of flux. For example, traditional film and TV sectors have largely shifted toward "Over-the-Top" (OTT) streaming services, blurring the lines between traditional and new media.</li>
        <li><strong>Cross-Sector Products:</strong> A single media asset can serve multiple purposes. A high-quality 3D model (Digital Graphic) might be used in a feature film (Film), as an asset in a companion app (Internet), and as a character in a spin-off game (Computer Games).</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Traditional Media:</strong> Often referred to as "Old Media," these are the established communication formats that existed before the rise of the internet. They typically involve a one-way transmission of information to a mass audience through physical or analog means.</p>
        </div>
        <div class="card">
          <p><strong>New Media:</strong> Content that is native to the digital era. It is defined by its use of computer technology, the internet, and digital distribution. Unlike traditional media, it is often interactive and allows for two-way communication.</p>
        </div>
        <div class="card">
          <p><strong>SFX & VFX:</strong> SFX (Special Effects) are physical effects created on-set during filming, such as explosions or makeup. VFX (Visual Effects) are digital manipulations created in post-production, combining live-action footage and computer-generated imagery (CGI).</p>
        </div>
        <div class="card">
          <p><strong>AR & VR:</strong> AR (Augmented Reality) overlays digital information, such as graphics or 3D models, onto the real world via a device screen. VR (Virtual Reality) uses headsets to immerse the user in a completely computer-generated, 360-degree environment.</p>
        </div>
      </div>
    </div>

  `,

  timeline_game: `
    <h1>Production Phase Timeline</h1>
    <p>Drag the job roles into the correct production phase. Some roles work across all phases!</p>

    <div class="homework-box">
      <div id="role-bank" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; padding: 15px; background: #eee; border-radius: 8px; min-height: 50px;">
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-animator" data-phase="all">Animator</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-content-cre" data-phase="all">Content Creator</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-copy" data-phase="pre">Copy Writer</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-graphic-des" data-phase="all">Graphic Designer</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-illus" data-phase="pre">Illustrator</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-photo" data-phase="prod">Photographer</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-script" data-phase="pre">Script Writer</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-web-des" data-phase="pre">Web Designer</div>
        
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-camera" data-phase="prod">Camera Operator</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-game-prog" data-phase="prod">Games Programmer</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-sound-ed" data-phase="post">Sound Editor</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-audio-tech" data-phase="prod">Audio Technician</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-video-ed" data-phase="post">Video Editor</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-web-dev" data-phase="prod">Web Developer</div>

        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-campaign" data-phase="all">Campaign Manager</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-creative-dir" data-phase="all">Creative Director</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-director" data-phase="all">Director</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-editor-pub" data-phase="post">Editor (Publishing)</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="role-prod-man" data-phase="all">Production Manager</div>
      </div>

      

      <div class="card-grid" style="grid-template-columns: repeat(3, 1fr);">
        <div class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)" id="pre">
          <h3>Pre-Production</h3>
        </div>
        <div class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)" id="prod">
          <h3>Production</h3>
        </div>
        <div class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)" id="post">
          <h3>Post-Production</h3>
        </div>
      </div>
      
      <div id="game-feedback" style="margin-top: 20px; font-weight: bold; min-height: 24px; text-align: center;"></div>
      
      <div style="display:flex; justify-content: center; gap: 10px; margin-top: 20px;">
        <button onclick="loadContent('r093_1_2')" style="padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Back to Job Roles</button>
        <button onclick="loadContent('timeline_game')" style="padding: 10px 20px; background: var(--pastel-violet); color: var(--dark-purple); font-weight: bold; border: none; border-radius: 5px; cursor: pointer;">Reset Game</button>
      </div>
    </div>
  `,

  ta2: `
    <h1>Topic Area 2: Factors Influencing Product Design</h1>
    <p>Understanding the link between purpose, client requirements, and audience engagement.</p>
    
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_2_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Style & Purpose</div>
        <div class="card-info">
          <h3>2.1 Style, Content and Layout</h3>
          <p>Analyzing how these elements are linked to the specific purpose of a media product.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_2_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Client Briefs</div>
        <div class="card-info">
          <h3>2.2 Client Requirements</h3>
          <p>How requirements are defined: Purpose, content, target audience, timescales, constraints.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_2_3')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Audience</div>
        <div class="card-info">
          <h3>2.3 Audience Demographics</h3>
          <p>Segmentation via demographics (age, gender, income) and how this influences design.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_2_4')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Research</div>
        <div class="card-info">
          <h3>2.4 Research Methods</h3>
          <p>Primary vs Secondary research, and Qualitative vs Quantitative data types.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_2_5')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Media Codes</div>
        <div class="card-info">
          <h3>2.5 Media Codes</h3>
          <p>Using symbolic, technical, and written codes to convey meaning and engage audiences.</p>
        </div>
      </div>
    </div>
  `,

  r093_2_1: `
    <h1>2.1 Style, Content and Layout</h1>
    <p>Media products are never designed randomly. Every decision is driven by the specific Purpose.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. The Purpose of Media Products</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Advertise / Promote</h3>
          <p>To draw attention and encourage sales (e.g., Movie Posters).</p>
        </div>
        <div class="card">
          <h3>Educate</h3>
          <p>To teach new skills (e.g., Textbooks, Tutorials).</p>
        </div>
        <div class="card">
          <h3>Entertain</h3>
          <p>To provide enjoyment (e.g., Films, Games).</p>
        </div>
        <div class="card">
          <h3>Inform</h3>
          <p>To provide facts (e.g., News, Timetables).</p>
        </div>
        <div class="card">
          <h3>Influence</h3>
          <p>To change behaviour/opinions (e.g., Charity videos).</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Adapting Design Elements</h2>
      <p>How designers change the look to suit the purpose:</p>

      <div class="card-grid">
        <div class="card">
          <h3>Colour Psychology</h3>
          <ul>
            <li><strong>Red:</strong> Danger, Stop, Passion.</li>
            <li><strong>Green:</strong> Nature, Health, Money.</li>
            <li><strong>Blue:</strong> Trust, Cold, Technology.</li>
            <li><strong>Bright:</strong> For kids. <strong>Muted:</strong> For adults.</li>
          </ul>
        </div>

        <div class="card">
          <h3>Layout & Positioning</h3>
          <p>Guiding the eye (e.g., Cereal Box):</p>
          <ul>
            <li><strong>Top Right:</strong> Brand name (Kellogg's).</li>
            <li><strong>Left:</strong> Characters looking at text.</li>
            <li><strong>Centre:</strong> Appetising food photo.</li>
          </ul>
        </div>

        <div class="card">
          <h3>Genre Conventions</h3>
          <p>What audiences expect to see:</p>
          <ul>
            <li><strong>Horror:</strong> Dark lighting, red fonts.</li>
            <li><strong>Sci-Fi:</strong> Neon, metallic, futuristic fonts.</li>
            <li><strong>Magazines:</strong> Model making eye contact.</li>
          </ul>
        </div>

        <div class="card">
          <h3>Language & Tone</h3>
          <ul>
            <li><strong>Formal:</strong> News, Legal, Documentaries.</li>
            <li><strong>Informal:</strong> Social Media, Teen products.</li>
            <li><strong>Tone:</strong> Friendly ("Let's learn!") vs Serious ("Warning").</li>
          </ul>
        </div>
      </div>
    </div>

  `,

  r093_2_2: `
    <h1>2.2 Client Requirements</h1>
    <p>A client brief is the starting point for any media project. It is a set of instructions given by the client to the media producer. Understanding these requirements is critical to creating a successful product.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Understanding Client Requirements</h2>
      <p>A good client brief will specify exactly what is needed. You must be able to identify these key requirements to plan effectively.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>The Basics</h3>
          <ul>
            <li><strong>Type of Product:</strong> What are you making? (e.g., a website, a video advert, a digital poster).</li>
            <li><strong>Purpose:</strong> Why is it being made? (e.g., to promote a sale, to educate about health).</li>
            <li><strong>Audience:</strong> Who is it for? (e.g., teenagers, professionals, parents).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Creative Details</h3>
          <ul>
            <li><strong>Content:</strong> What text, images, or logos <em>must</em> be included?</li>
            <li><strong>Genre:</strong> The category of the product (e.g., horror film, hip-hop track).</li>
            <li><strong>Style:</strong> The visual "look and feel" (e.g., modern, retro, minimalist).</li>
            <li><strong>Theme:</strong> The underlying topic or idea (e.g., "Hold My Hand" for a holiday company).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Ethos & Constraints</h3>
          <ul>
            <li><strong>Client Ethos:</strong> The values and beliefs of the company (e.g., Apple values simplicity; a charity values compassion).</li>
            <li><strong>Timescales:</strong> The deadline. When must the project be finished?</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Interpreting the Brief</h2>
      <p>When you receive a brief, you need to analyse it to generate ideas. This involves breaking down the text to find the "open" and "closed" requirements.</p>
      
      <h3>Open vs. Closed Briefs</h3>
      <ul>
        <li><strong>Open Brief:</strong> The client gives you freedom. <em>"Create an exciting poster for our new shoe."</em> This allows for creativity but requires more idea generation.</li>
        <li><strong>Closed Brief:</strong> The client is very specific. <em>"Create a poster using our logo in the top left, using font Arial, and the colour blue #0000FF."</em> This constrains your planning but makes the goal clear.</li>
      </ul>

      <h3>Constraints on Planning</h3>
      <p>Requirements act as constraints. They limit what you can do, but they also guide you:</p>
      <ul>
        <li><strong>Budget:</strong> Limits the quality of equipment or the number of staff you can hire.</li>
        <li><strong>Time:</strong> A short deadline means you cannot plan a complex location shoot; you might have to use stock footage instead.</li>
        <li><strong>Brand Guidelines:</strong> You may be forced to use specific colours even if you don't like them, to maintain the brand identity.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Formats of Client Briefs</h2>
      <p>How does a client tell you what they want? It can happen in several ways:</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Written Brief</h3>
          <p>A formal document detailing all requirements. Ideally, every project should have one to avoid disagreements later.</p>
        </div>
        <div class="card">
          <h3>Meeting / Discussion</h3>
          <p>Face-to-face or video calls where the client explains their needs. The producer must take notes to record the details.</p>
        </div>
        <div class="card">
          <h3>Commission</h3>
          <p>A large company hires an independent media company to make a product (e.g., the BBC commissioning a studio to make a drama series).</p>
        </div>
        <div class="card">
          <h3>Negotiated Brief</h3>
          <p>The client and producer work together to agree on the requirements. This often happens if the client's budget is too low for their original ideas.</p>
        </div>
        <div class="card">
          <h3>Informal Brief</h3>
          <p>A casual conversation or phone call. This is risky as details can be forgotten or misunderstood.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Client Ethos:</strong> The spirit, values, or beliefs of a company or individual (e.g., eco-friendly, luxury, budget-conscious).</p>
        </div>
        <div class="card">
          <p><strong>Constraint:</strong> A limitation or restriction that affects how a project can be completed (e.g., time, money, legal rules).</p>
        </div>
        <div class="card">
          <p><strong>Target Audience:</strong> The specific group of people the product is aimed at, often defined by age, gender, or interests.</p>
        </div>
        <div class="card">
          <p><strong>Timescale:</strong> The schedule for the project, including deadlines for different stages (pre-production, production, post-production).</p>
        </div>
      </div>
    </div>

  `,

  r093_1_2: `
    <h1>1.2 Job Roles in the Media Industry</h1>
    <p>The media industry is comprised of various professionals whose roles are defined by their creative, technical, or managerial contributions. Understanding where these roles sit within the production cycle is essential for project success.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Expanded Production Phase Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Pre-Production</h3>
          <p>The <strong>planning and development</strong> stage. This involves visualising the final product through scripts and storyboards, securing funding, hiring staff, and organising logistics like locations and legal permissions before any filming or recording begins.</p>
        </div>
        <div class="card">
          <h3>Production</h3>
          <p>The <strong>capture and creation</strong> stage. Often called 'Principal Photography' in film, this is when the actual media assets are generated. It involves recording live action, capturing audio, taking photographs, or the primary build phase of a digital product.</p>
        </div>
        <div class="card">
          <h3>Post-Production</h3>
          <p>The <strong>assembly and refinement</strong> stage. This occurs after the primary creation is finished. Raw footage and audio are edited, special effects are added, and the product is polished into its final format ready for distribution to the audience.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Creative Roles</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Animator</h3>
        <p><strong>Phase:</strong> Pre-Production, Production & Post-Production</p>
        <ul>
          <li>Creating storyboards and character designs during the planning stages.</li>
          <li>Producing the movement of 2D or 3D models using specialist computer software.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Content Creator</h3>
        <p><strong>Phase:</strong> All Phases</p>
        <ul>
          <li>Developing original ideas for social media campaigns and digital platforms.</li>
          <li>Capturing and editing short-form video content to engage specific online audiences.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Copy Writer</h3>
        <p><strong>Phase:</strong> Pre-Production & Production</p>
        <ul>
          <li>Writing persuasive text for advertisements, websites, or promotional brochures.</li>
          <li>Proofreading and editing written content to ensure it matches the brand's tone of voice.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Graphic Designer</h3>
        <p><strong>Phase:</strong> All Phases</p>
        <ul>
          <li>Designing visual identities and logos that represent a client's brand.</li>
          <li>Organising the layout of text and images for print and digital media products.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Illustrator / Graphic Artist</h3>
        <p><strong>Phase:</strong> Pre-Production & Production</p>
        <ul>
          <li>Creating bespoke drawings and digital artwork to accompany stories or articles.</li>
          <li>Developing concept art to help the director visualise the look of a film or game.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Photographer</h3>
        <p><strong>Phase:</strong> Production</p>
        <ul>
          <li>Setting up lighting and camera equipment to capture high-quality still images.</li>
          <li>Directing subjects or arranging products to achieve the desired composition.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Script Writer</h3>
        <p><strong>Phase:</strong> Pre-Production</p>
        <ul>
          <li>Writing the screenplay, including all dialogue and stage directions for the actors.</li>
          <li>Researching subject matter to ensure the story and settings are authentic.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Web Designer</h3>
        <p><strong>Phase:</strong> Pre-Production & Production</p>
        <ul>
          <li>Designing the visual interface and user experience (UX) layout of a website.</li>
          <li>Creating graphics, buttons, and icons that match the website's aesthetic.</li>
        </ul>
      </div>
    </div>

    <h2 class="section-title">Technical Roles</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Camera Operator</h3>
        <p><strong>Phase:</strong> Production</p>
        <ul>
          <li>Operating the camera during filming to capture the shots required by the director.</li>
          <li>Ensuring the camera stays in focus and follows the movement of the actors correctly.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Games Programmer / Developer</h3>
        <p><strong>Phase:</strong> Production</p>
        <ul>
          <li>Writing the computer code that governs the game's mechanics and player interactions.</li>
          <li>Fixing software 'bugs' and optimising performance for different gaming consoles.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Sound Editor</h3>
        <p><strong>Phase:</strong> Post-Production</p>
        <ul>
          <li>Cleaning up dialogue recordings to remove unwanted background noise.</li>
          <li>Synchronising sound effects and music with the visual action on screen.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Audio Technician</h3>
        <p><strong>Phase:</strong> Production</p>
        <ul>
          <li>Placing and monitoring microphones on set to ensure clear audio capture.</li>
          <li>Recording 'wild tracks' and ambient sounds to be used later in editing.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Video Editor</h3>
        <p><strong>Phase:</strong> Post-Production</p>
        <ul>
          <li>Cutting and joining raw footage together to create a seamless story.</li>
          <li>Applying colour correction and transitions to improve the visual flow of the film.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Web Developer</h3>
        <p><strong>Phase:</strong> Production</p>
        <ul>
          <li>Writing the backend code (such as HTML, CSS, and JavaScript) to make a website function.</li>
          <li>Ensuring the website is responsive and works correctly on mobile phones and tablets.</li>
        </ul>
      </div>
    </div>

    <h2 class="section-title">Senior Roles</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Campaign Manager</h3>
        <p><strong>Phase:</strong> All Phases</p>
        <ul>
          <li>Planning and overseeing the delivery of a marketing campaign across different media.</li>
          <li>Monitoring the campaign's success against the client's original goals and budget.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Creative Director</h3>
        <p><strong>Phase:</strong> All Phases</p>
        <ul>
          <li>Setting the overall creative vision and 'look' for a design project or brand.</li>
          <li>Leading and inspiring the team of designers, writers, and artists to meet the brief.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Director</h3>
        <p><strong>Phase:</strong> All Phases</p>
        <ul>
          <li>Overseeing the creative aspects of a film, including acting and camera work.</li>
          <li>Leading the crew through all three phases to ensure the final product meets their vision.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Editor (Publishing)</h3>
        <p><strong>Phase:</strong> Post-Production</p>
        <ul>
          <li>Reviewing written content for grammar, tone, and accuracy before publication.</li>
          <li>Deciding which stories or images are included in a magazine or newspaper.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Production Manager</h3>
        <p><strong>Phase:</strong> All Phases</p>
        <ul>
          <li>Organising the production schedule and ensuring milestones are met on time.</li>
          <li>Managing the project budget and allocating resources to different departments.</li>
        </ul>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Scale and Multi-Skilling</h2>
      <p>The number of people involved depends on the <strong>size and scale</strong> of the project. On a large-scale feature film, each role is performed by a different specialist. However, on a <strong>smaller production</strong>—such as a local radio programme or a small business website—an individual may perform <strong>multiple roles</strong>. For example, a web designer might also act as the web developer and copy writer to save on costs.</p>
    </div>

    <button onclick="loadContent('timeline_game')" style="background: var(--pastel-violet); color: var(--dark-purple); font-weight: bold; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Try the Timeline Challenge!</button>
  `,

  r093_2_3: `
    <h1>2.3 Audience Demographics & Segmentation</h1>
    <p>Audience segmentation is the process of dividing a mass audience into smaller groups with similar characteristics. This allows media producers to target their products more effectively.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Categories of Audience Segmentation</h2>
      <p>Media companies use specific categories to define their target audience. 

      [Image of audience segmentation]
      </p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Demographic Categories</h3>
          <ul>
            <li><strong>Age:</strong> Products are often age-specific (e.g., a cartoon for 5-year-olds vs a horror movie for 18+).</li>
            <li><strong>Gender:</strong> While many products are neutral, some target specific genders (e.g., men's health magazines).</li>
            <li><strong>Occupation:</strong> A job role often dictates interests and income (e.g., a medical journal targeting doctors).</li>
            <li><strong>Income:</strong> High-income earners are targeted for luxury cars; lower-income for budget supermarkets.</li>
            <li><strong>Education:</strong> The complexity of language reflects the audience's education level (e.g., a broadsheet newspaper vs a tabloid).</li>
            <li><strong>Location:</strong> Local radio or newspapers target people living in a specific town or region.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Psychographic Categories</h3>
          <ul>
            <li><strong>Interests:</strong> Hobbies and passions (e.g., gamers, cyclists, knitters).</li>
            <li><strong>Lifestyle:</strong> How people live their lives (e.g., busy parents, health-conscious vegans, adventure seekers).</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Why Segment the Audience?</h2>
      <p><strong>Benefits of Segmentation:</strong></p>
      <ul>
        <li><strong>Focused Marketing:</strong> Advertising money isn't wasted on people who won't buy the product.</li>
        <li><strong>Meeting Needs:</strong> The product content can be tailored to exactly what that group wants.</li>
        <li><strong>Price Setting:</strong> Knowing the income level helps set a realistic price.</li>
      </ul>

      <p><strong>Influence on Design:</strong></p>
      <ul>
        <li><strong>Kids (Age):</strong> Use primary colours, simple fonts, and mascot characters.</li>
        <li><strong>Professionals (Occupation):</strong> Use formal language, minimalist layout, and muted colours (blues/greys).</li>
        <li><strong>Gamers (Interests):</strong> Use dynamic action shots, neon colours, and bold, edgy typography.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Audience Segmentation:</strong> Dividing a large audience into smaller groups based on shared characteristics.</p>
        </div>
        <div class="card">
          <p><strong>Demographics:</strong> Statistical data relating to the population and particular groups within it (e.g., Age, Gender).</p>
        </div>
        <div class="card">
          <p><strong>Psychographics:</strong> Classification of people according to their attitudes, aspirations, and other psychological criteria.</p>
        </div>
      </div>
    </div>

  `,

  r093_2_4: `
    <h1>2.4 Research Methods</h1>
    <p>Research is essential to ensure a product will be successful. It helps producers understand the competition and what the audience wants.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Primary Research</h2>
      <p><strong>Definition:</strong> New research carried out by you (or the company) specifically for the current project. It does not exist yet.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Methods</h3>
          <ul>
            <li><strong>Questionnaires:</strong> A set of written questions given to many people. Good for gathering large amounts of data quickly.</li>
            <li><strong>Interviews:</strong> A one-to-one conversation. Good for deep, detailed answers but very time-consuming.</li>
            <li><strong>Focus Groups:</strong> A group discussion led by a moderator. Good for brainstorming and observing reactions to ideas.</li>
            <li><strong>Online Surveys:</strong> Digital questionnaires sent via email or social media. Low cost and instant results.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Pros & Cons</h3>
          <p><strong>Advantages:</strong> The data is up-to-date, relevant, and exclusive to you.</p>
          <p><strong>Disadvantages:</strong> It is expensive and time-consuming to collect.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Secondary Research</h2>
      <p><strong>Definition:</strong> Research that has already been conducted by someone else for a different purpose.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Sources</h3>
          <ul>
            <li><strong>Books & Journals:</strong> Reliable, academic information.</li>
            <li><strong>Internet Sites:</strong> Vast amounts of data, but must be checked for accuracy (validity).</li>
            <li><strong>Magazines & Newspapers:</strong> Good for current trends and public opinion.</li>
            <li><strong>Television/Radio:</strong> Documentaries and news reports can provide background information.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Pros & Cons</h3>
          <p><strong>Advantages:</strong> It is cheap (often free), quick to access, and provides a wide range of data.</p>
          <p><strong>Disadvantages:</strong> It may be out of date, biased, or not specific enough for your project.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Types of Data</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Quantitative Data</h3>
          <p><strong>"Quantity" (Numbers)</strong></p>
          <p>Data that can be measured and written down with numbers. It is objective and factual.</p>
          <p><em>Example: "75% of teenagers play video games daily."</em></p>
        </div>
        <div class="card">
          <h3>Qualitative Data</h3>
          <p><strong>"Quality" (Opinions)</strong></p>
          <p>Data that describes qualities or characteristics. It is subjective and based on opinions and feelings.</p>
          <p><em>Example: "I prefer this game because the graphics are colourful and the story is funny."</em></p>
        </div>
      </div>
    </div>

  `,

  r093_2_5: `
    <h1>2.5 Media Codes</h1>
    <p>The tools used to communicate meaning: Technical, Symbolic, and Written codes.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Camera Techniques (Technical)</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Camera Shots</h3>
          <ul>
            <li><strong>Long Shot:</strong> Shows environment/isolation.</li>
            <li><strong>Mid Shot:</strong> Waist up. Standard for dialogue.</li>
            <li><strong>Close Up:</strong> Shows emotion (face).</li>
            <li><strong>Extreme Close Up:</strong> Intense detail (eye/mouth).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Camera Angles</h3>
          <ul>
            <li><strong>High Angle:</strong> Makes subject look small/weak.</li>
            <li><strong>Low Angle:</strong> Makes subject look powerful.</li>
            <li><strong>Eye Level:</strong> Neutral/Realistic.</li>
            <li><strong>Aerial:</strong> Establishing location from above.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Movement</h3>
          <ul>
            <li><strong>Pan:</strong> Rotates left/right (tripod).</li>
            <li><strong>Tilt:</strong> Rotates up/down.</li>
            <li><strong>Zoom:</strong> Focus change (closer/further).</li>
            <li><strong>Track:</strong> Physically moving with the action.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Lighting & Audio</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Lighting</h3>
          <ul>
            <li><strong>Low Key:</strong> Dark shadows, mystery, horror.</li>
            <li><strong>High Key:</strong> Bright, safe, comedy.</li>
            <li><strong>Backlight:</strong> Silhouettes, angelic/holy look.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Audio</h3>
          <ul>
            <li><strong>Diegetic:</strong> Heard by characters (dialogue).</li>
            <li><strong>Non-Diegetic:</strong> For audience only (soundtrack).</li>
            <li><strong>Silence:</strong> Creates tension.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Symbolic & Written</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Mise-en-scène</h3>
          <p>"Everything in the frame".</p>
          <ul>
            <li><strong>Props/Setting:</strong> Tells the story (messy room = chaos).</li>
            <li><strong>Costume:</strong> Reveals character (lab coat = clever).</li>
            <li><strong>Colour:</strong> Sets mood (Blue = sad/cold).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Typography</h3>
          <ul>
            <li><strong>Serif:</strong> Traditional, Formal.</li>
            <li><strong>Sans-serif:</strong> Modern, Clean.</li>
            <li><strong>Bold/Big:</strong> Shouting/Headlines.</li>
          </ul>
        </div>
      </div>
    </div>

  `,

  ta3: `
    <h1>Topic Area 3: Pre-production Planning</h1>
    <p>Developing work plans and creating the documentation needed to design professional media products.</p>
    
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_3_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Work Planning</div>
        <div class="card-info">
          <h3>3.1 Work planning</h3>
          <p>Creating project plans, including timescales, milestones, and resource management.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Idea Generation</div>
        <div class="card-info">
          <h3>3.2 Idea Generation Docs</h3>
          <p>Using mind maps and mood boards to develop initial concepts and themes.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_3')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Design & Planning</div>
        <div class="card-info">
          <h3>3.3 Design & Planning Docs</h3>
          <p>Visualisation diagrams, storyboards, and scripts used to map out the final product.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">3.4 Legal Issues in Media</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_3_4_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Privacy</div>
        <div class="card-info">
          <h3>3.4.1 Privacy & Defamation</h3>
          <p>Data protection, privacy rights, and the difference between libel and slander.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_4_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">IP Rights</div>
        <div class="card-info">
          <h3>3.4.2 Intellectual Property</h3>
          <p>Copyright, trademarks, patents, and how to use materials legally.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_4_3')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Regulation</div>
        <div class="card-info">
          <h3>3.4.3 Regulation & Classification</h3>
          <p>The role of BBFC, PEGI, ASA, and Ofcom in controlling media content.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_4_4')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Health & Safety</div>
        <div class="card-info">
          <h3>3.4.4 Health and Safety</h3>
          <p>Risk assessments, location recces, and hazard mitigation.</p>
        </div>
      </div>
    </div>
  `,

  r093_3_1: `
    <h1>3.1 Work Planning</h1>
    <p>A workplan is a structured document that maps out every stage of a media project. Its primary purpose is to ensure the project finishes on time and within budget by organising tasks and resources effectively.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Components of a Workplan</h2>
      <p>A comprehensive workplan must include the following elements:</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Phases</h3>
          <p>Projects are split into three distinct stages:</p>
          <ul>
            <li><strong>Pre-production:</strong> Planning, scripting, storyboarding, and hiring crew.</li>
            <li><strong>Production:</strong> The actual creation phase (filming, recording, building).</li>
            <li><strong>Post-production:</strong> Editing, effects, and exporting.</li>
          </ul>
        </div>
        
        <div class="card">
          <h3>Tasks & Activities</h3>
          <ul>
            <li><strong>Tasks:</strong> The main jobs (e.g., "Create Storyboard").</li>
            <li><strong>Activities:</strong> The smaller steps required (e.g., "Draw sketch", "Scan sketch").</li>
          </ul>
        </div>

        <div class="card">
          <h3>Workflow & Timescales</h3>
          <ul>
            <li><strong>Workflow:</strong> The logical order. (You can't edit before you film).</li>
            <li><strong>Timescales:</strong> How long each task takes. Essential for calculating the total project length.</li>
          </ul>
        </div>

        <div class="card">
          <h3>Milestones & Contingencies</h3>
          <ul>
            <li><strong>Milestones:</strong> Key checkpoints (e.g., "Client signs off script").</li>
            <li><strong>Contingencies:</strong> "Plan B" time added for delays (weather, illness).</li>
          </ul>
        </div>

        <div class="card">
          <h3>Resources</h3>
          <p>What you need to finish the task:</p>
          <ul>
            <li><strong>Hardware:</strong> Cameras, PCs, Lights.</li>
            <li><strong>Software:</strong> Photoshop, Premiere.</li>
            <li><strong>People:</strong> Crew, Actors.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Why Use a Workplan?</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Managing Individuals</h3>
          <p>Acts as a checklist for freelancers to stay focused and not forget tasks.</p>
        </div>
        <div class="card">
          <h3>Managing Teams</h3>
          <p>Coordinates everyone so the camera operator knows when they are needed and the editor knows when footage will arrive.</p>
        </div>
        <div class="card">
          <h3>Benefits</h3>
          <ul>
            <li><strong>Efficiency:</strong> No wasted time.</li>
            <li><strong>Monitoring:</strong> Track progress vs deadline.</li>
            <li><strong>Budget:</strong> Prevents overspending.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Milestone:</strong> A significant point marking the completion of a major phase.</p>
        </div>
        <div class="card">
          <p><strong>Contingency:</strong> Extra time added for unforeseen events.</p>
        </div>
        <div class="card">
          <p><strong>Workflow:</strong> The logical sequence of processes.</p>
        </div>
      </div>
    </div>

  `,

  r093_3_2: `
    <h1>3.2 Idea Generation Documents</h1>
    <p>Before a media product can be designed, ideas must be generated and visualised. Two key documents for this stage are Mind Maps and Mood Boards.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Mind Maps</h2>
      <p>A diagram used to organise thoughts and generate ideas around a central theme.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Purpose</h3>
          <ul>
            <li>To generate a wide range of ideas quickly (brainstorming).</li>
            <li>To show the links and connections between different parts of a project.</li>
            <li>To break down complex tasks into smaller components.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Components</h3>
          <ul>
            <li><strong>Central Node:</strong> The main theme or title in the middle (e.g., "Summer Festival").</li>
            <li><strong>Nodes:</strong> The main categories branching off the centre (e.g., "Food", "Music", "Security").</li>
            <li><strong>Sub-nodes:</strong> Specific details branching off nodes (e.g., "Burgers", "Rock Band").</li>
            <li><strong>Branches:</strong> The lines connecting the nodes.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Types & Hardware</h3>
          <p><strong>Hand Drawn:</strong> Created using paper, pens, and pencils. Quick to produce but harder to edit.</p>
          <p><strong>Digital:</strong> Created using a PC, mouse, and software (e.g., MindView, PowerPoint). Easy to edit and share professionally.</p>
        </div>
        <div class="card">
          <h3>Users</h3>
          <p>Creative professionals such as graphic designers, game developers, and writers use them to plan content and structure.</p>
        </div>
      </div>
      
      <h3>Effectiveness</h3>
      <p>A mind map is effective if it has a logical structure, clear connections, and covers all relevant aspects of the brief. It can be improved by adding more specific sub-nodes to deepen the detail.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Mood Boards</h2>
      <p>A collage of objects which tries to capture a feeling, theme, or design style.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Purpose</h3>
          <ul>
            <li>To generate ideas and inspiration for a "look and feel".</li>
            <li>To visually communicate a style to a client or team member.</li>
            <li>To ensure all creative team members are following the same vision.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Components</h3>
          <ul>
            <li><strong>Images:</strong> Photos, sketches, or screenshots relevant to the theme.</li>
            <li><strong>Colours:</strong> A colour palette or specific swatches.</li>
            <li><strong>Typography:</strong> Examples of font styles and text layouts.</li>
            <li><strong>Textures:</strong> (Physical only) Fabrics, wood, or paper samples.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Types & Hardware</h3>
          <p><strong>Physical:</strong> Created on a foam board using glue, scissors, and magazine cut-outs or fabric samples.</p>
          <p><strong>Digital:</strong> Created on a computer using image editing software (e.g., Photoshop). Can include video clips and sound.</p>
        </div>
        <div class="card">
          <h3>Users</h3>
          <p>Interior designers, fashion designers, and graphic designers use them to agree on a visual style with a client before starting work.</p>
        </div>
      </div>

      <h3>Effectiveness</h3>
      <p>A mood board is effective if it clearly communicates a single, consistent theme. It can be improved by removing clashing images or clarifying the colour palette to better suit the target audience.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Node:</strong> A point on a mind map containing a keyword or image.</p>
        </div>
        <div class="card">
          <p><strong>Branch:</strong> The line connecting two nodes, showing they are related.</p>
        </div>
        <div class="card">
          <p><strong>Colour Palette:</strong> A specific selection of colours chosen to be used in a design.</p>
        </div>
        <div class="card">
          <p><strong>Texture:</strong> The visual or tactile quality of a surface (e.g., rough, smooth, metallic).</p>
        </div>
      </div>
    </div>

  `,

  r093_3_3: `
    <h1>3.3 Design & Planning Documents</h1>
    <p>Once ideas are generated, they must be planned in detail. Different documents are used depending on the type of product being created.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Visualisation Diagram</h2>
      <p>A rough drawing or sketch showing how a static product will look.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Purpose & Users</h3>
          <p><strong>Purpose:</strong> To show the layout and composition of a static product (e.g., poster, DVD cover, magazine page) to a client or graphic designer before it is made digitally.</p>
          <p><strong>Users:</strong> Graphic designers, web designers, photographers.</p>
        </div>
        <div class="card">
          <h3>Components</h3>
          <ul>
            <li><strong>Images/Graphics:</strong> Sketches of the main visual elements.</li>
            <li><strong>Text/Typography:</strong> Titles, body text, and font styles.</li>
            <li><strong>Layout:</strong> The positioning of all elements on the page.</li>
            <li><strong>Annotations:</strong> Notes on colour schemes, font sizes, and specific details.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Hardware & Software</h3>
          <p><strong>Hardware:</strong> Mouse, keyboard, graphics tablet, or scanner (for hand-drawn).</p>
          <p><strong>Software:</strong> Desktop publishing software (e.g., Microsoft Publisher, Adobe InDesign), Image editing software (e.g., Photoshop).</p>
        </div>
      </div>
      <p><strong>Effectiveness:</strong> Effective if the layout is clear and annotations explain any details that cannot be drawn (e.g., specific hex colour codes).</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Storyboard</h2>
      <p>A sequence of drawings representing the shots planned for a film or animation.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Purpose & Users</h3>
          <p><strong>Purpose:</strong> To visually plan the timeline of a video product.</p>
          <p><strong>Users:</strong> Directors, camera operators, editors.</p>
        </div>
        <div class="card">
          <h3>Components</h3>
          <ul>
            <li><strong>Scene Sketches:</strong> Visual representation of the shot.</li>
            <li><strong>Camera Info:</strong> Shot types (Close Up, Long Shot), angles, and movement (Pan, Zoom).</li>
            <li><strong>Timing:</strong> Duration of each shot.</li>
            <li><strong>Sound:</strong> Dialogue, music, and sound effects.</li>
            <li><strong>Scene Numbers:</strong> To keep the order correct.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Hardware & Software</h3>
          <p><strong>Hardware:</strong> Graphics tablet, scanner, mouse.</p>
          <p><strong>Software:</strong> Storyboarder, FrameForge, Adobe Photoshop.</p>
        </div>
      </div>
      <p><strong>Effectiveness:</strong> Effective if the camera instructions are clear enough for a cameraman to film without asking questions.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Script</h2>
      <p>A written document containing the dialogue and directions for a media product.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Purpose & Users</h3>
          <p><strong>Purpose:</strong> To tell the story and provide instructions for actors and crew.</p>
          <p><strong>Users:</strong> Actors (to learn lines), Directors, Voiceover artists.</p>
        </div>
        <div class="card">
          <h3>Components</h3>
          <ul>
            <li><strong>Scene Heading:</strong> Location (INT/EXT) and Time (DAY/NIGHT).</li>
            <li><strong>Action:</strong> Description of what is happening.</li>
            <li><strong>Character Names:</strong> Centred and in capitals.</li>
            <li><strong>Dialogue:</strong> The spoken words.</li>
            <li><strong>Parentheticals:</strong> Instructions on <em>how</em> lines should be spoken (e.g., <em>(angrily)</em>).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Hardware & Software</h3>
          <p><strong>Hardware:</strong> Keyboard (essential for typing).</p>
          <p><strong>Software:</strong> Word processors (Microsoft Word), Dedicated scriptwriting software (Final Draft, Celtx).</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Wireframe & Flow Chart</h2>
      
      <h3>Wireframe</h3>
      <div class="card-grid">
        <div class="card">
          <h3>Definition & Components</h3>
          <p><strong>Definition:</strong> A blueprint for a website or app that shows the layout without the design elements (colours/images).</p>
          <ul>
            <li><strong>Components:</strong> Placeholders for images (box with 'X'), navigation bars, buttons, text areas.</li>
            <li><strong>Users:</strong> Web designers, App developers.</li>
            <li><strong>Software:</strong> Balsamiq, Adobe XD, PowerPoint.</li>
          </ul>
        </div>
        <div class="card" style="padding: 0; overflow: hidden; border: none;">
          <img src="Wireframes-in-digital-project-planning.jpg" alt="Wireframe Example" style="width: 100%; height: 100%; object-fit: cover; display: block;">
        </div>
      </div>

      <h3>Flow Chart</h3>
      <div class="card-grid">
        <div class="card">
          <h3>Definition & Details</h3>
          <p><strong>Definition:</strong> A diagram showing the sequence of steps in a process or navigation through a system.</p>
          <p><strong>Users:</strong> Game designers (for game logic), Web developers (for site navigation).</p>
        </div>
        <div class="card">
          <h3>Components (Symbols)</h3>
          <ul>
            <li><strong>Terminator (Oval):</strong> Start/End.</li>
            <li><strong>Process (Rectangle):</strong> An action or task.</li>
            <li><strong>Decision (Diamond):</strong> A Yes/No question leading to different paths.</li>
            <li><strong>Flow Line (Arrow):</strong> Direction of travel.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">5. Asset Log</h2>
      <p>A list of all the resources (assets) needed to create the final product.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Purpose & Users</h3>
          <p><strong>Purpose:</strong> To track all files and ensure legal compliance (copyright).</p>
          <p><strong>Users:</strong> Project managers, editors, lawyers.</p>
        </div>
        <div class="card">
          <h3>Components</h3>
          <ul>
            <li><strong>Asset Name/ID:</strong> e.g., "Image_01.jpg".</li>
            <li><strong>Source:</strong> Where it came from (e.g., "Taken by self" or URL).</li>
            <li><strong>Legal Status:</strong> Copyright check (e.g., "Royalty-free", "Copyright owner contacted").</li>
            <li><strong>Use:</strong> Where it will appear in the project.</li>
          </ul>
        </div>
      </div>
      <p><strong>Effectiveness:</strong> Effective if it prevents legal issues by ensuring all assets have the correct permissions before use.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Annotation:</strong> Explanatory notes added to a diagram or sketch to provide extra detail.</p>
        </div>
        <div class="card">
          <p><strong>Convention:</strong> A standard way of doing things (e.g., scene headings in scripts are always capitalised).</p>
        </div>
        <div class="card">
          <p><strong>Layout:</strong> The arrangement of visual elements on a page or screen.</p>
        </div>
        <div class="card">
          <p><strong>Navigation:</strong> The system that allows users to move around a website or app (e.g., menus, buttons).</p>
        </div>
      </div>
    </div>

  `,

  r093_3_4_1: `
    <h1>3.4.1 Privacy, Defamation, and Data Protection</h1>
    <p>Media producers must respect the rights of individuals. Failure to do so can lead to legal action and damage to professional reputation.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Privacy and Permissions</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Public vs Private</h3>
          <ul>
            <li><strong>Public Places:</strong> Generally, you have the right to take photos or video in public spaces (e.g., a park or street).</li>
            <li><strong>Private Property:</strong> You must have permission from the owner to film on private land (e.g., inside a shopping centre or a house).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Commercial Use</h3>
          <p>Even if you film in public, you need a <strong>Model Release Form</strong> signed by any individual who is identifiable if you intend to use the footage for commercial purposes (to make money/advertise).</p>
        </div>
      </div>
      <p><strong>Harassment:</strong> Persistent filming or photography of an individual after they have asked you to stop can be considered harassment and invasion of privacy.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Defamation</h2>
      <p>Defamation is the act of damaging a person's good reputation by spreading false information.</p>
      <ul>
        <li><strong>Libel:</strong> A permanent form of defamation (e.g., written in a newspaper, posted on a website, or broadcast on TV).</li>
        <li><strong>Slander:</strong> A temporary form of defamation (e.g., spoken words or gestures).</li>
      </ul>
      <p><strong>Impact:</strong> If a media producer publishes inaccurate personal information, they can be sued for damages (money) and lose their credibility.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Data Protection</h2>
      <p>When media companies collect data (e.g., names and emails for a newsletter), they must follow strict rules.</p>
      <ul>
        <li><strong>Rights of Data Subjects:</strong> People have the right to know what data is held about them, to see it, and to have it deleted.</li>
        <li><strong>Storage:</strong> Data must be stored securely and not shared without permission.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Model Release Form:</strong> A legal document signed by a person granting permission for their image to be used in a media product.</p>
        </div>
        <div class="card">
          <p><strong>Defamation:</strong> The action of damaging the good reputation of someone.</p>
        </div>
        <div class="card">
          <p><strong>Data Subject:</strong> The individual who the personal data is about.</p>
        </div>
      </div>
    </div>
  `,

  r093_3_4_2: `
    <h1>3.4.2 Intellectual Property (IP) Rights</h1>
    <p>Intellectual Property refers to creations of the mind. Laws exist to protect these creations so that creators can earn money from their work.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Protecting IP</h2>
      <div class="card-grid">
        <div class="card">
          <div class="card-image" style="background: url('copyright_symbol.png') no-repeat center center; background-size: 100%; background-color: white;"></div>
          <div class="card-info">
            <h3>Copyright</h3>
            <p>Automatically protects artistic works (music, films, books, software, images). You do not need to register it.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background-color: var(--dark-purple);">
            <img src="trademark-tm-white-logo-png-701751694713375bqhnkasuv7.png" alt="Trademark Logo" style="max-height: 80%; max-width: 90%;">
          </div>
          <div class="card-info">
            <h3>Trademarks</h3>
            <p>Protects brand identity, such as logos, slogans, and brand names (e.g., the Nike 'Swoosh'). These must be registered.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background-color: white;">
            <img src="pngtree-vector-patented-stamp-brand-patent-patents-vector-png-image_13888952.png" alt="Patent Stamp" style="max-height: 80%; max-width: 90%;">
          </div>
          <div class="card-info">
            <h3>Patents</h3>
            <p>Protects inventions and technical solutions. It stops others from making or selling the invention.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Using Copyrighted Materials</h2>
      <p>Media producers often need to use existing assets. They must do so legally to avoid fines.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Creative Commons (CC)</h3>
          <p>A licence where the creator gives permission for their work to be used for free, often under specific conditions (e.g., you must credit them).</p>
        </div>

        <div class="card">
          <h3>Fair Dealing</h3>
          <p>Allows you to use small parts of copyrighted material without permission for specific purposes, such as news reporting, review, or education.</p>
        </div>

        <div class="card">
          <h3>Permissions & Fees</h3>
          <p>If a work is not CC or Fair Dealing, you must contact the owner, ask for permission, and usually pay a fee (Royalty) to use it.</p>
        </div>

        <div class="card">
          <h3>Watermarks</h3>
          <p>A translucent logo or text overlaid on an image to prevent people from using it without paying. <strong>Never</strong> use a watermarked image in a final product.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Intellectual Property (IP):</strong> Intangible property that is the result of creativity, such as patents, copyrights, etc.</p>
        </div>
        <div class="card">
          <p><strong>Royalty:</strong> A payment made to the legal owner for the right to use their intellectual property.</p>
        </div>
        <div class="card">
          <p><strong>Public Domain:</strong> Creative materials that are not protected by intellectual property laws and are free for anyone to use.</p>
        </div>
      </div>
    </div>
  `,

  r093_3_4_3: `
    <h1>3.4.3 Regulation, Certification, and Classification</h1>
    <p>Media products are regulated to protect audiences (especially children) from harmful or offensive content.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Regulatory Bodies</h2>
      <div class="card-grid">
        <div class="card">
          <div class="card-image" style="background-color: white;">
            <img src="United_Kingdom_Advertising_Standards_Authority_logo.svg.png" alt="ASA Logo" style="max-height: 80%; max-width: 90%;">
          </div>
          <div class="card-info">
            <h3>ASA (Advertising Standards Authority)</h3>
            <p><strong>Role:</strong> Regulates adverts across all UK media (TV, online, print).</p>
            <p><strong>Purpose:</strong> Ensures ads are legal, decent, honest, and truthful.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background: url('ofcom-logo-png_seeklogo-642653.png') no-repeat center center; background-size: 80%; background-color: white;"></div>
          <div class="card-info">
            <h3>Ofcom (Office of Communications)</h3>
            <p><strong>Role:</strong> Regulates TV, radio, and video-on-demand services in the UK.</p>
            <p><strong>Purpose:</strong> Ensures harmful material is not broadcast when children are watching (the "Watershed").</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background-color: white;">
            <img src="BBFC_logo.svg.png" alt="BBFC Logo" style="max-height: 80%; max-width: 90%;">
          </div>
          <div class="card-info">
            <h3>BBFC (British Board of Film Classification)</h3>
            <p><strong>Role:</strong> Rates films and cinema content.</p>
            <p><strong>Certifications:</strong> U, PG, 12A, 15, 18.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background: url('PEGI_logo.svg') no-repeat center center; background-size: 75%; background-color: white;"></div>
          <h3>PEGI (Pan European Game Information)</h3>
          <p><strong>Role:</strong> Rates video games in Europe.</p>
          <p><strong>Certifications:</strong> 3, 7, 12, 16, 18.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Impact on Production</h2>
      <p><strong>Classification:</strong> Producers must decide their target rating before production. If they want a '12' rating, they cannot include strong violence or swearing.</p>
      <p><strong>Regulation:</strong> If an advert breaks ASA rules, it can be banned, wasting all the money spent on producing it. This forces producers to follow the rules strictly.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Watershed:</strong> The time (9pm in the UK) after which programmes unsuitable for children can be broadcast.</p>
        </div>
        <div class="card">
          <p><strong>Certification:</strong> The process of giving a media product an age rating based on its content.</p>
        </div>
        <div class="card">
          <p><strong>Censorship:</strong> The suppression or prohibition of any parts of media that are considered obscene or politically unacceptable.</p>
        </div>
      </div>
    </div>
  `,

  legal_sort_game: `
  <h1>Legal & Ethical Scenario Sort</h1>
    <p>Drag each scenario into the correct legal category. Make sure you understand the difference between IP, Privacy, and Defamation!</p>

    <div class="homework-box">
      <div id="legal-bank" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; padding: 15px; background: #eee; border-radius: 8px; min-height: 50px;">
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="scen-1" data-phase="copy">Using a hit song in a YouTube video without permission.</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="scen-2" data-phase="def">Writing a blog post claiming a celebrity is a thief without proof.</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="scen-3" data-phase="priv">Filming someone through their bedroom window.</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="scen-4" data-phase="copy">Creating a logo that looks identical to the Nike Swoosh.</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="scen-5" data-phase="def">Spreading a false rumor on TV about a local business owner.</div>
        <div class="draggable-role" draggable="true" ondragstart="drag(event)" id="scen-6" data-phase="priv">Using a person's photo in an advert without a Model Release Form.</div>
      </div>

      <div class="card-grid" style="grid-template-columns: repeat(3, 1fr);">
        <div class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)" id="copy">
          <h3>Copyright & IP</h3>
        </div>
        <div class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)" id="priv">
          <h3>Privacy & GDPR</h3>
        </div>
        <div class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)" id="def">
          <h3>Defamation</h3>
        </div>
      </div>
      
      <div id="game-feedback" style="margin-top: 20px; font-weight: bold; min-height: 24px; text-align: center;"></div>
      <button onclick="loadContent('legal_sort_game')" style="margin-top: 20px; padding: 10px 20px; background: var(--pastel-violet); color: var(--dark-purple); border: none; border-radius: 5px; cursor: pointer;">Reset Activity</button>
    </div>
  `,

  r093_3_4_4: `
    <h1>3.4.4 Health and Safety</h1>
    <p>Media production involves real physical risks. Producers have a legal duty to keep their cast and crew safe.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Risks and Hazards</h2>
      <p><strong>Hazard:</strong> Something that has the potential to cause harm.</p>
      <p><strong>Risk:</strong> The likelihood of that harm actually happening.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Common Hazards</h3>
          <ul>
            <li><strong>Cables:</strong> Trip hazards on set.</li>
            <li><strong>Lighting:</strong> Hot lights can cause burns or fire; heavy stands can fall.</li>
            <li><strong>Computers:</strong> Eye strain (RSI) and back pain from poor posture.</li>
            <li><strong>Locations:</strong> Working at heights, near water, or near traffic.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Mitigation (Actions)</h3>
          <ul>
            <li>Taping down loose cables.</li>
            <li>Using sandbags to secure lighting stands.</li>
            <li>Taking regular breaks when editing (VDU breaks).</li>
            <li>Providing high-visibility jackets for crew working near roads.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Risk Assessments & Recces</h2>
      
      <h3>Location Recce</h3>
      <p><strong>Purpose:</strong> A visit to a location <em>before</em> filming to check its suitability. You check for power sources, noise levels (e.g., a nearby airport), and potential safety hazards.</p>

      <h3>Risk Assessment</h3>
      <p><strong>Purpose:</strong> A formal document that identifies hazards, evaluates the risk level (Low/Med/High), and lists the control measures needed to reduce that risk.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Mitigation:</strong> The action of reducing the severity, seriousness, or painfulness of something (e.g., reducing a risk).</p>
        </div>
        <div class="card">
          <p><strong>RSI (Repetitive Strain Injury):</strong> Damage to the muscles/nerves caused by repetitive twisting or using a computer mouse for too long.</p>
        </div>
        <div class="card">
          <p><strong>Recce:</strong> (Reconnaissance) A pre-filming visit to a location to determine its suitability for shooting.</p>
        </div>
      </div>
    </div>
  `,

  ta4: `
    <h1>Topic Area 4: Distribution Considerations</h1>
    <p>Understanding how media products reach audiences and the technical formats required for delivery.</p>
    
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_4_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Platforms</div>
        <div class="card-info">
          <h3>4.1 Distribution Platforms</h3>
          <p>Online (websites, social media, streaming) and Physical (DVD, Blu-ray) platforms to reach audiences.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">4.2 Properties and Formats of Media Files</h2>
    
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_4_2_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Images</div>
        <div class="card-info">
          <h3>4.2.1 Image Files</h3>
          <p>Standard formats: JPEG and PNG. Understanding resolution and pixel density for different outputs.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_4_2_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Audio</div>
        <div class="card-info">
          <h3>4.2.2 Audio Files</h3>
          <p>Standard formats: MP3 and WAV. Key properties include sample rate and bit depth.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_4_2_3')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Video</div>
        <div class="card-info">
          <h3>4.2.3 Moving Image Files</h3>
          <p>Standard formats: MP4 and MOV. Considerations for frame rate and video bit rate.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_4_2_4')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Compression</div>
        <div class="card-info">
          <h3>4.2.4 File Compression</h3>
          <p>Using lossy and lossless compression to manage file size while maintaining quality.</p>
        </div>
      </div>
    </div>
    
  `,

  // --- NEW CONTENT: 4.1 Distribution ---
  r093_4_1: `
    <h1>4.1 Distribution Platforms and Media</h1>
    <p>Media products need a way to reach their audience. We categorise these methods into <strong>Online</strong> distribution, <strong>Physical Platforms</strong> (hardware), and <strong>Physical Media</strong> (storage devices).</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Online Distribution</h2>
      <p>Content delivered over the internet. This is the dominant form of distribution today due to speed and accessibility.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Web (Websites)</h3>
          <p><strong>Characteristics:</strong> Accessible via browsers on multiple devices. Content can be updated instantly.</p>
          <p><strong>Pros:</strong> Global reach, 24/7 availability, low distribution cost.</p>
          <p><strong>Cons:</strong> Requires internet connection, competes with billions of other sites.</p>
        </div>
        <div class="card">
          <h3>Apps (Applications)</h3>
          <p><strong>Characteristics:</strong> Software downloaded to a specific device (mobile or desktop) offering a tailored experience.</p>
          <p><strong>Pros:</strong> Can work offline, push notifications, better performance than websites.</p>
          <p><strong>Cons:</strong> Must be developed for specific operating systems (iOS vs Android), requires storage space.</p>
        </div>
        <div class="card">
          <h3>Multimedia</h3>
          <p><strong>Characteristics:</strong> Combinations of text, audio, video, and interactivity streamed or accessed online.</p>
          <p><strong>Pros:</strong> Highly engaging and interactive.</p>
          <p><strong>Cons:</strong> High bandwidth usage (data heavy).</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Physical Platforms (Hardware)</h2>
      <p>The hardware devices that users interact with to view or use the media product.</p>

      <div class="card-grid">
        <div class="card">
          <h3>Mobile Devices</h3>
          <p><strong>Examples:</strong> Smartphones, Tablets.</p>
          <p><strong>Impact:</strong> Screens are small and vertically orientated. Content must be "responsive" (resize automatically) and touch-screen friendly.</p>
        </div>
        <div class="card">
          <h3>Computers</h3>
          <p><strong>Examples:</strong> Desktops, Laptops.</p>
          <p><strong>Impact:</strong> Large landscape screens, mouse/keyboard input. Capable of processing high-quality, uncompressed media.</p>
        </div>
        <div class="card">
          <h3>Interactive TV</h3>
          <p><strong>Examples:</strong> Smart TVs, Red Button services.</p>
          <p><strong>Impact:</strong> viewed from a distance (10ft interface). Navigation must be simple (remote control) and text must be large.</p>
        </div>
        <div class="card">
          <h3>Kiosks</h3>
          <p><strong>Examples:</strong> Information points in museums, ticket machines.</p>
          <p><strong>Impact:</strong> Public use hardware. The interface must be extremely robust, simple, and secure (users cannot exit the app).</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Physical Media (Storage)</h2>
      <p>Tangible objects that store data. While declining in popularity, they are still vital for specific uses.</p>

      <div class="card-grid">
        <div class="card">
          <h3>CD / DVD / Blu-ray</h3>
          <p><strong>Use:</strong> Films, music albums, software installation.</p>
          <p><strong>Advantage:</strong> High quality (Blu-ray), collectible, no internet needed.</p>
          <p><strong>Disadvantage:</strong> Easily scratched, requires specific hardware (disc drive) which modern computers often lack.</p>
        </div>
        <div class="card">
          <h3>Memory Stick / USB</h3>
          <p><strong>Use:</strong> Transferring files, portable apps.</p>
          <p><strong>Advantage:</strong> Small, portable, rewriteable (can be used many times).</p>
          <p><strong>Disadvantage:</strong> Easily lost, security risk (viruses), limited lifespan.</p>
        </div>
        <div class="card">
          <h3>Paper-based</h3>
          <p><strong>Use:</strong> Magazines, posters, flyers.</p>
          <p><strong>Advantage:</strong> Tactile feel, no power/battery required, high resolution.</p>
          <p><strong>Disadvantage:</strong> Cannot be updated once printed, costly to distribute, environmental impact.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Selecting Formats based on Platform</h2>
      <p>The choice of distribution platform dictates the file format.</p>
      <ul>
        <li><strong>Scenario A (Website):</strong> You must use compressed formats (JPEG, MP4) so the page loads quickly over mobile data.</li>
        <li><strong>Scenario B (Cinema/Blu-ray):</strong> You use high-quality, uncompressed or lossless formats (RAW, WAV) because the hardware can handle the large data rates and the screen is huge.</li>
        <li><strong>Scenario C (App):</strong> You might use vector graphics (SVG) for icons so they stay sharp on both small phones and large tablets without increasing file size.</li>
      </ul>
    </div>

  `,

  // --- NEW CONTENT: 4.2.1 Image Files ---
  r093_4_2_1: `
    <h1>4.2.1 Image Files</h1>
    <p>Understanding the technical properties of digital images is crucial for ensuring they look good on the chosen distribution platform.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Properties of Digital Images</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Resolution (DPI vs PPI)</h3>
          <p><strong>PPI (Pixels Per Inch):</strong> Used for <strong>screens</strong>. Standard screens are 72 or 96 PPI; high-res "Retina" screens are 300+ PPI.</p>
          <p><strong>DPI (Dots Per Inch):</strong> Used for <strong>print</strong>. Standard high-quality print is 300 DPI.</p>
          <p><em>Key Concept:</em> A higher DPI/PPI means more detail but a larger file size.</p>
        </div>
        <div class="card">
          <h3>Pixel Dimensions</h3>
          <p>The total number of pixels along the width and height of an image (e.g., 1920 x 1080).</p>
          <p><strong>Relationship to Quality:</strong> Higher dimensions allow an image to be displayed on larger screens without becoming blurry (pixelated).</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Static Image File Formats</h2>
      
      <div class="card-grid">
        <div class="card">
          <h3>Raster (Bitmap)</h3>
          <p><strong>Made of:</strong> A grid of coloured pixels.</p>
          <p><strong>Pros:</strong> Can display complex detail and photorealism (e.g., photos).</p>
          <p><strong>Cons:</strong> Loses quality when scaled up (becomes blocky/pixelated).</p>
          <p><strong>Formats:</strong> JPEG, PNG, TIFF, BMP, GIF.</p>
        </div>
        <div class="card">
          <h3>Vector</h3>
          <p><strong>Made of:</strong> Mathematical formulas and paths (lines, curves).</p>
          <p><strong>Pros:</strong> Scalable to any size without losing quality. Small file size for simple shapes.</p>
          <p><strong>Cons:</strong> Cannot display photorealistic detail.</p>
          <p><strong>Formats:</strong> SVG, AI, EPS, PDF.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Compression: Lossy vs Lossless</h2>
      <p>Compression is used to reduce file size for storage or transmission.</p>

      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;">Type</th>
          <th style="padding: 10px; text-align: left;">How it works</th>
          <th style="padding: 10px; text-align: left;">Pros/Cons</th>
          <th style="padding: 10px; text-align: left;">Use Case</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Uncompressed</strong><br>(e.g. TIFF, RAW)</td>
          <td style="padding: 10px;">Stores every single bit of original data.</td>
          <td style="padding: 10px;"><strong>+</strong> Perfect quality<br><strong>-</strong> Huge file size</td>
          <td style="padding: 10px;">Professional photography, archiving, print.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Lossless</strong><br>(e.g. PNG)</td>
          <td style="padding: 10px;">Compresses data without deleting it (like zipping a file).</td>
          <td style="padding: 10px;"><strong>+</strong> High quality, supports transparency<br><strong>-</strong> Larger than lossy</td>
          <td style="padding: 10px;">Logos, sharp diagrams, web graphics.</td>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>Lossy</strong><br>(e.g. JPEG)</td>
          <td style="padding: 10px;">Permanently deletes data that the eye is unlikely to notice.</td>
          <td style="padding: 10px;"><strong>+</strong> Tiny file size<br><strong>-</strong> Quality degrades (artefacts)</td>
          <td style="padding: 10px;">Websites, social media, email.</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Pixel:</strong> (Picture Element) The smallest controllable element of a picture represented on the screen.</p>
        </div>
        <div class="card">
          <p><strong>Resolution:</strong> The amount of detail an image holds. Measured in PPI for screens and DPI for print.</p>
        </div>
        <div class="card">
          <p><strong>Rasterizing:</strong> The process of converting a vector image into a bitmap (pixels).</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW CONTENT: 4.2.2 Audio Files ---
  r093_4_2_2: `
    <h1>4.2.2 Audio Files</h1>
    <p>Digital audio is created by taking measurements (samples) of a sound wave. The quality depends on how often we measure it and how precise those measurements are.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Properties of Digital Audio</h2>
      
      <div class="card-grid">
        <div class="card">
          <h3>Sample Rate (Hz)</h3>
          <p><strong>Definition:</strong> The number of audio samples captured every second.</p>
          <p><strong>Standard:</strong> 44,100 Hz (44.1 kHz) is the standard for CD audio.</p>
          <p><strong>Effect on Quality:</strong> A higher sample rate captures higher frequencies accurately, resulting in brighter, clearer sound.</p>
        </div>
        <div class="card">
          <h3>Bit Depth (Bits)</h3>
          <p><strong>Definition:</strong> The number of bits of information in each sample.</p>
          <p><strong>Standard:</strong> 16-bit (CD quality), 24-bit (Studio quality).</p>
          <p><strong>Effect on Quality:</strong> A higher bit depth provides a greater "dynamic range" (the difference between the quietest and loudest sounds) and reduces background noise (hiss).</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Audio File Formats</h2>
      <p>Choosing the right format depends on whether you need quality (production) or speed (distribution).</p>

      <div class="card-grid">
        <div class="card">
          <h3>Uncompressed</h3>
          <p><strong>Formats:</strong> WAV, AIFF</p>
          <p><strong>Description:</strong> An exact copy of the original recording.</p>
          <p><strong>Use:</strong> Professional recording, editing, and master copies.</p>
          <p><strong>Con:</strong> Files are extremely large.</p>
        </div>
        <div class="card">
          <h3>Compressed (Lossless)</h3>
          <p><strong>Formats:</strong> FLAC, ALAC</p>
          <p><strong>Description:</strong> Reduces file size without losing any audio data.</p>
          <p><strong>Use:</strong> High-quality music archiving and streaming (e.g., Tidal).</p>
          <p><strong>Con:</strong> Files are smaller than WAV, but still much larger than MP3.</p>
        </div>
        <div class="card">
          <h3>Compressed (Lossy)</h3>
          <p><strong>Formats:</strong> MP3, AAC, OGG</p>
          <p><strong>Description:</strong> Removes sounds that the human ear struggles to hear (perceptual coding).</p>
          <p><strong>Use:</strong> Streaming (Spotify), web downloads, portable devices.</p>
          <p><strong>Con:</strong> Quality is permanently reduced.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Sample Rate:</strong> The frequency at which samples of analog audio are taken to convert it into digital data.</p>
        </div>
        <div class="card">
          <p><strong>Bit Depth:</strong> The resolution of the sound data, determining the dynamic range of the audio.</p>
        </div>
        <div class="card">
          <p><strong>Dynamic Range:</strong> The ratio between the largest and smallest values that a certain quantity of sound can assume.</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW CONTENT: 4.2.3 Moving Image Files ---
  r093_4_2_3: `
    <h1>4.2.3 Moving Image Files</h1>
    <p>Moving images include video footage and animation. Understanding the technical properties of these files is essential for balancing quality with file size.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Properties of Digital Moving Images</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Frame Rate (FPS)</h3>
          <p><strong>Definition:</strong> The number of individual images (frames) displayed per second.</p>
          <p><strong>Impact on Quality:</strong> A higher frame rate results in smoother motion, which is critical for fast-paced content.</p>
          <ul>
            <li><strong>24 FPS:</strong> Standard for cinema/movies.</li>
            <li><strong>30 FPS:</strong> Standard for television and news.</li>
            <li><strong>60+ FPS:</strong> Required for gaming and sports to prevent blur.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Resolution</h3>
          <p>The number of pixels that make up the image on screen (Width x Height).</p>
          <ul>
            <li><strong>SD (Standard Definition):</strong> 720 x 576 pixels. Low quality, small file size.</li>
            <li><strong>HD (High Definition):</strong> 1920 x 1080 pixels (1080p). The standard for web video and Blu-ray.</li>
            <li><strong>UHD / 4K:</strong> 3840 x 2160 pixels. Four times the detail of HD.</li>
            <li><strong>8K:</strong> 7680 x 4320 pixels. Extremely high detail, requires massive storage.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Moving Image File Formats</h2>
      
      <h3>Video Formats</h3>
      <div class="card-grid">
        <div class="card">
          <h3>MP4 (MPEG-4)</h3>
          <p><strong>Type:</strong> Compressed (Lossy)</p>
          <p><strong>Use:</strong> The industry standard for online streaming (YouTube, Netflix) and social media.</p>
          <p><strong>Pros:</strong> High compatibility, small file size, good quality.</p>
        </div>
        <div class="card">
          <h3>MOV</h3>
          <p><strong>Type:</strong> Compressed (often high quality)</p>
          <p><strong>Use:</strong> High-quality editing and playback on Apple devices.</p>
          <p><strong>Pros:</strong> Excellent quality for editing.</p>
          <p><strong>Cons:</strong> Larger file sizes than MP4.</p>
        </div>
        <div class="card">
          <h3>AVI</h3>
          <p><strong>Type:</strong> Uncompressed (typically)</p>
          <p><strong>Use:</strong> Storing master copies of video on Windows systems.</p>
          <p><strong>Pros:</strong> Highest possible quality.</p>
          <p><strong>Cons:</strong> Huge file sizes, not suitable for streaming.</p>
        </div>
      </div>

      <h3>Animation Formats</h3>
      <ul>
        <li><strong>GIF:</strong> Simple, silent, looping animations. Limited to 256 colours (Raster).</li>
        <li><strong>SWF:</strong> Older format for Flash animation (now obsolete).</li>
        <li><strong>SVG:</strong> Scalable Vector Graphics. Code-based animation used on websites to keep logos sharp at any size.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Choosing the Right Format</h2>
      <ul>
        <li><strong>Context: Cinema Screening.</strong> Use <strong>8K or 4K Uncompressed</strong>. Quality is the priority; file size does not matter as it is played from a local hard drive.</li>
        <li><strong>Context: Web Advert.</strong> Use <strong>HD (1080p) MP4</strong>. The file must be compressed so it streams quickly over 4G/5G without buffering.</li>
        <li><strong>Context: Sports Broadcast.</strong> Use <strong>60 FPS HD/4K</strong>. Smooth motion is vital to see the ball/action clearly.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Frame Rate:</strong> The frequency (rate) at which consecutive images (frames) appear on a display.</p>
        </div>
        <div class="card">
          <p><strong>UHD (Ultra High Definition):</strong> A resolution of 3840 x 2160 pixels, commonly referred to as 4K.</p>
        </div>
        <div class="card">
          <p><strong>Streaming:</strong> Playing media immediately as it downloads from the internet, rather than waiting for the whole file to finish.</p>
        </div>
      </div>
    </div>
  `,

  format_match_up: `
  <h1>File Format Match-up</h1>
    <p>Select the correct properties for the given media products to ensure they are fit for purpose!</p>

    <div class="homework-box">
      <table style="width:100%; border-collapse: collapse; text-align: left;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 10px;">Product</th>
          <th style="padding: 10px;">Target Resolution</th>
          <th style="padding: 10px;">Best Format</th>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>Large Billboard Poster</strong></td>
          <td><select id="res1"><option>Select...</option><option value="72">72 PPI</option><option value="300">300 DPI</option></select></td>
          <td><select id="fmt1"><option>Select...</option><option value="lossy">JPEG (Lossy)</option><option value="high">TIFF (Uncompressed)</option></select></td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px;"><strong>Website Profile Picture</strong></td>
          <td><select id="res2"><option>Select...</option><option value="72">72 PPI</option><option value="300">300 DPI</option></select></td>
          <td><select id="fmt2"><option>Select...</option><option value="lossy">JPEG (Lossy)</option><option value="high">TIFF (Uncompressed)</option></select></td>
        </tr>
      </table>
      
      <button onclick="checkFormats()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Check Answers</button>
      <div id="format-feedback" style="margin-top: 15px; font-weight: bold;"></div>
    </div>
  `,

  // --- NEW CONTENT: 4.2.4 File Compression ---
  r093_4_2_4: `
    <h1>4.2.4 File Compression</h1>
    <p>Compression is the process of encoding information using fewer bits than the original representation. It is essential for managing storage space and transmission speeds.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Lossy Compression</h2>
      <p><strong>Definition:</strong> A method that reduces file size by permanently deleting data that the computer deems redundant or that the human eye/ear cannot perceive.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Characteristics</h3>
          <ul>
            <li><strong>Data Removal:</strong> Colour data is simplified, or quiet sounds masked by loud sounds are removed.</li>
            <li><strong>Irreversible:</strong> Once compressed, you cannot get the original quality back.</li>
            <li><strong>Artefacts:</strong> If over-compressed, you see blocky squares (pixelation) or hear "muddy" audio.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Examples & Use</h3>
          <ul>
            <li><strong>Formats:</strong> JPEG (Images), MP3 (Audio), MP4 (Video).</li>
            <li><strong>Why use it?</strong> To make files small enough to email, stream, or store on mobile devices. Essential for the web.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Lossless Compression</h2>
      <p><strong>Definition:</strong> A method that reduces file size without losing any data. The original file can be perfectly reconstructed from the compressed file.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Characteristics</h3>
          <ul>
            <li><strong>Data Integrity:</strong> It works like a ZIP file, finding patterns in the code (e.g., "100 white pixels") rather than deleting pixels.</li>
            <li><strong>Reversible:</strong> You can uncompress it to get the exact original quality back.</li>
            <li><strong>Size:</strong> Only reduces file size by about 50%, whereas lossy can reduce it by 90%.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Examples & Use</h3>
          <ul>
            <li><strong>Formats:</strong> PNG (Images), FLAC (Audio), ZIP (Data).</li>
            <li><strong>Why use it?</strong> For archiving work, professional editing, or text documents where deleting data would make it unreadable.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Why do we compress files?</h2>
      <ul>
        <li><strong>Storage limitations:</strong> Devices like phones have limited memory. Uncompressed video would fill a phone in minutes.</li>
        <li><strong>Bandwidth speeds:</strong> Sending large files over the internet takes a long time. Compression allows for instant streaming.</li>
        <li><strong>Cost:</strong> Hosting large files on servers costs more money.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Compression Artefact:</strong> Noticeable distortion in media (like blockiness or blurring) caused by the application of aggressive lossy compression.</p>
        </div>
        <div class="card">
          <p><strong>Algorithm:</strong> A set of rules or calculations used by a computer to solve a problem (in this case, how to compress the file).</p>
        </div>
        <div class="card">
          <p><strong>Bitrate:</strong> The amount of data processed per second. Lower bitrate usually means higher compression and lower quality.</p>
        </div>
      </div>
    </div>
  `,

  r094_ta1: `
    <h1>R094 Topic Area 1: Develop Visual Identity</h1>
    <p>Visual identity is the "face" of a brand. It includes all the visual elements that represent a business to its customers.</p>
    
    <div class="card-grid">
      <div class="card" onclick="loadContent('r094_1_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Purpose</div>
        <div class="card-info">
          <h3>1.1 Purpose & Components</h3>
          <p>Why businesses need a visual identity and the core features (Name, Logo, Slogan) that create it.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_1_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Elements</div>
        <div class="card-info">
          <h3>1.2 Elements of Visual Identity</h3>
          <p>How graphics, typography, colour, and layout combine to shape customer perception.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_1_3')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Style & Brand</div>
        <div class="card-info">
          <h3>1.3 Design Style & Branding</h3>
          <p>Aligning visual identity with business type, brand values, and market positioning (Economy vs High-end).</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW CONTENT: 1.1 Purpose & Components ---
  r094_1_1: `
    <h1>1.1 Purpose and Component Features</h1>
    <p>Visual identity is the visual aspect of branding that businesses create in order to evoke certain feelings and experiences with the brand.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Purpose of Visual Identity</h2>
      <p>Why do companies spend millions on their look? It serves four main purposes:</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Recognition & Familiarity</h3>
          <p><strong>Goal:</strong> To be instantly identifiable in a crowded market.</p>
          <p><strong>Explanation:</strong> Customers should recognise a product without reading the name. For example, seeing "Golden Arches" instantly signals McDonald's.</p>
        </div>
        <div class="card">
          <h3>Establish a Brand</h3>
          <p><strong>Goal:</strong> To define who the company is.</p>
          <p><strong>Explanation:</strong> It sets the tone. A law firm uses a visual identity that says "Professional & Serious," while a toy shop says "Fun & Playful."</p>
        </div>
        <div class="card">
          <h3>Develop Brand Loyalty</h3>
          <p><strong>Goal:</strong> To build trust and repeat business.</p>
          <p><strong>Explanation:</strong> Consistent visuals make a brand feel reliable. Customers trust familiar brands over unknown ones.</p>
        </div>
        <div class="card">
          <h3>Visual Communication</h3>
          <p><strong>Goal:</strong> To speak to the audience without words.</p>
          <p><strong>Explanation:</strong> Using colours and shapes to tell the consumer if the product is luxury, eco-friendly, or budget-friendly before they even pick it up.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Component Features</h2>
      <p>The three physical pillars that make up a visual identity.</p>

      <div class="card-grid">
        <div class="card">
          <h3>Name</h3>
          <p>The verbal anchor of the brand. It is often the first thing a customer hears or sees.</p>
        </div>
        <div class="card">
          <h3>Logo</h3>
          <p>The visual anchor. This can be:</p>
          <ul>
            <li><strong>Logotype:</strong> The name written in a specific font (e.g., Disney).</li>
            <li><strong>Brand Mark:</strong> A symbol or icon (e.g., Apple's apple).</li>
            <li><strong>Combination Mark:</strong> Both text and symbol (e.g., Burger King).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Slogan / Strap line</h3>
          <p>A short, memorable phrase that communicates the brand's value or promise.</p>
          <p><em>Examples: "Just Do It", "I'm Lovin' It".</em></p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Visual Identity:</strong> The visible elements of a brand, such as colour, form, and shape, which encapsulate and convey the symbolic meanings that cannot be imparted through words alone.</p>
        </div>
        <div class="card">
          <p><strong>Brand Loyalty:</strong> The tendency of consumers to continuously purchase one brand's products over another.</p>
        </div>
        <div class="card">
          <p><strong>Strap line:</strong> A catchy phrase or slogan used in advertising to help consumers remember a brand.</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW CONTENT: 1.2 Elements ---
  r094_1_2: `
    <h1>1.2 Elements of Visual Identity</h1>
    <p>Designers combine specific artistic elements to shape perception and create an emotional response from the consumer.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Graphics (Shapes & Symbols)</h2>
      <p>Shapes function as a subconscious language. They communicate meaning instantly.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Circles / Ovals</h3>
          <p><strong>Meaning:</strong> Unity, community, friendship, stability (no sharp edges).</p>
          <p><strong>Use:</strong> Social media, charities, wellness brands.</p>
        </div>
        <div class="card">
          <h3>Triangles</h3>
          <p><strong>Meaning:</strong> Dynamic, movement, direction, power.</p>
          <p><strong>Use:</strong> Sports brands, construction, logistics.</p>
        </div>
        <div class="card">
          <h3>Squares / Rectangles</h3>
          <p><strong>Meaning:</strong> Reliability, solidity, order, tradition.</p>
          <p><strong>Use:</strong> Banks, insurance, technology.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Typography</h2>
      <p>The style of text used tells the customer what kind of business you are.</p>
      <ul>
        <li><strong>Serif (with feet):</strong> Traditional, respectable, expensive. <em>(e.g., Rolex, Vogue).</em></li>
        <li><strong>Sans Serif (no feet):</strong> Modern, clean, accessible. <em>(e.g., Google, Spotify).</em></li>
        <li><strong>Script (handwritten):</strong> Creative, personal, elegant. <em>(e.g., Instagram, Cadillac).</em></li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Colour Palette</h2>
      <p>Colour evokes specific emotions (Colour Psychology).</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Blue</h3>
          <p>Trust, calm, intelligence. Used by banks (Barclays) and Tech (Facebook).</p>
        </div>
        <div class="card">
          <h3>Red</h3>
          <p>Passion, danger, urgency, hunger. Used by Fast Food (KFC) and Clearance Sales.</p>
        </div>
        <div class="card">
          <h3>Green</h3>
          <p>Nature, health, wealth. Used by Whole Foods and Starbucks.</p>
        </div>
        <div class="card">
          <h3>Black/Gold</h3>
          <p>Luxury, exclusivity, sophistication. Used by Chanel and Hotel Chocolat.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Layout and Complexity</h2>
      <p>How busy or simple the design is changes the perception of value.</p>
      <ul>
        <li><strong>Minimalist (Low Complexity):</strong> Lots of white space, small text, few elements. Suggests <strong>High-End/Luxury</strong>. (e.g., Apple).</li>
        <li><strong>Busy (High Complexity):</strong> Large text, bright bursts, crowded layout. Suggests <strong>Economy/Value</strong>. (e.g., Discount stores).</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Typography:</strong> The art and technique of arranging type (text) to make written language legible, readable, and appealing.</p>
        </div>
        <div class="card">
          <p><strong>Colour Psychology:</strong> The study of how colours affect perceptions and behaviours.</p>
        </div>
        <div class="card">
          <p><strong>Layout:</strong> The arrangement of visual elements on a page or screen.</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW CONTENT: 1.3 Style & Brand ---
  r094_1_3: `
    <h1>1.3 Visual Identity Design Style</h1>
    <p>A visual identity must be fit for purpose. It must encapsulate the brand values and be relevant to the target audience.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Influencing Factors</h2>
      <p>Before designing, you must understand the business.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Business Type</h3>
          <p>The sector dictates the style. A funeral director requires a sombre, respectful style. A soft play centre requires a bright, energetic style.</p>
        </div>
        <div class="card">
          <h3>Brand Values</h3>
          <p>What does the company believe in? If a company values "Sustainability", their visual identity should use earthy tones and recycled textures, not neon plastics.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Brand Positioning</h2>
      <p>Positioning is where the brand sits in the market regarding price and quality.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Economy (Budget)</h3>
          <p><strong>Focus:</strong> Value for money.</p>
          <p><strong>Visuals:</strong> Bright primary colours (Yellow/Red), simple bold fonts, "busy" layouts to show lots of offers.</p>
          <p><em>Example: Lidl, Poundland.</em></p>
        </div>
        <div class="card">
          <h3>Mid-range</h3>
          <p><strong>Focus:</strong> Reliability and quality at a fair price.</p>
          <p><strong>Visuals:</strong> Balanced layouts, standard serif/sans-serif fonts, safe colours (Blue/Green).</p>
          <p><em>Example: Ford, Marks & Spencer.</em></p>
        </div>
        <div class="card">
          <h3>High-end (Luxury)</h3>
          <p><strong>Focus:</strong> Exclusivity and status.</p>
          <p><strong>Visuals:</strong> Minimalist, black and white or metallics (Gold/Silver), extensive white space, elegant script or serif fonts.</p>
          <p><em>Example: Gucci, Rolls Royce.</em></p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Fitness for Purpose</h2>
      <p>If the perception created by the visual identity does not match the desired brand identity, the design has failed.</p>
      <ul>
        <li><strong>Scenario:</strong> A budget burger van uses a gold, minimalist logo with elegant script font.</li>
        <li><strong>Result:</strong> Customers drive past because they assume it is too expensive. The visual identity is <strong>not fit for purpose</strong>.</li>
        <li><strong>Success:</strong> A visual identity is successful when it attracts the specific target audience the business wants.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Brand Positioning:</strong> The place a brand occupies in the minds of the customers and how it is distinguished from the products of competitors.</p>
        </div>
        <div class="card">
          <p><strong>Brand Identity:</strong> How a business wants to be perceived by consumers.</p>
        </div>
        <div class="card">
          <p><strong>Target Audience:</strong> A particular group at which a product or service is aimed.</p>
        </div>
      </div>
    </div>
  `,

  r094_ta2: `
    <h1>R094 Topic Area 2: Plan digital graphics</h1>
    <div class="card-grid">
      <div class="card">
        <div class="card-image">Conventions</div>
        <div class="card-info">
          <h3>2.1 Graphic design and conventions</h3>
          <p>Understanding layouts, composition, and the standard rules of professional graphic design.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Assets</div>
        <div class="card-info">
          <h3>2.2 Properties and Assets</h3>
          <p>Technical properties of graphics (pixels, DPI) and sourcing high-quality assets for projects.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Planning</div>
        <div class="card-info">
          <h3>2.3 Planning Techniques</h3>
          <p>Using visualization diagrams and assets logs to map out digital graphic designs.</p>
        </div>
      </div>
    </div>
  `,

  r094_ta3: `
    <h1>R094 Topic Area 3: Create digital graphics</h1>
    <div class="card-grid">
      <div class="card">
        <div class="card-image">Software Tools</div>
        <div class="card-info">
          <h3>3.1 Editing Software</h3>
          <p>Mastering tools and techniques within image editing software to create and manipulate graphics.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Technical Skills</div>
        <div class="card-info">
          <h3>3.2 Sourcing & Preparing</h3>
          <p>Technical skills to create and prepare assets for professional use.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Exporting</div>
        <div class="card-info">
          <h3>3.3 Saving and Exporting</h3>
          <p>Optimizing file formats and export settings for the final delivery of graphics.</p>
        </div>
      </div>
    </div>
  `,

  r094_criteria: `
    <h1>R094 Marking Criteria</h1>
    <p>Use these Mark Bands (MB) to assess your progress against the OCR requirements.</p>
    
    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0; font-size: 1.2rem;">Unit R094 – Topic Area 1: Develop visual identity</h2>
      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–2 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 3–4 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 5–6 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Design concept for the visual identity is limited in its suitability for the client.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Design concept for the visual identity is adequate in its suitability for the client.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Design concept for the visual identity is fully suitable for the client.</td>
        </tr>
      </table>

      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–3 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 4–6 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 7–8 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Justification shows limited understanding of the extent to which the visual identity is fit for purpose.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Justification shows sound understanding of the extent to which the visual identity is fit for purpose.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Justification shows comprehensive understanding of the extent to which the visual identity is fit for purpose.</td>
        </tr>
      </table>

      <h2 class="section-title" style="font-size: 1.2rem;">Unit R094 – Topic Area 2: Plan digital graphics for products</h2>
      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–2 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 3–4 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 5–6 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Produces basic planning documentation for the digital graphic product.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Produces adequate planning documentation for the digital graphic product.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Produces detailed planning documentation for the digital graphic product.</td>
        </tr>
      </table>

      <h2 class="section-title" style="font-size: 1.2rem;">Unit R094 – Topic Area 3: Create visual identity and digital graphics</h2>
      
      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–2 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 3–4 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 5–6 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Use of technical skills to create the visual identity is limited in its effectiveness. <br><br> Properties and format(s) of the visual identity are limited in appropriateness.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Use of technical skills to create the visual identity is adequate in its effectiveness. <br><br> Properties and format(s) of the visual identity are adequate in appropriateness.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Use of technical skills to create the visual identity is effective. <br><br> Properties and format(s) of the visual identity are clearly appropriate.</td>
        </tr>
      </table>

      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–2 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 3–4 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 5–6 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Few assets are prepared for use in the digital graphic. <br><br> Use of technical skills to prepare assets is limited in its effectiveness.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Some assets are prepared for use in the digital graphic. <br><br> Use of technical skills to prepare assets is partly effective.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">All assets are prepared for use in the digital graphic. <br><br> Use of technical skills to prepare assets is effective.</td>
        </tr>
      </table>

      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–4 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 5–8 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 9–12 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Use of tools and techniques to create the digital graphic products is limited in its effectiveness. <br><br> Design concepts and layout conventions are applied in a limited way. <br><br> The final digital graphic products meet requirements in a limited way.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Use of tools and techniques to create the digital graphic products is partly effective. <br><br> Design concepts and layout conventions are applied adequately. <br><br> The final digital graphic products adequately meet requirements.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Use of tools and techniques to create the digital graphic products is effective. <br><br> Design concepts and layout conventions are applied effectively. <br><br> Final digital graphic products fully meet requirements.</td>
        </tr>
      </table>

      <table style="width:100%; border-collapse: collapse; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–2 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 3–4 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 5–6 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Properties and format(s) of the final digital graphic products are limited in their appropriateness.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Properties and format(s) of the final digital graphic products are adequate in their appropriateness.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Properties and format(s) of the final digital graphic products are clearly appropriate.</td>
        </tr>
      </table>
    </div>
  `,

  // --- UPDATED R096 TOPIC AREA 1 HUB ---
  r096_ta1: `
    <h1>R096 Topic Area 1: Plan animation with audio</h1>
    <p>Planning is the foundation of any successful animation. This topic covers the types of animation, audio properties, required resources, and pre-production techniques.</p>
    
    <div class="card-grid">
      <div class="card" onclick="loadContent('r096_1_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Conventions</div>
        <div class="card-info">
          <h3>1.1 Features and Conventions</h3>
          <p>Types of animation (CGI, Stop motion), audio properties (Diegetic/Non-diegetic), and how they are used for storytelling.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_1_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Resources</div>
        <div class="card-info">
          <h3>1.2 Required Resources</h3>
          <p>Hardware (Cameras, Microphones) and Software tools needed for creating animation and capturing audio.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_1_3')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Planning</div>
        <div class="card-info">
          <h3>1.3 Pre-production Techniques</h3>
          <p>Creating Storyboards, Scripts, Timelines, and Graphic Scores to plan the integration of visuals and sound.</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW CONTENT: 1.1 Features and Conventions ---
  r096_1_1: `
    <h1>1.1 Features and Conventions</h1>
    <p>Understanding the methods of animation, the technical properties of audio, and how conventions are used to communicate with an audience.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Types and Methods of Animation</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Physical Methods</h3>
          <ul>
            <li><strong>Stop Motion / Claymation:</strong> Physically moving objects (clay/models) in small increments between photos. Used for unique, tactile aesthetics (e.g., Aardman).</li>
            <li><strong>Cut Out:</strong> Using flat characters/props cut from paper or card.</li>
            <li><strong>Flipbook:</strong> Physical pages turned rapidly to simulate motion.</li>
            <li><strong>Time-lapse:</strong> Capturing frames at long intervals to speed up time (e.g., a flower opening).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Digital Methods</h3>
          <ul>
            <li><strong>CGI (Computer Generated Imagery):</strong> 3D modelling and rigging created digitally. Used for high-end films and games.</li>
            <li><strong>Cel Animation:</strong> Traditional hand-drawn frames on transparent sheets.</li>
            <li><strong>Motion Capture:</strong> Recording real human movement to animate a digital character (e.g., FIFA games or Gollum).</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Audio Properties</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Types of Audio</h3>
          <ul>
            <li><strong>Diegetic:</strong> Sound visible on screen (dialogue, footsteps).</li>
            <li><strong>Non-Diegetic:</strong> Sound outside the world (narrator, soundtrack).</li>
            <li><strong>Foley/SFX:</strong> Sounds added in post-production to enhance realism (e.g., punches, rain).</li>
            <li><strong>Dialogue/Voiceover:</strong> Spoken words to convey plot or information.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Digital Properties</h3>
          <ul>
            <li><strong>Sample Rate:</strong> Samples per second. Higher = clearer sound.</li>
            <li><strong>Bit Depth:</strong> Detail in each sample. Higher = better dynamic range.</li>
            <li><strong>Gain:</strong> The volume/loudness of the signal.</li>
            <li><strong>Mono vs Stereo:</strong> One channel (flat) vs Two channels (spatial width).</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Purpose and Conventions</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Storytelling Conventions</h3>
          <p>Uses a <strong>Three-Part Structure</strong> (Beginning, Middle, End). Uses camera angles (e.g., Low angle for power) and shot types (Close-up for emotion) to convey meaning.</p>
        </div>
        <div class="card">
          <h3>Advertising Conventions</h3>
          <p>Designed to persuade. Uses a <strong>'Hook'</strong> (grab attention), a <strong>Slogan</strong> (brand recognition), and a <strong>'Sting'</strong> (short musical impact sound) to be memorable.</p>
        </div>
        <div class="card">
          <h3>Audio Conventions</h3>
          <p><strong>Mood:</strong> Tempo and instrumentation set the emotion.</p>
          <p><strong>Character:</strong> Voice pace, timbre, and accent define character tropes (e.g., a villain having a deep, slow voice).</p>
          <p><strong>Sync:</strong> Audio must match visuals perfectly (lip-sync).</p>
        </div>
        <div class="card">
          <h3>Creativity</h3>
          <p><strong>Originality:</strong> Creating something entirely new.</p>
          <p><strong>Derivative:</strong> Adapting existing ideas. Creative work often balances conventions (what audiences expect) with shock tactics or humour to stand out.</p>
        </div>
      </div>
    </div>

  `,

  // --- NEW CONTENT: 1.2 Resources ---
  r096_1_2: `
    <h1>1.2 Resources for Animation & Audio</h1>
    <p>Selecting the right hardware and software is critical. The choice impacts the quality, style, and workflow of the final product.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Animation Hardware</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Capture Hardware</h3>
          <ul>
            <li><strong>Cameras:</strong> High-resolution DSLRs are preferred for Stop Motion to avoid graininess.</li>
            <li><strong>Scanners:</strong> Essential for digitising hand-drawn Cel animation frames.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Support Hardware</h3>
          <ul>
            <li><strong>Tripods:</strong> Absolutely vital for Stop Motion to ensure the camera does not move between frames (continuity).</li>
            <li><strong>Rigging:</strong> Metal skeletons or stands used to hold characters in impossible poses (flying/jumping). These must be removed digitally later.</li>
            <li><strong>Sets/Materials:</strong> Clay, plasticine, lights, and green screens.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Audio Hardware</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Microphones</h3>
          <p><strong>USB Mics:</strong> Convenient but can suffer from <strong>'Lag' (Latency)</strong>, causing sync issues.</p>
          <p><strong>XLR Mics:</strong> Professional standard. Require an interface but provide cleaner, noise-free audio.</p>
        </div>
        <div class="card">
          <h3>Recording Devices</h3>
          <p>Portable recorders (like Zoom) are used to capture <strong>Foley</strong> and real-world sounds away from the computer.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Software Impact</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Animation Software</h3>
          <p><strong>2D (Adobe Animate):</strong> Good for vector cartoons.</p>
          <p><strong>3D (Maya/Blender):</strong> Required for CGI. Complex tools but high visual fidelity.</p>
          <p><strong>Impact:</strong> Software choice dictates the visual style. You cannot make a realistic 3D movie in 2D software.</p>
        </div>
        <div class="card">
          <h3>Audio Capture Software</h3>
          <p><strong>DAWs (Audacity/Audition):</strong> Used to record, cut, and mix audio.</p>
          <p><strong>Impact:</strong> Allows for multi-track editing (layering voiceover over music) and applying effects like reverb.</p>
        </div>
      </div>
    </div>

  `,

  // --- NEW CONTENT: 1.3 Planning ---
  r096_1_3: `
    <h1>1.3 Pre-production Techniques</h1>
    <p>Planning for animation requires specific documents to ensure visuals and audio are perfectly integrated and synchronised.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Planning Documentation</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Storyboards</h3>
          <p>A visual plan of every shot. Must include:</p>
          <ul>
            <li>Sketches of the action.</li>
            <li>Camera angles and movement (Zoom/Pan).</li>
            <li>Timings for each scene.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Scripts</h3>
          <p>The written blueprint. Includes:</p>
          <ul>
            <li><strong>Dialogue:</strong> What characters say.</li>
            <li><strong>Action:</strong> Visual descriptions of movement.</li>
            <li><strong>Sluglines:</strong> Scene headings (e.g., INT. HOUSE - DAY).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Timelines (Dope Sheets)</h3>
          <p>A technical chart showing frame-by-frame timing.</p>
          <p><strong>Purpose:</strong> Crucial for <strong>Lip-Syncing</strong>. It tells the animator exactly which mouth shape to draw at frame 24 to match the audio sound "O".</p>
        </div>
        <div class="card">
          <h3>Graphic Scores</h3>
          <p>A visual representation of audio intensity over time.</p>
          <p><strong>Purpose:</strong> Instead of musical notes, it uses shapes/lines to show when sound effects get louder (crescendo) or where a 'sting' hits.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Planning for Style & Integration</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Audio/Visual Integration</h3>
          <p>Planning how they work together. Example: The music tempo increases as the character starts running faster.</p>
        </div>
        <div class="card">
          <h3>Audio Dominance (Ducking)</h3>
          <p>Planning volume levels. If a voiceover starts, the background music must be lowered (ducked) so the speech is audible.</p>
        </div>
        <div class="card">
          <h3>Target Audience Engagement</h3>
          <p>Choosing a style that fits. Toddlers need bright colours and simple sounds. Horror fans need dark lighting and tense, dissonant graphic scores.</p>
        </div>
      </div>
    </div>

  `,

  // --- UPDATED R096 TOPIC AREA 2 HUB ---
  r096_ta2: `
    <h1>R096 Topic Area 2: Create animation with audio</h1>
    <p>This section covers the practical skills required to create assets, animate movement, mix audio, and export the final product.</p>
    
    <div class="card-grid">
      <div class="card" onclick="loadContent('r096_2_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Assets</div>
        <div class="card-info">
          <h3>2.1 Creating Assets</h3>
          <p>Techniques for creating and editing both visual (digital/physical) and audio assets.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_2_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Techniques</div>
        <div class="card-info">
          <h3>2.2 Animation & Integration</h3>
          <p>Keyframing, tweening, audio mixing, and synchronising sound with visuals.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_2_3')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Exporting</div>
        <div class="card-info">
          <h3>2.3 Save and Export</h3>
          <p>Understanding native files vs export formats for digital distribution.</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW CONTENT: 2.1 Visual & Audio Assets ---
  r096_2_1: `
    <h1>2.1 Visual and Audio Animation Assets</h1>
    <p>Before animation begins, the individual components (assets) must be created, recorded, or sourced.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Visual Animation Assets</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Digital Creation</h3>
          <p>Using image editing or animation software to draw characters and backgrounds.</p>
          <ul>
            <li><strong>Grouping:</strong> Grouping elements together (e.g., an arm) or breaking them apart to allow for movement.</li>
            <li><strong>Libraries:</strong> Organising assets into named folders or software libraries for easy access.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Physical Creation (Stop Motion)</h3>
          <p>Creating models or sets ready for photography.</p>
          <ul>
            <li><strong>Lighting:</strong> Using external lights or flash to ensure objects are effectively lit.</li>
            <li><strong>Continuity:</strong> Using a tripod and floor marks to set a fixed camera viewpoint that doesn't shake.</li>
            <li><strong>Digitising:</strong> Using scanners or cameras to capture hand-drawn or clay assets at the correct resolution.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Audio Animation Assets</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Sourcing Audio</h3>
          <p><strong>Recording:</strong> Capturing live sound while minimising extraneous (unwanted) background noise.</p>
          <p><strong>Libraries:</strong> Identifying and selecting pre-made music and SFX from stock libraries.</p>
        </div>
        <div class="card">
          <h3>Editing Audio Assets</h3>
          <p>Using audio software to prepare sounds before importing them into the animation.</p>
          <ul>
            <li><strong>Trim/Cut:</strong> Removing silence or mistakes.</li>
            <li><strong>Enhance:</strong> Using Gain (volume), Equalisation (EQ), and Pitch shifts.</li>
            <li><strong>Repair:</strong> Using Noise Removal to clean up recordings.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Asset Management:</strong> The process of naming, organising, and storing files systematically so they can be easily located.</p>
        </div>
        <div class="card">
          <p><strong>Extraneous Noise:</strong> Unwanted background sounds (e.g., traffic, air conditioning) captured during recording.</p>
        </div>
        <div class="card">
          <p><strong>Continuity:</strong> Ensuring consistency in the visual elements (lighting, camera position) from one frame to the next.</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW CONTENT: 2.2 Techniques ---
  r096_2_2: `
    <h1>2.2 Techniques for Animation and Audio</h1>
    <p>This section covers the technical skills required to generate movement, edit soundtracks, and synchronise the two elements.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Animation Creation Techniques</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Movement Tools</h3>
          <ul>
            <li><strong>Keyframes:</strong> Markers on the timeline that define the start and end points of any smooth transition.</li>
            <li><strong>Tweening:</strong> The computer generates the frames <em>between</em> two keyframes (Motion or Shape tweening).</li>
            <li><strong>Rigging:</strong> Adding 'bones' or armatures to a character to allow it to move naturally.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Enhancement Tools</h3>
          <ul>
            <li><strong>Onion Skinning:</strong> Seeing faint ghost images of the previous and next frames to help guide hand-drawn movement.</li>
            <li><strong>Layering:</strong> Separating background, character, and foreground elements onto different layers to edit them independently.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Audio Editing & Mixing</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Combining Sounds</h3>
          <p>Using multiple tracks to layer dialogue, sound effects, and music. Techniques include <strong>Looping</strong> short clips and <strong>Generating Silence</strong> to create pauses.</p>
        </div>
        <div class="card">
          <h3>Mixing Techniques</h3>
          <p><strong>Ducking:</strong> Lowering the volume of background music automatically when a voiceover speaks.</p>
          <p><strong>Balance:</strong> Adjusting the volume of different tracks so the most important audio is heard clearly.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Integration & Synchronisation</h2>
      <p>Combining the visuals and audio into a final product.</p>
      <ul>
        <li><strong>Importing:</strong> Inserting audio into the animation software on its own layer.</li>
        <li><strong>Synchronisation:</strong> Using <strong>Time Shift</strong> or splitting clips to ensure a sound happens exactly when the visual action occurs (e.g., a door slam).</li>
        <li><strong>Workflow:</strong> You can sync visuals to a finished soundtrack (like a music video) OR sync separate sound effects to finished visuals.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Tweening:</strong> Short for 'in-betweening'. The process of generating intermediate frames between two images to give the appearance of smooth motion.</p>
        </div>
        <div class="card">
          <p><strong>Onion Skinning:</strong> A 2D computer graphics term for a technique used in creating animated cartoons and editing movies to see several frames at once.</p>
        </div>
        <div class="card">
          <p><strong>Ducking:</strong> An audio effect where the level of one signal is reduced by the presence of another signal.</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW CONTENT: 2.3 Save and Export ---
  r096_2_3: `
    <h1>2.3 Saving and Exporting</h1>
    <p>Understanding the difference between working files (Native) and final delivery files (Export) is crucial for asset management and distribution.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Native File Formats</h2>
      <p><strong>Definition:</strong> The default file format of the software you are using (e.g., .FLA for Animate, .MB for Maya).</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Why use them?</h3>
          <ul>
            <li><strong>Editability:</strong> They keep all layers, timelines, and uncompressed data intact.</li>
            <li><strong>Version Control:</strong> Essential for saving backups ("Project_v1", "Project_v2") in case of corruption.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Export Formats (Distribution)</h2>
      <p><strong>Definition:</strong> Converting the native file into a standard format that can be viewed by anyone.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>For Animation (Video)</h3>
          <p>Exporting to formats compatible with smartphones, tablets, and streaming sites (YouTube/Vimeo).</p>
          <p><strong>Common Formats:</strong> MP4 (H.264), MOV.</p>
        </div>
        <div class="card">
          <h3>For Audio Assets</h3>
          <p>Exporting audio to be used <em>inside</em> the animation software.</p>
          <p><strong>Considerations:</strong> Choosing the right Codec, Bit Rate, and compression to balance quality with file size.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Native File Format:</strong> A file format that is unique to a specific piece of software and usually cannot be opened by other programs.</p>
        </div>
        <div class="card">
          <p><strong>Codec:</strong> (Coder-Decoder) Software used to compress or decompress digital media files.</p>
        </div>
        <div class="card">
          <p><strong>Optimisation:</strong> The process of reducing the file size of a media product without compromising its quality significantly.</p>
        </div>
      </div>
    </div>
  `,

  r096_ta3: `
    <h1>R096 Topic Area 3: Review animation with audio</h1>
    <div class="card-grid">
      <div class="card">
        <div class="card-image">Testing</div>
        <div class="card-info">
          <h3>3.1 Testing and Review</h3>
          <p>Techniques to check for frame rate consistency, audio sync issues, and meeting the original brief.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Development</div>
        <div class="card-info">
          <h3>3.2 Improvements</h3>
          <p>Identifying further developments and refining the animation based on feedback and testing results.</p>
        </div>
      </div>
    </div>
  `,

  resources: `
    <h1>Resources</h1>
    <p>Access study materials, past papers, and external tools.</p>
    
    <div class="card-grid">
      <div class="card">
        <h3>Seneca Learning</h3>
        <p>Interactive quizzes for R093 exam revision.</p>
      </div>

      <div class="card" onclick="loadContent('r094_guidance')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <h3>R094 Assessment Guidance</h3>
        <p>Step-by-step instructions on how to complete your Coursework/NEA to reach Mark Band 3.</p>
      </div>

      <div class="card" onclick="loadContent('r096_guidance')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <h3>R096 Assessment Guidance</h3>
        <p>Full OCR strand guidance for creating animation with audio and reaching MB3.</p>
      </div>

      <div class="card" onclick="window.open('https://mrowoyemi.github.io/iMediaTrainer/', '_blank')" style="cursor: pointer; border-left: 5px solid #28a745;">
        <div class="card-image" style="background: #28a745; color: white;">Trainer</div>
        <div class="card-info">
          <h3>iMedia Trainer</h3>
          <p>External revision tool with quizzes and knowledge organizers.</p>
        </div>
      </div>
    </div>

  `,

  // --- NEW PAGE: R094 TASK 1 ---
  // --- R094 TASK 1 (Updated Checklist) ---
  r094_task_1: `
    <div class="checklist-btn" onclick="toggleModal('task1-modal')" title="Open Checklist">
      ✓
    </div>
    <h1>R094 Task 1: Develop Visual Identity & Planning</h1>
    <p>In this task, you will design the visual identity for the client and plan your digital graphic...</p>

    <div id="task1-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 style="margin:0; color:white;">Task 1 Checklist</h2>
          <span class="close-modal" onclick="toggleModal('task1-modal')" style="cursor:pointer;">&times;</span>
        </div>
        <div class="checklist-items" style="padding: 20px; max-height: 60vh; overflow-y: auto;">
          <div class="check-item">
            <input type="checkbox" id="t1_sketches" onchange="saveCheck(this)">
            <label for="t1_sketches"><strong>Sketches:</strong> I have created a minimum of 4 initial logo sketches.</label>
          </div>
          
          <div class="check-item">
            <input type="checkbox" id="t1_logo" onchange="saveCheck(this)">
            <label for="t1_logo"><strong>Final Logo:</strong> I have developed a unique final logo (Brand mark/Logotype).</label>
          </div>
          
          <div class="check-item">
            <input type="checkbox" id="t1_col" onchange="saveCheck(this)">
            <label for="t1_col"><strong>Colours:</strong> I have specified exact Hex or CMYK codes.</label>
          </div>
          <div class="check-item">
            <input type="checkbox" id="t1_font" onchange="saveCheck(this)">
            <label for="t1_font"><strong>Fonts:</strong> I have chosen specific fonts for headings & body.</label>
          </div>
          <div class="check-item">
            <input type="checkbox" id="t1_just_client" onchange="saveCheck(this)">
            <label for="t1_just_client"><strong>Justification:</strong> Explained link to Client Brief.</label>
          </div>
          <div class="check-item">
            <input type="checkbox" id="t1_just_aud" onchange="saveCheck(this)">
            <label for="t1_just_aud"><strong>Justification:</strong> Explained link to Target Audience.</label>
          </div>
          
          <div class="check-item">
            <input type="checkbox" id="t1_compare" onchange="saveCheck(this)">
            <label for="t1_compare"><strong>Comparison:</strong> Explained why I chose this design over my other sketches.</label>
          </div>
          
          <div class="check-item">
            <input type="checkbox" id="t1_vis" onchange="saveCheck(this)">
            <label for="t1_vis"><strong>Visualisation:</strong> Sketch includes dimensions & annotations.</label>
          </div>
          <div class="check-item">
            <input type="checkbox" id="t1_assets" onchange="saveCheck(this)">
            <label for="t1_assets"><strong>Asset Table:</strong> Listed sources, properties & permissions.</label>
          </div>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Strand 1a: Visual Identity Design</h2>
      <p><strong>Goal:</strong> Create a logo and visual style for the client.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Component Check</h3>
          <p>Does your identity include:</p>
          <ul>
            <li><strong>Minimum 4 Sketches</strong> of different ideas?</li>
            <li>A <strong>Final Logo</strong> (Brand Mark, Logotype, or Combination)?</li>
            <li>A specified <strong>Colour Palette</strong> (Hex codes/CMYK)?</li>
            <li><strong>Typography</strong> choices?</li>
          </ul>
        </div>
        <div class="card">
          <h3>Suitability & Originality</h3>
          <ul>
            <li><strong>Suitability:</strong> Does the design style match the business type? (e.g., serious/corporate vs playful/youth).</li>
            <li><strong>Originality:</strong> Is the design concept your own original work and NOT a pre-made template?</li>
          </ul>
        </div>
      </div>
      <p style="margin-top: 10px; font-style: italic;"><strong>Mark Band 3 Tip:</strong> Ensure your design concept is fully suitable for the client and target audience.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Strand 1b: Justification</h2>
      <p><strong>Goal:</strong> Explain <em>why</em> you made your design choices.</p>
      
      <h3>The "Why" Test</h3>
      <p>Don't just describe what you did ("I chose blue"). Explain <strong>why</strong> you did it.</p>

      <div class="card-grid">
        <div class="card">
          <h3>Client Link</h3>
          <p>Link your choices to the <strong>Client Requirements</strong>.</p>
          <p><em>Example: "I chose green because the client explicitly stated they value sustainability."</em></p>
        </div>
        <div class="card">
          <h3>Audience Link</h3>
          <p>Link your choices to the <strong>Target Audience</strong>.</p>
          <p><em>Example: "I used a sans-serif font because it is modern and appeals to the younger demographic."</em></p>
        </div>
        <div class="card">
          <h3>Comparison</h3>
          <p><strong>Crucial for High Marks:</strong> You must explain why you picked your Final Logo instead of your other 3 sketches. What made it better?</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Strand 1c: Planning & Assets</h2>
      <p><strong>Goal:</strong> Plan the final graphic before you make it.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>1. Visualisation Diagram</h3>
          <p><strong>Clarity:</strong> Can another designer create the graphic just from your sketch?</p>
          <p><strong>Annotations</strong> must explain:</p>
          <ul>
            <li>Dimensions & Layout</li>
            <li>Specific Colours & Fonts</li>
            <li>Text Content</li>
          </ul>
        </div>
        <div class="card">
          <h3>2. Asset Table</h3>
          <p><strong>Completeness:</strong> List <em>every</em> image, font, and graphic you plan to use.</p>
          <p><strong>Details required:</strong></p>
          <ul>
            <li><strong>Source:</strong> URL or "Self-created".</li>
            <li><strong>Properties:</strong> Pixel dimensions, file type.</li>
            <li><strong>Legal Status:</strong> Copyright check (e.g. Royalty Free).</li>
          </ul>
        </div>
      </div>
    </div>
    
  `,

  // --- R094 TASK 2 (With Checklist) ---
  r094_task_2: `
    <div class="checklist-btn" onclick="toggleModal('task2-modal')" title="Open Checklist">
      ✓
    </div>
    <h1>R094 Task 2: Create Visual Identity & Digital Graphic</h1>
    <p>In this task, you will create your final graphic using software. Use this checklist to ensure you capture all the evidence required for Mark Band 3.</p>

    <div id="task2-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 style="margin:0; color:white;">Task 2 Checklist</h2>
          <span class="close-modal" onclick="toggleModal('task2-modal')" style="cursor:pointer; font-size:1.5rem;">&times;</span>
        </div>
        <div class="checklist-items">
          <div class="check-item">
            <input type="checkbox" id="t2_prep" onchange="saveCheck(this)">
            <label for="t2_prep"><strong>Asset Prep:</strong> Screenshots of editing images <em>separately</em>.</label>
          </div>
          <div class="check-item">
            <input type="checkbox" id="t2_res" onchange="saveCheck(this)">
            <label for="t2_res"><strong>Resolution:</strong> Assets are high quality (not pixelated).</label>
          </div>
          <div class="check-item">
            <input type="checkbox" id="t2_layers" onchange="saveCheck(this)">
            <label for="t2_layers"><strong>Skills:</strong> Used Layers, Masks, or Adjustment Layers.</label>
          </div>
          <div class="check-item">
            <input type="checkbox" id="t2_evid" onchange="saveCheck(this)">
            <label for="t2_evid"><strong>Evidence:</strong> I have a screenshot of my Layers Panel.</label>
          </div>
          <div class="check-item">
            <input type="checkbox" id="t2_syn" onchange="saveCheck(this)">
            <label for="t2_syn"><strong>Consistency:</strong> Used exact fonts & colours from Task 1.</label>
          </div>
          <div class="check-item">
            <input type="checkbox" id="t2_exp1" onchange="saveCheck(this)">
            <label for="t2_exp1"><strong>Export 1:</strong> High Quality (PDF/TIFF) @ 300 DPI.</label>
          </div>
          <div class="check-item">
            <input type="checkbox" id="t2_exp2" onchange="saveCheck(this)">
            <label for="t2_exp2"><strong>Export 2:</strong> Compressed (JPG/PNG) @ 72 DPI.</label>
          </div>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Strand 2b: Preparation of Assets</h2>
      
      <div style="background: #ffebee; border-left: 5px solid #f44336; padding: 15px; margin-bottom: 20px;">
        <h3 style="margin: 0; color: #d32f2f;">⚠️ CRITICAL EVIDENCE: SCREENSHOTS</h3>
        <p style="margin: 10px 0 0;"><strong>The examiner cannot award marks for what they cannot see.</strong></p>
        <p>You <strong>MUST</strong> take screenshots of yourself editing these assets <em>separately</em> (before they go into your final design). A "before and after" image is not enough—you need to show the <strong>tools</strong> you used in the software.</p>
      </div>

      <p><strong>Goal:</strong> Get your images ready <em>before</em> putting them in the final design.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Evidence Checklist</h3>
          <p>Do you have screenshots showing the <strong>tool interface</strong> while:</p>
          <ul>
            <li>Removing backgrounds (e.g. Magic Wand)?</li>
            <li>Resizing / Cropping?</li>
            <li>Colour Correction / Filters?</li>
          </ul>
        </div>
        <div class="card">
          <h3>Quality Check</h3>
          <p>Are the assets high resolution? They must not look pixelated or blurry when placed in the final design.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Strand 2a & 2c: Creation & Techniques</h2>
      
      <div style="background: #e3f2fd; border-left: 5px solid #2196f3; padding: 15px; margin-bottom: 20px;">
        <h3 style="margin: 0; color: #0d47a1;">📸 EVIDENCE ALERT: LAYERS PANEL</h3>
        <p style="margin: 10px 0 0;">The final graphic is just a flat image. It does not prove <em>how</em> you made it.</p>
        <p>To get marks for technical skills, you <strong>must screenshot your workspace</strong> showing the <strong>Layers Panel</strong>. This proves you used layers, masks, and non-destructive editing.</p>
      </div>

      <p><strong>Goal:</strong> Build the graphic using professional tools and techniques.</p>
      
      <div class="card-grid">
        <div class="card">
          <h3>Technical Skills</h3>
          <ul>
            <li><strong>Software:</strong> Use Photoshop, Illustrator, or Canva (Not Word!).</li>
            <li><strong>Layers:</strong> Show that your work is organised (not just one layer!).</li>
            <li><strong>Tools:</strong> Show screenshots of using Masks, Adjustment Layers, and Guides.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Visual Identity Check</h3>
          <ul>
            <li><strong>Consistency:</strong> Did you use the <strong>exact</strong> colours and fonts from Task 1?</li>
            <li><strong>Layout:</strong> Is the text readable? Is the logo proportional?</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Strand 2d: Saving and Exporting</h2>
      <p><strong>Goal:</strong> Save the file in the correct formats for the client.</p>
      
      <h3>You need TWO versions:</h3>
      <div class="card-grid">
        <div class="card">
          <h3>1. High Quality (Print)</h3>
          <p><strong>Format:</strong> PDF, TIFF, or High-Res JPEG.</p>
          <p><strong>Properties:</strong> 300 DPI (High Resolution).</p>
        </div>
        <div class="card">
          <h3>2. Compressed (Web)</h3>
          <p><strong>Format:</strong> PNG or Standard JPEG.</p>
          <p><strong>Properties:</strong> 72 DPI or 96 DPI (Low/Screen Resolution).</p>
        </div>
      </div>
      <p style="margin-top: 10px; font-style: italic;"><strong>Mark Band 3 Tip:</strong> If one format is wrong (e.g., sending a low-res file for print), your marks are capped.</p>
    </div>
    
  `,

  r094_guidance: `
    <h1>R094 Assessment Guidance</h1>
    <p>Official OCR guidance for achieving high marks in your NEA (Non-Exam Assessment).</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Task 1: Develop Visual Identity & Planning</h2>
      
      <h3>Strand 1a: Visual Identity Design</h3>
      <ul>
        <li><strong>MB1:</strong> A simple logo can be credited here.</li>
        <li><strong>MB3:</strong> Requires a complex visual identity with suitable component features. It must be clearly appropriate for the target audience and the nature of the client's service. The final concept must be clearly shown.</li>
      </ul>

      <h3>Strand 1b: Justification</h3>
      <ul>
        <li><strong>Requirements:</strong> This task is analytical and evaluative. You must justify "how" and "why" your design is fit for purpose.</li>
        <li><strong>MB3:</strong> Your justification must cover both the client requirements and the target audience/consumer. Decisions must be made independently.</li>
      </ul>

      <h3>Strand 1c: Planning & Assets</h3>
      <ul>
        <li><strong>Evidence:</strong> You need two main items: a layout diagram showing what the graphic will look like, and a detailed asset log.</li>
        <li><strong>MB3:</strong> The layout must be clear and detailed enough for a professional designer to use. The asset log must include comprehensive details, including permissions.</li>
      </ul>

      <hr style="margin: 25px 0; border: 0; border-top: 1px solid #eee;">

      <h2 class="section-title">Task 2: Create Visual Identity & Digital Graphic</h2>

      <h3>Strand 2a: Creation & File Formats</h3>
      <ul>
        <li><strong>Technical Skills:</strong> Assessment is based on precision, accuracy, and overall effectiveness.</li>
        <li><strong>MB3:</strong> Both the image properties (resolution) and the file format must be suitable for further use in professional products.</li>
      </ul>

      <h3>Strand 2b: Preparation of Assets</h3>
      <ul>
        <li><strong>Evidence:</strong> This must be evidenced as a preliminary activity *before* creating the final graphic.</li>
        <li><strong>MB3:</strong> All assets must be prepared at a suitable resolution. You must explicitly show technical compatibility (dimensions, resolution, and format).</li>
      </ul>

      <h3>Strand 2c: Tools, Techniques & Layout</h3>
      <ul>
        <li><strong>Software:</strong> Effectiveness of tool use is assessed here. Using Microsoft Office may constrain you to MB1 as it lacks professional editing tools.</li>
        <li><strong>Look & Feel:</strong> For MB3, you must effectively apply design concepts and layout conventions to make the product visually appealing and engaging.</li>
        <li><strong>Synergy:</strong> There must be a clear connection between the client's wants, the style of the visual identity, and the final layout.</li>
      </ul>

      <h3>Strand 2d: Saving and Exporting</h3>
      <ul>
        <li><strong>Requirements:</strong> You must save the final graphic in two different formats as required by the scenario.</li>
        <li><strong>MB3:</strong> Both versions must have the correct properties and formats. If one is clearly inappropriate, you are limited to MB2 at best.</li>
      </ul>
    </div>
    
  `,

  r096_criteria: `
    <h1>R096 Marking Criteria</h1>
    <p>Use these Mark Bands (MB) to assess your progress for the Animation with Audio unit.</p>
    
    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0; font-size: 1.2rem;">Unit R096 – Topic Area 1: Plan animation with audio</h2>
      
      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–2 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 3–4 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 5–6 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Produces a basic interpretation of the client brief. <br><br> Explanation of product meeting brief and target audience appeal is limited.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Produces an adequate interpretation of the client brief. <br><br> Explanation of product meeting brief and target audience appeal is sound.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Produces an effective interpretation of the client brief. <br><br> Explanation of product meeting brief and target audience appeal is comprehensive.</td>
        </tr>
      </table>

      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–3 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 4–6 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 7–8 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Produces basic pre-production/planning documentation. <br><br> Documentation supports creation of few elements.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Produces adequate pre-production/planning documentation. <br><br> Documentation supports creation of some elements.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Produces detailed pre-production/planning documentation. <br><br> Documentation supports creation of all elements.</td>
        </tr>
      </table>

      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–2 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 3–4 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 5–6 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Demonstrates limited understanding of how assets contribute to effectiveness.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Demonstrates sound understanding of how assets contribute to effectiveness.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Demonstrates comprehensive understanding of how assets contribute to effectiveness.</td>
        </tr>
      </table>

      <h2 class="section-title" style="font-size: 1.2rem;">Unit R096 – Topic Area 2: Create animation with audio</h2>
      
      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–4 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 5–8 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 9–12 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Technical skills for components are limited. Creativity is limited. Components support final product in a limited way.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Technical skills for components are partly effective. Creativity is adequate. Components partly support final product.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Technical skills for components are effective. Creativity is fully fit for purpose. Components fully support final product.</td>
        </tr>
      </table>

      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–5 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 6–10 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 11–14 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Technical skills for final product are limited. Conventions applied in a limited way. Product is limited in fitness for purpose.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Technical skills for final product are partly effective. Conventions adequately applied. Product is adequately fit for purpose.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Technical skills for final product are effective. Conventions effectively applied. Product is fully fit for purpose.</td>
        </tr>
      </table>

      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–3 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 4–6 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 7–8 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Component and final product formats/properties are limited in appropriateness.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Component and final product formats/properties are adequate in appropriateness.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Component and final product formats/properties are clearly appropriate.</td>
        </tr>
      </table>

      <h2 class="section-title" style="font-size: 1.2rem;">Unit R096 – Topic Area 3: Review animation with audio</h2>

      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–3 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 4–7 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 8–10 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Testing is limited in effectiveness. Review shows limited understanding of product effectiveness for audience.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Testing is partly effective. Review shows sound understanding of product effectiveness for audience.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Testing is fully effective. Review shows critical understanding of product effectiveness for audience.</td>
        </tr>
      </table>

      <table style="width:100%; border-collapse: collapse; table-layout: fixed;">
        <tr style="background: var(--dark-purple); color: white;">
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB1: 1–2 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB2: 3–4 marks</th>
          <th style="padding: 12px; border: 1px solid #ddd; width: 33.33%;">MB3: 5–6 marks</th>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Recommendations show limited understanding of areas for improvement and have limited explanation.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Recommendations show sound understanding of areas for improvement and are partly explained.</td>
          <td style="padding: 15px; border: 1px solid #ddd; vertical-align: top;">Recommendations show comprehensive understanding of areas for improvement and are fully explained.</td>
        </tr>
      </table>
    </div>

  `,

  r096_guidance: `
    <h1>R096 Assessment Guidance</h1>
    <p>Official OCR guidance for achieving high marks in your Animation with Audio NEA (Non-Exam Assessment).</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Task 1: Planning Animation with Audio</h2>
      
      <h3>Strand 1a: Interpretation of Brief</h3>
      <ul>
        <li><strong>Requirements:</strong> Move beyond simply restating the client. You must explain "how" and "why" the product appeals to the audience.</li>
        <li><strong>MB3:</strong> Achieved through either depth (explaining a few ways in great detail) or breadth (explaining many ways concisely). Diagrams alone are not enough for high marks; written explanation is required.</li>
      </ul>

      <h3>Strand 1b: Pre-production Documentation</h3>
      <ul>
        <li><strong>Documentation:</strong> Use a variety of planning documents. MB1 might only show a sequence of visuals, but MB3 requires depth in both animation and audio and how they combine.</li>
        <li><strong>Independence:</strong> You must choose your planning tasks independently. Identical work across a class is highly unusual and restricted.</li>
      </ul>

      <h3>Strand 1c: Understanding Assets</h3>
      <ul>
        <li><strong>Requirements:</strong> Do not just list assets (MB1). You must show understanding of technical properties and how the asset style matches the genre and audience (MB3).</li>
      </ul>

      <hr style="margin: 25px 0; border: 0; border-top: 1px solid #eee;">

      <h2 class="section-title">Task 2: Create Animation with Audio</h2>

      <h3>Strand 2a: Component Creation</h3>
      <ul>
        <li><strong>Visual/Audio Skills:</strong> Audio must be clear and in suitable formats. MB3 requires mixing and editing audio using appropriate software.</li>
        <li><strong>Fitness for Purpose:</strong> Components must match the genre set in the brief. Poorly matched genre/style limits you to the lower mark bands.</li>
      </ul>

      <h3>Strand 2b: Final Product & Technical Skills</h3>
      <ul>
        <li><strong>Evidence:</strong> Use screenshots to show your process, especially if tools are not exported. Typographical errors and omissions will keep you out of the upper bands.</li>
        <li><strong>MB3:</strong> Must show both creativity and adherence to conventions. The product must be of suitable length and use all content specified by the client.</li>
      </ul>

      <h3>Strand 2c: Exporting & Appropriateness</h3>
      <ul>
        <li><strong>MB3:</strong> Images and sounds must be saved in appropriate formats to be combined. File naming should be relevant to the client.</li>
        <li><strong>Platform:</strong> Ensure file properties match the output platform specified in the client brief.</li>
      </ul>

      <hr style="margin: 25px 0; border: 0; border-top: 1px solid #eee;">

      <h2 class="section-title">Task 3: Reviewing Animation with Audio</h2>

      <h3>Strand 3a: Testing & Review</h3>
      <ul>
        <li><strong>Technical Testing:</strong> Use a test plan that covers both visuals and audio. MB2/MB3 requires showing results, retests, and how errors were resolved.</li>
        <li><strong>Effectiveness:</strong> You must explain *how* and *why* the final product is effective for the client AND audience. A test plan alone only proves functionality, not effectiveness.</li>
      </ul>

      <h3>Strand 3b: Improvements & Developments</h3>
      <ul>
        <li><strong>MB3:</strong> Recommendations must be fully explained with reference to client requirements and audience engagement. You must consider both visual and audio components.</li>
        <li><strong>Depth:</strong> A few improvements explained in extensive detail can meet MB3 criteria.</li>
      </ul>
    </div>
    
  `,

  r094_skill_photoshop: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #001E36; color: #31A8FF; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Ps</div>
      <div>
        <h1 style="margin: 0;">Adobe Photoshop Skills</h1>
        <p style="margin: 0; color: #666;">Industry standard for raster graphics and photo manipulation.</p>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Why use Photoshop for R094?</h2>
      <p>Photoshop is a <strong>Raster (Bitmap)</strong> editor. It is the best tool for:</p>
      <ul>
        <li><strong>Photo Editing:</strong> Removing backgrounds, adjusting lighting, and retouching images.</li>
        <li><strong>Composite Graphics:</strong> Blending multiple images together (e.g., placing a person into a new environment).</li>
        <li><strong>Digital Effects:</strong> Adding glow, shadows, and textures to text.</li>
      </ul>
      <p><em>Note: It is NOT the best tool for designing logos (use Illustrator/Vector tools), but it is acceptable for R094 if you use high resolution (300 PPI).</em></p>
    </div>

    <h2 class="section-title">Phase 1: The Basics (Setup & Interface)</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Canvas Setup</h3>
        <p><strong>Print (Coursework):</strong> Set Resolution to <strong>300 PPI</strong> and Color Mode to <strong>CMYK</strong>.</p>
        <p><strong>Web (Screens):</strong> Set Resolution to <strong>72 PPI</strong> and Color Mode to <strong>RGB</strong>.</p>
      </div>
      <div class="card">
        <h3>Layers Panel</h3>
        <p>The "Golden Rule": <strong>Always work on a new layer!</strong></p>
        <p>Use the <strong>Eye Icon</strong> to hide layers and the <strong>Lock Icon</strong> to prevent accidental moves.</p>
      </div>
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=unCS9syPJjg', '_blank')" style="cursor: pointer; border-left: 5px solid #31A8FF;">
        <div class="card-info">
          <h3>1. Master Layers - Basics</h3>
          <p><strong>Skill:</strong> Understanding layer stacking, opacity, and smart objects.</p>
          <p style="font-size: 0.9rem; color: #31A8FF;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Phase 2: Essential Tools (Selection & Masking)</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Selection Tools</h3>
        <ul>
          <li><strong>Magic Wand (W):</strong> Selects areas of similar colour (e.g., a white sky).</li>
          <li><strong>Quick Selection (W):</strong> "Paints" a selection over an object. Best for people/objects.</li>
          <li><strong>Polygonal Lasso (L):</strong> Creates straight-edged selections manually.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Refining Edges</h3>
        <p>After selecting, use <strong>Select and Mask</strong> (top toolbar) to smooth edges or fix hair details using the "Refine Edge Brush".</p>
      </div>
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=PeD7uhc8R4U', '_blank')" style="cursor: pointer; border-left: 5px solid #31A8FF;">
        <div class="card-info">
          <h3>2. Selections & Compositing</h3>
          <p><strong>Skill:</strong> Making selections and moving subjects to new backgrounds.</p>
          <p style="font-size: 0.9rem; color: #31A8FF;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Phase 3: Advanced Techniques (Mark Band 3)</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Layer Masks</h3>
        <p><strong>Non-Destructive Editing:</strong> Instead of erasing, use a mask. Painting <strong>Black</strong> hides the image; painting <strong>White</strong> reveals it.</p>
      </div>
      <div class="card">
        <h3>Layer Styles (FX)</h3>
        <p>Double-click a layer to add effects like <strong>Stroke</strong> (outline), <strong>Drop Shadow</strong>, or <strong>Outer Glow</strong>. Essential for making text readable.</p>
      </div>
      <div class="card">
        <h3>Adjustment Layers</h3>
        <p>Use the half-circle icon at the bottom of the layers panel to add <strong>Hue/Saturation</strong> or <strong>Brightness</strong> adjustments that affect all layers below.</p>
      </div>
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=aNpO6G72O3w', '_blank')" style="cursor: pointer; border-left: 5px solid #31A8FF;">
        <div class="card-info">
          <h3>3. Layer Masks Explained</h3>
          <p><strong>Skill:</strong> Using black/white painting to hide and reveal parts of a layer.</p>
          <p style="font-size: 0.9rem; color: #31A8FF;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Project Tutorials</h2>
    <p>Follow these specific tutorials to practice the skills needed for your coursework.</p>
    
    <div class="card-grid">
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=EHDSomSVwB8', '_blank')" style="cursor: pointer; border-left: 5px solid #31A8FF;">
        <div class="card-info">
          <h3>1. The Transparent Logo</h3>
          <p><strong>Skill:</strong> Removing a white background (Magic Wand) and saving as PNG.</p>
          <p style="font-size: 0.9rem; color: #31A8FF;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=1BiA2AXRBYY', '_blank')" style="cursor: pointer; border-left: 5px solid #31A8FF;">
        <div class="card-info">
          <h3>2. The Hybrid Beast</h3>
          <p><strong>Skill:</strong> Blending two animals together using Layer Masks.</p>
          <p style="font-size: 0.9rem; color: #31A8FF;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=qYmLgslxZKE', '_blank')" style="cursor: pointer; border-left: 5px solid #31A8FF;">
        <div class="card-info">
          <h3>3. Neon Glow Text</h3>
          <p><strong>Skill:</strong> Using Layer Styles (Outer Glow, Drop Shadow) for branding.</p>
          <p style="font-size: 0.9rem; color: #31A8FF;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=nDt1xIQSKY4', '_blank')" style="cursor: pointer; border-left: 5px solid #31A8FF;">
        <div class="card-info">
          <h3>4. Magazine Cover Text</h3>
          <p><strong>Skill:</strong> Layer ordering & masking text behind a subject.</p>
          <p style="font-size: 0.9rem; color: #31A8FF;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=VNSe8BglAHs', '_blank')" style="cursor: pointer; border-left: 5px solid #31A8FF;">
        <div class="card-info">
          <h3>5. Advanced Masking</h3>
          <p><strong>Skill:</strong> Refining edges and creating seamless composites.</p>
          <p style="font-size: 0.9rem; color: #31A8FF;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h3>Keyboard Shortcuts Cheat Sheet</h3>
      <ul style="columns: 2; -webkit-columns: 2; -moz-columns: 2;">
        <li><strong>Ctrl + Z:</strong> Undo</li>
        <li><strong>Ctrl + T:</strong> Free Transform (Resize/Rotate)</li>
        <li><strong>Ctrl + J:</strong> Duplicate Layer</li>
        <li><strong>Ctrl + D:</strong> Deselect</li>
        <li><strong>[ and ]:</strong> Resize Brush</li>
        <li><strong>Spacebar:</strong> Hand Tool (Move canvas)</li>
        <li><strong>Ctrl + + / -:</strong> Zoom In / Out</li>
        <li><strong>V:</strong> Move Tool</li>
      </ul>
    </div>

  `,

  // --- CANVA SKILLS PAGE ---
  r094_skill_canva: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: linear-gradient(135deg, #00C4CC, #7D2AE8); color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Ca</div>
      <div>
        <h1 style="margin: 0;">Canva Skills</h1>
        <p style="margin: 0; color: #666;">Web-based design tool for layout, composition, and rapid prototyping.</p>
      </div>
    </div>

    <div class="homework-box" style="border-left: 5px solid #FF5722; background: #FFF3E0;">
      <h3 style="color: #D84315; margin-top: 0;">⚠️ EXAMINER WARNING: Templates</h3>
      <p>For R094, you cannot simply open a template and change the text. You must demonstrate <strong>original design skills</strong>.</p>
      <p><strong>Do:</strong> Use Canva for layout, grids, and combining assets you made elsewhere.</p>
      <p><strong>Don't:</strong> Submit a pre-made template as your own work. This limits your marks for "Technical Skills" to MB1.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Why use Canva for R094?</h2>
      <p>Canva is excellent for <strong>Task 1 (Visual Identity)</strong> and <strong>Task 2 (Digital Graphics)</strong> because it handles layout better than Photoshop.</p>
      <ul>
        <li><strong>Mood Boards:</strong> Quickly arrange images, colours, and fonts using Grids.</li>
        <li><strong>Visualisation Diagrams:</strong> Create clean, professional plans.</li>
        <li><strong>Final Layouts:</strong> Combine your logos (from Illustrator/Photoshop) with text for posters or social media posts.</li>
      </ul>
    </div>

    <h2 class="section-title">Phase 1: Setup & Assets</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Custom Dimensions</h3>
        <p>Never just click "Poster". Always use <strong>Create a Design > Custom Size</strong>.</p>
        <ul>
          <li><strong>A4 Print:</strong> 210 x 297 mm</li>
          <li><strong>Instagram:</strong> 1080 x 1080 px</li>
          <li><strong>Web Banner:</strong> 1350 x 650 px (check brief)</li>
        </ul>
      </div>
      <div class="card">
        <h3>Uploading Assets</h3>
        <p>Bring in your own work! Use the <strong>Uploads</strong> tab to import the logo you made in Photoshop.</p>
        <p><em>Tip: Ensure your uploaded logo has a transparent background (PNG).</em></p>
      </div>
    </div>

    <h2 class="section-title">Phase 2: Layout & Composition</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Grids & Frames</h3>
        <p>Search for <strong>"Frames"</strong> in Elements. Drag an image into a Circle or Phone frame to instantly crop it perfectly.</p>
      </div>
      <div class="card">
        <h3>Positioning</h3>
        <p>Use <strong>Position > Tidy Up</strong> to instantly align multiple items. Use <strong>Layers</strong> to move text in front of images.</p>
      </div>
      <div class="card">
        <h3>Brand Kit (Manual)</h3>
        <p>Don't guess colours! Type your specific <strong>Hex Code</strong> (e.g., #2D033B) into the colour picker to match your client brief exactly.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 3: Text & Typography</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Hierarchy</h3>
        <p>Make sure your <strong>Headline</strong> is the largest text. <strong>Body text</strong> should be smaller and readable.</p>
      </div>
      <div class="card">
        <h3>Text Effects</h3>
        <p>Use <strong>Effects > Lift</strong> to make white text pop off a light background. Use <strong>Curve</strong> for badge-style logos.</p>
      </div>
    </div>

    <h2 class="section-title">Video Tutorials</h2>
    <p>Follow these tutorials to master layout skills for your coursework.</p>
    
    <div class="card-grid">
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=ehz2vZD-lt8', '_blank')" style="cursor: pointer; border-left: 5px solid #00C4CC;">
        <div class="card-info">
          <h3>1. The Perfect Mood Board</h3>
          <p><strong>Skill:</strong> Using Grids to organise images and colour palettes for Task 1.</p>
          <p style="font-size: 0.9rem; color: #00C4CC;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=wrthaLRdw4Y', '_blank')" style="cursor: pointer; border-left: 5px solid #00C4CC;">
        <div class="card-info">
          <h3>2. Flyer Design from Scratch</h3>
          <p><strong>Skill:</strong> Designing with white space and hierarchy (No Templates!).</p>
          <p style="font-size: 0.9rem; color: #00C4CC;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=cwOWNWM3f4A', '_blank')" style="cursor: pointer; border-left: 5px solid #00C4CC;">
        <div class="card-info">
          <h3>3. Creating Smart Mockups</h3>
          <p><strong>Skill:</strong> Placing your flat logo onto a 3D shirt or mug for visualization.</p>
          <p style="font-size: 0.9rem; color: #00C4CC;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=0wFCjiW94u8', '_blank')" style="cursor: pointer; border-left: 5px solid #00C4CC;">
        <div class="card-info">
          <h3>4. Seamless Carousels</h3>
          <p><strong>Skill:</strong> Creating multi-page social media posts that flow together.</p>
          <p style="font-size: 0.9rem; color: #00C4CC;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h3>Keyboard Shortcuts Cheat Sheet</h3>
      <ul style="columns: 2; -webkit-columns: 2; -moz-columns: 2;">
        <li><strong>T:</strong> Add Text</li>
        <li><strong>R:</strong> Add Rectangle</li>
        <li><strong>C:</strong> Add Circle</li>
        <li><strong>L:</strong> Add Line</li>
        <li><strong>Shift + Click:</strong> Select Multiple</li>
        <li><strong>Alt + Drag:</strong> Duplicate Item</li>
        <li><strong>Ctrl + G:</strong> Group Items</li>
        <li><strong>Ctrl + ]:</strong> Bring Forward</li>
      </ul>
    </div>

  `,

  // --- ROCKETCAKE SKILLS PAGE ---
  r094_skill_rocketcake: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #E040FB; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Rc</div>
      <div>
        <h1 style="margin: 0;">RocketCake Skills</h1>
        <p style="margin: 0; color: #666;">WYSIWYG website editor for creating responsive visualisations.</p>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Why use RocketCake for R094?</h2>
      <p>RocketCake writes the HTML code for you (WYSIWYG: What You See Is What You Get). We use it to:</p>
      <ul>
        <li><strong>Visualise Graphics:</strong> Show how your web banner and logo look on a real webpage.</li>
        <li><strong>Demonstrate Responsiveness:</strong> Prove your graphics work on both Mobile and Desktop screens (a key requirement for Mark Band 3).</li>
        <li><strong>Create a Portfolio:</strong> Build a simple page to host your R094 work.</li>
      </ul>
    </div>

    <h2 class="section-title">Phase 1: Interface & Elements</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Toolbox</h3>
        <p>The right-hand menu contains all your elements. Simply drag <strong>Image</strong>, <strong>Container</strong>, or <strong>Text</strong> onto the white page area.</p>
      </div>
      <div class="card">
        <h3>Properties Panel</h3>
        <p>This is where the magic happens. Select an element to change its <strong>Background Color</strong>, <strong>Padding</strong>, <strong>Border</strong>, or <strong>Font Size</strong>.</p>
      </div>
      <div class="card">
        <h3>Preview (F5)</h3>
        <p>RocketCake's editor isn't perfect. Always press <strong>F5</strong> (or click Preview) to see your site in a real browser like Chrome or Edge.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 2: Containers & Alignment</h2>
    <div class="card-grid">
      <div class="card">
        <h3>The Container Concept</h3>
        <p><strong>Rule #1:</strong> Never drop elements directly on the page. Always drag a <strong>Container</strong> (Div) first, then put your text/images <em>inside</em> it.</p>
      </div>
      <div class="card">
        <h3>Centering Elements</h3>
        <p>To center content, select the Container and set <strong>Alignment</strong> to <strong>Center</strong> in the Properties panel. Do not try to drag it to the middle manually!</p>
      </div>
      <div class="card">
        <h3>Background Images</h3>
        <p>To make a "Header," select a Container and change <strong>Background Type</strong> to <strong>Image</strong>. This allows you to put text <em>over</em> your banner graphic.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 3: Responsive Design (Mark Band 3)</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Breakpoints</h3>
        <p>Use the icons at the top (Computer, Tablet, Phone) to see how your layout changes. If your banner is cut off on mobile, you need to fix it!</p>
      </div>
      <div class="card">
        <h3>Hiding Elements</h3>
        <p>Right-click an element > <strong>Visible on...</strong>. You can hide a large complex banner on phones and show a simple logo instead. This proves you understand <strong>audience needs</strong>.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 4: Buttons & Interactivity</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Rollovers (Hover)</h3>
        <p>Select a Button. In Properties, find <strong>Hover State</strong>. Change the background colour. Now the button will light up when the mouse moves over it.</p>
      </div>
      <div class="card">
        <h3>Hyperlinks</h3>
        <p>Select text or a button, then type the page name (e.g., <code>page2.html</code>) or a full URL into the <strong>Link</strong> box in Properties.</p>
      </div>
    </div>

    <h2 class="section-title">Video Tutorials</h2>
    <p>Follow these tutorials to build a container for your graphics.</p>
    
    <div class="card-grid">
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=HuW3ZzG7dKA', '_blank')" style="cursor: pointer; border-left: 5px solid #E040FB;">
        <div class="card-info">
          <h3>1. Your First Website</h3>
          <p><strong>Skill:</strong> Creating a basic layout with Header, Content, and Footer.</p>
          <p style="font-size: 0.9rem; color: #E040FB;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=7yXlEuvE-b8', '_blank')" style="cursor: pointer; border-left: 5px solid #E040FB;">
        <div class="card-info">
          <h3>2. Responsive Images & Layouts</h3>
          <p><strong>Skill:</strong> Making images shrink automatically for mobile screens.</p>
          <p style="font-size: 0.9rem; color: #E040FB;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=s3qLZAQ2YpM', '_blank')" style="cursor: pointer; border-left: 5px solid #E040FB;">
        <div class="card-info">
          <h3>3. Creating Buttons & Menus</h3>
          <p><strong>Skill:</strong> Adding navigation and hover effects to buttons.</p>
          <p style="font-size: 0.9rem; color: #E040FB;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=r_s9gL3-dZ4', '_blank')" style="cursor: pointer; border-left: 5px solid #E040FB;">
        <div class="card-info">
          <h3>4. Image Gallery</h3>
          <p><strong>Skill:</strong> Displaying your Mood Boards and Sketches in a grid.</p>
          <p style="font-size: 0.9rem; color: #E040FB;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h3>Keyboard Shortcuts Cheat Sheet</h3>
      <ul style="columns: 2; -webkit-columns: 2; -moz-columns: 2;">
        <li><strong>F5:</strong> Preview in Browser</li>
        <li><strong>Ctrl + S:</strong> Save Project</li>
        <li><strong>Del:</strong> Delete Element</li>
        <li><strong>Ctrl + C / V:</strong> Copy / Paste</li>
        <li><strong>Container:</strong> The box everything goes in</li>
        <li><strong>Master Page:</strong> Template (Header/Footer)</li>
        <li><strong>Breakpoints:</strong> Mobile/Tablet views</li>
        <li><strong>Publish:</strong> Export to HTML</li>
      </ul>
    </div>

  `,

  // --- AUTODESK MAYA SKILLS PAGE ---
  r094_skill_maya: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #0696D7; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Ma</div>
      <div>
        <h1 style="margin: 0;">Autodesk Maya Skills</h1>
        <p style="margin: 0; color: #666;">Industry standard for 3D modelling, animation, and rendering.</p>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Why use Maya for R094?</h2>
      <p>While R094 is mostly 2D, using Maya allows you to create <strong>High-Quality Assets</strong> for your digital graphics:</p>
      <ul>
        <li><strong>3D Logos:</strong> Turning flat text into impactful 3D objects.</li>
        <li><strong>Product Visualisation:</strong> Placing your 2D logo onto a 3D Can, Box, or Vehicle (Mockups).</li>
        <li><strong>Unique Assets:</strong> Creating abstract 3D shapes for backgrounds.</li>
      </ul>
    </div>

    <h2 class="section-title">Phase 1: Navigation (The "Alt" Key)</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Camera Controls</h3>
        <p>Maya requires a 3-button mouse. Hold the <strong>Alt</strong> key for everything:</p>
        <ul>
          <li><strong>Alt + Left Click:</strong> Tumble (Rotate)</li>
          <li><strong>Alt + Middle Click:</strong> Pan (Move)</li>
          <li><strong>Alt + Right Click:</strong> Zoom</li>
        </ul>
      </div>
      <div class="card">
        <h3>Viewports</h3>
        <p>Press <strong>Spacebar</strong> to switch between the Single View (Perspective) and the 4-View (Top, Side, Front). This is essential for aligning objects perfectly.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 2: Modelling Basics</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Primitives</h3>
        <p>Start with basic shapes: <strong>Create > Polygon Primitives > Cube / Sphere / Cylinder</strong>. Use the Channel Box to change specific dimensions.</p>
      </div>
      <div class="card">
        <h3>The Toolkit (WER)</h3>
        <p>Memorise these shortcuts to manipulate objects:</p>
        <ul>
          <li><strong>W:</strong> Move Tool</li>
          <li><strong>E:</strong> Rotate Tool</li>
          <li><strong>R:</strong> Scale Tool</li>
        </ul>
      </div>
      <div class="card">
        <h3>3D Type (Logos)</h3>
        <p>Use the <strong>Type Tool</strong> (Create > Type) to instantly turn text into 3D geometry. You can change the font, thickness (Extrusion), and bevel styles.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 3: Texturing & Materials</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Standard Materials</h3>
        <p>Avoid Arnold materials for simple graphics. Right-click object > <strong>Assign New Material</strong>.</p>
        <ul>
          <li><strong>Lambert:</strong> Matte finish (Paper, Cardboard).</li>
          <li><strong>Blinn:</strong> Shiny finish (Plastic, Metal).</li>
        </ul>
      </div>
      <div class="card">
        <h3>Applying Logos</h3>
        <p><strong>Step 1:</strong> In the Material Attribute Editor, find "Color".</p>
        <p><strong>Step 2:</strong> Click the <strong>Checkerboard Icon</strong> > Select <strong>File</strong> > Open your PNG Logo.</p>
        <p><strong>Step 3:</strong> Press <strong>6</strong> on your keyboard to see textures in the viewport.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 4: Rendering (Hardware 2.0)</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Basic Lighting</h3>
        <p>Go to <strong>Create > Lights > Directional Light</strong>. Press <strong>7</strong> to see lights.</p>
        <p>Use the Rotate tool (E) to point the light. This creates shadows and defines the 3D shape.</p>
      </div>
      <div class="card">
        <h3>Render Settings</h3>
        <p>Click the <strong>Clapboard with Gear</strong> icon. Change "Render Using" to <strong>Maya Hardware 2.0</strong>.</p>
        <p>This renderer is instant and looks exactly like the high-quality viewport.</p>
      </div>
      <div class="card">
        <h3>Exporting Image</h3>
        <p>1. Click the <strong>Render Button</strong> (Clapboard with Eye).</p>
        <p>2. In the Render View window, go to <strong>File > Save Image</strong>.</p>
        <p>3. Save as a JPEG or PNG to use in your Photoshop project.</p>
      </div>
    </div>

    <h2 class="section-title">Video Tutorials</h2>
    <p>Follow these tutorials to create 3D assets for your coursework.</p>
    
    <div class="card-grid">
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=LJLo6MafPVM', '_blank')" style="cursor: pointer; border-left: 5px solid #0696D7;">
        <div class="card-info">
          <h3>1. Maya Interface Basics</h3>
          <p><strong>Skill:</strong> Navigation, Viewports, and basic object manipulation.</p>
          <p style="font-size: 0.9rem; color: #0696D7;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=keSf9_KFd3s', '_blank')" style="cursor: pointer; border-left: 5px solid #0696D7;">
        <div class="card-info">
          <h3>2. Creating 3D Text</h3>
          <p><strong>Skill:</strong> Using the Type tool to make 3D logos with bevels.</p>
          <p style="font-size: 0.9rem; color: #0696D7;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=ygg5SGzrumM', '_blank')" style="cursor: pointer; border-left: 5px solid #0696D7;">
        <div class="card-info">
          <h3>3. Simple Product Modelling</h3>
          <p><strong>Skill:</strong> Modelling a simple bottle or can using Extrude.</p>
          <p style="font-size: 0.9rem; color: #0696D7;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=8oT6Xt4HX5E', '_blank')" style="cursor: pointer; border-left: 5px solid #0696D7;">
        <div class="card-info">
          <h3>4. Applying Textures</h3>
          <p><strong>Skill:</strong> Placing an image file onto a 3D object (Texturing).</p>
          <p style="font-size: 0.9rem; color: #0696D7;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h3>Keyboard Shortcuts Cheat Sheet</h3>
      <ul style="columns: 2; -webkit-columns: 2; -moz-columns: 2;">
        <li><strong>Alt + LMB:</strong> Rotate Camera</li>
        <li><strong>Alt + MMB:</strong> Pan Camera</li>
        <li><strong>Alt + RMB:</strong> Zoom Camera</li>
        <li><strong>F:</strong> Focus on Selected</li>
        <li><strong>Q, W, E, R:</strong> Select, Move, Rotate, Scale</li>
        <li><strong>Spacebar:</strong> Toggle Viewports</li>
        <li><strong>Ctrl + E:</strong> Extrude Face</li>
        <li><strong>5 / 6:</strong> Shaded Mode / Texture Mode</li>
      </ul>
    </div>

  `,

  // --- AUTODESK MAYA ANIMATION SKILLS PAGE ---
  r096_skill_maya: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #003E5C; color: #0696D7; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Ma</div>
      <div>
        <h1 style="margin: 0;">Autodesk Maya Animation</h1>
        <p style="margin: 0; color: #666;">The industry standard for 3D Keyframe Animation.</p>
      </div>
    </div>

    <h2 class="section-title" style="margin-top: 0;">Introduction</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is Keyframe Animation?</h3>
        <p>You don't draw every frame. You define the <strong>Start Point</strong> (Frame 1) and the <strong>End Point</strong> (Frame 24). Maya calculates the movement in between (Interpolation).</p>
      </div>
      <div class="card" style="border-left: 5px solid #d32f2f;">
        <h3 style="color: #d32f2f;">⚠️ Critical Step: 24 FPS</h3>
        <p>Before you start, look at the bottom right. Ensure <strong>24 fps</strong> is selected.</p>
        <p>Go to <em>Windows > Settings/Preferences > Time Slider</em> and set Playback Speed to <strong>24 fps x 1</strong>. If you leave it on "Play every frame", your audio will never sync!</p>
      </div>
    </div>

    <h2 class="section-title">Phase 1: Setup & Interface</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Workspace</h3>
        <p>Switch the dropdown menu in the top right from <strong>Modeling</strong> to <strong>Animation</strong>. This reveals the Key, Playback, and Audio menus.</p>
      </div>
      <div class="card">
        <h3>Time Slider</h3>
        <p>The bar at the bottom representing time. Click and drag on the numbers to "Scrub" (preview) your animation manually.</p>
      </div>
      <div class="card">
        <h3>Range Slider</h3>
        <p>The smaller bar below the Time Slider. Use this to focus on a specific section (e.g., frames 50-100) without playing the whole movie.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 2: Keyframing Basics</h2>
    <div class="card-grid">
      <div class="card">
        <h3>The "S" Key</h3>
        <p>Select an object. Press <strong>S</strong>. You will see a red line appear on the Time Slider. You have now locked that object's position in time.</p>
      </div>
      <div class="card">
        <h3>The Workflow</h3>
        <ol>
          <li>Go to Frame 1. Move Object. Press <strong>S</strong>.</li>
          <li>Move Time Slider to Frame 24.</li>
          <li>Move Object to new spot. Press <strong>S</strong>.</li>
          <li>Press Play.</li>
        </ol>
      </div>
      <div class="card">
        <h3>Auto-Key</h3>
        <p>The button with the circular arrows (bottom right). When on, Maya automatically sets a keyframe whenever you move an object. <strong>Warning:</strong> Turn this off if you are just experimenting!</p>
      </div>
    </div>

    <h2 class="section-title">Phase 3: The Graph Editor (MB3 Skill)</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is it?</h3>
        <p>Go to <strong>Windows > Animation Editors > Graph Editor</strong>. This shows your movement as a line graph.</p>
      </div>
      <div class="card">
        <h3>Linear vs Spline</h3>
        <p><strong>Spline (Curved):</strong> Smooth start and stop (Easing). Natural movement.</p>
        <p><strong>Linear (Straight):</strong> Robotic, constant speed. Good for machines or conveyer belts.</p>
      </div>
      <div class="card">
        <h3>Editing Curves</h3>
        <p>Select a curve point and use the <strong>Move Tool (W)</strong> to adjust the handle. Making a curve steeper makes the movement faster.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 4: Audio & Exporting</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Importing Audio</h3>
        <p>Drag a <strong>.WAV</strong> file directly onto the Time Slider. Right-click the timeline > <strong>Audio</strong> to see the waveform visualised.</p>
      </div>
      <div class="card">
        <h3>Playblast (Preview)</h3>
        <p>Do NOT render every test. Right-click the Timeline > <strong>Playblast</strong>. This creates a quick, low-quality video file to check your timing and lip-sync.</p>
      </div>
    </div>

    <h2 class="section-title">Video Tutorials</h2>
    <p>Follow these tutorials to master the specific animation skills needed for R096.</p>
    
    <div class="card-grid">
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=d7zdvb1E1Q0', '_blank')" style="cursor: pointer; border-left: 5px solid #0696D7;">
        <div class="card-info">
          <h3>1. The Bouncing Ball</h3>
          <p><strong>Skill:</strong> Timing, Squash & Stretch, and Graph Editor basics.</p>
          <p style="font-size: 0.9rem; color: #0696D7;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=jPOVyyzE2Ro', '_blank')" style="cursor: pointer; border-left: 5px solid #0696D7;">
        <div class="card-info">
          <h3>2. Environmental modeling : Rigging & Animating Windows & Doors</h3>
          <p><strong>Skill:</strong> Understanding How Objects Move.</p>
          <p style="font-size: 0.9rem; color: #0696D7;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=P0ncubO1ChM', '_blank')" style="cursor: pointer; border-left: 5px solid #0696D7;">
        <div class="card-info">
          <h3>3. Camera Fly-Through</h3>
          <p><strong>Skill:</strong> Keyframing a camera to fly through a scene.</p>
          <p style="font-size: 0.9rem; color: #0696D7;">&#9658; Watch Tutorial</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=FgXltPe02j0', '_blank')" style="cursor: pointer; border-left: 5px solid #0696D7;">
        <div class="card-info">
          <h3>4. Create and Animate a Cartoon Candle</h3>
          <p><strong>Skill:</strong> Full process from creating to animating a Candle</p>
          <p style="font-size: 0.9rem; color: #0696D7;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h3>Animation Shortcuts Cheat Sheet</h3>
      <ul style="columns: 2; -webkit-columns: 2; -moz-columns: 2;">
        <li><strong>S:</strong> Set Key (All channels)</li>
        <li><strong>Shift + W:</strong> Set Key (Translate/Move only)</li>
        <li><strong>Shift + E:</strong> Set Key (Rotate only)</li>
        <li><strong>Alt + V:</strong> Play / Stop</li>
        <li><strong>&lt; and &gt; :</strong> Step one frame back/forward</li>
        <li><strong>MMB Drag:</strong> Move time without moving object</li>
        <li><strong>K + Drag:</strong> Virtual Slider (Scrub)</li>
      </ul>
    </div>

  `,
  r096_skill_wick: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #F44336; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Wi</div>
      <div>
        <h1 style="margin: 0;">Wick Editor Animation</h1>
        <p style="margin: 0; color: #666;">A free, web-based tool for 2D vector animation and games.</p>
      </div>
    </div>

    <h2 class="section-title" style="margin-top: 0;">Introduction</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is Wick Editor?</h3>
        <p>Wick Editor is an accessible tool for creating 2D animations using vector graphics. It is ideal for learners who want to master frame-by-frame animation or simple "tweening" without complex software installations.</p>
      </div>
      <div class="card" style="border-left: 5px solid #d32f2f;">
        <h3 style="color: #d32f2f;">⚠️ Project Settings</h3>
        <p>Always check your Canvas Settings before starting. Ensure your frame rate matches your Task 1 plan (typically 12 or 24 FPS) to keep your audio in sync later.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 1: Interface & Drawing Tools</h2>
    <div class="card-grid">
      <div class="card">
        <h3>The Workspace</h3>
        <p>The **Canvas** is your stage. Use the **Timeline** at the bottom to manage layers and frames, and the **Inspector** on the right to change object properties like colour and size.</p>
      </div>
      <div class="card">
        <h3>Vector Drawing</h3>
        <p>Use the Brush, Pencil, and Shape tools to create assets. Because these are vectors, you can scale them infinitely without losing quality, which is essential for professional-looking 2D animation.</p>
      </div>
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=pAsrXT8KIrI', '_blank')" style="cursor: pointer; border-left: 5px solid #F44336;">
        <div class="card-info">
          <h3>1. Interface & Drawing Basics</h3>
          <p><strong>Skill:</strong> Getting started with the editor layout and drawing tools.</p>
          <p style="font-size: 0.9rem; color: #F44336;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Phase 2: Animation Basics (Frames & Tweens)</h2>
    
    <div class="card-grid">
      <div class="card">
        <h3>Frame-by-Frame</h3>
        <p>Add a new frame to the timeline and change the drawing slightly. Use **Onion Skinning** to see a "ghost" of your previous frame, allowing for smoother motion.</p>
      </div>
      <div class="card">
        <h3>Built-in Tweens</h3>
        <p>For smoother, faster motion, use the **Tween** tool. Place your object at Point A, create a tween, and move it to Point B; Wick Editor will calculate the movement in between automatically.</p>
      </div>
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=CzgDiU2P2Oo', '_blank')" style="cursor: pointer; border-left: 5px solid #F44336;">
        <div class="card-info">
          <h3>2. Creating Your First Animation</h3>
          <p><strong>Skill:</strong> Understanding frames, layers, and basic motion.</p>
          <p style="font-size: 0.9rem; color: #F44336;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Phase 3: Interactive Skills (MB3 Skill)</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Buttons & Scripting</h3>
        <p>To reach higher mark bands, you can turn objects into **Buttons**. You can add simple 'Stop' or 'Play' scripts to give the user control over the animation.</p>
      </div>
      <div class="card">
        <h3>Audio Integration</h3>
        <p>Upload your **.WAV** or **.MP3** assets to the Asset Library. Drag them onto a dedicated audio layer in the timeline to synchronise them with your visuals.</p>
      </div>
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=fiTimi02PEg', '_blank')" style="cursor: pointer; border-left: 5px solid #F44336;">
        <div class="card-info">
          <h3>3. Adding Sound & Interactivity</h3>
          <p><strong>Skill:</strong> Importing audio and using basic buttons.</p>
          <p style="font-size: 0.9rem; color: #F44336;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Project Resources</h2>
    <p>Follow these additional resources to master specific animation techniques for your R096 NEA.</p>
    
    <div class="card-grid">
      <div class="card" onclick="window.open('https://www.wickeditor.com/#/learn/', '_blank')" style="cursor: pointer; border-left: 5px solid #F44336;">
        <div class="card-info">
          <h3>Wick Editor Learning Hub</h3>
          <p>Access the full library of official tutorials for advanced techniques.</p>
          <p style="font-size: 0.9rem; color: #F44336;">&#9658; Visit Learn Page</p>
        </div>
      </div>
    </div>

    <div class="homework-box" style="padding: 25px; border-top: 3px solid var(--dark-purple);">
  <h3 style="margin-top: 0; margin-bottom: 20px;">Wick Editor Shortcuts Cheat Sheet</h3>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
    
    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid var(--dark-purple);">
      <code style="font-weight: bold; color: var(--dark-purple);">Ctrl + Z</code> <span style="margin-left: 10px; color: var(--secondary-text);">Undo</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid var(--dark-purple);">
      <code style="font-weight: bold; color: var(--dark-purple);">Enter</code> <span style="margin-left: 10px; color: var(--secondary-text);">Play / Pause</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #F44336;">
      <code style="font-weight: bold; color: var(--dark-purple);">V</code> <span style="margin-left: 10px; color: var(--secondary-text);">Selection Tool</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #F44336;">
      <code style="font-weight: bold; color: var(--dark-purple);">B</code> <span style="margin-left: 10px; color: var(--secondary-text);">Brush Tool</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #F44336;">
      <code style="font-weight: bold; color: var(--dark-purple);">E</code> <span style="margin-left: 10px; color: var(--secondary-text);">Eraser Tool</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #2196f3;">
      <code style="font-weight: bold; color: var(--dark-purple);">Shift + Click</code> <span style="margin-left: 10px; color: var(--secondary-text);">Select Multiple</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #2196f3;">
      <code style="font-weight: bold; color: var(--dark-purple);">C</code> <span style="margin-left: 10px; color: var(--secondary-text);">Canvas Settings</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #4CAF50;">
      <code style="font-weight: bold; color: var(--dark-purple);">Export</code> <span style="margin-left: 10px; color: var(--secondary-text);">Save as .html/.mp4</span>
    </div>

  </div>
</div>

  `,
  r096_skill_line: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #4CAF50; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Ln</div>
      <div>
        <h1 style="margin: 0;">Line Drawing Techniques</h1>
        <p style="margin: 0; color: #666;">Traditional hand-drawn methods for 2D animation.</p>
      </div>
    </div>

    <h2 class="section-title" style="margin-top: 0;">Introduction</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is Line Drawing Animation?</h3>
        <p>Line drawing (or Cel animation) is the traditional method of creating movement by drawing every single frame by hand. While time-consuming, it offers the highest level of creative control over character performance.</p>
      </div>
      <div class="card" style="border-left: 5px solid #4CAF50;">
        <h3 style="color: #4CAF50;">⚠️ Planning for Sync</h3>
        <p>Because you are drawing every frame, your timing must be perfect. Use a <strong>Dope Sheet</strong> to map out exactly which drawing corresponds to which sound in your audio track.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 1: Key Poses & Breakdowns</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Keyframes (Extremes)</h3>
        <p>Start by drawing the "Extreme" poses—the start and end of a movement. These define the overall action and timing of the scene.</p>
      </div>
      <div class="card">
        <h3>Breakdowns</h3>
        <p>Draw the middle point between your extremes. This determines the arc of the movement (e.g., how high a foot lifts during a step).</p>
      </div>
    </div>
    

    <h2 class="section-title">Phase 2: Technical Methods</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Onion Skinning & Lightboxes</h3>
        <p>Use a lightbox (physical) or Onion Skinning (digital) to see your previous drawings. This allows you to trace the path of movement accurately to avoid "jitter".</p>
      </div>
      <div class="card">
        <h3>Rotoscoping</h3>
        <p>A technique where you trace over live-action film footage frame-by-frame. This produces highly realistic movement that is difficult to achieve by freehand drawing alone.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 3: Cleanup & Digitising</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Line Quality</h3>
        <p>Once your rough "pencil test" looks good, trace over it with clean, consistent lines. Ensure there are no gaps in your lines if you plan to use a "Paint Bucket" tool later.</p>
      </div>
      <div class="card">
        <h3>Scanning / Importing</h3>
        <p>Use a scanner or high-resolution camera to digitise your drawings. Ensure they are saved at a consistent resolution (DPI) to avoid assets changing size in your animation software.</p>
      </div>
    </div>

    <div class="homework-box" style="padding: 25px; border-top: 3px solid #4CAF50; margin-top: 30px;">
      <h3 style="margin-top: 0; margin-bottom: 20px;">Animation Principles Cheat Sheet</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        
        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #4CAF50;">
          <span style="font-weight: bold; color: var(--dark-purple);">Squash & Stretch</span> <span style="display:block; font-size: 0.85rem; color: var(--secondary-text);">Giving objects a sense of weight and flexibility.</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #4CAF50;">
          <span style="font-weight: bold; color: var(--dark-purple);">Anticipation</span> <span style="display:block; font-size: 0.85rem; color: var(--secondary-text);">Preparing the audience for an action (e.g., crouching before a jump).</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #4CAF50;">
          <span style="font-weight: bold; color: var(--dark-purple);">Arcs</span> <span style="display:block; font-size: 0.85rem; color: var(--secondary-text);">Ensuring movements follow natural, curved paths.</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #4CAF50;">
          <span style="font-weight: bold; color: var(--dark-purple);">Timing</span> <span style="display:block; font-size: 0.85rem; color: var(--secondary-text);">The number of frames between actions to determine speed.</span>
        </div>

      </div>
    </div>

  `,
  r096_skill_blender: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #E67E22; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Bl</div>
      <div>
        <h1 style="margin: 0;">Blender 3D Animation</h1>
        <p style="margin: 0; color: #666;">A powerful, open-source suite for 3D modelling, rigging, and animation.</p>
      </div>
    </div>

    <h2 class="section-title" style="margin-top: 0;">Introduction</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is Blender?</h3>
        <p>Blender is a professional-grade 3D tool used for everything from visual effects to video games. It handles the entire 3D pipeline: modelling, rigging, animation, simulation, rendering, and even video editing.</p>
      </div>
      <div class="card" style="border-left: 5px solid #E67E22;">
        <h3 style="color: #E67E22;">⚠️ Frame Rate Warning</h3>
        <p>Before animating, go to the <strong>Output Properties</strong> (printer icon). Ensure your Frame Rate is set to <strong>24 fps</strong>. If this doesn't match your Task 1 plan, your audio and visuals will drift apart over time!</p>
      </div>
    </div>

    <h2 class="section-title">Phase 1: Navigation & Interface</h2>
    <div class="card-grid">
      <div class="card">
        <h3>The 3D Viewport</h3>
        <p>Navigation in Blender is built around the middle mouse button:</p>
        <ul>
          <li><strong>MMB:</strong> Orbit (Rotate).</li>
          <li><strong>Shift + MMB:</strong> Pan (Move).</li>
          <li><strong>Scroll Wheel:</strong> Zoom.</li>
        </ul>
      </div>
      <div class="card">
        <h3>The Properties Area</h3>
        <p>Located on the right, this is where you change object data, add modifiers, and set up your final render settings.</p>
      </div>
      <div class="card" onclick="window.open('https://www.youtube.com/watch?v=B0J27sf9N1Y&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z', '_blank')" style="cursor: pointer; border-left: 5px solid #E67E22;">
        <div class="card-info">
          <h3>1. Blender Beginner Tutorial</h3>
          <p><strong>Skill:</strong> Interface, navigation, and basic object manipulation.</p>
          <p style="font-size: 0.9rem; color: #E67E22;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Phase 2: Modelling & Asset Creation</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Edit Mode (Tab)</h3>
        <p>Switch to <strong>Edit Mode</strong> to manipulate individual vertices, edges, and faces. Use the <strong>Extrude (E)</strong> and <strong>Inset (I)</strong> tools to build complex shapes from basic cubes.</p>
      </div>
      <div class="card">
        <h3>Modifiers</h3>
        <p>Use the <strong>Subdivision Surface</strong> modifier to smooth out your models without manually drawing hundreds of extra lines.</p>
      </div>
      <div class="card" onclick="window.open('https://youtu.be/tBpnKTAc5Eo?si=-_iCMgjfXhln_-Y3', '_blank')" style="cursor: pointer; border-left: 5px solid #E67E22;">
        <div class="card-info">
          <h3>2. Modelling for Beginners</h3>
          <p><strong>Skill:</strong> Creating 3D assets using Edit Mode and Modifiers.</p>
          <p style="font-size: 0.9rem; color: #E67E22;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Phase 3: Animation & Keyframing</h2>
    
    <div class="card-grid">
      <div class="card">
        <h3>Setting Keys (I)</h3>
        <p>Move your object, then press <strong>I</strong> to insert a keyframe. You can keyframe Location, Rotation, and Scale.</p>
      </div>
      <div class="card">
        <h3>The Dope Sheet</h3>
        <p>Use the <strong>Dope Sheet</strong> editor to slide your keyframes around. This allows you to fine-tune the timing of your animation to match your audio cues perfectly.</p>
      </div>
      <div class="card" onclick="window.open('https://youtu.be/4-tCn4-GfM4?si=zfq-72Jw6ii4JbbC', '_blank')" style="cursor: pointer; border-left: 5px solid #E67E22;">
        <div class="card-info">
          <h3>3. Keyframe Animation Basics</h3>
          <p><strong>Skill:</strong> Setting keys, using the timeline, and adjusting timing.</p>
          <p style="font-size: 0.9rem; color: #E67E22;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">Phase 4: Audio & Rendering</h2>
    
    <div class="card-grid">
      <div class="card">
        <h3>Importing Sound</h3>
        <p>Open the <strong>Video Sequence Editor</strong> to drag and drop your <strong>.WAV</strong> files. You can see the waveform to help you time visual actions to specific beats or dialogue.</p>
      </div>
      <div class="card">
        <h3>Eevee vs Cycles</h3>
        <p><strong>Eevee</strong> is a fast, real-time renderer—great for quick previews. <strong>Cycles</strong> is a ray-tracer—it takes longer but provides photorealistic lighting and shadows.</p>
      </div>
      
      <div class="card" onclick="window.open('https://youtu.be/D2rZljDYGdM?si=gxu0X3nPkXy9WX1Q', '_blank')" style="cursor: pointer; border-left: 5px solid #E67E22;">
        <div class="card-info">
          <h3>4. Rendering & Exporting</h3>
          <p><strong>Skill:</strong> Setting up the camera, choosing a render engine, and exporting your final video file.</p>
          <p style="font-size: 0.9rem; color: #E67E22;">&#9658; Watch Tutorial</p>
        </div>
      </div>
    </div>

    <div class="homework-box" style="padding: 25px; border-top: 3px solid #E67E22; margin-top: 30px;">
      <h3 style="margin-top: 0; margin-bottom: 20px;">Blender Shortcuts Cheat Sheet</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        
        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #E67E22;">
          <code style="font-weight: bold; color: var(--dark-purple);">G / R / S</code> <span style="margin-left: 10px; color: var(--secondary-text);">Grab, Rotate, Scale</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #E67E22;">
          <code style="font-weight: bold; color: var(--dark-purple);">Tab</code> <span style="margin-left: 10px; color: var(--secondary-text);">Object / Edit Mode</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #E67E22;">
          <code style="font-weight: bold; color: var(--dark-purple);">Shift + A</code> <span style="margin-left: 10px; color: var(--secondary-text);">Add Mesh/Object</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #E67E22;">
          <code style="font-weight: bold; color: var(--dark-purple);">F12</code> <span style="margin-left: 10px; color: var(--secondary-text);">Render Image</span>
        </div>

      </div>
    </div>

  `,
  r096_skill_pencil2d: `<h1>Pencil2D</h1><p>Content coming soon...</p>`,

  // --- R093 REVISION QUIZ ---
  r093_quiz: `
    <h1 style="text-align: center; font-size: 2.5rem; margin-bottom: 10px;">R093 Keyword Revision</h1>
    <p style="text-align: center; font-size: 1.2rem; color: var(--secondary-text);">Click the card to reveal the definition.</p>

    <div class="flashcard-container" style="perspective: 1000px; margin: 40px auto; width: 90%; max-width: 800px; height: 400px; cursor: pointer;" onclick="flipCard()">
      <div id="flashcard" style="position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s; transform-style: preserve-3d; box-shadow: 0 15px 30px rgba(0,0,0,0.15);">
        
        <div style="position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; background-color: var(--dark-purple); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 20px;">
          <h2 id="card-term" style="margin: 0; padding: 20px; font-size: 3rem; color: white;">...</h2>
          <p style="margin-top: 15px; font-size: 1rem; color: #ccc; font-style: italic;">(Click to flip)</p>
        </div>

        <div style="position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; background-color: var(--card-bg); color: var(--text-color); transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; border-radius: 20px; border: 4px solid var(--dark-purple);">
          <p id="card-def" style="padding: 40px; font-size: 1.6rem; line-height: 1.5; font-weight: 500;">...</p>
        </div>

      </div>
    </div>

    <div style="text-align: center; margin-top: 30px;">
      <button onclick="prevCard()" style="padding: 15px 30px; background: #6c757d; color: white; border: none; border-radius: 8px; cursor: pointer; margin-right: 15px;">Previous</button>
      <span id="card-counter" style="font-weight: bold; font-size: 1.5rem; margin: 0 20px; vertical-align: middle; color: var(--text-color);">1 / ${r093Keywords.length}</span>
      <button onclick="nextCard()" style="padding: 15px 30px; background: var(--dark-purple); color: white; border: none; border-radius: 8px; cursor: pointer;">Next Card</button>
    </div>

    <div style="text-align: center; margin-top: 40px;">
      <button onclick="initQuiz()" style="padding: 10px 25px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Start / Shuffle Quiz</button>
    </div>

    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="initQuiz()" style="display:none;">
  `

};



// --- Night Mode Logic ---
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Update the icon
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.innerText = isDark ? '☀️' : '🌙';
}

// Check for saved theme on load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.innerText = '☀️';
}

// --- Search Logic ---
function handleSearch(query) {
  const resultsDiv = document.getElementById('search-results');
  if (query.length < 2) {
    resultsDiv.style.display = 'none';
    return;
  }

  // Search Keywords
  const filteredKeywords = r093Keywords.filter(k =>
    k.term.toLowerCase().includes(query.toLowerCase())
  );

  // Search Pages/Topics
  const filteredTopics = Object.keys(contentData).filter(topic =>
    topic.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredKeywords.length > 0 || filteredTopics.length > 0) {
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `
      ${filteredTopics.map(t => `<div class="search-item" onclick="loadContent('${t}')">Page: ${t.replace('_', ' ')}</div>`).join('')}
      ${filteredKeywords.map(k => `<div class="search-item" onclick="loadContent('r093_quiz')">Term: ${k.term}</div>`).join('')}
    `;
  } else {
    resultsDiv.style.display = 'none';
  }
}

let cardsCompletedThisSession = false;

function initQuiz() {
  shuffleArray(r093Keywords);
  currentCardIndex = 0;
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

function updateCardDisplay() {
  const termEl = document.getElementById("card-term");
  const defEl = document.getElementById("card-def");
  const countEl = document.getElementById("card-counter");

  // Check if elements exist before trying to update text
  if (termEl && defEl && r093Keywords[currentCardIndex]) {
    termEl.innerText = r093Keywords[currentCardIndex].term;
    defEl.innerText = r093Keywords[currentCardIndex].def;
    countEl.innerText = (currentCardIndex + 1) + " / " + r093Keywords.length;
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

// --- History Management Variables ---
let historyStack = ['home'];
let isGoingBack = false;

function toggleNav() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.toggle("sidebar-open");
}

function setActiveNav(el) {
  document.querySelectorAll('.sidebar-nav .nav-link').forEach(a => a.classList.remove('active'));
  const homeLink = document.querySelector('.sidebar-nav .nav-home');
  if (el.classList && el.classList.contains('nav-link')) {
    el.classList.add('active');
  } else if (homeLink) {
    // For submenu items, highlight the Dashboard only when navigating home
  }
}

function toggleSubMenu() {
  const menu = document.getElementById("r093-submenu");
  if (menu) {
    menu.classList.toggle("show-submenu");
    const link = menu.previousElementSibling;
    if (link) link.classList.toggle("open");
  }
}

// 2. Updated loadContent to handle button visibility
function loadContent(topic) {
  const display = document.getElementById("display-area");
  const backBtn = document.getElementById("floating-back-btn");

  // History Management
  if (!isGoingBack) {
    if (historyStack[historyStack.length - 1] !== topic) {
      historyStack.push(topic);
    }
  } else {
    isGoingBack = false;
  }

  // Handle Button Visibility: Hide if on 'home', show otherwise
  if (topic === 'home') {
    backBtn.style.display = "none";
  } else {
    backBtn.style.display = "flex";
  }

  // Update Breadcrumb Text for the hover effect
  const backBtnText = document.getElementById("back-btn-text");
  if (historyStack.length > 1) {
    const prevPageRaw = historyStack[historyStack.length - 2];
    const cleanName = "← Back to " + prevPageRaw.replace(/_/g, ' ').toUpperCase();
    backBtnText.setAttribute('data-hover', cleanName);
  }

  if (contentData[topic]) {
    display.innerHTML = contentData[topic];
    restoreChecks(); //
  }

  // Quiz Trainer: initialize menu after injection
  if (topic === 'quiz_trainer' && typeof quizInitMenu === 'function') {
    quizInitMenu();
  }

  // Refresh XP / level displays after any page load (topbar always, home stats if present)
  if (typeof updateXpDisplay === 'function') {
    updateXpDisplay();
  }
  if (typeof refreshAchievements === 'function') {
    refreshAchievements();
  }

  // Sync active state on Dashboard link when navigating to home
  if (topic === 'home') {
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(a => a.classList.remove('active'));
    const homeLink = document.querySelector('.sidebar-nav .nav-home');
    if (homeLink) homeLink.classList.add('active');
  }

  if (window.innerWidth < 768) {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && sidebar.classList.contains('sidebar-open')) sidebar.classList.remove('sidebar-open');
  }
}

// --- New Function: Go Back ---
function goBack() {
  if (historyStack.length > 1) {
    isGoingBack = true;       // Tell loadContent NOT to add this to history
    historyStack.pop();       // Remove current page
    const previousPage = historyStack[historyStack.length - 1]; // Get previous page
    loadContent(previousPage);
  } else {
    loadContent('home'); // Default to home if no history
  }
}

function toggleR094SubMenu() {
  const menu = document.getElementById("r094-submenu");
  if (menu) {
    menu.classList.toggle("show-submenu");
    const link = menu.previousElementSibling;
    if (link) link.classList.toggle("open");
  }
}

function toggleR096SubMenu() {
  const menu = document.getElementById("r096-submenu");
  if (menu) {
    menu.classList.toggle("show-submenu");
    const link = menu.previousElementSibling;
    if (link) link.classList.toggle("open");
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
  const draggedElement = document.getElementById(data);
  const dropZone = ev.target.closest('.drop-zone');
  const feedback = document.getElementById('game-feedback');

  if (dropZone) {
    const correctPhase = draggedElement.getAttribute('data-phase');
    const targetPhase = dropZone.id;

    // A role is correct if it matches the phase OR works in 'all' phases
    if (correctPhase === targetPhase || correctPhase === 'all') {
      dropZone.appendChild(draggedElement);
      draggedElement.style.background = "#4CAF50"; // Green
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

/* This existing function in your script.js will now work for both tasks */
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  }
}

// 2. Save Checkbox State to LocalStorage
function saveCheck(checkbox) {
  localStorage.setItem(checkbox.id, checkbox.checked);
}

// 3. Restore Checkbox States (Run this when page loads)
function restoreChecks() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(box => {
    const savedState = localStorage.getItem(box.id);
    if (savedState === 'true') {
      box.checked = true;
    }
  });
}

// 4. Close Modal if clicking outside content
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
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

const quizQuestionBank = {
    "1.1 Media Industry Sectors": [
        { q: "Action, arcade, first person, puzzle and RPG are examples of which new media product?", a: "Digital Games", options: ["Websites", "Digital Games", "Social Media", "eBooks"], hint: "Mock Paper Q1.", why: "These are genres specific to the Digital Games sector." },
        { q: "Which sector creates 'Graphic Novels'?", a: "Comics", options: ["Broadcast", "Comics", "Print Publishing", "Music"], hint: "Mock Page 3 reference.", why: "Graphic novels are a core product of the Comics industry." },
        { q: "Identify one example of traditional media other than print publishing.", a: "Radio", options: ["Websites", "Radio", "Mobile Apps", "AR/VR"], hint: "Mock Q9c.", why: "Radio is a broadcast medium that predates digital New Media." },
        { q: "Which sector is responsible for 'eBooks'?", a: "Digital Publishing", options: ["Film", "Digital Publishing", "Radio", "Television"], hint: "Spec 1.1.", why: "eBooks are a digital publishing product." },
        { q: "Which is a 'Moving Image' product?", a: "Animation", options: ["Animation", "Digital Imaging", "Social Media", "eBooks"], hint: "Spec 1.1.", why: "Animation is classified as a moving image product." },
        { q: "What type of product is AR/VR classified as?", a: "New Media", options: ["Traditional", "New Media", "Print", "Audio"], hint: "Spec 1.1.", why: "AR and VR are immersive technologies in the New Media sector." },
        { q: "Which sector produces cinematic films?", a: "Film", options: ["Film", "Radio", "Comics", "Multimedia"], hint: "Spec 1.1.", why: "The film sector is part of traditional media." },
        { q: "What is an example of an interactive media product?", a: "Mobile App", options: ["Mobile App", "Newspaper", "Radio Show", "Billboard"], hint: "Spec 1.1.", why: "Mobile apps allow for user interaction, unlike static print." },
        { q: "Which sector involves 'Internet' products?", a: "New Media", options: ["New Media", "Traditional", "Print", "Broadcast"], hint: "Spec 1.1.", why: "The internet is a primary platform for New Media." },
        { q: "What type of product is a podcast?", a: "Audio", options: ["Audio", "Video", "Animation", "Graphic"], hint: "Spec 1.1.", why: "Podcasts are digital audio products." },
        { q: "Which sector creates products like Billboard Posters?", a: "Print Publishing", options: ["Print Publishing", "Television", "Film", "Digital Games"], hint: "Spec 1.1.", why: "Billboards are a physical output of the print/advertising sector." },
        { q: "Identify a product of the Audio sector.", a: "Radio Programme", options: ["Radio Programme", "Magazine", "Website", "Digital Game"], hint: "Spec 1.1.", why: "Radio programmes are core audio products." },
        { q: "Traditional media sectors distribute via?", a: "Physical/Analogue", options: ["Physical/Analogue", "Cloud", "App Stores", "VR Headsets"], hint: "Spec 1.1.", why: "Traditional sectors rely on physical paper or analogue broadcast." },
        { q: "Which is a 'New Media' product?", a: "Social Media Platform", options: ["Social Media Platform", "Newspaper", "Billboard", "Hardback Book"], hint: "Spec 1.1.", why: "Social media relies on digital, interactive tech." },
        { q: "What does VR stand for in iMedia?", a: "Virtual Reality", options: ["Virtual Reality", "Video Recording", "Visual Report", "Voice Recorder"], hint: "Spec 1.1.", why: "VR creates a fully computer-generated environment." },
        { q: "Which sector produces 'Cinematic Films'?", a: "Film", options: ["Film", "Radio", "Comics", "Multimedia"], hint: "Spec 1.1.", why: "The film sector is the primary producer of cinema content." },
        { q: "What type of product is a Mobile App?", a: "Interactive Media", options: ["Interactive Media", "Traditional Print", "Legacy Broadcast", "Pure Audio"], hint: "Spec 1.1.", why: "Apps are interactive digital products." },
        { q: "Which sector handles 'Global News' through print?", a: "Publishing", options: ["Publishing", "Animation", "AR/VR", "Comics"], hint: "Spec 1.1.", why: "News organisations belong to publishing and broadcast sectors." },
        { q: "Video games often belong to which sector?", a: "Interactive Media", options: ["Interactive Media", "Traditional Print", "Legacy Broadcast", "Radio"], hint: "Spec 1.1.", why: "Games require user interaction." },
        { q: "Which is a traditional broadcast media example?", a: "Television", options: ["Television", "Websites", "Apps", "AR/VR"], hint: "Spec 1.1.", why: "Broadcast TV is a standard traditional sector." }
    ],

    "1.2 Media Industry Job Roles": [
        { q: "Who is responsible for planning the style and layout of a website?", a: "Web Designer", options: ["Web Designer", "Web Developer", "Graphic Artist", "Content Creator"], hint: "Mock Q2.", why: "A web designer plans the 'look' while a developer codes it." },
        { q: "Who is responsible for creating (coding) the website?", a: "Web Developer", options: ["Web Designer", "Web Developer", "Copy Writer", "Creative Director"], hint: "Mock Q2.", why: "Web developers use technical skills to build the site." },
        { q: "Who manages budget and production timescales?", a: "Production Manager", options: ["Creative Director", "Production Manager", "Animator", "Video Editor"], hint: "Mock Q11a.", why: "Production managers handle logistics and finances." },
        { q: "Who is responsible for the overall creative vision?", a: "Creative Director", options: ["Web Developer", "Creative Director", "Audio Technician", "Script Writer"], hint: "Mock Q11b.", why: "The Creative Director oversees the artistic direction." },
        { q: "Who creates digital drawings and icons?", a: "Graphic Artist", options: ["Graphic Artist", "Web Developer", "Production Manager", "Director"], hint: "Mock Q12a.", why: "Graphic artists (illustrators) create visual assets." },
        { q: "Which role writes text for ads and scripts?", a: "Copy Writer", options: ["Graphic Designer", "Copy Writer", "Sound Editor", "Photographer"], hint: "Spec 1.2.", why: "Copy writers create the written content for media." },
        { q: "Which role is specifically 'Technical'?", a: "Camera Operator", options: ["Camera Operator", "Director", "Campaign Manager", "Copy Writer"], hint: "Spec 1.2.", why: "Camera operators physically operate production equipment." },
        { q: "Who edits audio sequences for a podcast?", a: "Sound Editor", options: ["Sound Editor", "Graphic Artist", "Animator", "Photographer"], hint: "Spec 1.2.", why: "Sound editors manipulate audio assets in post-production." },
        { q: "Which role captures still images?", a: "Photographer", options: ["Photographer", "Camera Operator", "Animator", "Editor"], hint: "Spec 1.2.", why: "Photographers are responsible for digital static imaging." },
        { q: "Who moves characters using software?", a: "Animator", options: ["Animator", "Director", "Accountant", "Campaign Manager"], hint: "Spec 1.2.", why: "Animators create the illusion of life through movement." },
        { q: "Which role manages an advertising campaign?", a: "Campaign Manager", options: ["Campaign Manager", "Sound Editor", "Script Writer", "Web Designer"], hint: "Spec 1.2.", why: "Campaign managers lead the senior marketing strategy." },
        { q: "Who selects the final takes for a film?", a: "Editor", options: ["Editor", "Director", "Sound Tech", "Camera Op"], hint: "Post-production.", why: "The editor pieces together the best footage into a final sequence." },
        { q: "Who provides the voice for an animation?", a: "Voice Actor", options: ["Voice Actor", "Animator", "Script Writer", "Director"], hint: "Spec 1.2.", why: "Actors provide the auditory character performance." },
        { q: "Which role captures footage on a set?", a: "Camera Operator", options: ["Camera Operator", "Photographer", "Editor", "Copy Writer"], hint: "Spec 1.2.", why: "Camera operators are responsible for moving image capture." },
        { q: "Who writes the narrative for a computer game?", a: "Script Writer", options: ["Script Writer", "Web Developer", "Camera Op", "Photographer"], hint: "Spec 1.2.", why: "Writers create the plots and dialogue for interactive media." },
        { q: "Who works with the Web Designer to build a site?", a: "Web Developer", options: ["Web Developer", "Photographer", "Animator", "Sound Editor"], hint: "Spec 1.2.", why: "Developers execute the functional parts of the layout." },
        { q: "Creative roles in iMedia focus on?", a: "Ideas and Aesthetics", options: ["Ideas and Aesthetics", "Coding and Servers", "Equipment Repair", "Budget Tracking"], hint: "Spec 1.2.", why: "Creative roles focus on the visual and narrative content." },
        { q: "Who determines the artistic direction of a game?", a: "Creative Director", options: ["Creative Director", "Tester", "Server Tech", "Programmer"], hint: "Spec 1.2.", why: "The Creative Director sets the style for the interactive product." },
        { q: "Who writes the code for a digital game?", a: "Game Programmer", options: ["Game Programmer", "Script Writer", "Director", "Camera Operator"], hint: "Spec 1.2.", why: "Programmers handle the technical code build." },
        { q: "Who oversees the entire production budget?", a: "Production Manager", options: ["Production Manager", "Photographer", "Copy Writer", "Animator"], hint: "Spec 1.2.", why: "Production managers are responsible for project logistics." }
    ],

    "2.1 Factors influencing Design": [
        { q: "The purpose of a travel magazine about attractions is to...?", a: "Inform & Promote", options: ["Inform & Promote", "Only Educate", "Slander", "Entertain only"], hint: "Mock Q9a.", why: "Travel magazines inform people and promote spots." },
        { q: "Which factor influences photo choice for a magazine?", a: "Target Audience", options: ["Target Audience", "Internet Speed", "Mouse Type", "Chair Height"], hint: "Spec 2.1.", why: "Content must appeal specifically to the intended user." },
        { q: "Style and layout must link to the...?", a: "Purpose", options: ["Purpose", "File Format", "Budget", "Task Start Date"], hint: "Spec 2.1.", why: "Design choices must fulfil the project's goal." },
        { q: "Design element used to avoid clutter?", a: "White space", options: ["White space", "Logos", "Annotations", "Bit Depth"], hint: "Space.", why: "White space improves clarity and visual balance." },
        { q: "Consistency in fonts across a product is?", a: "House Style", options: ["House Style", "Asset Log", "Primary Data", "GDD"], hint: "Spec 2.1.", why: "House style ensures a consistent brand identity." },
        { q: "Informal language on a cover is used to?", a: "Engage audience", options: ["Engage audience", "Legal necessity", "Technical accuracy", "Save space"], hint: "Mock Q10c.", why: "Informal language creates a conversational tone." },
        { q: "Emphasis in typography is created by?", a: "Font size/Style", options: ["Font size/Style", "Resolution", "PPI", "File Type"], hint: "Mock Q10a.", why: "Bold or large text draws the eye to key info." },
        { q: "What defines 'accessibility' in media?", a: "Meeting diverse needs", options: ["Meeting diverse needs", "Lowering file size", "Using fast internet", "Picking expensive software"], hint: "Equal access.", why: "Accessibility ensures everyone can use the product (e.g., captions)." },
        { q: "Why use color palettes?", a: "Consistency/Style", options: ["Consistency/Style", "Faster rendering", "Lower file size", "Legal safety"], hint: "Memory.", why: "Palettes ensure the product fits the brand identity." },
        { q: "Symmetry in layout creates a sense of?", a: "Order and Balance", options: ["Order and Balance", "Chaos", "Action", "Urgency"], hint: "Equal.", why: "Balanced layouts feel stable and organized." },
        { q: "Dynamic layouts use diagonals to show?", a: "Movement/Action", options: ["Movement/Action", "Boredom", "Peace", "Standard info"], hint: "Diagonal lines.", why: "Slanted lines create a sense of energy and flow." },
        { q: "Color psychology is used to influence?", a: "Audience emotions", options: ["Audience emotions", "File compression", "Rendering speed", "Legal fees"], hint: "Feelings.", why: "Colors trigger specific emotional responses (e.g. Red for warning)." },
        { q: "Design aesthetics refer to?", a: "Visual beauty/look", options: ["Visual beauty/look", "Code logic", "Server speed", "Printing ink"], hint: "Art.", why: "Aesthetics are the artistic and visual principles of design." },
        { q: "A high-contrast design helps which users?", a: "Visually impaired", options: ["Visually impaired", "Expert coders", "Audio technicians", "Accountants"], hint: "Vision.", why: "High contrast makes text easier to read for those with limited sight." },
        { q: "The 'Rule of Thirds' is used for?", a: "Framing/Composition", options: ["Framing/Composition", "File naming", "Asset logging", "Risk assessing"], hint: "Visuals.", why: "It is a standard technique for positioning visual elements." },
        { q: "What makes a product 'Intuitive'?", a: "Easy to use without training", options: ["Easy to use without training", "Expensive software", "Large file size", "Complicated menus"], hint: "Simple.", why: "Intuitive design relies on standard conventions users already know." },
        { q: "Scaling an image disproportionally leads to?", a: "Distortion", options: ["Distortion", "Higher DPI", "Better color", "Faster download"], hint: "Stretching.", why: "Changing width and height unequally makes images look unnatural." },
        { q: "Serif fonts are often used for?", a: "Traditional feel", options: ["Traditional feel", "Modern apps", "Digital games", "Coding scripts"], hint: "Feet.", why: "Serif fonts have decorative feet and feel more classic." },
        { q: "Sans-serif fonts are often used for?", a: "Modern/Clean feel", options: ["Modern/Clean feel", "Old newspapers", "Formal contracts", "Medieval themes"], hint: "No feet.", why: "Sans-serif fonts look clean and modern on screens." },
        { q: "Why is 'Brand Consistency' important?", a: "Builds trust and recognition", options: ["Builds trust and recognition", "Saves battery", "Uses less RAM", "Avoids libel"], hint: "Logo.", why: "Users feel more confident when a brand looks the same across products." }
    ],

    "2.2 Client Requirements": [
        { q: "What defines the goal of a product?", a: "Purpose", options: ["Purpose", "Ethos", "Genre", "Timescale"], hint: "Spec 2.2.", why: "Purpose is 'what' the product must do." },
        { q: "Core values of a brand?", a: "Ethos", options: ["Ethos", "Logo", "Timescale", "Budget"], hint: "Identity.", why: "Ethos is the company's personality." },
        { q: "Deadline of a project?", a: "Timescale", options: ["Timescale", "Budget", "Genre", "Asset Log"], hint: "Time.", why: "Timescales set the final delivery date." },
        { q: "Formal brief document?", a: "Written/Contract", options: ["Written/Contract", "Meeting", "Chat", "Phone Call"], hint: "Official.", why: "Written briefs are formal legal guides." },
        { q: "Constraint in a brief?", a: "Budget/Time", options: ["Budget/Time", "Color choice", "Font size", "Software name"], hint: "Limit.", why: "Time and money are key project constraints." },
        { q: "Meeting format for brief?", a: "Discussion", options: ["Discussion", "Proprietary", "Encrypted", "Silent"], hint: "Mock scenario.", why: "Client meetings are common brief formats." },
        { q: "Genre in a brief defines?", a: "Category/Type", options: ["Category/Type", "File size", "FPS", "Resolution"], hint: "Spec 2.2.", why: "Genre sets the product's style category." },
        { q: "Brief interpretation is for?", a: "Generate ideas", options: ["Generate ideas", "Lower costs", "Ignore laws", "Skip tasks"], hint: "Spec 2.2.", why: "Interpretation leads to creative planning." },
        { q: "Client branding needs are?", a: "Logo/House Style", options: ["Logo/House Style", "Asset Table", "Gantt Chart", "Recce"], hint: "Visual identity.", why: "Clients require brand symbols in the product." },
        { q: "Brief keyword identification?", a: "Extracting needs", options: ["Extracting needs", "Deleting text", "Typing fast", "Printing"], hint: "Spec 2.2.", why: "Finding keywords identifies core requirements." },
        { q: "USP means?", a: "Unique Selling Point", options: ["Unique Selling Point", "Universal Script Part", "User Study Plot", "Unit Score Plan"], hint: "Originality.", why: "USP defines what makes a product special." },
        { q: "A 'Negotiated' brief means?", a: "Agreed by both sides", options: ["Agreed by both sides", "Written only by client", "Created only by artist", "Set by government"], hint: "Discussion.", why: "Negotiated briefs involve input from both client and producer." },
        { q: "The 'Scope' of a project is?", a: "What is included", options: ["What is included", "What it costs", "The software used", "The file format"], hint: "Range.", why: "Scope defines the boundaries and deliverables of the work." },
        { q: "Client 'Requirements' include?", a: "Needs and Wants", options: ["Needs and Wants", "Bugs and Errors", "Coffee and Snacks", "Pens and Paper"], hint: "Brief content.", why: "Requirements are the specific outcomes the client expects." },
        { q: "Identifying the 'Medium' means?", a: "Platform (e.g. TV)", options: ["Platform (e.g. TV)", "Average score", "File size", "Color depth"], hint: "How it's seen.", why: "Medium describes the type of platform used for the product." },
        { q: "Mandatory content in a brief is?", a: "Must-have items", options: ["Must-have items", "Optional ideas", "Suggested fonts", "Sample audio"], hint: "Required.", why: "Mandatory items are non-negotiable parts of the design." },
        { q: "What is an 'Implicit' requirement?", a: "Unspoken but expected", options: ["Unspoken but expected", "Written in bold", "Legal text", "A software name"], hint: "Hidden.", why: "Implicit needs are common-sense requirements not always listed." },
        { q: "Targeting a 'Global' audience affects?", a: "Language/Culture", options: ["Language/Culture", "Internet speed", "Mouse type", "Recce location"], hint: "Worldwide.", why: "Global products must consider international cultures and translations." },
        { q: "Reviewing the brief happens in?", a: "Pre-production", options: ["Pre-production", "Production", "Post-production", "Distribution"], hint: "Start phase.", why: "The brief must be analyzed before work begins." },
        { q: "Client feedback is used to?", a: "Refine designs", options: ["Refine designs", "Increase prices", "Stop the project", "Change file formats"], hint: "Improve.", why: "Feedback ensures the producer meets the client's expectations." }
    ],

    "2.3 Audience Segmentation": [
        { q: "Grouping an audience by 'Occupation' or 'Income' is?", a: "Demographics", options: ["Demographics", "Lifestyle", "Location", "Interest"], hint: "Mock Q14c.", why: "Demographics are statistical population traits." },
        { q: "Grouping an audience by where they live is?", a: "Location", options: ["Location", "Age", "Gender", "Income"], hint: "Spec 2.3.", why: "Location targets people geographically." },
        { q: "Grouping by 'Interests' and 'Opinions' is?", a: "Lifestyle", options: ["Lifestyle", "Demographics", "Age", "Education"], hint: "Spec 2.3.", why: "Lifestyle segmentation looks at behavior." },
        { q: "Which is a demographic trait?", a: "Age", options: ["Age", "Hobbies", "Region", "Political View"], hint: "Spec 2.3.", why: "Age is a fixed statistical demographic." },
        { q: "Why segment an audience?", a: "To target products", options: ["To target products", "Save battery", "Lower resolution", "Save money"], hint: "Spec 2.3.", why: "Segmentation ensures designs appeal to specific groups." },
        { q: "Grouping by Education level is?", a: "Demographics", options: ["Demographics", "Location", "Lifestyle", "Gender"], hint: "Factual.", why: "Education is a factual demographic data point." },
        { q: "Who defines the target audience in a brief?", a: "Client", options: ["Client", "Artist", "Developer", "Public"], hint: "Spec 2.2.", why: "The client specifies the intended user group." },
        { q: "Accessibility feature for those with hearing loss?", a: "Captions", options: ["Captions", "Larger font", "Dark mode", "DPI"], hint: "Spec 2.1.", why: "Captions provide text alternatives to audio." },
        { q: "Targeting people in a specific city is grouping by?", a: "Location", options: ["Location", "Gender", "Income", "Education"], hint: "Geography.", why: "Targeting a city is geographic segmentation." },
        { q: "Grouping an audience by 'Religion' is?", a: "Demographics", options: ["Demographics", "Technical", "Distribution", "Hardware"], hint: "Identity.", why: "Beliefs and religions are demographic identifiers." },
        { q: "An audience of 'Expert' users needs...?", a: "Complex functionality", options: ["Complex functionality", "Simplified UI", "Large buttons", "Few features"], hint: "Technical level.", why: "Expert users require deeper control and complex tools." },
        { q: "Grouping by 'Gender' allows for?", a: "Tailored aesthetics", options: ["Tailored aesthetics", "Lower cost", "Higher DPI", "Faster FPS"], hint: "Visuals.", why: "Visual style often changes based on gender research." },
        { q: "Secondary audience means?", a: "The 'unexpected' users", options: ["The 'unexpected' users", "The paying client", "The primary target", "The software team"], hint: "Outside target.", why: "Secondary audiences are those outside the main target group." },
        { q: "Targeting a 'Professional' audience influenced?", a: "Tone of Language", options: ["Tone of Language", "Screen Size", "Mouse Type", "Battery Life"], hint: "Mock scenario.", why: "Professional audiences expect formal, industry-specific language." },
        { q: "A product for toddlers should have...?", a: "High contrast/Large items", options: ["High contrast/Large items", "Small text", "Complex menus", "Technical data"], hint: "Young kids.", why: "Young children need clear, high-contrast, simple interfaces." },
        { q: "Income segmentation determines...?", a: "Product price/affordability", options: ["Product price/affordability", "File format", "Download speed", "Color choice"], hint: "Money.", why: "Pricing must match the economic group targeted." },
        { q: "Audience 'Accessibility' is required by?", a: "The Equality Act", options: ["The Equality Act", "The Copyright Act", "Libel Laws", "Patent Office"], hint: "Law.", why: "The Equality Act ensures products don't exclude disabled users." },
        { q: "Primary audience is?", a: "The main group intended", options: ["The main group intended", "The developers", "The secondary users", "The regulators"], hint: "Spec 2.3.", why: "The primary audience is the main group the product is designed for." },
        { q: "What defines an audience's 'Behavior'?", a: "How they use the product", options: ["How they use the product", "Where they live", "How old they are", "How much they earn"], hint: "Action.", why: "Behavioral segmentation looks at user interaction patterns." },
        { q: "Segmenting by 'Age' ensures content is?", a: "Age Appropriate", options: ["Age Appropriate", "Low resolution", "Free of cost", "Fastest frame rate"], hint: "Legal.", why: "Content must follow age-rating laws (like BBFC/PEGI)." }
    ],

    "2.4 Research Methods": [
        { q: "Identify one example of quantitative research data.", a: "Numerical data", options: ["Numerical data", "Opinion", "Feelings", "Description"], hint: "Mock Q8.", why: "Quantitative research focuses on numbers." },
        { q: "Which is a Primary research method?", a: "Focus Group", options: ["Focus Group", "Magazine", "Textbook", "Website"], hint: "Spec 2.4.", why: "Primary research is data you collect first-hand." },
        { q: "Secondary source other than magazines?", a: "Internet Research", options: ["Internet Research", "First-hand Interview", "Survey", "Poll"], hint: "Mock Q10d.", why: "Existing websites are secondary sources." },
        { q: "Numerical research info is?", a: "Quantitative", options: ["Quantitative", "Qualitative", "Primary", "Secondary"], hint: "Numbers.", why: "Quantitative is measured in numbers." },
        { q: "Opinion-based info is?", a: "Qualitative", options: ["Qualitative", "Quantitative", "Direct", "Factual"], hint: "Depth.", why: "Qualitative research focuses on depth and opinion." },
        { q: "Data you collect yourself is?", a: "Primary", options: ["Primary", "Secondary", "External", "Published"], hint: "Spec 2.4.", why: "Primary research is first-hand." },
        { q: "Internet research is usually?", a: "Secondary", options: ["Secondary", "Primary", "Direct", "Internal"], hint: "Existing.", why: "Using existing sites is a secondary source." },
        { q: "A Survey is which type of research?", a: "Primary", options: ["Primary", "Secondary", "Historical", "Reflective"], hint: "Spec 2.4.", why: "Surveys gather original data from participants." },
        { q: "Secondary research benefit?", a: "Quicker to access", options: ["Quicker to access", "Tailored to needs", "High precision", "Free of bias"], hint: "Spec 2.4.", why: "Existing data is faster than conducting new studies." },
        { q: "Primary research disadvantage?", a: "High cost", options: ["High cost", "No data", "Too old", "Generic"], hint: "Spec 2.4.", why: "Conducting original research requires resources." },
        { q: "A questionnaire is which research type?", a: "Primary", options: ["Primary", "Secondary", "Third-party", "Implicit"], hint: "Direct.", why: "Questionnaires gather original data from a target group." },
        { q: "A census is a...?", a: "Secondary source", options: ["Secondary source", "Primary source", "Personal source", "Graphic source"], hint: "Published data.", why: "Census data is a published report by others." },
        { q: "Questionnaires produce...?", a: "Primary Data", options: ["Primary Data", "Secondary Data", "Implicit Data", "Old Data"], hint: "First-hand.", why: "Responses are collected first-hand." },
        { q: "A diary of behavior is?", a: "Qualitative", options: ["Qualitative", "Quantitative", "Standard", "Static"], hint: "Opinions.", why: "Diaries track thoughts and feelings." },
        { q: "Secondary research disadvantage?", a: "May be outdated", options: ["May be outdated", "Too expensive", "Too slow", "Too specific"], hint: "Spec 2.4.", why: "Existing reports may no longer be accurate." },
        { q: "A Focus Group provides?", a: "Detailed opinions", options: ["Detailed opinions", "Vast statistics", "Quick numbers", "Legal proof"], hint: "Group.", why: "Focus groups allow for deep qualitative discussion." },
        { q: "Researching competitors' products is?", a: "Secondary", options: ["Secondary", "Primary", "Qualitative", "Quantitative"], hint: "Already out there.", why: "Reviewing existing products is using secondary info." },
        { q: "Which research helps define the USP?", a: "Market Research", options: ["Market Research", "Risk Assessment", "Work Plan", "Budgeting"], hint: "Competition.", why: "Market research identifies what else is on offer." },
        { q: "Validating data means?", a: "Checking it is correct", options: ["Checking it is correct", "Deleting it", "Printing it", "Sharing it"], hint: "Accuracy.", why: "Validation ensure the research is reliable for the project." },
        { q: "Source likely to have bias?", a: "Personal blog", options: ["Personal blog", "Census data", "Government report", "Scientific journal"], hint: "Opinion.", why: "Personal posts are often biased and not verified facts." }
    ],

    "2.5 Media Codes": [
        { q: "Lighting from behind is?", a: "Back light", options: ["Back light", "Low light", "Side light", "Front light"], hint: "Mock Q3.", why: "Back lighting creates shadow silhouette effects." },
        { q: "Vocal tone is an...?", a: "Audio Code", options: ["Audio Code", "Visual Code", "Symbolic Code", "Technical Code"], hint: "Spec 2.5.", why: "Pitch and volume carry meaning." },
        { q: "Camera angle showing power?", a: "Low angle", options: ["Low angle", "High angle", "Eye level", "Close up"], hint: "Looking up.", why: "Low angles make subjects look dominant." },
        { q: "Transition fading one image?", a: "Dissolve", options: ["Dissolve", "Jump cut", "Static", "Aspect Ratio"], hint: "Smooth.", why: "Dissolves are smooth visual transitions." },
        { q: "Slogan is a...?", a: "Written Code", options: ["Written Code", "Technical Code", "Audio Code", "Symbolic Code"], hint: "Spec 2.5.", why: "Language and text are written codes." },
        { q: "Frame composition is?", a: "Mise-en-scene", options: ["Mise-en-scene", "Typography", "FPS", "Bit Depth"], hint: "Spec 2.5.", why: "Mise-en-scene is the overall look of a shot." },
        { q: "Transition with sharp jump?", a: "Jump cut", options: ["Jump cut", "Dissolve", "Fade out", "Zoom"], hint: "Sudden.", why: "Jump cuts are abrupt visual changes." },
        { q: "Symbolic color for nature?", a: "Green", options: ["Green", "Red", "Blue", "Black"], hint: "Meaning.", why: "Green is a symbolic code for growth and nature." },
        { q: "Side angle lighting creates?", a: "Depth/Texture", options: ["Depth/Texture", "Flat look", "Silhouette", "Overexposure"], hint: "Side shadow.", why: "Side lighting emphasizes 3D shapes." },
        { q: "Color representing danger is?", a: "Red", options: ["Red", "Green", "White", "Blue"], hint: "Meaning.", why: "Red is a symbolic code for hazard or warning." },
        { q: "Shot for emotions?", a: "Close up", options: ["Close up", "Long shot", "Wide", "Aerial"], hint: "Face.", why: "Close ups reveal character feelings." },
        { q: "Practical lighting is?", a: "In the scene", options: ["In the scene", "Studio gear", "Edited in", "Invisible"], hint: "Mock Q3 choice C.", why: "Practical lights are props like lamps in the shot." },
        { q: "Eye-level shot creates?", a: "Neutrality", options: ["Neutrality", "Power", "Weakness", "Confusion"], hint: "Direct.", why: "Eye-level shots make the viewer feel equal to the subject." },
        { q: "Camera panning means?", a: "Moving horizontally", options: ["Moving horizontally", "Moving vertically", "Zooming in", "Turning off"], hint: "Side to side.", why: "Panning is a technical code for side-to-side camera motion." },
        { q: "High-key lighting is?", a: "Bright and even", options: ["Bright and even", "Dark and moody", "Only from behind", "Green colored"], hint: "Spec 2.5.", why: "High-key lighting is used for upbeat or clear scenes." },
        { q: "Low-key lighting is?", a: "Dark and moody", options: ["Dark and moody", "Bright and even", "Natural light", "Digital light"], hint: "Shadows.", why: "Low-key lighting creates high contrast and drama." },
        { q: "Rule of thirds is a?", a: "Visual Code", options: ["Visual Code", "Audio Code", "Written Code", "Legal Code"], hint: "Composition.", why: "It is a standard technique for framing visual assets." },
        { q: "A character's costume is part of?", a: "Mise-en-scene", options: ["Mise-en-scene", "Sample Rate", "File Format", "Work Plan"], hint: "Visuals.", why: "Costumes are visual elements within the scene composition." },
        { q: "Deep focus means?", a: "Everything is sharp", options: ["Everything is sharp", "Only front is sharp", "Only back is sharp", "Everything is blurry"], hint: "Depth.", why: "Deep focus keeps both foreground and background clear." },
        { q: "A fast-paced edit shows?", a: "Excitement/Action", options: ["Excitement/Action", "Peace/Calm", "Boredom", "Sadness"], hint: "Speed.", why: "Quick transitions create a sense of energy." }
    ],

    "3.1 Work Plans": [
        { q: "Workflow sequence doc?", a: "Work Plan", options: ["Work Plan", "Mood Board", "Mind Map", "Asset Log"], hint: "Mock Page 3.", why: "Work plans organize task order." },
        { type: "visual", doc_type: "Work Plan", q: "What does the diamond shape (Component B) represent?", a: "Milestone", options: ["Milestone", "Task", "Contingency", "Resource"], hint: "Key date.", why: "Diamonds signify key deadlines (Milestones) in work plans." },
        { type: "visual", doc_type: "Work Plan", q: "What do rectangles represent in a Gantt Chart?", a: "Task", options: ["Task", "Milestone", "Contingency", "Resource"], hint: "Mock Page 3.", why: "Rectangles show the duration of specific activities." },
        { q: "Extra time added to a plan for delays is called...?", a: "Contingency", options: ["Contingency", "Milestone", "Asset", "Task"], hint: "Spec 3.1.", why: "Contingency is buffer time for unexpected issues." },
        { q: "Phase of production for a graphic artist?", a: "Production", options: ["Pre-production", "Production", "Post-production", "Distribution"], hint: "Mock Q12a.", why: "Asset creation generally happens during the Production phase." },
        { q: "Software to create an asset log?", a: "Spreadsheet", options: ["Spreadsheet", "Graphics Editor", "Media Player", "Video Editor"], hint: "Mock Q12c.", why: "Spreadsheets are ideal for listing file names and properties." },
        { q: "First phase of media production?", a: "Pre-production", options: ["Pre-production", "Production", "Post-production", "Distribution"], hint: "Spec 3.1.", why: "Pre-production is the initial planning and design stage." },
        { q: "Final phase of production?", a: "Post-production", options: ["Post-production", "Pre-production", "Production", "Brainstorming"], hint: "Spec 3.1.", why: "Post-production involves editing and final polishing of assets." },
        { q: "A project milestone represents?", a: "A key completion point", options: ["A key completion point", "A software name", "A color palette", "A file format"], hint: "Deadline.", why: "Milestones are major stages of completion (e.g. 'Draft 1 Finished')." },
        { q: "Resource planning includes?", a: "Hardware and Software", options: ["Hardware and Software", "Audience age", "Legal issues", "Copyright"], hint: "Tools.", why: "You must plan what tools (resources) are needed to complete tasks." },
        { q: "Why use software for a work plan?", a: "Easy to update/share", options: ["Easy to update/share", "It is cheaper", "It looks better", "It records audio"], hint: "Digital benefit.", why: "Digital plans are easily edited and shared with the team." },
        { q: "Planning task order is?", a: "Workflow", options: ["Workflow", "Asset", "Recce", "Brief"], hint: "Spec 3.1.", why: "Workflow is the logical sequence of work." },
        { q: "Vertical lines in Gantt usually represent?", a: "Time markers", options: ["Time markers", "Tasks", "Milestones", "Resources"], hint: "Dates.", why: "Vertical grid lines track time (days/weeks/months)." },
        { q: "A project schedule is part of which topic?", a: "Work Plan", options: ["Work Plan", "Legal", "Sector", "Codes"], hint: "Timeline.", why: "Schedules define the tasks and timescales for the project." },
        { q: "Identifying Component A in a Gantt usually means?", a: "Task duration", options: ["Task duration", "Audio level", "Frame rate", "Color depth"], hint: "Rectangle.", why: "Rectangles are the most common component, representing tasks." },
        { q: "Component B on the Mock workplan represents?", a: "Milestone", options: ["Milestone", "Task", "Workflow", "Resource"], hint: "Mock Q4.", why: "Diamonds indicate a key completion point or deadline." },
        { q: "Software best for a project schedule?", a: "Project Management Software", options: ["Project Management Software", "Photo Editor", "Browser", "Media Player"], hint: "Spec 3.1.", why: "Tools like Gantt software are designed specifically for planning." },
        { q: "Sequence of tasks is shown in a?", a: "Workflow", options: ["Workflow", "Asset Log", "Script", "Ethos"], hint: "Spec 3.1.", why: "Workflow defines the order in which tasks are completed." },
        { q: "Which plan tracks individual job assignments?", a: "Task allocation", options: ["Task allocation", "Mood Board", "Mind Map", "Asset Log"], hint: "People.", why: "Allocating tasks ensures every team member knows their job." },
        { q: "Drafting deadlines is part of?", a: "Pre-production", options: ["Pre-production", "Production", "Post-production", "Distribution"], hint: "Start.", why: "Deadlines must be set before any creation begins." }
    ],

    "3.2 Support for Ideas Generation": [
        { type: "visual", doc_type: "Mind Map", q: "In a Mind Map, what does the central node (Component A) represent?", a: "Main Theme", options: ["Main Theme", "Sub-topic", "Task Duration", "Resource List"], hint: "Starting point.", why: "Mind maps branch outward from a single central idea theme." },
        { type: "visual", doc_type: "Mood Board", q: "What is the primary purpose of a Mood Board?", a: "Define style/feel", options: ["Define style/feel", "Record sound", "Plan budget", "Code a site"], hint: "Spec 3.2.", why: "Mood boards collect images/colors to set a visual tone." },
        { q: "Doc for visual inspiration?", a: "Mood Board", options: ["Mood Board", "Storyboard", "Script", "Work Plan"], hint: "Visual feel.", why: "Mood boards set visual tone." },
        { q: "Doc for node branches?", a: "Mind Map", options: ["Mind Map", "Visualisation", "Wireframe", "Gantt Chart"], hint: "Ideas.", why: "Mind maps link central ideas to sub-topics." },
        { q: "Why is a Mind Map used in pre-production?", a: "Support ideas generation", options: ["Support ideas generation", "Log assets", "Check safety", "Apply for copyright"], hint: "Spec 3.2.", why: "Mind maps help organize brainstorming into a structured format." },
        { type: "visual", doc_type: "Mood Board", q: "Which of these would NOT be on a Mood Board?", a: "Task Milestone", options: ["Task Milestone", "Color Swatch", "Font Style", "Fabric Texture"], hint: "Planning vs Style.", why: "Milestones belong in Work Plans, not Mood Boards." },
        { q: "What defines visual feel on a Mood Board?", a: "Images and Textures", options: ["Images and Textures", "Spreadsheet cells", "Code snippets", "Risk levels"], hint: "Artistic.", why: "Physical or digital textures set the aesthetic style." },
        { q: "The first pre-production document created is?", a: "Mind Map", options: ["Mind Map", "Work Plan", "Storyboard", "Asset Log"], hint: "Idea stage.", why: "Mind maps support the initial brainstorming and ideas generation phase." },
        { q: "Identifying Component A in a Mind Map means?", a: "Central Node", options: ["Central Node", "Branch", "Leaf", "Milestone"], hint: "Center.", why: "The central node contains the main project theme." },
        { q: "Mood Boards help a client understand?", a: "Visual Identity/Ethos", options: ["Visual Identity/Ethos", "Total Cost", "Delivery Date", "Asset Locations"], hint: "Identity.", why: "It helps the client visualize the brand's 'look and feel'." },
        { q: "Branches in a Mind Map show?", a: "Topic connections", options: ["Topic connections", "Project timing", "Budget limits", "Legal laws"], hint: "Link.", why: "They visually connect the main theme to sub-ideas." },
        { q: "Nodes in a Mind Map contain?", a: "Sub-topics", options: ["Sub-topics", "Time markers", "Hardware lists", "Slogans"], hint: "Circles.", why: "Nodes represent specific ideas branching from the theme." },
        { q: "A digital mood board is built using?", a: "Graphics Software", options: ["Graphics Software", "Database", "Browser console", "Compiler"], hint: "Drawing.", why: "Graphic tools (like Photoshop/Canva) allow for collage creation." },
        { q: "Mood boards can include which auditory link?", a: "Sound samples", options: ["Sound samples", "Silent text", "Invisible code", "File sizes"], hint: "Hearing.", why: "Digital mood boards often include audio for sensory inspiration." },
        { q: "Mind Mapping software allows for?", a: "Collaboration", options: ["Collaboration", "Physical printing only", "Lower DPI", "Lossy compression"], hint: "Teamwork.", why: "Teams can brainstorm together on a shared digital map." },
        { q: "Mood Boards are subjective because?", a: "They focus on feelings", options: ["They focus on feelings", "They use numbers", "They are legal docs", "They track time"], hint: "Emotional.", why: "Design styles are felt differently by different people." },
        { q: "Which topic is best explored by a Mind Map?", a: "Game Character ideas", options: ["Game Character ideas", "Server maintenance", "Budget totals", "Legal defense"], hint: "Creative.", why: "Creative concepts are perfect for branching exploration." },
        { q: "What can a producer extract from a Mood Board?", a: "Style cues", options: ["Style cues", "Milestones", "Workflows", "Safety hazards"], hint: "Art.", why: "Producers use it to guide the actual asset design." },
        { q: "Mind maps help identify which brief factor?", a: "Keywords", options: ["Keywords", "Lossy files", "FPS rate", "Sample bits"], hint: "Words.", why: "Brainstorming helps find core themes from the brief." },
        { q: "Mood boards help maintain which design factor?", a: "Ethos", options: ["Ethos", "Download speed", "DPI level", "Frame rate"], hint: "Identity.", why: "They ensure the style matches the client's core values." }
    ],

    "3.3 Design Documents": [
        { type: "visual", doc_type: "Wireframe", q: "Which design document focuses on structure rather than color?", a: "Wireframe", options: ["Wireframe", "Mood Board", "Visualisation", "Mind Map"], hint: "Mock Page 11.", why: "Wireframes are structural blueprints for digital products." },
        { type: "visual", doc_type: "Visualisation", q: "What are 'Annotations' used for on a visualisation diagram?", a: "Explain choices", options: ["Explain choices", "Write dialogue", "Track time", "List assets"], hint: "Mock Q14a.", why: "Annotations explain design choices to the creator." },
        { type: "visual", doc_type: "Storyboard", q: "Which document uses panels to show camera angles?", a: "Storyboard", options: ["Storyboard", "Mind Map", "Visualisation", "Wireframe"], hint: "Spec 3.3.", why: "Storyboards plan the sequence of a moving image product." },
        { q: "Best diagram for a magazine's front cover layout?", a: "Visualisation Diagram", options: ["Visualisation Diagram", "Storyboard", "Script", "Workplan"], hint: "Static page.", why: "Visualisations are for static one-page layouts." },
        { q: "Doc for panel angles and camera shots?", a: "Storyboard", options: ["Storyboard", "Script", "Flow Chart", "Wireframe"], hint: "Moving image.", why: "Storyboards plan scene flow." },
        { q: "Static layout sketch with images/text?", a: "Visualisation Diagram", options: ["Visualisation Diagram", "Storyboard", "Work Plan", "Recce"], hint: "Spec 3.3.", why: "Visualisations plan static layouts." },
        { q: "Digital interface skeleton with no detail?", a: "Wireframe", options: ["Wireframe", "Mood Board", "Visualisation", "Script"], hint: "Mock Page 11.", why: "Wireframes focus on site function." },
        { q: "Document for dialogue and stage directions?", a: "Script", options: ["Script", "Storyboard", "Mood Board", "Mind Map"], hint: "Spec 3.3.", why: "Scripts plan spoken words and character actions." },
        { q: "Who is the primary user of a Wireframe?", a: "Web Developer", options: ["Web Developer", "Accountant", "Script Writer", "Focus Group"], hint: "Build.", why: "Developers use wireframes to know where to code functionality." },
        { q: "Visualisation diagram defining borders is?", a: "Aspect Ratio", options: ["Aspect Ratio", "File Size", "Sample Rate", "Bit Depth"], hint: "Width vs Height.", why: "The diagram's frame must match the final product's aspect ratio." },
        { q: "Wireframe element shown as box with 'X'?", a: "Image Placeholder", options: ["Image Placeholder", "Video Link", "Search Bar", "Login Button"], hint: "Layout.", why: "An 'X' box indicates where a graphic will be placed." },
        { q: "Storyboard 'Time' column tracks?", a: "Scene duration", options: ["Scene duration", "Project deadline", "Task start", "Asset cost"], hint: "Seconds.", why: "Storyboards track the timing of each visual sequence." },
        { q: "Visualisation Diagram components include?", a: "Typography/Assets", options: ["Typography/Assets", "Contingency", "Risk level", "MP4 format"], hint: "Visual elements.", why: "Layout diagrams plan assets and text placement." },
        { q: "A script is required for which role?", a: "Voice Actor", options: ["Voice Actor", "Graphic Designer", "Web Developer", "Asset Logger"], hint: "Speaking.", why: "Actors read the dialogue written in the script." },
        { q: "Component 'A' in the Mock visualisation is?", a: "Masthead", options: ["Masthead", "Milestone", "Contingency", "Recce"], hint: "Top title.", why: "The masthead is the main title area on a magazine." },
        { q: "Why annotate a visualisation diagram?", a: "Inform the artist", options: ["Inform the artist", "Apply for copyright", "Check safety", "Pay the client"], hint: "Explanation.", why: "Annotations describe design intent to the person building the product." },
        { q: "Which layout doc is best for an App interface?", a: "Wireframe", options: ["Wireframe", "Storyboard", "Mind Map", "Recce"], hint: "Interactive.", why: "Wireframes map out buttons and functional areas." },
        { q: "A rough sketch of a logo design is a?", a: "Visualisation Diagram", options: ["Visualisation Diagram", "Script", "Asset Log", "Workplan"], hint: "Static.", why: "Visualisations plan the look of logos and graphics." },
        { q: "Camera directions (Pan, Zoom) appear in?", a: "Storyboards", options: ["Storyboards", "Mind Maps", "Mood Boards", "Wireframes"], hint: "Movement.", why: "Technical camera cues are essential in storyboards." },
        { q: "Which document plans the flow of a scene?", a: "Storyboard", options: ["Storyboard", "Asset Log", "Wireframe", "Risk Assessment"], hint: "Order.", why: "Storyboards show the sequence of shots." }
    ],

    "3.4 Legal & Safety": [
        { q: "Explain one way libel laws could affect magazine content.", a: "Restrict false claims", options: ["Restrict false claims", "Change font size", "Lower resolution", "Increase price"], hint: "Mock Q15.", why: "Libel is written defamation; accuracy is required." },
        { q: "Exclusive rights for a creator are...?", a: "Intellectual Property", options: ["Intellectual Property", "Data Protection", "Health & Safety", "Privacy"], hint: "Mock Q5.", why: "IP rights like copyright protect original work from theft." },
        { q: "What is the difference between Libel and Slander?", a: "Written vs Spoken", options: ["Written vs Spoken", "Legal vs Illegal", "UK vs USA", "Permanent vs Temporary"], hint: "Permanence.", why: "Libel is permanent (written), Slander is transient (spoken)." },
        { q: "Which body regulates UK TV and Radio?", a: "Ofcom", options: ["ASA", "BBFC", "Ofcom", "PEGI"], hint: "Spec 3.4.3.", why: "Ofcom is the government broadcast regulator." },
        { q: "What is the purpose of a watermark?", a: "Identify ownership", options: ["Identify ownership", "Increase quality", "Decrease size", "Target audience"], hint: "Mock Q13b.", why: "Watermarks discourage image theft." },
        { q: "Which act covers personal data collection?", a: "Data Protection Act", options: ["Copyright Act", "Data Protection Act", "H&S Act", "Equality Act"], hint: "GDPR.", why: "It regulates how digital personal data is handled." },
        { q: "What allows limited use of copyright for education?", a: "Fair Dealing", options: ["Watermarking", "Fair Dealing", "Patents", "Trademarks"], hint: "Spec 3.4.2.", why: "Fair Dealing is a legal exception for research." },
        { q: "What does PEGI regulate?", a: "Digital Games", options: ["Film", "Digital Games", "Radio", "Websites"], hint: "Gaming.", why: "PEGI provides age ratings for games." },
        { q: "Which certification is set by the BBFC?", a: "Film ratings", options: ["Film ratings", "Ad standards", "Game ratings", "Data usage"], hint: "Cinema.", why: "The BBFC classifies movies for the UK." },
        { q: "Document for hazards before a shoot?", a: "Risk Assessment", options: ["Risk Assessment", "Asset Log", "Script", "Work Plan"], hint: "Safety.", why: "Risk assessments identify hazards and control measures." },
        { q: "Trip hazard prevention on a set?", a: "Tape down cables", options: ["Tape down cables", "Brighter screen", "Adjust chair", "New mouse"], hint: "Floors.", why: "Cables cause falls; securing them is vital." },
        { q: "RSI prevention at a computer?", a: "Ergonomic keyboard", options: ["Ergonomic keyboard", "Faster internet", "Small screen", "Dark room"], hint: "Hands.", why: "Ergonomics reduce repetitive strain injuries." },
        { q: "Site safety visit is called...?", a: "Recce", options: ["Recce", "Mind Map", "Mood board", "Wireframe"], hint: "Spec 3.4.4.", why: "Recces identify physical hazards on location." },
        { q: "How many years does copyright last after death?", a: "70 Years", options: ["70 Years", "10 Years", "100 Years", "50 Years"], hint: "Spec 3.4.2.", why: "Standard UK copyright lasts for the creator's life plus 70 years." },
        { q: "Which body regulates UK advertising?", a: "ASA", options: ["ASA", "Ofcom", "BBFC", "PEGI"], hint: "Spec 3.4.3.", why: "The Advertising Standards Authority ensures ads are honest." },
        { q: "What is 'Public Domain' material?", a: "No copyright active", options: ["No copyright active", "Secret data", "Government data", "Digital games"], hint: "Free use.", why: "Work enters public domain when protection expires." },
        { q: "Which law protects an inventor's mechanism?", a: "Patent", options: ["Patent", "Copyright", "Libel", "ASA"], hint: "Function.", why: "Patents protect functional inventions." },
        { q: "Symbol representing a company?", a: "Trademark", options: ["Trademark", "Copyright", "Fair Dealing", "Slander"], hint: "Logo.", why: "Trademarks protect branding and logos." },
        { q: "Breaking copyright can lead to...?", a: "Legal prosecution/Fines", options: ["Legal prosecution/Fines", "Better SEO", "Faster downloads", "Higher DPI"], hint: "Consequence.", why: "Copyright infringement is a legal offence." },
        { q: "Safe working is whose job?", a: "Everyone", options: ["Everyone", "Client only", "Public only", "Editor only"], hint: "Legal duty.", why: "Health and Safety is a collective responsibility." }
    ],

    "4.1 Distribution Platforms": [
        { q: "Identify two online distribution platforms.", a: "App Store & Website", options: ["App Store & Website", "DVD & USB", "CD & Paper", "Kiosks"], hint: "Mock Q13d.", why: "Internet-based platforms allow instant digital reach." },
        { q: "Offline distribution includes...?", a: "Memory Sticks", options: ["Memory Sticks", "Cloud Storage", "Web Streaming", "App Stores"], hint: "Physical.", why: "USB sticks are physical, offline storage media." },
        { q: "Streaming services use which distribution?", a: "Online/Web", options: ["Online/Web", "Analogue", "Print", "Kiosks"], hint: "Internet.", why: "Streaming requires a web connection for real-time access." },
        { q: "Choice of platform depends on which factor?", a: "Target Audience", options: ["Target Audience", "Room lighting", "Keyboard color", "Mouse speed"], hint: "User.", why: "You must distribute where your audience actually goes." },
        { q: "A PDF is used for distribution because?", a: "Universal Layout", options: ["Universal Layout", "Higher Resolution", "Editable logic", "Video Editing"], hint: "Consistency.", why: "PDFs look the same on all devices." },
        { q: "Which platform is best for reaching commuters?", a: "Mobile App/Podcast", options: ["Mobile App/Podcast", "Desktop Site", "Billboard", "Cinema Screen"], hint: "Travel.", why: "Commuters use portable digital media on the move." },
        { q: "A characteristic of 'Offline' media is?", a: "No internet needed", options: ["No internet needed", "Requires login", "Updates automatically", "Always 4K"], hint: "Spec 4.1.", why: "Offline products (like DVDs) work without a web connection." },
        { q: "Which platform allows user comments?", a: "Social Media", options: ["Social Media", "Billboard", "Radio Show", "Poster"], hint: "Interaction.", why: "Social media platforms are interactive and social." },
        { q: "Distributing a product via an App Store is?", a: "Digital Distribution", options: ["Digital Distribution", "Physical Distribution", "Legacy Distribution", "Analogue"], hint: "Online.", why: "App stores are portals for digital software downloads." },
        { q: "The benefit of Online distribution is?", a: "Global reach", options: ["Global reach", "High physical cost", "Zero electricity", "Paper based"], hint: "World.", why: "The web allows products to reach anyone worldwide." },
        { q: "Kiosks are a type of distribution for?", a: "Physical Locations", options: ["Physical Locations", "Global Web", "VR Headsets", "Radio Waves"], hint: "In person.", why: "Digital kiosks are found in malls or airports for local use." },
        { q: "Which platform is best for high-definition film?", a: "Blu-ray/4K Stream", options: ["Blu-ray/4K Stream", "SD Card", "Radio", "Newspaper"], hint: "Quality.", why: "High storage/bandwidth is needed for HD video distribution." },
        { q: "A printed travel guide uses which platform?", a: "Paper/Print", options: ["Paper/Print", "Cloud", "App Store", "Social Media"], hint: "Physical.", why: "Traditional guides are physical print products." },
        { q: "Podcast distribution usually happens via?", a: "Audio Portals", options: ["Audio Portals", "Photo sites", "PDF links", "Excel files"], hint: "Sound.", why: "Podcasts are hosted on audio-specific platforms (e.g. Spotify)." },
        { q: "Online distribution usually allows for?", a: "Automatic updates", options: ["Automatic updates", "Higher print cost", "Zero resolution", "Lossless only"], hint: "Digital.", why: "Digital files can be replaced on a server with newer versions." },
        { q: "E-mail distribution is suitable for?", a: "Newsletters", options: ["Newsletters", "Feature Films", "Large VR Games", "High-res Databases"], hint: "Spec 4.1.", why: "Emails are perfect for small, text-heavy digital documents." },
        { q: "Distribution 'Considerations' include?", a: "File Size/Bandwidth", options: ["File Size/Bandwidth", "Keyboard type", "Mouse speed", "Screen color"], hint: "Tech limits.", why: "Producers must ensure the file isn't too big to download." },
        { q: "Physical distribution disadvantage?", a: "Manufacturing cost", options: ["Manufacturing cost", "No internet needed", "Global reach", "Instant updates"], hint: "Making stuff.", why: "Printing and shipping physical goods is expensive." },
        { q: "Which is a 'Broadcast' platform?", a: "Radio/TV", options: ["Radio/TV", "App Store", "Cloud", "SD Card"], hint: "Legacy.", why: "Broadcasting sends signals from a transmitter to receivers." },
        { q: "VR products are usually distributed via?", a: "Dedicated Game Stores", options: ["Dedicated Game Stores", "Radio Waves", "Printed Posters", "Audio CDs"], hint: "Oculus/Steam.", why: "Immersive software requires specific digital storefronts." }
    ],

    "4.2 File Properties": [
        { q: "What does PPI stand for?", a: "Pixels Per Inch", options: ["Pixels Per Inch", "Photo Part Index", "Point Paper Info", "Pixel Point Index"], hint: "Mock Q13c.", why: "PPI measures digital image resolution density." },
        { q: "Which is a 'Lossless' image format?", a: "PNG", options: ["JPG", "MP3", "PNG", "GIF"], hint: "Spec 4.2.2.", why: "PNG preserves all data when compressed." },
        { q: "Audio capture pieces of data per second?", a: "Sample Rate", options: ["Sample Rate", "DPI", "Bit Depth", "Resolution"], hint: "Mock Q6.", why: "Higher sample rates result in more audio detail." },
        { q: "Compression that permanently deletes data?", a: "Lossy", options: ["Lossy", "Lossless", "Vector", "Raster"], hint: "Mock Q13e.", why: "Lossy compression sacrifices quality for size." },
        { q: "Format best for high-quality printing?", a: "TIFF", options: ["TIFF", "JPG", "GIF", "PNG"], hint: "Large files.", why: "TIFF is an uncompressed, high-detail format." },
        { q: "Which file format is a vector graphic?", a: "SVG", options: ["SVG", "JPG", "BMP", "PNG"], hint: "Scalable.", why: "SVG graphics can scale without blur." },
        { q: "Digital video quality property?", a: "Frame Rate", options: ["Frame Rate", "DPI", "Bit Depth", "Resolution"], hint: "Smoothness.", why: "Higher FPS (frames per second) is smoother." },
        { q: "Compression for logo with transparency?", a: "PNG", options: ["PNG", "JPG", "MP4", "WAV"], hint: "Spec 4.2.2.", why: "PNG supports transparency and maintains quality." },
        { q: "Standard web image resolution?", a: "72 PPI", options: ["72 PPI", "300 DPI", "1080p", "4K"], hint: "Screens.", why: "72 PPI is standard for computer monitors." },
        { q: "Common web streaming video format?", a: "MP4", options: ["MP4", "TIFF", "WAV", "SVG"], hint: "Spec 4.2.3.", why: "MP4 is compressed and web-compatible." },
        { q: "DPI stands for?", a: "Dots Per Inch", options: ["Dots Per Inch", "Digital Picture Info", "Data Point Index", "Depth Pixel Index"], hint: "Printing.", why: "DPI measures physical printer density." },
        { q: "Which property relates to audio clarity?", a: "Bit Depth", options: ["Bit Depth", "Sample Rate", "Resolution", "DPI"], hint: "Sound bits.", why: "Bit depth measures audio data resolution." },
        { q: "High-definition video standard?", a: "1080p", options: ["1080p", "SD", "Mono", "WAV"], hint: "Screens.", why: "1080p is the standard Full HD resolution." },
        { q: "A raster graphic consists of...?", a: "Pixels", options: ["Pixels", "Maths Equations", "Cables", "Vectors"], hint: "Grid.", why: "Raster images are grids of colored pixels." },
        { q: "Scaling a raster image too much causes?", a: "Pixelation", options: ["Pixelation", "Higher color", "Lower file size", "Faster loading"], hint: "Blurry.", why: "Stretching pixels makes the image look blocky." },
        { q: "Which audio format is lossy?", a: "MP3", options: ["MP3", "WAV", "AIFF", "TIFF"], hint: "Small sound file.", why: "MP3 removes sound data to keep files tiny." },
        { q: "Color depth is measured in?", a: "Bits", options: ["Bits", "DPI", "FPS", "Sample Rate"], hint: "Spec 4.2.2.", why: "Color depth defines the range of colors available per pixel." },
        { q: "Lossless compression is used for?", a: "Keeping maximum quality", options: ["Keeping maximum quality", "Fastest download", "Smallest storage", "Worst color"], hint: "Preserve.", why: "Lossless ensures no data is lost during compression." },
        { q: "A transparent background requires which property?", a: "Alpha Channel", options: ["Alpha Channel", "Sample Rate", "DPI", "Frame Rate"], hint: "Logic.", why: "The alpha channel stores transparency data in image files." },
        { q: "Metadata in a file includes?", a: "Copyright/Artist info", options: ["Copyright/Artist info", "Actual video data", "Audio waves", "Pixel colors"], hint: "Hidden info.", why: "Metadata is hidden data about the file's properties." }
    ],

    // --- PAST PAPER TOPIC AREAS ---
    "Topic Area 1: The media industry": [
        { q: "[PAST PAPER] Which one of the following is a traditional media product?", a: "Radio programme", options: ["Radio programme", "Video game", "Website", "Social media app"], hint: "Think about products that existed before the internet.", why: "Radio is a traditional broadcast medium, whereas the others are interactive/new media." },
        { q: "[PAST PAPER] Which job role is responsible for the overall creative vision of a media product?", a: "Creative Director", options: ["Creative Director", "Production Manager", "Copy Writer", "Web Designer"], hint: "Who directs the creativity?", why: "The Creative Director oversees the artistic direction and ensures the product meets the client's ethos." },
        { q: "[PAST PAPER] What type of product is an e-book?", a: "Digital Publishing", options: ["Digital Publishing", "Moving Image", "Traditional Publishing", "Audio"], hint: "It is published, but not on paper.", why: "e-books fall under the Digital Publishing sector of new media." },
        { q: "[PAST PAPER] Identify a purpose of a focus group when developing a new media product.", a: "To gather detailed qualitative opinions", options: ["To gather detailed qualitative opinions", "To get thousands of quick responses", "To test the final code for bugs", "To check health and safety"], hint: "Focus groups are about deep discussions.", why: "Focus groups allow creators to ask follow-up questions and get deep, qualitative feedback from the target audience." },
        { q: "[PAST PAPER] Which one of the following is a traditional media product?", a: "Radio programme", options: ["Radio programme", "Video game", "Website", "Social media app"], hint: "Think about products that existed before the internet.", why: "Radio is a traditional broadcast medium, whereas the others are interactive/new media." },
        {
            type: "typed",
            q: "[PAST PAPER] Identify two job roles that would be involved in the creation of a digital comic book. (2 marks)",
            hint: "Who writes it? Who draws it?",
            why: "MARK SCHEME (1 mark per valid role):\n- Illustrator / Artist\n- Writer / Scriptwriter\n- Editor\n- Graphic Designer\n- Colourist"
        }
    ],

    "Topic Area 2: Factors influencing product design": [
        { q: "[PAST PAPER] Which of these is an example of primary research?", a: "Online survey", options: ["Online survey", "Internet search", "Magazine article", "Census data"], hint: "Which one do you conduct yourself?", why: "An online survey generates new, original data directly from users (Primary)." },
        { q: "[PAST PAPER] Which of these is a demographic audience category?", a: "Age", options: ["Age", "Hobbies", "Buying habits", "Lifestyle"], hint: "Demographics are statistical facts about a person.", why: "Age, gender, and income are fixed demographic categories." },
        { q: "[PAST PAPER] What is meant by a product's 'ethos'?", a: "The core values of the brand", options: ["The core values of the brand", "The target audience age", "The file format used", "The deadline for the project"], hint: "Ethos = Character/Spirit.", why: "Ethos represents the underlying principles, beliefs, and visual identity of a brand." },
        { q: "[PAST PAPER] Explain one way a primary audience affects typography choices.", a: "Age dictates font legibility", options: ["Age dictates font legibility", "It changes the file size", "It alters the sample rate", "It requires lossy compression"], hint: "Who is reading it?", why: "A younger audience might need larger, simpler fonts, while a professional audience expects formal serif/sans-serif fonts." },
        { q: "[PAST PAPER] Which of these is an example of primary research?", a: "Online survey", options: ["Online survey", "Internet search", "Magazine article", "Census data"], hint: "Which one do you conduct yourself?", why: "An online survey generates new, original data directly from users (Primary)." },
        {
            type: "typed",
            q: "[JAN 2019] ProgressWalk would like to see some designs for a smartphone health app home screen. Identify the most suitable pre-production document for this purpose. (1 mark)",
            hint: "Which document shows the layout of a screen?",
            why: "MARK SCHEME:\n- Visualisation diagram\n- Wireframe\n- Mock-up"
        }
    ],

    "Topic Area 3: Pre-production planning": [
        { q: "[PAST PAPER] Which legislation covers the collection and storage of personal user data?", a: "Data Protection Act", options: ["Data Protection Act", "Copyright, Designs and Patents Act", "Equality Act", "Health and Safety at Work Act"], hint: "Think GDPR.", why: "The Data Protection Act regulates how digital personal data is handled by companies." },
        { q: "[PAST PAPER] What is the primary purpose of a risk assessment?", a: "To identify hazards and minimise harm", options: ["To identify hazards and minimise harm", "To log project assets", "To plan the timeline", "To check file formats"], hint: "Keeping people safe.", why: "Risk assessments identify potential dangers on a set/location and implement control measures to stop them." },
        { q: "[PAST PAPER] Which document is used to plan the visual style and feel of a product?", a: "Mood board", options: ["Mood board", "Work plan", "Wireframe", "Asset log"], hint: "Used for inspiration.", why: "Mood boards collect textures, colours, and images to generate a visual theme." },
        { q: "[PAST PAPER] What does a diamond shape represent on a Gantt chart/Work plan?", a: "A Milestone", options: ["A Milestone", "A Task", "A Resource", "Contingency time"], hint: "A key deadline.", why: "Diamonds signify milestones, which are key project completion points or deadlines." },
        { q: "[PAST PAPER] Which legislation covers the collection and storage of personal user data?", a: "Data Protection Act", options: ["Data Protection Act", "Copyright, Designs and Patents Act", "Equality Act", "Health and Safety at Work Act"], hint: "Think GDPR.", why: "The Data Protection Act regulates how digital personal data is handled by companies." },
        {
            type: "typed",
            q: "[JAN 2021] Identify four items that could be included on a digital mood board for a new multimedia interactive book. (4 marks)",
            hint: "Think about what visual and audio elements you can collect digitally.",
            why: "MARK SCHEME (1 mark per item):\n- Images / Photographs\n- Colours / Colour palette\n- Fonts / Typography\n- Graphics / Logos\n- Video clips\n- Audio / Sound clips\n- Textures"
        },
        {
            type: "typed",
            q: "[JAN 2020] Explain the purpose of creating a visualisation diagram for a promotional advert. (2 marks)",
            hint: "Why draw it out before making it digitally?",
            why: "MARK SCHEME:\n- To plan the layout of the advert (1)\n- To show what the final product will look like (1)\n- To share ideas with the client/target audience (1)"
        },
        {
            type: "typed",
            q: "[JUN 2019] Identify two possible audiences for a mind map. (2 marks)",
            hint: "Who needs to look at the ideas generated?",
            why: "MARK SCHEME (1 mark per audience):\n- The client\n- The designer / creator\n- The developers / production team\n- Project manager"
        },
        {
            type: "typed",
            q: "[JAN 2019] Identify three items that could be included in a physical mood board. (3 marks)",
            hint: "Think about things you can physically touch and stick to a board.",
            why: "MARK SCHEME (1 mark per item):\n- Printed photographs / images\n- Fabric / Material / Textures\n- Colour swatches / paint samples\n- Printed text / font samples\n- Annotations / written labels"
        }
    ],

    "Topic Area 4: Distribution considerations": [
        { q: "[PAST PAPER] Which file format is best for a vector logo that requires a transparent background?", a: "SVG", options: ["SVG", "JPG", "MP3", "MP4"], hint: "Scalable Vector Graphics.", why: "SVG is a vector format that supports transparency and scales without losing quality." },
        { q: "[PAST PAPER] What does DPI stand for in print media?", a: "Dots Per Inch", options: ["Dots Per Inch", "Digital Pixel Index", "Data Processing Info", "Document Print Image"], hint: "Printer dots.", why: "DPI measures the physical ink density of a printed image." },
        { q: "[PAST PAPER] Which of the following is an online distribution platform?", a: "Social Media", options: ["Social Media", "CD-ROM", "Printed Magazine", "Kiosk"], hint: "Requires the internet.", why: "Social media requires web connectivity, making it an online distribution method." },
        { q: "[PAST PAPER] Why might a client choose offline distribution (e.g., USB stick) over online?", a: "Target audience lacks internet access", options: ["Target audience lacks internet access", "It is cheaper to print", "Files can be updated instantly", "Higher global reach"], hint: "No Wi-Fi needed.", why: "If a location or audience has poor connectivity, offline physical distribution is required." },
        { q: "[PAST PAPER] Which file format is best for a vector logo that requires a transparent background?", a: "SVG", options: ["SVG", "JPG", "MP3", "MP4"], hint: "Scalable Vector Graphics.", why: "SVG is a vector format that supports transparency and scales without losing quality." },
        {
            type: "typed",
            q: "[PAST PAPER] Identify one file format, other than PDF, that would be suitable to use for exporting a digital mood board. (1 mark)",
            hint: "Think of standard image formats.",
            why: "MARK SCHEME:\n- JPEG / JPG\n- PNG\n- TIFF\n- BMP"
        }
    ],

    "Long Questions (6-12 Marks)": [
        {
            q: "[8 MARKER] Discuss the advantages and disadvantages of using a focus group to gather primary research for a new digital game.",
            a: "Long Answer Mode",
            why: "MARK SCHEME / INDICATIVE CONTENT:\n\nAdvantages:\n- Allows for deep, qualitative data and detailed opinions.\n- The researcher can ask follow-up questions to clarify points.\n- Participants can build on each other's ideas (brainstorming).\n\nDisadvantages:\n- Can be time-consuming and expensive to organise.\n- Small sample size means it might not represent the whole target audience.\n- 'Groupthink' - strong personalities might dominate the discussion and sway others."
        },
        {
            q: "[9 MARKER] Explain how the designer of a website for young children (aged 4-6) would use layout, colour, and typography to meet the needs of the target audience.",
            a: "Long Answer Mode",
            why: "MARK SCHEME / INDICATIVE CONTENT:\n\nLayout:\n- Needs to be simple and intuitive with lots of white space to avoid cognitive overload.\n- Use of large, highly visible buttons for easy interaction (motor skills are developing).\n\nColour:\n- Use of bright, primary colours (Red, Blue, Yellow) to engage and hold attention.\n- High contrast between background and elements to make things stand out.\n\nTypography:\n- Minimal text, heavily reliant on images/icons instead.\n- If text is used, it must be large, sans-serif fonts that are easy to read."
        },
        {
            q: "[12 MARKER] Discuss the legal and ethical issues a media producer must consider when creating a promotional video that includes members of the public.",
            a: "Long Answer Mode",
            why: "MARK SCHEME / INDICATIVE CONTENT:\n\nLegal Issues:\n- Privacy/Data Protection: Need written consent (release forms) to use someone's image.\n- Copyright: Ensuring no background music, logos on clothing, or artwork in the shot infringes on others' IP without permission.\n- Health & Safety: Ensuring the filming location is safe for the public (e.g., taping down cables to prevent trips).\n\nEthical Issues:\n- Representation: Ensuring the public is portrayed fairly and not misrepresented by selective editing.\n- Offence: Ensuring the content does not upset or offend the community.\n- Safe Working: Treating the crew and public with respect during the shoot."
        },
        {
            q: "[12 MARKER - JAN 2021] 'School23' is being developed into a multimedia interactive book. Discuss the strengths and weaknesses of using a mind map to develop ideas for this new interactive book.",
            a: "Long Answer Mode",
            why: "MARK SCHEME / INDICATIVE CONTENT:\n\nStrengths:\n- Good for brainstorming and showing how ideas (characters, plots, settings) link together.\n- Easy to add new nodes/branches as ideas for the interactive book develop.\n- Visual layout helps the production team see the central theme clearly.\n\nWeaknesses:\n- Can become cluttered and difficult to read if too many ideas are added.\n- Doesn't show what the final book will actually look like (unlike a visualisation diagram).\n- May lack detailed technical information needed by the app developers.\n\n*Top Band (9-12 marks): You must apply these points specifically to the context of a 'multimedia interactive book' and discuss both strengths and weaknesses.*"
        },
        {
            q: "[12 MARKER - JAN 2020] 'Urban DuoTeam' is a new city centre-based sports event. Review the suitability of using a mood board to generate ideas for an advertising campaign promoting this new event.",
            a: "Long Answer Mode",
            why: "MARK SCHEME / INDICATIVE CONTENT:\n\nSuitability / Strengths:\n- Excellent for establishing the visual 'feel', theme, or ethos of the urban sports event.\n- Can include colours, textures, and images of mountain biking/running to inspire the graphic designers.\n- Gives the client a quick visual representation of the proposed advertising style.\n\nUnsuitability / Weaknesses:\n- Does not show the layout of the final advert.\n- Cannot show text content, scripts, or specific details like the date and time of the event.\n- Might be misinterpreted by the client if not explained properly.\n\n*Top Band (9-12 marks): You must link directly to the 'Urban DuoTeam' context, discuss both suitability and unsuitability, and use correct subject terminology.*"
        },
        {
            q: "[12 MARKER - JUN 2019] Progressive Museums take mobile museums into primary schools using lorries. Discuss the suitability of using a visualisation diagram for planning large banner posters to be displayed on the side of these lorries.",
            a: "Long Answer Mode",
            why: "MARK SCHEME / INDICATIVE CONTENT:\n\nSuitability / Strengths:\n- Shows exactly what the final banner will look like on the side of the lorry.\n- Allows the designer to plan the layout of text, images, and logos effectively so it can be seen from a distance.\n- The client (Progressive Museums) can see and approve the design before it is sent to be printed.\n\nUnsuitability / Weaknesses:\n- Does not show how the banner will be physically made or what materials to use.\n- Does not provide a timeline or schedule for the project (unlike a work plan).\n- Can be time-consuming to create a detailed mock-up just for early planning.\n\n*Top Band (9-12 marks): You must evaluate the visualisation diagram entirely in the context of the mobile museum banners, weighing up both pros and cons.*"
        }
    ]
};

// --- QUIZ TRAINER ENGINE ---
let quizCurrentQuestions = [];
let quizCurrentIndex = 0;
let quizScore = 0;
let quizTimer;
let quizTimeLeft = 30;
let quizIsTestMode = false;
let quizIsLongMode = false;
let quizCurrentXp = 10; // XP awarded per correct answer in the current session

const QUIZ_PAST_PAPER_TOPICS = [
    "Topic Area 1: The media industry",
    "Topic Area 2: Factors influencing product design",
    "Topic Area 3: Pre-production planning",
    "Topic Area 4: Distribution considerations"
];

// --- ACHIEVEMENTS HELPERS ---
function incrementAchievement(key) {
    const id = 'ach-' + key;
    const next = parseInt(localStorage.getItem(id) || '0', 10) + 1;
    localStorage.setItem(id, next);
    refreshAchievements();
    return next;
}

function refreshAchievements() {
    ['quizzes', 'games', 'cards'].forEach(k => {
        const el = document.getElementById('ach-' + k);
        if (el) el.innerText = parseInt(localStorage.getItem('ach-' + k) || '0', 10);
    });
    // Activities Done lives on the dashboard and depends on these counters
    if (typeof updateXpDisplay === 'function') updateXpDisplay();
}

// --- XP / LEVEL HELPERS ---
function getTotalXp() {
    return parseInt(localStorage.getItem('total-xp') || '0', 10);
}

function addXp(amount) {
    if (!amount) return getTotalXp();
    const total = getTotalXp() + amount;
    localStorage.setItem('total-xp', total);
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

    // Topbar rank avatar
    const rankBadge = document.getElementById('user-rank');
    if (rankBadge) rankBadge.innerText = rank;

    // Topbar level pill
    const topbarLvl = document.querySelector('.user-level .level-label');
    if (topbarLvl) topbarLvl.innerText = `Lv.${lvl}`;
    const topbarFill = document.querySelector('.user-level .level-fill');
    if (topbarFill) topbarFill.style.width = pct + '%';

    // Welcome banner meta (home page only)
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
        // Activities Done (4th card) = sum of all achievements
        const total = ['quizzes','games','cards']
            .reduce((sum, k) => sum + parseInt(localStorage.getItem('ach-' + k) || '0', 10), 0);
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

        const btn = document.createElement('button');
        btn.innerText = topic;
        btn.onclick = () => quizStartSession(topic);

        if (pastPaperTopics.includes(topic)) {
            btn.className = 'past-paper-btn';
            if (pastPapersGrid) pastPapersGrid.appendChild(btn);
        } else {
            btn.className = 'topic-card';
            if (topicGrid) topicGrid.appendChild(btn);
        }
    });
}

function quizStartSession(mode) {
    quizIsTestMode = (mode === 'TEST');
    quizIsLongMode = (mode === 'Long Questions (6-12 Marks)');
    quizScore = 0;
    quizCurrentIndex = 0;

    // Set XP per correct answer based on mode
    if (quizIsTestMode) quizCurrentXp = 20;
    else if (QUIZ_PAST_PAPER_TOPICS.includes(mode)) quizCurrentXp = 50;
    else if (quizIsLongMode) quizCurrentXp = 0;
    else quizCurrentXp = 10;

    if (quizIsTestMode) {
        let allQ = [];
        Object.keys(quizQuestionBank).forEach(k => {
            if (k !== "Long Questions (6-12 Marks)") allQ = allQ.concat(quizQuestionBank[k]);
        });
        quizCurrentQuestions = allQ.sort(() => 0.5 - Math.random()).slice(0, 25);
        document.getElementById('quiz-topic-display').innerText = "FULL EXAM MODE";
    } else {
        if (quizIsLongMode) {
            quizCurrentQuestions = [...quizQuestionBank[mode]];
        } else {
            quizCurrentQuestions = [...quizQuestionBank[mode]].sort(() => 0.5 - Math.random());
        }
        document.getElementById('quiz-topic-display').innerText = `TOPIC: ${mode.toUpperCase()}`;
    }

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

    f.innerHTML = `<h3>Self-Assessment</h3><p style="text-align:left; font-size:1.1rem;">${formattedMarkScheme}</p><p style="color:#f39c12; margin-top:15px; font-weight:bold;">Review your typed answer above against the points in the mark scheme.</p>`;
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
    [...qData.options].sort(() => 0.5 - Math.random()).forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn'; btn.innerText = opt;
        btn.onclick = () => quizHandleAnswer(opt, qData.a, qData.why);
        container.appendChild(btn);
    });
}

function quizHandleAnswer(choice, correct, why) {
    if (typeof quizTimer !== 'undefined') clearInterval(quizTimer);

    const btns = document.querySelectorAll('#quiz-options-container .option-btn');

    const cleanChoice = choice ? choice.trim() : "";
    const cleanCorrect = correct.trim();

    btns.forEach(b => {
        b.disabled = true;
        b.style.opacity = "0.5";

        const btnText = b.innerText.trim();

        if (btnText === cleanCorrect) {
            b.classList.add('correct-answer');
            b.style.opacity = "1";
        }

        if (btnText === cleanChoice && btnText !== cleanCorrect) {
            b.classList.add('wrong-answer');
            b.style.opacity = "1";
        }
    });

    const f = document.getElementById('quiz-feedback-area');
    if (cleanChoice === cleanCorrect) {
        let xpBadge = '';
        if (quizCurrentXp > 0) {
            addXp(quizCurrentXp);
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
    alert("HINT: " + quizCurrentQuestions[quizCurrentIndex - 1].hint);
}

function quizShowMenu() {
    clearInterval(quizTimer);
    loadContent('quiz_trainer');
}

function quizShowResults() {
    document.getElementById('quiz-area').classList.add('hidden');
    document.getElementById('quiz-results-area').classList.remove('hidden');

    if (quizIsLongMode) {
        document.getElementById('quiz-final-score-text').innerText = `Extended Writing Practice Complete!`;
        incrementAchievement('quizzes');
    } else {
        document.getElementById('quiz-final-score-text').innerText = `You scored ${quizScore} / ${quizCurrentQuestions.length}`;
        incrementAchievement('quizzes');
    }
}
