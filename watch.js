
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let watch = false;


function start(){
    watch = true;
    stopWatch();
}

function stop(){
    watch = false;
}

function lapTime(){
    watch = true; 
    lapNow =   (hr < 10 ? '0' : '') + hr+"Hr : " + (min < 10 ? '0' : '') + min+"Min : " + (sec < 10 ? '0' : '') + sec+"Sec : " + (count < 10 ? '0' : '') + count;
    document.getElementById("lapItem").innerHTML = document.getElementById("lapItem").innerHTML + "<p>" + lapNow + "</p>";
}

function reset(){
    watch = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("sec").innerHTML = "0"+sec;
    document.getElementById("min").innerHTML = "0"+min;
    document.getElementById("hr").innerHTML = "0"+hr;
    document.getElementById("count").innerHTML = "0"+count;
    document.getElementById('lapItem').innerHTML=""; 
}

function stopWatch(){
    if(watch === true){
        count++;
        if(count === 100){
            sec++;
            document.getElementById("sec").innerHTML = (sec < 10 ? '0' : '') + sec;
            count = 0;
        }
        if(sec === 60){
            min++;
            document.getElementById("min").innerHTML =(min < 10 ? '0' : '') + min;
            sec = 0;
        }
        if(min === 60){
            hr++;
            document.getElementById("hr").innerHTML = (hr < 10 ? '0' : '') + hr;
            min = 0;
        }
        document.getElementById("count").innerHTML = (count < 10 ? '0' : '') + count;
        setTimeout("stopWatch()",10);
       }
}