const heartIcons = document.querySelectorAll(".fa-heart");
const heartCounter = document.getElementById("heart-count");
let heartCount = 0;
for(let heartIcon of heartIcons){
  heartIcon.addEventListener("click", function(){
    heartCount++;
    heartCounter.textContent = heartCount;
    
    
  });
};
const coinCount = document.getElementById("coin-count");
const callButtons = document.querySelectorAll(".call-btn");
const callHistoryList = document.getElementById("call-history-list");
const clearBtn = document.getElementById("clear-history");

for (let btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card-body");
    const serviceName = card.querySelector(".card-title").innerText;
    const serviceNumber = card.querySelector("h1").innerText;
    let coins = +coinCount.innerText;

    if (coins < 20) {
      alert("Not enough coins!");
      return;
    }

coinCount.innerText = coins - 20;
alert(`Calling ${serviceName} at ${serviceNumber}`);
const li = document.createElement("li");
const nameSn = document.createElement("div");
nameSn.textContent = serviceName;
nameSn.classList.add("font-semibold", "text-black");

const numberEl = document.createElement("div");
numberEl.textContent = serviceNumber;
numberEl.classList.add("text-black", "text-sm");

const timeEl = document.createElement("div");
const now = new Date();
const timeString = now.toLocaleTimeString(); 
timeEl.textContent = `Time: ${timeString}`;
timeEl.classList.add("text-black", "text-xs");

li.append(nameSn);
li.append(numberEl);
li.append(timeEl);


callHistoryList.append(li);

  });
}

clearBtn.addEventListener("click", function () {
  callHistoryList.innerHTML = "";
});
const copyIcons = document.getElementsByClassName("btn-copy");
const copyCounter = document.getElementById("copy-count");
let copyCount = 0;
for(let copyIcon of copyIcons){
  copyIcon.addEventListener("click", function(){
copyCount++;
 copyCounter.textContent = copyCount;
const card = copyIcon.closest(".card-body");
const hotlineNumber = card.querySelector("h1").innerText;
navigator.clipboard.writeText(hotlineNumber).then(()=>{
        alert(`Copied: ${hotlineNumber}`);
      })
    
    
  });
};
