var slides=[
	"01-best-of-swissweb-en/index.xhtml",
	"02-timeline-en/index.xhtml",
	"03-1998-cern-en/index.xhtml",
	"04-dates-en/index.xhtml",
	"05-price-en/index.xhtml",
	"06-pbld-en/index.xhtml",
	"07-pbld-en/index.xhtml",
	"08-pbld-en/index.xhtml",
	"09-pbld-en/index.xhtml",
	"10-pbld-en/index.xhtml",
	"11-pbld-en/index.xhtml",
	"12-ten24-en/index.xhtml",
	"13-timeline-en/index.xhtml",
	"14-beginning-en/index.xhtml",
	"15-beginning-en/index.xhtml",
	"16-beginning-en/index.xhtml",
	"17-web-en/index.xhtml",
	"18-vague-en/index.xhtml",
	"19-next-en/index.xhtml",
	"20-next-en/index.xhtml",
	"20a-next-en/index.xhtml",
	"21-worldwide-en/index.xhtml",
	"22-public-en/index.xhtml",
	"23-conference-en/index.xhtml",
	"24-timeline-en/index.xhtml",
	"25-rc-en/index.xhtml",
	"26-rc-en/index.xhtml",
	"27-rc-en/index.xhtml",
	"28-rc-en/index.xhtml",	
	"29-licenses-en/index.xhtml"	
]

function slideBack() {
	var current=window.location.href;
	var breakme=false;
	var prevslide=slides[slides.length-1];
	var thisslide="";
	for (var a in slides) {


		if (current.indexOf(slides[a])>=0) {
			thisslide=slides[a];
			break;
			}
		prevslide=slides[a];
		}
	window.location.href=current.substring(0,current.indexOf(thisslide))+prevslide;
}


function slideForward() {
	var current=window.location.href;
	var breakme=false;
	var nextslide=slides[0];
	var thisslide="";
	for (var a in slides) {

		if (breakme) {
			nextslide=slides[a];
			break;
		}

		if (current.indexOf(slides[a])>=0) {
				thisslide=slides[a];
				breakme=true;
			}
		}
	window.location.href=current.substring(0,current.indexOf(thisslide))+nextslide;
}

function keyPress(e) {
	var wkey = e.which?e.which:window.event.keyCode;
	if (wkey==39) {
		slideForward();
	}
	if (wkey==37) {
		slideBack();
	}
}

function mousePress(e) {
	slideForward();
}


function done () {
	if (Effect) Effect.Grow('grow');
}

document.onkeyup = keyPress;
document.onmouseup = mousePress;
window.onload = done;
