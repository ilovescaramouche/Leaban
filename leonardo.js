// leonardo.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded!");

    // Only add overlay + Ayato_Yuri side image if we're on index.html
    if (window.location.pathname.endsWith("index.html")) {
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.appendChild(overlay);

        const sideImage = document.createElement("div");
        sideImage.className = "side-image";
        sideImage.innerHTML = `<img src="images/Ayato_Yuri.png" alt="Ayato">`;
        document.body.appendChild(sideImage);
    }

    // Grab elements for ICT content functionality (ict.html)
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    const dialogueBox = document.getElementById("dialogue-box");
    const dialogueContent = document.getElementById("dialogue-content");
    const nextBtn = document.getElementById("next-btn");
    const dialogueName = document.getElementById("dialogue-name");

    // Hide the dialogue box until a character is selected
    if (dialogueBox) {
        dialogueBox.classList.add("hidden");
    }

    // Toggle navbar (if toggle exists on page)
    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.style.display = navLinks.style.display === "none" ? "flex" : "none";
        });
    }

const lessons = [
  // 1st Quarter – Lesson 1
  `
  <h2>1st Quarter – Lesson 1 (Introduction to CSS)</h2>
  <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are displayed on screen, paper, or in other media. CSS saves a lot of work because it can control the layout of multiple web pages all at once.</p>
  <h3>Why use CSS?</h3>
  <ul>
    <li>Defines styles for web pages including design, layout, and variations for different devices.</li>
    <li>Provides consistency across web pages.</li>
    <li>Saves time: one CSS file can control multiple pages.</li>
    <li>Improves accessibility and responsiveness.</li>
    <li>Enhances design with layout, colors, and animations.</li>
  </ul>
  <h3>Layers of a Webpage</h3>
  <ul>
    <li><b>Content Layer</b> – HTML defines text, images, and media.</li>
    <li><b>Presentation Layer</b> – CSS defines how people see the page.</li>
    <li><b>Behavior Layer</b> – JavaScript adds interactivity.</li>
  </ul>
  `,

  // 1st Quarter – Lesson 2
  `
  <h2>1st Quarter – Lesson 2 (Hyperlinks)</h2>
  <p>Hyperlinks are reference links that allow navigation to another page of the same document or to another document. They are enclosed between <code>&lt;a&gt;</code> tags with an <code>href</code> attribute specifying the target URL.</p>
  <h3>Examples</h3>
  <ul>
    <li><code>&lt;a href="http://www.google.com" target="_self"&gt;Google&lt;/a&gt;</code></li>
    <li><code>&lt;a href="http://www.msn.com" target="_blank"&gt;MSN&lt;/a&gt;</code></li>
    <li><code>&lt;a name="sample"&gt;&lt;/a&gt;</code> creates an internal anchor.</li>
  </ul>
  <h3>Target Attribute Values</h3>
  <ul>
    <li><code>_blank</code> – opens in a new window.</li>
    <li><code>_self</code> – opens in the same frame.</li>
    <li><code>_parent</code> – opens in the parent frameset.</li>
    <li><code>_top</code> – opens in the full body of the window.</li>
  </ul>
  `,

  // 1st Quarter – Lesson 3
  `
  <h2>1st Quarter – Lesson 3 (HTML Links and Forms)</h2>
  <p>HTML links use the anchor tag <code>&lt;a&gt;</code> to connect pages or resources. Links can be text, images, or other elements. Forms allow gathering feedback and input from users.</p>
  <h3>Form Elements</h3>
  <ul>
    <li>Textboxes</li>
    <li>Password boxes</li>
    <li>Radio buttons</li>
    <li>Check boxes</li>
    <li>Dropdown menus</li>
    <li>Text areas</li>
    <li>Submit and Reset buttons</li>
  </ul>
  <p>Forms use the <code>&lt;form&gt;</code> tag with attributes like <code>action</code> (where data is sent) and <code>method</code> (GET or POST).</p>
  `,

  // 1st Quarter – Lesson 4
  `
  <h2>1st Quarter – Lesson 4 (Input Types and Forms)</h2>
  <p>HTML5 introduced new input types that enhance forms and validation. The <code>&lt;input&gt;</code> tag is used to declare an input control.</p>
  <h3>Examples of Input Types</h3>
  <ul>
    <li><b>color</b> – selects a color.</li>
    <li><b>date</b> – defines a date control.</li>
    <li><b>email</b> – defines a field for an email address.</li>
    <li><b>month</b> – defines a month and year control.</li>
    <li><b>number</b> – numeric field with min/max.</li>
    <li><b>range</b> – slider for approximate values.</li>
    <li><b>search</b> – search field.</li>
    <li><b>time</b> – time selector.</li>
    <li><b>url</b> – URL input field.</li>
    <li><b>tel</b> – telephone number field.</li>
  </ul>
  `,

  // 1st Quarter – Lesson 5
  `
  <h2>1st Quarter – Lesson 5 (Input Element Attributes)</h2>
  <p>The <code>&lt;input&gt;</code> element can be customized with attributes to control its behavior.</p>
  <h3>Common Attributes</h3>
  <ul>
    <li><b>name</b> – assigns a name to the input field.</li>
    <li><b>type</b> – specifies the type (text, password, checkbox, radio, submit, reset).</li>
    <li><b>size</b> – sets the size of the input field.</li>
    <li><b>value</b> – sets the initial value or button label.</li>
    <li><b>checked</b> – sets default selection for radio/checkbox.</li>
  </ul>
  <h3>Other Input Types</h3>
  <ul>
    <li>file</li>
    <li>image</li>
    <li>hidden</li>
    <li>button</li>
  </ul>
  `,

  // 1st Quarter – Lesson 6
  `
  <h2>1st Quarter – Lesson 6 (Radio Buttons, Checkboxes, Dropdowns)</h2>
  <p>Forms can include different input controls for user choices.</p>
  <h3>Radio Buttons</h3>
  <p>Allow only one selection in a group. Example: <code>&lt;input type="radio" name="gender"&gt;</code>.</p>
  <h3>Checkboxes</h3>
  <p>Allow multiple selections. Example: <code>&lt;input type="checkbox" name="hobby"&gt;</code>.</p>
  <h3>Dropdown Menus</h3>
  <p>Created with <code>&lt;select&gt;&lt;option&gt;</code>. Attributes include <b>name</b>, <b>size</b>, and <b>selected</b> for default choice.</p>
  `,

  // 1st Quarter – Lesson 7
  `
  <h2>1st Quarter – Lesson 7 (Forms: Submit, Reset, File Upload)</h2>
  <p>Forms often include buttons and file inputs.</p>
  <h3>Submit Button</h3>
  <p>Sends form data to the server. Example: <code>&lt;input type="submit" value="Submit"&gt;</code>.</p>
  <h3>Reset Button</h3>
  <p>Clears all form inputs. Example: <code>&lt;input type="reset" value="Reset"&gt;</code>.</p>
  <h3>File Upload</h3>
  <p>Allows users to upload files. Example: <code>&lt;input type="file" name="image" accept="image/*"&gt;</code>.</p>
  <h3>Other Attributes</h3>
  <ul>
    <li><b>accept</b> – specifies file types.</li>
    <li><b>multiple</b> – allows multiple file uploads.</li>
  </ul>
    `,
  // 2nd Quarter – Lesson 1
  `
  <h2>2nd Quarter – Lesson 1 (CSS Basics)</h2>
  <p>CSS is the language we use to style a web page. It separates content from design, making websites easier to maintain and more attractive.</p>
  <h3>Structure of CSS</h3>
  <ul>
    <li><b>Selector</b> – the HTML element you want to style.</li>
    <li><b>Property</b> – the style attribute you want to modify.</li>
    <li><b>Value</b> – the setting applied to the property.</li>
    <li><b>Declaration</b> – a single instruction (property + value).</li>
    <li><b>Declaration Block</b> – one or more declarations inside braces.</li>
  </ul>
  <h3>Three Kinds of CSS</h3>
  <ul>
    <li><b>External</b> – stored in a .css file, linked with <code>&lt;link&gt;</code>.</li>
    <li><b>Embedded/Internal</b> – defined inside <code>&lt;style&gt;</code> in the HTML head.</li>
    <li><b>Inline</b> – defined directly in the element’s <code>style</code> attribute.</li>
  </ul>
  `,

  // 2nd Quarter – Lesson 2
  `
  <h2>2nd Quarter – Lesson 2 (Style Sheets)</h2>
  <p>Style sheets are sets of instructions to a web browser on how to display elements on a page. They separate content (HTML) from appearance (CSS).</p>
  <h3>Parts of a CSS Rule</h3>
  <ul>
    <li><b>Selector</b> – identifies the HTML element.</li>
    <li><b>Property</b> – the style attribute to change.</li>
    <li><b>Value</b> – the setting applied to the property.</li>
  </ul>
  <h3>Kinds of CSS</h3>
  <ul>
    <li><b>External</b> – linked via <code>&lt;link&gt;</code> tag.</li>
    <li><b>Embedded/Internal</b> – defined inside <code>&lt;style&gt;</code> in the head.</li>
    <li><b>Inline</b> – defined directly in the element’s <code>style</code> attribute.</li>
  </ul>
  `,

  // 2nd Quarter – Lesson 3
  `
  <h2>2nd Quarter – Lesson 3 (Inline, Internal, External CSS)</h2>
  <p>CSS can be applied in three ways: inline, internal, and external.</p>
  <h3>Inline Style Sheets</h3>
  <p>Defined directly in the element’s <code>style</code> attribute. Example: <code>&lt;p style="color:red;"&gt;</code>.</p>
  <h3>Internal/Embedded Style Sheets</h3>
  <p>Defined inside <code>&lt;style&gt;</code> in the head section. Applies to the whole document.</p>
  <h3>External Style Sheets</h3>
  <p>Stored in a separate .css file and linked with <code>&lt;link&gt;</code>. Allows consistent styling across multiple pages.</p>
  <h3>Display Property</h3>
  <ul>
    <li><b>block</b> – elements stack vertically.</li>
    <li><b>inline</b> – elements flow horizontally.</li>
    <li><b>none</b> – element is hidden.</li>
    <li><b>list-item</b> – displays as a list item.</li>
  </ul>
  <h3>Div and Span Tags</h3>
  <p><b>&lt;div&gt;</b> – block-level container for grouping content.<br><b>&lt;span&gt;</b> – inline container for styling parts of text.</p>
  `,

  // 2nd Quarter – Lesson 4
  `
  <h2>2nd Quarter – Lesson 4 (CSS Rules and Classes)</h2>
  <p>A CSS rule has two parts: a selector and a declaration block. Classes are user-defined selectors applied to specific HTML elements.</p>
  <h3>Classes</h3>
  <ul>
    <li>Defined with a dot (.) followed by the class name.</li>
    <li>Reusable across multiple elements.</li>
    <li>Can be combined with element selectors (e.g., <code>p.note</code>).</li>
  </ul>
  <h3>Examples</h3>
  <ul>
    <li><code>.highlight { background-color: yellow; }</code></li>
    <li><code>p.note { color: blue; }</code></li>
  </ul>
  `,

  // 2nd Quarter – Lesson 5
  `
  <h2>2nd Quarter – Lesson 5 (CSS Selectors)</h2>
  <p>Selectors are used to target HTML elements for styling. There are six main types:</p>
  <ul>
    <li><b>Element Selector</b> – targets all instances of a tag (e.g., <code>p {}</code>).</li>
    <li><b>ID Selector</b> – targets a unique element using <code>#id</code>.</li>
    <li><b>Class Selector</b> – targets elements with a specific class using <code>.classname</code>.</li>
    <li><b>Universal Selector</b> – targets all elements using <code>*</code>.</li>
    <li><b>Group Selector</b> – applies styles to multiple selectors separated by commas.</li>
    <li><b>Attribute Selector</b> – targets elements based on attributes (e.g., <code>input[type="text"]</code>).</li>
  </ul>
  `,

  // 2nd Quarter – Lesson 6
  `
  <h2>2nd Quarter – Lesson 6 (CSS Dimensions and Pseudo-Classes)</h2>
  <p>CSS can control dimensions and visibility of elements, as well as link behaviors using pseudo-classes.</p>
  <h3>Dimension Properties</h3>
  <ul>
    <li><b>width</b> – sets element width.</li>
    <li><b>height</b> – sets element height.</li>
    <li><b>line-height</b> – sets line spacing.</li>
    <li><b>max-height</b>, <b>min-height</b>, <b>max-width</b>, <b>min-width</b> – set limits.</li>
    <li><b>visibility</b> – controls whether an element is visible, hidden, or collapsed.</li>
  </ul>
  <h3>Pseudo-Classes for Links</h3>
  <ul>
    <li><code>:link</code> – unvisited links.</li>
    <li><code>:visited</code> – visited links.</li>
    <li><code>:hover</code> – when mouse hovers.</li>
    <li><code>:active</code> – when clicked.</li>
    <li><code>:focus</code> – when focused.</li>
  </ul>
  <p>The order of pseudo-classes is important: LVHA (Link, Visited, Hover, Active).</p>
  `,

  // 3rd Quarter Lesson 1
  `
  <h2>3rd Quarter – Lesson 1 (Typography & Text Properties)</h2>
  <p>Typography refers to the styling and arrangement of text on a web page using CSS. It ensures legibility, readability, and visual appeal.</p>
  <h3>Font Properties</h3>
  <ul>
    <li><b>font-family</b>: Specifies the typeface (e.g., Arial, Times New Roman).</li>
    <li><b>font-size</b>: Sets the size of the text.</li>
    <li><b>font-weight</b>: Defines boldness/thickness.</li>
    <li><b>font-style</b>: Normal, italic, or oblique.</li>
    <li><b>font-variant</b>: Normal or small-caps.</li>
  </ul>
  <h3>Text Properties</h3>
  <ul>
    <li>line-height: Vertical spacing between lines.</li>
    <li>letter-spacing: Horizontal spacing between characters.</li>
    <li>text-align: Aligns text (left, right, center, justify).</li>
    <li>text-indent: Indents the first line of a block.</li>
    <li>color: Sets text color.</li>
    <li>white-space: Controls how spaces are handled.</li>
    <li>word-spacing: Spacing between words.</li>
    <li>word-break: Defines how words break at line ends.</li>
    <li>text-decoration: Underline, overline, line-through.</li>
    <li>text-transform: Capitalize, uppercase, lowercase.</li>
    <li>text-shadow: Adds shadow to text.</li>
  </ul>
  `,

  // 3rd Quarter Lesson 2
  `
  <h2>3rd Quarter – Lesson 2 (Formatting Text with CSS)</h2>
  <p>Formatting Text with CSS includes:</p>
  <ul>
    <li>Bold text</li>
    <li>Italic text</li>
    <li>Indenting text</li>
    <li>Changing font family and size</li>
    <li>Changing text alignment</li>
    <li>Changing line spacing</li>
    <li>Changing text color</li>
    <li>Adding background color to text</li>
  </ul>
  <h3>Examples</h3>
  <ul>
    <li>Indenting Text: text-indent property</li>
    <li>Changing Text Case: text-transform property</li>
    <li>Line Spacing: line-height property</li>
    <li>Background Color: background-color property</li>
  </ul>
  `,

  // 3rd Quarter Lesson 3
  `
  <h2>3rd Quarter – Lesson 3 (Formatting Layout with CSS)</h2>
  <h3>Box Model</h3>
  <p>Each element exists in its own box: margins, borders, padding, content.</p>
  <ul>
    <li>Control dimensions with height and width.</li>
    <li>Use block-level tags (&lt;p&gt;, &lt;h1&gt;, &lt;div&gt;).</li>
  </ul>
  <h3>Element Positioning</h3>
  <ul>
    <li>static</li>
    <li>relative</li>
    <li>absolute</li>
    <li>fixed</li>
  </ul>
  <h3>Offset Properties</h3>
  <ul>
    <li>top, right, bottom, left</li>
  </ul>
  <h3>Float Property</h3>
  <ul>
    <li>float: left, right, none</li>
    <li>Used for wrapping text around images</li>
  </ul>
  <h3>Background Properties</h3>
  <ul>
    <li>background-color</li>
    <li>background-image</li>
    <li>background-repeat</li>
    <li>background-position</li>
    <li>background-attachment</li>
  </ul>
  <h3>Margins</h3>
  <ul>
    <li>margin-top, margin-bottom, margin-left, margin-right</li>
    <li>Shorthand: margin: top right bottom left;</li>
  </ul>
  `,

  // 3rd Quarter Lesson 4
  `
  <h2>3rd Quarter – Lesson 4 (Formatting Borders & Tables)</h2>
  <h3>Borders</h3>
  <ul>
    <li>border-width: thin, medium, thick, px, em</li>
    <li>border-color: color names, hex values, RGB</li>
    <li>border-style: hidden, dotted, dashed, solid, double, groove, ridge, inset, outset</li>
  </ul>
  <h3>Padding</h3>
  <ul>
    <li>padding-top, padding-bottom, padding-left, padding-right</li>
    <li>Shorthand: padding: top right bottom left</li>
  </ul>
  <h3>Tables</h3>
  <ul>
    <li>Table Background: background-color property</li>
    <li>Table Style: highlight rows, banners, text alignment</li>
    <li>Table Layout: use &lt;table&gt; to structure webpage content</li>
  </ul>
  `,

  // 4th Quarter Lesson 1
  `
  <h2>4th Quarter – Lesson 1 (JavaScript Introduction)</h2>
  <h3>Purpose</h3>
  <p>JavaScript creates dynamic, interactive user experiences.</p>
  <h3>Static vs Dynamic Websites</h3>
  <ul>
    <li>Static: delivered exactly as stored (e.g., portfolio)</li>
    <li>Dynamic: displays different content based on user actions (e.g., social media)</li>
  </ul>
  <h3>JavaScript Overview</h3>
  <ul>
    <li>Most popular scripting language</li>
    <li>Works in all major browsers</li>
    <li>Developed by Brendan Eich</li>
    <li>Enhances webpages, builds games</li>
    <li>Licensed by Oracle, used by Mozilla</li>
    <li>Client-side, high-level, interpreted, object-oriented</li>
    <li>Case-sensitive, semi-colons optional</li>
  </ul>
  <h3>What JavaScript Can Do</h3>
  <ul>
    <li>React to events</li>
    <li>Validate forms</li>
    <li>Create cookies</li>
    <li>Enhance webpages</li>
  </ul>
  `,

  // 4th Quarter Lesson 2
  `
  <h2>4th Quarter – Lesson 2 (Formatting Text & Borders with CSS)</h2>
  <h3>Formatting Text</h3>
  <ul>
    <li>Indenting text: text-indent</li>
    <li>Changing text case: text-transform</li>
    <li>Line spacing: line-height</li>
    <li>Background color: background-color</li>
  </ul>
  <h3>Borders</h3>
  <ul>
    <li>border-style: dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden</li>
    <li>border-width: thin, medium, thick, px, pt, cm, em</li>
    <li>border-color: names, hex, RGB, HSL, transparent</li>
    <li>Individual sides: border-top-width, border-right-width, border-bottom-width, border-left-width</li>
  </ul>
  <h3>Lists</h3>
  <ul>
    <li>list-style-type: disc, circle, square, decimal, roman, alpha</li>
    <li>list-style-image: custom bullet images</li>
    <li>list-style-position: marker position</li>
    <li>list-style: shorthand</li>
  </ul>
  <h3>Pseudo-elements</h3>
  <ul>
    <li>:link, :visited, :active, :hover, :focus</li>
    <li>:first-letter, :first-line</li>
    <li>:before, :after</li>
  </ul>
  `,

  // 4th Quarter Lesson 3
  `
  <h2>4th Quarter – Lesson 3 (Formatting Layout with CSS)</h2>
  <h3>Box Model</h3>
  <p>Each element exists in its own box: margins, borders, padding, content.</p>
  <ul>
    <li>Control dimensions with height and width.</li>
    <li>Use block-level tags (&lt;p&gt;, &lt;h1&gt;, &lt;div&gt;).</li>
  </ul>
  <h3>Element Positioning</h3>
  <ul>
    <li>static</li>
    <li>relative</li>
    <li>absolute</li>
    <li>fixed</li>
  </ul>
  <h3>Offset Properties</h3>
  <ul>
    <li>top, right, bottom, left</li>
  </ul>
  <h3>Float Property</h3>
  <ul>
    <li>float: left, right, none</li>
    <li>Used for wrapping text around images</li>
  </ul>
  <h3>Background Properties</h3>
  <ul>
    <li>background-color</li>
    <li>background-image</li>
    <li>background-repeat</li>
    <li>background-position</li>
    <li>background-attachment</li>
  </ul>
  <h3>Margins</h3>
  <ul>
    <li>margin-top, margin-bottom, margin-left, margin-right</li>
    <li>Shorthand: margin: top right bottom left;</li>
    <li>Negative margins can be used for special effects</li>
  </ul>
  `,

  // 4th Quarter Lesson 4
  `
  <h2>4th Quarter – Lesson 4 (Formatting Borders & Tables)</h2>
  <h3>Borders</h3>
  <ul>
    <li>border-width: thin, medium, thick, px, em</li>
    <li>border-color: names, hex, RGB</li>
    <li>border-style: hidden, dotted, dashed, solid, double, groove, ridge, inset, outset</li>
  </ul>
  <h3>Padding</h3>
  <ul>
    <li>padding-top, padding-bottom, padding-left, padding-right</li>
    <li>Shorthand: padding: top right bottom left</li>
    <li>Default padding value is 0</li>
  </ul>
  <h3>Tables</h3>
  <ul>
    <li>Table Background: background-color property</li>
    <li>Table Style: highlight rows, banners, text alignment</li>
    <li>Table Layout: use &lt;table&gt; to structure webpage content</li>
    <li>Example: headers, links, content cells, quotes inside table rows</li>
  </ul>
  `
];

