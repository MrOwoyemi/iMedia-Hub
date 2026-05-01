const r093Keywords = [
  // --- TA1: The Media Industry ---
  { term: "Traditional Media", def: "Communication methods that existed before the internet (e.g., Print, Radio, TV)." },
  { term: "New Media", def: "Content that is digital, internet-based, and interactive (e.g., Social Media, Apps, Games)." },
  { term: "Sector", def: "A division of the media industry grouping similar types of products and companies (e.g., film, gaming, publishing)." },
  { term: "Convergence", def: "When a single device or product combines multiple media types (e.g., a smartphone delivering film, music, games and news)." },
  { term: "Streaming (OTT)", def: "'Over-the-top' delivery of audio/video over the internet rather than through traditional broadcast." },
  { term: "User-Generated Content", def: "Media made and uploaded by audiences (videos, posts, reviews) rather than by professional producers." },
  { term: "SFX", def: "Special Effects — physical effects created on-set during filming, such as explosions, makeup or pyrotechnics." },
  { term: "VFX", def: "Visual Effects — digital manipulations created in post-production using CGI and compositing." },
  { term: "AR (Augmented Reality)", def: "Overlays digital information (graphics, 3D models) onto the real world via a device screen." },
  { term: "VR (Virtual Reality)", def: "Uses headsets to immerse the user in a completely computer-generated, 360-degree environment." },
  { term: "Pre-production", def: "The planning and preparation stage before any filming, recording or building begins." },
  { term: "Production", def: "The capture and creation stage when the actual assets are made (filming, recording, building)." },
  { term: "Post-production", def: "The editing and refinement stage when raw assets are assembled into the final product." },
  { term: "Creative Role", def: "A job focused on ideas, design and aesthetics (e.g., animator, copy writer, graphic designer)." },
  { term: "Technical Role", def: "A job focused on operating equipment or writing code (e.g., camera operator, web developer)." },
  { term: "Senior Role", def: "A leadership job that oversees teams, budgets and creative vision (e.g., director, production manager)." },
  { term: "Multi-Skilling", def: "When one person performs more than one job role, common on small-scale productions to save costs." },
  { term: "Freelancer", def: "A self-employed worker hired for individual projects rather than employed full-time." },

  // --- TA2: Factors Influencing Design ---
  { term: "Purpose", def: "The reason a product was made — to inform, entertain, persuade, educate, or promote." },
  { term: "Style", def: "The overall visual 'look and feel' of a product (e.g., minimalist, retro, futuristic)." },
  { term: "Content", def: "The actual text, images, audio and video included inside the product." },
  { term: "Layout", def: "The arrangement of every element on the page or screen." },
  { term: "Colour Psychology", def: "The study of how different colours influence the feelings and behaviour of viewers." },
  { term: "Genre Conventions", def: "The visual and audio cues an audience expects from a particular type of product." },
  { term: "House Style", def: "A consistent set of design rules (fonts, colours, logos) used across all of a brand's products." },
  { term: "Tone of Voice", def: "The personality of the language used in a product (e.g., formal, friendly, urgent, humorous)." },
  { term: "Iconography", def: "Visual images and symbols used in a work of art or the study or interpretation of these." },
  { term: "Client Ethos", def: "The spirit, values, or beliefs of a company (e.g., eco-friendly, luxury, budget-conscious)." },
  { term: "Constraint", def: "A limitation or restriction that affects how a project can be completed (time, money, legal rules)." },
  { term: "Target Audience", def: "The specific group of people the product is aimed at, often defined by age, gender, or interests." },
  { term: "Open Brief", def: "A brief that gives the producer creative freedom with few specific requirements." },
  { term: "Closed Brief", def: "A brief that is highly specific, dictating exact colours, fonts, content and constraints." },
  { term: "Negotiated Brief", def: "A brief where the client and producer work together to agree on requirements." },
  { term: "Demographics", def: "Statistical data about a population, such as Age, Gender, Income, and Location." },
  { term: "Psychographics", def: "Categorising an audience based on their personality, interests, lifestyle, and opinions." },
  { term: "Audience Segmentation", def: "Dividing a large audience into smaller groups based on shared characteristics." },
  { term: "Primary Research", def: "Original data you collect yourself for the current project (e.g., a survey, interview, focus group)." },
  { term: "Secondary Research", def: "Information already published by someone else (e.g., articles, books, government data)." },
  { term: "Quantitative Data", def: "Information measured in numbers — objective and easy to compare." },
  { term: "Qualitative Data", def: "Information about opinions, feelings or descriptions — subjective and richer in detail." },
  { term: "Focus Group", def: "A small guided discussion with members of the target audience to gather detailed qualitative responses." },
  { term: "Bias", def: "A leaning in research data caused by how questions are asked or who answers, which can distort results." },
  { term: "Sample", def: "The group of people whose responses are gathered — must reflect the wider audience to be reliable." },
  { term: "Validity", def: "A measure of how accurate, current and relevant a piece of research is." },
  { term: "Media Code", def: "A specific technique used to convey meaning to the audience (technical, symbolic, or written)." },
  { term: "Technical Code", def: "Decisions about camera, lighting, sound and editing that build meaning." },
  { term: "Symbolic Code", def: "Use of colour, costume, props and setting to suggest meaning beyond the literal." },
  { term: "Written Code", def: "Use of language, text, slogans and typography to communicate meaning." },
  { term: "Mise-en-scène", def: "French for 'everything in the frame' — the combined visual elements of a shot (props, costume, lighting, setting)." },
  { term: "Diegetic Sound", def: "Sound that exists within the world of the story (a character's dialogue, footsteps)." },
  { term: "Non-Diegetic Sound", def: "Sound only the audience hears (soundtrack, voiceover)." },
  { term: "Typography", def: "The art of arranging text — font choice, size, spacing, weight — to create impact." },

  // --- TA3: Pre-Production Planning ---
  { term: "Work Plan", def: "A structured document that lists tasks, durations, resources and deadlines for a media project." },
  { term: "Task", def: "A major job within the project (e.g., 'Create storyboard')." },
  { term: "Activity", def: "A smaller step inside a task (e.g., 'Sketch panels', 'Scan sketches')." },
  { term: "Workflow", def: "The logical sequence of tasks and how they depend on each other." },
  { term: "Duration", def: "The estimated time a task will take to complete." },
  { term: "Milestone", def: "A key checkpoint marking the completion of a major phase of a project." },
  { term: "Contingency", def: "Extra time or budget reserved for unforeseen problems ('Plan B')." },
  { term: "Resources", def: "The hardware, software, people, locations and props needed to complete a task." },
  { term: "Gantt Chart", def: "A horizontal-bar timeline used to plan and visualise project tasks across time." },
  { term: "Critical Path", def: "The longest sequence of dependent tasks — a delay anywhere on it delays the whole project." },
  { term: "Mind Map", def: "A spider diagram showing how ideas connect to a central theme." },
  { term: "Central Node", def: "The main theme placed in the middle of a mind map." },
  { term: "Sub-Node", def: "A more specific idea branching from a primary node on a mind map." },
  { term: "Branch", def: "The line connecting two nodes on a mind map to show they are related." },
  { term: "Mood Board", def: "A collage of images, colours, fonts and textures defining the look and feel of a product." },
  { term: "Colour Palette", def: "A specific selection of colours used consistently across a design." },
  { term: "Texture", def: "The visual or tactile quality of a surface (rough, smooth, metallic, glossy)." },
  { term: "Visualisation Diagram", def: "An annotated sketch showing the layout of a static media product (poster, magazine cover)." },
  { term: "Annotation", def: "A short labelled note explaining a design choice on a planning document." },
  { term: "Composition", def: "The way elements are arranged within the frame to create a balanced, effective design." },
  { term: "Hierarchy", def: "The visual ordering of elements so the most important content is seen first." },
  { term: "Storyboard", def: "A sequence of drawn panels used to plan the shots, timing and sound of a moving-image product." },
  { term: "Script", def: "The written blueprint of dialogue, action and scene headings that an animation or film is built from." },
  { term: "Slugline", def: "A scene-heading line in a script (e.g., INT. KITCHEN — DAY) that locates the action in time and place." },
  { term: "Parenthetical", def: "A short instruction in brackets in a script telling actors how to deliver a line (e.g., (whispering))." },
  { term: "Wireframe", def: "A black-and-white blueprint of a digital interface showing layout and function without final visuals." },
  { term: "Flow Chart", def: "A diagram of decisions and actions linked by arrows, used to plan game logic or website navigation." },
  { term: "Terminator", def: "An oval shape on a flow chart marking the start or end of the process." },
  { term: "Process", def: "A rectangle on a flow chart representing an action or task step." },
  { term: "Decision", def: "A diamond shape on a flow chart representing a Yes/No question that branches the path." },
  { term: "Asset Log", def: "A table listing every asset used in a project alongside its source, format, properties and legal status." },
  { term: "Recce", def: "(Reconnaissance) A pre-filming visit to a location to determine its suitability for shooting." },
  { term: "Risk Assessment", def: "A formal document identifying hazards, evaluating risk levels and listing control measures to mitigate them." },
  { term: "Mitigation", def: "The action of reducing the severity or likelihood of a risk (e.g., taping down cables)." },
  { term: "RSI", def: "Repetitive Strain Injury — damage to muscles or nerves caused by repeated motions like prolonged mouse use." },
  { term: "Hazard", def: "Something that has the potential to cause harm." },
  { term: "Risk", def: "The likelihood of harm actually happening from a hazard." },

  // --- Legal & Ethical ---
  { term: "Copyright", def: "Automatic legal protection for original artistic works (music, films, books, software, images)." },
  { term: "Trademark", def: "A registered symbol, word or phrase legally established to represent a company or product." },
  { term: "Patent", def: "A legal protection for a functional invention or technical solution." },
  { term: "Intellectual Property (IP)", def: "Intangible property that is the result of creativity (patents, copyrights, trademarks)." },
  { term: "Royalty", def: "A payment made to the legal owner for the right to use their intellectual property." },
  { term: "Public Domain", def: "Creative materials that are not protected by intellectual property laws and are free for anyone to use." },
  { term: "Creative Commons", def: "A free licensing system letting creators set conditions (credit, non-commercial, share-alike) for use of their work." },
  { term: "Fair Dealing", def: "A legal exception allowing limited use of copyrighted material for review, news or education without permission." },
  { term: "Royalty-Free", def: "Content that can be used without paying ongoing royalty fees, usually under a one-time licence." },
  { term: "Watermark", def: "A translucent logo or text overlaid on an image to mark ownership and discourage theft." },
  { term: "Defamation", def: "Damaging the good reputation of someone by spreading false information." },
  { term: "Libel", def: "A permanent form of defamation (e.g., written in a newspaper or posted online)." },
  { term: "Slander", def: "A temporary form of defamation (e.g., spoken words or gestures)." },
  { term: "Model Release Form", def: "A legal document signed by a person granting permission for their image to be used in a media product." },
  { term: "GDPR", def: "General Data Protection Regulation — laws controlling how personal data is collected and stored." },
  { term: "Data Subject", def: "The individual who the personal data is about under data-protection law." },
  { term: "ASA", def: "Advertising Standards Authority — UK regulator that ensures adverts are legal, decent, honest and truthful." },
  { term: "Ofcom", def: "UK regulator for TV, radio and on-demand services that enforces the Watershed and broadcast standards." },
  { term: "BBFC", def: "British Board of Film Classification — issues age ratings for films (U, PG, 12A, 15, 18)." },
  { term: "PEGI", def: "Pan European Game Information — issues age ratings for video games (3, 7, 12, 16, 18)." },
  { term: "Watershed", def: "The 9pm UK time after which programmes unsuitable for children can be broadcast." },
  { term: "Certification", def: "The process of giving a media product an age rating based on its content." },
  { term: "Censorship", def: "The suppression or prohibition of media content considered obscene or politically unacceptable." },

  // --- TA4: Distribution & File Formats ---
  { term: "Distribution Platform", def: "The medium or service through which a finished media product is delivered to its audience." },
  { term: "Online Distribution", def: "Delivery of a media product over the internet (websites, apps, streaming, social media)." },
  { term: "Physical Distribution", def: "Delivery of a product through tangible objects (DVDs, USB sticks, printed paper)." },
  { term: "Bandwidth", def: "The amount of data that can be sent over an internet connection per second." },
  { term: "Kiosk", def: "A public-facing physical hardware platform (e.g., a museum touch screen) running locked-down media." },
  { term: "Responsive Design", def: "Building a product so the layout automatically adjusts to fit any screen size." },
  { term: "Cross-Platform", def: "Designing a product so it works correctly across multiple devices and operating systems." },
  { term: "Pixel", def: "(Picture Element) The smallest controllable element of a digital image on a screen." },
  { term: "Resolution", def: "The amount of detail an image holds; measured in PPI for screens and DPI for print." },
  { term: "DPI", def: "Dots Per Inch — measure of pixel density used for printed media (300 DPI is standard for print)." },
  { term: "PPI", def: "Pixels Per Inch — measure of pixel density used for digital screens (72 PPI is standard)." },
  { term: "Rasterizing", def: "The process of converting a vector image into a bitmap (pixels)." },
  { term: "Bitmap / Raster", def: "Images made of a grid of coloured pixels (e.g., JPEG, PNG); lose quality when resized up." },
  { term: "Vector", def: "Images made of mathematical paths; scale infinitely without quality loss (e.g., SVG, AI, EPS)." },
  { term: "Sample Rate", def: "The number of audio samples captured every second, measured in Hz (44.1 kHz is CD quality)." },
  { term: "Bit Depth", def: "The amount of data stored in each audio sample — higher bit depth means a wider dynamic range." },
  { term: "Dynamic Range", def: "The ratio between the loudest and quietest sound a recording can capture." },
  { term: "Frame Rate", def: "The number of frames per second (fps) at which video plays — 24 fps for film, 60+ fps for sports/games." },
  { term: "UHD (4K)", def: "Ultra High Definition resolution of 3840 × 2160 pixels — four times the detail of HD." },
  { term: "Lossy Compression", def: "Reducing file size by permanently deleting data the eye/ear is unlikely to notice (e.g., JPEG, MP3)." },
  { term: "Lossless Compression", def: "Reducing file size without losing any data, retaining quality (e.g., PNG, FLAC, ZIP)." },
  { term: "Compression Artefact", def: "Noticeable distortion (blockiness, blurring) caused by aggressive lossy compression." },
  { term: "Bitrate", def: "The amount of data processed per second — lower bitrate usually means smaller files and lower quality." },
  { term: "Codec", def: "(Coder-Decoder) Software used to compress or decompress digital media files." },
  { term: "RGB", def: "The three-colour light model used by digital screens (Red, Green, Blue)." },
  { term: "CMYK", def: "The four-colour ink model used in commercial printing (Cyan, Magenta, Yellow, Key/Black)." },
  { term: "Streaming", def: "Playing media instantly as it downloads, rather than waiting for the entire file." },
  { term: "Optimisation", def: "Reducing file size through format choice and compression while keeping visual quality acceptable." }
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
      <h2 class="section-title">Traditional vs New Media — Advantages &amp; Disadvantages</h2>
      <p>Exam questions often ask you to compare the two. Use this table to revise the trade-offs for both producers and audiences.</p>

      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;"></th>
          <th style="padding: 10px; text-align: left;">Advantages</th>
          <th style="padding: 10px; text-align: left;">Disadvantages</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Traditional Media</strong></td>
          <td style="padding: 10px;">
            <ul style="margin: 0; padding-left: 18px;">
              <li>Trusted, regulated and edited content.</li>
              <li>Reaches audiences without internet access.</li>
              <li>Tactile feel (newspapers, magazines).</li>
              <li>Wide passive reach (TV adverts).</li>
            </ul>
          </td>
          <td style="padding: 10px;">
            <ul style="margin: 0; padding-left: 18px;">
              <li>Expensive to produce and distribute.</li>
              <li>One-way — no audience interaction.</li>
              <li>Cannot be updated once printed/aired.</li>
              <li>Slower to react to breaking news.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>New Media</strong></td>
          <td style="padding: 10px;">
            <ul style="margin: 0; padding-left: 18px;">
              <li>Cheap, instant, global distribution.</li>
              <li>Two-way — likes, comments, sharing.</li>
              <li>Personalised/algorithmic recommendations.</li>
              <li>Updates and corrections in real time.</li>
            </ul>
          </td>
          <td style="padding: 10px;">
            <ul style="margin: 0; padding-left: 18px;">
              <li>Misinformation spreads quickly.</li>
              <li>Requires internet/device access.</li>
              <li>Privacy concerns and data tracking.</li>
              <li>Massive competition — easily ignored.</li>
            </ul>
          </td>
        </tr>
      </table>
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
        <div class="card"><p><strong>Sector:</strong> A division of the media industry grouping similar types of products and companies (e.g. film, gaming, publishing).</p></div>
        <div class="card"><p><strong>Convergence:</strong> When a single device or product combines multiple media types (e.g. a smartphone delivering film, music, games and news).</p></div>
        <div class="card"><p><strong>Streaming (OTT):</strong> "Over-the-top" delivery of audio/video over the internet rather than through traditional broadcast.</p></div>
        <div class="card"><p><strong>User-generated content:</strong> Media made and uploaded by audiences (videos, posts, reviews) rather than by professional producers.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify two advantages of distributing a news story as a new media product (e.g. a website article) rather than as traditional print. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. The article can be <strong>updated instantly</strong> as new information emerges (1), so readers always see the most accurate version, whereas a printed newspaper is out of date as soon as it leaves the press (1).</p>
        <p>2. The story can include <strong>interactive content such as embedded video and reader comments</strong> (1), which engages a wider audience and lets readers react and share, increasing reach beyond what a static printed page could achieve (1).</p>
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

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Purpose:</strong> The reason a product was made — to inform, entertain, persuade, educate, or promote.</p></div>
        <div class="card"><p><strong>Style:</strong> The overall visual "look and feel" of a product (e.g. minimalist, retro, futuristic).</p></div>
        <div class="card"><p><strong>Content:</strong> The actual text, images, audio and video included inside the product.</p></div>
        <div class="card"><p><strong>Layout:</strong> The arrangement of every element on the page or screen.</p></div>
        <div class="card"><p><strong>Colour psychology:</strong> The study of how different colours influence the feelings and behaviour of viewers.</p></div>
        <div class="card"><p><strong>Genre conventions:</strong> The visual and audio cues an audience expects from a particular type of product.</p></div>
        <div class="card"><p><strong>House style:</strong> A consistent set of design rules (fonts, colours, logos) used across all of a brand's products.</p></div>
        <div class="card"><p><strong>Tone of voice:</strong> The personality of the language used in a product (e.g. formal, friendly, urgent, humorous).</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Explain how the colour palette of a media product can be linked to its purpose. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>If the purpose is to <strong>warn or alert</strong> the audience (e.g. a road-safety advert), the designer might use bold reds and yellows (1) because these colours are subconsciously associated with danger and urgency, drawing the eye and making the audience pay attention quickly (1). For an <strong>educational</strong> product aimed at children, bright primary colours such as blue, red and yellow would be used (1) to feel friendly, energetic and engaging — encouraging the young audience to interact with the product.</p>
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

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Pre-production:</strong> The planning and preparation stage before any filming, recording or building begins.</p></div>
        <div class="card"><p><strong>Production:</strong> The capture and creation stage when the actual assets are made (filming, recording, building).</p></div>
        <div class="card"><p><strong>Post-production:</strong> The editing and refinement stage when raw assets are assembled into the final product.</p></div>
        <div class="card"><p><strong>Creative role:</strong> A job focused on ideas, design and aesthetics (e.g. animator, copy writer, graphic designer).</p></div>
        <div class="card"><p><strong>Technical role:</strong> A job focused on operating equipment or writing code (e.g. camera operator, web developer).</p></div>
        <div class="card"><p><strong>Senior role:</strong> A leadership job that oversees teams, budgets and creative vision (e.g. director, production manager).</p></div>
        <div class="card"><p><strong>Multi-skilling:</strong> When one person performs more than one job role, common on small-scale productions to keep costs down.</p></div>
        <div class="card"><p><strong>Freelancer:</strong> A self-employed worker hired for individual projects rather than employed full-time.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify two job roles that work primarily during the post-production phase of a film, and describe the responsibilities of each. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. <strong>Video Editor</strong> (1) — cuts and joins together raw footage filmed during production, applies transitions and colour correction, and assembles the final timeline of the film (1).</p>
        <p>2. <strong>Sound Editor</strong> (1) — cleans up dialogue tracks, layers Foley and music, and synchronises sound effects with the on-screen action so the final mix is clear and immersive (1).</p>
      </div>
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

    <div class="homework-box">
      <h2 class="section-title">4. Quick Comparison: Primary vs Secondary</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;"></th>
          <th style="padding: 10px; text-align: left;">Primary</th>
          <th style="padding: 10px; text-align: left;">Secondary</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Cost</strong></td>
          <td style="padding: 10px;">Expensive</td>
          <td style="padding: 10px;">Cheap / Free</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Speed</strong></td>
          <td style="padding: 10px;">Slow</td>
          <td style="padding: 10px;">Fast</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Accuracy</strong></td>
          <td style="padding: 10px;">Up-to-date and tailored</td>
          <td style="padding: 10px;">May be outdated or biased</td>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>Best for…</strong></td>
          <td style="padding: 10px;">Specific brief, target audience views</td>
          <td style="padding: 10px;">Industry trends, competitor analysis</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Primary research:</strong> Original data you collect yourself for the current project (e.g. a survey, interview, focus group).</p></div>
        <div class="card"><p><strong>Secondary research:</strong> Information already published by someone else (e.g. articles, books, government data).</p></div>
        <div class="card"><p><strong>Quantitative data:</strong> Information measured in numbers — objective and easy to compare.</p></div>
        <div class="card"><p><strong>Qualitative data:</strong> Information about opinions, feelings or descriptions — subjective and richer in detail.</p></div>
        <div class="card"><p><strong>Focus group:</strong> A small guided discussion with members of the target audience to gather detailed qualitative responses.</p></div>
        <div class="card"><p><strong>Bias:</strong> A leaning in research data caused by how questions are asked or who answers, which can distort the results.</p></div>
        <div class="card"><p><strong>Sample:</strong> The group of people whose responses are gathered — must reflect the wider audience to be reliable.</p></div>
        <div class="card"><p><strong>Validity:</strong> A measure of how accurate, current and relevant a piece of research is.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Describe one advantage and one disadvantage of using a focus group as a primary research method. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p><strong>Advantage:</strong> A focus group produces detailed qualitative data (1) because the moderator can ask follow-up questions and participants build on each other's ideas, giving deep insight into audience opinions (1).</p>
        <p><strong>Disadvantage:</strong> Focus groups are time-consuming and expensive to organise (1) because participants often need to be paid and the small sample size means the results may not represent the views of the whole target audience (1).</p>
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

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Media code:</strong> A specific technique used to convey meaning to the audience (technical, symbolic, or written).</p></div>
        <div class="card"><p><strong>Technical code:</strong> Decisions about camera, lighting, sound and editing that build meaning.</p></div>
        <div class="card"><p><strong>Symbolic code:</strong> Use of colour, costume, props and setting to suggest meaning beyond the literal.</p></div>
        <div class="card"><p><strong>Written code:</strong> Use of language, text, slogans and typography to communicate meaning.</p></div>
        <div class="card"><p><strong>Mise-en-scène:</strong> French for "everything in the frame" — the combined visual elements of a shot.</p></div>
        <div class="card"><p><strong>Diegetic sound:</strong> Sound that exists within the world of the story (a character's dialogue, footsteps).</p></div>
        <div class="card"><p><strong>Non-diegetic sound:</strong> Sound only the audience hears (soundtrack, voiceover).</p></div>
        <div class="card"><p><strong>Typography:</strong> The art of arranging text — font choice, size, spacing, weight — to create impact.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Explain how a director might use camera angles and lighting to create tension in a horror scene. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>The director could use a <strong>low-angle shot</strong> looking up at the antagonist (1), making them appear powerful and threatening compared to the victim, which makes the audience feel uneasy (1). Combined with <strong>low-key lighting</strong> casting strong shadows across the set (1), this hides parts of the frame so the audience does not know exactly where danger is coming from, building suspense and tension (1).</p>
      </div>
    </div>

  `,

  ta3: `
    <h1>Topic Area 3: Pre-production Planning</h1>
    <p>Developing work plans and creating the documentation needed to design professional media products. The OCR Cambridge Nationals specification requires you to know the <strong>purpose, components, software, hardware</strong> and <strong>typical users</strong> of every pre-production document.</p>

    <h2 class="section-title">3.1 Work Planning</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_3_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Work Plans</div>
        <div class="card-info">
          <h3>3.1 Work Planning Techniques</h3>
          <p>Phases, tasks, activities, workflow, durations, milestones, contingencies and resources.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">3.2 Documents That Support Idea Generation</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_3_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Mind Maps</div>
        <div class="card-info">
          <h3>3.2 Mind Maps & Mood Boards</h3>
          <p>Brainstorming and visual inspiration documents — components, software, hardware and users.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">3.3 Documents That Visualise Creative Ideas</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_3_3')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Vis. Diagrams</div>
        <div class="card-info">
          <h3>3.3a Visualisation Diagrams</h3>
          <p>Annotated sketches that plan static products such as posters, magazine covers and DVD covers.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_3b')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Storyboards</div>
        <div class="card-info">
          <h3>3.3b Storyboards</h3>
          <p>Sequential panels that plan moving-image products with shots, timings, audio and transitions.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_3c')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Scripts</div>
        <div class="card-info">
          <h3>3.3c Scripts</h3>
          <p>Written blueprints with sluglines, action, character names, dialogue and parentheticals.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_3d')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Wireframes</div>
        <div class="card-info">
          <h3>3.3d Wireframe Templates</h3>
          <p>Layout blueprints for websites, apps and game UI showing structure without colour.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_3e')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Flow Charts</div>
        <div class="card-info">
          <h3>3.3e Flow Charts</h3>
          <p>Game logic and website navigation diagrams using terminator, process, decision and flow lines.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_3f')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Asset Logs</div>
        <div class="card-info">
          <h3>3.3f Asset Lists / Logs</h3>
          <p>Tables of every asset used, including source, format, properties and legal status.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_5')" style="cursor: pointer; border-top: 5px solid #FF9800;">
        <div class="card-image" style="background: #FFF3E0; color: #E65100;">Compare</div>
        <div class="card-info">
          <h3>Pre-Production Quick Reference</h3>
          <p>Side-by-side comparison of every pre-production document with components and best uses.</p>
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
    <h1>3.1 Work Planning Techniques</h1>
    <p>A work plan is a structured document that maps out every stage of a media project. Its primary purpose is to ensure the project finishes on time and within budget by organising tasks, resources and contingencies effectively. The OCR specification expects you to know <strong>every component</strong> of a work plan and explain why each is needed.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Production Phases</h2>
      <p>All media projects are split into three distinct phases. The work plan must clearly identify which tasks fall within each phase.</p>

      <div class="card-grid">
        <div class="card">
          <h3>Pre-Production</h3>
          <p>The planning, design and preparation phase before any creation begins.</p>
          <ul>
            <li>Interpreting the brief.</li>
            <li>Generating ideas (mind maps, mood boards).</li>
            <li>Creating planning documents (storyboards, scripts, wireframes, asset lists).</li>
            <li>Conducting recces and risk assessments.</li>
            <li>Hiring crew and securing locations.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Production</h3>
          <p>The capture and creation phase where assets are made.</p>
          <ul>
            <li>Filming, recording, building, drawing.</li>
            <li>Photographing assets.</li>
            <li>Capturing dialogue, Foley, ambient sound.</li>
            <li>Programming game mechanics.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Post-Production</h3>
          <p>The assembly, editing and refinement phase.</p>
          <ul>
            <li>Editing video, audio mixing, colour grading.</li>
            <li>Adding visual effects (VFX) and titles.</li>
            <li>Compressing, exporting and packaging.</li>
            <li>Quality assurance testing.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Components of a Work Plan</h2>
      <p>The OCR specification lists these components — each must appear in your plan to reach Mark Band 3.</p>

      <div class="card-grid">
        <div class="card">
          <h3>Tasks</h3>
          <p>The major jobs that need completing — e.g. "Create the storyboard", "Film the advert", "Edit Episode 1".</p>
        </div>
        <div class="card">
          <h3>Activities (Sub-Tasks)</h3>
          <p>The smaller steps inside each task — e.g. "Sketch each panel", "Add camera shot info", "Photograph storyboard for client review".</p>
        </div>
        <div class="card">
          <h3>Workflow</h3>
          <p>The logical order tasks follow. Some tasks can run in parallel (e.g. design + sound recording); others have dependencies (you can't edit before you film).</p>
        </div>
        <div class="card">
          <h3>Durations</h3>
          <p>Time estimates for each task in hours, days or weeks. Used to calculate the total project length.</p>
        </div>
        <div class="card">
          <h3>Milestones</h3>
          <p>Key checkpoints marking the end of a major phase — e.g. "Client signs off script", "Filming wrap", "First export delivered".</p>
        </div>
        <div class="card">
          <h3>Contingencies</h3>
          <p>"Plan B" — extra time or resources reserved for unforeseen events such as illness, equipment failure, bad weather, talent unavailability or rejected client feedback.</p>
        </div>
        <div class="card">
          <h3>Hardware Resources</h3>
          <p>Physical kit needed at each stage — DSLR/4K cameras, lights, tripods, boom mics, XLR microphones, green screens, computers, scanners, graphics tablets.</p>
        </div>
        <div class="card">
          <h3>Software Resources</h3>
          <p>Applications used per task — Photoshop, Illustrator, Premiere Pro, Audacity, Maya, Animate, Unreal Engine, ProTools, Microsoft Project (for the plan itself).</p>
        </div>
        <div class="card">
          <h3>People Resources</h3>
          <p>Crew, talent and stakeholders — director, camera operator, sound engineer, voice-over artist, actors, models, client representatives.</p>
        </div>
        <div class="card">
          <h3>Locations &amp; Props</h3>
          <p>Where filming/recording happens and what physical items are needed — studios, on-location sets, costumes, set dressing, hand props.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Visual Formats for Work Plans</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Gantt Chart</h3>
          <p>A horizontal bar chart where each bar = a task. The x-axis shows time. Bars overlap to show parallel tasks. Diamonds usually represent milestones.</p>
          <p><strong>Software:</strong> Microsoft Project, Excel, GanttProject, Asana.</p>
        </div>
        <div class="card">
          <h3>Production Schedule</h3>
          <p>A table listing dates, tasks, locations, crew and equipment needed each day.</p>
          <p><strong>Use:</strong> Daily call sheets and shoot scheduling.</p>
        </div>
        <div class="card">
          <h3>Critical Path</h3>
          <p>A diagram showing the longest dependent chain of tasks. Any slip on the critical path delays the entire project.</p>
          <p><strong>Use:</strong> Identifying which tasks need contingency built in.</p>
        </div>
        <div class="card">
          <h3>Calendar / Kanban</h3>
          <p>A simple calendar view or a board showing tasks moving from <em>To Do → In Progress → Done</em>.</p>
          <p><strong>Use:</strong> Small teams, agile workflows.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Why Use a Work Plan?</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Managing Individuals</h3>
          <p>Acts as a checklist for freelancers to stay focused, prioritise and not forget tasks.</p>
        </div>
        <div class="card">
          <h3>Managing Teams</h3>
          <p>Coordinates everyone — the camera operator knows when they are needed; the editor knows when footage will arrive; the client knows when to give feedback.</p>
        </div>
        <div class="card">
          <h3>Tracking Progress</h3>
          <p>Allows producers to spot slippage early and re-allocate resources or trigger contingency plans before deadlines are missed.</p>
        </div>
        <div class="card">
          <h3>Budgeting</h3>
          <p>Plans link tasks to resources, allowing producers to calculate costs accurately and prevent overspending.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Work plan:</strong> A structured document that lists tasks, durations, resources and deadlines for a media project.</p></div>
        <div class="card"><p><strong>Task:</strong> A major job within the project (e.g. "Create storyboard").</p></div>
        <div class="card"><p><strong>Activity:</strong> A smaller step inside a task (e.g. "Sketch panels").</p></div>
        <div class="card"><p><strong>Workflow:</strong> The logical sequence of tasks and how they depend on each other.</p></div>
        <div class="card"><p><strong>Duration:</strong> The estimated time a task will take to complete.</p></div>
        <div class="card"><p><strong>Milestone:</strong> A key checkpoint marking the completion of a major phase.</p></div>
        <div class="card"><p><strong>Contingency:</strong> Extra time or budget reserved for unforeseen problems.</p></div>
        <div class="card"><p><strong>Resources:</strong> The hardware, software, people, locations and props needed to complete a task.</p></div>
        <div class="card"><p><strong>Gantt chart:</strong> A horizontal-bar timeline used to plan and visualise project tasks.</p></div>
        <div class="card"><p><strong>Critical path:</strong> The longest sequence of dependent tasks — a delay anywhere on it delays the whole project.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify three components that should appear on a Gantt chart for a media production. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <ul>
          <li><strong>Tasks</strong> shown as horizontal bars (1).</li>
          <li><strong>Durations / time scale</strong> on the x-axis showing days or weeks (1).</li>
          <li><strong>Milestones</strong> shown as diamond markers at key checkpoints (1).</li>
        </ul>
        <p><em>Other valid answers: workflow/dependencies, contingency time, resources allocated, owner/responsible person.</em></p>
      </div>
    </div>
  `,

  r093_3_2: `
    <h1>3.2 Documents to Support Idea Generation</h1>
    <p>Before a media product can be designed, ideas must be generated, organised and visualised. The OCR specification identifies <strong>Mind Maps</strong> and <strong>Mood Boards</strong> as the two main idea-generation documents — and you must know the components, software, hardware and target users for each.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Mind Maps</h2>
      <p>A spider-diagram used to organise thoughts and generate ideas around a single central theme. They are the very first document made in pre-production.</p>

      <div class="card-grid">
        <div class="card">
          <h3>Purpose</h3>
          <ul>
            <li>To brainstorm a wide range of ideas quickly.</li>
            <li>To show links and connections between different parts of a project.</li>
            <li>To break complex briefs into smaller, manageable components.</li>
            <li>To explore alternative directions before committing.</li>
          </ul>
        </div>
        <div class="card">
          <h3>All Components (Spec)</h3>
          <ul>
            <li><strong>Central node / theme:</strong> The main subject in the middle (e.g. "Eco-Bolt Bike Poster").</li>
            <li><strong>Primary nodes:</strong> Main categories branching off centre (e.g. "Colours", "Audience", "Slogans").</li>
            <li><strong>Sub-nodes:</strong> Specific ideas branching from primary nodes (e.g. "Neon green", "20–30 yr olds", "Ride the Future").</li>
            <li><strong>Branches / lines:</strong> Connectors showing relationships between nodes.</li>
            <li><strong>Keywords / short text:</strong> Each node is labelled with one short phrase.</li>
            <li><strong>Images / icons:</strong> Optional visual hints next to nodes.</li>
            <li><strong>Colour coding:</strong> Different branches in different colours to group related ideas.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Hardware</h3>
          <p><strong>Hand-drawn:</strong> Paper, pens, pencils, highlighters.</p>
          <p><strong>Digital:</strong> PC/laptop, graphics tablet (Wacom), mouse, keyboard, interactive whiteboard.</p>
        </div>
        <div class="card">
          <h3>Software</h3>
          <ul>
            <li><strong>Dedicated:</strong> MindView, MindMeister, XMind, Coggle.</li>
            <li><strong>Office:</strong> Microsoft PowerPoint, Word SmartArt.</li>
            <li><strong>Creative:</strong> Miro, Figma, Lucidchart.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Target Users</h3>
          <ul>
            <li>Creative directors, animators, graphic designers.</li>
            <li>Game designers, web designers.</li>
            <li>Script writers, journalists.</li>
            <li>Students brainstorming a brief.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Effectiveness</h3>
          <p>Effective if it has a logical structure, clear connections, covers all aspects of the brief, and uses keywords (not full sentences). Improved by adding sub-nodes to deepen detail and using colour to group related branches.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Mood Boards</h2>
      <p>A collage of images, colours, fonts and textures that captures the visual "look and feel" of a product before any final design work begins.</p>

      <div class="card-grid">
        <div class="card">
          <h3>Purpose</h3>
          <ul>
            <li>To generate inspiration for the visual identity / aesthetic.</li>
            <li>To communicate the intended style to a client for sign-off.</li>
            <li>To ensure every creative team member follows the same vision.</li>
            <li>To compare and contrast competing style directions.</li>
          </ul>
        </div>
        <div class="card">
          <h3>All Components (Spec)</h3>
          <ul>
            <li><strong>Images / photographs:</strong> Reference imagery for tone and subject matter.</li>
            <li><strong>Colour palette / swatches:</strong> The exact colours that define the project (with hex codes for digital).</li>
            <li><strong>Typography samples:</strong> Examples of font styles, weights, and headings.</li>
            <li><strong>Textures &amp; materials:</strong> Patterns, fabric, paper, wood, metal samples.</li>
            <li><strong>Logos / brand marks:</strong> Existing brand assets that must be reflected.</li>
            <li><strong>Sketches &amp; illustrations:</strong> Concept drawings or icon ideas.</li>
            <li><strong>Words / quotes / themes:</strong> Adjectives that capture the mood (e.g. "premium, futuristic, urban").</li>
            <li><strong>Audio clips / video stills:</strong> (Digital boards only) e.g. background music samples or genre references.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Hardware</h3>
          <p><strong>Physical:</strong> A1/A2 foam board, scissors, glue, magazines, swatch books, fabric scraps, printer.</p>
          <p><strong>Digital:</strong> PC/Mac, scanner, digital camera, graphics tablet, printer for client copies.</p>
        </div>
        <div class="card">
          <h3>Software</h3>
          <ul>
            <li><strong>Image editors:</strong> Adobe Photoshop, Affinity Photo, GIMP.</li>
            <li><strong>Layout / collaboration:</strong> Canva, Adobe InDesign, Milanote, Pinterest.</li>
            <li><strong>Office:</strong> PowerPoint, Word.</li>
            <li><strong>Inspiration:</strong> Pinterest, Behance, Dribbble (for sourcing imagery legally).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Target Users</h3>
          <ul>
            <li>Graphic designers, art directors, illustrators.</li>
            <li>Interior designers, fashion designers.</li>
            <li>Animators, film directors, set designers.</li>
            <li>Web and UI/UX designers.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Effectiveness</h3>
          <p>Effective when it communicates a single consistent theme and is appropriate to the target audience. Improved by removing clashing images, clarifying the colour palette, and adding annotations explaining each choice.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Mind Map vs Mood Board — When to Use Which</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;"></th>
          <th style="padding: 10px; text-align: left;">Mind Map</th>
          <th style="padding: 10px; text-align: left;">Mood Board</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Goal</strong></td>
          <td style="padding: 10px;">Generate &amp; organise <em>ideas</em>.</td>
          <td style="padding: 10px;">Define the <em>visual style</em>.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Made of</strong></td>
          <td style="padding: 10px;">Words, branches, nodes.</td>
          <td style="padding: 10px;">Images, colours, fonts, textures.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Best for</strong></td>
          <td style="padding: 10px;">Exploring concepts, structure, content.</td>
          <td style="padding: 10px;">Establishing tone, mood, aesthetic.</td>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>Comes first?</strong></td>
          <td style="padding: 10px;">Yes — used to generate ideas to put on a mood board.</td>
          <td style="padding: 10px;">After mind map — to visualise the chosen direction.</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Mind map:</strong> A spider diagram showing how ideas connect to a central theme.</p></div>
        <div class="card"><p><strong>Central node:</strong> The main theme placed in the middle of a mind map.</p></div>
        <div class="card"><p><strong>Sub-node:</strong> A more specific idea branching from a primary node.</p></div>
        <div class="card"><p><strong>Branch:</strong> The line connecting two nodes to show they are related.</p></div>
        <div class="card"><p><strong>Mood board:</strong> A collage of images, colours, fonts and textures defining the look and feel of a product.</p></div>
        <div class="card"><p><strong>Colour palette:</strong> A specific selection of colours used consistently across a design.</p></div>
        <div class="card"><p><strong>Texture:</strong> The visual or tactile quality of a surface (rough, smooth, metallic, glossy).</p></div>
        <div class="card"><p><strong>Typography sample:</strong> An example of a font, weight, size and style under consideration.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify three components that should appear on a digital mood board for a fashion magazine. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <ul>
          <li>A <strong>colour palette</strong> with hex codes that match the seasonal mood (1).</li>
          <li><strong>Typography samples</strong> showing potential fonts for the masthead and body text (1).</li>
          <li><strong>Photographic images</strong> of clothing, models or scenery that capture the visual tone (1).</li>
        </ul>
        <p><em>Other valid answers: textures, brand logos, fabric swatches, design adjectives, competitor magazine references.</em></p>
      </div>
    </div>
  `,

  r093_3_3: `
    <h1>3.3a Visualisation Diagrams</h1>
    <p>A visualisation diagram is an annotated rough drawing or sketch showing exactly how a <strong>static</strong> product will look before it is created digitally. It is the primary planning document for posters, magazine covers, DVD covers, packaging, billboards, web banners and book jackets.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Purpose</h2>
      <ul>
        <li>To plan the layout and composition of a static product before any digital work begins.</li>
        <li>To communicate design intent to a client for sign-off and feedback.</li>
        <li>To give a designer or printer all the information they need to produce the final piece without ambiguity.</li>
        <li>To compare different layout options side by side.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. All Components (Spec Required)</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Visual Components</h3>
          <ul>
            <li><strong>Page outline / dimensions</strong> (e.g. A4 portrait, 1080 × 1080px).</li>
            <li><strong>Sketches of images / graphics:</strong> Rough drawings of where photos or illustrations sit.</li>
            <li><strong>Image placeholders:</strong> Boxes with an "X" representing imagery to be added.</li>
            <li><strong>Logos / brand marks:</strong> Position of the client logo.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Text Components</h3>
          <ul>
            <li><strong>Headings / mastheads:</strong> Position and style of titles.</li>
            <li><strong>Body text blocks:</strong> Where paragraphs of text go.</li>
            <li><strong>Slogans / cover lines:</strong> Short marketing phrases.</li>
            <li><strong>Sample / dummy text:</strong> The actual words to be used.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Layout &amp; Composition</h3>
          <ul>
            <li><strong>Position</strong> of every element relative to others.</li>
            <li><strong>Margins / bleed</strong> (especially for print).</li>
            <li><strong>Alignment grid</strong> (rule of thirds, columns).</li>
            <li><strong>Hierarchy:</strong> Size differences showing what's read first.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Annotations (Critical!)</h3>
          <ul>
            <li><strong>Colour information:</strong> Hex codes (#2D033B), CMYK values, or named palette colours.</li>
            <li><strong>Typography:</strong> Specific font names, sizes (pt/px), weights, leading.</li>
            <li><strong>Dimensions:</strong> Width × height of each element in mm or px.</li>
            <li><strong>Asset sources:</strong> Where each image comes from.</li>
            <li><strong>Effects:</strong> Shadows, gradients, transparency.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Hardware</h2>
      <ul>
        <li><strong>Hand-drawn:</strong> Paper, pencils, fineliners, ruler, coloured pencils, scanner.</li>
        <li><strong>Digital:</strong> Computer/laptop, mouse, graphics tablet (Wacom), stylus, A3 printer for client review.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Software</h2>
      <ul>
        <li><strong>Desktop Publishing:</strong> Adobe InDesign, Microsoft Publisher, Affinity Publisher.</li>
        <li><strong>Image Editors:</strong> Adobe Photoshop, GIMP, Affinity Photo.</li>
        <li><strong>Vector / Illustration:</strong> Adobe Illustrator, Inkscape, Affinity Designer.</li>
        <li><strong>Quick layout / sharing:</strong> Canva, Figma, PowerPoint.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">5. Target Users</h2>
      <ul>
        <li><strong>Graphic designers</strong> — primary creators of posters, covers, packaging.</li>
        <li><strong>Magazine / book editors</strong> — agreeing covers and feature spreads.</li>
        <li><strong>Marketing managers</strong> — approving advertising campaigns.</li>
        <li><strong>Printers</strong> — interpreting the brief into final printed media.</li>
        <li><strong>Clients</strong> — reviewing and approving designs before production.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">6. Effectiveness Checklist</h2>
      <p>A visualisation diagram is <strong>effective</strong> when:</p>
      <ul>
        <li>The layout is clear and proportionate.</li>
        <li>Every element is labelled with annotations explaining colour, font and size.</li>
        <li>Sample text is included rather than placeholder squiggles.</li>
        <li>Hex codes / CMYK values appear next to every colour swatch.</li>
        <li>Specific font names are stated (not just "a serif font").</li>
        <li>Dimensions and aspect ratios match the final output.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Visualisation diagram:</strong> An annotated sketch showing the layout of a static media product.</p></div>
        <div class="card"><p><strong>Annotation:</strong> A short labelled note explaining a design choice on a planning document.</p></div>
        <div class="card"><p><strong>Composition:</strong> The arrangement of visual elements within the frame.</p></div>
        <div class="card"><p><strong>Hierarchy:</strong> Visual ordering of elements so the most important is seen first.</p></div>
        <div class="card"><p><strong>Hex code:</strong> A 6-digit code (e.g. #FF5733) representing a precise colour.</p></div>
        <div class="card"><p><strong>Bleed:</strong> Extra 3mm margin around print designs so background colour reaches the trim line.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify three components, other than sketches, that should appear on a detailed visualisation diagram for a magazine front cover. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <ul>
          <li>The <strong>masthead</strong> with the magazine title (1).</li>
          <li>Sample <strong>cover lines</strong> previewing articles inside (1).</li>
          <li><strong>Annotations</strong> stating exact font names, sizes and hex colour codes (1).</li>
        </ul>
        <p><em>Other valid answers: barcode and price, page dimensions, image placeholders, alignment grid, brand logo.</em></p>
      </div>
    </div>
  `,

  // ---- 3.3b STORYBOARDS ----
  r093_3_3b: `
    <h1>3.3b Storyboards</h1>
    <p>A storyboard is a sequence of drawings (panels) representing every shot planned for a moving-image product such as a film, animation, advert or music video. It plans the visuals, audio, timing and camera work in chronological order before any filming begins.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Purpose</h2>
      <ul>
        <li>To plan the visual flow of a moving-image product shot-by-shot.</li>
        <li>To communicate the director's vision to camera, lighting and editing teams.</li>
        <li>To identify problems (timing, continuity, missing shots) before expensive filming.</li>
        <li>To synchronise audio cues with visual events.</li>
        <li>To act as a checklist on the shoot day.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. All Components (Spec Required)</h2>
      <p>Every storyboard panel should contain:</p>
      <div class="card-grid">
        <div class="card">
          <h3>Visual Information</h3>
          <ul>
            <li><strong>Scene number / shot number:</strong> e.g. Scene 2, Shot 3.</li>
            <li><strong>Sketch of the shot:</strong> A rough drawing of what the camera sees.</li>
            <li><strong>Location / setting:</strong> e.g. INT. KITCHEN — DAY.</li>
            <li><strong>Action arrows:</strong> Showing character or camera movement direction.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Camera Information</h3>
          <ul>
            <li><strong>Shot type:</strong> Close-up, mid shot, long shot, extreme close-up, two-shot.</li>
            <li><strong>Camera angle:</strong> High, low, eye-level, aerial, Dutch tilt.</li>
            <li><strong>Camera movement:</strong> Pan, tilt, zoom, track, dolly, handheld.</li>
            <li><strong>Framing:</strong> Rule of thirds, headroom.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Timing</h3>
          <ul>
            <li><strong>Shot duration:</strong> In seconds or frames (e.g. 3s, 72 frames @ 24fps).</li>
            <li><strong>Total scene length</strong> running cumulatively.</li>
            <li><strong>Frame rate</strong> stated (e.g. 24fps for film).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Audio &amp; Effects</h3>
          <ul>
            <li><strong>Dialogue:</strong> Lines spoken in this shot.</li>
            <li><strong>Sound effects (SFX):</strong> Diegetic sounds (footsteps, doors).</li>
            <li><strong>Music / soundtrack:</strong> Non-diegetic mood.</li>
            <li><strong>Lighting notes:</strong> Low-key, high-key, side-light.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Transitions</h3>
          <ul>
            <li><strong>Cut</strong> (instant change).</li>
            <li><strong>Fade-in / fade-out</strong> (to or from black).</li>
            <li><strong>Dissolve</strong> (smooth blend).</li>
            <li><strong>Wipe / cross-fade.</strong></li>
          </ul>
        </div>
        <div class="card">
          <h3>Annotations</h3>
          <ul>
            <li>Notes about <strong>props</strong> visible in shot.</li>
            <li><strong>Costume</strong> details.</li>
            <li>Special effects (VFX) markers.</li>
            <li>Continuity reminders.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Hardware</h2>
      <ul>
        <li><strong>Hand-drawn:</strong> Pre-printed storyboard template paper, pencils, ruler, fine-liners, scanner.</li>
        <li><strong>Digital:</strong> Computer, graphics tablet (Wacom Cintiq), stylus, dual monitors for reference.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Software</h2>
      <ul>
        <li><strong>Dedicated:</strong> Storyboarder (free), Toon Boom Storyboard Pro, FrameForge, Plot.</li>
        <li><strong>Drawing:</strong> Adobe Photoshop, Procreate, Krita, Clip Studio Paint.</li>
        <li><strong>Office templates:</strong> Microsoft Word, PowerPoint storyboard templates.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">5. Target Users</h2>
      <ul>
        <li><strong>Directors</strong> — establishing the visual blueprint of the production.</li>
        <li><strong>Camera operators &amp; cinematographers</strong> — executing each planned shot.</li>
        <li><strong>Animators</strong> — using the panels as the basis for keyframes.</li>
        <li><strong>Video editors</strong> — assembling shots in the order shown.</li>
        <li><strong>Sound designers</strong> — knowing where SFX must align.</li>
        <li><strong>Producers / clients</strong> — approving the visual direction.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">6. Effectiveness Checklist</h2>
      <p>A storyboard is <strong>effective</strong> when:</p>
      <ul>
        <li>Every shot has a unique number and clear sketch.</li>
        <li>Shot type, angle and movement are explicit on every panel.</li>
        <li>Timings add up to the total target duration.</li>
        <li>Audio cues are synced visually to the panels they support.</li>
        <li>Transitions between panels are labelled.</li>
        <li>Another team could film/animate without asking questions.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify four pieces of information that should appear on every panel of a detailed storyboard. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <ul>
          <li><strong>Scene / shot number</strong> (1).</li>
          <li><strong>Camera shot type and angle</strong> (e.g. low-angle close-up) (1).</li>
          <li><strong>Shot duration</strong> in seconds or frames (1).</li>
          <li><strong>Audio cue / dialogue / SFX</strong> for that shot (1).</li>
        </ul>
        <p><em>Other valid answers: camera movement, lighting notes, transitions, props, location/setting.</em></p>
      </div>
    </div>
  `,

  // ---- 3.3c SCRIPTS ----
  r093_3_3c: `
    <h1>3.3c Scripts</h1>
    <p>A script is the written blueprint for a moving-image, audio or interactive product. It contains every line of dialogue, every action, and every direction needed for actors, voice-over artists and crew to perform.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Purpose</h2>
      <ul>
        <li>To document the dialogue and action of every scene in chronological order.</li>
        <li>To allow actors to learn their lines.</li>
        <li>To give the director and crew the basis for filming and editing.</li>
        <li>To estimate runtime (1 page of standard script = ~1 minute of screen time).</li>
        <li>To support legal protection of the writer's work via copyright.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. All Components (Spec Required)</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Scene Heading (Slugline)</h3>
          <p>Capitalised single line that locates the scene in space and time.</p>
          <p><strong>Format:</strong> <code>INT. KITCHEN — DAY</code> or <code>EXT. PARK — NIGHT</code>.</p>
          <ul>
            <li><strong>INT</strong> = interior (inside).</li>
            <li><strong>EXT</strong> = exterior (outside).</li>
            <li>Time of day: DAY, NIGHT, DUSK, DAWN.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Action / Description</h3>
          <p>Present-tense paragraphs describing what is happening on screen.</p>
          <p><em>"Sarah opens the fridge, sees the empty shelves, sighs and reaches for her phone."</em></p>
          <p>Should describe only what the audience can <strong>see and hear</strong>.</p>
        </div>
        <div class="card">
          <h3>Character Names</h3>
          <p>Centred and in CAPITALS above their dialogue.</p>
          <pre style="background:#f4f4f4;padding:8px;border-radius:4px;font-size:0.85rem;">                    SARAH
        I can't believe we're out of milk again.</pre>
        </div>
        <div class="card">
          <h3>Dialogue</h3>
          <p>The exact words spoken by each character.</p>
          <p>Centred under the character's name in normal case.</p>
        </div>
        <div class="card">
          <h3>Parentheticals (Wrylies)</h3>
          <p>Short instructions in brackets telling actors <em>how</em> to deliver a line.</p>
          <p><em>(whispering), (angrily), (to herself), (sarcastic).</em></p>
          <p>Use sparingly — overuse looks amateur.</p>
        </div>
        <div class="card">
          <h3>Transitions</h3>
          <p>Right-aligned, capitalised instructions to the editor.</p>
          <ul>
            <li><strong>CUT TO:</strong> standard cut.</li>
            <li><strong>FADE IN: / FADE OUT.</strong></li>
            <li><strong>DISSOLVE TO:</strong></li>
            <li><strong>SMASH CUT TO:</strong> abrupt cut.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Sound Effects (SFX)</h3>
          <p>Capitalised in the action block to flag audio events.</p>
          <p><em>"A loud BANG echoes through the hallway."</em></p>
        </div>
        <div class="card">
          <h3>Voice-Over (V.O.) &amp; Off-Screen (O.S.)</h3>
          <p><strong>(V.O.)</strong> = narrator not in the scene.</p>
          <p><strong>(O.S.)</strong> = character speaks but is off-camera.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Industry Format Rules</h2>
      <ul>
        <li><strong>Font:</strong> Courier 12pt — every page = one minute of screen time.</li>
        <li><strong>Margins:</strong> Left 1.5", right 1", top/bottom 1".</li>
        <li><strong>Page numbers</strong> top-right.</li>
        <li><strong>Title page</strong> with title, "by [name]", contact details.</li>
        <li><strong>One scene = one slugline.</strong></li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Hardware &amp; Software</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Hardware</h3>
          <ul>
            <li>Computer / laptop.</li>
            <li>Keyboard (most important — typing speed matters).</li>
            <li>Printer for table-reads.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Software</h3>
          <ul>
            <li><strong>Dedicated:</strong> Final Draft, Celtx, WriterDuet, Fade In, Trelby (free), Highland.</li>
            <li><strong>Word processors:</strong> Microsoft Word (with screenplay template), Google Docs.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">5. Target Users</h2>
      <ul>
        <li><strong>Script writers / screenwriters</strong> — primary creators.</li>
        <li><strong>Actors / voice-over artists</strong> — to learn lines.</li>
        <li><strong>Directors</strong> — to plan shots from descriptions.</li>
        <li><strong>Producers</strong> — to estimate budget and runtime.</li>
        <li><strong>Editors</strong> — to track continuity in post.</li>
        <li><strong>Animators</strong> — to time character lip-sync.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">6. Sample Script Snippet</h2>
      <pre style="background: #f4f4f4; padding: 15px; border-radius: 6px; font-family: 'Courier New', monospace; font-size: 0.85rem; line-height: 1.4; overflow-x: auto;">
INT. KITCHEN — DAY

Sunlight streams through the window. SARAH (16) stands
at the counter staring at an empty cereal box.

                    SARAH
                (frustrated)
        Mum, we're out of milk. Again!

A door SLAMS upstairs. Footsteps thunder down.

                    MUM (O.S.)
        Then put it on the shopping list!

                                CUT TO:

EXT. CORNER SHOP — DAY

Sarah pushes through the door, a £5 note crumpled in
her fist.</pre>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify four components of a film script and describe what each shows. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <ul>
          <li><strong>Slugline / scene heading</strong> — states INT/EXT, location and time of day (1).</li>
          <li><strong>Action lines</strong> — describe what the audience sees and hears in present tense (1).</li>
          <li><strong>Character name</strong> — capitalised above dialogue to show who is speaking (1).</li>
          <li><strong>Dialogue</strong> — the exact words the character speaks (1).</li>
        </ul>
        <p><em>Other valid answers: parentheticals, transitions, V.O./O.S., SFX cues.</em></p>
      </div>
    </div>
  `,

  // ---- 3.3d WIREFRAMES ----
  r093_3_3d: `
    <h1>3.3d Wireframe Templates</h1>
    <p>A wireframe is a black-and-white blueprint showing the layout, structure and functional regions of an interactive product (website, mobile app, software UI or game menu) before any colour, imagery or final design is applied.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Purpose</h2>
      <ul>
        <li>To plan the layout and structure of a digital interface.</li>
        <li>To agree the user journey before expensive coding begins.</li>
        <li>To make sure every screen has space for required content (logo, search, navigation).</li>
        <li>To support usability testing before full development.</li>
        <li>To keep the focus on <em>function</em> rather than aesthetic decisions.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. All Components (Spec Required)</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Structural Regions</h3>
          <ul>
            <li><strong>Header / banner</strong> at the top.</li>
            <li><strong>Footer</strong> at the bottom (contact, copyright, social).</li>
            <li><strong>Navigation menu</strong> (top bar or sidebar).</li>
            <li><strong>Main content area</strong> (hero / body).</li>
            <li><strong>Sidebar(s)</strong> for related links or filters.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Content Placeholders</h3>
          <ul>
            <li><strong>Image boxes</strong> (rectangle with diagonal cross "X").</li>
            <li><strong>Text blocks</strong> (horizontal lines or "Lorem ipsum").</li>
            <li><strong>Headings</strong> shown as bold lines.</li>
            <li><strong>Logo placement</strong>.</li>
            <li><strong>Video placeholders</strong> (rectangle with play triangle).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Interactive Elements</h3>
          <ul>
            <li><strong>Buttons</strong> (rounded rectangles labelled e.g. "BUY NOW").</li>
            <li><strong>Forms / input fields</strong>.</li>
            <li><strong>Search bar</strong>.</li>
            <li><strong>Drop-down menus / hamburger icons</strong>.</li>
            <li><strong>Hyperlinks</strong> indicated by underline.</li>
            <li><strong>Carousels / sliders</strong>.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Layout Information</h3>
          <ul>
            <li><strong>Grid / column structure</strong> (12-col bootstrap, 4-col mobile).</li>
            <li><strong>Page dimensions</strong> (e.g. 1920×1080 desktop / 375×812 mobile).</li>
            <li><strong>Responsive breakpoints</strong> showing how layout changes between desktop / tablet / mobile.</li>
            <li><strong>Page name / route</strong> (home.html, /products).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Annotations</h3>
          <ul>
            <li>Functional notes ("clicking logo returns to home").</li>
            <li>Behaviour ("hover state changes colour").</li>
            <li>Linked pages from each button.</li>
            <li>Hidden content rules.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Hardware</h2>
      <ul>
        <li>PC / laptop with mouse and keyboard.</li>
        <li>Graphics tablet (Wacom) for hand-drawn digital wireframes.</li>
        <li>Touchscreen tablet (iPad with Apple Pencil) for sketch-style wireframes.</li>
        <li>Whiteboard / paper for early-stage rough sketching.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Software</h2>
      <ul>
        <li><strong>Dedicated:</strong> Balsamiq, Adobe XD, Figma, Sketch, Axure, MockFlow, Wireframe.cc.</li>
        <li><strong>General:</strong> PowerPoint, Microsoft Visio, Lucidchart, Draw.io.</li>
        <li><strong>Drawing:</strong> Adobe Illustrator, Affinity Designer.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">5. Target Users</h2>
      <ul>
        <li><strong>Web designers</strong> — defining layouts and user journeys.</li>
        <li><strong>UI/UX designers</strong> — testing usability and information architecture.</li>
        <li><strong>App developers</strong> — using as a build spec.</li>
        <li><strong>Game designers</strong> — planning HUD and menu screens.</li>
        <li><strong>Project managers / clients</strong> — approving structure before visual design.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">6. Wireframe Fidelity</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;">Fidelity</th>
          <th style="padding: 10px; text-align: left;">Look</th>
          <th style="padding: 10px; text-align: left;">When to Use</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Low-fidelity</strong></td>
          <td style="padding: 10px;">Hand-drawn / very rough boxes &amp; lines.</td>
          <td style="padding: 10px;">Early brainstorming, fast iteration.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Mid-fidelity</strong></td>
          <td style="padding: 10px;">Greyscale digital boxes with placeholder text.</td>
          <td style="padding: 10px;">Standard wireframes for client sign-off.</td>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>High-fidelity</strong></td>
          <td style="padding: 10px;">Pixel-accurate, near-final visual mockups.</td>
          <td style="padding: 10px;">Pre-development sign-off &amp; usability tests.</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify three components shown on a wireframe for a homepage. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <ul>
          <li><strong>Header</strong> with the logo and navigation menu (1).</li>
          <li><strong>Image placeholders</strong> shown as boxes with an "X" through them (1).</li>
          <li><strong>Footer</strong> containing contact information and copyright (1).</li>
        </ul>
        <p><em>Other valid answers: search bar, call-to-action button, sidebar, breakpoints, annotations.</em></p>
      </div>
    </div>
  `,

  // ---- 3.3e FLOW CHARTS ----
  r093_3_3e: `
    <h1>3.3e Flow Charts</h1>
    <p>A flow chart is a diagram that maps the sequence of decisions and actions in a process. In iMedia, flow charts are essential for planning <strong>game logic</strong> (player choices and consequences) and <strong>website navigation</strong> (the journey from page to page).</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Purpose</h2>
      <ul>
        <li>To plan the path a user takes through an interactive product.</li>
        <li>To map every decision point and the outcomes that follow.</li>
        <li>To identify dead-ends, loops or missing branches before development.</li>
        <li>To document game rules so programmers know exactly what to build.</li>
        <li>To plan website information architecture and link structure.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Standard Flow Chart Symbols (All Components)</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;">Shape</th>
          <th style="padding: 10px; text-align: left;">Name</th>
          <th style="padding: 10px; text-align: left;">Meaning</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">⬭ (oval / stadium)</td>
          <td style="padding: 10px;"><strong>Terminator</strong></td>
          <td style="padding: 10px;">Start or End of the process. Always at the top and bottom.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">▭ (rectangle)</td>
          <td style="padding: 10px;"><strong>Process</strong></td>
          <td style="padding: 10px;">An action, task or step (e.g. "Player picks up sword").</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">◇ (diamond)</td>
          <td style="padding: 10px;"><strong>Decision</strong></td>
          <td style="padding: 10px;">A Yes/No or branching question (e.g. "Has player got key?"). Two arrows leave it.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">▱ (parallelogram)</td>
          <td style="padding: 10px;"><strong>Input / Output</strong></td>
          <td style="padding: 10px;">Data entering or leaving the system (e.g. "Enter username", "Display score").</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">→ (arrow)</td>
          <td style="padding: 10px;"><strong>Flow line</strong></td>
          <td style="padding: 10px;">Direction of travel between symbols.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">○ (circle / connector)</td>
          <td style="padding: 10px;"><strong>Connector</strong></td>
          <td style="padding: 10px;">Links sections of a chart that span multiple pages.</td>
        </tr>
        <tr>
          <td style="padding: 10px;">⊃ (sub-routine)</td>
          <td style="padding: 10px;"><strong>Predefined Process</strong></td>
          <td style="padding: 10px;">A reusable named process documented elsewhere (e.g. "Save game").</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Components Specific to Game Logic</h2>
      <ul>
        <li><strong>Player input nodes</strong> (key press, mouse click).</li>
        <li><strong>Game states</strong> (Title, Playing, Paused, Game Over).</li>
        <li><strong>Win / lose conditions</strong> as decision branches.</li>
        <li><strong>Score / lives</strong> tracked as variables in process boxes.</li>
        <li><strong>Loops</strong> (e.g. "Repeat until score = 10").</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Components Specific to Website Navigation</h2>
      <ul>
        <li><strong>Page nodes</strong> (Home, About, Contact, Products).</li>
        <li><strong>Hyperlinks</strong> shown as connecting arrows.</li>
        <li><strong>External links</strong> with a special icon (out-of-system arrow).</li>
        <li><strong>Authentication branches</strong> (logged in vs guest).</li>
        <li><strong>Form processes</strong> (input → validate → confirm).</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">5. Hardware &amp; Software</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Hardware</h3>
          <ul>
            <li>Computer / laptop.</li>
            <li>Mouse / graphics tablet for digital diagrams.</li>
            <li>Pencil and grid paper for hand-drawn drafts.</li>
            <li>Printer / large format plotter for team review.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Software</h3>
          <ul>
            <li><strong>Dedicated:</strong> Microsoft Visio, Lucidchart, Draw.io / diagrams.net, SmartDraw.</li>
            <li><strong>Office:</strong> PowerPoint SmartArt, Word.</li>
            <li><strong>Creative:</strong> Figma, Miro, Adobe Illustrator.</li>
            <li><strong>Game engines:</strong> Unreal Blueprints, Unity Visual Scripting (visual flow charts that compile to logic).</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">6. Target Users</h2>
      <ul>
        <li><strong>Game designers / developers</strong> — for game logic and rule sets.</li>
        <li><strong>Web designers / developers</strong> — for navigation and user journeys.</li>
        <li><strong>UX architects</strong> — for sitemaps and information architecture.</li>
        <li><strong>Software engineers</strong> — for system processes and algorithms.</li>
        <li><strong>Project managers</strong> — for documenting and approving logic.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Name three symbols used in a flow chart and describe what each represents. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <ul>
          <li><strong>Oval (terminator)</strong> — represents the start or end of the process (1).</li>
          <li><strong>Rectangle (process)</strong> — represents an action or task (1).</li>
          <li><strong>Diamond (decision)</strong> — represents a Yes/No question that branches the path (1).</li>
        </ul>
        <p><em>Other valid answers: parallelogram (input/output), arrow (flow line), circle (connector).</em></p>
      </div>
    </div>
  `,

  // ---- 3.3f ASSET LOG ----
  r093_3_3f: `
    <h1>3.3f Asset Lists / Asset Logs</h1>
    <p>An asset log is a structured table that records every individual file — image, audio clip, font, video, 3D model, document — used in a media production. It is essential for tracking sources, versions, technical properties and legal compliance.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Purpose</h2>
      <ul>
        <li>To track every asset and where it came from.</li>
        <li>To prove copyright permissions are in place (legal compliance).</li>
        <li>To organise files so the production team can find them quickly.</li>
        <li>To check technical properties match the intended output (resolution, format).</li>
        <li>To support version control (logo_v1, logo_v2, logo_final).</li>
        <li>To enable accurate budget tracking for paid-for assets.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. All Components (Spec Required)</h2>
      <p>An asset log is normally a spreadsheet table with these columns:</p>
      <div class="card-grid">
        <div class="card">
          <h3>Identification</h3>
          <ul>
            <li><strong>Asset ID / number</strong> (e.g. IMG_01, AUD_03).</li>
            <li><strong>Asset name / file name</strong> (e.g. cyclist_hero.jpg).</li>
            <li><strong>Description</strong> of what the asset is.</li>
            <li><strong>Version</strong> (v1, v2, final).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Source</h3>
          <ul>
            <li><strong>Source / URL</strong> (e.g. unsplash.com/p/abc).</li>
            <li><strong>Source type</strong> (Self-created / Stock / Royalty-free / Commissioned / Creative Commons).</li>
            <li><strong>Date acquired</strong>.</li>
            <li><strong>Author / creator</strong>.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Technical Properties</h3>
          <ul>
            <li><strong>File format</strong> (.jpg, .png, .wav, .mp4).</li>
            <li><strong>File size</strong> (KB, MB).</li>
            <li><strong>Dimensions / resolution</strong> (e.g. 3000×2000 px, 300 DPI).</li>
            <li><strong>Duration</strong> (for audio/video, in seconds).</li>
            <li><strong>Sample rate / bit depth</strong> (audio).</li>
            <li><strong>Frame rate / aspect ratio</strong> (video).</li>
            <li><strong>Colour mode</strong> (RGB / CMYK).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Legal Status</h3>
          <ul>
            <li><strong>Copyright owner</strong> (myself / the client / a third party).</li>
            <li><strong>Licence type</strong> (Royalty-free / CC BY / Editorial only).</li>
            <li><strong>Permission obtained?</strong> (Y/N).</li>
            <li><strong>Cost / royalty</strong> paid.</li>
            <li><strong>Model release / property release</strong> on file?</li>
          </ul>
        </div>
        <div class="card">
          <h3>Usage</h3>
          <ul>
            <li><strong>Where used</strong> (which scene, page, slide, screen).</li>
            <li><strong>Status</strong> (Pending / Approved / Final).</li>
            <li><strong>Storage location / path</strong> on the network drive or cloud.</li>
            <li><strong>Notes</strong> on edits required.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Sample Asset Log</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 0.85rem;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 8px; text-align: left;">ID</th>
          <th style="padding: 8px; text-align: left;">Name</th>
          <th style="padding: 8px; text-align: left;">Source</th>
          <th style="padding: 8px; text-align: left;">Format</th>
          <th style="padding: 8px; text-align: left;">Properties</th>
          <th style="padding: 8px; text-align: left;">Legal</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px;">IMG_01</td>
          <td style="padding: 8px;">cyclist_hero.jpg</td>
          <td style="padding: 8px;">unsplash.com</td>
          <td style="padding: 8px;">JPEG</td>
          <td style="padding: 8px;">3000×2000 / 300DPI</td>
          <td style="padding: 8px;">Unsplash Licence</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px;">LOG_01</td>
          <td style="padding: 8px;">eco-bolt_logo_v3.png</td>
          <td style="padding: 8px;">Self-created (Photoshop)</td>
          <td style="padding: 8px;">PNG (transparent)</td>
          <td style="padding: 8px;">800×800</td>
          <td style="padding: 8px;">My copyright</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px;">AUD_01</td>
          <td style="padding: 8px;">background_music.wav</td>
          <td style="padding: 8px;">freesound.org</td>
          <td style="padding: 8px;">WAV</td>
          <td style="padding: 8px;">44.1kHz / 16-bit</td>
          <td style="padding: 8px;">CC BY 4.0 — credit "Mike S"</td>
        </tr>
        <tr>
          <td style="padding: 8px;">FNT_01</td>
          <td style="padding: 8px;">Bebas Neue</td>
          <td style="padding: 8px;">FontSquirrel.com</td>
          <td style="padding: 8px;">TTF</td>
          <td style="padding: 8px;">N/A</td>
          <td style="padding: 8px;">SIL Open Font Licence</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Hardware &amp; Software</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Hardware</h3>
          <ul>
            <li>Computer / laptop with keyboard.</li>
            <li>External / network drive for storing asset library.</li>
            <li>Cloud storage (OneDrive, Google Drive, Dropbox).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Software</h3>
          <ul>
            <li><strong>Spreadsheets:</strong> Microsoft Excel, Google Sheets, Apple Numbers.</li>
            <li><strong>DAM systems:</strong> Adobe Bridge, Bynder, Canto.</li>
            <li><strong>Project tools:</strong> Notion, Airtable, Trello.</li>
            <li><strong>Word / docs</strong> (acceptable but harder to filter).</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">5. Target Users</h2>
      <ul>
        <li><strong>Project managers / producers</strong> — overall responsibility for the log.</li>
        <li><strong>Designers / animators / editors</strong> — pulling assets into final products.</li>
        <li><strong>Legal / compliance officers</strong> — verifying licences before release.</li>
        <li><strong>Clients</strong> — checking what content has been licensed.</li>
        <li><strong>Auditors</strong> — proving copyright due diligence in case of dispute.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Explain why a media producer must keep an asset log when creating a TV advert. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>An asset log records the source and licence of every image, font, music track and video clip used (1). This proves that the producer has the legal right to use each asset, protecting the company from copyright infringement claims (1). It also tracks technical properties such as resolution and format (1) so the editor can confirm every asset is suitable for the final output and avoid pixelation when broadcast in HD (1).</p>
      </div>
    </div>
  `,

  // ---- 3.5 PRE-PRODUCTION QUICK REFERENCE ----
  r093_3_5: `
    <h1>Pre-Production Documents — Quick Reference</h1>
    <p>One page that summarises every pre-production planning document covered by the OCR Cambridge Nationals Creative iMedia specification. Use it as a revision sheet, checklist, and "which document do I need?" decision table.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. All Pre-Production Documents at a Glance</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;">Document</th>
          <th style="padding: 10px; text-align: left;">Purpose</th>
          <th style="padding: 10px; text-align: left;">Used For</th>
          <th style="padding: 10px; text-align: left;">Key Components</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Work Plan / Gantt</strong></td>
          <td style="padding: 10px;">Schedule the project.</td>
          <td style="padding: 10px;">All projects.</td>
          <td style="padding: 10px;">Tasks, durations, milestones, contingencies, resources.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Mind Map</strong></td>
          <td style="padding: 10px;">Generate &amp; organise ideas.</td>
          <td style="padding: 10px;">Early brainstorming.</td>
          <td style="padding: 10px;">Central node, primary nodes, sub-nodes, branches, keywords.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Mood Board</strong></td>
          <td style="padding: 10px;">Define the visual style.</td>
          <td style="padding: 10px;">Branding / aesthetic.</td>
          <td style="padding: 10px;">Images, colours, fonts, textures, samples, themes.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Visualisation Diagram</strong></td>
          <td style="padding: 10px;">Plan a static layout.</td>
          <td style="padding: 10px;">Posters, magazine covers, packaging.</td>
          <td style="padding: 10px;">Sketches, text, layout, dimensions, annotations (colours/fonts).</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Storyboard</strong></td>
          <td style="padding: 10px;">Plan a moving-image product.</td>
          <td style="padding: 10px;">Films, animations, adverts.</td>
          <td style="padding: 10px;">Scene/shot numbers, sketches, camera info, timing, audio, transitions.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Script</strong></td>
          <td style="padding: 10px;">Plan dialogue &amp; action.</td>
          <td style="padding: 10px;">Films, plays, voice-overs, animation.</td>
          <td style="padding: 10px;">Slugline, action, character names, dialogue, parentheticals, transitions.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Wireframe</strong></td>
          <td style="padding: 10px;">Plan an interface layout.</td>
          <td style="padding: 10px;">Websites, apps, game UI.</td>
          <td style="padding: 10px;">Header, footer, nav, content areas, image/text placeholders, buttons.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Flow Chart</strong></td>
          <td style="padding: 10px;">Plan logic / navigation.</td>
          <td style="padding: 10px;">Games, websites, software.</td>
          <td style="padding: 10px;">Terminator, process, decision, input/output, flow lines, connectors.</td>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>Asset Log</strong></td>
          <td style="padding: 10px;">Track files &amp; legal status.</td>
          <td style="padding: 10px;">All projects with multiple assets.</td>
          <td style="padding: 10px;">Asset name, source, format, properties, legal status, where used.</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. "Which Document Do I Need?" — Match the Product</h2>
      <p>A common 4-mark exam question asks you to identify the most suitable planning document for a given product.</p>

      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;">Product Scenario</th>
          <th style="padding: 10px; text-align: left;">Best Document(s)</th>
          <th style="padding: 10px; text-align: left;">Why</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Magazine front cover</td>
          <td style="padding: 10px;">Visualisation Diagram + Mood Board</td>
          <td style="padding: 10px;">Static layout with annotations; mood board sets the style.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">30-second TV advert</td>
          <td style="padding: 10px;">Storyboard + Script</td>
          <td style="padding: 10px;">Sequential shots and dialogue planned in time order.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Mobile app / website</td>
          <td style="padding: 10px;">Wireframe + Flow Chart</td>
          <td style="padding: 10px;">Wireframe shows screen layout; flow chart shows navigation.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Computer game level</td>
          <td style="padding: 10px;">Flow Chart + Asset Log + Storyboard</td>
          <td style="padding: 10px;">Branching player decisions, listing every sprite/sound, planning cutscenes.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Photo shoot for an advert</td>
          <td style="padding: 10px;">Visualisation Diagram + Shot List (Script)</td>
          <td style="padding: 10px;">Plans the framing of each still image to be captured.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Animated explainer video</td>
          <td style="padding: 10px;">Storyboard + Script + Asset Log</td>
          <td style="padding: 10px;">Visual sequence, voice-over and tracked character / SFX assets.</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Brand identity (logo &amp; guidelines)</td>
          <td style="padding: 10px;">Mind Map + Mood Board + Visualisation Diagram</td>
          <td style="padding: 10px;">Brainstorm concepts, define style, sketch logo variants.</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Podcast / radio show</td>
          <td style="padding: 10px;">Script + Asset Log + Work Plan</td>
          <td style="padding: 10px;">Voice content, music/SFX permissions, recording schedule.</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Hardware &amp; Software at a Glance</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;">Document</th>
          <th style="padding: 10px; text-align: left;">Common Software</th>
          <th style="padding: 10px; text-align: left;">Common Hardware</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Work Plan</td>
          <td style="padding: 10px;">MS Project, Excel, GanttProject, Asana</td>
          <td style="padding: 10px;">PC / laptop</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Mind Map</td>
          <td style="padding: 10px;">MindView, XMind, MindMeister, Coggle</td>
          <td style="padding: 10px;">PC, graphics tablet, paper</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Mood Board</td>
          <td style="padding: 10px;">Photoshop, Canva, Milanote, Pinterest</td>
          <td style="padding: 10px;">Foam board (physical) or PC, scanner</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Visualisation</td>
          <td style="padding: 10px;">InDesign, Publisher, Photoshop, Illustrator</td>
          <td style="padding: 10px;">PC, graphics tablet, scanner</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Storyboard</td>
          <td style="padding: 10px;">Storyboarder, Toon Boom, Photoshop, FrameForge</td>
          <td style="padding: 10px;">Graphics tablet, scanner</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Script</td>
          <td style="padding: 10px;">Final Draft, Celtx, WriterDuet, MS Word</td>
          <td style="padding: 10px;">PC + keyboard</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Wireframe</td>
          <td style="padding: 10px;">Balsamiq, Figma, Adobe XD, Sketch</td>
          <td style="padding: 10px;">PC, mouse, graphics tablet</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Flow Chart</td>
          <td style="padding: 10px;">MS Visio, Lucidchart, Draw.io</td>
          <td style="padding: 10px;">PC + mouse</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Asset Log</td>
          <td style="padding: 10px;">Excel, Google Sheets, Adobe Bridge, Airtable</td>
          <td style="padding: 10px;">PC, networked storage</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Master Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Pre-production:</strong> The planning phase before any creation begins.</p></div>
        <div class="card"><p><strong>Work plan:</strong> A scheduling document listing tasks, durations and resources.</p></div>
        <div class="card"><p><strong>Mind map:</strong> A spider diagram for organising ideas around a central theme.</p></div>
        <div class="card"><p><strong>Mood board:</strong> A collage that defines the visual style of a project.</p></div>
        <div class="card"><p><strong>Visualisation diagram:</strong> An annotated sketch of a static product's layout.</p></div>
        <div class="card"><p><strong>Storyboard:</strong> Sequential panels planning a moving-image product.</p></div>
        <div class="card"><p><strong>Script:</strong> Written blueprint of dialogue and action.</p></div>
        <div class="card"><p><strong>Wireframe:</strong> Black-and-white interface blueprint.</p></div>
        <div class="card"><p><strong>Flow chart:</strong> Diagram of decisions and actions linked by arrows.</p></div>
        <div class="card"><p><strong>Asset log:</strong> Table tracking every file used and its legal status.</p></div>
        <div class="card"><p><strong>Annotation:</strong> Short labelled note explaining a design choice.</p></div>
        <div class="card"><p><strong>Convention:</strong> An accepted rule for how a media product is designed.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">5. Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: A client has commissioned a new mobile app for tracking exercise. State the most suitable pre-production document and explain why. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>The most suitable document is a <strong>wireframe</strong> (1). A wireframe maps out the screen layout and position of buttons, navigation bars and content areas without colour or images, allowing the developer to see exactly where each functional element will sit (1). It is more useful than a visualisation diagram for an interactive product because it focuses on usability and navigation rather than just decorative appearance (1).</p>
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

    <div class="homework-box">
      <h2 class="section-title">5. Online vs Offline — Advantages &amp; Disadvantages</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;"></th>
          <th style="padding: 10px; text-align: left;">Advantages</th>
          <th style="padding: 10px; text-align: left;">Disadvantages</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Online</strong><br>(websites, apps, streaming)</td>
          <td style="padding: 10px;">
            <ul style="margin: 0; padding-left: 18px;">
              <li>Global reach, 24/7 availability.</li>
              <li>Cheap and instant distribution.</li>
              <li>Easy to update or correct content.</li>
              <li>Built-in analytics on user behaviour.</li>
            </ul>
          </td>
          <td style="padding: 10px;">
            <ul style="margin: 0; padding-left: 18px;">
              <li>Requires internet — excludes some audiences.</li>
              <li>Vulnerable to piracy and copying.</li>
              <li>Heavy competition for attention.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>Offline</strong><br>(DVD, USB, paper)</td>
          <td style="padding: 10px;">
            <ul style="margin: 0; padding-left: 18px;">
              <li>Works without an internet connection.</li>
              <li>Tactile / collectable formats (e.g. Blu-ray).</li>
              <li>High image/audio quality possible.</li>
              <li>More controllable distribution.</li>
            </ul>
          </td>
          <td style="padding: 10px;">
            <ul style="margin: 0; padding-left: 18px;">
              <li>Costs money to manufacture and ship.</li>
              <li>Cannot be updated after release.</li>
              <li>Smaller, slower geographic reach.</li>
              <li>Environmental impact (plastic, paper).</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Distribution platform:</strong> The medium or service through which a finished media product is delivered to its audience.</p></div>
        <div class="card"><p><strong>Online distribution:</strong> Delivery of a media product over the internet (websites, apps, streaming, social media).</p></div>
        <div class="card"><p><strong>Physical distribution:</strong> Delivery of a product through tangible objects (DVDs, USB sticks, printed paper).</p></div>
        <div class="card"><p><strong>Streaming:</strong> Playing media instantly as it downloads, rather than waiting for the entire file.</p></div>
        <div class="card"><p><strong>Bandwidth:</strong> The amount of data that can be sent over an internet connection per second — affects how fast a product can be streamed.</p></div>
        <div class="card"><p><strong>Kiosk:</strong> A public-facing physical hardware platform (e.g. a museum touch screen) running locked-down media.</p></div>
        <div class="card"><p><strong>Responsive design:</strong> Building a product so that the layout automatically adjusts to fit any screen size.</p></div>
        <div class="card"><p><strong>Cross-platform:</strong> Designing a product so it works correctly across multiple devices and operating systems.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: A media company is releasing a feature film. Identify two distribution platforms they could use and explain why each is suitable. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. <strong>Cinema</strong> (1) — provides the highest-quality 4K projection and immersive audio, allowing the audience to experience the film as the director intended and generating significant ticket revenue (1).</p>
        <p>2. <strong>Streaming service (e.g. Netflix, Disney+)</strong> (1) — gives global digital reach so audiences can watch on demand on any device, extending the film's commercial life long after the cinema window closes (1).</p>
      </div>
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
    <p>Once your visual identity is established, you must plan how the final digital graphic product will look, feel, and function. This area covers the design conventions, technical properties, asset sourcing, and planning documentation needed before any creation begins.</p>

    <div class="card-grid">
      <div class="card" onclick="loadContent('r094_2_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Conventions</div>
        <div class="card-info">
          <h3>2.1 Graphic Design Conventions</h3>
          <p>Understanding layouts, composition, hierarchy, and the standard rules of professional graphic design.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r094_2_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Assets</div>
        <div class="card-info">
          <h3>2.2 Properties and Assets</h3>
          <p>Technical properties of graphics (pixels, DPI/PPI, colour modes) and sourcing high-quality assets.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r094_2_3')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Planning</div>
        <div class="card-info">
          <h3>2.3 Planning Techniques</h3>
          <p>Using visualisation diagrams and asset logs to map out digital graphic designs before creation.</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW: R094 2.1 Graphic Design Conventions ---
  r094_2_1: `
    <h1>2.1 Graphic Design and Layout Conventions</h1>
    <p>Conventions are the agreed rules that designers follow so that products look professional and communicate clearly. Following them helps the audience instantly understand what they are looking at; breaking them deliberately can make a design stand out — but only if the audience still understands the message.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Layout Conventions</h2>
      <p>Layout is the arrangement of every element on the page. Different products have very different expectations.</p>

      <div class="card-grid">
        <div class="card">
          <h3>Magazine Cover</h3>
          <ul>
            <li><strong>Masthead:</strong> Large title across the top.</li>
            <li><strong>Main Image:</strong> A central model, usually with eye contact.</li>
            <li><strong>Cover lines:</strong> Short headlines down the left and right.</li>
            <li><strong>Barcode &amp; Price:</strong> Bottom corner.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Movie Poster</h3>
          <ul>
            <li><strong>Title Treatment:</strong> Bold, often near the bottom.</li>
            <li><strong>Hero Image:</strong> Lead character/scene dominates.</li>
            <li><strong>Tagline:</strong> A short slogan above the title.</li>
            <li><strong>Billing Block:</strong> Tiny credits at the very bottom.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Web Banner / Advert</h3>
          <ul>
            <li><strong>Logo:</strong> Top-left corner (the "F-pattern" reading area).</li>
            <li><strong>Headline:</strong> A short, persuasive hook.</li>
            <li><strong>Call-to-Action:</strong> A button such as "Buy Now".</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Composition Principles</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Rule of Thirds</h3>
          <p>Imagine the page split into nine equal parts. Place key elements (eyes, logos, focal points) where the lines cross. This creates natural balance.</p>
        </div>
        <div class="card">
          <h3>Hierarchy</h3>
          <p>Guide the eye in order of importance. Largest text = read first. Medium = read next. Small = supporting detail.</p>
        </div>
        <div class="card">
          <h3>Alignment</h3>
          <p>Every element should line up with another. Use grids and guides — random placement looks unprofessional.</p>
        </div>
        <div class="card">
          <h3>White Space</h3>
          <p>Empty space around elements. Used heavily in luxury design to suggest sophistication; used sparingly in busy budget adverts.</p>
        </div>
        <div class="card">
          <h3>Balance</h3>
          <p><strong>Symmetrical:</strong> Mirror image — formal, stable.<br>
          <strong>Asymmetrical:</strong> Different elements that visually "weigh" the same — modern, dynamic.</p>
        </div>
        <div class="card">
          <h3>Contrast</h3>
          <p>Differences in colour, size, or shape make important elements stand out. White text on a dark photo is a classic contrast technique.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Genre Conventions</h2>
      <p>Audiences have learned to expect certain visual cues for each genre — meeting those expectations builds instant recognition.</p>
      <div class="card-grid">
        <div class="card">
          <h3>Horror</h3>
          <p>Dark backgrounds, blood-red or black titles, distressed/torn fonts, low-key lighting on the main image.</p>
        </div>
        <div class="card">
          <h3>Romance</h3>
          <p>Soft pastels (pinks, creams), elegant script fonts, two characters in close proximity, warm lighting.</p>
        </div>
        <div class="card">
          <h3>Sci-Fi / Tech</h3>
          <p>Neon blues and purples, metallic or futuristic sans-serif fonts, geometric shapes, lens flares.</p>
        </div>
        <div class="card">
          <h3>Children's</h3>
          <p>Bright primary colours, rounded cartoon fonts, mascot characters, busy and playful layouts.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Convention:</strong> An accepted rule or expectation about how a particular type of media product is designed.</p></div>
        <div class="card"><p><strong>Hierarchy:</strong> The visual ordering of elements so the most important content is seen first.</p></div>
        <div class="card"><p><strong>Composition:</strong> The way elements are arranged within the frame to create a balanced, effective design.</p></div>
        <div class="card"><p><strong>Masthead:</strong> The large title or logo that identifies a magazine or newspaper at the top of the cover.</p></div>
        <div class="card"><p><strong>Cover line:</strong> A short headline on a magazine cover that previews articles inside.</p></div>
        <div class="card"><p><strong>Rule of Thirds:</strong> A composition guide that divides the frame into nine equal parts; key subjects are placed on the lines or intersections.</p></div>
        <div class="card"><p><strong>White space:</strong> The empty area around design elements that improves readability and gives a sense of luxury.</p></div>
        <div class="card"><p><strong>Genre conventions:</strong> The visual cues an audience expects from a particular type of product (e.g. dark fonts and red blood splashes for horror).</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify two layout conventions used on a magazine front cover. (2 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <ul>
          <li>A masthead positioned at the top of the page (1).</li>
          <li>A main central image of a model with eye contact (1).</li>
        </ul>
        <p><em>Tip: Examiners want specific named conventions. Don't write "it has a title" — name it as the "masthead".</em></p>
      </div>
    </div>
  `,

  // --- NEW: R094 2.2 Properties and Assets ---
  r094_2_2: `
    <h1>2.2 Properties and Sources of Assets</h1>
    <p>Every digital graphic is built from assets — images, fonts, logos, and graphics. Choosing the right technical properties and a legal source for each asset is essential to creating a product that is fit for purpose and compliant with copyright law.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Technical Properties</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Resolution (DPI / PPI)</h3>
          <p><strong>72 PPI:</strong> Standard for screens (websites, social media).</p>
          <p><strong>300 DPI:</strong> Required for print (posters, magazines).</p>
          <p><em>Mismatching these is a classic error — a 72 PPI image will look pixelated when printed.</em></p>
        </div>
        <div class="card">
          <h3>Pixel Dimensions</h3>
          <p>Width × Height in pixels. Must match the intended output size:</p>
          <ul>
            <li><strong>Instagram post:</strong> 1080 × 1080 px</li>
            <li><strong>A4 print at 300 DPI:</strong> 2480 × 3508 px</li>
            <li><strong>Web banner:</strong> 1920 × 600 px</li>
          </ul>
        </div>
        <div class="card">
          <h3>Colour Mode</h3>
          <p><strong>RGB (Red, Green, Blue):</strong> For screens. Uses light.</p>
          <p><strong>CMYK (Cyan, Magenta, Yellow, Key/Black):</strong> For print. Uses ink.</p>
          <p>Saving a CMYK file for web will make colours look dull.</p>
        </div>
        <div class="card">
          <h3>File Format</h3>
          <p><strong>JPEG:</strong> Photos for web (lossy, small).</p>
          <p><strong>PNG:</strong> Logos with transparency (lossless).</p>
          <p><strong>SVG:</strong> Scalable vector logos.</p>
          <p><strong>TIFF/PDF:</strong> High-quality print delivery.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Sources of Assets</h2>
      <p>Where you get your assets matters legally and ethically.</p>
      <div class="card-grid">
        <div class="card">
          <h3>Self-Created (Original)</h3>
          <p>Photos you take, illustrations you draw, fonts you design.</p>
          <p><strong>Pros:</strong> Free to use, fully your own copyright, unique to the brand.</p>
          <p><strong>Cons:</strong> Time-consuming, requires technical skill.</p>
        </div>
        <div class="card">
          <h3>Royalty-Free Stock</h3>
          <p>Sites like Unsplash, Pexels, Pixabay, FontSquirrel.</p>
          <p><strong>Pros:</strong> Free, professional quality, large libraries.</p>
          <p><strong>Cons:</strong> Other people use the same images — not unique to your brand.</p>
        </div>
        <div class="card">
          <h3>Paid Stock / Commissioned</h3>
          <p>Sites like Shutterstock, Getty Images, Adobe Stock.</p>
          <p><strong>Pros:</strong> Highest quality, exclusive licences available.</p>
          <p><strong>Cons:</strong> Costs money — must fit within client budget.</p>
        </div>
        <div class="card">
          <h3>Creative Commons</h3>
          <p>Free to use under specific conditions (e.g. credit the creator, no commercial use, share-alike).</p>
          <p><strong>Always read the licence:</strong> CC BY (credit only) is safe for client work; CC BY-NC blocks commercial use.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Asset Suitability Checklist</h2>
      <p>Before adding an asset to your design, ask:</p>
      <ul>
        <li><strong>Resolution:</strong> Is it high enough for the final output (300 DPI for print)?</li>
        <li><strong>Style:</strong> Does it match the visual identity (colour, mood, genre)?</li>
        <li><strong>Legality:</strong> Do I have permission/a licence? Is it royalty-free or have I paid?</li>
        <li><strong>Audience:</strong> Will this image appeal to the target demographic?</li>
        <li><strong>Format:</strong> Is the file type editable for my software (e.g. PNG with transparency)?</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Asset:</strong> Any individual file (image, font, logo, audio) used to build a media product.</p></div>
        <div class="card"><p><strong>Royalty-Free:</strong> Content that can be used without paying ongoing royalty fees, usually under a one-time licence.</p></div>
        <div class="card"><p><strong>Alpha Channel:</strong> The transparency layer in an image that controls which pixels are see-through.</p></div>
        <div class="card"><p><strong>CMYK:</strong> The four-colour ink model used in commercial printing.</p></div>
        <div class="card"><p><strong>RGB:</strong> The three-colour light model used by digital screens (Red, Green, Blue).</p></div>
        <div class="card"><p><strong>PPI (Pixels Per Inch):</strong> The pixel density of an image displayed on a screen.</p></div>
        <div class="card"><p><strong>DPI (Dots Per Inch):</strong> The dot density of an image when printed on paper.</p></div>
        <div class="card"><p><strong>Creative Commons:</strong> A free licensing system letting creators set conditions (credit, non-commercial, share-alike) for use of their work.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: A designer needs a logo with a transparent background for a website. Identify the most suitable file format and explain why. (2 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>The most suitable format is <strong>PNG</strong> (1) because PNG supports an alpha channel, allowing the logo to have a transparent background so it can sit on any colour without a visible white box around it (1).</p>
      </div>
    </div>
  `,

  // --- NEW: R094 2.3 Planning Techniques ---
  r094_2_3: `
    <h1>2.3 Planning Techniques for Digital Graphics</h1>
    <p>Strong planning is the difference between an MB1 and an MB3 graduate. The OCR mark scheme rewards <em>detailed</em> documentation that another designer could follow without asking questions. This section covers the four key planning documents.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Visualisation Diagram</h2>
      <p>A detailed sketch showing exactly what the finished graphic will look like.</p>
      <div class="card-grid">
        <div class="card">
          <h3>What to Include</h3>
          <ul>
            <li>Page dimensions (e.g. A4 portrait, 210 × 297 mm).</li>
            <li>Position of every element (logo, text, images).</li>
            <li>Specific font names (e.g. "Heading: Bebas Neue, 72pt").</li>
            <li>Specific colours (Hex codes such as #2D033B).</li>
            <li>Sample text content (the actual headline you'll use).</li>
          </ul>
        </div>
        <div class="card">
          <h3>How to Annotate</h3>
          <p>Annotations are short labelled notes pointing at parts of the sketch. They explain choices that drawing alone cannot show:</p>
          <ul>
            <li>"Logo at 200 × 80px in top-left, 20px margin."</li>
            <li>"Body text Open Sans 12pt #333333 for legibility."</li>
            <li>"Hero image: cyclist photograph, royalty-free from Unsplash."</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Mood Board</h2>
      <p>A collection of inspiration images, colours, and textures that capture the visual tone of the project.</p>
      <div class="card-grid">
        <div class="card">
          <h3>Digital Mood Board</h3>
          <p><strong>Built in:</strong> Canva, Photoshop, Pinterest.</p>
          <p><strong>Can include:</strong> Images, video clips, sound clips, hex codes, font samples.</p>
          <p><strong>Pros:</strong> Easy to share/edit, can include multimedia.</p>
        </div>
        <div class="card">
          <h3>Physical Mood Board</h3>
          <p><strong>Built on:</strong> Foam board, scrapbook page.</p>
          <p><strong>Can include:</strong> Magazine cut-outs, fabric, paint swatches, printed photos.</p>
          <p><strong>Pros:</strong> Tactile, real textures, useful for fashion/interior briefs.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Asset Log / Asset Table</h2>
      <p>A structured table listing every asset used in the project. Examiners look for completeness and legal information.</p>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;">Asset Name</th>
          <th style="padding: 10px; text-align: left;">Source</th>
          <th style="padding: 10px; text-align: left;">Properties</th>
          <th style="padding: 10px; text-align: left;">Legal Status</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">cyclist_hero.jpg</td>
          <td style="padding: 10px;">unsplash.com/p/abc123</td>
          <td style="padding: 10px;">3000 × 2000 px, JPEG, 300 DPI</td>
          <td style="padding: 10px;">Unsplash Licence — free commercial use</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">logo_v3.png</td>
          <td style="padding: 10px;">Self-created in Photoshop</td>
          <td style="padding: 10px;">800 × 800 px, PNG (transparent)</td>
          <td style="padding: 10px;">My own copyright</td>
        </tr>
        <tr>
          <td style="padding: 10px;">heading_font.ttf</td>
          <td style="padding: 10px;">FontSquirrel.com — Bebas Neue</td>
          <td style="padding: 10px;">SIL Open Font Licence</td>
          <td style="padding: 10px;">Free for commercial use</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Mind Map (Idea Generation)</h2>
      <p>Before you visualise the final design, mind maps help you brainstorm options. Branch out from the central theme into colour ideas, font ideas, image ideas, and possible slogans. Pick the strongest branches to take forward into your visualisation.</p>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Visualisation Diagram:</strong> A detailed sketch with annotations showing what the final static product will look like.</p></div>
        <div class="card"><p><strong>Annotation:</strong> A short written note that explains a design choice on a planning document.</p></div>
        <div class="card"><p><strong>Asset Log:</strong> A table that records the source, properties and legal status of every asset used.</p></div>
        <div class="card"><p><strong>Hex Code:</strong> A 6-digit code (e.g. #2D033B) that represents an exact colour in digital design.</p></div>
        <div class="card"><p><strong>Mood Board:</strong> A collage of images, colours, fonts and textures that captures the visual tone of a project.</p></div>
        <div class="card"><p><strong>Mind Map:</strong> A diagram that branches out from a central theme to organise and connect related ideas.</p></div>
        <div class="card"><p><strong>Brief:</strong> The set of instructions from the client describing what they want the final product to do, look like, and contain.</p></div>
        <div class="card"><p><strong>Licence:</strong> A legal agreement that defines the conditions under which an asset can be used.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Explain two pieces of information that should be included on an asset log. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. <strong>Source / URL of the asset</strong> (1) — this allows the team to verify where each file came from and check that legal permissions are in place (1).</p>
        <p>2. <strong>File properties such as resolution and format</strong> (1) — this confirms the asset is technically suitable for the final output, e.g. 300 DPI for a printed product (1).</p>
      </div>
    </div>
  `,

  r094_ta3: `
    <h1>R094 Topic Area 3: Create digital graphics</h1>
    <p>This area assesses your practical creation skills. You must demonstrate that you can use professional editing software, prepare assets correctly, apply layout conventions, and export the final product in formats appropriate for the intended platform.</p>

    <div class="card-grid">
      <div class="card" onclick="loadContent('r094_3_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Software Tools</div>
        <div class="card-info">
          <h3>3.1 Editing Software &amp; Techniques</h3>
          <p>Tools, layers, masks, filters and adjustment skills used to manipulate raster and vector graphics.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r094_3_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Technical Skills</div>
        <div class="card-info">
          <h3>3.2 Sourcing &amp; Preparing Assets</h3>
          <p>Technical skills to source, edit, and prepare images, fonts and graphics ready for the final design.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r094_3_3')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Exporting</div>
        <div class="card-info">
          <h3>3.3 Saving and Exporting</h3>
          <p>Native vs export formats, optimisation, and saving in the correct properties for print and web.</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW: R094 3.1 Editing Software & Techniques ---
  r094_3_1: `
    <h1>3.1 Editing Software &amp; Techniques</h1>
    <p>To meet Mark Band 3, you must show effective use of professional graphic-editing software. Microsoft Word/PowerPoint will limit you to MB1. Industry-standard tools include Adobe Photoshop, Illustrator, Affinity, Canva (with original work), and GIMP.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Working Non-Destructively</h2>
      <p>The "golden rule" of professional editing: <strong>never paint or erase directly on your original image</strong>. Use layers, masks, and adjustment layers so changes can always be reversed.</p>

      <div class="card-grid">
        <div class="card">
          <h3>Layers</h3>
          <p>Stacked transparent sheets that hold separate elements (logo on layer 1, text on layer 2, photo on layer 3). Editing one layer never damages the others.</p>
        </div>
        <div class="card">
          <h3>Layer Masks</h3>
          <p>Hide parts of a layer without deleting them. Painting <strong>black</strong> hides; painting <strong>white</strong> reveals. Reversible at any time.</p>
        </div>
        <div class="card">
          <h3>Adjustment Layers</h3>
          <p>Apply colour/brightness changes <em>through</em> a layer, leaving the original pixels untouched. Examples: Hue/Saturation, Curves, Brightness/Contrast.</p>
        </div>
        <div class="card">
          <h3>Smart Objects / Linked Files</h3>
          <p>Place an image as a Smart Object so you can resize it repeatedly without losing quality.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Common Editing Techniques</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Selection &amp; Cut-out</h3>
          <ul>
            <li><strong>Magic Wand:</strong> Selects similar-coloured pixels (e.g. plain backgrounds).</li>
            <li><strong>Quick Selection / Object Select:</strong> AI-driven, brush over the subject.</li>
            <li><strong>Pen Tool:</strong> Precise, manual paths — best for clean edges.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Resizing &amp; Cropping</h3>
          <ul>
            <li><strong>Crop Tool:</strong> Trim to a chosen ratio (e.g. 1:1 for Instagram).</li>
            <li><strong>Free Transform (Ctrl+T):</strong> Hold Shift to scale proportionally and avoid distortion.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Colour &amp; Tone</h3>
          <ul>
            <li><strong>Hue/Saturation:</strong> Shift colour or vibrancy.</li>
            <li><strong>Levels &amp; Curves:</strong> Adjust shadows, midtones and highlights.</li>
            <li><strong>Black &amp; White conversion</strong> for moody/editorial looks.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Layer Styles (FX)</h3>
          <ul>
            <li><strong>Drop Shadow:</strong> Adds depth behind text/logos.</li>
            <li><strong>Stroke / Outline:</strong> Helps text stand out on busy photos.</li>
            <li><strong>Outer Glow:</strong> Common in sci-fi and gaming designs.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Typography Tools</h3>
          <ul>
            <li><strong>Tracking:</strong> Space between letters across a word.</li>
            <li><strong>Leading:</strong> Space between lines of text.</li>
            <li><strong>Kerning:</strong> Space between two specific letters.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Filters &amp; Effects</h3>
          <ul>
            <li><strong>Blur (Gaussian, Motion):</strong> Soften backgrounds, create speed.</li>
            <li><strong>Sharpen / Unsharp Mask:</strong> Crisp up details on photos.</li>
            <li><strong>Use sparingly</strong> — over-filtered work looks amateur.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Raster vs Vector Software</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;">Type</th>
          <th style="padding: 10px; text-align: left;">Best For</th>
          <th style="padding: 10px; text-align: left;">Software</th>
          <th style="padding: 10px; text-align: left;">Limitation</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;"><strong>Raster (Bitmap)</strong></td>
          <td style="padding: 10px;">Photos, painting, composite imagery.</td>
          <td style="padding: 10px;">Photoshop, GIMP, Affinity Photo.</td>
          <td style="padding: 10px;">Loses quality when enlarged.</td>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>Vector</strong></td>
          <td style="padding: 10px;">Logos, icons, illustrations.</td>
          <td style="padding: 10px;">Illustrator, Inkscape, Affinity Designer.</td>
          <td style="padding: 10px;">Cannot show photographic detail.</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Non-destructive editing:</strong> Techniques (layers, masks, smart objects) that change the appearance of an image without altering the original pixels.</p></div>
        <div class="card"><p><strong>Filter:</strong> A pre-set effect applied to a layer, such as blur or sharpen.</p></div>
        <div class="card"><p><strong>Adjustment layer:</strong> A special layer that applies colour or tone changes to all layers below it without editing them directly.</p></div>
        <div class="card"><p><strong>Tracking:</strong> The uniform spacing between all letters of a word or paragraph.</p></div>
        <div class="card"><p><strong>Layer Mask:</strong> A black/white channel attached to a layer that controls which pixels are visible.</p></div>
        <div class="card"><p><strong>Smart Object:</strong> A container that protects the original asset so it can be transformed repeatedly without quality loss.</p></div>
        <div class="card"><p><strong>Vector graphic:</strong> An image built from mathematical paths that scales to any size without becoming pixelated.</p></div>
        <div class="card"><p><strong>Raster graphic:</strong> A pixel-based image (e.g. JPEG, PNG) that loses quality when enlarged.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Explain one advantage of using a layer mask instead of the eraser tool when editing an image. (2 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>A layer mask is non-destructive (1) — the hidden pixels are not deleted, so the designer can paint with white to bring them back at any time, whereas the eraser tool removes pixels permanently and can only be undone with multiple Ctrl+Z presses (1).</p>
      </div>
    </div>
  `,

  // --- NEW: R094 3.2 Sourcing & Preparing Assets ---
  r094_3_2: `
    <h1>3.2 Sourcing and Preparing Assets</h1>
    <p>Assets must be prepared <em>before</em> being placed into the final design. The OCR mark scheme specifically rewards evidence of preliminary editing — examiners want to see screenshots of you working on each asset on its own, not just a finished poster.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Preparation Workflow</h2>
      <p>For every asset you use, follow this sequence:</p>
      <ol>
        <li><strong>Source it</strong> — record the URL or note "self-created" in your asset log.</li>
        <li><strong>Open it separately</strong> — never edit straight into the final canvas.</li>
        <li><strong>Resize / crop</strong> to suitable dimensions (avoid making images larger than original).</li>
        <li><strong>Edit</strong> — remove background, colour-correct, sharpen as needed.</li>
        <li><strong>Save the prepared asset</strong> as a separate file (e.g. <code>logo_prepared.png</code>).</li>
        <li><strong>Screenshot the process</strong> with the tool/panel visible.</li>
      </ol>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Common Preparation Tasks</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Background Removal</h3>
          <p><strong>Tool:</strong> Magic Wand, Quick Selection, or Pen Tool.</p>
          <p><strong>Save as:</strong> PNG (preserves transparency).</p>
          <p><strong>Screenshot:</strong> Include the selection ants/marquee.</p>
        </div>
        <div class="card">
          <h3>Resolution Check</h3>
          <p>Open <em>Image &gt; Image Size</em> and verify the asset is at least 300 DPI for print or 72 PPI at the final pixel size for web.</p>
          <p>Never <em>upscale</em> a low-res image — it will look pixelated.</p>
        </div>
        <div class="card">
          <h3>Colour Correction</h3>
          <p>Use Levels or Curves to fix dull/dark photos. Use Hue/Saturation to match the asset to the brand colour palette.</p>
        </div>
        <div class="card">
          <h3>Cropping for Aspect Ratio</h3>
          <p>Decide the final aspect ratio first (1:1, 16:9, A4 portrait), then crop with the constrained crop tool so all assets match.</p>
        </div>
        <div class="card">
          <h3>Format Conversion</h3>
          <p>Convert raster logos with backgrounds (JPEG) into transparent PNG. Save vector logos as SVG so they scale to any size.</p>
        </div>
        <div class="card">
          <h3>File Naming</h3>
          <p>Use clear, structured names: <code>brandname_hero_v2.png</code>. Avoid spaces and special characters. Match names to entries in your asset log.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Evidence for Examiner</h2>
      <div class="card" style="background: #ffebee; border-left: 5px solid #f44336;">
        <h3 style="margin: 0; color: #d32f2f;">⚠ MB3 Critical Evidence</h3>
        <p>For each asset, your portfolio must include:</p>
        <ul>
          <li>A "before" screenshot (the raw, sourced asset).</li>
          <li>A screenshot showing the <strong>tools/panels</strong> being used to edit it.</li>
          <li>An "after" screenshot (the prepared asset on its own).</li>
          <li>A short caption explaining <em>why</em> that edit was needed.</li>
        </ul>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Asset preparation:</strong> Editing a sourced or original asset to make it technically ready (correct size, format, colour) for use in a final design.</p></div>
        <div class="card"><p><strong>Aspect ratio:</strong> The proportional relationship between an image's width and height (e.g. 16:9, 1:1, 4:5).</p></div>
        <div class="card"><p><strong>Upscaling:</strong> Enlarging an image beyond its native resolution — usually causes pixelation.</p></div>
        <div class="card"><p><strong>Transparent PNG:</strong> A PNG file where the background pixels are fully transparent (not white).</p></div>
        <div class="card"><p><strong>Crop:</strong> Trimming an image to remove unwanted edges or to fit a chosen aspect ratio.</p></div>
        <div class="card"><p><strong>Levels:</strong> A tool that adjusts the tonal range (shadows, midtones, highlights) of an image.</p></div>
        <div class="card"><p><strong>Hue:</strong> The pure colour of a pixel (red, green, blue, etc.) before saturation or brightness is applied.</p></div>
        <div class="card"><p><strong>Saturation:</strong> The intensity or vividness of a colour.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Describe two technical skills used to prepare a sourced photograph for use as a hero image on a poster. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. <strong>Cropping</strong> the image to the correct aspect ratio of the poster (1) ensures the focal point sits within the printable area without important content being cut off (1).</p>
        <p>2. <strong>Adjusting levels or curves</strong> to brighten the midtones (1) makes the photograph readable against any text overlaid on top, improving overall contrast (1).</p>
      </div>
    </div>
  `,

  // --- NEW: R094 3.3 Saving and Exporting ---
  r094_3_3: `
    <h1>3.3 Saving and Exporting</h1>
    <p>The final stage is to deliver the graphic in formats that are <em>appropriate</em> for the client's intended platforms. The OCR specification specifically requires you to save in <strong>two different formats</strong> with correctly chosen properties for each.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Native vs Export File Formats</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Native (Working) Files</h3>
          <p>The default format of the software you used.</p>
          <ul>
            <li><strong>Photoshop:</strong> .PSD</li>
            <li><strong>Illustrator:</strong> .AI</li>
            <li><strong>Affinity Photo:</strong> .AFPHOTO</li>
            <li><strong>Canva:</strong> stored on cloud project</li>
          </ul>
          <p><strong>Why save these?</strong> Layers, masks, and editable text are preserved so you can come back and edit. Always keep a native master.</p>
        </div>
        <div class="card">
          <h3>Export (Distribution) Files</h3>
          <p>Flat, universal formats that anyone can open.</p>
          <ul>
            <li><strong>JPEG:</strong> Photos, social media.</li>
            <li><strong>PNG:</strong> Web graphics with transparency.</li>
            <li><strong>PDF:</strong> Print-ready delivery to clients.</li>
            <li><strong>SVG:</strong> Vector logos for web.</li>
            <li><strong>TIFF:</strong> Highest-quality print archive.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Choosing the Right Export</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;">Output Platform</th>
          <th style="padding: 10px; text-align: left;">Format</th>
          <th style="padding: 10px; text-align: left;">Resolution</th>
          <th style="padding: 10px; text-align: left;">Colour Mode</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Magazine / Poster (print)</td>
          <td style="padding: 10px;">PDF or TIFF</td>
          <td style="padding: 10px;">300 DPI</td>
          <td style="padding: 10px;">CMYK</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Website hero / banner</td>
          <td style="padding: 10px;">JPEG (high quality)</td>
          <td style="padding: 10px;">72 PPI at exact pixel size</td>
          <td style="padding: 10px;">RGB / sRGB</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">Social media post</td>
          <td style="padding: 10px;">PNG or JPEG</td>
          <td style="padding: 10px;">1080 × 1080 px (Instagram)</td>
          <td style="padding: 10px;">RGB / sRGB</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Logo for any platform</td>
          <td style="padding: 10px;">SVG (vector) + PNG fallback</td>
          <td style="padding: 10px;">N/A — scalable</td>
          <td style="padding: 10px;">RGB</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Optimisation</h2>
      <p>Optimisation balances file size against quality so the product loads fast online but still looks good.</p>
      <div class="card-grid">
        <div class="card">
          <h3>JPEG Quality</h3>
          <p>Use the <em>Save for Web</em> dialog. Quality 60–80 is usually invisible to the eye but cuts file size by 50%+.</p>
        </div>
        <div class="card">
          <h3>PNG Compression</h3>
          <p>Use PNG-8 (256 colours) for simple graphics, PNG-24 for photos with transparency.</p>
        </div>
        <div class="card">
          <h3>Bleed &amp; Margins</h3>
          <p>For print, add 3 mm bleed around the edge so colour reaches the cut line. Keep important text 5 mm inside the trim.</p>
        </div>
        <div class="card">
          <h3>File Naming</h3>
          <p>Include version and platform: <code>poster_a4_print_v3.pdf</code> and <code>poster_web_v3.jpg</code>.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Native format:</strong> The proprietary file type of an editing application (e.g. .PSD).</p></div>
        <div class="card"><p><strong>Optimisation:</strong> Reducing file size through format choice and compression while keeping visual quality acceptable.</p></div>
        <div class="card"><p><strong>Bleed:</strong> An extra 3 mm margin around a print design so background colour runs to the cut edge.</p></div>
        <div class="card"><p><strong>sRGB:</strong> The standard RGB colour space used on the web; ensures colours look the same across devices.</p></div>
        <div class="card"><p><strong>Lossy compression:</strong> A compression method (like JPEG) that permanently removes data to reduce file size.</p></div>
        <div class="card"><p><strong>Lossless compression:</strong> A compression method (like PNG) that reduces file size without removing any data.</p></div>
        <div class="card"><p><strong>Trim line:</strong> The line marking where a printed page is cut to its final size.</p></div>
        <div class="card"><p><strong>Export:</strong> The process of saving a finished design in a universal format suitable for delivery to the client or distribution platform.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: A client requires the same poster design for both a printed magazine advert and a website. State the file format and resolution you would use for each version, and justify your choice. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p><strong>Print version:</strong> PDF at 300 DPI in CMYK (1) — PDF preserves layout and embeds fonts so the printer reproduces it exactly, and 300 DPI is the standard for sharp commercial print (1).</p>
        <p><strong>Web version:</strong> JPEG at 72 PPI in RGB (1) — JPEG uses lossy compression to keep the file size small for fast page loading, and 72 PPI matches typical screen density without wasting bandwidth (1).</p>
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

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Animation:</strong> The illusion of movement created by displaying a sequence of still images (frames) in quick succession.</p></div>
        <div class="card"><p><strong>Stop motion:</strong> A physical animation technique where objects are moved slightly between photographs.</p></div>
        <div class="card"><p><strong>CGI:</strong> Computer-Generated Imagery — animation created using 3D modelling and rendering software.</p></div>
        <div class="card"><p><strong>Cel animation:</strong> The traditional method of hand-drawing each frame on transparent sheets (cels) over a painted background.</p></div>
        <div class="card"><p><strong>Motion capture:</strong> Recording the real movement of an actor with sensors and applying it to a digital character.</p></div>
        <div class="card"><p><strong>Diegetic / Non-diegetic:</strong> Sound that exists inside the story (dialogue, footsteps) versus sound only the audience hears (soundtrack).</p></div>
        <div class="card"><p><strong>Foley:</strong> Custom-recorded everyday sound effects (footsteps, door slams) added in post-production.</p></div>
        <div class="card"><p><strong>Sample rate:</strong> The number of audio measurements taken per second, measured in Hz (CD audio is 44,100 Hz).</p></div>
        <div class="card"><p><strong>Bit depth:</strong> The amount of data stored in each audio sample — higher bit depth means a wider dynamic range.</p></div>
        <div class="card"><p><strong>Mono / Stereo:</strong> Single-channel audio (flat) versus two-channel audio (left and right, creating spatial width).</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify two types of animation and describe one strength of each. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. <strong>Stop motion / Claymation</strong> (1) — gives a unique tactile aesthetic that audiences find charming and distinctive (e.g. Aardman's <em>Wallace &amp; Gromit</em>) and feels handmade compared to digital animation (1).</p>
        <p>2. <strong>CGI (Computer-Generated Imagery)</strong> (1) — allows photorealistic environments, complex camera moves and physics simulation that would be impossible to film, making it ideal for fantasy and action stories (1).</p>
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

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Hardware:</strong> The physical equipment used to create a media product (cameras, microphones, computers, tripods).</p></div>
        <div class="card"><p><strong>Software:</strong> The applications used to design, edit and assemble a product (Maya, Animate, Audacity, Photoshop).</p></div>
        <div class="card"><p><strong>DAW:</strong> Digital Audio Workstation — software for recording, editing and mixing audio (e.g. Audacity, Adobe Audition).</p></div>
        <div class="card"><p><strong>USB microphone:</strong> A consumer microphone that plugs directly into a computer; convenient but can have latency issues.</p></div>
        <div class="card"><p><strong>XLR microphone:</strong> A professional microphone connected via an audio interface; cleaner, broadcast-quality audio.</p></div>
        <div class="card"><p><strong>Latency:</strong> A delay between when sound is recorded and when it appears in the software, which can break sync.</p></div>
        <div class="card"><p><strong>Tripod:</strong> A three-legged stand that holds a camera completely still — essential for stop-motion continuity.</p></div>
        <div class="card"><p><strong>Rigging:</strong> Adding internal supports (metal armatures or digital "bones") so a character can be posed or animated.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Explain why a tripod is an essential piece of hardware when creating a stop-motion animation. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>A tripod holds the camera completely still between every photograph (1). Because stop motion is built from hundreds of photos taken seconds apart (1), even a tiny shift in the camera position would cause the background to jump on screen, breaking the illusion of smooth movement (1). The tripod ensures continuity, which is essential for a professional-looking final animation.</p>
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

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Storyboard:</strong> A sequence of drawn panels with notes that plans every shot, action and sound cue of an animation.</p></div>
        <div class="card"><p><strong>Script:</strong> The written blueprint of dialogue, action and scene headings that the animation is built from.</p></div>
        <div class="card"><p><strong>Slugline:</strong> A scene-heading line in a script (e.g. <em>INT. KITCHEN — DAY</em>) that locates the action in time and place.</p></div>
        <div class="card"><p><strong>Dope sheet:</strong> A frame-by-frame timing chart showing exactly which drawing or pose appears on each frame, used to plan lip-sync.</p></div>
        <div class="card"><p><strong>Graphic score:</strong> A visual chart showing how audio intensity changes over time using shapes and lines instead of musical notes.</p></div>
        <div class="card"><p><strong>Ducking:</strong> Automatically lowering background music whenever dialogue is playing so the speech remains clear.</p></div>
        <div class="card"><p><strong>Lip-sync:</strong> Matching a character's mouth shapes to the syllables of recorded dialogue.</p></div>
        <div class="card"><p><strong>Sting:</strong> A short, sharp musical accent used to punctuate a moment (e.g. a logo reveal in an advert).</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Identify two pieces of information that should appear on a detailed storyboard for an animation. (2 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <ul>
          <li>The shot type and camera movement (e.g. close-up, pan left) (1).</li>
          <li>The duration of the shot in seconds or frames (1).</li>
        </ul>
        <p><em>Other valid answers: scene number, dialogue, sound effect cues, character action, lighting notes.</em></p>
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
    <p>Reviewing is the final stage of the production cycle. You must test the technical functionality of the animation, evaluate how well it meets the client brief and engages the target audience, and identify specific improvements for future development.</p>

    <div class="card-grid">
      <div class="card" onclick="loadContent('r096_3_1')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Testing</div>
        <div class="card-info">
          <h3>3.1 Testing and Review</h3>
          <p>Test plans, identifying errors, fixing sync issues, and reviewing fitness for purpose.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r096_3_2')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">Development</div>
        <div class="card-info">
          <h3>3.2 Future Improvements</h3>
          <p>Recommending technical, creative, and audio improvements for the next version of the product.</p>
        </div>
      </div>
    </div>
  `,

  // --- NEW: R096 3.1 Testing and Review ---
  r096_3_1: `
    <h1>3.1 Testing and Reviewing the Animation</h1>
    <p>To reach Mark Band 3, your testing must do more than say "the video plays". It must <strong>identify problems, document fixes, and re-test</strong>. Your review must critically evaluate how the product meets the brief and engages the audience.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Building a Test Plan</h2>
      <p>A test plan is a structured table that records what you tested, the expected result, the actual result, and any action taken to fix problems.</p>

      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--dark-purple); color: white;">
          <th style="padding: 10px; text-align: left;">Test #</th>
          <th style="padding: 10px; text-align: left;">What is being tested</th>
          <th style="padding: 10px; text-align: left;">Expected Result</th>
          <th style="padding: 10px; text-align: left;">Actual Result</th>
          <th style="padding: 10px; text-align: left;">Action Taken</th>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">1</td>
          <td style="padding: 10px;">Frame rate consistency</td>
          <td style="padding: 10px;">Smooth 24 fps with no stutter</td>
          <td style="padding: 10px;">Stutter at 0:14 due to large background image</td>
          <td style="padding: 10px;">Reduced background to 1080p; re-tested — smooth</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">2</td>
          <td style="padding: 10px;">Lip-sync accuracy</td>
          <td style="padding: 10px;">Mouth shapes match audio within 1 frame</td>
          <td style="padding: 10px;">Out by 3 frames in scene 2</td>
          <td style="padding: 10px;">Time-shifted dialogue track −0.125s</td>
        </tr>
        <tr>
          <td style="padding: 10px;">3</td>
          <td style="padding: 10px;">Audio ducking</td>
          <td style="padding: 10px;">Music drops during voiceover</td>
          <td style="padding: 10px;">Music remained at full volume</td>
          <td style="padding: 10px;">Added volume envelope to music track</td>
        </tr>
      </table>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. What to Test</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Visual Quality</h3>
          <ul>
            <li>Frame rate consistency.</li>
            <li>No pixelation in upscaled assets.</li>
            <li>Consistent lighting between scenes.</li>
            <li>Animation smoothness (no jitter).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Audio Quality</h3>
          <ul>
            <li>Dialogue is clear and audible.</li>
            <li>Background music doesn't drown out speech.</li>
            <li>No clipping/distortion peaks.</li>
            <li>SFX play at the correct frame.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Synchronisation</h3>
          <ul>
            <li>Lip-sync matches dialogue.</li>
            <li>SFX trigger on visual action (door slam, footstep).</li>
            <li>Music tempo matches pacing.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Output / Format</h3>
          <ul>
            <li>Final file plays on target platform.</li>
            <li>Correct resolution and aspect ratio.</li>
            <li>File size acceptable for distribution.</li>
            <li>No black frames at start/end.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Reviewing Against the Brief</h2>
      <p>For each requirement in the original client brief, write a short paragraph explaining how (or how well) you met it.</p>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <p><strong>Starter sentences:</strong></p>
        <ul>
          <li>"The client requested a 30-second animation. My final product is 28 seconds, which fits within the requirement…"</li>
          <li>"The brand colours specified were #2D033B and #E0BBE4. I used these exclusively for all titles and supporting graphics…"</li>
          <li>"The brief asked for a hopeful tone. I achieved this through the use of bright high-key lighting and an upbeat major-key soundtrack…"</li>
        </ul>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">4. Reviewing Audience Appeal</h2>
      <p>Don't just say "the audience will like it" — explain <strong>why</strong> specific creative choices link to the demographic.</p>
      <div class="card-grid">
        <div class="card">
          <h3>Visual Appeal</h3>
          <p>e.g. "For a teenage audience, the use of fast cuts and saturated neon colours mirrors the visual language of TikTok content they consume daily."</p>
        </div>
        <div class="card">
          <h3>Audio Appeal</h3>
          <p>e.g. "The upbeat 120 BPM soundtrack matches the energy of the running visuals and is in the same tempo range as music popular with the 16–24 demographic."</p>
        </div>
        <div class="card">
          <h3>Pacing &amp; Length</h3>
          <p>e.g. "At 30 seconds, the animation matches the average attention span on Instagram Reels, ensuring viewers reach the call-to-action."</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Test plan:</strong> A structured document that records the tests carried out on a media product, the expected and actual results, and any actions taken.</p></div>
        <div class="card"><p><strong>Iterative testing:</strong> A cycle of test → fix → re-test that continues until the product is fully working.</p></div>
        <div class="card"><p><strong>Fitness for purpose:</strong> The extent to which a product successfully meets the client's brief and audience needs.</p></div>
        <div class="card"><p><strong>Clipping:</strong> Audio distortion that occurs when the signal exceeds the maximum level (0dB).</p></div>
        <div class="card"><p><strong>Sync (synchronisation):</strong> The alignment of audio events with their corresponding visual events on the timeline.</p></div>
        <div class="card"><p><strong>Lip-sync:</strong> Matching the mouth shapes of an animated character to the syllables of recorded dialogue.</p></div>
        <div class="card"><p><strong>Frame rate:</strong> The number of frames per second (fps) at which the animation plays — 24 fps is standard for film.</p></div>
        <div class="card"><p><strong>Volume envelope:</strong> A graphical line that controls how loudly an audio track plays at different points in time.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Explain why iterative testing (testing, fixing, re-testing) is important during the production of an animation. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>Iterative testing allows the producer to identify problems such as audio sync errors or pixelation early (1) so they can be corrected before the final export (1). Re-testing after each fix confirms that the change actually solved the problem and did not introduce new issues (1), which results in a final product that is fully fit for purpose and meets the technical standard the client expects (1).</p>
      </div>
    </div>
  `,

  // --- NEW: R096 3.2 Future Improvements ---
  r096_3_2: `
    <h1>3.2 Identifying Future Improvements</h1>
    <p>Even a finished, working animation can be improved. The OCR mark scheme awards higher marks for recommendations that are <strong>specific, justified, and linked to either client requirements or audience engagement</strong>. Generic comments like "make it longer" earn no marks.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. The Three Categories of Improvement</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Technical Improvements</h3>
          <p>Fixing or refining the technical execution.</p>
          <ul>
            <li>Increase frame rate from 24 to 30 fps for smoother sports content.</li>
            <li>Re-record dialogue with an XLR microphone to remove room hiss.</li>
            <li>Add motion blur to fast-moving objects to make movement feel natural.</li>
            <li>Use a more advanced character rig with facial controls.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Creative Improvements</h3>
          <p>Enhancing storytelling and engagement.</p>
          <ul>
            <li>Add a hook in the first 3 seconds to retain mobile viewers.</li>
            <li>Introduce a recognisable mascot to build long-term brand identity.</li>
            <li>Use a wider colour palette to better convey changing emotions.</li>
            <li>Add a clear call-to-action card at the end.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Audio Improvements</h3>
          <p>Making the soundtrack richer and more immersive.</p>
          <ul>
            <li>Layer Foley sounds (footsteps, fabric movement) to add realism.</li>
            <li>Add ambient room tone to make the scene feel "alive".</li>
            <li>Mix the soundtrack in stereo so SFX move with on-screen action.</li>
            <li>Use ducking automation rather than manual volume changes.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">2. Linking Improvements to Audience &amp; Client</h2>
      <p>Each suggestion should answer two questions: <em>why is this better for the audience?</em> and <em>how does this help the client?</em></p>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <p><strong>Strong example:</strong></p>
        <p>"I would re-record the voiceover using a condenser microphone in a treated room. This would remove the slight background hum currently audible at 0:08, producing professional-quality dialogue. <strong>For the audience</strong>, clearer speech increases comprehension and trust. <strong>For the client</strong>, broadcast-quality audio matches their premium brand positioning and would allow the animation to be repurposed for radio advertising."</p>
        <p><strong>Weak example:</strong></p>
        <p>"The audio could be better." (No detail, no justification — 0 marks.)</p>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">3. Considering Future Distribution</h2>
      <p>Improvements often unlock new distribution platforms. Discussing these gains extra credit.</p>
      <div class="card-grid">
        <div class="card">
          <h3>Mobile / Vertical</h3>
          <p>Re-export in 9:16 (1080 × 1920) for TikTok, Reels and YouTube Shorts to reach Gen Z viewers.</p>
        </div>
        <div class="card">
          <h3>Cinema / 4K</h3>
          <p>Re-render at 3840 × 2160 with higher bitrate for big-screen showings or premium streaming.</p>
        </div>
        <div class="card">
          <h3>Accessibility</h3>
          <p>Add closed captions and audio descriptions so the product complies with the Equality Act and reaches deaf/blind viewers.</p>
        </div>
        <div class="card">
          <h3>Localisation</h3>
          <p>Replace the voiceover with translated tracks and re-time mouth shapes for international markets.</p>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card"><p><strong>Iterative improvement:</strong> Repeatedly refining a product based on feedback and testing to make each version better than the last.</p></div>
        <div class="card"><p><strong>Foley:</strong> Reproduced everyday sound effects added in post-production to enhance the audio experience.</p></div>
        <div class="card"><p><strong>Localisation:</strong> Adapting a media product (language, culture, references) for a different region or country.</p></div>
        <div class="card"><p><strong>Call-to-Action:</strong> A clear instruction at the end of a piece of media telling the viewer what to do next (e.g. "Visit our website").</p></div>
        <div class="card"><p><strong>Closed captions:</strong> On-screen text showing dialogue and key sounds, used for accessibility and silent viewing.</p></div>
        <div class="card"><p><strong>Audio description:</strong> An additional voice track that narrates visual events for blind or partially sighted viewers.</p></div>
        <div class="card"><p><strong>Stereo:</strong> A two-channel audio format that creates a sense of left/right positioning.</p></div>
        <div class="card"><p><strong>Bitrate:</strong> The amount of data used per second of audio or video — higher bitrates mean better quality but bigger files.</p></div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Worked Exam Question</h2>
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: #fdfbff;">
        <h3 style="margin-top: 0;">Q: Suggest one improvement that could be made to the audio of an animation, and explain why this would benefit the target audience. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>I would add layered Foley sound effects such as footsteps, door creaks, and clothing rustle (1) instead of relying only on background music. This makes the scene feel three-dimensional and realistic (1), which increases immersion for the target audience of 8–12 year-olds, who are more likely to stay engaged when the world feels alive and believable (1).</p>
      </div>
    </div>
  `,

  resources: `
    <h1>Resources</h1>
    <p>Every revision tool, interactive activity, NEA support page and external learning resource available across the iMedia Hub — all in one place.</p>

    <h2 class="section-title">Revision &amp; Quizzes</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_quiz')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--pastel-violet); color: var(--dark-purple);">Cards</div>
        <div class="card-info">
          <h3>Revision Card Quiz</h3>
          <p>Flip-card style flashcards for over 130 R093 keyword definitions.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('quiz_trainer')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--pastel-violet); color: var(--dark-purple);">Trainer</div>
        <div class="card-info">
          <h3>R093 Quiz Trainer</h3>
          <p>Topic-by-topic practice, 25-question timed mock test, and 6–12 mark long-answer questions.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('legal_sort_game')" style="cursor: pointer; border-top: 5px solid #d32f2f;">
        <div class="card-image" style="background: #ffebee; color: #d32f2f;">Sort</div>
        <div class="card-info">
          <h3>Legal &amp; Ethical Sort</h3>
          <p>Drag scenarios into Privacy, Defamation or Copyright categories.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('format_match_up')" style="cursor: pointer; border-top: 5px solid #2196f3;">
        <div class="card-image" style="background: #e3f2fd; color: #2196f3;">Match</div>
        <div class="card-info">
          <h3>File Format Match-up</h3>
          <p>Test your knowledge of DPI / PPI and the right file format for each output platform.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('timeline_game')" style="cursor: pointer; border-top: 5px solid #E0BBE4;">
        <div class="card-image" style="background: var(--pastel-violet); color: var(--dark-purple);">Time</div>
        <div class="card-info">
          <h3>Production Timeline Challenge</h3>
          <p>Drag job roles into Pre-Production, Production and Post-Production phases.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('brief_interpreter')" style="cursor: pointer; border-top: 5px solid #FFD700;">
        <div class="card-image" style="background: #fffdf2; color: #856404;">Brief</div>
        <div class="card-info">
          <h3>Client Brief Interpreter</h3>
          <p>Practise breaking down a client brief using the "Eco-Bolt" e-bike scenario.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">R093: Media Industry — Topic Hubs</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_hub')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">R093</div>
        <div class="card-info">
          <h3>R093 Hub (All Topic Areas)</h3>
          <p>Sectors, products, job roles, audience, design factors, pre-production and distribution.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('ta1')" style="cursor: pointer;">
        <div class="card-image">TA1</div>
        <div class="card-info">
          <h3>TA1: The Media Industry</h3>
          <p>Sectors, products, job roles and the production cycle.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('ta2')" style="cursor: pointer;">
        <div class="card-image">TA2</div>
        <div class="card-info">
          <h3>TA2: Factors Influencing Design</h3>
          <p>Purpose, style, client briefs, audience demographics, research and media codes.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('ta3')" style="cursor: pointer;">
        <div class="card-image">TA3</div>
        <div class="card-info">
          <h3>TA3: Pre-production Planning</h3>
          <p>Work plans and the full set of pre-production documents (mind maps, mood boards, storyboards, scripts, wireframes, flow charts, asset logs).</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('ta4')" style="cursor: pointer;">
        <div class="card-image">TA4</div>
        <div class="card-info">
          <h3>TA4: Distribution Considerations</h3>
          <p>Distribution platforms, file formats and properties for image, audio and video.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r093_3_5')" style="cursor: pointer; border-top: 5px solid #FF9800;">
        <div class="card-image" style="background: #FFF3E0; color: #E65100;">Quick Ref</div>
        <div class="card-info">
          <h3>Pre-Production Quick Reference</h3>
          <p>One-page summary of every pre-production document, its components, software and target users.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">R094: Visual Identity &amp; Digital Graphics</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r094_hub')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">R094</div>
        <div class="card-info">
          <h3>R094 Hub</h3>
          <p>Coursework theory, NEA tasks and design-skills training.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_task_1')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Task 1</div>
        <div class="card-info">
          <h3>Task 1: Visual Identity &amp; Planning</h3>
          <p>Designing the brand identity and planning the digital graphic.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_task_2')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Task 2</div>
        <div class="card-info">
          <h3>Task 2: Creation &amp; Evaluation</h3>
          <p>Creating the digital graphic and saving in correct formats.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_guidance')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Guide</div>
        <div class="card-info">
          <h3>R094 Assessment Guidance</h3>
          <p>Step-by-step help to achieve Mark Band 3 in your NEA.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_criteria')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Marks</div>
        <div class="card-info">
          <h3>R094 Marking Criteria</h3>
          <p>Check your work against the official OCR mark bands.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">R094: Software Skills</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r094_skill_photoshop')" style="cursor: pointer; border-top: 5px solid #31A8FF;">
        <div class="card-image" style="background: #001E36; color: #31A8FF;">Ps</div>
        <div class="card-info">
          <h3>Adobe Photoshop</h3>
          <p>Industry-standard raster editing, photo manipulation and digital art.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_skill_canva')" style="cursor: pointer; border-top: 5px solid #00C4CC;">
        <div class="card-image" style="background: linear-gradient(135deg, #00C4CC, #7D2AE8); color: white;">Ca</div>
        <div class="card-info">
          <h3>Canva</h3>
          <p>Web-based design tool — great for layouts, mood boards and social-media assets.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_skill_rocketcake')" style="cursor: pointer; border-top: 5px solid #E040FB;">
        <div class="card-image" style="background: #E040FB; color: white;">Rc</div>
        <div class="card-info">
          <h3>RocketCake</h3>
          <p>Free WYSIWYG website editor for visualising responsive layouts.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_skill_maya')" style="cursor: pointer; border-top: 5px solid #0696D7;">
        <div class="card-image" style="background: #0696D7; color: white;">Ma</div>
        <div class="card-info">
          <h3>Autodesk Maya</h3>
          <p>Professional 3D modelling and rendering for product visualisation.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">R096: Animation with Audio</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r096_hub')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">R096</div>
        <div class="card-info">
          <h3>R096 Hub</h3>
          <p>Coursework theory, NEA tasks and animation-skills training.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_task_1')" style="cursor: pointer; border-left: 5px solid var(--nav-bg);">
        <div class="card-image" style="background: var(--nav-bg); color: white;">Task 1</div>
        <div class="card-info">
          <h3>Task 1: Planning</h3>
          <p>Interpreting the brief, storyboards, scripts and asset lists for animation.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_task_2')" style="cursor: pointer; border-left: 5px solid var(--nav-bg);">
        <div class="card-image" style="background: var(--nav-bg); color: white;">Task 2</div>
        <div class="card-info">
          <h3>Task 2: Creation</h3>
          <p>Building the animation, mixing audio and exporting the final product.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_task_3')" style="cursor: pointer; border-left: 5px solid var(--nav-bg);">
        <div class="card-image" style="background: var(--nav-bg); color: white;">Task 3</div>
        <div class="card-info">
          <h3>Task 3: Review</h3>
          <p>Test plans, evaluation and identifying improvements.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_guidance')" style="cursor: pointer; border-left: 5px solid var(--nav-bg);">
        <div class="card-image" style="background: var(--nav-bg); color: white;">Guide</div>
        <div class="card-info">
          <h3>R096 Assessment Guidance</h3>
          <p>Full OCR strand guidance for creating animation with audio and reaching MB3.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_criteria')" style="cursor: pointer; border-left: 5px solid var(--nav-bg);">
        <div class="card-image" style="background: var(--nav-bg); color: white;">Marks</div>
        <div class="card-info">
          <h3>R096 Marking Criteria</h3>
          <p>Check your animation work against the official OCR mark bands.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">R096: Animation Software</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r096_skill_maya')" style="cursor: pointer; border-top: 5px solid #0696D7;">
        <div class="card-image" style="background: #0696D7; color: white;">Ma</div>
        <div class="card-info">
          <h3>Autodesk Maya</h3>
          <p>Industry standard for 3D animation, rigging and keyframing.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_skill_wick')" style="cursor: pointer; border-top: 5px solid #F44336;">
        <div class="card-image" style="background: #F44336; color: white;">Wi</div>
        <div class="card-info">
          <h3>Wick Editor</h3>
          <p>Free, web-based 2D vector animation tool — great for beginners.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_skill_blender')" style="cursor: pointer; border-top: 5px solid #E67E22;">
        <div class="card-image" style="background: #E67E22; color: white;">Bl</div>
        <div class="card-info">
          <h3>Blender</h3>
          <p>Free, open-source software for 3D modelling, rigging and animation.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_skill_pencil2d')" style="cursor: pointer; border-top: 5px solid #673AB7;">
        <div class="card-image" style="background: #673AB7; color: white;">P2</div>
        <div class="card-info">
          <h3>Pencil2D</h3>
          <p>Simple, free tool for traditional 2D hand-drawn animation.</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_skill_line')" style="cursor: pointer; border-top: 5px solid #4CAF50;">
        <div class="card-image" style="background: #4CAF50; color: white;">Ln</div>
        <div class="card-info">
          <h3>Line Drawing</h3>
          <p>Traditional techniques for hand-drawn animation, onion-skinning and rotoscoping.</p>
        </div>
      </div>
    </div>

    <h2 class="section-title">External Study Tools</h2>
    <div class="card-grid">
      <div class="card" onclick="window.open('https://senecalearning.com/', '_blank')" style="cursor: pointer; border-left: 5px solid #2563EB;">
        <div class="card-image" style="background: #2563EB; color: white;">Sen</div>
        <div class="card-info">
          <h3>Seneca Learning</h3>
          <p>Free interactive quizzes covering R093 exam topics. Open in a new tab.</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://mrowoyemi.github.io/iMediaTrainer/', '_blank')" style="cursor: pointer; border-left: 5px solid #28a745;">
        <div class="card-image" style="background: #28a745; color: white;">Trainer</div>
        <div class="card-info">
          <h3>iMedia Trainer</h3>
          <p>External revision tool with knowledge organisers and quizzes. Open in a new tab.</p>
        </div>
      </div>

      <div class="card" onclick="window.open('https://www.ocr.org.uk/qualifications/cambridge-nationals/creative-imedia-level-1-2-j834/', '_blank')" style="cursor: pointer; border-left: 5px solid #C00000;">
        <div class="card-image" style="background: #C00000; color: white;">OCR</div>
        <div class="card-info">
          <h3>OCR Specification (J834)</h3>
          <p>Official OCR Cambridge Nationals Creative iMedia Level 1/2 specification, sample assessments and past papers.</p>
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
  r096_skill_pencil2d: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #673AB7; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">P2</div>
      <div>
        <h1 style="margin: 0;">Pencil2D Animation</h1>
        <p style="margin: 0; color: #666;">Free, lightweight tool for traditional 2D hand-drawn animation.</p>
      </div>
    </div>

    <h2 class="section-title" style="margin-top: 0;">Introduction</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is Pencil2D?</h3>
        <p>Pencil2D is a free, open-source animation tool that mimics the feel of traditional pencil-and-paper animation. It supports both raster (bitmap) and vector layers, plus sound, making it ideal for frame-by-frame work in your R096 NEA.</p>
      </div>
      <div class="card" style="border-left: 5px solid #673AB7;">
        <h3 style="color: #673AB7;">⚠ Set Frame Rate First</h3>
        <p>Go to <em>Edit &gt; Preferences &gt; Timeline</em> and set the frame rate to <strong>24 fps</strong> (or whatever your Task 1 plan specifies). Set this <em>before</em> drawing — changing it later will not stretch existing frames and your audio will drift.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 1: Interface &amp; Layers</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Layer Types</h3>
        <ul>
          <li><strong>Bitmap layer:</strong> Pixel-based, like drawing on paper. Best for sketches.</li>
          <li><strong>Vector layer:</strong> Mathematical lines that scale cleanly. Best for clean line art.</li>
          <li><strong>Camera layer:</strong> Controls what the export window sees — pan, zoom, follow.</li>
          <li><strong>Sound layer:</strong> Holds imported audio (.WAV recommended).</li>
        </ul>
      </div>
      <div class="card">
        <h3>The Timeline</h3>
        <p>Each row is a layer; each column is a frame. Click an empty cell and press <strong>F7</strong> to insert a new keyframe ready to draw on.</p>
      </div>
      <div class="card">
        <h3>Onion Skinning</h3>
        <p>Toggle the small icon above the timeline to see ghosted versions of the previous and next frames. Essential for keeping shapes consistent between drawings.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 2: Frame-by-Frame Animation</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Drawing Tools</h3>
        <ul>
          <li><strong>Pencil (P):</strong> Soft sketch lines.</li>
          <li><strong>Pen (V):</strong> Solid, clean lines.</li>
          <li><strong>Brush (B):</strong> Pressure-sensitive ink strokes.</li>
          <li><strong>Polyline (Y):</strong> Straight precise edges.</li>
        </ul>
      </div>
      <div class="card">
        <h3>The Workflow</h3>
        <ol>
          <li>Draw on Frame 1.</li>
          <li>Press <strong>F7</strong> to add Frame 2.</li>
          <li>Turn on Onion Skin and modify the drawing slightly.</li>
          <li>Repeat. Aim for 12–24 drawings per second.</li>
        </ol>
      </div>
      <div class="card">
        <h3>Exposure (Holding Frames)</h3>
        <p>Right-click a keyframe &gt; <strong>Add Frame</strong> to hold the drawing for several frames without redrawing. Used for "ones" (every frame) vs "twos" (each drawing held for 2 frames — saves work).</p>
      </div>
    </div>

    <h2 class="section-title">Phase 3: Audio &amp; Sync</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Importing Audio</h3>
        <p>Add a Sound layer, click an empty frame, then <em>File &gt; Import &gt; Sound</em>. The waveform appears so you can see exactly which frame contains a beat or syllable — perfect for lip-sync.</p>
      </div>
      <div class="card">
        <h3>Lip-sync Method</h3>
        <p>Scrub the timeline one frame at a time and listen for the syllable. Note the frame number, then draw the matching mouth shape (A/E/I/O/U/closed) on that frame in your character layer.</p>
      </div>
    </div>

    <h2 class="section-title">Phase 4: Exporting</h2>
    <div class="card-grid">
      <div class="card">
        <h3>For NEA Submission</h3>
        <p><em>File &gt; Export &gt; Movie</em>. Choose <strong>MP4</strong>, set resolution (e.g. 1920 × 1080), confirm the frame rate matches the project, and tick "Export with sound".</p>
      </div>
      <div class="card">
        <h3>Saving Working Files</h3>
        <p>Save the native <strong>.PCLX</strong> regularly. This keeps every layer and frame editable so you can return and refine. Always keep a backup before exporting.</p>
      </div>
      <div class="card">
        <h3>Image Sequence</h3>
        <p>For higher quality, export as a <strong>PNG sequence</strong> and combine in a video editor. Useful if Pencil2D crashes during MP4 export.</p>
      </div>
    </div>

    <div class="homework-box" style="padding: 25px; border-top: 3px solid #673AB7; margin-top: 30px;">
      <h3 style="margin-top: 0; margin-bottom: 20px;">Pencil2D Shortcuts Cheat Sheet</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #673AB7;">
          <code style="font-weight: bold; color: var(--dark-purple);">F7</code> <span style="margin-left: 10px; color: var(--secondary-text);">Insert Keyframe</span>
        </div>
        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #673AB7;">
          <code style="font-weight: bold; color: var(--dark-purple);">F8</code> <span style="margin-left: 10px; color: var(--secondary-text);">Remove Keyframe</span>
        </div>
        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #673AB7;">
          <code style="font-weight: bold; color: var(--dark-purple);">P / B / V</code> <span style="margin-left: 10px; color: var(--secondary-text);">Pencil / Brush / Pen</span>
        </div>
        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #673AB7;">
          <code style="font-weight: bold; color: var(--dark-purple);">U</code> <span style="margin-left: 10px; color: var(--secondary-text);">Toggle Onion Skin</span>
        </div>
        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #673AB7;">
          <code style="font-weight: bold; color: var(--dark-purple);">Space</code> <span style="margin-left: 10px; color: var(--secondary-text);">Play / Pause</span>
        </div>
        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #673AB7;">
          <code style="font-weight: bold; color: var(--dark-purple);">Ctrl + S</code> <span style="margin-left: 10px; color: var(--secondary-text);">Save .PCLX</span>
        </div>
      </div>
    </div>
  `,

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

    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="initQuizInOrder()" style="display:none;">
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

// Snapshot of the keyword bank in its original TA1 → TA4 spec order.
// shuffleArray() mutates r093Keywords in place, so we keep this master copy
// to restore the original sequence whenever the quiz reopens or is reset.
const r093KeywordsOriginalOrder = r093Keywords.slice();

function resetCardState() {
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

// Used when the revision card quiz first opens — keeps cards in TA1 → TA4 order.
function initQuizInOrder() {
  // Restore the original spec order (in place, so external references stay valid).
  r093Keywords.length = 0;
  r093KeywordsOriginalOrder.forEach(k => r093Keywords.push(k));
  resetCardState();
}

// Triggered by the "Start / Shuffle Quiz" button — randomises the order.
function initQuiz() {
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
