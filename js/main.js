var gHours;
var gMinutes;
var gSeconds;
const time = ()=>{
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var amPm = ' AM'
	if (seconds<10 && seconds>=0) {
		seconds = '0'+seconds;
	}
	if (hour<10 && hour>=0) {
		hour = '0'+hour;
	}
	if (minutes<10 && minutes>=0) {
		minutes = '0'+minutes
	}
	if (hour > 12 && hour>0) {
		hour -= 12;
		amPm = ' PM';
	}else if (hour == 12 && hour>0) {
		amPm = ' PM';
	}

	document.getElementById('time').innerHTML = hour+ ':' + minutes +':'+ seconds+amPm;
	//date.toLocaleTimeString();
}
setInterval(time,1000);

const setAlarm = (hour,minutes,seconds,amPm) =>{
	gMinutes = Number(minutes);
	gSeconds = Number(seconds);
	gHours = Number(hour);
	if (gHours <24 && gHours >= 0 && gMinutes < 60 && gMinutes >= 0 && gSeconds < 60 && gSeconds >= 0) {
		
		if (amPm =='PM') {
			gHours += 12;
		}
		
		if (gSeconds<10 && gSeconds>=0) {

			seconds = '0'+gSeconds;
		}
		if (gMinutes<10 && gMinutes>=0) {
			minutes = '0'+gMinutes;
		}
		if (gHours<10 && gHours>0) {
			hour = '0'+gHours;
		}
		if (gHours > 12 && gHours>0) {
			gHours -= 12;
			amPm = ' PM'
		}else if (gHours == 12 && gHours>0) {
			amPm = ' PM'
		}
		document.getElementById('alarm').innerHTML = gHours+ ':' + minutes +':'+ seconds +' '+amPm;
	}
	else{
		alert("Wrong values. Try again");
	}
}
const checkTime = ()=>{
	var d = new Date();

	if (gHours == d.getHours() && gMinutes ==d.getMinutes() && gSeconds == d.getSeconds()) {
		var audio = new Audio('audio/alarm.mp3');
		audio.play();
		alert(`It's ${d.toLocaleTimeString()}!`);
		var e = document.getElementById("alarm");
		e.classList.add("glow");
	}
}
setInterval(checkTime,1000);
