document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("villageCanvas");
    const ctx = canvas.getContext("2d");
    const timeDisplay = document.getElementById("time");
    const addTimeButton = document.getElementById("addTime");

    let sessionTime = 0; // Local variable to track session time

    function updateVillage() {
        timeDisplay.textContent = sessionTime;
        drawVillage(sessionTime);
    }

    function drawVillage(time) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Grass
        ctx.fillStyle = "green";
        ctx.fillRect(0, 250, 300, 50);

        // Main house
        ctx.fillStyle = "brown";
        ctx.fillRect(130, 200, 40, 50);

        // Additional elements as time increases
        if (time > 5) ctx.fillRect(50, 210, 30, 40); // House 2
        if (time > 10) ctx.fillRect(220, 210, 30, 40); // House 3
        if (time > 15) ctx.fillStyle = "yellow", ctx.fillRect(90, 230, 30, 30); // Farm
        if (time > 20) ctx.fillStyle = "darkgreen", ctx.fillRect(170, 230, 30, 30); // More trees
    }

    // Button to add time manually
    addTimeButton.addEventListener("click", () => {
        sessionTime += 5; // Adds 5 minutes per click
        updateVillage();
    });

    updateVillage(); // Initial village render
});
