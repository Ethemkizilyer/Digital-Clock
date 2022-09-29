const tarif = document.querySelector(".tarih");
const üst = document.querySelector(".üst");
const alt = document.querySelector(".alt");
const span = document.querySelector("span");

let now = new Date();
let month = new Array();
month[0] = "OCAK";
month[1] = "ŞUBAT";
month[2] = "MART";
month[3] = "NİSAN";
month[4] = "MAYIS";
month[5] = "HAZİRAN";
month[6] = "TEMMUZ";
month[7] = "AĞUSTOS";
month[8] = "EYLÜL";
month[9] = "EKİM";
month[10] = "KASIM";
month[11] = "ARALIK";
let tarih = `${now.toLocaleString().slice(0, 10).split("-").reverse()}`;
tarih = `${now.toLocaleString().slice(0, 2)} ${
  month[now.getMonth()]
} ${now.getFullYear()}`;


let hour =now.getHours();

let hourkey = hour;

let min = now.getMinutes();

let sec = now.getSeconds();
let zam = " AM ";

const bakar = function sas() {
  
   if (hourkey > 23) {
     hour = 0;
     hourkey = 0;
   }
   if (hourkey >= 12) {
     zam = " PM ";
   } else {
     zam = " AM ";
   }

   if (hour == 13) {
     hour = 1;
   }

  if (sec == 59) {
    sec = -1;
    min += 1;
    if (min > 59) {
      min = 0;
      hour += 1;
      hourkey += 1;
      if (hour > 23) {
        hour = 0;
      }
    }
  }
  sec += 1;

  
  üst.innerText = tarih;
  alt.innerText = `${String(hour).padStart(2, "0")}:${String(min).padStart(
    2,
    "0"
  )}:${String(sec).padStart(2, "0")} `;
span.innerText = zam;
};
setInterval(bakar, 1000);
console.log(hourkey);
console.log(hour);