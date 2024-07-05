const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".modeSwitch");
modeSwitch.addEventListener("click",() =>{
    body.classList.toggle("dark");
});
const updateTime=()=>{
    let date=new Date();
    secToDeg = (date.getSeconds()/60) * 360;
    minToDeg = (date.getMinutes()/60) *360;
    hrToDeg = (date.getHours()/60)*360;
    console.log(`updateTime ${minToDeg} ${secToDeg}`);
   secondHand.style.transform=`rotate(${secToDeg}deg)`;
   minuteHand.style.transform=`rotate(${minToDeg}deg)`;
   hourHand.style.transform=`rotate(${hrToDeg}deg)`;
};
setInterval(updateTime,1000);
updateTime();
