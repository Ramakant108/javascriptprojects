const week = ["Sun", "Mon", "Tue", "Wed", "THU", "FRI", "SAT"]
const date = document.getElementById("Date");
const Time = document.getElementById("Time");
const getdate = () => {
    const time = new Date();
    date.innerHTML = `${time.getDate()}
    - ${time.getMonth()}
    - ${time.getFullYear()}
     ${week[time.getDay()]} `
    Time.innerHTML = `${time.getHours()}
    : ${time.getMinutes()}
    : ${time.getSeconds()}`
}
getdate()
setInterval(() => {
    getdate()
}, 1000);