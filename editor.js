//INIT LOADING VARIABLES
var doneloading = false;
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
'resources/images/Playlist_Icons/Astro.png',
//'resources/images/Playlist_Icons/Baffler.png',
'resources/images/Playlist_Icons/The_Blade.png',
'resources/images/Playlist_Icons/Bomb.png',
'resources/images/Playlist_Icons/Breaker.png',
'resources/images/Playlist_Icons/Chiller.png',
'resources/images/Playlist_Icons/Controller.png',
'resources/images/Playlist_Icons/Dapper.png',
'resources/images/Playlist_Icons/Derby.png',
//'resources/images/Playlist_Icons/DM_Icon.png',
//'resources/images/Playlist_Icons/Fever.png',
'resources/images/Playlist_Icons/Flawless.png',
'resources/images/Playlist_Icons/Highness.png',
'resources/images/Playlist_Icons/Hightower.png',
'resources/images/Playlist_Icons/Lucky.png',
'resources/images/Playlist_Icons/Mirrors.png',
'resources/images/Playlist_Icons/Moonlight.png',
'resources/images/Playlist_Icons/Ouroboros.png',
'resources/images/Playlist_Icons/Puff.png',
'resources/images/Playlist_Icons/Seer.png',
//'resources/images/Playlist_Icons/Socket.png',
'resources/images/Playlist_Icons/Sweets.png',
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

