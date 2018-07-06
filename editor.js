//INIT LOADING VARIABLES
var doneloading = false;
var acceptedterms = false;
var art_x1, art_x2, art_y1, art_y2, art_x, art_y, artloaded;
var flipped_h, flipped_v, flipmul_h, flipmul_v;
var artscaleh, artscalev, artrotation;
var def_width, def_height, factor;
var blankcard, powerlevel, instrument1, instrument2, instrument3, instrument4, playlist;

//PRELOAD IMAGES
var imagestoload = new Array();
//LIST OF IMAGES TO LOAD
imagestoload = [
'resources/images/Blank_Card.png',
'resources/images/Power_Levels/Wild_3.png',
'resources/images/Power_Levels/Wild_2.png',
'resources/images/Power_Levels/Wild_1.png',
'resources/images/Power_Levels/Yellow_3.png',
'resources/images/Power_Levels/Yellow_2.png',
'resources/images/Power_Levels/Yellow_1.png',
'resources/images/Power_Levels/Red_3.png',
'resources/images/Power_Levels/Red_2.png',
'resources/images/Power_Levels/Red_1.png',
'resources/images/Power_Levels/Blue_3.png',
'resources/images/Power_Levels/Blue_2.png',
'resources/images/Power_Levels/Blue_1.png',
'resources/images/Power_Levels/Green_3.png',
'resources/images/Power_Levels/Green_2.png',
'resources/images/Power_Levels/Green_1.png',
'resources/images/Power_Levels/White_3.png',
'resources/images/Power_Levels/White_2.png',
'resources/images/Power_Levels/White_1.png',
'resources/images/Instrument_Slot_1/Yellow_Vocals.png',
'resources/images/Instrument_Slot_1/Yellow_Guitar.png',
'resources/images/Instrument_Slot_1/Yellow_Keys.png',
'resources/images/Instrument_Slot_1/Yellow_Horns.png',
'resources/images/Instrument_Slot_1/Yellow_Strings.png',
'resources/images/Instrument_Slot_1/Yellow_Sampler.png',
'resources/images/Instrument_Slot_1/Yellow_Drums.png',
'resources/images/Instrument_Slot_1/Red_Vocals.png',
'resources/images/Instrument_Slot_1/Red_Guitar.png',
'resources/images/Instrument_Slot_1/Red_Keys.png',
'resources/images/Instrument_Slot_1/Red_Horns.png',
'resources/images/Instrument_Slot_1/Red_Strings.png',
'resources/images/Instrument_Slot_1/Red_Sampler.png',
'resources/images/Instrument_Slot_1/Red_Drums.png',
'resources/images/Instrument_Slot_1/Blue_Vocals.png',
'resources/images/Instrument_Slot_1/Blue_Guitar.png',
'resources/images/Instrument_Slot_1/Blue_Keys.png',
'resources/images/Instrument_Slot_1/Blue_Horns.png',
'resources/images/Instrument_Slot_1/Blue_Strings.png',
'resources/images/Instrument_Slot_1/Blue_Sampler.png',
'resources/images/Instrument_Slot_1/Blue_Drums.png',
'resources/images/Instrument_Slot_1/Green_Vocals.png',
'resources/images/Instrument_Slot_1/Green_Guitar.png',
'resources/images/Instrument_Slot_1/Green_Keys.png',
'resources/images/Instrument_Slot_1/Green_Horns.png',
'resources/images/Instrument_Slot_1/Green_Strings.png',
'resources/images/Instrument_Slot_1/Green_Sampler.png',
'resources/images/Instrument_Slot_1/Green_Drums.png',
'resources/images/Instrument_Slot_2/Red_Vocals.png',
'resources/images/Instrument_Slot_2/Red_Guitar.png',
'resources/images/Instrument_Slot_2/Red_Keys.png',
'resources/images/Instrument_Slot_2/Red_Horns.png',
'resources/images/Instrument_Slot_2/Red_Strings.png',
'resources/images/Instrument_Slot_2/Red_Sampler.png',
'resources/images/Instrument_Slot_2/Red_Drums.png',
'resources/images/Instrument_Slot_3/Blue_Vocals.png',
'resources/images/Instrument_Slot_3/Blue_Guitar.png',
'resources/images/Instrument_Slot_3/Blue_Keys.png',
'resources/images/Instrument_Slot_3/Blue_Horns.png',
'resources/images/Instrument_Slot_3/Blue_Strings.png',
'resources/images/Instrument_Slot_3/Blue_Sampler.png',
'resources/images/Instrument_Slot_3/Blue_Drums.png',
'resources/images/Instrument_Slot_4/Green_Vocals.png',
'resources/images/Instrument_Slot_4/Green_Guitar.png',
'resources/images/Instrument_Slot_4/Green_Keys.png',
'resources/images/Instrument_Slot_4/Green_Horns.png',
'resources/images/Instrument_Slot_4/Green_Strings.png',
'resources/images/Instrument_Slot_4/Green_Sampler.png',
'resources/images/Instrument_Slot_4/Green_Drums.png',
'resources/images/Playlist_Icons/DM_Icon.png',
'resources/images/Playlist_Icons/spdy4/Beast.png',
'resources/images/Playlist_Icons/spdy4/Burst.png',
'resources/images/Playlist_Icons/spdy4/Cactus.png',
'resources/images/Playlist_Icons/spdy4/Chain.png',
'resources/images/Playlist_Icons/spdy4/Crystal.png',
'resources/images/Playlist_Icons/spdy4/Disc.png',
'resources/images/Playlist_Icons/spdy4/Disco.png',
'resources/images/Playlist_Icons/spdy4/Dollar.png',
'resources/images/Playlist_Icons/spdy4/Flame.png',
'resources/images/Playlist_Icons/spdy4/Floppy.png',
'resources/images/Playlist_Icons/spdy4/Galaxy.png',
'resources/images/Playlist_Icons/spdy4/Glitch.png',
'resources/images/Playlist_Icons/spdy4/Headphone.png',
'resources/images/Playlist_Icons/spdy4/Heartbreaker.png',
'resources/images/Playlist_Icons/spdy4/Knight.png',
'resources/images/Playlist_Icons/spdy4/Longhorn.png',
'resources/images/Playlist_Icons/spdy4/Phone.png',
'resources/images/Playlist_Icons/spdy4/Ring.png',
'resources/images/Playlist_Icons/spdy4/Rodeo.png',
'resources/images/Playlist_Icons/spdy4/Sheriff.png',
'resources/images/Playlist_Icons/spdy4/Snowflake.png',
'resources/images/Playlist_Icons/spdy4/Starship.png',
'resources/images/Playlist_Icons/spdy4/Strong.png',
'resources/images/Playlist_Icons/spdy4/Vinyl.png',
'resources/images/Playlist_Icons/spdy4/Wrench.png',
];
function loadImages(images, onComplete)
	{
	imageObjects = [];
	var loaded = 0;
	//console.log(images.length);
	function onLoad() {
		loaded++;
		//console.log(loaded);
		if (loaded == images.length) {onComplete();}
		}
	for (var i = 0; i < images.length; i++) {
		var img = new Image();
		img.addEventListener("load", onLoad);
		img.src = images[i];
		//console.log(img.src);
		imageObjects.push(img);
		}
	}
loadImages(imagestoload, init);

