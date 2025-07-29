
const scenes = [
    {
        title: "Pamplona",
        subtitle: "A Wounded Knight",
        text: "In 1521, Ignatius of Loyola was struck by a cannonball while defending Pamplona. This marked the beginning of his interior transformation.",
        background: "images/pamplona.png",
    },
    {
        title: "Loyola",
        subtitle: "A Time of Recovery and Reflection",
        text: "While recovering in Loyola, Ignatius read about the life of Christ and the saints, inspiring his desire for a deeper spiritual life.",
        background: "images/loyola.png",
    },
    {
        title: "Montserrat and Manresa",
        subtitle: "A Pilgrim’s Journey",
        text: "Ignatius surrendered his sword at Montserrat and spent months in deep prayer and spiritual struggle in the caves of Manresa, where he began developing the Spiritual Exercises.",
        background: "images/manresa.jpeg",
    },
    {
        title: "Jerusalem",
        subtitle: "A Heart Set on Pilgrimage",
        text: "Ignatius traveled to the Holy Land hoping to remain there, but was asked to return. His desire to follow Christ grew stronger.",
        background: "images/jerusalem.png",
    },
    {
        title: "Paris",
        subtitle: "Brotherhood and Formation",
        text: "In Paris, Ignatius studied theology and gathered companions who would later become the Society of Jesus. It was here that the mission became clearer: to serve Christ wherever the need was greatest.",
        background: "images/paris.png",
    },
    {
        title: "Rome",
        subtitle: "Mission and Foundation",
        text: "Ignatius and his companions offered themselves to the Pope. In 1540, the Society of Jesus was formally approved, beginning a new chapter of mission, education, and service.",
        background: "images/rome.png",
    },
    {
        title: "The Final Chapter of St. Ignatius' Life",
        subtitle: "A Quiet Passing, A Lasting Fire",
        text: "On July 31, 1556, Ignatius died quietly in Rome. He left behind no earthly treasures—just a burning desire to help souls and a community ready to carry on the mission.",
        background: "images/final_chapter.png",
    },
    {
        title: "The Society of Jesus After His Death",
        subtitle: "The Flame Spreads Across the World",
        text: "Under Fr. Diego Laínez, the Society expanded globally. Even after suppression in 1773 and restoration in 1814, Jesuits like Fr. Matteo Ricci and Fr. Pedro Arrupe carried the Ignatian flame into new frontiers.",
        background: "images/spread.png",
    },
    {
        title: "Ignatian Spirituality and the Jesuits Today",
        subtitle: "A Mission That Lives On",
        text: "The Society now serves in 100+ countries through education, social justice, and spiritual retreats. Its values reach beyond Jesuits—teaching all to find God in all things, live for the MAGIS, and be persons for others.",
        background: "images/today.png",
    },
    {
        title: "An Invitation Today",
        subtitle: "Your Turn to Walk the Path",
        text: "You don’t have to be a Jesuit to walk the Ignatian path. Like Ignatius, ask: 'What more can I do for Christ?' Let us continue the journey—together.",
        background: "images/invitation.png",
    },
];

