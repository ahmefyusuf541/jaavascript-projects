
let ms=0;
let s=0;
let m=0;
let h=0;
let laps= 1;
let runing = "";
let starter = document.getElementById('startbtn');
let stoper = document.getElementById('stopbtn');
let reseter = document.getElementById('resetbtn');
let laper = document.getElementById('lapbtn');
function play(){
ms++;
if(ms>99){
	ms=0;
	s++;
	if(s>59){
	s=0;
		m++;
		if(m>59){
		m=0;
			h++;
			if(h>59){
			h=0;
			}
		}
	}
}
ms = ms<10?("0"+ms).slice(-2):ms
s = s<10?("0"+s).slice(-2):s
m = m<10?("0"+m).slice(-2):m
h = h<10?("0"+h).slice(-2):h
time = h+" : "+m+" : "+s+" : "+ms
document.getElementById("timer").innerHTML=time
}
function start(){
stoper.disabled = false;
starter.disabled = true;
reseter.disabled = false;
laper.disabled = false;
runing = setInterval(play,10)
}
function stop(){
clearInterval(runing)
stoper.disabled = true;
starter.disabled = false;
}
function lap(){
var newlap = "Lap "+laps+" -> "+document.getElementById("timer").innerHTML
li = document.createElement('div')
li.appendChild(document.createTextNode(newlap));
document.getElementById("lapsec").appendChild(li);
laps++;
}
function reset(){
stop();
reseter.disabled = true;
laper.disabled = true;
ms =0
s=0
m=0
h=0
document.getElementById("timer").innerHTML="00:00:00:00"
document.getElementById("lapsec").innerHTML="<h1>Laps</h1>"
}