//ADD LISTENERS TO INPUT OBJECTS TO DETECT WHEN TO REDRAW CANVAS
/*
[id^='someId'] will match all ids starting with someId.
[id$='someId'] will match all ids ending with someId.
[id*='someId'] will match all ids containing someId.
*/
var elements = document.querySelectorAll("input, textarea, select, option, canvas");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", draw);
  elements[i].addEventListener("keyup", draw);
  elements[i].addEventListener("blur", draw);
  elements[i].addEventListener("change", draw);
  elements[i].addEventListener("click", draw);
  elements[i].addEventListener("touchend", draw);
}
var elements = document.querySelectorAll('input[type=text], textarea, input[id^=text');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", textchanged);
  elements[i].addEventListener("keyup", textchanged);
  elements[i].addEventListener("blur", textchanged);
  elements[i].addEventListener("change", textchanged);
  elements[i].addEventListener("click", textchanged);
  elements[i].addEventListener("touchend", textchanged);
}
var elements = document.querySelectorAll('input[name^=level]');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", levelchanged);
  elements[i].addEventListener("keyup", levelchanged);
  elements[i].addEventListener("blur", levelchanged);
  elements[i].addEventListener("change", levelchanged);
  elements[i].addEventListener("click", levelchanged);
  elements[i].addEventListener("touchend", levelchanged);
}
var elements = document.querySelectorAll('select[name^=instrument]');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", instrumentchanged);
  elements[i].addEventListener("keyup", instrumentchanged);
  elements[i].addEventListener("blur", instrumentchanged);
  elements[i].addEventListener("change", instrumentchanged);
  elements[i].addEventListener("click", instrumentchanged);
  elements[i].addEventListener("touchend", instrumentchanged);
}
var elements = document.querySelectorAll('select[name^=playlist]');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", playlistchanged);
  elements[i].addEventListener("keyup", playlistchanged);
  elements[i].addEventListener("blur", playlistchanged);
  elements[i].addEventListener("change", playlistchanged);
  elements[i].addEventListener("click", playlistchanged);
  elements[i].addEventListener("touchend", playlistchanged);
}
var artscalehslider = document.getElementById('artscalehslider');
var scaleisDraggable = false;
artscalehslider.onmousedown = function(e) {if (e.button == 0) scaleisDraggable = true;};
artscalehslider.onmouseup = function(e) {scaleisDraggable = false;};
artscalehslider.onmouseout = function(e) {scaleisDraggable = false;};
artscalehslider.onmousemove = function() {if (scaleisDraggable) artscalehchanged();};

var artscalevslider = document.getElementById('artscalevslider');
var scaleisDraggable = false;
artscalevslider.onmousedown = function(e) {if (e.button == 0) scaleisDraggable = true;};
artscalevslider.onmouseup = function(e) {scaleisDraggable = false;};
artscalevslider.onmouseout = function(e) {scaleisDraggable = false;};
artscalevslider.onmousemove = function() {if (scaleisDraggable) artscalevchanged();};

var artrotationslider = document.getElementById('artrotationslider');
var rotationisDraggable = false;
artrotationslider.onmousedown = function(e) {if (e.button == 0) rotationisDraggable = true;};
artrotationslider.onmouseup = function(e) {rotationisDraggable = false;};
artrotationslider.onmouseout = function(e) {rotationisDraggable = false;};
artrotationslider.onmousemove = function() {if (rotationisDraggable) artrotationchanged();};


//ADD INSTRUMENT EMOJI FOR EASIER VISUAL
var elements = document.querySelectorAll('option[value$=vocals]'); for (var i = 0; i < elements.length; i++) {elements[i].innerHTML = "&#x1F3A4; " + elements[i].innerHTML;}
var elements = document.querySelectorAll('option[value$=guitar]'); for (var i = 0; i < elements.length; i++) {elements[i].innerHTML = "&#x1F3B8; " + elements[i].innerHTML;}
var elements = document.querySelectorAll('option[value$=keys]'); for (var i = 0; i < elements.length; i++) {elements[i].innerHTML = "&#x1F3B9; " + elements[i].innerHTML;}
var elements = document.querySelectorAll('option[value$=horns]'); for (var i = 0; i < elements.length; i++) {elements[i].innerHTML = "&#x1F4EF; " + elements[i].innerHTML;}
var elements = document.querySelectorAll('option[value$=strings]'); for (var i = 0; i < elements.length; i++) {elements[i].innerHTML = "&#x1F3BB; " + elements[i].innerHTML;}
var elements = document.querySelectorAll('option[value$=drums]'); for (var i = 0; i < elements.length; i++) {elements[i].innerHTML = "&#x1F941; " + elements[i].innerHTML;}
var elements = document.querySelectorAll('option[value$=sampler]'); for (var i = 0; i < elements.length; i++) {elements[i].innerHTML = /*radio emoji*/"&#x1F4FB; " /*music note emoji"&#x1F3B5; "*/ + elements[i].innerHTML;}

//SAVE CARD LINK - HIDDEN UNLESS COMPATIBLE
//ADD LISTENER TO "SAVE CARD" LINK TO UPDATE URL
var elements = document.getElementById('savelink');
elements.addEventListener("click", updatecardlink);
elements.addEventListener("mouseenter", updatecardlink);
//IF POSSIBLE, SHOW & UPDATE "SAVE CARD" LINK
function supportsToDataURL()
{
	var data, returnstate = false;
	var canvas = document.getElementById('canvas').getContext('2d');
	try { canvas.canvas.toDataURL("image/png"); returnstate = true; }
	catch (e) { returnstate = false; }
	finally { return returnstate; }
}
function updatecardlink()
{
	if (supportsToDataURL())
		{
			var canvas = document.getElementById('canvas');
			var savelink = document.getElementById('savelink');		

			savelink.hidden = false;
			draw();
			savelink.href = canvas.toDataURL("image/png");

			//update save card link to blob - works in firefox, but not chrome
			/*canvas.toBlob(function(blob) 
				{
				var newImg = document.createElement('img');
				var url = URL.createObjectURL(blob);
				savelink.href = url;
				});*/
		}
}

//ONLY ENABLE AFTER USER ACCEPTS TERMS
function checkaccept()
{
var acceptcheckbox = document.getElementById('acceptcheckbox');
if (acceptcheckbox.checked == false )
	{
	alert('Please accept the terms and check the box to continue.');
	return false;
	}
else
	{
	document.getElementById('overlay').hidden=true;
	document.getElementById('terms').hidden=true;
	acceptedterms = true;
	draw();
	setTimeout(draw, 250); //0.25 sec
	return true;
	}
}

//WARN USER BEFORE EXITING
var confirmed = false;
var allowPrompt = true;
function confirmdelete()
{
	if (doneloading && acceptedterms)
	{
		if (allowPrompt)
			{

				confirmed = true;
				var confMessage = "Current card will be lost. Are you sure you want to close the card mockup creator?";
				return confMessage;

			}
	}
}
window.onbeforeunload = confirmdelete;

//Optionally pre-fill variables based on URL parameters (parameters are written the same as input id's and values)
//Fallback Method - newest method was not compatible with my ios7 device, so using this instead

function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    // If first entry with this name
//    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
//      // If second entry with this name
//    } else if (typeof query_string[key] === "string") {
//      var arr = [query_string[key], decodeURIComponent(value)];
//      query_string[key] = arr;
//      // If third or later entry with this name
//    } else {
//      query_string[key].push(decodeURIComponent(value));
//    }
  }
  return query_string;
}

var parsed_qs = parse_query_string(window.location.search.substring(1));

if (parsed_qs.text_artist!=null)	document.getElementById("text_artist").value = parsed_qs.text_artist;			//eg: Artist's name as it is normally written
if (parsed_qs.text_title!=null)		document.getElementById("text_title").value = parsed_qs.text_title;			//eg: Song title as it is normally written
if (parsed_qs.text_series_id!=null) document.getElementById("text_series_id").value = parsed_qs.text_series_id;	//eg: S01
if (parsed_qs.text_card_id!=null) 	document.getElementById("text_card_id").value = parsed_qs.text_card_id;		//eg: C001
if (parsed_qs.text_card_num!=null) 	document.getElementById("text_card_num").value = parsed_qs.text_card_num;		//eg: 1/15