const trivia = {
    Pamplona: {
        question:
            "What year was St. Ignatius struck by a cannonball in Pamplona?",
        choices: {
            a: "1492",
            b: "1521",
            c: "1572",
        },
        correct: "b",
        response: {
            True: "Wonderful! You're absolutely right! St. Ignatius was struck by a cannonball in 1521 in Pamplona. Great job remembering that important date!",
            False:
                "Good try! The correct answer is 1521. Don't worry - dates can be tricky to remember! St. Ignatius was hurt in 1521, and that's when his amazing spiritual journey began. You're doing great!",
        },
    },
    Loyola: {
        question:
            "What did Ignatius read while recovering that changed his life?",
        choices: {
            a: "Comic books",
            b: "Stories about Jesus and the saints",
            c: "Cookbooks",
        },
        correct: "b",
        response: {
            True: "Excellent! You got it right! Ignatius read stories about Jesus and the saints, and they inspired him to want to help others. You're learning so well!",
            False:
                "Nice thinking! The answer is stories about Jesus and the saints. While Ignatius was getting better, he read these inspiring stories that helped him decide to serve God. Keep up the great work!",
        },
    },
    "Montserrat and Manresa": {
        question:
            "What special prayers did Ignatius create during his time in the caves?",
        choices: {
            a: "The Spiritual Exercises",
            b: "Magic spells",
            c: "Bedtime stories",
        },
        correct: "a",
        response: {
            True: "Amazing! You're correct! Ignatius created the Spiritual Exercises - special prayers and reflections that help people feel closer to God. You're so smart!",
            False:
                "Great guess! The answer is the Spiritual Exercises. These are special prayers that Ignatius wrote to help people talk to God and make good choices. You're doing wonderfully!",
        },
    },
    Jerusalem: {
        question:
            "Where did Ignatius want to stay to follow in Jesus's footsteps?",
        choices: {
            a: "Paris",
            b: "Jerusalem (the Holy Land)",
            c: "Spain",
        },
        correct: "b",
        response: {
            True: "Perfect! Yes, Ignatius wanted to stay in Jerusalem, the Holy Land where Jesus lived! You remembered that beautifully!",
            False:
                "Good thinking! The answer is Jerusalem, the Holy Land. Ignatius wanted to stay there because that's where Jesus lived and taught. You're learning so much!",
        },
    },
    Paris: {
        question:
            "What did Ignatius and his friends decide to call their group?",
        choices: {
            a: "The Super Friends",
            b: "The Society of Jesus (Jesuits)",
            c: "The Knights of the Round Table",
        },
        correct: "b",
        response: {
            True: "Fantastic! You're absolutely right! They called themselves the Society of Jesus, and people also call them Jesuits. You're such a good listener!",
            False:
                "Wonderful try! The answer is the Society of Jesus (also called Jesuits). Ignatius and his friends wanted to serve Jesus together, so they chose this special name. You're doing such a great job!",
        },
    },
    Rome: {
        question: "Who officially approved Ignatius's group in 1540?",
        choices: {
            a: "The King of Spain",
            b: "The Pope",
            c: "His mother",
        },
        correct: "b",
        response: {
            True: "Excellent work! The Pope approved their group in 1540! You have such a good memory for these important details!",
            False:
                "Great attempt! The Pope was the one who officially approved their group. The Pope is like the leader of the Catholic Church, and he thought Ignatius's group would do wonderful work. You're learning beautifully!",
        },
    },
    "The Final Chapter of St. Ignatius' Life": {
        question: "What year did St. Ignatius die peacefully in Rome?",
        choices: {
            a: "1556",
            b: "1600",
            c: "1500",
        },
        correct: "a",
        response: {
            True: "Wonderful! You got it right! St. Ignatius died peacefully in 1556, but his good work continued through all his friends. You're so smart!",
            False:
                "Nice try! He died in 1556. Even though Ignatius went to heaven, all the good things he started kept helping people around the world. You're doing such a great job learning!",
        },
    },
    "The Society of Jesus After His Death": {
        question: "What happened to the Jesuits after Ignatius died?",
        choices: {
            a: "They disappeared",
            b: "They spread around the world helping people",
            c: "They became pirates",
        },
        correct: "b",
        response: {
            True: "Amazing! You're absolutely right! The Jesuits spread all around the world to help people and teach them about God. You understand the story so well!",
            False:
                "Excellent thinking! The answer is they spread around the world helping people. The Jesuits continued Ignatius's mission of helping others and teaching about God everywhere! You're doing wonderfully!",
        },
    },
    "Ignatian Spirituality and the Jesuits Today": {
        question: "How many countries do Jesuits serve in today?",
        choices: {
            a: "Only 5 countries",
            b: "More than 100 countries",
            c: "Just Spain",
        },
        correct: "b",
        response: {
            True: "Incredible! You're right! Jesuits serve in more than 100 countries today - that's almost everywhere in the world! You're such a good student!",
            False:
                "Great guess! The answer is more than 100 countries! That means Jesuits are helping people almost everywhere in the world, just like Ignatius wanted. You're learning so much!",
        },
    },
    "An Invitation Today": {
        question: "What question does Ignatius want us to ask ourselves?",
        choices: {
            a: "What's for lunch?",
            b: "What more can I do for Christ?",
            c: "What time is it?",
        },
        correct: "b",
        response: {
            True: "Perfect! You remembered perfectly! Ignatius wants us to ask 'What more can I do for Christ?' - thinking about how we can help others and be kind. You're amazing!",
            False:
                "Wonderful try! The question is 'What more can I do for Christ?' This means thinking about how we can be kind, helpful, and good to others every day. You're such a thoughtful student!",
        },
    },
};

let currentScene = 0;

const titleEl = document.getElementById("scene-title");
const subtitleEl = document.getElementById("scene-subtitle");
const textEl = document.getElementById("scene-text");
const overlay = document.getElementById("overlay");
const nextBtn = document.getElementById("next-button");
const quizSection = document.getElementById("quiz-section");
const sceneImage = document.getElementById("scene-image");

function startAdventure() {
    document.getElementById("start-screen").classList.add("hidden");
    overlay.classList.remove("hidden");
    showScene();
}

function quitApp() {
    alert("Goodbye!");
    window.close(); // May not work in all browsers
}

function showScene() {
    const scene = scenes[currentScene];
    // Set image source and show image
    if (scene.background) {
        sceneImage.src = scene.background;
        sceneImage.classList.remove("hidden");
    } else {
        sceneImage.classList.add("hidden");
    }
    // Remove background image from body
    document.body.style.backgroundImage = "none";

    titleEl.textContent = scene.title;
    subtitleEl.textContent = scene.subtitle;
    textEl.textContent = scene.text;
    quizSection.innerHTML = "";
    nextBtn.classList.add("hidden");

    const hasTrivia = trivia.hasOwnProperty(scene.title);
    if (hasTrivia) {
        setTimeout(() => {
            showQuiz(scene.title);
        }, 5000);
    } else {
        setTimeout(() => {
            nextBtn.classList.remove("hidden");
        }, 5000);
    }
}

function showQuiz(title) {
    const q = trivia[title];
    quizSection.innerHTML = `<p><strong>${q.question}</strong></p>`;
    
    // Create a container for the buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    
    Object.entries(q.choices).forEach(([key, val]) => {
        const btn = document.createElement("button");
        btn.textContent = `${key.toUpperCase()}: ${val}`;
        btn.className = "button quiz-btn";
        btn.onclick = () => handleAnswer(key, q.correct, q.response);
        buttonContainer.appendChild(btn);
    });
    
    quizSection.appendChild(buttonContainer);
}

function handleAnswer(selected, correct, responses) {
    const isCorrect = selected === correct;
    const key = isCorrect ? "True" : "False";
    const color = isCorrect ? "#32CD32" : "#b6fcb6"; // lime green or pale green
    quizSection.innerHTML = `<p style="background:${color};color:#1a2538;padding:16px;border-radius:8px;"><strong>${responses[key]}</strong></p>`;
    setTimeout(() => {
        nextBtn.classList.remove("hidden");
    }, 5000);
}

function nextScene() {
    currentScene++;
    if (currentScene >= scenes.length) {
        currentScene = 0;
    }
    showScene();
}