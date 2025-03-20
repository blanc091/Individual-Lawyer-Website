window.addEventListener("load", function () {
    const practiceTrigger = document.getElementById("practiceTrigger");
    const practiceSubmenu = document.getElementById("practiceSubmenu");

    // Add click event to the practiceTrigger to toggle the submenu
    if (practiceTrigger) {
        practiceTrigger.addEventListener("click", function (e) {
            // Prevent any default behavior (if needed)
            e.preventDefault();
            // Toggle the submenu display
            if (practiceSubmenu.style.display === "none" || practiceSubmenu.style.display === "") {
                practiceSubmenu.style.display = "block";
            } else {
                practiceSubmenu.style.display = "none";
            }
        });
    } else {
        console.log("practiceTrigger not found");
    }

    // Attach click event for submenu items
    const practiceItems = document.querySelectorAll(".practice-item");
    practiceItems.forEach(item => {
        item.addEventListener("click", function (e) {
            console.log("Practice item clicked:", this.textContent);
            e.preventDefault(); // Not strictly needed for a span, but safe to include.
            const targetId = this.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
            // Hide submenu after click
            practiceSubmenu.style.display = "none";
        });
    });
});
