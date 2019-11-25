document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    var trucks = document.querySelectorAll(".trucks-wrapper li");
    trucks.forEach(function(truck) {
      truck.className = "";
      console.log("loop: ", truck);
    });
    var activeTruck = trucks[Math.floor(Math.random() * trucks.length)];
    activeTruck.className = "active";
    console.log("active: ", activeTruck);
  }, 10000);
});
