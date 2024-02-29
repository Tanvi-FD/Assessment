setInterval(Result, 1000);

function Result() {

  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let b = new Date();
  let day = days[b.getDay()];
  document.getElementById("R1").innerHTML = day + ',';

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let c = new Date();
  let month = months[c.getMonth()];
  document.getElementById("R2").innerHTML = month + '';

  let d = new Date();
  document.getElementById("R3").innerHTML = d.getDate() + ',';

  let e = new Date();
  document.getElementById("R4").innerHTML = e.getFullYear();
}



setInterval(Timer, 1000);

function Timer() {
  let a = new Date();
  document.getElementById("demo").innerHTML = a.toLocaleTimeString();
  
}
