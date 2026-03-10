// leonardo.js - NEW VERSION WITH UPDATED LESSONS

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
  <h2>1st Quarter – Lesson 1 (Hyperlinks)</h2>
  <h3>Prayer</h3>
  <p>(Insert prayer text here)</p>
  <h3>Hyperlinks</h3>
  <p>Hyperlinks are reference links that allow navigation to another page of the same document or to another document.</p>
  <h3>Types of Hyperlinks</h3>
  <ul>
    <li><b>Absolute</b> – full URL to a webpage</li>
    <li><b>Relative</b> – links to pages within the same website</li>
    <li><b>Named Anchor</b> – links to specific sections within a page</li>
  </ul>
  <h3>Attributes of <a></h3>
  <ul>
    <li><b>href</b> – specifies the URL</li>
    <li><b>target</b> – specifies where to open the link</li>
    <li><b>name</b> – creates a named anchor</li>
  </ul>
  <h3>Target Attribute Values</h3>
  <ul>
    <li><b>_blank</b> – opens in a new window</li>
    <li><b>_self</b> – opens in the same frame</li>
    <li><b>_parent</b> – opens in the parent frameset</li>
    <li><b>_top</b> – opens in the full body of the window</li>
  </ul>
  <h3>Accessing Links</h3>
  <ul>
    <li>Via pointer (mouse click)</li>
    <li>Via tab key</li>
    <li>Via access key</li>
  </ul>
  <h3>States of Hyperlinks</h3>
  <ul>
    <li><b>hover</b> – when mouse is over the link</li>
    <li><b>active</b> – when link is being clicked</li>
    <li><b>visited</b> – when link has been visited</li>
  </ul>
  `,

  // 1st Quarter – Lesson 2
  `
  <h2>1st Quarter – Lesson 2 (Hyperlinks & Email)</h2>
  <h3>Hyperlinks: Target Attribute Examples</h3>
  <p>Examples of using target attributes to control link behavior.</p>
  <h3>Email Links</h3>
  <p>Use <code>mailto:</code> to create email links:</p>
  <ul>
    <li><code><a href="mailto:email@example.com">Send Email</a></code></li>
  </ul>
  <h3>Linking to External Pages</h3>
  <p>Creating links to other websites using absolute URLs.</p>
  <h3>Target Attribute Examples</h3>
  <ul>
    <li><code>_self</code> – opens in the same frame</li>
    <li><code>_blank</code> – opens in a new window</li>
    <li><code>_parent</code> – opens in parent frame</li>
    <li><code>_top</code> – opens in full window</li>
  </ul>
  `,

  // 1st Quarter – Lesson 3
  `
  <h2>1st Quarter – Lesson 3 (HTML Links & Forms)</h2>
  <h3>HTML Links</h3>
  <ul>
    <li><b>External links</b> – links to other websites</li>
    <li><b>Internal links</b> – links to pages within the same website</li>
    <li><b>Dead links</b> – links that lead to non-existent pages</li>
  </ul>
  <h3>Anchor Tag <a></h3>
  <p>The anchor tag is used to create hyperlinks.</p>
  <h3>Using GIFs/Graphics as Links</h3>
  <p>Wrap an image tag with anchor tags to create image links.</p>
  <h3>Forms</h3>
  <p>Forms allow gathering feedback and input from users.</p>
  <h3>Form Attributes</h3>
  <ul>
    <li><b>action</b> – specifies where to send form data</li>
    <li><b>method</b> – specifies how to send data (GET/POST)</li>
  </ul>
  <h3>Input Elements</h3>
  <ul>
    <li>Textboxes</li>
    <li>Password fields</li>
    <li>Radio buttons</li>
    <li>Checkboxes</li>
    <li>Dropdown menus</li>
    <li>Text areas</li>
    <li>Submit/Reset buttons</li>
  </ul>
  `,

  // 1st Quarter – Lesson 4
  `
  <h2>1st Quarter – Lesson 4 (HTML5 Input Types)</h2>
  <h3>Input Type Tags in HTML5</h3>
  <ul>
    <li><b>color</b> – color picker</li>
    <li><b>date</b> – date picker</li>
    <li><b>email</b> – email input</li>
    <li><b>month</b> – month picker</li>
    <li><b>datetime</b> – date and time picker</li>
    <li><b>number</b> – numeric input</li>
    <li><b>range</b> – slider control</li>
    <li><b>search</b> – search field</li>
    <li><b>time</b> – time picker</li>
    <li><b>url</b> – URL input</li>
    <li><b>tel</b> – telephone input</li>
  </ul>
  <h3>Form Attributes</h3>
  <ul>
    <li><b>autocomplete</b> – enables autocomplete</li>
    <li><b>novalidate</b> – disables validation</li>
  </ul>
  <h3>Input Attributes</h3>
  <ul>
    <li><b>autofocus</b> – focuses on input</li>
    <li><b>formaction</b> – form submission URL</li>
    <li><b>placeholder</b> – placeholder text</li>
    <li><b>required</b> – makes field required</li>
    <li><b>pattern</b> – regex pattern</li>
    <li><b>multiple</b> – allows multiple values</li>
  </ul>
  `,

  // 1st Quarter – Lesson 5
  `
  <h2>1st Quarter – Lesson 5 (Input Element Types)</h2>
  <h3>Input Element <input> Types</h3>
  <ul>
    <li><b>text</b> – single-line text</li>
    <li><b>password</b> – password field</li>
    <li><b>checkbox</b> – checkboxes</li>
    <li><b>radio</b> – radio buttons</li>
    <li><b>submit</b> – submit button</li>
    <li><b>reset</b> – reset button</li>
    <li><b>color, date, datetime, email, month, number, range, search, tel, time, url, file, image</b></li>
  </ul>
  <h3>Input Attributes</h3>
  <ul>
    <li><b>name</b> – field name</li>
    <li><b>type</b> – input type</li>
    <li><b>size</b> – field size</li>
    <li><b>value</b> – default value</li>
    <li><b>checked</b> – default selection</li>
  </ul>
  <h3>Creating Textboxes and Text Areas</h3>
  <p>Textboxes use <input type="text"> while text areas use <textarea> for multi-line input.</p>
  `,

  // 1st Quarter – Lesson 6
  `
  <h2>1st Quarter – Lesson 6 (Radio Buttons, Checkboxes, Dropdowns)</h2>
  <h3>Radio Buttons</h3>
  <p>Allow only one selection in a group. All radio buttons in a group share the same name attribute.</p>
  <h3>Checkboxes</h3>
  <p>Allow multiple selections. Each checkbox can be independently checked.</p>
  <h3>Dropdown Menus</h3>
  <p>Created using <select> and <option> tags.</p>
  <h3>Attributes</h3>
  <ul>
    <li><b>name</b> – field name</li>
    <li><b>size</b> – number of visible options</li>
    <li><b>value</b> – option value</li>
    <li><b>selected</b> – default selected option</li>
  </ul>
  `,

  // 1st Quarter – Lesson 7
  `
  <h2>1st Quarter – Lesson 7 (Forms: Submit, Reset, File Upload)</h2>
  <h3>Feedback Form</h3>
  <p>Forms can send data using <code>action="mailto:..."</code></p>
  <h3>Form Attributes</h3>
  <ul>
    <li><b>action</b> – where to send data</li>
    <li><b>method</b> – GET or POST</li>
    <li><b>enctype</b> – encoding type</li>
  </ul>
  <h3>Submit Button</h3>
  <p><input type="submit"> - sends form data</p>
  <h3>Reset Button</h3>
  <p><input type="reset"> - clears all form inputs</p>
  <h3>File Upload</h3>
  <p><input type="file" accept="..."> - allows file uploads</p>
  <h3>Accept Attribute Values</h3>
  <ul>
    <li>File extension (e.g., .pdf, .jpg)</li>
    <li>audio/*</li>
    <li>video/*</li>
    <li>image/*</li>
    <li>media_type</li>
  </ul>
  `,

  // 2nd Quarter – Lesson 1
  `
  <h2>2nd Quarter – Lesson 1 (CSS Introduction)</h2>
  <h3>CSS Definition</h3>
  <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are displayed on screen.</p>
  <h3>Why Use CSS?</h3>
  <ul>
    <li>Consistency across web pages</li>
    <li>Saves time - one style sheet controls multiple pages</li>
    <li>Accessibility and responsiveness</li>
    <li>Design enhancements</li>
    <li>Faster loading</li>
    <li>Easier maintenance</li>
    <li>Separation of structure and style</li>
  </ul>
  <h3>Layers of a Webpage</h3>
  <ul>
    <li><b>Content Layer</b> – HTML defines text, images, and media</li>
    <li><b>Presentation Layer</b> – CSS defines how people see the page</li>
    <li><b>Behavior Layer</b> – JavaScript adds interactivity</li>
  </ul>
  <h3>Prerequisites</h3>
  <p>Basic HTML knowledge is needed before learning CSS.</p>
  `,

  // 2nd Quarter – Lesson 2
  `
  <h2>2nd Quarter – Lesson 2 (CSS Structure & Types)</h2>
  <h3>CSS Structure</h3>
  <ul>
    <li><b>Selector</b> – the HTML element to style</li>
    <li><b>Property</b> – the style attribute</li>
    <li><b>Value</b> – the setting</li>
    <li><b>Declaration</b> – property + value</li>
    <li><b>Declaration Block</b> – declarations in curly braces</li>
  </ul>
  <h3>Style Sheet</h3>
  <p>Instructions for the browser on how to display elements.</p>
  <h3>Three Kinds of CSS</h3>
  <ul>
    <li><b>External</b> – separate .css file, linked with <link></li>
    <li><b>Embedded/Internal</b> – defined inside <style> in the head</li>
    <li><b>Inline</b> – defined in element's style attribute</li>
  </ul>
  <h3>CSS Comments</h3>
  <p>/* comment text */</p>
  `,

  // 2nd Quarter – Lesson 3
  `
  <h2>2nd Quarter – Lesson 3 (Inline, Internal, External CSS)</h2>
  <h3>Inline Style Sheets</h3>
  <p>Defined directly in element's style attribute: <p style="color:red;"></p>
  <h3>Internal/Embedded Style Sheets</h3>
  <p>Defined inside <style> in the head section.</p>
  <h3>External Style Sheets</h3>
  <p>Stored in separate .css file, linked with <link>.</p>
  <h3>Display Property</h3>
  <ul>
    <li><b>block</b> – elements stack vertically</li>
    <li><b>inline</b> – elements flow horizontally</li>
    <li><b>none</b> – element is hidden</li>
    <li><b>list-item</b> – displays as list item</li>
    <li><b>inherit</b> – inherits from parent</li>
  </ul>
  <h3>Div and Span Tags</h3>
  <p><b><div></b> – block-level container<br><b><span></b> – inline container</p>
  `,

  // 2nd Quarter – Lesson 4
  `
  <h2>2nd Quarter – Lesson 4 (CSS Rules & Classes)</h2>
  <h3>CSS Rule</h3>
  <p>A CSS rule has two parts: a selector and declarations.</p>
  <h3>Style Properties</h3>
  <ul>
    <li>Fonts</li>
    <li>Colors/Backgrounds</li>
    <li>Text formatting</li>
    <li>Boxes/Layout</li>
    <li>Lists</li>
  </ul>
  <h3>Classes</h3>
  <ul>
    <li>Defined with a dot (.) followed by class name</li>
    <li>Reusable across multiple elements</li>
    <li>Syntax: .classname or element.classname</li>
  </ul>
  <h3>Grouping Selectors</h3>
  <p>Apply same styles to multiple selectors separated by commas.</p>
  `,

  // 3rd Quarter – Lesson 1
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
    <li>Use block-level tags (<p>, <h1>, <div>).</li>
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
    <li>Table Layout: use <table> to structure webpage content</li>
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
    <li>Use block-level tags (<p>, <h1>, <div>).</li>
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
    <li>Table Layout: use <table> to structure webpage content</li>
    <li>Example: headers, links, content cells, quotes inside table rows</li>
  </ul>
  `
];

// REST OF THE FILE REMAINS THE SAME BELOW
// (Events, character selection handling, and AP lessons)
// Copy from original leonardo.js after this point