if (parsed_qs.level!=null) 			if (document.getElementById(parsed_qs.level)) document.getElementById(parsed_qs.level).checked = true;//slightly different code	//eg: w2 (color's first letter followed by a number 1-3, white represented by letter "f" for fx, "w" is for wild)
if (parsed_qs.instrument1!=null) 	document.getElementById("instrument1").value = parsed_qs.instrument1;			//eg: ysampler (color's first letter followed by instrument including "vocals", "guitar", "keys", "horns", "strings", "sampler", "drums")
if (parsed_qs.instrument2!=null) 	document.getElementById("instrument2").value = parsed_qs.instrument2;			//eg: same as instrument 1, but only red ("r")
if (parsed_qs.instrument3!=null) 	document.getElementById("instrument3").value = parsed_qs.instrument3;			//eg: same as instrument 1, but only blue ("b")
if (parsed_qs.instrument4!=null) 	document.getElementById("instrument4").value = parsed_qs.instrument4;			//eg: same as instrument 1, but only green ("g")
if (parsed_qs.playlist!=null) 		document.getElementById("playlist").value = parsed_qs.playlist;				//eg: beast (name of listed playlist in lowercase with spaces replace with underscores (DM Icon is "dm_icon"), does not include official playlists)



//Second Fallback Method -  still not compatible with ios7
//function getUrlParameter(search_for) { var query = window.location.search.substring(1); var parms = query.split('&'); for (var i = 0; i < parms.length; i++) { var pos = parms[i].indexOf('='); if (pos > 0 && search_for == parms[i].substring(0, pos)) { return decodeURIComponent(parms[i].substring(pos + 1));; } } return ""; }

//First Fallback Method -  still not compatible with ios7
/*function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
*/

//First Method - not compatible with my ios7 device, so using a fallback method instead
/*
let params = (new URL(document.location)).searchParams;
if (params.get("text_artist")) 		document.getElementById("text_artist").value = params.get("text_artist"); 				//eg: Artist's name as it is normally written
if (params.get("text_title")) 		document.getElementById("text_title").value = params.get("text_title");					//eg: Song title as it is normally written
if (params.get("text_series_id")) 	document.getElementById("text_series_id").value = params.get("text_series_id");			//eg: S01
if (params.get("text_card_id")) 	document.getElementById("text_card_id").value = params.get("text_card_id");				//eg: C001
if (params.get("text_card_num")) 	document.getElementById("text_card_num").value = params.get("text_card_num");			//eg: 1/15

if (params.get("level")) 			if (document.getElementById(params.get("level"))) document.getElementById(params.get("level")).checked = true;//slightly different code	//eg: w2 (color's first letter followed by a number 1-3, white represented by letter "f" for fx, "w" is for wild)
if (params.get("instrument1")) 		document.getElementById("instrument1").value = params.get("instrument1");				//eg: ysampler (color's first letter followed by instrument including "vocals", "guitar", "keys", "horns", "strings", "sampler", "drums")
if (params.get("instrument2")) 		document.getElementById("instrument2").value = params.get("instrument2");				//eg: same as instrument 1, but only red ("r")
if (params.get("instrument3")) 		document.getElementById("instrument3").value = params.get("instrument3");				//eg: same as instrument 1, but only blue ("b")
if (params.get("instrument4")) 		document.getElementById("instrument4").value = params.get("instrument4");				//eg: same as instrument 1, but only green ("g")
if (params.get("playlist")) 		document.getElementById("playlist").value = params.get("playlist");						//eg: beast (name of listed playlist in lowercase with spaces replace with underscores (DM Icon is "dm_icon"), does not include official playlists)
*/































//CARD ARTWORK RELATED FUNCTIONS
function art_init()
{
	disableartcontrols();
	
	//Draw card art when source image loads and reset it to the center of the card art window
	artimg.addEventListener("load", function () {
		
		artloaded = true;
		
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
		if (flipped_h == true) canvas_art.scale(-1, 1); flipped_h = false; flipmul_h = 1;
		if (flipped_v == true) canvas_art.scale(1, -1); flipped_v = false; flipmul_v = 1;
		canvas_art.scale(1/artscaleh, 1/artscalev);
		artscaleh = 1; artscalev = 1; artrotation = 0;
		canvas_art.transform(1,0,0,1,0,0);
		
		var artscalehslider = document.getElementById('artscalehslider'); artscalehslider.value = 1; artscalehslider.disabled = false;
		var artscalehbox = document.getElementById('artscalehbox'); artscalehbox.value = 1; artscalehbox.disabled = false;
		var artscalevslider = document.getElementById('artscalevslider'); artscalevslider.value = 1; artscalevslider.disabled = false;
		var artscalevbox = document.getElementById('artscalevbox'); artscalevbox.value = 1; artscalevbox.disabled = false;
		var artrotationslider = document.getElementById('artrotationslider'); artrotationslider.value = 0; //artrotationslider.disabled = false;
		var artrotationbox = document.getElementById('artrotationbox'); artrotationbox.value = 0; //artrotationbox.disabled = false;

		var centerart = document.getElementById('centerart'); centerart.disabled = false;
		var centerarth = document.getElementById('centerarth'); centerarth.disabled = false;
		var centerartv = document.getElementById('centerartv'); centerartv.disabled = false;
		var flipart_h = document.getElementById('flipart_h'); flipart_h.disabled = false;
		var flipart_v = document.getElementById('flipart_v'); flipart_v.disabled = false;
		var artscalehfit = document.getElementById('scalehfit'); artscalehfit.disabled = false;
		var artscalevfit = document.getElementById('scalevfit'); artscalevfit.disabled = false;
		var artscalehorig = document.getElementById('scalehorig'); artscalehorig.disabled = false;
		var artscalevorig = document.getElementById('scalevorig'); artscalevorig.disabled = false;
		var artscaletomin = document.getElementById('scaletomin'); artscaletomin.disabled = false;
		var resetart = document.getElementById('resetart'); resetart.disabled = false;
		var clearart = document.getElementById('clearart'); clearart.disabled = false;
		
		if (artimg.width/(art_x2-art_x1) < artimg.height/(art_y2-art_y1)) scalehorizontal(); else scalevertical(); //default scale to fit
		//no rounding, more accurate (rounded results are sometimes off by a pixel)
		art_x = (flipmul_h*(art_x2+art_x1)/2 - artimg.width*artscaleh/2)/artscaleh;
		art_y = (flipmul_v*(art_y2+art_y1)/2 - artimg.height*artscalev/2)/artscalev;
		
		draw();
	}, false);
	
	//DRAG AND DROP IMAGE INTO CANVAS
	canvas.addEventListener("dragover", function (evt) {evt.preventDefault();}, false);
	canvas.addEventListener("drop", function (evt)
	{
		//GET NEW IMAGE (NOT CHANGED UNTIL CONFIRMED)
		var newsrc;
		var url = evt.dataTransfer.getData('text/plain');
		var files = evt.dataTransfer.files;
			if (files.length > 0)
			{
				var file = files[0];
				if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -1)
					{
					var reader = new FileReader();
					reader.onload = function (evt) {newsrc = evt.target.result;};
					reader.readAsDataURL(file);
					}
			}
		evt.preventDefault();
		//CONFIRM USER WANTS TO REPLACE THE CURRENT CARD ART IMAGE
		if(confirm('Are you sure you want to change the current card art?'))
		{
			artloaded = false;
			disableartcontrols();
			if(url) artimg.src = url;
			if(newsrc) artimg.src = newsrc;
			document.getElementById('imguploadform').reset();
		}
		draw();
	}, false);

	
	//MOVEMENT OF CARD ART
	var startingX, startingY;
	var distX, distY;
	var artisDraggable = false;
	canvas.onmousedown = canvas.ontouchstart = function(e) {
		if (e.button == 0 || e.type == "touchstart")
		{
		if (e.type == "touchstart")
			{
			startingX = e.touches[0].clientX;
			startingY = e.touches[0].clientY;
			}
		else
			{
			startingX = e.clientX;
			startingY = e.clientY;
			}
		artisDraggable = true;
		if (e.type == "touchstart") e.preventDefault();
		}
	};
	canvas.onmouseup = canvas.ontouchend = function(e) {
		artisDraggable = false;
		if (e.type == "touchend") e.preventDefault();
	};
	canvas.onmouseout = canvas.ontouchleave = function(e) {
		artisDraggable = false;
		if (e.type == "touchleave") e.preventDefault();
	};
	canvas.onmousemove = canvas.ontouchmove = function(e) {
		if (artisDraggable)
		{
		if (e.type == "touchmove")
			{
			art_x = art_x + flipmul_h*(e.touches[0].clientX-startingX)/artscaleh;
			art_y = art_y + flipmul_v*(e.touches[0].clientY-startingY)/artscalev;
			draw();
			startingX = e.touches[0].clientX;
			startingY = e.touches[0].clientY;
			}
		else
			{
			art_x = art_x + flipmul_h*(e.clientX-startingX)/artscaleh;
			art_y = art_y + flipmul_v*(e.clientY-startingY)/artscalev;
			draw();
			startingX = e.clientX;
			startingY = e.clientY;
			}
		if (e.type == "touchmove") e.preventDefault();
		}
	};
	
	//Reset the uploaded image filename, has no effect but cosmetic
	document.getElementById('imguploadform').reset();
}