//WARN USER BEFORE EXITING
var confirmed = false;
var allowPrompt = true;
function confirmdelete()
{
	if (doneloading)
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





































//INITIALIZE CARD ARTWORK RELATED FUNCTIONS
function art_init()
{
	var artscalehslider = document.getElementById('artscalehslider'); artscalehslider.value = 1; artscalehslider.disabled = true;
	var artscalevslider = document.getElementById('artscalevslider'); artscalevslider.value = 1; artscalevslider.disabled = true;
	var artscalehbox = document.getElementById('artscalehbox'); artscalehbox.value = 1; artscalehbox.disabled = true;
	var artscalevbox = document.getElementById('artscalevbox'); artscalevbox.value = 1; artscalevbox.disabled = true;
	var artrotationslider = document.getElementById('artrotationslider'); artrotationslider.value = 0; artrotationslider.disabled = true;
	var artrotationbox = document.getElementById('artrotationbox'); artrotationbox.value = 0; artrotationbox.disabled = true;
	artscaleh = 1; artscalev = 1; artrotation = 0;
	
	var centerart = document.getElementById('centerart'); centerart.disabled = true;
	var flipart_h = document.getElementById('flipart_h'); flipart_h.disabled = true;
	var flipart_v = document.getElementById('flipart_v'); flipart_v.disabled = true;
	var resetart = document.getElementById('resetart'); resetart.disabled = true;
	var clearart = document.getElementById('clearart'); clearart.disabled = true;
	
	//Draw card art when source image loads and reset it to the top left of card art window
	artimg.addEventListener("load", function () {
		
		artloaded = true;
		
		var artscalehslider = document.getElementById('artscalehslider'); artscalehslider.value = 1; artscalehslider.disabled = false;
		var artscalehbox = document.getElementById('artscalehbox'); artscalehbox.value = 1; artscalehbox.disabled = false;
		var artscalevslider = document.getElementById('artscalevslider'); artscalevslider.value = 1; artscalevslider.disabled = false;
		var artscalevbox = document.getElementById('artscalevbox'); artscalevbox.value = 1; artscalevbox.disabled = false;
		var artrotationslider = document.getElementById('artrotationslider'); artrotationslider.value = 0; //artrotationslider.disabled = false;
		var artrotationbox = document.getElementById('artrotationbox'); artrotationbox.value = 0; //artrotationbox.disabled = false;
		artscaleh = 1; artscalev = 1; artrotation = 0;
		
		var centerart = document.getElementById('centerart'); centerart.disabled = false;
		var flipart_h = document.getElementById('flipart_h'); flipart_h.disabled = false;
		var flipart_v = document.getElementById('flipart_v'); flipart_v.disabled = false;
		var resetart = document.getElementById('resetart'); resetart.disabled = false;
		var clearart = document.getElementById('clearart'); clearart.disabled = false;
		
		art_x = Math.round(art_x1 + (art_x2-art_x1)/2 - artimg.width/2);
		art_y = Math.round(art_y1 + (art_y2-art_y1)/2 - artimg.height/2);
		
		var canvas_art = document.getElementById('canvas_art').getContext('2d');
		canvas_art.scale(1, 1);
		if (flipped_h == true) canvas_art.scale(-1, 1); flipped_h = false; flipmul_h = 1;
		if (flipped_v == true) canvas_art.scale(1, -1); flipped_v = false; flipmul_v = 1;
		draw();
	}, false);
	
	// To enable drag and drop image into canvas
	canvas.addEventListener("dragover", function (evt) {
		evt.preventDefault();
		}, false);
	// Handle dropped image file - (only Firefox and Google Chrome???)
	canvas.addEventListener("drop", function (evt) {
		//get new image but don't change until confirmed
		var newsrc;
		var url = evt.dataTransfer.getData('text/plain');
		var files = evt.dataTransfer.files;
			if (files.length > 0) {
				var file = files[0];
				if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -1)
					{
					var reader = new FileReader();
					// Note: addEventListener doesn't work in Google Chrome for this event
					reader.onload = function (evt) {
						newsrc = evt.target.result;
					};
					reader.readAsDataURL(file);
				}
			}
		evt.preventDefault();
		//ask the user to confirm they want to replace the current card art image
		if(confirm('Are you sure you want to change the current card art?'))
		{
			artloaded = false;
			if(url) artimg.src = url;
			if(newsrc) artimg.src = newsrc;
			document.getElementById('imguploadform').reset();
			
			var artscalehslider = document.getElementById('artscalehslider'); artscalehslider.value = 1; artscalehslider.disabled = true;
			var artscalehbox = document.getElementById('artscalehbox'); artscalehbox.value = 1; artscalehbox.disabled = true;
			var artscalevslider = document.getElementById('artscalevslider'); artscalevslider.value = 1; artscalevslider.disabled = true;
			var artscalevbox = document.getElementById('artscalevbox'); artscalevbox.value = 1; artscalevbox.disabled = true;
			var artrotationslider = document.getElementById('artrotationslider'); artrotationslider.value = 0; artrotationslider.disabled = true;
			var artrotationbox = document.getElementById('artrotationbox'); artrotationbox.value = 0; artrotationbox.disabled = true;
			artscaleh = 1; artscalev = 1; artrotation = 0;
			
			var centerart = document.getElementById('centerart'); centerart.disabled = true;
			var flipart_h = document.getElementById('flipart_h'); flipart_h.disabled = true;
			var flipart_v = document.getElementById('flipart_v'); flipart_v.disabled = true;
			var resetart = document.getElementById('resetart'); resetart.disabled = true;
			var clearart = document.getElementById('clearart'); clearart.disabled = true;
		}
		draw();
	}, false);

	
	//Movement of card art
	var startingX, startingY;
	var distX, distY;
	var artisDraggable = false;
	canvas.onmousedown = canvas.ontouchstart = function(e) {
		if (e.button == 0 || e.type == "touchstart")
		{
		startingX = e.clientX;
		startingY = e.clientY;
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
		art_x = art_x + flipmul_h*(e.clientX-startingX)/artscaleh;
		art_y = art_y + flipmul_v*(e.clientY-startingY)/artscalev;
		draw();
		startingX = e.clientX;
		startingY = e.clientY;
		if (e.type == "touchmove") e.preventDefault();
		}
	};
	
	//Reset the uploaded image file, has no effect but cosmetic
	document.getElementById('imguploadform').reset();
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
	powerlevel = new Image();	//powerlevel.src = 'resources/images/Power_Levels/Wild_2.png';
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
	def_copyright = '\u2122 \u0026 \u00A9 2017 HARMONIX  \u00A9 2017 HASBROTHER';
	//def_copyright = '™ & © 2017 HARMONIX  © 2017 HASBROTHER';
	//def_copyright = '&trade; &amp; &copy; 2017 HARMONIX  &copy; 2017 HASBROTHER';
	//FOR REFERENCE FOR def_copyright
	//Ampersand & &amp;   U=0026 alt+38
	//Trademark ™ &trade; U+2122 alt+0153
	//Copyright © &copy;  U+00A9 alt+0169
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
	pos_copyright = [120.6, 727.8];
	pos_card_num = [489.4, 725.8];

	//Font size
	fs_artist = 24;
	fs_title = 23;
	fs_series_id = 15.5;
	fs_card_id = 15.5;
	fs_copyright = 12;
	fs_card_num = 14.5;

	//Text spacing
	sp_artist = 80;
	sp_title = 100;
	sp_series_id = 60;
	sp_card_id = 60;
	sp_copyright = 80;
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
	copyright = document.getElementById('text_copyright').value;
	card_num = document.getElementById('text_card_num').value;

	//Create text canvas
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
	copyright = document.getElementById('text_copyright').value;
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
	draw();
	}
