const title = document.querySelector("#title");
const parraph = document.querySelector("#parraph");

let watch = () => {
  let date = new Date();
  const hr = formatTime(date.getHours());
  const min = formatTime(date.getMinutes());
  const sec = formatTime(date.getSeconds());

  title.innerHTML = `${hr}:${min}:${sec}`;

  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  const dayWeek = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  parraph.innerHTML = `${dayWeek}, ${day} ${month}`;
};

const formatTime = (hour) => {
  if (hour < 10) hour = `0${hour}`;
  return hour;
};

setInterval(watch, 1000);