function disableartcontrols()
	{
	var artscalehslider = document.getElementById('artscalehslider'); 		artscalehslider.value = 1; 	 artscalehslider.disabled = true; 	artscalehchanged();
	var artscalevslider = document.getElementById('artscalevslider'); 		artscalevslider.value = 1; 	 artscalevslider.disabled = true; 	artscalevchanged();
	var artscalehbox = document.getElementById('artscalehbox'); 			artscalehbox.value = 1; 	 artscalehbox.disabled = true; 		artscalehboxchanged();
	var artscalevbox = document.getElementById('artscalevbox'); 			artscalevbox.value = 1; 	 artscalevbox.disabled = true; 		artscalevboxchanged()
	var artrotationslider = document.getElementById('artrotationslider'); 	artrotationslider.value = 0; artrotationslider.disabled = true; artrotationchanged();
	var artrotationbox = document.getElementById('artrotationbox'); 		artrotationbox.value = 0; 	 artrotationbox.disabled = true; 	artrotationboxchanged();
	//artscaleh = 1; artscalev = 1; artrotation = 0; REDUNDANT WITH SETTING VALUES AND USING "changed" functions
	
	var centerart = document.getElementById('centerart'); centerart.disabled = true;
	var centerarth = document.getElementById('centerarth'); centerarth.disabled = true;
	var centerartv = document.getElementById('centerartv'); centerartv.disabled = true;
	var flipart_h = document.getElementById('flipart_h'); flipart_h.disabled = true;
	var flipart_v = document.getElementById('flipart_v'); flipart_v.disabled = true;
	var artscalehfit = document.getElementById('scalehfit'); artscalehfit.disabled = true;
	var artscalevfit = document.getElementById('scalevfit'); artscalevfit.disabled = true;
	var artscalehorig = document.getElementById('scalehorig'); artscalehorig.disabled = true;
	var artscalevorig = document.getElementById('scalevorig'); artscalevorig.disabled = true;
	var artscaletomin = document.getElementById('scaletomin'); artscaletomin.disabled = true;
	var resetart = document.getElementById('resetart'); resetart.disabled = true;
	var clearart = document.getElementById('clearart'); clearart.disabled = true;
	}

//ENABLE INPUT BUTTON FOR UPLOADING IMAGE FILE
function imguploaded(e)
{
	var fileInput = e.target.files;
	if(fileInput.length>0)
		{
		var file = fileInput[0];
		var imgsrc = window.URL.createObjectURL(file);
		if(imgsrc) artimg.src = imgsrc;
		}
}

//INITIALIZE VARIABLES
function init()
	{
	def_width = 562;
	def_height = 780;
	
	art_x1 = 39; art_y1 = 42;  art_x2 = 519; art_y2 = 565;
	art_x = art_x1; art_y = art_y1;
	artloaded = false;
	artimg = new Image();
	art_init();
	
	blankcard = new Image();	blankcard.src = 'resources/images/Blank_Card.png';
	powerlevel = new Image();	//powerlevel.src = 'resources/images/Power_Levels/Wild_2.png'; //MAY SHOW WILD BY DEFAULT INSTEAD OF BLANK
	instrument1 = new Image();
	instrument2 = new Image();
	instrument3 = new Image();
	instrument4 = new Image();
	playlist = new Image();

	//Default text
	def_artist = 'Artist';
	def_title = 'Title';
	def_title1 = 'Title';
	def_title2 = '';
	def_title3 = '';
	def_title4 = '';
	def_series_id = 'S##';
	def_card_id = 'C###';
	def_card_num = '##/##';

	//Text position coordinates
	pos_artist = [39.2, 570];
	pos_title  = [40.2,597.6];
	pos_title1 = [40.2,597.6];
	pos_title2 = [40.2,597.6+27];
	pos_title3 = [40.2,597.6+27+27];
	pos_title4 = [40.2,597.6+27+27+27];
	pos_series_id = [39.3, 725];
	pos_card_id = [74.2, 725];
	pos_card_num = [489.4, 725.8];

	//Font size
	fs_artist = 24;
	fs_title = 23;
	fs_series_id = 15.5;
	fs_card_id = 15.5;
	fs_card_num = 14.5;

	//Text spacing
	sp_artist = 80;
	sp_title = 100;
	sp_series_id = 60;
	sp_card_id = 60;
	sp_card_num = 80;

	//Initial text
	artist = document.getElementById('text_artist').value;
	title  = document.getElementById('text_title').value;
	title1 = document.getElementById('text_title').value;
	title2 = '';
	title3 = '';
	title4 = '';
	title = document.getElementById('text_title').value;
		var delimiter = /\n/;
		var start = 0;
		var tokens = title.split(delimiter).slice(start);
	if (tokens[0]) title1 = tokens[0]; else title1 = '';
	if (tokens[1]) title2 = tokens[1]; else title2 = '';
	if (tokens[2]) title3 = tokens[2]; else title3 = '';
	if (tokens[3]) title4 = tokens[3]; else title4 = '';
	series_id = document.getElementById('text_series_id').value;
	card_id = document.getElementById('text_card_id').value;
	card_num = document.getElementById('text_card_num').value;

	//Create text canvas (using fabric.js to improve text rendering over native html5 functions FOR TEXT CANVAS ONLY)
	textcanvas  = new fabric.Canvas('canvas_text',  { width: def_width, height: def_height });
	//Resize the canvas depending on zoom (for most accurate results, browser zoom should be set to regular/100%
	//---
		factor = Math.max(def_width/textcanvas.getElement().getAttribute("width"),
						  def_height/textcanvas.getElement().getAttribute("height"));
						  //console.log(factor + " factor");
			//NOTE: Getting the width with ".width" is rounded, so using ".getAttribute("width")" to read the value instead
		if (factor != 1)
		{
		textcanvas.setDimensions({width: def_width*factor, height:def_height*factor});
		//textcanvas.setWidth(def_width*factor); //Alternate method
		//textcanvas.setHeight(def_height*factor); //Alternate method
		
		//textcanvas.setDimensions({width:Math.round(def_width*factor), height:Math.round(def_height*factor)});
			//NOTE: ROUNDING "Math.round(def_width*factor)" RESULTS IN INCORRECT RESULTS, MORE ACCURATE WITHOUT ROUNDING -----------
		textcanvas.setZoom(factor);
		}
	//---
	textcanvas.onLoad = "draw()";

	textchanged();
	levelchanged();
	instrumentchanged();
	playlistchanged();
	
	doneloading = true;
	draw();
	updatecardlink();
	
	//Draw automatically after little bit, for some reason text doesn't show until here
	setTimeout(draw, 250); //0.25 sec
	setTimeout(draw, 500); //0.5 sec
	setTimeout(draw, 1000); //1.0 sec
	setTimeout(draw, 2000); //2.0 sec
	setTimeout(draw, 3000); //3.0 sec
	}

//DETECT CHANGES AND REDRAW
function textchanged()
	{
	artist = document.getElementById('text_artist').value;
	title = document.getElementById('text_title').value;
			delimiter = /\n/;
			start = 0;
			tokens = title.split(delimiter).slice(start);
		title1 = tokens[0];
		title2 = tokens[1];
		title3 = tokens[2];
		title4 = tokens[3];
	series_id = document.getElementById('text_series_id').value;
	card_id = document.getElementById('text_card_id').value;
	card_num = document.getElementById('text_card_num').value;
	draw();
	}