function playlistchanged()
	{
	var pl = document.getElementById('playlist');
	switch (pl.options[pl.selectedIndex].value)
		{
		case 'none': playlist.src = ''; break;
		case 'astro': playlist.src = 'resources/images/Playlist_Icons/Astro.png'; break;
		//case 'baffler': playlist.src = 'resources/images/Playlist_Icons/Baffler.png'; break;
		case 'blade': playlist.src = 'resources/images/Playlist_Icons/The_Blade.png'; break;
		case 'bomb': playlist.src = 'resources/images/Playlist_Icons/Bomb.png'; break;
		case 'breaker': playlist.src = 'resources/images/Playlist_Icons/Breaker.png'; break;
		case 'chiller': playlist.src = 'resources/images/Playlist_Icons/Chiller.png'; break;
		case 'controller': playlist.src = 'resources/images/Playlist_Icons/Controller.png'; break;
		case 'dapper': playlist.src = 'resources/images/Playlist_Icons/Dapper.png'; break;
		case 'derby': playlist.src = 'resources/images/Playlist_Icons/Derby.png'; break;
		//case 'dm': playlist.src = 'resources/images/Playlist_Icons/DM_Icon.png'; break;
		//case 'fever': playlist.src = 'resources/images/Playlist_Icons/Fever.png'; break;
		case 'flawless': playlist.src = 'resources/images/Playlist_Icons/Flawless.png'; break;
		case 'highness': playlist.src = 'resources/images/Playlist_Icons/Highness.png'; break;
		case 'hightower': playlist.src = 'resources/images/Playlist_Icons/Hightower.png'; break;
		case 'lucky': playlist.src = 'resources/images/Playlist_Icons/Lucky.png'; break;
		case 'mirrors': playlist.src = 'resources/images/Playlist_Icons/Mirrors.png'; break;
		case 'moonlight': playlist.src = 'resources/images/Playlist_Icons/Moonlight.png'; break;
		case 'ouroboros': playlist.src = 'resources/images/Playlist_Icons/Ouroboros.png'; break;
		case 'puff': playlist.src = 'resources/images/Playlist_Icons/Puff.png'; break;
		case 'seer': playlist.src = 'resources/images/Playlist_Icons/Seer.png'; break;
		//case 'socket': playlist.src = 'resources/images/Playlist_Icons/Socket.png'; break;
		case 'sweets': playlist.src = 'resources/images/Playlist_Icons/Sweets.png'; break;
		}
	draw();
	}

//ART SCALE HORIZONTAL CHANGED
function artscalehchanged()
	{
		var artscalehslider = document.getElementById('artscalehslider');
		var artscalehbox = document.getElementById('artscalehbox');
		artscalehslider.value = Number(artscalehslider.value);
		artscalehbox.value = Number(artscalehslider.value);
		if (!isNaN(artscalehslider.value) && artscalehslider.value!=0)
			{
			var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscaleh = Number(artscalehslider.value);
			canvas_art.scale(artscaleh, artscalev);
			}
		draw();
	}
