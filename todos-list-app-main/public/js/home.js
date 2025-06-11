const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]


const date = new Date()
document.querySelector('#current_date').textContent = days[date.getDay()] + " " + date.getDate() + "/" + date.getMonth() + "/" + date.getYear()
sessionStorage.setItem('date', days[date.getDay()] + " " + date.getDate() + "/" + date.getMonth() + "/" + date.getYear())

 window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#current_date').textContent = sessionStorage.getItem('date')
 })