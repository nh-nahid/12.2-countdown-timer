import "./style.css";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const mins = document.querySelector('.min')
const secs = document.querySelector('.sec')

let currentDate = new Date();

const waitingTime =
  currentDate.getTime() +
  (9 * 24 * 60 * 60 * 1000) +
  (3 * 60 * 60 * 1000) +
  (14 * 60 * 1000) +
  (40 * 1000);

const newDate = new Date(waitingTime);

const setCountDown = () => {
  currentDate = new Date();

  const diffDays = differenceInDays(newDate, currentDate);
  const diffHours = differenceInHours(newDate, currentDate) - (diffDays * 24);
  const diffMin =
    differenceInMinutes(newDate, currentDate) -
    (diffDays * 24 * 60) -
    (diffHours * 60);
  const diffSec =
    differenceInSeconds(newDate, currentDate) -
    (diffDays * 24 * 60 * 60) -
    (diffHours * 60 * 60) -
    (diffMin * 60);


    days.innerHTML = diffDays
    hours.innerHTML = diffHours
    mins.innerHTML = diffMin
    secs.innerHTML = diffSec
};

setInterval(setCountDown, 1000);
setInterval(setCountDown);