function levelchanged()
	{
	if (!document.querySelector('input[name="level"]:checked')) powerlevel.src = '';
	else
	switch (document.querySelector('input[name="level"]:checked').value)
		{
		case 'w3': powerlevel.src = 'resources/images/Power_Levels/Wild_3.png'; break;
		case 'w2': powerlevel.src = 'resources/images/Power_Levels/Wild_2.png'; break;
		case 'w1': powerlevel.src = 'resources/images/Power_Levels/Wild_1.png'; break;
		case 'y3': powerlevel.src = 'resources/images/Power_Levels/Yellow_3.png'; break;
		case 'y2': powerlevel.src = 'resources/images/Power_Levels/Yellow_2.png'; break;
		case 'y1': powerlevel.src = 'resources/images/Power_Levels/Yellow_1.png'; break;
		case 'r3': powerlevel.src = 'resources/images/Power_Levels/Red_3.png'; break;
		case 'r2': powerlevel.src = 'resources/images/Power_Levels/Red_2.png'; break;
		case 'r1': powerlevel.src = 'resources/images/Power_Levels/Red_1.png'; break;
		case 'b3': powerlevel.src = 'resources/images/Power_Levels/Blue_3.png'; break;
		case 'b2': powerlevel.src = 'resources/images/Power_Levels/Blue_2.png'; break;
		case 'b1': powerlevel.src = 'resources/images/Power_Levels/Blue_1.png'; break;
		case 'g3': powerlevel.src = 'resources/images/Power_Levels/Green_3.png'; break;
		case 'g2': powerlevel.src = 'resources/images/Power_Levels/Green_2.png'; break;
		case 'g1': powerlevel.src = 'resources/images/Power_Levels/Green_1.png'; break;
		case 'f3': powerlevel.src = 'resources/images/Power_Levels/White_3.png'; break;
		case 'f2': powerlevel.src = 'resources/images/Power_Levels/White_2.png'; break;
		case 'f1': powerlevel.src = 'resources/images/Power_Levels/White_1.png'; break;
		}
	draw();
	}
function instrumentchanged()
	{
	var i1 = document.getElementById('instrument1');
	var i2 = document.getElementById('instrument2');
	var i3 = document.getElementById('instrument3');
	var i4 = document.getElementById('instrument4');
	switch (i1.options[i1.selectedIndex].value)
		{
		case 'none': instrument1.src = ''; break;
		
		case 'yvocals': instrument1.src = 'resources/images/Instrument_Slot_1/Yellow_Vocals.png'; break;
		case 'yguitar': instrument1.src = 'resources/images/Instrument_Slot_1/Yellow_Guitar.png'; break;
		case 'ykeys': instrument1.src = 'resources/images/Instrument_Slot_1/Yellow_Keys.png'; break;
		case 'yhorns': instrument1.src = 'resources/images/Instrument_Slot_1/Yellow_Horns.png'; break;
		case 'ystrings': instrument1.src = 'resources/images/Instrument_Slot_1/Yellow_Strings.png'; break;
		case 'ysampler': instrument1.src = 'resources/images/Instrument_Slot_1/Yellow_Sampler.png'; break;
		case 'ydrums': instrument1.src = 'resources/images/Instrument_Slot_1/Yellow_Drums.png'; break;
		
		case 'rvocals': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Vocals.png'; break;
		case 'rguitar': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Guitar.png'; break;
		case 'rkeys': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Keys.png'; break;
		case 'rhorns': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Horns.png'; break;
		case 'rstrings': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Strings.png'; break;
		case 'rsampler': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Sampler.png'; break;
		case 'rdrums': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Drums.png'; break;
		
		case 'bvocals': instrument1.src = 'resources/images/Instrument_Slot_1/Blue_Vocals.png'; break;
		case 'bguitar': instrument1.src = 'resources/images/Instrument_Slot_1/Blue_Guitar.png'; break;
		case 'bkeys': instrument1.src = 'resources/images/Instrument_Slot_1/Blue_Keys.png'; break;
		case 'bhorns': instrument1.src = 'resources/images/Instrument_Slot_1/Blue_Horns.png'; break;
		case 'bstrings': instrument1.src = 'resources/images/Instrument_Slot_1/Blue_Strings.png'; break;
		case 'bsampler': instrument1.src = 'resources/images/Instrument_Slot_1/Blue_Sampler.png'; break;
		case 'bdrums': instrument1.src = 'resources/images/Instrument_Slot_1/Blue_Drums.png'; break;
		
		case 'gvocals': instrument1.src = 'resources/images/Instrument_Slot_1/Green_Vocals.png'; break;
		case 'gguitar': instrument1.src = 'resources/images/Instrument_Slot_1/Green_Guitar.png'; break;
		case 'gkeys': instrument1.src = 'resources/images/Instrument_Slot_1/Green_Keys.png'; break;
		case 'ghorns': instrument1.src = 'resources/images/Instrument_Slot_1/Green_Horns.png'; break;
		case 'gstrings': instrument1.src = 'resources/images/Instrument_Slot_1/Green_Strings.png'; break;
		case 'gsampler': instrument1.src = 'resources/images/Instrument_Slot_1/Green_Sampler.png'; break;
		case 'gdrums': instrument1.src = 'resources/images/Instrument_Slot_1/Green_Drums.png'; break;
		}
	switch (i2.options[i2.selectedIndex].value)
		{
		case 'none': instrument2.src = ''; break;
		case 'rvocals': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Vocals.png'; break;
		case 'rguitar': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Guitar.png'; break;
		case 'rkeys': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Keys.png'; break;
		case 'rhorns': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Horns.png'; break;
		case 'rstrings': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Strings.png'; break;
		case 'rsampler': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Sampler.png'; break;
		case 'rdrums': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Drums.png'; break;
		}
	switch (i3.options[i3.selectedIndex].value)
		{
		case 'none': instrument3.src = ''; break;
		case 'bvocals': instrument3.src = 'resources/images/Instrument_Slot_3/Blue_Vocals.png'; break;
		case 'bguitar': instrument3.src = 'resources/images/Instrument_Slot_3/Blue_Guitar.png'; break;
		case 'bkeys': instrument3.src = 'resources/images/Instrument_Slot_3/Blue_Keys.png'; break;
		case 'bhorns': instrument3.src = 'resources/images/Instrument_Slot_3/Blue_Horns.png'; break;
		case 'bstrings': instrument3.src = 'resources/images/Instrument_Slot_3/Blue_Strings.png'; break;
		case 'bsampler': instrument3.src = 'resources/images/Instrument_Slot_3/Blue_Sampler.png'; break;
		case 'bdrums': instrument3.src = 'resources/images/Instrument_Slot_3/Blue_Drums.png'; break;
		}
	switch (i4.options[i4.selectedIndex].value)
		{
		case 'none': instrument4.src = ''; break;
		case 'gvocals': instrument4.src = 'resources/images/Instrument_Slot_4/Green_Vocals.png'; break;
		case 'gguitar': instrument4.src = 'resources/images/Instrument_Slot_4/Green_Guitar.png'; break;
		case 'gkeys': instrument4.src = 'resources/images/Instrument_Slot_4/Green_Keys.png'; break;
		case 'ghorns': instrument4.src = 'resources/images/Instrument_Slot_4/Green_Horns.png'; break;
		case 'gstrings': instrument4.src = 'resources/images/Instrument_Slot_4/Green_Strings.png'; break;
		case 'gsampler': instrument4.src = 'resources/images/Instrument_Slot_4/Green_Sampler.png'; break;
		case 'gdrums': instrument4.src = 'resources/images/Instrument_Slot_4/Green_Drums.png'; break;
		}
	i1.className = i1.options[i1.selectedIndex].className;
	i2.className = i2.options[i2.selectedIndex].className;
	i3.className = i3.options[i3.selectedIndex].className;
	i4.className = i4.options[i4.selectedIndex].className;
	draw();
	}
