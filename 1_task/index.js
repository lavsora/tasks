const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let idInterval;

    const getTimeRemainig = () => {
      let hour = Math.floor(seconds / 60 / 60);
      let minute = Math.floor((seconds / 60) % 60);
      let second = Math.floor(seconds % 60);

      return { seconds , hour, minute, second }
    }

    const addZero = (date) => String(date).padStart(2, '0');

    const updateClock = () => {
      let getTime = getTimeRemainig();

      timerEl.textContent = `${addZero(getTime.hour)}:${addZero(getTime.minute)}:${addZero(getTime.second)}`

      seconds--

      if (getTime.seconds < 0) {
        clearInterval(idInterval);

        timerEl.textContent = `00:00:00`
      }
    }

    updateClock();

    idInterval = setInterval(updateClock, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => e.target.value = e.target.value.replace(/\D+/, ''));

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
