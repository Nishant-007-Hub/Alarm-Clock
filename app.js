console.log("tut 52")
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let ampm = document.getElementById("ampm")
let msg = document.getElementById("msg")


let setalarm = document.getElementById("setalarm")


hour.addEventListener("blur", function () {
    let regex = /(^[0-1][0-9]$|^[2][0-3]$)/
    // here we need numbers till 23 hour only so for input "[0-1][0-9]" means first number will 0 or 1 and second will 0 to 9 whereas after 19 "[2][0-3]" means first number will 2 and second will 0 to 3
    let str = hour.value;

    if (regex.test(str)) {
        hour.classList.remove("is-invalid");
        hour.classList.add("is-valid");
        finalhour = hour.value;
    } else {
        hour.classList.remove("is-valid")
        hour.classList.add("is-invalid")
        finalhour = false;
    }
});
minute.addEventListener("blur", function () {
    let regex = /(^[0-5][0-9]$)/
        // minutes will go first number will 0 to 5 and second will 0 to 9
    let str = minute.value;

    if (regex.test(str)) {
        minute.classList.remove("is-invalid")
        minute.classList.add("is-valid")
        finalminute = minute.value;
    } else {
        minute.classList.remove("is-valid")
        minute.classList.add("is-invalid")
        finalminute = false;
    }
})

    second.addEventListener("blur", function () {
        let regex = /(^[0-5][0-9]$)/
        let str = second.value;
        
        if (regex.test(str)) {
            second.classList.remove("is-invalid")
            second.classList.add("is-valid")
            finalsecond = second.value;
        } else {
            second.classList.remove("is-valid")
            second.classList.add("is-invalid")
            finalsecond = false;
        }
    })
// }

setalarm.addEventListener("click", function () {
    console.log(second.value)
if (hour.value=="" || minute.value=="" || second.value=="") {
    minute.classList.add("is-invalid")
    alert("put value appropriate")
} 
    
   if (finalhour && finalminute && finalsecond) {
    if (ampm.value == "PM") {
        finalhour = (12 + parseInt(hour.value))
       }
    //    if ((finalhour-(new Date().getHours())) < 0) {
    //        Math.abs((finalhour-(new Date().getHours()))
    //    }
       msg.innerHTML += ` <div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
       <strong>Alarm set of ${Math.abs(finalhour-(new Date().getHours()))} hour and ${Math.abs(finalminute-new Date().getMinutes())} minutes from now...</strong>
       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
       <span aria-hidden='true'>&times;</span>
       </button>
       </div> `
        var sett = setInterval(() => {

            let now = new Date();
            // console.log(now)
            let current_hour = now.getHours()
            let current_minute = now.getMinutes()
            let current_second = now.getSeconds()
            if (finalhour == current_hour && finalminute == current_minute && finalsecond == current_second) {
                // console.log("HipHip")
                var audio = new Audio('alarm.mp3');
                audio.play();
                clearInterval(sett);
            }
        }, 1000);
    } else {
        console.warn("not at all")
        alert("put value appropriate")
    }
})