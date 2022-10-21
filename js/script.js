window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
  
let response = document.getElementById("baddy").value;


if (response === "1") {
    document.getElementById("div#lan1").removeAttribute("class");
}
else if (response === "2") {
    document.querySelector("div#lan2").removeAttribute("class");
}
else if (response === "3") {
    document.querySelector("div#lan3").removeAttribute("class");
}
else {
    document.querySelector("div#sorry").removeAttribute("class");
}
    
    
    };
};