let lessonIndex = 0;

function showLesson(index) {
  const contentBox = document.getElementById("lessonContent");
  contentBox.innerHTML = lessons[index];  // <-- innerHTML ensures tags render properly
}





    // Events (one image + title per event)
    const events = [
        { title: "Intrams", img: "images/intrams.png" },
        { title: "Science Month", img: "images/science_month.png" },
        { title: "AP Month", img: "images/ap_month.png" },

        { title: "Booklandia", img: "images/booklandia.png" },
        { title: "Values Pop", img: "images/values_pop.png" },
        { title: "Math Month", img: "images/math_month.png" },

        { title: "Botb", img: "images/botb.png" },
        { title: "Noli Me Tangere", img: "images/noli_me_tangere.png" },
        { title: "Ped Xing", img: "images/ped_xing.png" },

        {
            title: "Credits",
            img: "images/credits.png",
            description: "Images by Allison Pineda, Jade Imperial, and Ash Uy."
        }
    ];

    let eventIndex = 0;

    // Handle character selection (if dialogue elements exist)
    // Handle character selection
    if (dialogueBox && dialogueContent && nextBtn) {
        document.querySelectorAll("input[name='character']").forEach(radio => {
            radio.addEventListener("change", () => {
                dialogueBox.classList.remove("hidden");

                if (radio.value === "lessons") {
                    dialogueName.textContent = "Lessons";
                    lessonIndex = 0;
                    dialogueContent.innerHTML = lessons[lessonIndex];
                    nextBtn.onclick = () => {
                        lessonIndex = (lessonIndex + 1) % lessons.length;
                        dialogueContent.innerHTML = lessons[lessonIndex];
                    };
                } else if (radio.value === "events") {
                    dialogueName.textContent = "Events";
                    eventIndex = 0;
                    const renderEvent = index => {
                        const ev = events[index];
                        dialogueContent.innerHTML = `
                            <div class="event-card">
                                <img src="${ev.img}" alt="${ev.title}" class="event-img">
                                <h2>${ev.title}</h2>
                                ${ev.description ? `<p>${ev.description}</p>` : ""}
                            </div>`;
                    };

                    renderEvent(eventIndex);
                    nextBtn.onclick = () => {
                        eventIndex = (eventIndex + 1) % events.length;
                        renderEvent(eventIndex);
                    };
                } else if (radio.value === "gallery") {
                    dialogueName.textContent = "Gallery";
                    dialogueContent.innerHTML = `
                    <div class="gallery-wrapper">
                        <div class="gallery-side">
                            <img src="images/char-left.png" alt="Left Character">
                        </div>
                        <div class="gallery">
                            <div class="gallery-row">
                                <img src="images/gallery1.png" alt="Gallery 1">
                                <img src="images/gallery2.png" alt="Gallery 2">
                                <img src="images/gallery3.png" alt="Gallery 3">
                            </div>
                            <div class="gallery-row">
                                <img src="images/gallery4.png" alt="Gallery 4">
                                <img src="images/gallery5.png" alt="Gallery 5">
                                <img src="images/gallery6.png" alt="Gallery 6">
                            </div>
                        </div>
                        <div class="gallery-side">
                            <img src="images/char-right.png" alt="Right Character">
                        </div>
                    </div>`;
                    nextBtn.onclick = null; // no next for gallery
                } else if (radio.value === "video") {
                    dialogueName.textContent = "Video";
                    dialogueContent.innerHTML = `
                    <div class="video-preview">
                        <div class="facebook-video">
                            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F18BEN3S31Z%2F&show_text=0&width=560"
                                allowfullscreen
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div>
                    </div>
                    <div class="video-reflection">
                        <h3>Reflection</h3>
                        <p>As Padre Damaso and the main scriptwriter of Noli Me Tangere, I contributed to the play by doing my 
                        part and oftentimes assisting with the props members and keeping them company.</p>
                        <p> I was very satisfied with how the play turned out and I am grateful that I was able to play such a big part in it. </p>
                    </div>`;
                    nextBtn.onclick = null; // no next for video
                }
            });
        });
    }

})
// Functions for AP.html lesson buttons
function showapLesson(num) {
    const aplessonInfo = document.getElementById("lesson-info");
    const aplessonReflection = document.getElementById("lesson-reflection");

    if (!aplessonInfo || !aplessonReflection) return;

    const apLessons = [
        {
            info: `
                <h2>Lesson 1: Mga Konsepto ng Pambansang Kaunlaran</h2>
                <p>Ang pambansang kaunlaran ay tumutukoy sa kabuuang pagtaas ng antas ng pamumuhay ng mamamayan. 
                Kasama rito ang mga konsepto ng <b>pagbabago</b>, <b>pag-unlad</b>, <b>pagsulong</b>, at <b>ebolusyon</b>.</p>
                <ul>
                    <li><b>Pagbabago</b> – proseso ng pag-iiba sa lipunan at ekonomiya.</li>
                    <li><b>Pag-unlad</b> – progresibong pagtaas ng antas ng pamumuhay.</li>
                    <li><b>Pagsulong</b> – patuloy na pag-usad tungo sa layunin.</li>
                    <li><b>Ebolusyon</b> – pagbabago sa loob ng mahabang panahon.</li>
                </ul>
                <p>Ang pambansang kaunlaran ay nakikita sa pagtaas ng kalidad ng buhay ng mamamayan, mula sa pinakamababang uri hanggang sa pinakamataas.</p>
            `,
            reflection: "Sa araling ito, natutunan ko na ang kaunlaran ay hindi lamang tungkol sa ekonomiya kundi pati na rin sa kalidad ng buhay ng bawat mamamayan. Ang tunay na pag-unlad ay nakikita kapag ang lahat ay nakikinabang, hindi lamang ang iilang sektor."
        },
        {
            info: `
                <h2>Lesson 2: Dalawang Konsepto ng Pag-unlad</h2>
                <p>Ayon kina Todaro at Smith (2012), may dalawang pananaw ng pag-unlad:</p>
                <ul>
                    <li><b>Tradisyunal na Konsepto</b> – nakatuon sa patuloy na pagtaas ng income per capita.</li>
                    <li><b>Makabagong Konsepto</b> – nakatuon sa malawakang pagbabago sa buong sistemang panlipunan.</li>
                </ul>
                <p>Ang tradisyunal ay nakikita sa ekonomiya, samantalang ang makabago ay nakikita sa kabuuang pagbabago ng lipunan.</p>
            `,
            reflection: "Naisip ko na mahalaga ang parehong pananaw. Ang ekonomiya ay pundasyon, ngunit kung walang pagbabago sa lipunan, hindi magiging makabuluhan ang pagtaas ng kita. Ang pag-unlad ay dapat makita sa lahat ng aspeto ng pamumuhay."
        },
        {
            info: `
                <h2>Lesson 3: Mga Salik at Palatandaan ng Pag-unlad</h2>
                <p>Ang mga salik na nakakatulong sa pagsulong ng ekonomiya ay:</p>
                <ul>
                    <li>Likas na yaman</li>
                    <li>Yamang-tao</li>
                    <li>Kapital</li>
                    <li>Teknolohiya</li>
                </ul>
                <p>Ang mga palatandaan ng pag-unlad ay:</p>
                <ul>
                    <li>Makatarungan at dinamikong kaayusan ng lipunan</li>
                    <li>Kasaganaan</li>
                    <li>Kalayaan mula sa kahirapan</li>
                    <li>Sapat na lingkurang panlipunan</li>
                    <li>Katarungang panlipunan</li>
                </ul>
            `,
            reflection: "Napagtanto ko na ang kaunlaran ay hindi lamang nakikita sa mga gusali o imprastruktura kundi sa kung paano natutugunan ang pangangailangan ng tao. Ang pagkakaroon ng katarungan at pantay na oportunidad ay tunay na palatandaan ng pag-unlad."
        },
        {
            info: `
                <h2>Lesson 4: Antas ng Kaunlaran ng Bansa</h2>
                <p>May tatlong antas ng kaunlaran:</p>
                <ul>
                    <li><b>Maunlad na Bansa (Developed Economies)</b> – may mataas na GDP at HDI.</li>
                    <li><b>Umuunlad na Bansa (Developing Economies)</b> – may industriyang pinauunlad ngunit mababa pa ang antas ng industriyalisasyon.</li>
                    <li><b>Papaunlad na Bansa (Underdeveloped Economies)</b> – kulang sa industriyalisasyon at mababa ang antas ng agrikultura at pamumuhay.</li>
                </ul>
            `,
            reflection: "Sa araling ito, naunawaan ko kung nasaan ang Pilipinas sa antas ng kaunlaran. Mahalaga na kilalanin natin ang ating kalagayan upang makagawa ng tamang hakbang tungo sa pag-unlad."
        },
        {
            info: `
                <h2>Lesson 5: Mga Tungkulin at Gampanin ng Mamamayan</h2>
                <p>Mga tungkulin ng mamamayan:</p>
                <ul>
                    <li>Pagsuporta sa pamahalaan</li>
                    <li>Pagsunod sa batas</li>
                    <li>Pangangalaga sa kapaligiran</li>
                    <li>Pagtulong sa pagpuksa ng korapsyon</li>
                    <li>Pagiging produktibo</li>
                    <li>Pagtangkilik sa produktong Pilipino</li>
                    <li>Pagtitipid ng enerhiya</li>
                </ul>
                <p>Mga gampanin ng mamamayan:</p>
                <ul>
                    <li>Pagbabayad ng buwis</li>
                    <li>Tamang pagboto</li>
                    <li>Pagnenegosyo</li>
                    <li>Pakikilahok sa pamamahala</li>
                    <li>Pagtangkilik sa sariling produkto</li>
                </ul>
            `,
            reflection: "Naisip ko na ang kaunlaran ay hindi lamang nakasalalay sa pamahalaan kundi sa bawat mamamayan. Ang simpleng pagtangkilik sa produktong Pilipino ay malaking ambag sa ekonomiya."
        },
    {
        info: `
            <h2>Lesson 6: Agrikultura</h2>
            <p>Ang agrikultura ay agham at sining ng pagpaparami ng hayop at halaman. 
            Kabilang dito ang pagsasaka, pangingisda, paghahayupan, at paggugubat.</p>
            <p>Mahalaga ang agrikultura dahil:</p>
            <ul>
                <li>Pinagmumulan ng pagkain ng bansa</li>
                <li>Pinagmumulan ng hilaw na materyales para sa industriya</li>
                <li>Nagbibigay ng trabaho sa malaking bahagi ng populasyon</li>
                <li>Pinagmumulan ng dolyar mula sa eksport ng produkto</li>
            </ul>
            <p>Mga suliranin sa agrikultura:</p>
            <ul>
                <li>Pagliit ng lupang sakahan dahil sa urbanisasyon</li>
                <li>Kakulangan ng pasilidad at makabagong teknolohiya</li>
                <li>Climate change at matinding kalamidad</li>
                <li>Polusyon at peste</li>
                <li>Pagkaubos ng kagubatan</li>
            </ul>
        `,
        reflection: "Naisip ko na ang agrikultura ang pundasyon ng ekonomiya. Kung hindi ito mapapangalagaan, maaapektuhan ang lahat ng sektor. Mahalaga ang suporta ng pamahalaan at mamamayan sa mga magsasaka at mangingisda."
    },
    {
        info: `
            <h2>Lesson 7: Industriya</h2>
            <p>Ang industriya ay tumutukoy sa sektor ng ekonomiya na nakatuon sa pagproseso ng hilaw na materyales at paggawa ng mga produkto. 
            Kabilang dito ang:</p>
            <ul>
                <li>Pagmimina – pagkuha ng mineral at yamang likas mula sa lupa.</li>
                <li>Pagmamanupaktura – paggawa ng mga produkto mula sa hilaw na materyales.</li>
                <li>Konstruksyon – pagtatayo ng mga gusali, daan, tulay, at iba pang imprastruktura.</li>
                <li>Utilities – kuryente, tubig, at iba pang serbisyong pangkomunidad.</li>
            </ul>
            <p>Mahalaga ang industriya dahil:</p>
            <ul>
                <li>Nagbibigay ng trabaho sa mamamayan.</li>
                <li>Nagpapalaganap ng teknolohiya at modernisasyon.</li>
                <li>Nagpapasok ng dolyar mula sa eksport ng produkto.</li>
            </ul>
            <p>Mga suliranin:</p>
            <ul>
                <li>Kakulangan sa pondo at kapital.</li>
                <li>Matinding kompetisyon mula sa dayuhang produkto.</li>
                <li>Paghina ng lokal na industriya.</li>
            </ul>
        `,
        reflection: "Naisip ko na ang industriya ang nagbibigay ng modernisasyon sa bansa. Ngunit kung hindi susuportahan ang lokal na industriya, mas lalo tayong aasa sa ibang bansa."
    },

    {
        info: `
            <h2>Lesson 8: Sektor ng Paglilingkod</h2>
            <p>Ang sektor ng paglilingkod ay umaalalay sa produksyon, distribusyon, kalakalan, at pagkonsumo ng produkto. 
            Kabilang dito ang:</p>
            <ul>
                <li>Transportasyon</li>
                <li>Komunikasyon</li>
                <li>Pananalapi</li>
                <li>Real Estate</li>
                <li>Paglilingkod ng pribado at pampubliko</li>
            </ul>
            <p>Mga ahensya na nakapaloob sa sektor:</p>
            <ul>
                <li>DOLE – Department of Labor and Employment</li>
                <li>OWWA – Overseas Workers Welfare Administration</li>
                <li>POEA – Philippine Overseas Employment Administration</li>
                <li>TESDA – Technical Education and Skills Development Authority</li>
                <li>PRC – Professional Regulation Commission</li>
                <li>CHED – Commission on Higher Education</li>
            </ul>
            <p>Mga batas na nagbibigay proteksyon sa manggagawa:</p>
            <ul>
                <li>Holiday Pay</li>
                <li>Overtime Pay</li>
                <li>Night Shift Differential</li>
                <li>13th Month Pay</li>
            </ul>
        `,
        reflection: "Naisip ko na ang sektor ng paglilingkod ang nagbibigay ng balanse sa ekonomiya. Ang mga serbisyong ito ang direktang nakakaapekto sa buhay ng tao."
    },

    {
        info: `
            <h2>Lesson 9: Impormal na Sektor</h2>
            <p>Ang impormal na sektor ay bahagi ng ekonomiya na walang pormal na dokumento o rehistro. 
            Kabilang dito ang mga:</p>
            <ul>
                <li>Nagtitinda sa kalsada</li>
                <li>Pedicab driver</li>
                <li>Karpintero</li>
                <li>Mga maliliit na negosyong walang rehistro</li>
            </ul>
            <p>Mahalaga ito dahil nagbibigay ng hanapbuhay sa mga walang regular na trabaho.</p>
            <p>Mga batas at programang sumusuporta:</p>
            <ul>
                <li>RA 8425 – Social Reform and Poverty Alleviation Act</li>
                <li>RA 9710 – Magna Carta of Women</li>
                <li>RA 7796 – TESDA Act</li>
                <li>RA 8282 – Social Security Act</li>
                <li>RA 7875 – National Health Insurance Act</li>
                <li>4Ps – Pantawid Pamilyang Pilipino Program</li>
            </ul>
        `,
        reflection: "Naisip ko na ang impormal na sektor ay mahalaga dahil ito ang sumasalo sa mga mamamayang walang oportunidad sa pormal na trabaho. Dapat itong kilalanin at suportahan."
    },

    {
        info: `
            <h2>Lesson 10: Kalakalang Panlabas</h2>
            <p>Ang kalakalang panlabas ay tumutukoy sa palitan ng produkto at serbisyo sa pagitan ng mga bansa.</p>
            <h3>Uri ng Kalakalan</h3>
            <ul>
                <li><b>Bilateral Trade</b> – palitan ng produkto sa pagitan ng dalawang bansa.</li>
                <li><b>Bloc Trade</b> – palitan ng produkto sa pagitan ng maraming bansa na bumubuo ng isang samahan.</li>
            </ul>
            <h3>Mga Dahilan ng Kalakalang Panlabas</h3>
            <ul>
                <li>Pagkakaiba sa teknolohiya</li>
                <li>Pagkakaiba sa likas na yaman</li>
                <li>Pagkakaiba sa panlasa ng mamimili</li>
                <li>Pagkakaiba sa kakayahan ng produksyon</li>
            </ul>
            <h3>Mga Patakaran</h3>
            <ul>
                <li>Taripa – buwis sa inaangkat na produkto</li>
                <li>Kota – limitasyon sa dami ng inaangkat</li>
                <li>Subsidy – tulong ng pamahalaan sa lokal na industriya</li>
            </ul>
            <h3>Mga Organisasyon</h3>
            <ul>
                <li>World Trade Organization (WTO)</li>
                <li>Asia-Pacific Economic Cooperation (APEC)</li>
                <li>Association of Southeast Asian Nations (ASEAN)</li>
            </ul>
            <h3>Kabutihan ng Kalakalang Panlabas</h3>
            <ul>
                <li>Mas maraming produkto ang mapipili ng mamimili</li>
                <li>Mas mataas ang kalidad ng produkto</li>
                <li>Lumalawak ang pamilihan ng lokal na produkto</li>
            </ul>
            <h3>Di-Kabutihan ng Kalakalang Panlabas</h3>
            <ul>
                <li>Pagiging palaasa sa imported na produkto</li>
                <li>Pagkawala ng sariling pagkakakilanlan ng bansa</li>
            </ul>
        `,
        reflection: "Naisip ko na ang kalakalang panlabas ay mahalaga sa ekonomiya, ngunit dapat balansehin upang hindi mawala ang sariling identidad ng bansa."
    }
];

    const index = num - 1;
    if (index >= 0 && index < apLessons.length) {
        aplessonInfo.innerHTML = apLessons[index].info;        // use innerHTML so formatting renders
        aplessonReflection.innerHTML = `<p>${apLessons[index].reflection}</p>`;
    } else {
        aplessonInfo.textContent = "Lesson not found.";
        aplessonReflection.textContent = "No reflection available.";
    }
};

