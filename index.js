
const display = document.getElementById("Display");
let timer = null;
let startTime= 0;
let passTime= 0;
let isRunning = false;


function start(){
    if(!isRunning){
        startTime = Date.now()-passTime;    
        timer = setInterval(update,10);
        isRunning=true;

    }
    
}

function stop(){
 if(isRunning){
    clearInterval(timer);
    isRunning=false;
 }

}

function reset(){
    clearInterval(timer);
    startTime=0;
    passTime=0;
    display.textContent="00:00:00:00";
    isRunning=false;
    }




function update(){
    const curr = Date.now();
    passTime = curr-startTime;
    let hours = Math.floor(passTime/(1000 * 60 * 60));
    let minutes = Math.floor(passTime/(1000 * 60) % 60);
    let seconds = Math.floor(passTime / 1000 % 60);
    let milliseconds = Math.floor(passTime % 1000 / 10);
  
    hours=hours.toString().padStart(2,0);
    minutes=minutes.toString().padStart(2,0);
    seconds=seconds.toString().padStart(2,0);
    milliseconds=milliseconds.toString().padStart(2,0);
   
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;


}

