window.onload = function () {
  const form = document.querySelector("form");

  form.onsubmit = function (event) {
    event.preventDefault();

    const response = document.getElementById("questionBadass").value;
    const answerOne = document.getElementById("answerOne");
    const answerTwo = document.getElementById("answerTwo");
    const answerThree = document.getElementById("answerThree");
    const answerMissed = document.getElementById("answerMissed");
    
    answerOne.classList.add("hidden");
    answerTwo.classList.add("hidden");
    answerThree.classList.add("hidden");
    answerMissed.classList.add("hidden");

    if (response === "1") {
      answerOne.removeAttribute("class");
    }
    else if (response === "2") {
      answerTwo.removeAttribute("class");
    }
    else if (response === "3") {
      answerThree.removeAttribute("class");
    }
    else {
      answerMissed.removeAttribute("class");
    }
  };
};