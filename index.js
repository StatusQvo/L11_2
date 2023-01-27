const convertMsToDays = (daysMs)=>{
    return Math.round(daysMs/1000/60/60/24)
}

const getDaysBeforeBirthday = (nextBirthdayDate)=>{
    if (!(nextBirthdayDate instanceof Date)) return "Введенное значение дня рождения не является датой!"
    let userDateMS = nextBirthdayDate.getTime()
    let dateNow = Date.now()
       return convertMsToDays(userDateMS - dateNow)
}

console.log(getDaysBeforeBirthday(new Date(23)))