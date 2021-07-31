var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    
    let acor = this.getAttribute("accordion")
    let ic = document.getElementById(acor)
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        ic.classList.remove("fa-angle-down")
        ic.classList.add("fa-angle-right")
        panel.style.display = "none";
    } else {
        ic.classList.remove("fa-angle-right")
        ic.classList.add("fa-angle-down")
        panel.style.display = "block";
    }
  });
}