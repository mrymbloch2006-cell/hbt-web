/* =====================================
   BIRTHDAY WEBSITE JAVASCRIPT
===================================== */


/* =====================================
   SURPRISE BUTTON
===================================== */

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseSection = document.getElementById("surprise");

surpriseBtn.addEventListener("click", function () {

    // Show message
    surpriseSection.classList.remove("hidden");

    // Change button text
    surpriseBtn.innerHTML = "💗 Your Surprise Is Opened!";

    // Disable button
    surpriseBtn.disabled = true;

    // Start celebration
    createConfetti();

    // Create extra hearts
    createManyHearts();

    // Scroll smoothly to message
    setTimeout(function () {

        surpriseSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 300);

});


/* =====================================
   FLOATING HEARTS
===================================== */

const heartsContainer =
    document.getElementById("hearts-container");

const heartSymbols = [
    "♡",
    "♥",
    "💗",
    "💖",
    "💕",
    "✨",
    "🌸"
];


function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() * heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 18 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    heart.style.setProperty(
        "--move",
        (Math.random() * 160 - 80) + "px"
    );

    heartsContainer.appendChild(heart);


    // Remove after animation
    setTimeout(function () {

        heart.remove();

    }, 11000);
}


/* Create hearts continuously */

setInterval(createHeart, 700);


/* =====================================
   CREATE MANY HEARTS
===================================== */

function createManyHearts() {

    for (let i = 0; i < 35; i++) {

        setTimeout(function () {

            createHeart();

        }, i * 80);
    }
}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const symbols = [
        "●",
        "◆",
        "♥",
        "✦",
        "★"
    ];

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (Math.random() * 10 + 8) + "px";

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, 5000);
    }
}


/* =====================================
   INITIAL HEARTS
===================================== */

for (let i = 0; i < 10; i++) {

    setTimeout(function () {

        createHeart();

    }, i * 300);
}