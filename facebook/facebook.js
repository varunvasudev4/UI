var dayops = "";
for (var i = 1; i <= 31; i++) {
	dayops += "<option value='"+i+"'>"+i+"</option>";
}
document.getElementById("days").innerHTML = dayops;

var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var monops = "";
for (i of months) {
	monops += "<option value='"+i+"'>"+i+"</option>";
}
document.getElementById("mons").innerHTML = monops;

var yrops = "";
for (var i = 1970; i <= 2020; i++) {
	yrops += "<option value='"+i+"'>"+i+"</option>";
}
document.getElementById("yrs").innerHTML = yrops;

function sele() {
	document.getElementById("prnn").style.display="inline-block";
	document.getElementById("cgen").style.display="inline-block";
	document.getElementById("final").style.top = "600px";
	document.getElementsByTagName("section")[0].style.height="700px";
}
function nosele() {
	document.getElementById("prnn").style.display="none";
	document.getElementById("cgen").style.display="none";
	document.getElementById("final").style.top = "490px";
	document.getElementsByTagName("section")[0].style.height="590px";
}

var pronouns = ["Select your pronoun",
				"She:\"Wish her a happy birthday!\"",
				"He:\"Wish him a happy birthday!\"",
				"They:\"Wish them a happy birthday!\""];
var props = "";
for(i of pronouns){
	props += "<option value='"+i+"'>"+i+"</option>";
}
document.getElementById("pronoun").innerHTML = props;
//var lang = ["English","தமிழ்","മലയാളം","తెలుగు","मराठी","हिन्दी"];

