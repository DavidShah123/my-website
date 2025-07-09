function sayHello() {
    alert("Hello! You're learning JavaScript 🎉");
}

function changeBackground() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const colors = ["#f2f2f2", "#d4edda", "#fff3cd", "#f8d7da", "#d1ecf1", "#e2e3e5"];
    return colors[Math.floor(Math.random() * colors.length)];
}

let darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#ffffff";
    } else {
        document.body.style.backgroundColor = "#f2f2f2";
        document.body.style.color = "#000000";
    }
}

function showTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("timeDisplay").innerText = "Current Time: " + time;
}

let count = 0;

function increaseCounter() {
    count++;
    document.getElementById("counter").innerText = count;
}

function resetCounter() {
    count = 0;
    document.getElementById("counter").innerText = count;
}