function playlistchanged()
	{
	var pl = document.getElementById('playlist');
	switch (pl.options[pl.selectedIndex].value)
		{
		case 'none': playlist.src = ''; break;
		case 'dm_icon': playlist.src = 'resources/images/Playlist_Icons/DM_Icon.png'; break;
		case 'beast': playlist.src = 'resources/images/Playlist_Icons/spdy4/Beast.png'; break;
		case 'burst': playlist.src = 'resources/images/Playlist_Icons/spdy4/Burst.png'; break;
		case 'cactus': playlist.src = 'resources/images/Playlist_Icons/spdy4/Cactus.png'; break;
		case 'chain': playlist.src = 'resources/images/Playlist_Icons/spdy4/Chain.png'; break;
		case 'crystal': playlist.src = 'resources/images/Playlist_Icons/spdy4/Crystal.png'; break;
		case 'disc': playlist.src = 'resources/images/Playlist_Icons/spdy4/Disc.png'; break;
		case 'disco': playlist.src = 'resources/images/Playlist_Icons/spdy4/Disco.png'; break;
		case 'dollar': playlist.src = 'resources/images/Playlist_Icons/spdy4/Dollar.png'; break;
		case 'flame': playlist.src = 'resources/images/Playlist_Icons/spdy4/Flame.png'; break;
		case 'floppy': playlist.src = 'resources/images/Playlist_Icons/spdy4/Floppy.png'; break;
		case 'galaxy': playlist.src = 'resources/images/Playlist_Icons/spdy4/Galaxy.png'; break;
		case 'glitch': playlist.src = 'resources/images/Playlist_Icons/spdy4/Glitch.png'; break;
		case 'headphone': playlist.src = 'resources/images/Playlist_Icons/spdy4/Headphone.png'; break;
		case 'heartbreaker': playlist.src = 'resources/images/Playlist_Icons/spdy4/Heartbreaker.png'; break;
		case 'knight': playlist.src = 'resources/images/Playlist_Icons/spdy4/Knight.png'; break;
		case 'longhorn': playlist.src = 'resources/images/Playlist_Icons/spdy4/Longhorn.png'; break;
		case 'phone': playlist.src = 'resources/images/Playlist_Icons/spdy4/Phone.png'; break;
		case 'ring': playlist.src = 'resources/images/Playlist_Icons/spdy4/Ring.png'; break;
		case 'rodeo': playlist.src = 'resources/images/Playlist_Icons/spdy4/Rodeo.png'; break;
		case 'sheriff': playlist.src = 'resources/images/Playlist_Icons/spdy4/Sheriff.png'; break;
		case 'snowflake': playlist.src = 'resources/images/Playlist_Icons/spdy4/Snowflake.png'; break;
		case 'starship': playlist.src = 'resources/images/Playlist_Icons/spdy4/Starship.png'; break;
		case 'strong': playlist.src = 'resources/images/Playlist_Icons/spdy4/Strong.png'; break;
		case 'vinyl': playlist.src = 'resources/images/Playlist_Icons/spdy4/Vinyl.png'; break;
		case 'wrench': playlist.src = 'resources/images/Playlist_Icons/spdy4/Wrench.png'; break;
		}
	draw();
	}

//DETECT ART-RELATED CHANGES AND REDRAW
//ART SCALE HORIZONTAL CHANGED
function artscalehchanged()
	{
		var artscalehslider = document.getElementById('artscalehslider');
		var artscalehbox = document.getElementById('artscalehbox');
		if (artscalehslider.value!=0)
		{
		artscalehbox.value = artscalehslider.value;
		if (!isNaN(artscalehslider.value))
			{
			var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscaleh = artscalehslider.value;
			canvas_art.scale(artscaleh, artscalev);
			}
		}
		draw();
	}
function artscalehboxchanged()
	{
		var artscalehslider = document.getElementById('artscalehslider');
		var artscalehbox = document.getElementById('artscalehbox');
		if (artscalehbox.value!=0)
		{
		artscalehslider.value = artscalehbox.value;
		if (!isNaN(artscalehbox.value))
			{
			var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscaleh = artscalehbox.value;
			canvas_art.scale(artscaleh, artscalev);
			}
		}
		draw();
	}
//ART SCALE VERTICAL CHANGED
function artscalevchanged()
	{
		var artscalevslider = document.getElementById('artscalevslider');
		var artscalevbox = document.getElementById('artscalevbox');
		if (artscalevslider.value!=0)
		{
		artscalevbox.value = artscalevslider.value;
		if (!isNaN(artscalevslider.value))
			{
			var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscalev = artscalevslider.value;
			canvas_art.scale(artscaleh, artscalev);
			}
		}
		draw();
	}
function artscalevboxchanged()
	{
		var artscalevslider = document.getElementById('artscalevslider');
		var artscalevbox = document.getElementById('artscalevbox');
		if (artscalevbox.value!=0) 
		{
		artscalevslider.value = artscalevbox.value;
		if (!isNaN(artscalevbox.value))
			{
			var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscalev = artscalevbox.value;
			canvas_art.scale(artscaleh, artscalev);
			}
		}
		draw();
	}
//ART ROTATION CHANGED
function artrotationchanged()
	{
		var artrotationslider = document.getElementById('artrotationslider');
		var artrotationbox = document.getElementById('artrotationbox');
		artrotationslider.value = Number(artrotationslider.value);
		artrotationbox.value = Number(artrotationslider.value);
		if (!isNaN(artrotationslider.value))
			{
			var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.rotate(-1*artrotation);
			artrotation = Number(artrotationslider.value*Math.PI/180);
			canvas_art.rotate(artrotationslider.value*Math.PI/180);
			}
		draw();
	}
function artrotationboxchanged()
	{
		var artrotationslider = document.getElementById('artrotationslider');
		var artrotationbox = document.getElementById('artrotationbox');
		artrotationbox.value = Number(artrotationbox.value);
		artrotationslider.value = Number(artrotationbox.value);
		if (!isNaN(artrotationbox.value))
			{
			var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.rotate(-1*artrotation);
			artrotation = Number(artrotationbox.value*Math.PI/180);
			canvas_art.rotate(artrotationbox.value*Math.PI/180);
			}
		draw();
	}

//SCALE CARD ART WIDTH/HEIGHT PROPORTIONALLY TO FIT (WHEN IMAGE INITIALLY LOADS)
	//SCALE TO FIT WIDTH PROPORTIONALLY
	function scalehorizontal()
	{
		var usescale = ((art_x2-art_x1) / artimg.width) ; //only difference with scalevertical
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscaleh = usescale; artscalev = usescale;
			canvas_art.scale(artscaleh, artscalev);
		var artscalehslider = document.getElementById('artscalehslider'); var artscalehbox = document.getElementById('artscalehbox'); var artscalevslider = document.getElementById('artscalevslider'); var artscalevbox = document.getElementById('artscalevbox');
		artscalehslider.value = usescale; artscalehbox.value = usescale; artscalevslider.value = usescale; artscalevbox.value = usescale;
		artscalehboxchanged(); artscalevboxchanged();
	}
	//SCALE TO FIT HEIGHT PROPORTIONALLY
	function scalevertical()
	{
		var usescale = ((art_y2-art_y1) / artimg.height); //only difference with scalehorizontal
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscaleh = usescale; artscalev = usescale;
			canvas_art.scale(artscaleh, artscalev);
		var artscalehslider = document.getElementById('artscalehslider'); var artscalehbox = document.getElementById('artscalehbox'); var artscalevslider = document.getElementById('artscalevslider'); var artscalevbox = document.getElementById('artscalevbox');
		artscalehslider.value = usescale; artscalehbox.value = usescale; artscalevslider.value = usescale; artscalevbox.value = usescale;
		artscalehboxchanged(); artscalevboxchanged();
	}
	//SCALE TO MINIMUM WIDTH AND HEIGHT PROPORTIONALLY
	function scaletominimum()
	{
		if (artimg.width/(art_x2-art_x1) < artimg.height/(art_y2-art_y1)) scalehorizontal(); else scalevertical(); //default scale to fit
	}
	
