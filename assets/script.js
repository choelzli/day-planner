var today = dayjs().format('dddd, MMM D, YYYY');
$('#currentDay').text(today);

const nineAM = dayjs().set('hour', 9).format('H');
const nineam = document.getElementById("hour-9")

const tenAM = dayjs().set('hour', 10).format('H');
const tenam = document.getElementById("hour-10")

const elevenAM = dayjs().set('hour', 11).format('H');
const elevenam = document.getElementById("hour-11")

const twelvePM = dayjs().set('hour', 12).format('H');
const twelvepm = document.getElementById("hour-12")

const onePM = dayjs().set('hour', 13).format('H');
const onepm = document.getElementById("hour-13")

const twoPM = dayjs().set('hour', 14).format('H');
const twopm = document.getElementById("hour-14")

const threePM = dayjs().set('hour', 15).format('H');
const threepm = document.getElementById("hour-15")

const fourPM = dayjs().set('hour', 16).format('H');
const fourpm = document.getElementById("hour-16")

const fivePM = dayjs().set('hour', 17).format('H');
const fivepm = document.getElementById("hour-17")

const workHours = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];
const workHoursDisplay = [nineam, tenam, elevenam, twelvepm, onepm, twopm, threepm, fourpm, fivepm];


function hourCheck() {
  let currentHour = parseInt(dayjs().format('H'));

  for (var i = 0; i < workHours.length; i++) {
    if (workHours[i] == currentHour) {
      workHoursDisplay[i].classList.add("present")
    } else if (workHours[i] > currentHour) {
      workHoursDisplay[i].classList.add("future")
    } else if (workHours[i] < currentHour) {
      workHoursDisplay[i].classList.add("past")
    }
  }
}

const saveBtn = document.querySelectorAll(".saveBtn");
let textSaveArray = [];

function saveEvent() {
  const hourSave = $(this).parent().attr('id');
  const textSave = $(this).parent().children('.description').val();

  const saveArray = {
    hourSelected: hourSave,
    textSelected: textSave
  };
  textSaveArray.push(saveArray);

  localStorage.setItem("storedText", JSON.stringify(textSaveArray));
}

function renderStorage() {
  const storedText = JSON.parse(localStorage.getItem("storedText"));
  if (storedText !== null) {
    textSaveArray = storedText;

    for(let j = 0; j < storedText.length; j++) {
      let renderText = storedText[j];
      let renderHour = renderText.hourSelected;
      $('#' + renderHour).children('.description').val(renderText.textSelected);
    }
  }
}

saveBtn.forEach((button) => {
  button.addEventListener("click", saveEvent);
});


window.onload = () => {
  hourCheck();
  renderStorage();
}