const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector("minute"),
    secondHand = document.querySelector("second"),
    modeSwitch = document.querySelector(".modeSwitch");
modeSwitch.addEventListener("click",() =>{
    body.classList.toggle("dark")
})
const updateTime=()=>{
    let date=new Date()
    secToDeg = (date.getSeconds()/60) * 360;
    minToDeg = (date.getMinutes()/60) *360;
    hrToDeg = (date.getHours()/60)*360;
   // console.log(secToDeg)
   secondHand.style.transform=`rotate(${secToDeg})`;
   minuteHand.style.transform=`rotate(${minToDeg})`
   hourHand.style.transform=`rotate(${hrToDeg})`
}
setInterval(updateTime,1000);
updateTime();
