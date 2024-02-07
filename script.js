const countDownDate = new Date("2024-05-04").getTime();

let intervall = setInterval(function() {
  let now = new Date().getTime(); //todays time
  //console.log(intervall);
  let distance = countDownDate - now; //distance between now and count date

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("countDownTimer").innerHTML = days + "d" + hours + "h" + minutes + "m";

  if (distance < 0) {
    clearInterval(intervall);
    document.getElementById("countDownTimer").innerHTML = "Event is over";

}
}, 500);
console.log(distance);


  /* const days = Math.floor(distance / (24 * 60 * 60 * 1000));
  const hours = Math.floor(distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000);
  const minutes = Math.floor(distance % (60 * 60 * 1000)) / (60 * 1000);
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); */