function artscalehboxchanged()
	{
		var artscalehslider = document.getElementById('artscalehslider');
		var artscalehbox = document.getElementById('artscalehbox');
		artscalehbox.value = Number(artscalehbox.value);
		artscalehslider.value = Number(artscalehbox.value);
		if (!isNaN(artscalehbox.value) && artscalehbox.value!=0)
			{
			var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscaleh = Number(artscalehbox.value);
			canvas_art.scale(artscaleh, artscalev);
			}
		draw();
	}
//ART SCALE VERTICAL CHANGED
function artscalevchanged()
	{
		var artscalevslider = document.getElementById('artscalevslider');
		var artscalevbox = document.getElementById('artscalevbox');
		artscalevslider.value = Number(artscalevslider.value);
		artscalevbox.value = Number(artscalevslider.value);
		if (!isNaN(artscalevslider.value) && artscalevslider.value!=0)
			{
			var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscalev = Number(artscalevslider.value);
			canvas_art.scale(artscaleh, artscalev);
			}
		draw();
	}
function artscalevboxchanged()
	{
		var artscalevslider = document.getElementById('artscalevslider');
		var artscalevbox = document.getElementById('artscalevbox');
		artscalevbox.value = Number(artscalevbox.value);
		artscalevslider.value = Number(artscalevbox.value);
		if (!isNaN(artscalevbox.value) && artscalevbox.value!=0)
			{
			var canvas_art = document.getElementById('canvas_art').getContext('2d');
			canvas_art.scale(1/artscaleh, 1/artscalev);
			artscalev = Number(artscalevbox.value);
			canvas_art.scale(artscaleh, artscalev);
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
		
		var artscalehslider = document.getElementById('artscalehslider'); artscalehslider.value = 1; artscalehslider.disabled = true;
		var artscalehbox = document.getElementById('artscalehbox'); artscalehbox.value = 1; artscalehbox.disabled = true;
		var artscalevslider = document.getElementById('artscalevslider'); artscalevslider.value = 1; artscalevslider.disabled = true;
		var artscalevbox = document.getElementById('artscalevbox'); artscalevbox.value = 1; artscalevbox.disabled = true;
		var artrotationslider = document.getElementById('artrotationslider'); artrotationslider.value = 0; artrotationslider.disabled = true;
		var artrotationbox = document.getElementById('artrotationbox'); artrotationbox.value = 0; artrotationbox.disabled = true;
		artscaleh = 1; artscalev = 1; artrotation = 0;
		
		var centerart = document.getElementById('centerart'); centerart.disabled = true;
		var flipart_h = document.getElementById('flipart_h'); flipart_h.disabled = true;
		var flipart_v = document.getElementById('flipart_v'); flipart_v.disabled = true;
		var resetart = document.getElementById('resetart'); resetart.disabled = true;
		var clearart = document.getElementById('clearart'); clearart.disabled = true;
		
		draw();
		}
	}

//CENTER CARD ART //NOT WORKING WITH ROTATION
function centerart()
	{
	if(confirm('Are you sure you want to move the card\'s artwork to the center?'))
		{
		art_x = Math.round((flipmul_h*art_x1 + flipmul_h*(art_x2-art_x1)/2 - artimg.width*artscaleh/2)/artscaleh);
		art_y = Math.round((flipmul_v*art_y1 + flipmul_v*(art_y2-art_y1)/2 - artimg.height*artscalev/2)/artscalev);
		draw();
		}
	}

//FLIP CARD ART
	//Horizontal Flip
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
	//Vertical Flip
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
		canvas_art.transform(1,0,0,1,0,0);
		var artscalehslider = document.getElementById('artscalehslider'); artscalehslider.value = 1; artscalehslider.disabled = false;
		var artscalehbox = document.getElementById('artscalehbox'); artscalehbox.value = 1; artscalehbox.disabled = false;
		var artscalevslider = document.getElementById('artscalevslider'); artscalevslider.value = 1; artscalevslider.disabled = false;
		var artscalevbox = document.getElementById('artscalevbox'); artscalevbox.value = 1; artscalevbox.disabled = false;
		artscaleh = 1; artscalev = 1;
		//Reset Rotation
		var artrotationslider = document.getElementById('artrotationslider'); artrotationslider.value = 0; //artrotationslider.disabled = false;
		var artrotationbox = document.getElementById('artrotationbox'); artrotationbox.value = 0; //artrotationbox.disabled = false;
		canvas_art.rotate(-1*artrotation);
		artrotation = 0;
		//Reset Flipping
		if (flipped_h == true) canvas_art.scale(-1, 1); flipped_h = false; flipmul_h = 1;
		if (flipped_v == true) canvas_art.scale(1, -1); flipped_v = false; flipmul_v = 1;
		//Reset Position //NOT WORKING WITH ROTATION
		art_x = Math.round(art_x1 + (art_x2-art_x1)/2 - artimg.width/2);
		art_y = Math.round(art_y1 + (art_y2-art_y1)/2 - artimg.height/2);
		draw();
		}
	}

