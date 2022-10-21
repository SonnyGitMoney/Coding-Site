window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    
    let response = document.getElementById("baddy").value;

    if (response === "1") {
      document.getElementById("one").removeAttribute("class");
    }
    else if (response === "2") {
      document.querySelector("div#two").removeAttribute("class");
    }
    else if (response === "3") {
      document.querySelector("div#three").removeAttribute("class");
    }
    else {
      document.querySelector("div#missed").removeAttribute("class");
    }
  };
};