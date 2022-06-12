const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

export const getDate = (data) => {
    let minutes = data.getUTCMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return {
        monthName: data.getDate() + ' ' + months[data.getMonth()],
        dayName: days[data.getDay()],
        time: data.getUTCHours() + ':' + minutes
    }
}