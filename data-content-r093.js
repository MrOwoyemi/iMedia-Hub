/* R093 pages. Fetched on demand, prefetched when the browser is idle.
   Split out of one large file so the dashboard can paint without waiting for
   every page of the site. See loadUnitContent() in script.js. */

Object.assign(contentData, {
  r093_hub: `
    <h1>Unit R093: Creative iMedia in the media industry</h1>
    <p>This is the mandatory exam unit. It covers the sectors, products, and job roles within the media industry, as well as the legal and ethical issues you need to know.</p>

    <h2 class="section-title">Topic Areas</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer;" href="#ta1" onclick="navTo(event, 'ta1')">
        <div class="card-image">TA1</div>
        <div class="card-info">
          <h3>Topic Area 1: The Media Industry</h3>
          <p>Sectors, products, and job roles.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer;" href="#ta2" onclick="navTo(event, 'ta2')">
        <div class="card-image">TA2</div>
        <div class="card-info">
          <h3>Topic Area 2: Factors Influencing Design</h3>
          <p>Purpose, style, client requirements, and audience.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer;" href="#ta3" onclick="navTo(event, 'ta3')">
        <div class="card-image">TA3</div>
        <div class="card-info">
          <h3>Topic Area 3: Pre-production Planning</h3>
          <p>Work plans, visualisation, and legal issues.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer;" href="#ta4" onclick="navTo(event, 'ta4')">
        <div class="card-image">TA4</div>
        <div class="card-info">
          <h3>Topic Area 4: Distribution</h3>
          <p>Distribution platforms and file formats.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">Interactive Activities</h2>
      <div class="card-grid">
        <a class="card" style="cursor: pointer; border-top: 5px solid #FF9800;" href="#r093_quiz" onclick="navTo(event, 'r093_quiz')">
          <div class="card-image" style="background: var(--tint-orange); color: var(--note-orange);">Quiz</div>
          <div class="card-info">
            <h3>Revision Card Quiz</h3>
            <p>Test your knowledge with flip-card style revision questions.</p>
          </div>
        </a>

        <a class="card" style="cursor: pointer; border-top: 5px solid #d32f2f;" href="#legal_sort_game" onclick="navTo(event, 'legal_sort_game')">
          <div class="card-image" style="background: var(--tint-red); color: var(--danger);">Sort</div>
          <div class="card-info">
            <h3>Legal & Ethical Sort</h3>
            <p>Drag scenarios into Privacy, Defamation, or Copyright.</p>
          </div>
        </a>

        <a class="card" style="cursor: pointer; border-top: 5px solid #1565C0;" href="#format_match_up" onclick="navTo(event, 'format_match_up')">
          <div class="card-image" style="background: var(--tint-blue); color: var(--note-blue);">Match</div>
          <div class="card-info">
            <h3>Technical Match-up</h3>
            <p>Match products to correct DPI and File Formats.</p>
          </div>
        </a>
      </div>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#resources" onclick="navTo(event, 'resources')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Revise</div>
        <div class="card-info">
          <h3>Revision Resources</h3>
          <p>Access Seneca Learning and past paper guidance.</p>
        </div>
      </a>
    </div>
    
  `,

  ta1: `
    <h1>Topic Area 1: The Media Industry</h1>
    <p>Understanding the different sectors, products, and professional roles that make up the media landscape.</p>
    
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_1_1" onclick="navTo(event, 'r093_1_1')">
        <div class="card-image">Sectors & Products</div>
        <div class="card-info">
          <h3>1.1 Media industry sectors and products</h3>
          <p>Traditional media and New media sectors and their specific products. Click to view full details.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_1_2" onclick="navTo(event, 'r093_1_2')">
        <div class="card-image">Job Roles</div>
        <div class="card-info">
          <h3>1.2 Job roles in the media industry</h3>
          <p>Creative roles (Animator, Script writer), Technical roles (Camera operator, Web developer), and Senior roles (Director, Production manager).</p>
        </div>
      </a>
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
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: Identify two advantages of distributing a news story as a new media product (e.g. a website article) rather than as traditional print. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. The article can be <strong>updated instantly</strong> as new information emerges (1), so readers always see the most accurate version, whereas a printed newspaper is out of date as soon as it leaves the press (1).</p>
        <p>2. The story can include <strong>interactive content such as embedded video and reader comments</strong> (1), which engages a wider audience and lets readers react and share, increasing reach beyond what a static printed page could achieve (1).</p>
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: Identify two job roles that work primarily during the post-production phase of a film, and describe the responsibilities of each. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. <strong>Video Editor</strong> (1) — cuts and joins together raw footage filmed during production, applies transitions and colour correction, and assembles the final timeline of the film (1).</p>
        <p>2. <strong>Sound Editor</strong> (1) — cleans up dialogue tracks, layers Foley and music, and synchronises sound effects with the on-screen action so the final mix is clear and immersive (1).</p>
      </div>
    </div>

    <button onclick="loadContent('timeline_game')" style="background: var(--pastel-violet); color: var(--brand-surface); font-weight: bold; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Try the Timeline Challenge!</button>
  `,

  timeline_game: `
    <h1>Production Phase Timeline</h1>
    <p>Drag the job roles into the correct production phase. Some roles work across all phases!</p>

    <div class="homework-box">
      <div id="role-bank" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; padding: 15px; background: var(--tint-neutral); border-radius: 8px; min-height: 50px;">
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
        <button onclick="loadContent('r093_1_2')" style="padding: 10px 20px; background: var(--brand-surface); color: white; border: none; border-radius: 5px; cursor: pointer;">Back to Job Roles</button>
        <button onclick="loadContent('timeline_game')" style="padding: 10px 20px; background: var(--pastel-violet); color: var(--brand-surface); font-weight: bold; border: none; border-radius: 5px; cursor: pointer;">Reset Game</button>
      </div>
    </div>
  `,

  ta2: `
    <h1>Topic Area 2: Factors Influencing Product Design</h1>
    <p>Understanding the link between purpose, client requirements, and audience engagement.</p>
    
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_2_1" onclick="navTo(event, 'r093_2_1')">
        <div class="card-image">Style & Purpose</div>
        <div class="card-info">
          <h3>2.1 Style, Content and Layout</h3>
          <p>Analyzing how these elements are linked to the specific purpose of a media product.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_2_2" onclick="navTo(event, 'r093_2_2')">
        <div class="card-image">Client Briefs</div>
        <div class="card-info">
          <h3>2.2 Client Requirements</h3>
          <p>How requirements are defined: Purpose, content, target audience, timescales, constraints.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_2_3" onclick="navTo(event, 'r093_2_3')">
        <div class="card-image">Audience</div>
        <div class="card-info">
          <h3>2.3 Audience Demographics</h3>
          <p>Segmentation via demographics (age, gender, income) and how this influences design.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_2_4" onclick="navTo(event, 'r093_2_4')">
        <div class="card-image">Research</div>
        <div class="card-info">
          <h3>2.4 Research Methods</h3>
          <p>Primary vs Secondary research, and Qualitative vs Quantitative data types.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_2_5" onclick="navTo(event, 'r093_2_5')">
        <div class="card-image">Media Codes</div>
        <div class="card-info">
          <h3>2.5 Media Codes</h3>
          <p>Using symbolic, technical, and written codes to convey meaning and engage audiences.</p>
        </div>
      </a>
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_1" onclick="navTo(event, 'r093_3_1')">
        <div class="card-image">Work Plans</div>
        <div class="card-info">
          <h3>3.1 Work Planning Techniques</h3>
          <p>Phases, tasks, activities, workflow, durations, milestones, contingencies and resources.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">3.2 Documents That Support Idea Generation</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_2" onclick="navTo(event, 'r093_3_2')">
        <div class="card-image">Mind Maps</div>
        <div class="card-info">
          <h3>3.2 Mind Maps & Mood Boards</h3>
          <p>Brainstorming and visual inspiration documents — components, software, hardware and users.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">3.3 Documents That Visualise Creative Ideas</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_3" onclick="navTo(event, 'r093_3_3')">
        <div class="card-image">Vis. Diagrams</div>
        <div class="card-info">
          <h3>3.3a Visualisation Diagrams</h3>
          <p>Annotated sketches that plan static products such as posters, magazine covers and DVD covers.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_3b" onclick="navTo(event, 'r093_3_3b')">
        <div class="card-image">Storyboards</div>
        <div class="card-info">
          <h3>3.3b Storyboards</h3>
          <p>Sequential panels that plan moving-image products with shots, timings, audio and transitions.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_3c" onclick="navTo(event, 'r093_3_3c')">
        <div class="card-image">Scripts</div>
        <div class="card-info">
          <h3>3.3c Scripts</h3>
          <p>Written blueprints with sluglines, action, character names, dialogue and parentheticals.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_3d" onclick="navTo(event, 'r093_3_3d')">
        <div class="card-image">Wireframes</div>
        <div class="card-info">
          <h3>3.3d Wireframe Templates</h3>
          <p>Layout blueprints for websites, apps and game UI showing structure without colour.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_3e" onclick="navTo(event, 'r093_3_3e')">
        <div class="card-image">Flow Charts</div>
        <div class="card-info">
          <h3>3.3e Flow Charts</h3>
          <p>Game logic and website navigation diagrams using terminator, process, decision and flow lines.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_3f" onclick="navTo(event, 'r093_3_3f')">
        <div class="card-image">Asset Logs</div>
        <div class="card-info">
          <h3>3.3f Asset Lists / Logs</h3>
          <p>Tables of every asset used, including source, format, properties and legal status.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #FF9800;" href="#r093_3_5" onclick="navTo(event, 'r093_3_5')">
        <div class="card-image" style="background: var(--tint-orange); color: var(--note-orange);">Compare</div>
        <div class="card-info">
          <h3>Pre-Production Quick Reference</h3>
          <p>Side-by-side comparison of every pre-production document with components and best uses.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">3.4 Legal Issues in Media</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_4_1" onclick="navTo(event, 'r093_3_4_1')">
        <div class="card-image">Privacy</div>
        <div class="card-info">
          <h3>3.4.1 Privacy & Defamation</h3>
          <p>Data protection, privacy rights, and the difference between libel and slander.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_4_2" onclick="navTo(event, 'r093_3_4_2')">
        <div class="card-image">IP Rights</div>
        <div class="card-info">
          <h3>3.4.2 Intellectual Property</h3>
          <p>Copyright, trademarks, patents, and how to use materials legally.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_4_3" onclick="navTo(event, 'r093_3_4_3')">
        <div class="card-image">Regulation</div>
        <div class="card-info">
          <h3>3.4.3 Regulation & Classification</h3>
          <p>The role of BBFC, PEGI, ASA, and Ofcom in controlling media content.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_3_4_4" onclick="navTo(event, 'r093_3_4_4')">
        <div class="card-image">Health & Safety</div>
        <div class="card-info">
          <h3>3.4.4 Health and Safety</h3>
          <p>Risk assessments, location recces, and hazard mitigation.</p>
        </div>
      </a>
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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

  // ---- 3.3b STORYBOARDS ----,

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
            <li><strong>Shot duration:</strong> In seconds or frames (e.g. 3s, 72 frames @ 24 fps).</li>
            <li><strong>Total scene length</strong> running cumulatively.</li>
            <li><strong>Frame rate</strong> stated (e.g. 24 fps for film).</li>
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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

  // ---- 3.3c SCRIPTS ----,

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
          <pre style="background:var(--tint-neutral);padding:8px;border-radius:4px;font-size:0.85rem;">                    SARAH
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
      <pre style="background: var(--tint-neutral); padding: 15px; border-radius: 6px; font-family: 'Courier New', monospace; font-size: 0.85rem; line-height: 1.4; overflow-x: auto;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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

  // ---- 3.3d WIREFRAMES ----,

  r093_3_3d: `
    <h1>3.3d Wireframe Templates</h1>
    <p>A wireframe is a black-and-white blueprint showing the layout, structure and functional regions of an interactive product (website, mobile app, software UI or game menu) before any colour, imagery or final design is applied.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Worked Examples</h2>
      <div class="card-grid">
        <figure class="figure-card">
          <img src="images/wireframe-annotated.jpg"
            alt="An annotated wireframe of a web page, with labels pointing at the header, navigation bar, hero image placeholder, body text blocks and footer." width="700" height="468">
          <figcaption>An <strong>annotated</strong> wireframe. Every region is labelled with what it is for — this is what earns marks in the exam, not the drawing itself.</figcaption>
        </figure>
        <figure class="figure-card">
          <img src="images/Wireframes-in-digital-project-planning.jpg"
            alt="Several wireframe screens laid out side by side, showing how the same layout is planned across different pages of a project." width="800" height="403">
          <figcaption>Wireframes used across a whole project, so every screen shares the same structure before any visual design starts.</figcaption>
        </figure>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title">1. Purpose</h2>
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
            <li><strong>Page dimensions</strong> (e.g. 1920 × 1080 desktop / 375 × 812 mobile).</li>
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
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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

  // ---- 3.3e FLOW CHARTS ----,

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

      <div class="card-grid">
        <figure class="figure-card">
          <img src="images/flowchart-symbols.png"
            alt="The standard flow chart shapes: oval terminator, rectangle process, diamond decision, parallelogram input/output and arrows for flow lines." width="304" height="347">
          <figcaption>The shapes you are expected to use. Getting the shape right matters as much as the label inside it.</figcaption>
        </figure>
        <figure class="figure-card">
          <img src="images/flowchart-symbols-meaning-1.png"
            alt="A reference chart pairing each flow chart symbol with its name and the meaning it carries in a process diagram." width="563" height="499">
          <figcaption>Each symbol with its name and meaning — worth learning before the exam.</figcaption>
        </figure>
      </div>

      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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

  // ---- 3.3f ASSET LOG ----,

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
            <li><strong>Dimensions / resolution</strong> (e.g. 3000 × 2000 px, 300 DPI).</li>
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
        <tr style="background-color: var(--brand-surface); color: white;">
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
          <td style="padding: 8px;">3000 × 2000 / 300 DPI</td>
          <td style="padding: 8px;">Unsplash Licence</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px;">LOG_01</td>
          <td style="padding: 8px;">eco-bolt_logo_v3.png</td>
          <td style="padding: 8px;">Self-created (Photoshop)</td>
          <td style="padding: 8px;">PNG (transparent)</td>
          <td style="padding: 8px;">800 × 800</td>
          <td style="padding: 8px;">My copyright</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px;">AUD_01</td>
          <td style="padding: 8px;">background_music.wav</td>
          <td style="padding: 8px;">freesound.org</td>
          <td style="padding: 8px;">WAV</td>
          <td style="padding: 8px;">44.1 kHz / 16-bit</td>
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: Explain why a media producer must keep an asset log when creating a TV advert. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>An asset log records the source and licence of every image, font, music track and video clip used (1). This proves that the producer has the legal right to use each asset, protecting the company from copyright infringement claims (1). It also tracks technical properties such as resolution and format (1) so the editor can confirm every asset is suitable for the final output and avoid pixelation when broadcast in HD (1).</p>
      </div>
    </div>
  `,

  // ---- 3.5 PRE-PRODUCTION QUICK REFERENCE ----,

  r093_3_5: `
    <h1>Pre-Production Documents — Quick Reference</h1>
    <p>One page that summarises every pre-production planning document covered by the OCR Cambridge Nationals Creative iMedia specification. Use it as a revision sheet, checklist, and "which document do I need?" decision table.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. All Pre-Production Documents at a Glance</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem;">
        <tr style="background-color: var(--brand-surface); color: white;">
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
        <tr style="background-color: var(--brand-surface); color: white;">
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
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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
      <p>When media companies collect data (e.g., names and emails for a newsletter), they must follow strict rules. In the UK these are set by the <strong>Data Protection Act 2018</strong>, which brings the <strong>GDPR</strong> (General Data Protection Regulation) into UK law.</p>
      <ul>
        <li><strong>Rights of Data Subjects:</strong> People have the right to know what data is held about them, to see it, and to have it deleted.</li>
        <li><strong>Storage:</strong> Data must be stored securely and not shared without permission.</li>
      </ul>
      <p class="exam-tip"><strong>Exam tip:</strong> OCR mark schemes credit the year. Write <strong>Data Protection Act 2018</strong>, <strong>Copyright, Designs and Patents Act 1988</strong> and <strong>Equality Act 2010</strong> in full.</p>
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
          <div class="card-image" style="background: url('images/copyright_symbol.png') no-repeat center center; background-size: 100%; background-color: white;"></div>
          <div class="card-info">
            <h3>Copyright</h3>
            <p>Automatically protects artistic works (music, films, books, software, images). You do not need to register it.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background-color: var(--brand-surface);">
            <img src="images/trademark-tm-white-logo-png-701751694713375bqhnkasuv7.png" alt="Trademark Logo" style="max-height: 80%; max-width: 90%;" width="200" height="200">
          </div>
          <div class="card-info">
            <h3>Trademarks</h3>
            <p>Protects brand identity, such as logos, slogans, and brand names (e.g., the Nike 'Swoosh'). These must be registered.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background-color: white;">
            <img src="images/pngtree-vector-patented-stamp-brand-patent-patents-vector-png-image_13888952.png" alt="Patent Stamp" style="max-height: 80%; max-width: 90%;" width="200" height="175">
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
            <img src="images/United_Kingdom_Advertising_Standards_Authority_logo.svg.png" alt="ASA Logo" style="max-height: 80%; max-width: 90%;" width="330" height="146">
          </div>
          <div class="card-info">
            <h3>ASA (Advertising Standards Authority)</h3>
            <p><strong>Role:</strong> Regulates adverts across all UK media (TV, online, print).</p>
            <p><strong>Purpose:</strong> Ensures ads are legal, decent, honest, and truthful.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background: url('images/ofcom-logo-png_seeklogo-642653.png') no-repeat center center; background-size: 80%; background-color: white;"></div>
          <div class="card-info">
            <h3>Ofcom (Office of Communications)</h3>
            <p><strong>Role:</strong> Regulates TV, radio, and video-on-demand services in the UK.</p>
            <p><strong>Purpose:</strong> Ensures harmful material is not broadcast when children are watching (the "Watershed").</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background-color: white;">
            <img src="images/BBFC_logo.svg.png" alt="BBFC Logo" style="max-height: 80%; max-width: 90%;" width="320" height="184">
          </div>
          <div class="card-info">
            <h3>BBFC (British Board of Film Classification)</h3>
            <p><strong>Role:</strong> Rates films and cinema content.</p>
            <p><strong>Certifications:</strong> U, PG, 12A, 15, 18.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background: url('images/PEGI_logo.svg') no-repeat center center; background-size: 75%; background-color: white;"></div>
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
      <div id="legal-bank" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; padding: 15px; background: var(--tint-neutral); border-radius: 8px; min-height: 50px;">
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
      <button onclick="loadContent('legal_sort_game')" style="margin-top: 20px; padding: 10px 20px; background: var(--pastel-violet); color: var(--brand-surface); border: none; border-radius: 5px; cursor: pointer;">Reset Activity</button>
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
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_4_1" onclick="navTo(event, 'r093_4_1')">
        <div class="card-image">Platforms</div>
        <div class="card-info">
          <h3>4.1 Distribution Platforms</h3>
          <p>Online (websites, social media, streaming) and Physical (DVD, Blu-ray) platforms to reach audiences.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">4.2 Properties and Formats of Media Files</h2>
    
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_4_2_1" onclick="navTo(event, 'r093_4_2_1')">
        <div class="card-image">Images</div>
        <div class="card-info">
          <h3>4.2.1 Image Files</h3>
          <p>Standard formats: JPEG and PNG. Understanding resolution and pixel density for different outputs.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_4_2_2" onclick="navTo(event, 'r093_4_2_2')">
        <div class="card-image">Audio</div>
        <div class="card-info">
          <h3>4.2.2 Audio Files</h3>
          <p>Standard formats: MP3 and WAV. Key properties include sample rate and bit depth.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_4_2_3" onclick="navTo(event, 'r093_4_2_3')">
        <div class="card-image">Video</div>
        <div class="card-info">
          <h3>4.2.3 Moving Image Files</h3>
          <p>Standard formats: MP4 and MOV. Considerations for frame rate and video bit rate.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r093_4_2_4" onclick="navTo(event, 'r093_4_2_4')">
        <div class="card-image">Compression</div>
        <div class="card-info">
          <h3>4.2.4 File Compression</h3>
          <p>Using lossy and lossless compression to manage file size while maintaining quality.</p>
        </div>
      </a>
    </div>
    
  `,

  // --- NEW CONTENT: 4.1 Distribution ---,

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
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: A media company is releasing a feature film. Identify two distribution platforms they could use and explain why each is suitable. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. <strong>Cinema</strong> (1) — provides the highest-quality 4K projection and immersive audio, allowing the audience to experience the film as the director intended and generating significant ticket revenue (1).</p>
        <p>2. <strong>Streaming service (e.g. Netflix, Disney+)</strong> (1) — gives global digital reach so audiences can watch on demand on any device, extending the film's commercial life long after the cinema window closes (1).</p>
      </div>
    </div>

  `,

  // --- NEW CONTENT: 4.2.1 Image Files ---,

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
          <p>The total number of pixels along the width and height of an image (e.g., 1920 × 1080).</p>
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
        <tr style="background-color: var(--brand-surface); color: white;">
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

  // --- NEW CONTENT: 4.2.2 Audio Files ---,

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

  // --- NEW CONTENT: 4.2.3 Moving Image Files ---,

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
            <li><strong>24 fps:</strong> Standard for cinema/movies.</li>
            <li><strong>30 fps:</strong> Standard for television and news.</li>
            <li><strong>60+ FPS:</strong> Required for gaming and sports to prevent blur.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Resolution</h3>
          <p>The number of pixels that make up the image on screen (Width x Height).</p>
          <ul>
            <li><strong>SD (Standard Definition):</strong> 720 × 576 pixels. Low quality, small file size.</li>
            <li><strong>HD (High Definition):</strong> 1920 × 1080 pixels (1080p). The standard for web video and Blu-ray.</li>
            <li><strong>UHD / 4K:</strong> 3840 × 2160 pixels. Four times the detail of HD.</li>
            <li><strong>8K:</strong> 7680 × 4320 pixels. Extremely high detail, requires massive storage.</li>
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
        <li><strong>Context: Sports Broadcast.</strong> Use <strong>60 fps HD/4K</strong>. Smooth motion is vital to see the ball/action clearly.</li>
      </ul>
    </div>

    <div class="homework-box">
      <h2 class="section-title">Key Term Definitions</h2>
      <div class="card-grid">
        <div class="card">
          <p><strong>Frame Rate:</strong> The frequency (rate) at which consecutive images (frames) appear on a display.</p>
        </div>
        <div class="card">
          <p><strong>UHD (Ultra High Definition):</strong> A resolution of 3840 × 2160 pixels, commonly referred to as 4K.</p>
        </div>
        <div class="card">
          <p><strong>Streaming:</strong> Playing media immediately as it downloads from the internet, rather than waiting for the whole file to finish.</p>
        </div>
      </div>
    </div>
  `,

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

  format_match_up: `
  <h1>File Format Match-up</h1>
    <p>Select the correct properties for the given media products to ensure they are fit for purpose!</p>

    <div class="homework-box">
      <table style="width:100%; border-collapse: collapse; text-align: left;">
        <tr style="background: var(--brand-surface); color: white;">
          <th style="padding: 10px;">Product</th>
          <th style="padding: 10px;">Target Resolution</th>
          <th style="padding: 10px;">Best Format</th>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>Large Billboard Poster</strong></td>
          <td><select id="res1" aria-label="Resolution for the printed poster"><option>Select...</option><option value="72">72 PPI</option><option value="300">300 DPI</option></select></td>
          <td><select id="fmt1" aria-label="File format for the printed poster"><option>Select...</option><option value="lossy">JPEG (Lossy)</option><option value="high">TIFF (Uncompressed)</option></select></td>
        </tr>
        <tr style="background: var(--tint-neutral);">
          <td style="padding: 10px;"><strong>Website Profile Picture</strong></td>
          <td><select id="res2" aria-label="Resolution for the website banner"><option>Select...</option><option value="72">72 PPI</option><option value="300">300 DPI</option></select></td>
          <td><select id="fmt2" aria-label="File format for the website banner"><option>Select...</option><option value="lossy">JPEG (Lossy)</option><option value="high">TIFF (Uncompressed)</option></select></td>
        </tr>
      </table>
      
      <button onclick="checkFormats()" style="margin-top: 20px; padding: 10px 20px; background: var(--brand-surface); color: white; border: none; border-radius: 5px; cursor: pointer;">Check Answers</button>
      <div id="format-feedback" style="margin-top: 15px; font-weight: bold;"></div>
    </div>
  `,

  // --- NEW CONTENT: 4.2.4 File Compression ---
});
