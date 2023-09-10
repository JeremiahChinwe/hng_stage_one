
/* ------------------- Current Day Of The Week ------------------- */
const day = new Date().getUTCDay() 
const currentDayOfTheWeek = document.getElementById("day_of_the_week")

let currenDay
if (day === 0) {
    currenDay = "Sunday"
} else if (day === 1) {
    currenDay = "Monday"
} else if (day === 2) {
    currenDay = "Tuesday"
} else if (day === 3) {
    currenDay = "Wednesday"
} else if (day === 4) {
    currenDay = "Thursday"
} else if (day === 5) {
    currenDay = "Friday"
} else {
    currenDay = "Saturday"
}

currentDayOfTheWeek.textContent = currenDay


/* ------------------ Current UTC Time --------------------------- */
const time = document.getElementById("utc_time")
const currentUTCHour = new Date().getUTCHours()
const currentUTCMinutes = new Date().getUTCMinutes()
const currentUTCSeconds = new Date().getUTCSeconds()
const currentUTCMilliseconds = new Date().getUTCMilliseconds()

time.textContent = `${currentUTCHour} : ${currentUTCMinutes} : ${currentUTCSeconds} : ${currentUTCMilliseconds}`