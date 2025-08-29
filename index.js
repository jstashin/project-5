const heartIcons = document.querySelectorAll(".fa-heart");
const heartCounter = document.getElementById("heart-count");
let heartCount = 0;
for(let heartIcon of heartIcons){
  heartIcon.addEventListener("click", function(){
    heartCount++;
    heartCounter.textContent = heartCount;
    
    
  });
};