//SCALE CARD ART WIDTH/HEIGHT TO FIT INDEPENDENTLY
	//SCALE WIDTH TO FIT
	function scalehfit()
	{
		var usescale = ((art_x2-art_x1) / artimg.width);
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscaleh = usescale;
			canvas_art.scale(artscaleh, artscalev);
		var artscalehslider = document.getElementById('artscalehslider'); var artscalehbox = document.getElementById('artscalehbox');
		artscalehslider.value = usescale; artscalehbox.value = usescale;
		artscalehboxchanged();
	}
	//SCALE HEIGHT TO FIT
	function scalevfit()
	{
		var usescale = ((art_y2-art_y1) / artimg.height);
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscalev = usescale;
			canvas_art.scale(artscaleh, artscalev);
		var artscalevslider = document.getElementById('artscalevslider'); var artscalevbox = document.getElementById('artscalevbox');
		artscalevslider.value = usescale; artscalevbox.value = usescale;
		artscalevboxchanged();
	}
	
//SCALE CARD ART WIDTH/HEIGHT TO ORIGINAL SIZE
	//SCALE WIDTH TO ORIGINAL SIZE
	function scalehoriginal()
	{
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1); artscaleh = 1;
		var artscalehslider = document.getElementById('artscalehslider'); var artscalehbox = document.getElementById('artscalehbox');
		artscalehslider.value = 1; artscalehbox.value = 1;
		artscalehboxchanged();
	}
	//SCALE HEIGHT TO ORIGINAL SIZE
	function scalevoriginal()
	{
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1, 1/artscalev); artscalev = 1;
		var artscalevslider = document.getElementById('artscalevslider'); var artscalevbox = document.getElementById('artscalevbox');
		artscalevslider.value = 1; artscalevbox.value = 1;
		artscalevboxchanged();
	}

//CENTER CARD ART //NOT WORKING WITH ROTATION
	//CENTER CARD ART HORIZONTALLY
	function centerarth()
		{
		if(confirm('Are you sure you want to move the card\'s artwork to the center horizontally?'))
			{
			//no rounding, more accurate
			art_x = (flipmul_h*(art_x2+art_x1)/2 - artimg.width*artscaleh/2)/artscaleh;
			draw();
			}
		}
	//CENTER CARD ART HORIZONTALLY
	function centerartv()
		{
		if(confirm('Are you sure you want to move the card\'s artwork to the center vertically?'))
			{
			//no rounding, more accurate
			art_y = (flipmul_v*(art_y2+art_y1)/2 - artimg.height*artscalev/2)/artscalev;
			draw();
			}
		}
	//CENTER BOTH
	function centerart()
		{
		if(confirm('Are you sure you want to move the card\'s artwork to the center?'))
			{
			//no rounding, more accurate
			art_x = (flipmul_h*(art_x2+art_x1)/2 - artimg.width*artscaleh/2)/artscaleh;
			art_y = (flipmul_v*(art_y2+art_y1)/2 - artimg.height*artscalev/2)/artscalev;
			//rounded results, sometimes off by a pixel
			//art_x = Math.round((flipmul_h*art_x1 + flipmul_h*(art_x2-art_x1)/2 - artimg.width*artscaleh/2)/artscaleh);
			//art_y = Math.round((flipmul_v*art_y1 + flipmul_v*(art_y2-art_y1)/2 - artimg.height*artscalev/2)/artscalev);
			draw();
			}
		}

//FLIP CARD ART
	//HORIZONTAL FLIP
	function flipart_h()
		{
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
		//adjust canvas based on current flip
		canvas_art.scale(-1, 1); art_x = -1*art_x;
		//adjust flip variables after adjustments
		flipped_h = !flipped_h; if (flipped_h) flipmul_h = -1; else flipmul_h = 1;
		artrotation = 2*Math.PI-artrotation;
			if (artrotation > 2*Math.PI) artrotation -= 2*Math.PI; if (artrotation < -2*Math.PI) artrotation += 2*Math.PI;
		var artrotationslider = document.getElementById('artrotationslider'); artrotationslider.value = 180-artrotationslider.value;
			if (artrotationslider.value <= -360) artrotationslider.value += 360; if (artrotationslider.value >= 360) artrotationslider.value -= 360;
		var artrotationbox = document.getElementById('artrotationbox'); artrotationbox.value = 180-artrotationbox.value;
			if (artrotationbox.value <= -360) artrotationbox.value += 360; if (artrotationbox.value >= 360) artrotationbox.value -= 360;
		}
	//VERTICAL FLIP
	function flipart_v()
		{
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
		//adjust canvas based on current flip
		canvas_art.scale(1, -1); art_y = -1*art_y;
		//adjust flip variables after adjustments
		flipped_v = !flipped_v;	if (flipped_v) flipmul_v = -1; else flipmul_v = 1;
		artrotation = 2*Math.PI-artrotation;
		var artrotationslider = document.getElementById('artrotationslider'); artrotationslider.value = 360-artrotationslider.value;
			if (artrotationslider.value <= -360) artrotationslider.value += 360; if (artrotationslider.value >= 360) artrotationslider.value -= 360;
		var artrotationbox = document.getElementById('artrotationbox'); artrotationbox.value = 360-artrotationbox.value;
			if (artrotationbox.value <= -360) artrotationbox.value += 360; if (artrotationbox.value >= 360) artrotationbox.value -= 360;
		}

//RESET TRANSFORMATIONS TO CARD ART
function resetart()
	{
	if(confirm('Are you sure you want to undo all changes made to the card\'s current artwork?'))
		{
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
		//Reset Size
		canvas_art.scale(1/artscaleh, 1/artscalev);
		artscaleh = 1; artscalev = 1;
		canvas_art.transform(1,0,0,1,0,0);
		var artscalehslider = document.getElementById('artscalehslider'); artscalehslider.value = 1;
		var artscalehbox = document.getElementById('artscalehbox'); artscalehbox.value = 1;
		var artscalevslider = document.getElementById('artscalevslider'); artscalevslider.value = 1;
		var artscalevbox = document.getElementById('artscalevbox'); artscalevbox.value = 1;
		//Reset Rotation
		var artrotationslider = document.getElementById('artrotationslider'); artrotationslider.value = 0;
		var artrotationbox = document.getElementById('artrotationbox'); artrotationbox.value = 0;
		canvas_art.rotate(-1*artrotation);
		artrotation = 0;
		//Reset Flipping
		if (flipped_h == true) canvas_art.scale(-1, 1); flipped_h = false; flipmul_h = 1;
		if (flipped_v == true) canvas_art.scale(1, -1); flipped_v = false; flipmul_v = 1;
		//Reset Position //NOT WORKING WITH ROTATION
		//no rounding, more accurate
		art_x = art_x1 + (art_x2-art_x1)/2 - artimg.width/2;
		art_y = art_y1 + (art_y2-art_y1)/2 - artimg.height/2;
		//rounded results, sometimes off by a pixel
		//art_x = Math.round(art_x1 + (art_x2-art_x1)/2 - artimg.width/2);
		//art_y = Math.round(art_y1 + (art_y2-art_y1)/2 - artimg.height/2);
		draw();
		}
	}

//CLEAR CARD ART
function clearart()
	{
	if(confirm('Are you sure you want to erase the card\'s current artwork?'))
		{
		artloaded = false;
		artimg.src = "";
		document.getElementById('imguploadform').reset();
		art_x = art_x1;
		art_y = art_y1;
		disableartcontrols();
		draw();
		}
	}

//RESET TO DEFAULT TEXT
function resettext()
	{
	if(confirm('Are you sure you want to reset all text on this card to the default?)'))
		{
		//Reset text
		document.getElementById('text_artist').value 	= def_artist;
		document.getElementById('text_title').value 	= def_title;
		document.getElementById('text_series_id').value = def_series_id;
		document.getElementById('text_card_id').value 	= def_card_id;
		document.getElementById('text_card_num').value	= def_card_num;
		textchanged();
		draw();
		}
	}

