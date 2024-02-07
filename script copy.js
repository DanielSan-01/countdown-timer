


setInterval(() => {
  console.clear();
  const timer = new.date();
  console.log(`the time now, in milliseconds is: ${d.getTime()}`);
}, 5000)

const d = new Date("2015-03-25");

const months = [
  "January", "February", "March",  "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date("2024-02-26");
let month = months[d.getMonth()]; // "February"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date("2027-08-02");
let day = days[d.getDay()]; // "Monday"


/* codepen fra lassi
setInterval (() => {
  console.clear();
   const d = new.date();
   console.log (`The time now, in millisecons is: ${d.getTime()}`); 
 }, 5000)
 
  */