
function login() {
    alert("Button Clicked");

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "Manusha" && password === "July7") {

        alert("❤️ Manusha Welcome to Mahesh Website ❤️");

        document.querySelector(".login-box").style.display = "none";
        document.getElementById("gallery").style.display = "block";


        document.getElementById("matrix").style.display = "none";
        document.getElementById("matrix").style.display = "block";

        const bgMusic = document.getElementById("music");

bgMusic.currentTime = 0;

bgMusic.play().catch(function(error){
    console.log(error);
});
 

    } else {

        alert("❌ Invalid Username or Password");

    }
}

function togglePassword() {
    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Right Click Disable
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

// Drag Disable
document.addEventListener("dragstart", function(e){
    e.preventDefault();
});

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

window.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

const bgMusic = document.getElementById("music");
const imageMusic = document.getElementById("imageMusic");

// Gallery videos maatrame select cheyyi
const videos = document.querySelectorAll(".video-grid video");

// Video play ayithe rendu songs stop
videos.forEach(video => {

    video.addEventListener("play", function () {

        bgMusic.pause();
        imageMusic.pause();

    });

    video.addEventListener("pause", function () {

        bgMusic.play().catch(() => {});

    });

    video.addEventListener("ended", function () {

        bgMusic.play().catch(() => {});

    });

});

// Image click
document.querySelectorAll(".grid img").forEach(img => {
    ...
});

// Scroll chesinappudu background music
window.addEventListener("scroll", function () {

    if (!imageMusic.paused) {
        imageMusic.pause();
        imageMusic.currentTime = 0;
    }

    if (bgMusic.paused) {
        bgMusic.play().catch(function(err){
            console.log(err);
        });
    }

});
