const second=document.querySelector('.second')
const minute=document.querySelector('.minute')
const hour=document.querySelector('.hour')
const secondHand=document.querySelector('.second-hand')
const minuteHand=document.querySelector('.min-hand')
const hourHand=document.querySelector('.hour-hand')

const setDigitalTime=()=>{
    const now =new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    second.innerHTML =`<h1>${seconds}</h1>`
    minute.innerHTML =`<h1>${minutes}</h1>`
    hour.innerHTML =`<h1>${hours}</h1>`

}
const setTime=()=>{
    const now =new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegree=((seconds/60)*360)+90;
    const minutesDegree=((minutes/60)*360)+90;
    const hoursDegree=((hours/12)*360)+90;
    secondHand.style.transform=`rotate(${secondsDegree}deg)`
    minuteHand.style.transform=`rotate(${minutesDegree}deg)`
    hourHand.style.transform=`rotate(${hoursDegree}deg)`

}

setInterval(setTime,1000);

setInterval(setDigitalTime,1000);