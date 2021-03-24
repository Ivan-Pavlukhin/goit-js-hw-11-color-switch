import './styles.css';
import colors from './colors';
import ref from './refs';

let idInterval;

ref.body.setAttribute('style', localStorage.getItem('color'));

ref.startButton.addEventListener('click', onStartButtonClick);
ref.stopButton.addEventListener('click', onStopButtonClick);

function onStopButtonClick() {
  ref.startButton.addEventListener('click', onStartButtonClick);
  clearInterval(idInterval);
  saveColorInLS();
}

function onStartButtonClick() {
  ref.startButton.removeEventListener('click', onStartButtonClick);
  idInterval = setInterval(changeBackgroundColor, 1000);
}

function changeBackgroundColor() {
  ref.body.setAttribute(
    'style',
    `background-color: ${colors[randomIntegerFromInterval(0, 5)]}`,
  );
}

function saveColorInLS() {
  localStorage.setItem('color', ref.body.getAttribute('style'));
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
