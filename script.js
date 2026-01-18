document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) {
        console.error("Theme toggle button not found");
        return;
    }

    // Click handler
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        console.log("Theme toggled");

        if (document.body.classList.contains("dark")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }
    });
});
