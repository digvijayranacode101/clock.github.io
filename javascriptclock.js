const secondHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
 const now = new Date();
 const seconds = now.getSeconds();
 const mins = now.getMinutes();
 const hours = now.getHours();
 const secondsDegrees = (((seconds/60)*360)+90);
 const minDegrees = (((mins/60)*360)+90);
 const hourDegrees = (((hours/12)*360)+90);
 secondHand.style.transform = 'rotate('+secondsDegrees+'deg)';
 minHand.style.transform = 'rotate('+minDegrees+'deg)';
 hourHand.style.transform = 'rotate('+hourDegrees+'deg)';
 const x = document.querySelector('.sec-hand'); 
 const y = document.querySelector('.hour-hand');
 x.style.background = " red ";
 x.style.height= "2px";
 y.style.height= "10px";
 console.log(minDegrees);
 
 }

setInterval(setDate,1000);