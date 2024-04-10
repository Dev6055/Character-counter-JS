const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-conter");
let remainingCoutn = document.getElementById("remaining-counter");

let userChar = 0;

// to update the character on screen
const updateCounter = () => {
  userChar = charval.value.length;

  totalCount.innerText = userChar;

  remainingCoutn.innerText = 150 - userChar;
};

charval.addEventListener("keyup", () => updateCounter());

// to copy the text
const copyText = () => {
  charval.select();
  charval.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(charval.value);
};


// ADDING voice sound functionality
// web api interface for voice 
// refrence greatstack how to make text to voice video 

let speech = new SpeechSynthesisUtterance();

document.querySelector(".sound-btn").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
})


// Key points 
// Using copying functionality of navigator object & web api interface for voice functionality 

Character-counter-JS

// Character counter made using Html , Css and Javascript. This project gives a glimpse of Javascript concepts like copying functionality of navigator object & web api interface implementation for voice functionality.


// Quiz-Game-JS

// Quiz Game using Html , Css and Javascript. This project gives a glimpse of concepts like DOM handling and Event listeners.