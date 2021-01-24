const refs = {
  valueDays: document.querySelector('.value[data-value="days"]'),
  valueHours: document.querySelector('.value[data-value="hours"]'),
  valueMins: document.querySelector('.value[data-value="mins"]'),
  valueSecs: document.querySelector('.value[data-value="secs"]'),
  btnTimer: document.querySelector('button[data-action-change]'),
  alertMessage: document.querySelector('.js-alert'),
};

// console.log(refs.alertMessage.textContent);
// refs.alertMessage.textContent = 'asdsad';
refs.btnTimer.addEventListener('click', onBtnClickHandler);
// refs.alertMessage.style.color = 'red';
refs.alertMessage.style.fontSize = '30px';

let isActive = false;

const targetDate = Date.now() + 10000;
let intervalId = setInterval(() => {
  const currentTime = Date.now();
  const deltaTime = targetDate - currentTime;
  if (currentTime >= targetDate) {
    clearInterval(intervalId);
    updateClockface(0);
    refs.alertMessage.textContent = `По истечении таймера можно вставить модалку или любой popup с рекламой и прочим.`;

    // alert(
    //   'Вместо алерта можно вставить модалку или любой popup с рекламой и прочим',
    // );
    return;
  }

  updateClockface(deltaTime);
}, 1000);

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.valueDays.textContent = `${days}`;
  refs.valueHours.textContent = `${hours}`;
  refs.valueMins.textContent = `${mins}`;
  refs.valueSecs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function onBtnClickHandler() {
  if (isActive) {
    clearInterval(intervalId);
    intervalId = null;
    const targetDate = Date.now() + 10000;
    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      if (currentTime >= targetDate) {
        clearInterval(intervalId);
        updateClockface(0);
        refs.alertMessage.textContent =
          'Вместо алерта можно вставить модалку или любой popup с рекламой и прочим';
        // alert(
        //   'Вместо алерта можно вставить модалку или любой popup с рекламой и прочим',
        // );
        return;
      }
      updateClockface(deltaTime);
    }, 1000);
    isActive = false;
    return;
  }

  if (!isActive) {
    clearInterval(intervalId);
    isActive = true;
    intervalId = null;
    intervalId = setInterval(() => {
      const targetDate = new Date('Jan 30, 2022 21:08:50');
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      if (currentTime >= targetDate) {
        clearInterval(intervalId);
        updateClockface(0);
        // alert(
        //   'Вместо алерта можно вставить модалку или любой popup с рекламой и прочим',
        // );
        return;
      }

      updateClockface(deltaTime);
    }, 1000);
  }
}
