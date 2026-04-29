const aim = document.getElementById("aim");
const wall = document.getElementById("wall");
const speed = document.getElementById("speed");

aim.addEventListener("change", () => {
    document.getElementById("aimStatus").textContent = aim.checked ? "ON" : "OFF";
});

wall.addEventListener("change", () => {
    document.getElementById("wallStatus").textContent = wall.checked ? "ON" : "OFF";
});

speed.addEventListener("input", () => {
    document.getElementById("speedValue").textContent = speed.value;
});

function baixar() {
    const config = {
        aim: aim.checked,
        wall: wall.checked,
        speed: speed.value
    };

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "config.json";
    a.click();
}