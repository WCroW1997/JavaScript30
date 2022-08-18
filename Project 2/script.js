const clock = document.getElementById('clock')

const getTime = () =>{
    let now = new Date()
    let hour = now.getHours()
    let minuts = now.getMinutes()
    let second = now.getSeconds()
    if (second < 10 && minuts < 10){
        let time = `${hour}:0${minuts}:0${second}`
        clock.textContent = time
    } else if (second < 10) {
        let time = `${hour}:${minuts}:0${second}`
        clock.textContent = time
    } else if(minuts < 10){
        let time = `${hour}:0${minuts}:${second}`
        clock.textContent = time
    } else{
        let time = `${hour}:${minuts}:${second}`
        clock.textContent = time
    }
    console.log(clock.textContent);
}

setInterval(() => {
    getTime()

}, 1000);