//RESET TO BLANK CARD WITH DEFAULT IF RESET BUTTON IS PRESSED
function resetcard()
	{
	if(confirm('Are you sure you want to erase this card and start from a blank card?'))
		{
		//Reset text
		document.getElementById('text_artist').value 	= def_artist;
		document.getElementById('text_title').value 	= def_title;
		document.getElementById('text_series_id').value = def_series_id;
		document.getElementById('text_card_id').value 	= def_card_id;
		document.getElementById('text_copyright').value = def_copyright;
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
		var pl = document.getElementById('playlist'); pl.selectedIndex = 0;
		playlistchanged();
		//Reset card art
		artloaded = false;
		artimg.src = "";
		document.getElementById('imguploadform').reset();
		art_x = art_x1;
		art_y = art_y1;
		
		var artscalehslider = document.getElementById('artscalehslider'); artscalehslider.value = 1; artscalehslider.disabled = true;
		var artscalehbox = document.getElementById('artscalehbox'); artscalehbox.value = 1; artscalehbox.disabled = true;
		var artscalevslider = document.getElementById('artscalevslider'); artscalevslider.value = 1; artscalevslider.disabled = true;
		var artscalevbox = document.getElementById('artscalevbox'); artscalevbox.value = 1; artscalevbox.disabled = true;
		var artrotationslider = document.getElementById('artrotationslider'); artrotationslider.value = 0; artrotationslider.disabled = true;
		var artrotationbox = document.getElementById('artrotationbox'); artrotationbox.value = 0; artrotationbox.disabled = true;
		artscaleh = 1; artscalev = 1; artrotation = 0;
		
		var centerart = document.getElementById('centerart'); centerart.disabled = true;
		var flipart_h = document.getElementById('flipart_h'); flipart_h.disabled = true;
		var flipart_v = document.getElementById('flipart_v'); flipart_v.disabled = true;
		var resetart = document.getElementById('resetart'); resetart.disabled = true;
		var clearart = document.getElementById('clearart'); clearart.disabled = true;
		
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
	if (text_copyright) textcanvas.remove(text_copyright);
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

	text_copyright = new fabric.Text(copyright, {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_copyright,
	  charSpacing:sp_copyright,
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
	textcanvas.add(text_copyright);
	textcanvas.add(text_card_num);

	text_artist.set({ 		left: pos_artist[0], 	top: pos_artist[1] });
	if (typeof title1 != 'undefined') text_title1.set({ 		left: pos_title1[0], 	top: pos_title1[1] });
	if (typeof title2 != 'undefined') text_title2.set({ 		left: pos_title2[0], 	top: pos_title2[1] });
	if (typeof title3 != 'undefined') text_title3.set({ 		left: pos_title3[0], 	top: pos_title3[1] });
	if (typeof title4 != 'undefined') text_title4.set({ 		left: pos_title4[0], 	top: pos_title4[1] });
	text_series_id.set({ 	left: pos_series_id[0], top: pos_series_id[1] });
	text_card_id.set({ 		left: pos_card_id[0], 	top: pos_card_id[1] });
	text_copyright.set({ 	left: pos_copyright[0], top: pos_copyright[1] });
	text_card_num.set({ 	left: pos_card_num[0], 	top: pos_card_num[1] });
	}

//MAIN DRAW FUNCTION
function draw()
	{
		if (doneloading)
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