//RESET TO BLANK CARD WITH DEFAULT TEXT IF RESET BUTTON IS PRESSED
function resetcard()
	{
	if(confirm('Are you sure you want to erase this card and start from a blank card? (Artwork, Power Level, Instruments, Playlist Icon will all be removed. Text will be reset to the default)'))
		{
		//Reset text
		document.getElementById('text_artist').value 	= def_artist;
		document.getElementById('text_title').value 	= def_title;
		document.getElementById('text_series_id').value = def_series_id;
		document.getElementById('text_card_id').value 	= def_card_id;
		document.getElementById('text_card_num').value	= def_card_num;
		textchanged();
		//Reset power level
		if (document.querySelector('input[name="level"]:checked'))
			document.querySelector('input[name="level"]:checked').checked = false;
		levelchanged();
		//Reset instruments
		var i1 = document.getElementById('instrument1'); i1.selectedIndex = 0;
		var i2 = document.getElementById('instrument2'); i2.selectedIndex = 0;
		var i4 = document.getElementById('instrument4'); i4.selectedIndex = 0;
		var i3 = document.getElementById('instrument3'); i3.selectedIndex = 0;
		instrumentchanged();
		//Reset playlist
		var pl = document.getElementById('playlist');
			//pl.selectedIndex = 0; //set to DM Icon by default instead of blank using below
			//set to DM Icon by default
			var ploptions= pl.options;
			for (var i=0; i<ploptions.length; i++) {
				if (ploptions[i].value=='dm') {
					pl.selectedIndex = i;
					break;
				}
			}
		playlistchanged();
		//Reset card art
		artloaded = false;
		artimg.src = "";
		document.getElementById('imguploadform').reset();
		art_x = art_x1;
		art_y = art_y1;
		disableartcontrols();
		
		draw();
		}
	}

//REDRAW TEXT CANVAS CONTENTS - DRAWN TO VISIBLE CANVAS IN draw()
function drawtext()
	{
	//Resize the canvas depending on zoom [same as in init()]
	//---
		factor = Math.max(def_width/textcanvas.getElement().getAttribute("width"),
						  def_height/textcanvas.getElement().getAttribute("height"));
						  //console.log(factor + " factor");
		if (factor != 1)
		{
		textcanvas.setDimensions({width: def_width*factor, height:def_height*factor});
		textcanvas.setZoom(factor);
		}
	//---
	if (text_artist) textcanvas.remove(text_artist);
	if (text_title)  textcanvas.remove(text_title);
	if (text_title1) textcanvas.remove(text_title1);
	if (text_title2) textcanvas.remove(text_title2);
	if (text_title3) textcanvas.remove(text_title3);
	if (text_title4) textcanvas.remove(text_title4);
	if (text_series_id) textcanvas.remove(text_series_id);
	if (text_card_id) textcanvas.remove(text_card_id);
	if (text_card_num) textcanvas.remove(text_card_num);

	text_artist = new fabric.Text(artist.toUpperCase(), {
	  fontFamily: 'boldtext',
	  fontWeight:400,
	  fontSize:fs_artist,
	  charSpacing:sp_artist,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	if (typeof title != 'undefined')
	text_title = new fabric.Text(title.toUpperCase(), {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_title,
	  charSpacing:sp_title,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	if (typeof title1 != 'undefined')
	//FOR TESTING text_title1 = new fabric.Text('THROUGH THE FIRE AND FLAMES'.toUpperCase(), {
	text_title1 = new fabric.Text(title1.toUpperCase(), {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_title,
	  charSpacing:sp_title,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	if (typeof title2 != 'undefined')
	text_title2 = new fabric.Text(title2.toUpperCase(), {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_title,
	  charSpacing:sp_title,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	if (typeof title3 != 'undefined')
	text_title3 = new fabric.Text(title3.toUpperCase(), {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_title,
	  charSpacing:sp_title,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	if (typeof title4 != 'undefined')
	text_title4 = new fabric.Text(title4.toUpperCase(), {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_title,
	  charSpacing:sp_title,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	text_series_id = new fabric.Text(series_id, {
	  fontFamily: 'boldtext',
	  fontWeight:400,
	  fontSize:fs_series_id,
	  charSpacing:sp_series_id,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	text_card_id = new fabric.Text(card_id, {
	  fontFamily: 'boldtext',
	  fontWeight:400,
	  fontSize:fs_card_id,
	  charSpacing:sp_card_id,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	text_card_num = new fabric.Text(card_num, {
	  fontFamily: 'boldtext',
	  fontWeight:400,
	  align: 'mid', //added
	  originX: 'center', //added
	  fontSize:fs_card_num,
	  charSpacing:sp_card_num,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	textcanvas.add(text_artist);
	//if (typeof title  != 'undefined') textcanvas.add(text_title);
	if (typeof title1 != 'undefined') textcanvas.add(text_title1);
	if (typeof title2 != 'undefined') textcanvas.add(text_title2);
	if (typeof title3 != 'undefined') textcanvas.add(text_title3);
	if (typeof title4 != 'undefined') textcanvas.add(text_title4);
	textcanvas.add(text_series_id);
	textcanvas.add(text_card_id);
	textcanvas.add(text_card_num);

	text_artist.set({ 		left: pos_artist[0], 	top: pos_artist[1] });
	if (typeof title1 != 'undefined') text_title1.set({ 		left: pos_title1[0], 	top: pos_title1[1] });
	if (typeof title2 != 'undefined') text_title2.set({ 		left: pos_title2[0], 	top: pos_title2[1] });
	if (typeof title3 != 'undefined') text_title3.set({ 		left: pos_title3[0], 	top: pos_title3[1] });
	if (typeof title4 != 'undefined') text_title4.set({ 		left: pos_title4[0], 	top: pos_title4[1] });
	text_series_id.set({ 	left: pos_series_id[0], top: pos_series_id[1] });
	text_card_id.set({ 		left: pos_card_id[0], 	top: pos_card_id[1] });
	text_card_num.set({ 	left: pos_card_num[0], 	top: pos_card_num[1] });
	}

//MAIN DRAW FUNCTION
function draw()
	{
		if (doneloading && acceptedterms)
		{
		drawtext();
		//Reset canvases
		var canvas_bg = document.getElementById('canvas_bg');
		var canvas = document.getElementById('canvas');
		canvas_bg.getContext('2d').clearRect(0, 0, canvas_bg.width, canvas_bg.height);
		canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
		
		//Card Art canvas
		//clear card art's canvas before drawing transformed canvas
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
		canvas_art.save();
		canvas_art.setTransform(1, 0, 0, 1, 0, 0);
		canvas_art.clearRect(0, 0, canvas_art.canvas.width, canvas_art.canvas.height);
		canvas_art.restore();
		if (artloaded == true)
			{
			canvas_art.drawImage(artimg, art_x, art_y);
			}

		//Blank Card canvas
		var canvas_bg = document.getElementById('canvas_bg').getContext('2d');
		canvas_bg.drawImage(blankcard, 0, 0);
		canvas_bg.drawImage(powerlevel, 0, 0);
		canvas_bg.drawImage(instrument1, 0, 0);
		canvas_bg.drawImage(instrument2, 0, 0);
		canvas_bg.drawImage(instrument3, 0, 0);
		canvas_bg.drawImage(instrument4, 0, 0);
		canvas_bg.drawImage(playlist, 0, 0);
		
		var canvas = document.getElementById('canvas').getContext('2d');
		var canvas_art = document.getElementById('canvas_art');
		var canvas_bg = document.getElementById('canvas_bg');
		canvas.save(); //saves state without clipping path
			canvas.rect(art_x1, art_y1, art_x2-art_x1, art_y2-art_y1);
			canvas.clip();
			canvas.drawImage(canvas_art,0,0);
		canvas.restore(); //restores state without clipping path
		canvas.drawImage(canvas_bg,0,0);
		
		textcanvas.getContext('2d').imageSmoothingEnabled = false;
		canvas.drawImage(textcanvas.getElement(),0,0,def_width,def_height);
		}
	}