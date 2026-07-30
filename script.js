function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "Manusha" && password === "ManushaDobJuly7") {

        alert("❤️ Welcome to Mahesh Website ❤️");

        document.querySelector(".login-box").style.display = "none";
        document.getElementById("gallery").style.display = "block";

        // Browser allow cheste background music play avuthundi
        const music = document.getElementById("music.mp3");
        music.play().catch(() => {});

    } else {

        alert("❌ Invalid Username or Password");
}
const music = document.getElementById("music");

music.play().catch(error => {
    console.log("Music play failed:", error);
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
    
}
