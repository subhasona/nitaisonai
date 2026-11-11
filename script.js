
// ===================================
// NITAI & SONAI WEDDING WEBSITE
// Romantic Animation + Background Music
// ===================================


// 1. Falling Rose Petals

const petalContainer = document.getElementById("petal-container");

const petalSymbols = ["🌹", "🌸", "✿", "❀", "♥"];

function createPetal() {

    const petal = document.createElement("span");

    petal.className = "petal";

    petal.innerHTML =
        petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (12 + Math.random() * 17) + "px";

    const duration = 7 + Math.random() * 8;

    petal.style.animationDuration = duration + "s";

    petalContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Create petals continuously

setInterval(createPetal, 450);


// 2. Golden Sparkle Effects

const sparkleContainer =
    document.getElementById("sparkle-container");

function createSparkle() {

    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

setInterval(createSparkle, 250);


// 3. Background Music Autoplay + Loop

const music = document.getElementById("weddingMusic");

music.loop = true;
music.autoplay = true;
music.preload = "auto";

// Always try to start the song from the beginning
// when this page loads or refreshes.

music.addEventListener("loadedmetadata", () => {
    music.currentTime = 0;
});

function startWeddingMusic() {

    if (!music.paused) return;

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Browser may block autoplay.
            // Playback will be retried after visitor interaction.
        });
    }
}

// Initial autoplay attempt

window.addEventListener("load", () => {

    music.currentTime = 0;

    startWeddingMusic();

});

// Retry silently after the first visitor interaction.
// No music on/off button is displayed.

document.addEventListener("pointerdown", () => {

    if (music.paused) {
        startWeddingMusic();
    }

}, { once: true });

document.addEventListener("keydown", () => {

    if (music.paused) {
        startWeddingMusic();
    }

}, { once: true });


// 4. Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// 5. Refresh starts a new experience at the top

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);
});
