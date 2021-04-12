// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHeart = document.querySelectorAll(".like-glyph")
const errorMsg = document.querySelector("#modal")



likeHeart.forEach(function(element){
  let trueHeart = false
    element.addEventListener('click', function(){
      
      mimicServerCall()
      .then(() => {
        if (!trueHeart){
          trueHeart = true
          element.innerText = FULL_HEART
          element.classList.add("activated-heart")
        }else{
          trueHeart = false
          element.innerText = EMPTY_HEART
          element.classList.remove("activated-heart")        
        }
      })
      
      .catch(() => {
        errorMsg.classList.remove("hidden")
        setTimeout(function(){
          errorMsg.classList.add("hidden")
        }, 3000)
      })
    })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
