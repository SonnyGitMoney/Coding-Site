window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let response = document.getElementById("animal").value;



    if (response === "badger") {
      document.getElementById("badger").removeAttribute("class");
    }
    else if (response === "lep") {
      document.querySelector("div#lep").removeAttribute("class");
    }
    
    else if (response === "wheel") {
      document.querySelector("div#wheel").removeAttribute("class");
    }
    else {
      document.querySelector("div#missed").removeAttribute("class");
    }
  
  
  };
};