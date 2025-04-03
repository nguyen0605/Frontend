let progress = 0;
let Opacity = document.getElementsByTagName("body")[0];

function updateProgress(value) {
    progress = Math.min(100, Math.max(0, progress + value));
    document.getElementById("progressBar").style.width = progress + "%";

    Opacity.style.opacity = 0.3 + (progress / 100) * 0.7;
}