window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let response = document.getElementById("baddy").value;



    if (response === "one") {
      document.getElementById("one").removeAttribute("class");
    }
    else if (response === "two") {
      document.querySelector("div#two").removeAttribute("class");
    }
    
    else if (response === "three") {
      document.querySelector("div#three").removeAttribute("class");
    }
    else {
      document.querySelector("div#missed").removeAttribute("class");
    }
  
  
  };
};