const contentData = {
  home: `
    <h1>Student Dashboard</h1>
    <p>Select a unit below to access revision materials, topic areas, and coursework guidance.</p>
    
    <div class="card-grid">
      <div class="card" onclick="loadContent('r093_hub')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">R093</div>
        <div class="card-info">
          <h3>R093: Exam Unit</h3>
          <p>Creative iMedia in the media industry.<br><strong>Assessment:</strong> Written Exam (1h 30m)<br><strong>Weighting:</strong> 40%</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r094_hub')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">R094</div>
        <div class="card-info">
          <h3>R094: Visual Identity</h3>
          <p>Visual identity and digital graphics.<br><strong>Assessment:</strong> Coursework (NEA)<br><strong>Weighting:</strong> 30%</p>
        </div>
      </div>

      <div class="card" onclick="loadContent('r096_hub')" style="cursor: pointer; border-top: 5px solid var(--dark-purple);">
        <div class="card-image">R096</div>
        <div class="card-info">
          <h3>R096: Animation</h3>
          <p>Animation with audio.<br><strong>Assessment:</strong> Coursework (NEA)<br><strong>Weighting:</strong> 30%</p>
        </div>
      </div>
    </div>

    <h2>Homework Reminders</h2>
    <div class="homework-box">
      <p><strong>CURRENT TASK (04/03/26):</strong> 1.1 Media Industry Products - Make revision cards on Video, Audio, Animation, Social Media, Websites, eBooks, and AR/VR. </p>
      <p style="color: #666;"><strong>UPCOMING (11/03/26):</strong> 1.2 Job Roles - Make revision cards on creative job roles like Animator, Content creator, and Graphic designer. </p>
    </div>
  `,

  // --- R093 HUB PAGE ---
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
       <div class="card" onclick="loadContent('resources')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Revise</div>
        <div class="card-info">
          <h3>Revision Resources</h3>
          <p>Access Seneca Learning and past paper guidance.</p>
        </div>
      </div>
    </div>
    
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
  `,

  // --- R096 HUB PAGE ---
  r096_hub: `
    <h1>Unit R096: Animation with audio</h1>
    <p>This optional coursework unit involves planning, creating, and reviewing an animation with a synchronized audio track.</p>

    <h2 class="section-title">Coursework Stages</h2>
    <div class="card-grid">
      <div class="card" onclick="loadContent('r096_ta1')" style="cursor: pointer;">
        <div class="card-image">TA1</div>
        <div class="card-info">
          <h3>Topic Area 1: Plan Animation</h3>
          <p>Storyboards, scripts, and asset lists.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r096_ta2')" style="cursor: pointer;">
        <div class="card-image">TA2</div>
        <div class="card-info">
          <h3>Topic Area 2: Create Animation</h3>
          <p>Animation techniques, audio syncing, and exporting.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r096_ta3')" style="cursor: pointer;">
        <div class="card-image">TA3</div>
        <div class="card-info">
          <h3>Topic Area 3: Review Animation</h3>
          <p>Testing, reviewing effectiveness, and suggesting improvements.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r096_criteria')" style="cursor: pointer; border: 2px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Marks</div>
        <div class="card-info">
          <h3>Marking Criteria</h3>
          <p>Check your work against the official OCR mark bands.</p>
        </div>
      </div>
      <div class="card" onclick="loadContent('r096_guidance')" style="cursor: pointer; border-left: 5px solid var(--dark-purple);">
        <div class="card-image" style="background: var(--dark-purple); color: white;">Guide</div>
        <div class="card-info">
          <h3>Assessment Guidance</h3>
          <p>Step-by-step help to achieve Mark Band 3.</p>
        </div>
      </div>
    </div>

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
          <img src="images/Wireframes-in-digital-project-planning.jpg" alt="Wireframe Example" style="width: 100%; height: 100%; object-fit: cover; display: block;">
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
          <div class="card-image" style="background-color: var(--dark-purple);">
            <img src="images/trademark-tm-white-logo-png-701751694713375bqhnkasuv7.png" alt="Trademark Logo" style="max-height: 80%; max-width: 90%;">
          </div>
          <div class="card-info">
            <h3>Trademarks</h3>
            <p>Protects brand identity, such as logos, slogans, and brand names (e.g., the Nike 'Swoosh'). These must be registered.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image" style="background-color: white;">
            <img src="images/pngtree-vector-patented-stamp-brand-patent-patents-vector-png-image_13888952.png" alt="Patent Stamp" style="max-height: 80%; max-width: 90%;">
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
  `,

  r093_3_4_3: `
    <h1>3.4.3 Regulation, Certification, and Classification</h1>
    <p>Media products are regulated to protect audiences (especially children) from harmful or offensive content.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Regulatory Bodies</h2>
      <div class="card-grid">
        <div class="card">
          <div class="card-image" style="background-color: white;">
            <img src="images/United_Kingdom_Advertising_Standards_Authority_logo.svg.png" alt="ASA Logo" style="max-height: 80%; max-width: 90%;">
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
            <img src="images/BBFC_logo.svg.png" alt="BBFC Logo" style="max-height: 80%; max-width: 90%;">
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
  `,

  r096_ta1: `
    <h1>R096 Topic Area 1: Plan animation with audio</h1>
    <div class="card-grid">
      <div class="card">
        <div class="card-image">Conventions</div>
        <div class="card-info">
          <h3>1.1 Features and conventions</h3>
          <p>Understanding the types of animation (2D, 3D, Stop-motion) and the role of audio in enhancing the viewer experience.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Resources</div>
        <div class="card-info">
          <h3>1.2 Required Resources</h3>
          <p>Hardware and software requirements for creating professional animation and syncing audio tracks.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Planning Docs</div>
        <div class="card-info">
          <h3>1.3 Pre-production Techniques</h3>
          <p>Creating storyboards, scripts, and timelines specifically designed for animated sequences and sound cues.</p>
        </div>
      </div>
    </div>
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
  `,

  r096_ta2: `
    <h1>R096 Topic Area 2: Create animation with audio</h1>
    <div class="card-grid">
      <div class="card">
        <div class="card-image">Asset Management</div>
        <div class="card-info">
          <h3>2.1 Manage Assets</h3>
          <p>Techniques to source, create, and organize visual and audio assets for a seamless production workflow.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Creation</div>
        <div class="card-info">
          <h3>2.2 Animation Techniques</h3>
          <p>Using keyframes, tweening, and layering to create movement, and syncing audio precisely to action.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">Exporting</div>
        <div class="card-info">
          <h3>2.3 Save and Export</h3>
          <p>Choosing the correct video containers and codecs to maintain quality while managing file size.</p>
        </div>
      </div>
    </div>

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
  `,

  // --- NEW PAGE: R094 TASK 1 ---
  // --- R094 TASK 1 (Updated Checklist) ---
  r094_task_1: `
    <h1>R094 Task 1: Develop Visual Identity & Planning</h1>
    <p>In this task, you will design the visual identity for the client and plan your digital graphic. Use the checklists below to ensure you hit the top mark bands.</p>

    <div class="checklist-btn" onclick="toggleModal('task1-modal')" title="Open Checklist">
      ✓
    </div>

    <div id="task1-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Task 1 Checklist</h2>
          <span class="close-modal" onclick="toggleModal('task1-modal')">&times;</span>
        </div>
        <div class="checklist-items">
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
    
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
  `,

  // --- R094 TASK 2 (With Checklist) ---
  r094_task_2: `
    <h1>R094 Task 2: Create Visual Identity & Digital Graphic</h1>
    <p>In this task, you will create your final graphic using software. Use this checklist to ensure you capture all the evidence required for Mark Band 3.</p>

    <div class="checklist-btn" onclick="toggleModal('task2-modal')" title="Open Checklist">
      ✓
    </div>

    <div id="task2-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Task 2 Checklist</h2>
          <span class="close-modal" onclick="toggleModal('task2-modal')">&times;</span>
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
    
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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
    
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
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

    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
  `,

  r094_skill_rocketcake: `
    <h1>RocketCake</h1><p>Content coming soon...</p>
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
  `,

  r094_skill_maya: `
    <h1>Autodesk Maya</h1><p>Content coming soon...</p>
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: var(--dark-purple); color: white; border: none; border-radius: 5px; cursor: pointer;">Go Back</button>
  `,

};

// --- History Management Variables ---
let historyStack = ['home'];
let isGoingBack = false;

function toggleNav() {
  document.getElementById("menu-btn").classList.toggle("change");
  document.getElementById("sidebar").classList.toggle("sidebar-open");
  document.getElementById("main-content").classList.toggle("main-push");
  document.body.classList.toggle("sidebar-open-logo");
}

function toggleSubMenu() {
  document.getElementById("r093-submenu").classList.toggle("show-submenu");
}

function loadContent(topic) {
  const display = document.getElementById("display-area");
  // History Management
  if (!isGoingBack) {
    // Only push to history if it's a new page (not refreshing the current one)
    if (historyStack[historyStack.length - 1] !== topic) {
      historyStack.push(topic);
    }
  } else {
    isGoingBack = false; // Reset flag after going back
  }

  // Load Content
  if (contentData[topic]) {
    display.classList.remove("content-animate");
    void display.offsetWidth;
    display.innerHTML = contentData[topic];
    display.classList.add("content-animate");

    // START NEW LINE
    restoreChecks(); // <--- ADD THIS LINE to restore ticks when page changes!
    // END NEW LINE
  }

  if (window.innerWidth < 768) toggleNav();

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
  document.getElementById("r094-submenu").classList.toggle("show-submenu");
}

function toggleR096SubMenu() {
  document.getElementById("r096-submenu").classList.toggle("show-submenu");
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
    } else {
      feedback.innerText = "Try again! That role doesn't primarily belong in " + targetPhase + ".";
      feedback.style.color = "red";
    }
  }
}

// --- CHECKLIST & MODAL LOGIC ---

// 1. Toggle Modal Visibility
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
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}