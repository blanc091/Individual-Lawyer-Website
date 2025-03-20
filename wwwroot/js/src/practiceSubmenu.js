window.addEventListener("load", function () {
    const practiceTrigger = document.getElementById("practiceTrigger");
    const practiceSubmenu = document.getElementById("practiceSubmenu");

    if (practiceTrigger) {
        practiceTrigger.addEventListener("click", function (e) {
            e.preventDefault();
            if (practiceSubmenu.style.display === "none" || practiceSubmenu.style.display === "") {
                practiceSubmenu.style.display = "block";
            } else {
                practiceSubmenu.style.display = "none";
            }
        });
    } else {
        console.log("practiceTrigger not found");
    }

    const practiceItems = document.querySelectorAll(".practice-item");
    practiceItems.forEach(item => {
        item.addEventListener("click", function (e) {
            console.log("Practice item clicked:", this.textContent);
            e.preventDefault();
            const targetId = this.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
            practiceSubmenu.style.display = "none";
        });
    });
});
