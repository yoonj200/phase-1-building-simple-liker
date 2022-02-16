// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal");

hideError();

document.addEventListener("DOMContentLoaded", () => {
  //const errorModal = document.querySelector("#modal"); --------------- already declared line 6 
  console.log("DOM Content has loaded!");
  //errorModal.classList.toggle('hidden'); -------------- already called hideError() line 8

  clickListener();
});

function hideError() {
  errorModal.classList.toggle('hidden');
}

function clickListener() {
  document.addEventListener('click', (event) => {
    if (event.target.classList[0] === 'like-glyph') {
      //PROMISE, async we need a .then
      
      mimicServerCall()
        .then(resp => {
          const activated = event.target.classList.contains("activated-heart");
          if(activated) {
            event.target.classList.remove("activated-heart")
            event.target.innerHTML = EMPTY_HEART
          } else {
            event.target.classList.add("activated-heart")
            event.target.innerHTML = FULL_HEART
            //use toggle() instead of add()
            //add() might add the class multiple times
          }
        })
        .catch(error => { 
          setTimeout(() => {
            hideError()
          }, 3000)
          }) // PROMISE FAILS, .catch -> catches it
      }
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
