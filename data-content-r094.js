/* R094 pages. Fetched on demand, prefetched when the browser is idle.
   Split out of one large file so the dashboard can paint without waiting for
   every page of the site. See loadUnitContent() in script.js. */

Object.assign(contentData, {
  r094_hub: `
    <h1>Unit R094: Visual identity and digital graphics</h1>
    <p>This mandatory coursework unit focuses on creating visual identities (branding) and digital graphics for a specific client brief.</p>

    <h2 class="section-title">Coursework Theory</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer;" href="#r094_ta1" onclick="navTo(event, 'r094_ta1')">
        <div class="card-image">TA1</div>
        <div class="card-info">
          <h3>Topic Area 1: Develop Visual Identity</h3>
          <p>Understanding logos, typography, and design elements.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer;" href="#r094_ta2" onclick="navTo(event, 'r094_ta2')">
        <div class="card-image">TA2</div>
        <div class="card-info">
          <h3>Topic Area 2: Plan Digital Graphics</h3>
          <p>Pre-production, assets, and visualisation diagrams.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer;" href="#r094_ta3" onclick="navTo(event, 'r094_ta3')">
        <div class="card-image">TA3</div>
        <div class="card-info">
          <h3>Topic Area 3: Create Digital Graphics</h3>
          <p>Using editing software, sourcing assets, and exporting.</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">Coursework Tasks (NEA)</h2>
    <div class="card-grid">
      
      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r094_task_1" onclick="navTo(event, 'r094_task_1')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Task 1</div>
        <div class="card-info">
          <h3>Task 1: Visual Identity & Planning</h3>
          <p>Designing the brand identity and planning the layout.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r094_task_2" onclick="navTo(event, 'r094_task_2')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Task 2</div>
        <div class="card-info">
          <h3>Task 2: Creation & Evaluation</h3>
          <p>Creating the digital graphic and saving in correct formats.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r094_guidance" onclick="navTo(event, 'r094_guidance')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Guide</div>
        <div class="card-info">
          <h3>Assessment Guidance</h3>
          <p>Step-by-step help to achieve Mark Band 3.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid var(--dark-purple);" href="#r094_criteria" onclick="navTo(event, 'r094_criteria')">
        <div class="card-image" style="background: var(--brand-surface); color: white;">Marks</div>
        <div class="card-info">
          <h3>Marking Criteria</h3>
          <p>Check your work against the official OCR mark bands.</p>
        </div>
      </a>

    </div>

    <h2 class="section-title">Design Skills</h2>
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid #1B6FC4;" href="#r094_skill_photoshop" onclick="navTo(event, 'r094_skill_photoshop')">
        <div class="card-image" style="background: #001E36; color: #1B6FC4;">Ps</div>
        <div class="card-info">
          <h3>Adobe Photoshop</h3>
          <p>Industry standard for raster graphics editing, photo manipulation, and digital art.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #00747A;" href="#r094_skill_canva" onclick="navTo(event, 'r094_skill_canva')">
        <div class="card-image" style="background: linear-gradient(135deg, #00747A, #7D2AE8); color: white;">Ca</div>
        <div class="card-info">
          <h3>Canva</h3>
          <p>Web-based graphic design tool. Excellent for quick layouts, mood boards, and social media assets.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #9024A6;" href="#r094_skill_rocketcake" onclick="navTo(event, 'r094_skill_rocketcake')">
        <div class="card-image" style="background: #9024A6; color: white;">Rc</div>
        <div class="card-info">
          <h3>RocketCake</h3>
          <p>Free responsive web design editor. Useful for visualizing how graphics appear on web pages.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid #05688F;" href="#r094_skill_maya" onclick="navTo(event, 'r094_skill_maya')">
        <div class="card-image" style="background: #05688F; color: white;">Ma</div>
        <div class="card-info">
          <h3>Autodesk Maya</h3>
          <p>Professional 3D animation and modeling software. Used for creating 3D assets and environments.</p>
        </div>
      </a>
    </div>

  `,

  // --- UPDATED R096 HUB PAGE ---,

  r094_ta1: `
    <h1>R094 Topic Area 1: Develop Visual Identity</h1>
    <p>Visual identity is the "face" of a brand. It includes all the visual elements that represent a business to its customers.</p>
    
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r094_1_1" onclick="navTo(event, 'r094_1_1')">
        <div class="card-image">Purpose</div>
        <div class="card-info">
          <h3>1.1 Purpose & Components</h3>
          <p>Why businesses need a visual identity and the core features (Name, Logo, Slogan) that create it.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r094_1_2" onclick="navTo(event, 'r094_1_2')">
        <div class="card-image">Elements</div>
        <div class="card-info">
          <h3>1.2 Elements of Visual Identity</h3>
          <p>How graphics, typography, colour, and layout combine to shape customer perception.</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r094_1_3" onclick="navTo(event, 'r094_1_3')">
        <div class="card-image">Style & Brand</div>
        <div class="card-info">
          <h3>1.3 Design Style & Branding</h3>
          <p>Aligning visual identity with business type, brand values, and market positioning (Economy vs High-end).</p>
        </div>
      </a>
    </div>
  `,

  // --- NEW CONTENT: 1.1 Purpose & Components ---,

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

  // --- NEW CONTENT: 1.2 Elements ---,

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

  // --- NEW CONTENT: 1.3 Style & Brand ---,

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
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r094_2_1" onclick="navTo(event, 'r094_2_1')">
        <div class="card-image">Conventions</div>
        <div class="card-info">
          <h3>2.1 Graphic Design Conventions</h3>
          <p>Understanding layouts, composition, hierarchy, and the standard rules of professional graphic design.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r094_2_2" onclick="navTo(event, 'r094_2_2')">
        <div class="card-image">Assets</div>
        <div class="card-info">
          <h3>2.2 Properties and Assets</h3>
          <p>Technical properties of graphics (pixels, DPI/PPI, colour modes) and sourcing high-quality assets.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r094_2_3" onclick="navTo(event, 'r094_2_3')">
        <div class="card-image">Planning</div>
        <div class="card-info">
          <h3>2.3 Planning Techniques</h3>
          <p>Using visualisation diagrams and asset logs to map out digital graphic designs before creation.</p>
        </div>
      </a>
    </div>
  `,

  // --- NEW: R094 2.1 Graphic Design Conventions ---,

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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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

  // --- NEW: R094 2.2 Properties and Assets ---,

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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: A designer needs a logo with a transparent background for a website. Identify the most suitable file format and explain why. (2 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>The most suitable format is <strong>PNG</strong> (1) because PNG supports an alpha channel, allowing the logo to have a transparent background so it can sit on any colour without a visible white box around it (1).</p>
      </div>
    </div>
  `,

  // --- NEW: R094 2.3 Planning Techniques ---,

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
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r094_3_1" onclick="navTo(event, 'r094_3_1')">
        <div class="card-image">Software Tools</div>
        <div class="card-info">
          <h3>3.1 Editing Software &amp; Techniques</h3>
          <p>Tools, layers, masks, filters and adjustment skills used to manipulate raster and vector graphics.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r094_3_2" onclick="navTo(event, 'r094_3_2')">
        <div class="card-image">Technical Skills</div>
        <div class="card-info">
          <h3>3.2 Sourcing &amp; Preparing Assets</h3>
          <p>Technical skills to source, edit, and prepare images, fonts and graphics ready for the final design.</p>
        </div>
      </a>
      <a class="card" style="cursor: pointer; border-top: 5px solid var(--dark-purple);" href="#r094_3_3" onclick="navTo(event, 'r094_3_3')">
        <div class="card-image">Exporting</div>
        <div class="card-info">
          <h3>3.3 Saving and Exporting</h3>
          <p>Native vs export formats, optimisation, and saving in the correct properties for print and web.</p>
        </div>
      </a>
    </div>
  `,

  // --- NEW: R094 3.1 Editing Software & Techniques ---,

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
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: Explain one advantage of using a layer mask instead of the eraser tool when editing an image. (2 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>A layer mask is non-destructive (1) — the hidden pixels are not deleted, so the designer can paint with white to bring them back at any time, whereas the eraser tool removes pixels permanently and can only be undone with multiple Ctrl+Z presses (1).</p>
      </div>
    </div>
  `,

  // --- NEW: R094 3.2 Sourcing & Preparing Assets ---,

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
      <div class="card" style="background: var(--tint-red); border-left: 5px solid #C62828;">
        <h3 style="margin: 0; color: var(--danger);">⚠ MB3 Critical Evidence</h3>
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
        <h3 style="margin-top: 0;">Q: Describe two technical skills used to prepare a sourced photograph for use as a hero image on a poster. (4 marks)</h3>
        <p><strong>Sample answer:</strong></p>
        <p>1. <strong>Cropping</strong> the image to the correct aspect ratio of the poster (1) ensures the focal point sits within the printable area without important content being cut off (1).</p>
        <p>2. <strong>Adjusting levels or curves</strong> to brighten the midtones (1) makes the photograph readable against any text overlaid on top, improving overall contrast (1).</p>
      </div>
    </div>
  `,

  // --- NEW: R094 3.3 Saving and Exporting ---,

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
        <tr style="background-color: var(--brand-surface); color: white;">
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
      <div class="card" style="border-left: 5px solid var(--dark-purple); background: var(--tint-violet);">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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
        <tr style="background: var(--brand-surface); color: white;">
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

  // --- UPDATED R096 TOPIC AREA 1 HUB ---,

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

  // --- R094 TASK 2 (With Checklist) ---,

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
            <label for="t2_exp2"><strong>Export 2:</strong> Compressed (JPG/PNG) @ 72 PPI.</label>
          </div>
        </div>
      </div>
    </div>

    <div class="homework-box">
      <h2 class="section-title" style="margin-top: 0;">Strand 2b: Preparation of Assets</h2>
      
      <div style="background: var(--tint-red); border-left: 5px solid #C62828; padding: 15px; margin-bottom: 20px;">
        <h3 style="margin: 0; color: var(--danger);">⚠️ CRITICAL EVIDENCE: SCREENSHOTS</h3>
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
      
      <div style="background: var(--tint-blue); border-left: 5px solid #1565C0; padding: 15px; margin-bottom: 20px;">
        <h3 style="margin: 0; color: var(--note-blue);">📸 EVIDENCE ALERT: LAYERS PANEL</h3>
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
          <p><strong>Properties:</strong> 72 PPI or 96 PPI (Low/Screen Resolution).</p>
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

  r094_skill_photoshop: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #001E36; color: #1B6FC4; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Ps</div>
      <div>
        <h1 style="margin: 0;">Adobe Photoshop Skills</h1>
        <p style="margin: 0; color: var(--secondary-text);">Industry standard for raster graphics and photo manipulation.</p>
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
      <p><em>Note: It is NOT the best tool for designing logos (use Illustrator/Vector tools), but it is acceptable for R094 if you use high resolution (300 DPI).</em></p>
    </div>

    <h2 class="section-title">Phase 1: The Basics (Setup & Interface)</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Canvas Setup</h3>
        <p><strong>Print (Coursework):</strong> Set Resolution to <strong>300 DPI</strong> and Color Mode to <strong>CMYK</strong>.</p>
        <p><strong>Web (Screens):</strong> Set Resolution to <strong>72 PPI</strong> and Color Mode to <strong>RGB</strong>.</p>
      </div>
      <div class="card">
        <h3>Layers Panel</h3>
        <p>The "Golden Rule": <strong>Always work on a new layer!</strong></p>
        <p>Use the <strong>Eye Icon</strong> to hide layers and the <strong>Lock Icon</strong> to prevent accidental moves.</p>
      </div>
      <a class="card" style="cursor: pointer; border-left: 5px solid #1B6FC4;" href="https://www.youtube.com/watch?v=unCS9syPJjg" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>1. Master Layers - Basics</h3>
          <p><strong>Skill:</strong> Understanding layer stacking, opacity, and smart objects.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #1B6FC4;" href="https://www.youtube.com/watch?v=PeD7uhc8R4U" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>2. Selections & Compositing</h3>
          <p><strong>Skill:</strong> Making selections and moving subjects to new backgrounds.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #1B6FC4;" href="https://www.youtube.com/watch?v=aNpO6G72O3w" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>3. Layer Masks Explained</h3>
          <p><strong>Skill:</strong> Using black/white painting to hide and reveal parts of a layer.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
    </div>

    <h2 class="section-title">Project Tutorials</h2>
    <p>Follow these specific tutorials to practice the skills needed for your coursework.</p>
    
    <div class="card-grid">
      <a class="card" style="cursor: pointer; border-left: 5px solid #1B6FC4;" href="https://www.youtube.com/watch?v=EHDSomSVwB8" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>1. The Transparent Logo</h3>
          <p><strong>Skill:</strong> Removing a white background (Magic Wand) and saving as PNG.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #1B6FC4;" href="https://www.youtube.com/watch?v=1BiA2AXRBYY" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>2. The Hybrid Beast</h3>
          <p><strong>Skill:</strong> Blending two animals together using Layer Masks.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #1B6FC4;" href="https://www.youtube.com/watch?v=qYmLgslxZKE" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>3. Neon Glow Text</h3>
          <p><strong>Skill:</strong> Using Layer Styles (Outer Glow, Drop Shadow) for branding.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #1B6FC4;" href="https://www.youtube.com/watch?v=nDt1xIQSKY4" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>4. Magazine Cover Text</h3>
          <p><strong>Skill:</strong> Layer ordering & masking text behind a subject.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #1B6FC4;" href="https://www.youtube.com/watch?v=VNSe8BglAHs" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>5. Advanced Masking</h3>
          <p><strong>Skill:</strong> Refining edges and creating seamless composites.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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

  // --- CANVA SKILLS PAGE ---,

  r094_skill_canva: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: linear-gradient(135deg, #00747A, #7D2AE8); color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Ca</div>
      <div>
        <h1 style="margin: 0;">Canva Skills</h1>
        <p style="margin: 0; color: var(--secondary-text);">Web-based design tool for layout, composition, and rapid prototyping.</p>
      </div>
    </div>

    <div class="homework-box" style="border-left: 5px solid #FF5722; background: var(--tint-orange);">
      <h3 style="color: var(--note-orange); margin-top: 0;">⚠️ EXAMINER WARNING: Templates</h3>
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
          <li><strong>A4 Print:</strong> 210 × 297 mm</li>
          <li><strong>Instagram:</strong> 1080 × 1080 px</li>
          <li><strong>Web Banner:</strong> 1350 × 650 px (check brief)</li>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #00747A;" href="https://www.youtube.com/watch?v=ehz2vZD-lt8" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>1. The Perfect Mood Board</h3>
          <p><strong>Skill:</strong> Using Grids to organise images and colour palettes for Task 1.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #00747A;" href="https://www.youtube.com/watch?v=wrthaLRdw4Y" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>2. Flyer Design from Scratch</h3>
          <p><strong>Skill:</strong> Designing with white space and hierarchy (No Templates!).</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #00747A;" href="https://www.youtube.com/watch?v=cwOWNWM3f4A" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>3. Creating Smart Mockups</h3>
          <p><strong>Skill:</strong> Placing your flat logo onto a 3D shirt or mug for visualization.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #00747A;" href="https://www.youtube.com/watch?v=0wFCjiW94u8" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>4. Seamless Carousels</h3>
          <p><strong>Skill:</strong> Creating multi-page social media posts that flow together.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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

  // --- ROCKETCAKE SKILLS PAGE ---,

  r094_skill_rocketcake: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #9024A6; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Rc</div>
      <div>
        <h1 style="margin: 0;">RocketCake Skills</h1>
        <p style="margin: 0; color: var(--secondary-text);">WYSIWYG website editor for creating responsive visualisations.</p>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #9024A6;" href="https://www.youtube.com/watch?v=HuW3ZzG7dKA" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>1. Your First Website</h3>
          <p><strong>Skill:</strong> Creating a basic layout with Header, Content, and Footer.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #9024A6;" href="https://www.youtube.com/watch?v=7yXlEuvE-b8" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>2. Responsive Images & Layouts</h3>
          <p><strong>Skill:</strong> Making images shrink automatically for mobile screens.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #9024A6;" href="https://www.youtube.com/watch?v=s3qLZAQ2YpM" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>3. Creating Buttons & Menus</h3>
          <p><strong>Skill:</strong> Adding navigation and hover effects to buttons.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #9024A6;" href="https://www.youtube.com/watch?v=r_s9gL3-dZ4" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>4. Image Gallery</h3>
          <p><strong>Skill:</strong> Displaying your Mood Boards and Sketches in a grid.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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

  // --- AUTODESK MAYA SKILLS PAGE ---,

  r094_skill_maya: `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div style="background: #05688F; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.8rem; font-weight: bold;">Ma</div>
      <div>
        <h1 style="margin: 0;">Autodesk Maya Skills</h1>
        <p style="margin: 0; color: var(--secondary-text);">Industry standard for 3D modelling, animation, and rendering.</p>
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
      <a class="card" style="cursor: pointer; border-left: 5px solid #05688F;" href="https://www.youtube.com/watch?v=LJLo6MafPVM" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>1. Maya Interface Basics</h3>
          <p><strong>Skill:</strong> Navigation, Viewports, and basic object manipulation.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #05688F;" href="https://www.youtube.com/watch?v=keSf9_KFd3s" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>2. Creating 3D Text</h3>
          <p><strong>Skill:</strong> Using the Type tool to make 3D logos with bevels.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #05688F;" href="https://www.youtube.com/watch?v=ygg5SGzrumM" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>3. Simple Product Modelling</h3>
          <p><strong>Skill:</strong> Modelling a simple bottle or can using Extrude.</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>

      <a class="card" style="cursor: pointer; border-left: 5px solid #05688F;" href="https://www.youtube.com/watch?v=8oT6Xt4HX5E" target="_blank" rel="noopener noreferrer">
        <div class="card-info">
          <h3>4. Applying Textures</h3>
          <p><strong>Skill:</strong> Placing an image file onto a 3D object (Texturing).</p>
          <p style="font-size: 0.9rem; color: var(--accent-link);">&#9658; Watch Tutorial</p>
        </div>
      </a>
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
});
