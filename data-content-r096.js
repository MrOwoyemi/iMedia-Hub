/* R096 pages. Fetched on demand, prefetched when the browser is idle.
   Split out of one large file so the dashboard can paint without waiting for
   every page of the site. See loadUnitContent() in script.js. */

Object.assign(contentData, {
  r096_hub: `
    <h1>Unit R096: Animation with audio</h1>
    <p>This unit involves planning, creating, and reviewing an animation with a synchronized audio track.</p>

    <h2 class="section-title">Coursework Theory</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer;" href="#r096_ta1" onclick="navTo(event, 'r096_ta1')">
        <div class="card-image">TA1</div>
        <div class="card-info">
          <h3>Topic Area 1: Plan Animation</h3>
          <p>Understanding animation types, audio properties, and pre-production techniques.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer;" href="#r096_ta2" onclick="navTo(event, 'r096_ta2')">
        <div class="card-image">TA2</div>
        <div class="card-info">
          <h3>Topic Area 2: Create Animation</h3>
          <p>Animation techniques, audio mixing, and technical integration.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer;" href="#r096_ta3" onclick="navTo(event, 'r096_ta3')">
        <div class="card-image">TA3</div>
        <div class="card-info">
          <h3>Topic Area 3: Review Animation</h3>
          <p>Testing, reviewing effectiveness, and identifying improvements.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">Coursework Tasks (NEA)</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-left: 5px solid var(--brand-surface);" href="#r096_task_1" onclick="navTo(event, 'r096_task_1')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Task 1</div>
        <div class="card-info">
          <h3>Task 1: Planning</h3>
          <p>Interpreting the brief, creating storyboards, scripts, and asset lists.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer; border-left: 5px solid var(--brand-surface);" href="#r096_task_2" onclick="navTo(event, 'r096_task_2')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Task 2</div>
        <div class="card-info">
          <h3>Task 2: Creation</h3>
          <p>Developing the animation and mixing the final audio track.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer; border-left: 5px solid var(--brand-surface);" href="#r096_task_3" onclick="navTo(event, 'r096_task_3')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Task 3</div>
        <div class="card-info">
          <h3>Task 3: Review</h3>
          <p>Testing the final product and writing the evaluation.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">Guidance & Marks</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-left: 5px solid var(--brand-surface);" href="#r096_guidance" onclick="navTo(event, 'r096_guidance')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Guide</div>
        <div class="card-info">
          <h3>Assessment Guidance</h3>
          <p>Step-by-step help to achieve Mark Band 3.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer; border-left: 5px solid var(--brand-surface);" href="#r096_criteria" onclick="navTo(event, 'r096_criteria')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Marks</div>
        <div class="card-info">
          <h3>Marking Criteria</h3>
          <p>Check your work against the official OCR mark bands.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">Animation Skills & Software</h2>
    <div class="card-grid">
      
      <a class="card" style="cursor: pointer; border-top: 5px solid #05688F;" href="#r096_skill_maya" onclick="navTo(event, 'r096_skill_maya')">
        <div class="card-image" style="background: #05688F; color: white;">Ma</div>
        <div class="card-info">
          <h3>Autodesk Maya</h3>
          <p>Industry standard for 3D animation. Used for rigging, keyframing, and character motion.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #C62828;" href="#r096_skill_wick" onclick="navTo(event, 'r096_skill_wick')">
        <div class="card-image" style="background: #C62828; color: white;">Wi</div>
        <div class="card-info">
          <h3>Wick Editor</h3>
          <p>Free, web-based tool for 2D vector animation. Great for beginners and simple interactive projects.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #2E7D32;" href="#r096_skill_line" onclick="navTo(event, 'r096_skill_line')">
        <div class="card-image" style="background: #2E7D32; color: white;">Ln</div>
        <div class="card-info">
          <h3>Line Drawing</h3>
          <p>Traditional techniques for hand-drawn animation, including onion skinning and rotoscoping.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #A65A0C;" href="#r096_skill_blender" onclick="navTo(event, 'r096_skill_blender')">
        <div class="card-image" style="background: #A65A0C; color: white;">Bl</div>
        <div class="card-info">
          <h3>Blender</h3>
          <p>Powerful free open-source software for 3D modelling, rigging, and animation.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #673AB7;" href="#r096_skill_pencil2d" onclick="navTo(event, 'r096_skill_pencil2d')">
        <div class="card-image" style="background: #673AB7; color: white;">P2</div>
        <div class="card-info">
          <h3>Pencil2D</h3>
          <p>Simple, free tool for traditional 2D hand-drawn animation. Excellent for frame-by-frame work.</p>
        </div>
      </a>

    </div>

  `,

  r096_ta1: `
    <h1>R096 Topic Area 1: Plan animation with audio</h1>
    <p>Planning is the foundation of any successful animation. This topic covers the types of animation, audio properties, required resources, and pre-production techniques.</p>
    
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r096_1_1" onclick="navTo(event, 'r096_1_1')">
        <div class="card-image">Conventions</div>
        <div class="card-info">
          <h3>1.1 Features and Conventions</h3>
          <p>Types of animation (CGI, Stop motion), audio properties (Diegetic/Non-diegetic), and how they are used for storytelling.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r096_1_2" onclick="navTo(event, 'r096_1_2')">
        <div class="card-image">Resources</div>
        <div class="card-info">
          <h3>1.2 Required Resources</h3>
          <p>Hardware (Cameras, Microphones) and Software tools needed for creating animation and capturing audio.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r096_1_3" onclick="navTo(event, 'r096_1_3')">
        <div class="card-image">Planning</div>
        <div class="card-info">
          <h3>1.3 Pre-production Techniques</h3>
          <p>Creating Storyboards, Scripts, Timelines, and Graphic Scores to plan the integration of visuals and sound.</p>
        </div>
      </a>
    </div>
  `,

  // --- NEW CONTENT: 1.1 Features and Conventions ---,

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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: Identify two types of animation and describe one strength of each. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. <strong>Stop motion / Claymation</strong> (1) — gives a unique tactile aesthetic that audiences find charming and distinctive (e.g. Aardman's <em>Wallace &amp; Gromit</em>) and feels handmade compared to digital animation (1).</p>
        <p>2. <strong>CGI (Computer-Generated Imagery)</strong> (1) — allows photorealistic environments, complex camera moves and physics simulation that would be impossible to film, making it ideal for fantasy and action stories (1).</p>
      </div>
    </div>

  `,

  // --- NEW CONTENT: 1.2 Resources ---,

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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: Explain why a tripod is an essential piece of hardware when creating a stop-motion animation. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>A tripod holds the camera completely still between every photograph (1). Because stop motion is built from hundreds of photos taken seconds apart (1), even a tiny shift in the camera position would cause the background to jump on screen, breaking the illusion of smooth movement (1). The tripod ensures continuity, which is essential for a professional-looking final animation.</p>
      </div>
    </div>

  `,

  // --- NEW CONTENT: 1.3 Planning ---,

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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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

  // --- UPDATED R096 TOPIC AREA 2 HUB ---,

  r096_ta2: `
    <h1>R096 Topic Area 2: Create animation with audio</h1>
    <p>This section covers the practical skills required to create assets, animate movement, mix audio, and export the final product.</p>
    
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r096_2_1" onclick="navTo(event, 'r096_2_1')">
        <div class="card-image">Assets</div>
        <div class="card-info">
          <h3>2.1 Creating Assets</h3>
          <p>Techniques for creating and editing both visual (digital/physical) and audio assets.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r096_2_2" onclick="navTo(event, 'r096_2_2')">
        <div class="card-image">Techniques</div>
        <div class="card-info">
          <h3>2.2 Animation & Integration</h3>
          <p>Keyframing, tweening, audio mixing, and synchronising sound with visuals.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r096_2_3" onclick="navTo(event, 'r096_2_3')">
        <div class="card-image">Exporting</div>
        <div class="card-info">
          <h3>2.3 Save and Export</h3>
          <p>Understanding native files vs export formats for digital distribution.</p>
        </div>
      </a>
    </div>
  `,

  // --- NEW CONTENT: 2.1 Visual & Audio Assets ---,

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

  // --- NEW CONTENT: 2.2 Techniques ---,

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

  // --- NEW CONTENT: 2.3 Save and Export ---,

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
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r096_3_1" onclick="navTo(event, 'r096_3_1')">
        <div class="card-image">Testing</div>
        <div class="card-info">
          <h3>3.1 Testing and Review</h3>
          <p>Test plans, identifying errors, fixing sync issues, and reviewing fitness for purpose.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r096_3_2" onclick="navTo(event, 'r096_3_2')">
        <div class="card-image">Development</div>
        <div class="card-info">
          <h3>3.2 Future Improvements</h3>
          <p>Recommending technical, creative, and audio improvements for the next version of the product.</p>
        </div>
      </a>
    </div>
  `,

  // --- NEW: R096 3.1 Testing and Review ---,

  r096_3_1: `
    <h1>3.1 Testing and Reviewing the Animation</h1>
    <p>To reach Mark Band 3, your testing must do more than say "the video plays". It must <strong>identify problems, document fixes, and re-test</strong>. Your review must critically evaluate how the product meets the brief and engages the audience.</p>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">1. Building a Test Plan</h2>
      <p>A test plan is a structured table that records what you tested, the expected result, the actual result, and any action taken to fix problems.</p>

      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: Explain why iterative testing (testing, fixing, re-testing) is important during the production of an animation. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>Iterative testing allows the producer to identify problems such as audio sync errors or pixelation early (1) so they can be corrected before the final export (1). Re-testing after each fix confirms that the change actually solved the problem and did not introduce new issues (1), which results in a final product that is fully fit for purpose and meets the technical standard the client expects (1).</p>
      </div>
    </div>
  `,

  // --- NEW: R096 3.2 Future Improvements ---,

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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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
          <p>Add closed captions and audio descriptions so the product complies with the Equality Act 2010 and reaches deaf/blind viewers.</p>
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: Suggest one improvement that could be made to the audio of an animation, and explain why this would benefit the target audience. (3 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>I would add layered Foley sound effects such as footsteps, door creaks, and clothing rustle (1) instead of relying only on background music. This makes the scene feel three-dimensional and realistic (1), which increases immersion for the target audience of 8–12 year-olds, who are more likely to stay engaged when the world feels alive and believable (1).</p>
      </div>
    </div>
  `,

  r096_criteria: `
    <h1>R096 Marking Criteria</h1>
    <p>Use these Mark Bands (MB) to assess your progress for the Animation with Audio unit.</p>
    
    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0; font-size: 1.2rem;">Unit R096 – Topic Area 1: Plan animation with audio</h2>
      
      <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
            <li><strong>Starter Sentence:</strong> "I will source a royalty-free background track in .wav format to ensure high-quality audio at 44.1 kHz."</li>
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
                <li>Include scene durations and total frame counts (ensure 24 fps is used).</li>
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

    <div class="card" style="margin-top: 20px; background: var(--tint-violet); border-left: 5px solid var(--dark-purple);">
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
        <div class="homework-box" style="background: var(--tint-neutral); border-left: 5px solid #2D033B;">
          <p><strong>Test Objective:</strong> Does the background music effectively 'duck' during the voiceover?</p>
          <p><strong>Test Procedure:</strong> Play the animation from 00:15 to 00:30 where the narrator introduces the product.</p>
          <p><strong>Expected Result:</strong> Music volume should drop by 15dB to allow the speech to be clearly audible.</p>
          <p><strong>Actual Result:</strong> Music remained at full volume; narrator was difficult to hear.</p>
          <p><strong>Action Taken:</strong> Applied a volume envelope to the music track to reduce gain during speech frames.</p>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 20px; background: var(--tint-violet); border-left: 5px solid var(--dark-purple);">
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

  r096_skill_maya: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #003E5C; color: #7FD0F5; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Ma</div>
      <div>
        <h1 style="margin: 0;">Autodesk Maya Animation</h1>
        <p style="margin: 0; color: var(--secondary-text);">The industry standard for 3D Keyframe Animation.</p>
      </div>
    </div>

    <h2 class="section-title" style="margin-top: 0;">Introduction</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is Keyframe Animation?</h3>
        <p>You don't draw every frame. You define the <strong>Start Point</strong> (Frame 1) and the <strong>End Point</strong> (Frame 24). Maya calculates the movement in between (Interpolation).</p>
      </div>
      <div class="card" style="border-left: 5px solid #d32f2f;">
        <h3 style="color: var(--danger);">⚠️ Critical Step: 24 fps</h3>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #05688F;" href="https://www.youtube.com/watch?v=d7zdvb1E1Q0" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>1. The Bouncing Ball</h3>
          <p><strong>Skill:</strong> Timing, Squash & Stretch, and Graph Editor basics.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #05688F;" href="https://www.youtube.com/watch?v=jPOVyyzE2Ro" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>2. Environmental modeling : Rigging & Animating Windows & Doors</h3>
          <p><strong>Skill:</strong> Understanding How Objects Move.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #05688F;" href="https://www.youtube.com/watch?v=P0ncubO1ChM" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>3. Camera Fly-Through</h3>
          <p><strong>Skill:</strong> Keyframing a camera to fly through a scene.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #05688F;" href="https://www.youtube.com/watch?v=FgXltPe02j0" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>4. Create and Animate a Cartoon Candle</h3>
          <p><strong>Skill:</strong> Full process from creating to animating a Candle</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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
      <div style="background: #C62828; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Wi</div>
      <div>
        <h1 style="margin: 0;">Wick Editor Animation</h1>
        <p style="margin: 0; color: var(--secondary-text);">A free, web-based tool for 2D vector animation and games.</p>
      </div>
    </div>

    <h2 class="section-title" style="margin-top: 0;">Introduction</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is Wick Editor?</h3>
        <p>Wick Editor is an accessible tool for creating 2D animations using vector graphics. It is ideal for learners who want to master frame-by-frame animation or simple "tweening" without complex software installations.</p>
      </div>
      <div class="card" style="border-left: 5px solid #d32f2f;">
        <h3 style="color: var(--danger);">⚠️ Project Settings</h3>
        <p>Always check your Canvas Settings before starting. Ensure your frame rate matches your Task 1 plan (typically 12 or 24 fps) to keep your audio in sync later.</p>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #C62828;" href="https://www.youtube.com/watch?v=pAsrXT8KIrI" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>1. Interface & Drawing Basics</h3>
          <p><strong>Skill:</strong> Getting started with the editor layout and drawing tools.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #C62828;" href="https://www.youtube.com/watch?v=CzgDiU2P2Oo" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>2. Creating Your First Animation</h3>
          <p><strong>Skill:</strong> Understanding frames, layers, and basic motion.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #C62828;" href="https://www.youtube.com/watch?v=fiTimi02PEg" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>3. Adding Sound & Interactivity</h3>
          <p><strong>Skill:</strong> Importing audio and using basic buttons.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">Project Resources</h2>
    <p>Follow these additional resources to master specific animation techniques for your R096 NEA.</p>
    
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-left: 5px solid #C62828;" href="https://www.wickeditor.com/#/learn/" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>Wick Editor Learning Hub</h3>
          <p>Access the full library of official tutorials for advanced techniques.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Visit Learn Page</p>
        </div>
      </a>
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

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #C62828;">
      <code style="font-weight: bold; color: var(--dark-purple);">V</code> <span style="margin-left: 10px; color: var(--secondary-text);">Selection Tool</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #C62828;">
      <code style="font-weight: bold; color: var(--dark-purple);">B</code> <span style="margin-left: 10px; color: var(--secondary-text);">Brush Tool</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #C62828;">
      <code style="font-weight: bold; color: var(--dark-purple);">E</code> <span style="margin-left: 10px; color: var(--secondary-text);">Eraser Tool</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #1565C0;">
      <code style="font-weight: bold; color: var(--dark-purple);">Shift + Click</code> <span style="margin-left: 10px; color: var(--secondary-text);">Select Multiple</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #1565C0;">
      <code style="font-weight: bold; color: var(--dark-purple);">C</code> <span style="margin-left: 10px; color: var(--secondary-text);">Canvas Settings</span>
    </div>

    <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #2E7D32;">
      <code style="font-weight: bold; color: var(--dark-purple);">Export</code> <span style="margin-left: 10px; color: var(--secondary-text);">Save as .html/.mp4</span>
    </div>

  </div>
</div>

  `,

  r096_skill_line: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #2E7D32; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Ln</div>
      <div>
        <h1 style="margin: 0;">Line Drawing Techniques</h1>
        <p style="margin: 0; color: var(--secondary-text);">Traditional hand-drawn methods for 2D animation.</p>
      </div>
    </div>

    <h2 class="section-title" style="margin-top: 0;">Introduction</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is Line Drawing Animation?</h3>
        <p>Line drawing (or Cel animation) is the traditional method of creating movement by drawing every single frame by hand. While time-consuming, it offers the highest level of creative control over character performance.</p>
      </div>
      <div class="card" style="border-left: 5px solid #2E7D32;">
        <h3 style="color: var(--note-green);">⚠️ Planning for Sync</h3>
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

    <div class="homework-box" style="padding: 25px; border-top: 3px solid #2E7D32; margin-top: 30px;">
      <h3 style="margin-top: 0; margin-bottom: 20px;">Animation Principles Cheat Sheet</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        
        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #2E7D32;">
          <span style="font-weight: bold; color: var(--dark-purple);">Squash & Stretch</span> <span style="display:block; font-size: 0.85rem; color: var(--secondary-text);">Giving objects a sense of weight and flexibility.</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #2E7D32;">
          <span style="font-weight: bold; color: var(--dark-purple);">Anticipation</span> <span style="display:block; font-size: 0.85rem; color: var(--secondary-text);">Preparing the audience for an action (e.g., crouching before a jump).</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #2E7D32;">
          <span style="font-weight: bold; color: var(--dark-purple);">Arcs</span> <span style="display:block; font-size: 0.85rem; color: var(--secondary-text);">Ensuring movements follow natural, curved paths.</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #2E7D32;">
          <span style="font-weight: bold; color: var(--dark-purple);">Timing</span> <span style="display:block; font-size: 0.85rem; color: var(--secondary-text);">The number of frames between actions to determine speed.</span>
        </div>

      </div>
    </div>

  `,

  r096_skill_blender: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #A65A0C; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Bl</div>
      <div>
        <h1 style="margin: 0;">Blender 3D Animation</h1>
        <p style="margin: 0; color: var(--secondary-text);">A powerful, open-source suite for 3D modelling, rigging, and animation.</p>
      </div>
    </div>

    <h2 class="section-title" style="margin-top: 0;">Introduction</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is Blender?</h3>
        <p>Blender is a professional-grade 3D tool used for everything from visual effects to video games. It handles the entire 3D pipeline: modelling, rigging, animation, simulation, rendering, and even video editing.</p>
      </div>
      <div class="card" style="border-left: 5px solid #A65A0C;">
        <h3 style="color: var(--note-orange);">⚠️ Frame Rate Warning</h3>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #A65A0C;" href="https://www.youtube.com/watch?v=B0J27sf9N1Y&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>1. Blender Beginner Tutorial</h3>
          <p><strong>Skill:</strong> Interface, navigation, and basic object manipulation.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #A65A0C;" href="https://youtu.be/tBpnKTAc5Eo?si=-_iCMgjfXhln_-Y3" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>2. Modelling for Beginners</h3>
          <p><strong>Skill:</strong> Creating 3D assets using Edit Mode and Modifiers.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #A65A0C;" href="https://youtu.be/4-tCn4-GfM4?si=zfq-72Jw6ii4JbbC" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>3. Keyframe Animation Basics</h3>
          <p><strong>Skill:</strong> Setting keys, using the timeline, and adjusting timing.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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
      
      <a class="card" style="cursor: pointer; border-left: 5px solid #A65A0C;" href="https://youtu.be/D2rZljDYGdM?si=gxu0X3nPkXy9WX1Q" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>4. Rendering & Exporting</h3>
          <p><strong>Skill:</strong> Setting up the camera, choosing a render engine, and exporting your final video file.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
    </div>

    <div class="homework-box" style="padding: 25px; border-top: 3px solid #A65A0C; margin-top: 30px;">
      <h3 style="margin-top: 0; margin-bottom: 20px;">Blender Shortcuts Cheat Sheet</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        
        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #A65A0C;">
          <code style="font-weight: bold; color: var(--dark-purple);">G / R / S</code> <span style="margin-left: 10px; color: var(--secondary-text);">Grab, Rotate, Scale</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #A65A0C;">
          <code style="font-weight: bold; color: var(--dark-purple);">Tab</code> <span style="margin-left: 10px; color: var(--secondary-text);">Object / Edit Mode</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #A65A0C;">
          <code style="font-weight: bold; color: var(--dark-purple);">Shift + A</code> <span style="margin-left: 10px; color: var(--secondary-text);">Add Mesh/Object</span>
        </div>

        <div style="background: var(--bg-color); padding: 12px; border-radius: 8px; border-left: 4px solid #A65A0C;">
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
        <p style="margin: 0; color: var(--secondary-text);">Free, lightweight tool for traditional 2D hand-drawn animation.</p>
      </div>
    </div>

    <h2 class="section-title" style="margin-top: 0;">Introduction</h2>
    <div class="card-grid">
      <div class="card">
        <h3>What is Pencil2D?</h3>
        <p>Pencil2D is a free, open-source animation tool that mimics the feel of traditional pencil-and-paper animation. It supports both raster (bitmap) and vector layers, plus sound, making it ideal for frame-by-frame work in your R096 NEA.</p>
      </div>
      <div class="card" style="border-left: 5px solid #673AB7;">
        <h3 style="color: var(--note-violet);">⚠ Set Frame Rate First</h3>
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
});
