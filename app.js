// indian watch
let indianWatch = ()=> {
	let options = {timeZone :'Asia/Kolkata'};
	let currentDate = new Date().toLocaleDateString('en-US',options);
	let currentTime = new Date().toLocaleTimeString('en-US',options);
	document.querySelector('#indian-date').innerText=currentDate;
	document.querySelector('#indian-time').innerText=currentTime;


};
setInterval(indianWatch,1000);


//USA Watch

let usaWatch = ()=> {
	let options = {timeZone :'America/New_York'};
	let currentDate = new Date().toLocaleDateString('en-US',options);
	let currentTime = new Date().toLocaleTimeString('en-US',options);
	document.querySelector('#usa-date').innerText=currentDate;
	document.querySelector('#usa-time').innerText=currentTime;


};
setInterval(usaWatch,1000);


// China Watch
let chinaWatch = ()=> {
	let options = {timeZone :'Asia/Shanghai'};
	let currentDate = new Date().toLocaleDateString('en-US',options);
	let currentTime = new Date().toLocaleTimeString('en-US',options);
	document.querySelector('#China-date').innerText=currentDate;
	document.querySelector('#China-time').innerText=currentTime;


};
setInterval(chinaWatch,1000);


