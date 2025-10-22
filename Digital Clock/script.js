const timeDisplay = document.getElementById('time-display');
const dateDisplay = document.getElementById('date-display');


setInterval(function () {
  let now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  //   console.log(hours + ':' + minutes + ':' + seconds);

  const month = now.toLocaleString('default', { month: 'short' });
  const date = now.getDate();
  const year = now.getFullYear();

//   console.log(month + ' ' + date + ',' + year);

  let currTime = hours + ':' + minutes + ':' + seconds;
  let currDate = month + ' ' + date + ',' + year;

  timeDisplay.innerHTML = currTime;
  dateDisplay.innerHTML = currDate;
}, 1000);

