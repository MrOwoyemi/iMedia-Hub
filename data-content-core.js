/* Core pages — the dashboard and the tools. Always loaded.
   Split out of one large file so the dashboard can paint without waiting for
   every page of the site. See loadUnitContent() in script.js. */

var contentData = {
  home: `
    <section class="hero">
      <div class="hero-main">
        <h1 class="hero-title">Welcome back</h1>
        <p class="hero-count">
          <span class="hero-count-num" id="hero-days">&mdash;</span>
          <span class="hero-count-unit" id="hero-days-unit">until the R093 exam</span>
        </p>
        <p class="hero-sub" id="hero-sub">Loading your countdown&hellip;</p>
        <div class="hero-actions">
          <a class="hero-btn" href="#quiz_trainer" onclick="navTo(event, 'quiz_trainer')">Practise exam questions</a>
          <a class="hero-btn hero-btn--ghost" href="#r093_quiz" onclick="navTo(event, 'r093_quiz')">Flip flashcards</a>
        </div>
      </div>

      <div class="hero-progress">
        <div class="level-ring" id="level-ring" role="img" aria-label="Level 1, 0 of 100 XP to the next level">
          <div class="level-ring-inner">
            <span class="level-ring-value" id="hero-level">1</span>
            <span class="level-ring-label">Level</span>
          </div>
        </div>
        <dl class="hero-meta">
          <div><dt>Rank</dt><dd id="hero-rank">F</dd></div>
          <div><dt>Total XP</dt><dd id="hero-xp">0</dd></div>
        </dl>
      </div>

      <div class="banner-monogram" aria-hidden="true">iM</div>
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
        <div id="exam-countdown-body"></div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <h3 class="panel-title">Homework</h3>
          <button class="panel-action-btn" onclick="openHomeworkEditor()" title="Add homework"
            aria-label="Add homework">+</button>
        </div>
        <div id="homework-panel-body"></div>
      </div>
    </section>

    <section class="panel revision-plan">
      <div class="panel-header">
        <h3 class="panel-title">Where to revise next</h3>
      </div>
      <p class="panel-subtitle">Your last score in each topic, weakest first</p>
      <div id="revision-plan-body"></div>
    </section>

    <h2 class="section-title">Quick Start</h2>
    <section class="quickstart-grid">
      <div class="quickstart-card">
        <div class="quickstart-body">
          <h3>Revision Card Quiz</h3>
          <p>Flip-card flashcards covering 130+ R093 keyword definitions.</p>
          <button class="quickstart-btn" onclick="loadContent('r093_quiz')">Flip Cards</button>
        </div>
      </div>

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
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#quiz_trainer" onclick="navTo(event, 'quiz_trainer')">
        <div class="card-image" style="background: var(--pastel-violet); color: var(--brand-surface);">Trainer</div>
        <div class="card-info">
          <h3>R093 Quiz Trainer</h3>
          <p>Full topic practice, 25-question timed exam, and 6-12 mark long answers. </p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_quiz" onclick="navTo(event, 'r093_quiz')">
        <div class="card-image">Quiz</div>
        <div class="card-info">
          <h3>R093 Keyword Flashcards</h3>
          <p>Over 30 essential terms for the written exam. </p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #d32f2f;" href="#legal_sort_game" onclick="navTo(event, 'legal_sort_game')">
        <div class="card-image" style="background: var(--tint-red); color: var(--danger);">Sort</div>
        <div class="card-info">
          <h3>Legal & Ethical Sort</h3>
          <p>Practice identifying Privacy, Defamation, and Copyright scenarios. </p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #1565C0;" href="#format_match_up" onclick="navTo(event, 'format_match_up')">
        <div class="card-image" style="background: var(--tint-blue); color: var(--note-blue);">Match</div>
        <div class="card-info">
          <h3>File Format Match-up</h3>
          <p>Test your knowledge of DPI, PPI, and suitable file formats. </p>
        </div>
      </a>
    </div>

    <h2 class="section-title">NEA Planning Tools</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid #FFD700;" href="#brief_interpreter" onclick="navTo(event, 'brief_interpreter')">
        <div class="card-image" style="background: var(--tint-cream); color: var(--note-amber);">Brief</div>
        <div class="card-info">
          <h3>Client Brief Interpreter</h3>
          <p>Practice breaking down a client brief for the "Eco-Bolt" scenario. </p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #E0BBE4;" href="#timeline_game" onclick="navTo(event, 'timeline_game')">
        <div class="card-image" style="background: var(--pastel-violet); color: var(--brand-surface);">Time</div>
        <div class="card-info">
          <h3>Production Timeline Challenge</h3>
          <p>Drag job roles into Pre-Production, Production, and Post-Production. </p>
        </div>
      </a>
    </div>

    <h2 class="section-title">External Study Tools</h2>
    <a class="card" style="cursor: pointer; border-left: 5px solid #1E7E34;" href="https://mrowoyemi.github.io/iMediaTrainer/" target="_blank" rel="noopener noreferrer">
      <div class="card-info">
        <h3 style="color: var(--note-green);">iMedia Trainer (External)</h3>
        <p>A comprehensive external tool with additional knowledge organisers and quizzes. </p>
      </div>
    </a>
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
        <p>Each topic holds a bank of 30 questions and every sitting draws 10 of them at random, so you can come back to the same topic without seeing the same set.</p>
        <button id="quiz-full-test-btn" onclick="quizStartSession('TEST')">START FULL TEST (25 RANDOM - TIMED)</button>
        <div id="quiz-topic-grid"></div>
      </div>

      <div id="quiz-area" class="hidden">
        <div class="card" style="margin-bottom: 20px;">
          <h2 id="quiz-question-text" style="margin: 0;"></h2>
        </div>

        <div id="quiz-options-container"></div>
        <textarea id="quiz-long-answer-box" class="hidden" rows="8" aria-label="Your extended answer" placeholder="Type your extended answer here..."></textarea>
        <div id="quiz-feedback-area"></div>

        <div id="quiz-nav-controls">
          <button class="leave-btn" onclick="quizShowMenu()">LEAVE TOPIC</button>
          <button id="quiz-hint-btn" onclick="quizShowHint()">NEED A HINT?</button>
          <button id="quiz-continue-btn" class="hidden" onclick="quizNextQuestion()">CONTINUE</button>
        </div>
      </div>

      <div id="quiz-results-area" class="hidden">
        <div class="results-card">
          <p class="results-eyebrow" id="quiz-results-topic"></p>

          <div class="results-headline">
            <div class="score-ring" id="quiz-score-ring" role="img" aria-label="Score">
              <div class="score-ring-inner">
                <span class="score-ring-value" id="quiz-score-fraction">0/10</span>
                <span class="score-ring-label" id="quiz-score-pct">0%</span>
              </div>
            </div>
            <div class="results-verdict">
              <h1 id="quiz-results-title">Session complete</h1>
              <p id="quiz-results-message"></p>
            </div>
          </div>

          <dl class="results-breakdown" id="quiz-results-breakdown">
            <div><dt>Correct</dt><dd id="quiz-results-correct">0</dd></div>
            <div><dt>Missed</dt><dd id="quiz-results-missed">0</dd></div>
            <div id="quiz-results-selfassess-cell" hidden><dt>To self-assess</dt>
              <dd id="quiz-results-selfassess">0</dd></div>
            <div><dt>XP earned</dt><dd id="quiz-results-xp">0</dd></div>
          </dl>

          <div class="results-actions">
            <button class="results-btn" id="quiz-results-retry" onclick="quizRetrySession()">Another 10 from this topic</button>
            <button class="results-btn results-btn--ghost" id="quiz-results-return-btn" onclick="quizShowMenu()">Back to the menu</button>
          </div>
        </div>
      </div>
    </div>
  `,

  // --- UPDATED R093 HUB PAGE ---,

  brief_interpreter: `
  <h1>Client Brief Interpreter</h1>
    <div class="homework-box" style="border-left: 10px solid #FFD700; background: var(--tint-cream);">
      <h2 style="margin-top: 0;">CLIENT BRIEF: "Eco-Bolt" Electric Bikes</h2>
      <p><strong>Scenario:</strong> We need a digital poster for our new high-speed e-bike. It must appeal to 20-30 year old city professionals. You have a budget of £500 and the poster must be finished by next Friday. Use our logo, neon green colors, and a futuristic style.</p>
    </div>

    <div class="card-grid">
      <div class="card">
        <h3>1. Target Audience</h3>
        <input type="text" id="ans_aud" aria-label="Who is the target audience?" placeholder="Who is it for?" style="width: 100%; padding: 8px;">
      </div>
      <div class="card">
        <h3>2. Constraints</h3>
        <input type="text" id="ans_con" aria-label="What is the main constraint?" placeholder="Budget/Timescales?" style="width: 100%; padding: 8px;">
      </div>
      <div class="card">
        <h3>3. Style Requirements</h3>
        <input type="text" id="ans_sty" aria-label="What style is requested?" placeholder="Colors/Theme?" style="width: 100%; padding: 8px;">
      </div>
    </div>

    <button onclick="checkBrief()" style="margin-top: 20px; padding: 15px 30px; background: var(--brand-surface); color: white; border: none; border-radius: 8px; cursor: pointer;">Submit Interpretation</button>
    <div id="brief-feedback" style="margin-top: 15px; font-weight: bold;"></div>
  `,

  // --- R094 HUB PAGE (CORRECTED) ---,

  resources: `
    <h1>Resources</h1>
    <p>Every revision tool, interactive activity, NEA support page and external learning resource available across the iMedia Hub — all in one place.</p>

    <h2 class="section-title">Revision &amp; Quizzes</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_quiz" onclick="navTo(event, 'r093_quiz')">
        <div class="card-image" style="background: var(--pastel-violet); color: var(--brand-surface);">Cards</div>
        <div class="card-info">
          <h3>Revision Card Quiz</h3>
          <p>Flip-card style flashcards for over 130 R093 keyword definitions.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#quiz_trainer" onclick="navTo(event, 'quiz_trainer')">
        <div class="card-image" style="background: var(--pastel-violet); color: var(--brand-surface);">Trainer</div>
        <div class="card-info">
          <h3>R093 Quiz Trainer</h3>
          <p>Topic-by-topic practice, 25-question timed mock test, and 6–12 mark long-answer questions.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #d32f2f;" href="#legal_sort_game" onclick="navTo(event, 'legal_sort_game')">
        <div class="card-image" style="background: var(--tint-red); color: var(--danger);">Sort</div>
        <div class="card-info">
          <h3>Legal &amp; Ethical Sort</h3>
          <p>Drag scenarios into Privacy, Defamation or Copyright categories.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #1565C0;" href="#format_match_up" onclick="navTo(event, 'format_match_up')">
        <div class="card-image" style="background: var(--tint-blue); color: var(--note-blue);">Match</div>
        <div class="card-info">
          <h3>File Format Match-up</h3>
          <p>Test your knowledge of DPI / PPI and the right file format for each output platform.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #E0BBE4;" href="#timeline_game" onclick="navTo(event, 'timeline_game')">
        <div class="card-image" style="background: var(--pastel-violet); color: var(--brand-surface);">Time</div>
        <div class="card-info">
          <h3>Production Timeline Challenge</h3>
          <p>Drag job roles into Pre-Production, Production and Post-Production phases.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #FFD700;" href="#brief_interpreter" onclick="navTo(event, 'brief_interpreter')">
        <div class="card-image" style="background: var(--tint-cream); color: var(--note-amber);">Brief</div>
        <div class="card-info">
          <h3>Client Brief Interpreter</h3>
          <p>Practise breaking down a client brief using the "Eco-Bolt" e-bike scenario.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">R093: Media Industry — Topic Hubs</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r093_hub" onclick="navTo(event, 'r093_hub')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">R093</div>
        <div class="card-info">
          <h3>R093 Hub (All Topic Areas)</h3>
          <p>Sectors, products, job roles, audience, design factors, pre-production and distribution.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer;" href="#ta1" onclick="navTo(event, 'ta1')">
        <div class="card-image">TA1</div>
        <div class="card-info">
          <h3>TA1: The Media Industry</h3>
          <p>Sectors, products, job roles and the production cycle.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer;" href="#ta2" onclick="navTo(event, 'ta2')">
        <div class="card-image">TA2</div>
        <div class="card-info">
          <h3>TA2: Factors Influencing Design</h3>
          <p>Purpose, style, client briefs, audience demographics, research and media codes.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer;" href="#ta3" onclick="navTo(event, 'ta3')">
        <div class="card-image">TA3</div>
        <div class="card-info">
          <h3>TA3: Pre-production Planning</h3>
          <p>Work plans and the full set of pre-production documents (mind maps, mood boards, storyboards, scripts, wireframes, flow charts, asset logs).</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer;" href="#ta4" onclick="navTo(event, 'ta4')">
        <div class="card-image">TA4</div>
        <div class="card-info">
          <h3>TA4: Distribution Considerations</h3>
          <p>Distribution platforms, file formats and properties for image, audio and video.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #FF9800;" href="#r093_3_5" onclick="navTo(event, 'r093_3_5')">
        <div class="card-image" style="background: var(--tint-orange); color: var(--note-orange);">Quick Ref</div>
        <div class="card-info">
          <h3>Pre-Production Quick Reference</h3>
          <p>One-page summary of every pre-production document, its components, software and target users.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">R094: Visual Identity &amp; Digital Graphics</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r094_hub" onclick="navTo(event, 'r094_hub')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">R094</div>
        <div class="card-info">
          <h3>R094 Hub</h3>
          <p>Coursework theory, NEA tasks and design-skills training.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r094_task_1" onclick="navTo(event, 'r094_task_1')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Task 1</div>
        <div class="card-info">
          <h3>Task 1: Visual Identity &amp; Planning</h3>
          <p>Designing the brand identity and planning the digital graphic.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r094_task_2" onclick="navTo(event, 'r094_task_2')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Task 2</div>
        <div class="card-info">
          <h3>Task 2: Creation &amp; Evaluation</h3>
          <p>Creating the digital graphic and saving in correct formats.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r094_guidance" onclick="navTo(event, 'r094_guidance')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Guide</div>
        <div class="card-info">
          <h3>R094 Assessment Guidance</h3>
          <p>Step-by-step help to achieve Mark Band 3 in your NEA.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r094_criteria" onclick="navTo(event, 'r094_criteria')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Marks</div>
        <div class="card-info">
          <h3>R094 Marking Criteria</h3>
          <p>Check your work against the official OCR mark bands.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">R094: Software Skills</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid #1B6FC4;" href="#r094_skill_photoshop" onclick="navTo(event, 'r094_skill_photoshop')">
        <div class="card-image" style="background: #001E36; color: #1B6FC4;">Ps</div>
        <div class="card-info">
          <h3>Adobe Photoshop</h3>
          <p>Industry-standard raster editing, photo manipulation and digital art.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #00747A;" href="#r094_skill_canva" onclick="navTo(event, 'r094_skill_canva')">
        <div class="card-image" style="background: linear-gradient(135deg, #00747A, #7D2AE8); color: white;">Ca</div>
        <div class="card-info">
          <h3>Canva</h3>
          <p>Web-based design tool — great for layouts, mood boards and social-media assets.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #9024A6;" href="#r094_skill_rocketcake" onclick="navTo(event, 'r094_skill_rocketcake')">
        <div class="card-image" style="background: #9024A6; color: white;">Rc</div>
        <div class="card-info">
          <h3>RocketCake</h3>
          <p>Free WYSIWYG website editor for visualising responsive layouts.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #05688F;" href="#r094_skill_maya" onclick="navTo(event, 'r094_skill_maya')">
        <div class="card-image" style="background: #05688F; color: white;">Ma</div>
        <div class="card-info">
          <h3>Autodesk Maya</h3>
          <p>Professional 3D modelling and rendering for product visualisation.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">R096: Animation with Audio</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r096_hub" onclick="navTo(event, 'r096_hub')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">R096</div>
        <div class="card-info">
          <h3>R096 Hub</h3>
          <p>Coursework theory, NEA tasks and animation-skills training.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--brand-surface);" href="#r096_task_1" onclick="navTo(event, 'r096_task_1')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Task 1</div>
        <div class="card-info">
          <h3>Task 1: Planning</h3>
          <p>Interpreting the brief, storyboards, scripts and asset lists for animation.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--brand-surface);" href="#r096_task_2" onclick="navTo(event, 'r096_task_2')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Task 2</div>
        <div class="card-info">
          <h3>Task 2: Creation</h3>
          <p>Building the animation, mixing audio and exporting the final product.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--brand-surface);" href="#r096_task_3" onclick="navTo(event, 'r096_task_3')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Task 3</div>
        <div class="card-info">
          <h3>Task 3: Review</h3>
          <p>Test plans, evaluation and identifying improvements.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--brand-surface);" href="#r096_guidance" onclick="navTo(event, 'r096_guidance')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Guide</div>
        <div class="card-info">
          <h3>R096 Assessment Guidance</h3>
          <p>Full OCR strand guidance for creating animation with audio and reaching MB3.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--brand-surface);" href="#r096_criteria" onclick="navTo(event, 'r096_criteria')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Marks</div>
        <div class="card-info">
          <h3>R096 Marking Criteria</h3>
          <p>Check your animation work against the official OCR mark bands.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">R096: Animation Software</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid #05688F;" href="#r096_skill_maya" onclick="navTo(event, 'r096_skill_maya')">
        <div class="card-image" style="background: #05688F; color: white;">Ma</div>
        <div class="card-info">
          <h3>Autodesk Maya</h3>
          <p>Industry standard for 3D animation, rigging and keyframing.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #C62828;" href="#r096_skill_wick" onclick="navTo(event, 'r096_skill_wick')">
        <div class="card-image" style="background: #C62828; color: white;">Wi</div>
        <div class="card-info">
          <h3>Wick Editor</h3>
          <p>Free, web-based 2D vector animation tool — great for beginners.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #A65A0C;" href="#r096_skill_blender" onclick="navTo(event, 'r096_skill_blender')">
        <div class="card-image" style="background: #A65A0C; color: white;">Bl</div>
        <div class="card-info">
          <h3>Blender</h3>
          <p>Free, open-source software for 3D modelling, rigging and animation.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #673AB7;" href="#r096_skill_pencil2d" onclick="navTo(event, 'r096_skill_pencil2d')">
        <div class="card-image" style="background: #673AB7; color: white;">P2</div>
        <div class="card-info">
          <h3>Pencil2D</h3>
          <p>Simple, free tool for traditional 2D hand-drawn animation.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #2E7D32;" href="#r096_skill_line" onclick="navTo(event, 'r096_skill_line')">
        <div class="card-image" style="background: #2E7D32; color: white;">Ln</div>
        <div class="card-info">
          <h3>Line Drawing</h3>
          <p>Traditional techniques for hand-drawn animation, onion-skinning and rotoscoping.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">External Study Tools</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-left: 5px solid #2563EB;" href="https://senecalearning.com/" target="_blank" rel="noopener noreferrer">
        <div class="card-image" style="background: #2563EB; color: white;">Sen</div>
        <div class="card-info">
          <h3>Seneca Learning</h3>
          <p>Free interactive quizzes covering R093 exam topics. Open in a new tab.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #1E7E34;" href="https://mrowoyemi.github.io/iMediaTrainer/" target="_blank" rel="noopener noreferrer">
        <div class="card-image" style="background: #1E7E34; color: white;">Trainer</div>
        <div class="card-info">
          <h3>iMedia Trainer</h3>
          <p>External revision tool with knowledge organisers and quizzes. Open in a new tab.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #C00000;" href="https://www.ocr.org.uk/qualifications/cambridge-nationals/creative-imedia-level-1-2-j834/" target="_blank" rel="noopener noreferrer">
        <div class="card-image" style="background: #C00000; color: white;">OCR</div>
        <div class="card-info">
          <h3>OCR Specification (J834)</h3>
          <p>Official OCR Cambridge Nationals Creative iMedia Level 1/2 specification, sample assessments and past papers.</p>
        </div>
      </a>
    </div>
  `,

  // --- NEW PAGE: R094 TASK 1 ---
  // --- R094 TASK 1 (Updated Checklist) ---,

  r093_quiz: `
    <h1>R093 Keyword Revision</h1>
    <p style="text-align: center; font-size: 1.2rem; color: var(--secondary-text);">Click the card to reveal the definition, then say whether you knew it.</p>

    <div class="deck-progress-wrap">
      <div class="deck-progress" id="deck-progress" role="img" aria-label="Deck progress">
        <span class="deck-seg deck-seg--ok" id="deck-seg-ok" style="width:0%"></span>
        <span class="deck-seg deck-seg--no" id="deck-seg-no" style="width:0%"></span>
      </div>
      <p class="deck-meta" id="deck-meta"></p>
    </div>

    <div class="flashcard-container" style="perspective: 1000px; margin: 40px auto; width: 90%; max-width: 800px; height: 400px; cursor: pointer;" onclick="flipCard()">
      <div id="flashcard" style="position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s; transform-style: preserve-3d; box-shadow: 0 15px 30px rgba(0,0,0,0.15);">
        
        <div style="position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; background-color: var(--brand-surface); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 20px;">
          <h2 id="card-term" style="margin: 0; padding: 20px; font-size: 3rem; color: white;">...</h2>
          <p style="margin-top: 15px; font-size: 1rem; color: var(--muted-text); font-style: italic;">(Click to flip)</p>
        </div>

        <div style="position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; background-color: var(--card-bg); color: var(--text-color); transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; border-radius: 20px; border: 4px solid var(--dark-purple);">
          <p id="card-def" style="padding: 40px; font-size: 1.6rem; line-height: 1.5; font-weight: 500;">...</p>
        </div>

      </div>
    </div>

    <div class="confidence-row">
      <button type="button" class="conf-btn conf-btn--no" onclick="rateCard(false)">Not yet</button>
      <button type="button" class="conf-btn conf-btn--ok" onclick="rateCard(true)">Got it</button>
    </div>

    <div class="deck-controls">
      <button type="button" class="deck-btn deck-btn--quiet" onclick="prevCard()">Previous</button>
      <span id="card-counter" class="deck-counter">1 / ${r093Keywords.length}</span>
      <button type="button" class="deck-btn" onclick="nextCard()">Next card</button>
    </div>

    <div class="deck-footer">
      <button type="button" class="deck-btn deck-btn--quiet" onclick="initQuiz()">Shuffle the deck</button>
      <button type="button" class="deck-btn deck-btn--quiet" onclick="reviewWeakCards()">Review what I got wrong</button>
      <button type="button" class="deck-btn deck-btn--quiet" onclick="resetCardConfidence()">Reset my ratings</button>
    </div>
  `
};
