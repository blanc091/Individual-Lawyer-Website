window.addEventListener("load", function () {
  function addScrollListener(triggerId, targetId) {
    var trigger = document.getElementById(triggerId);
    if (trigger) {
      trigger.addEventListener("click", function () {
        var target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }
  
  addScrollListener("homeTrigger", "homeSection");
  addScrollListener("aboutTrigger", "aboutSection");
  
  addScrollListener("contactTrigger", "contactMe");
  for (let i = 2; i <= 7; i++) {
    addScrollListener("contactTrigger" + i, "contactMe");
  }
});