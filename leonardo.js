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

    // Toggle navbar (if toggle exists on page)
    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.style.display = navLinks.style.display === "none" ? "flex" : "none";
        });
    }

    // Lessons (replace with your actual lesson text)
    const lessons = [
        "Lesson 1: Introduction to HTML basics",
        "Lesson 2: Understanding CSS selectors",
        "Lesson 3: Adding images and links",
        "Lesson 4: Layout with Flexbox",
        "Lesson 5: Responsive design principles",
        "Lesson 6: Introduction to JavaScript",
        "Lesson 7: Variables and Data Types",
        "Lesson 8: Functions and Events",
        "Lesson 9: DOM Manipulation",
        "Lesson 10: Forms and Validation",
        "Lesson 11: Multimedia in Webpages",
        "Lesson 12: CSS Transitions and Animations",
        "Lesson 13: Advanced Flexbox/Grid",
        "Lesson 14: Accessibility in Web Design",
        "Lesson 15: Debugging and Best Practices",
        "Lesson 16: Final Project Showcase"
    ];
    let lessonIndex = 0;

    // Events (replace with your actual Q&A + images)
    const events = [
        {
            question: "Event 1: What is the difference between HTML and CSS?",
            answer: "HTML structures the content, while CSS styles it.",
            img1: "images/event1_1.png",
            img2: "images/event1_2.png"
        },
        {
            question: "Event 2: How do you make a webpage responsive?",
            answer: "By using relative units, media queries, and flexible layouts.",
            img1: "images/event2_1.png",
            img2: "images/event2_2.png"
        },
        {
            question: "Event 3: What is JavaScript used for?",
            answer: "JavaScript adds interactivity and dynamic behavior to webpages.",
            img1: "images/event3_1.png",
            img2: "images/event3_2.png"
        },
        {
            question: "Event 4: What are variables in JavaScript?",
            answer: "Variables store data values that can be used and changed later.",
            img1: "images/event4_1.png",
            img2: "images/event4_2.png"
        },
        {
            question: "Event 5: What is the DOM?",
            answer: "The Document Object Model represents the structure of a webpage.",
            img1: "images/event5_1.png",
            img2: "images/event5_2.png"
        },
        {
            question: "Event 6: What are CSS classes?",
            answer: "Classes let you apply styles to multiple elements at once.",
            img1: "images/event6_1.png",
            img2: "images/event6_2.png"
        },
        {
            question: "Event 7: What is Flexbox?",
            answer: "Flexbox is a CSS layout mode for arranging items in rows or columns.",
            img1: "images/event7_1.png",
            img2: "images/event7_2.png"
        },
        {
            question: "Event 8: What is Grid in CSS?",
            answer: "CSS Grid is a powerful system for creating two‑dimensional layouts.",
            img1: "images/event8_1.png",
            img2: "images/event8_2.png"
        },
        {
            question: "Event 9: What are media queries?",
            answer: "Media queries apply styles depending on device size or conditions.",
            img1: "images/event9_1.png",
            img2: "images/event9_2.png"
        },
        {
            question: "Event 10: What is semantic HTML?",
            answer: "Semantic HTML uses meaningful tags like <header>, <article>, <footer>.",
            img1: "images/event10_1.png",
            img2: "images/event10_2.png"
        },
        {
            question: "Event 11: What are CSS transitions?",
            answer: "Transitions animate changes in CSS properties smoothly over time.",
            img1: "images/event11_1.png",
            img2: "images/event11_2.png"
        },
        {
            question: "Event 12: What are CSS animations?",
            answer: "Animations let you define keyframes for complex motion effects.",
            img1: "images/event12_1.png",
            img2: "images/event12_2.png"
        },
        {
            question: "Event 13: What is accessibility in web design?",
            answer: "Accessibility ensures websites are usable by people with disabilities.",
            img1: "images/event13_1.png",
            img2: "images/event13_2.png"
        },
        {
            question: "Event 14: What is responsive typography?",
            answer: "Responsive typography scales text sizes for different devices.",
            img1: "images/event14_1.png",
            img2: "images/event14_2.png"
        },
        {
            question: "Event 15: What is a form in HTML?",
            answer: "Forms collect user input with fields like text boxes and buttons.",
            img1: "images/event15_1.png",
            img2: "images/event15_2.png"
        },
        {
            question: "Event 16: What is form validation?",
            answer: "Validation checks that user input meets required rules.",
            img1: "images/event16_1.png",
            img2: "images/event16_2.png"
        },
        {
            question: "Event 17: What is an API?",
            answer: "An API lets applications communicate and share data.",
            img1: "images/event17_1.png",
            img2: "images/event17_2.png"
        },
        {
            question: "Event 18: What is JSON?",
            answer: "JSON is a lightweight format for storing and exchanging data.",
            img1: "images/event18_1.png",
            img2: "images/event18_2.png"
        },
        {
            question: "Event 19: What is debugging?",
            answer: "Debugging is the process of finding and fixing errors in code.",
            img1: "images/event19_1.png",
            img2: "images/event19_2.png"
        },
        {
            question: "Event 20: What is version control?",
            answer: "Version control tracks changes to code, often using Git.",
            img1: "images/event20_1.png",
            img2: "images/event20_2.png"
        }
    ];

    let eventIndex = 0;

    // Handle character selection (if dialogue elements exist)
    // Handle character selection
    if (dialogueBox && dialogueContent && nextBtn) {
        document.querySelectorAll("input[name='character']").forEach(radio => {
            radio.addEventListener("change", () => {
                dialogueBox.style.display = "block";

                if (radio.value === "lessons") {
                    dialogueName.textContent = "Lessons";
                    lessonIndex = 0;
                    dialogueContent.textContent = lessons[lessonIndex];
                    nextBtn.onclick = () => {
                        lessonIndex = (lessonIndex + 1) % lessons.length;
                        dialogueContent.textContent = lessons[lessonIndex];
                    };
                } else if (radio.value === "events") {
                    dialogueName.textContent = "Events";
                    eventIndex = 0;
                    dialogueContent.innerHTML = `
                    <p><strong>${events[eventIndex].question}</strong></p>
                    <p>${events[eventIndex].answer}</p>
                    <div>
                        <img src="${events[eventIndex].img1}" alt="Event image 1">
                        <img src="${events[eventIndex].img2}" alt="Event image 2">
                    </div>`;
                    nextBtn.onclick = () => {
                        eventIndex = (eventIndex + 1) % events.length;
                        dialogueContent.innerHTML = `
                        <p><strong>${events[eventIndex].question}</strong></p>
                        <p>${events[eventIndex].answer}</p>
                        <div>
                            <img src="${events[eventIndex].img1}" alt="Event image 1">
                            <img src="${events[eventIndex].img2}" alt="Event image 2">
                        </div>`;
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
                    <video controls>
                        <source src="videos/Noli.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
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
                info: "Lesson 1: Introduction to Philippine Politics and Governance — covers the structure of government, the Constitution, and the role of citizens.",
                reflection: "This lesson helped me understand how the Constitution shapes our daily lives and why active citizenship is important."
            },
            {
                info: "Lesson 2: Economic Development and Challenges — explores GDP, poverty, inequality, and sustainable growth in the Philippines.",
                reflection: "I realized that economic growth must be inclusive, and that policies should address inequality to truly uplift communities."
            },
            {
                info: "Lesson 3: Philippine History and National Identity — traces key events from colonization to independence and their impact on national identity.",
                reflection: "Reflecting on this lesson made me appreciate the sacrifices of our ancestors and the importance of preserving our culture."
            },
            {
                info: "Lesson 4: Globalization and Its Impact — examines how global trade, technology, and culture influence Philippine society.",
                reflection: "This lesson made me think about balancing global influences with local traditions to maintain our identity."
            },
            {
                info: "Lesson 5: Environmental Issues and Sustainability — discusses climate change, natural disasters, and sustainable practices.",
                reflection: "I learned that sustainability is not just a buzzword but a responsibility we all share to protect future generations."
            },
            {
                info: "Lesson 6: Civic Engagement and Leadership — highlights the importance of youth participation, leadership skills, and community service.",
                reflection: "This lesson inspired me to be more proactive in my community and to see leadership as service rather than power."
            }
        ];

        const index = num - 1;
        if (index >= 0 && index < apLessons.length) {
            aplessonInfo.textContent = apLessons[index].info;
            aplessonReflection.textContent = apLessons[index].reflection;
        } else {
            aplessonInfo.textContent = "Lesson not found.";
            aplessonReflection.textContent = "No reflection available.";
        }
    }
