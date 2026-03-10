// leonardo.js - UPDATED VERSION

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
  // ==================== QUARTER 1 - 7 LESSONS ====================
  
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

  // ==================== QUARTER 2 - 4 LESSONS ====================

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

  // ==================== QUARTER 3 - 4 LESSONS ====================

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

  // ==================== QUARTER 4 - 6 LESSONS ====================

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
  <h2>4th Quarter – Lesson 2 (JavaScript Variables & Data Types)</h2>
  <h3>Variables</h3>
  <p>Variables are containers for storing data values. In JavaScript, we use var, let, and const to declare variables.</p>
  <ul>
    <li><b>var</b> – function-scoped, can be redeclared</li>
    <li><b>let</b> – block-scoped, can be reassigned</li>
    <li><b>const</b> – block-scoped, cannot be reassigned</li>
  </ul>
  <h3>Data Types</h3>
  <ul>
    <li><b>Primitive Types:</b> String, Number, Boolean, Null, Undefined, Symbol</li>
    <li><b>Reference Types:</b> Objects, Arrays, Functions</li>
  </ul>
  <h3>Operators</h3>
  <ul>
    <li>Arithmetic: +, -, *, /, %, ++, --</li>
    <li>Assignment: =, +=, -=, *=, /=</li>
    <li>Comparison: ==, ===, !=, !==, >, <, >=, <=</li>
    <li>Logical: &&, ||, !</li>
  </ul>
  `,

  // 4th Quarter Lesson 3
  `
  <h2>4th Quarter – Lesson 3 (JavaScript Functions & Events)</h2>
  <h3>Functions</h3>
  <p>A function is a block of code designed to perform a particular task.</p>
  <h3>Function Declaration</h3>
  <ul>
    <li><code>function functionName(parameter) { // code }</code></li>
    <li>Functions can return values using the <b>return</b> keyword</li>
  </ul>
  <h3>Arrow Functions</h3>
  <ul>
    <li><code>const functionName = (parameter) => { // code }</code></li>
    <li>Shorter syntax for writing function expressions</li>
  </ul>
  <h3>JavaScript Events</h3>
  <p>Events are actions that happen in the browser (clicks, hovers, keypresses).</p>
  <ul>
    <li><b>onclick</b> – when an element is clicked</li>
    <li><b>onmouseover</b> – when mouse hovers over element</li>
    <li><b>onkeydown</b> – when a key is pressed</li>
    <li><b>onsubmit</b> – when a form is submitted</li>
  </ul>
  <h3>addEventListener</h3>
  <p><code>element.addEventListener('event', function)</code> - attaches an event handler to an element.</p>
  `,

  // 4th Quarter Lesson 4
  `
  <h2>4th Quarter – Lesson 4 (JavaScript DOM & DOM Manipulation)</h2>
  <h3>DOM (Document Object Model)</h3>
  <p>The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.</p>
  <h3>Selecting Elements</h3>
  <ul>
    <li><code>document.getElementById('id')</code> – selects by ID</li>
    <li><code>document.getElementsByClassName('class')</code> – selects by class</li>
    <li><code>document.getElementsByTagName('tag')</code> – selects by tag</li>
    <li><code>document.querySelector('selector')</code> – selects first match</li>
    <li><code>document.querySelectorAll('selector')</code> – selects all matches</li>
  </ul>
  <h3>Modifying Elements</h3>
  <ul>
    <li><code>element.innerHTML</code> – changes HTML content</li>
    <li><code>element.textContent</code> – changes text content</li>
    <li><code>element.setAttribute('attr', 'value')</code> – sets attribute</li>
    <li><code>element.style.property</code> – changes CSS style</li>
  </ul>
  `,

  // 4th Quarter Lesson 5
  `
  <h2>4th Quarter – Lesson 5 (JavaScript Conditional Statements & Loops)</h2>
  <h3>Conditional Statements</h3>
  <ul>
    <li><b>if</b> – executes code if condition is true</li>
    <li><b>else</b> – executes code if condition is false</li>
    <li><b>else if</b> – tests a new condition</li>
    <li><b>switch</b> – selects from multiple conditions</li>
  </ul>
  <h3>Comparison Operators</h3>
  <ul>
    <li>== equal to</li>
    <li>=== equal value and type</li>
    <li>!= not equal</li>
    <li>> greater than</li>
    <li>< less than</li>
    <li>>= greater than or equal</li>
    <li><= less than or equal</li>
  </ul>
  <h3>Loops</h3>
  <ul>
    <li><b>for</b> – loops through a block of code a number of times</li>
    <li><b>while</b> – loops through a block while condition is true</li>
    <li><b>do...while</b> – loops at least once, then repeats</li>
    <li><b>for...of</b> – loops through iterable objects</li>
  </ul>
  `,

  // 4th Quarter Lesson 6
  `
  <h2>4th Quarter – Lesson 6 (JavaScript Arrays & Objects)</h2>
  <h3>Arrays</h3>
  <p>Arrays are used to store multiple values in a single variable.</p>
  <h3>Creating Arrays</h3>
  <ul>
    <li><code>const fruits = ["apple", "banana", "orange"];</code></li>
    <li><code>const numbers = new Array(1, 2, 3);</code></li>
  </ul>
  <h3>Array Methods</h3>
  <ul>
    <li><b>push()</b> – adds element to end</li>
    <li><b>pop()</b> – removes element from end</li>
    <li><b>shift()</b> – removes element from beginning</li>
    <li><b>unshift()</b> – adds element to beginning</li>
    <li><b>length</b> – returns number of elements</li>
    <li><b>sort()</b> – sorts elements</li>
    <li><b>reverse()</b> – reverses elements</li>
  </ul>
  <h3>Objects</h3>
  <p>Objects are used to store keyed collections of various data.</p>
  <h3>Creating Objects</h3>
  <ul>
    <li><code>const person = {name: "John", age: 30};</code></li>
    <li><code>const person = new Object();</code></li>
  </ul>
  <h3>Accessing Object Properties</h3>
  <ul>
    <li><code>object.property</code></li>
    <li><code>object["property"]</code></li>
  </ul>
  `
];

let lessonIndex = 0;

function showLesson(index) {
  const contentBox = document.getElementById("lessonContent");
  contentBox.innerHTML = lessons[index];
}

    // Events (one image + title per event)
    const events = [
        { 
            title: "Intrams", 
            img: "images/intrams.jpg",
            reflection: "Intrams (Intramurals) is our school sports event where students compete in various athletic activities. It promotes teamwork, sportsmanship, and healthy competition among students."
        },
        { 
            title: "Science Month", 
            img: "images/science_month.png",
            reflection: "Science Month celebrates the importance of science in our daily lives. It encourages students to explore scientific concepts and fosters curiosity and innovation."
        },
        { 
            title: "AP Month", 
            img: "images/ap_month.png",
            reflection: "AP (Araling Panlipunan) Month focuses on deepening students' understanding of Philippine history, culture, and society. It promotes patriotism and awareness of current social issues."
        },
        { 
            title: "Booklandia", 
            img: "images/booklandia.png",
            reflection: "Booklandia is a literary event that encourages reading and love for books. It helps develop literacy skills and imagination through various reading activities and book-related competitions."
        },
        { 
            title: "Values Pop", 
            img: "images/values_pop.png",
            reflection: "Values Pop is an event that promotes core values such as honesty, respect, and responsibility. It helps shape students' character and moral development."
        },
        { 
            title: "Math Month", 
            img: "images/math_month.png",
            reflection: "Math Month celebrates the importance of mathematics in everyday life. It helps students develop problem-solving skills and appreciation for numbers and logical thinking."
        },
        { 
            title: "Botb", 
            img: "images/botb.png",
            reflection: "Battle of the Bands is a music competition where student bands showcase their musical talents. It provides a platform for creative expression and appreciation of different music genres."
        },
        { 
            title: "Noli Me Tangere", 
            img: "images/noli_me_tangere.png",
            reflection: "Noli Me Tangere is a theatrical adaptation of Jose Rizal's novel. It brings to life the critical issues of colonial Philippines and inspires reflection on justice and national identity."
        },
        { 
            title: "Ped Xing", 
            img: "images/ped_xing.png",
            reflection: "Ped Xing (Pedestrian Crossing) is an event that promotes road safety awareness. It teaches students the importance of following traffic rules and being responsible pedestrians."
        },
        { 
            title: "Buwan ng Wika", 
            img: "images/BW1.jpg",
            reflection: "Buwan ng Wika (Language Month) celebrates the Filipino language and our rich linguistic heritage. It promotes pride in our national language and encourages its proper use."
        },
        { 
            title: "Cluster", 
            img: "images/cluster1.jpg",
            reflection: "Cluster is an event where students from different schools come together for collaborative activities. It fosters friendship, unity, and the exchange of ideas among young learners."
        },
        { 
            title: "Mapeh Month", 
            img: "images/mapeh-month.png",
            reflection: "MAPEH Month celebrates Music, Arts, Physical Education, and Health. It emphasizes the importance of a balanced education that develops both mind and body."
        },
        {
            title: "Credits",
            img: "images/credits.png",
            description: "Images by Allison Pineda, Jade Imperial, and Ash Uy.",
            reflection: "Special thanks to all the photographers who captured these memorable moments throughout the school year."
        }
    ];

    let eventIndex = 0;

    // Handle character selection (if dialogue elements exist)
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
                            </div>
                            <div class="event-reflection">
                                <h3>Reflection</h3>
                                <p>${ev.reflection}</p>
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
                        <div class="gallery-side">
                            <img src="images/char-right.png" alt="Right Character">
                        </div>`;
                    nextBtn.onclick = null;
                } else if (radio.value === "video") {
                    dialogueName.textContent = "Video";
                    dialogueContent.innerHTML = `
                    <div class="video-preview">
                        <div class="google-drive-video">
                            <iframe src="https://drive.google.com/file/d/1S_AuxlT-YRXd7fa8oveV1gddOMZrWzBi/preview"
                                allow="autoplay"
                                allowfullscreen>
                            </iframe>
                        </div>
                    <div class="video-reflection">
                        <h3>Reflection</h3>
                        <p>As Padre Damaso and the main scriptwriter of Noli Me Tangere, I contributed to the play by doing my 
                        part and oftentimes assisting with the props members and keeping them company.</p>
                        <p> I was very satisfied with how the play turned out and I am grateful that I was able to play such a big part in it. </p>
                    </div>`;
                    nextBtn.onclick = null;
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
                <h2>Lesson 1: Pambansang Kaunlaran</h2>
                <p>Isang estado ng bansa kung saan tinatamasa ng mga tao mula sa pinakamababang uri ng mamamayan ang nakakamanghang pagbabago sa ekonomiya at pamumuhay.</p>
                <h3>MGA KONSEPTO NG PAMBANSANG KAUNLARAN</h3>
                <ul>
                    <li><b>Pagbabago</b> – Paraan upang maging iba o naiiba.</li>
                    <li><b>Pag-unlad</b> – Pagbabago mula sa mababa tungo sa mataas na antas ng pamumuhay.</li>
                    <li><b>Pagsulong</b> – Pag-usad tungo sa iyong layunin.</li>
                    <li><b>Ebolusyon</b> – Pagbabago sa mga katangian sa loob ng mahabang panahon.</li>
                </ul>
                <h3>DALAWANG KONSEPTO NG PAG-UNLAD</h3>
                <ul>
                    <li><b>Tradisyunal</b> – Pagtamo ng patuloy na pagtaas ng income per capita.</li>
                    <li><b>Makabago</b> – Malawakang pagbabago sa buong sistemang panlipunan.</li>
                </ul>
                <h3>MGA SALIK NG KAUNLARAN</h3>
                <ul>
                    <li>Likas na yaman</li>
                    <li>Yamang-tao</li>
                    <li>Kapital</li>
                    <li>Teknolohiya at Inobasyon</li>
                </ul>
                <h3>MGA TUNGKULIN NG MAMAMAYAN</h3>
                <ul>
                    <li>Suportahan ang pamahalaan</li>
                    <li>Sundin ang batas</li>
                    <li>Alagaan ang kapaligiran</li>
                    <li>Tumulong sa pagpuksa ng korapsyon</li>
                    <li>Maging produktibo</li>
                    <li>Tangkilikin ang produktong Pilipino</li>
                    <li>Magtipid ng enerhiya</li>
                </ul>
            `,
            reflection: "Natutunan ko na ang tunay na kaunlaran ay nakikita sa pagbabago ng buhay ng mga tao, hindi lamang sa ekonomiya kundi sa kabuuan ng lipunan."
        },
        {
            info: `
                <h2>Lesson 2: Agrikultura</h2>
                <p>Isang agham at sining na may kinalaman sa pagpaparami ng mga hayop at mga tanim o halaman.</p>
                <h3>MGA GAWAIN SA SEKTOR NG AGRIKULTURA</h3>
                <ul>
                    <li><b>Pagsasaka</b> – Pangunahing pananim: palay, mais, niyog, tubo, saging, pinya, atbp.</li>
                    <li><b>Pangingisda</b> – Nauuri sa tatlo: komersiyal, munisipal, at aquaculture</li>
                    <li><b>Paghahayupan</b> – May kinalaman sa mga hayop na itinaas para sa karne, hibla, gatas, itlog, atbp.</li>
                    <li><b>Paggugubat/Pagtotroso</b> – Paglinang ng kagubatan</li>
                </ul>
                <h3>KAHALAGAHAN NG AGRIKULTURA</h3>
                <ul>
                    <li>Pinagmumulan ng pagkain</li>
                    <li>Pinagkukunan ng hilaw na materyales</li>
                    <li>Nagkakaloob ng trabaho sa maraming Pilipino</li>
                    <li>Nagpapasok ng dolyar sa bansa</li>
                </ul>
                <h3>SULIRANIN NG AGRIKULTURA</h3>
                <ul>
                    <li>Pagliit ng lupang sakahan</li>
                    <li>Kakulangan ng makabagong teknolohiya</li>
                    <li>Climate Change</li>
                    <li>Mapanirang operasyon ng malalaking komersiyal na mangingisda</li>
                </ul>
            `,
            reflection: "Napagtanto ko na ang agrikultura ang pundasyon ng ating ekonomiya. Kung hindi natin ito mapapangalagaan, maaapektuhan ang buong bansa."
        },
        {
            info: `
                <h2>Lesson 3: Industriya</h2>
                <p>Tumutukoy sa pagproseso ng mga hilaw na materyal at paggawa ng mga produkto na kinakailangan para sa pampublikong pamilihan.</p>
                <h3>SUB-SEKTOR NG INDUSTRIYA</h3>
                <ul>
                    <li><b>Pagmimina</b> – Pagkuha at pagproseso ng mga yamang mineral</li>
                    <li><b>Pagmamanupaktura</b> – Paggawa ng mga produkto sa pamamagitan ng manual labor o ng mga makina</li>
                    <li><b>Konstruksyon</b> – Pagtatayo ng mga gusali, estruktura, at iba pang land improvements</li>
                    <li><b>Utilities</b> – Pagtugon ng mga pangunahing pangangailangan tulad ng tubig, kuryente, at gas</li>
                </ul>
                <h3>KAHALAGAHAN NG INDUSTRIYA</h3>
                <ul>
                    <li>Tumatanggap ng mga produkto mula sa sektor ng agrikultura</li>
                    <li>Nagkakaloob ng hanapbuhay sa maraming Pilipino</li>
                    <li>Nagpapasok ng dolyar sa bansa</li>
                    <li>Nakagagamit ng makabagong teknolohiya</li>
                </ul>
                <h3>SULIRANIN NG INDUSTRIYA</h3>
                <ul>
                    <li>Kakulangan sa pondo at kompetisyon</li>
                    <li>Paghina ng lokal na industriya</li>
                </ul>
            `,
            reflection: "Ang industriya ang nagbibigay ng modernisasyon sa bansa. Ngunit dapat din natin sinusuportahan ang lokal na industriya upang hindi tayo masyado umasa sa mga imported na produkto."
        },
        {
            info: `
                <h2>Lesson 4: Sektor ng Paglilingkod</h2>
                <p>Ang umaalalay sa buong yugto ng produksyon, distribusyon, kalakalan, at pagkonsumo ng mga produkto.</p>
                <h3>PORMAL NA SEKTOR SA ILALIM NG PAGLILINGKOD</h3>
                <ul>
                    <li>Transportasyon, komunikasyon, at mga imbakan</li>
                    <li>Kalakalan – Pagpapalitan ng iba't-ibang produkto at serbisyo</li>
                    <li>Pananalapi – Mga serbisyong may kinalaman sa bangko, insurance, at pamumuhunan</li>
                    <li>Paupahang bahay at Real Estate</li>
                    <li>Paglilingkod ng Pampribado at Pampubliko</li>
                </ul>
                <h3>MGA AHENSIYANG TUMUTULONG</h3>
                <ul>
                    <li>DOLE – Department of Labor and Employment</li>
                    <li>OWWA – Overseas Workers Welfare Administration</li>
                    <li>POEA – Philippine Overseas Employment Administration</li>
                    <li>TESDA – Technical Education and Skills Development Authority</li>
                    <li>PRC – Professional Regulation Commission</li>
                    <li>CHED – Commission on Higher Education</li>
                </ul>
                <h3>MGA BATAS SA PAGGawa</h3>
                <ul>
                    <li>Holiday Pay</li>
                    <li>Overtime Pay</li>
                    <li>Night Shift Differential</li>
                    <li>13th Month Pay</li>
                    <li>Maternity/Paternity Leave</li>
                </ul>
            `,
            reflection: "Ang sektor ng paglilingkod ang nagbibigay ng balanse sa ekonomiya. Ang mga serbisyong ito ang direktang nakakaapekto sa araw-araw na buhay ng bawat Pilipino."
        },
        {
            info: `
                <h2>Lesson 5: Impormal na Sektor</h2>
                <p>Sektor ng ekonomiya na walang pormal o salat sa mga dokumentong kailangan sa pagsasagawa ng gawaing pang-ekonomiya.</p>
                <h3>HALIMBAWA NG MGA TAONG KABILANG SA SEKTOR NA ITO</h3>
                <ul>
                    <li>Nagtitinda sa kalsada</li>
                    <li>Pedicab driver</li>
                    <li>Karpintero</li>
                    <li>Hindi rehistradong pampublikong sasakyan</li>
                </ul>
                <h3>KATANGIAN NG IMPORMAL NA SEKTOR</h3>
                <ul>
                    <li>Hindi nakarehistro sa pamahalaan</li>
                    <li>Hindi nagbabayad ng buwis mula sa kinita</li>
                    <li>Walang legal at pormal na balangkas mula sa pamahalaan</li>
                </ul>
                <h3>KAHALAGAHAN NG IMPORMAL NA SEKTOR</h3>
                <ul>
                    <li>Sinasalo nito ang mga mamamayan na hindi makapasok bilang regular na empleyado</li>
                    <li>Nagbibigay ng pagkakataon sa maraming Pilipino na makapaghanapbuhay</li>
                    <li>Nagsisilbing tagasalo ng mga mamamayang may mahigpit na pangangailangan</li>
                    <li>Malaki ang naitutulong sa mga konsyumer dahil sa mura nitong halaga</li>
                </ul>
                <h3>MGA BATAS AT PROGRAMA</h3>
                <ul>
                    <li>Social Reform and Poverty Alleviation Act (R.A 8425)</li>
                    <li>Magna Carta of Women (R.A 9710)</li>
                    <li>Technical Education and Skills Development Act (R.A 7796)</li>
                    <li>Social Security Act (R.A 8282)</li>
                    <li>National Health Insurance Act (R.A 7875)</li>
                    <li>4Ps – Pantawid Pamilyang Pilipino Program</li>
                </ul>
            `,
            reflection: "Napagtanto ko na ang impormal na sektor ay mahalaga dahil ito ang sumasalo sa mga mamamayang walang oportunidad sa pormal na trabaho. Dapat itong kilalanin at suportahan."
        },
        {
            info: `
                <h2>Lesson 6: Patakarang Panlabas (Kalakalang Panlabas)</h2>
                <p>Palitan ng produkto at serbisyo sa pagitan ng mga bansa.</p>
                <h3>URI NG KALAKALAN</h3>
                <ul>
                    <li><b>Bilateral</b> – Palitan ng produkto sa pagitan ng dalawang bansa</li>
                    <li><b>Bloc</b> – Palitan ng produkto sa pagitan ng organisasyon at isang bansa</li>
                </ul>
                <h3>EKSPORT AT IMPORT</h3>
                <ul>
                    <li><b>EKSPORT</b> – Pagpapadala ng mga produkto at serbisyo sa ibang bansa</li>
                    <li><b>IMPORT</b> – Pagbili ng kalakal mula sa ibang bansa</li>
                </ul>
                <h3>DAHILAN NG KALAKALANG PANLABAS</h3>
                <ul>
                    <li>Pagkakaiba ng Teknolohiya</li>
                    <li>Pagkakaiba sa Pinagkukunang Yaman</li>
                    <li>Pagkakaiba sa Panlasa</li>
                    <li>Pagkakaiba sa Halaga ng Produksyon</li>
                </ul>
                <h3>PATAKARANG PANG-EKONOMIYA</h3>
                <ul>
                    <li><b>Taripa/Tariff</b> – Buwis sa mga produktong inaangkat</li>
                    <li><b>Kota/Quota</b> – Limitasyon sa dami ng inaangkat na produkto</li>
                    <li><b>Subsidy</b> – Tulong ng gobyerno sa lokal na industriya</li>
                </ul>
                <h3>SAMAHANG PANDAIGDIG</h3>
                <ul>
                    <li><b>WTO</b> – World Trade Organization</li>
                    <li><b>APEC</b> – Asia-Pacific Economic Cooperation</li>
                    <li><b>ASEAN</b> – Association of Southeast Asian Nations</li>
                </ul>
            `,
            reflection: "Naisip ko na ang kalakalang panlabas ay mahalaga sa ekonomiya, ngunit dapat balansehin upang hindi mawala ang sariling identidad ng bansa."
        }
    ];

    const index = num - 1;
    if (index >= 0 && index < apLessons.length) {
        aplessonInfo.innerHTML = apLessons[index].info;
        aplessonReflection.innerHTML = `<p>${apLessons[index].reflection}</p>`;
    } else {
        aplessonInfo.textContent = "Lesson not found.";
        aplessonReflection.textContent = "No reflection available.";
    }
};
