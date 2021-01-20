const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  resetBtn: document.querySelector('button[data-action-reset]'),
  bodyRef: document.body,
};

const colorSwitcher = {
  intervalId: null,
  isActive: false,
  start() {
    refs.startBtn.disabled = true;
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      let integer = randomIntegerFromInterval(0, Number(colors.length));
      refs.bodyRef.style.backgroundColor = colors[integer];
    }, 1000);
  },
  stop() {
    refs.startBtn.disabled = false;
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
  },
};

refs.startBtn.addEventListener(
  'click',
  colorSwitcher.start.bind(colorSwitcher),
);
refs.stopBtn.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));
refs.resetBtn.addEventListener(
  'click',
  () => (refs.bodyRef.style.backgroundColor = 'whitesmoke'),
);
