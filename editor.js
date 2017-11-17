//INIT LOADING VARIABLES
var doneloading = false;
var blankcard, powerlevel, instrument1, instrument2, instrument3, instrument4, playlist;

//PRELOAD IMAGES
var imagestoload = new Array();
//LIST OF IMAGES TO LOAD
imagestoload = [
'resources/images/Blank_Card.png',
'resources/images/Power_Levels/Wild_2.png',
'resources/images/Power_Levels/Yellow_3.png',
'resources/images/Power_Levels/Yellow_2.png',
'resources/images/Power_Levels/Red_3.png',
'resources/images/Power_Levels/Red_2.png',
'resources/images/Power_Levels/Red_1.png',
'resources/images/Power_Levels/Blue_3.png',
'resources/images/Power_Levels/Blue_2.png',
'resources/images/Power_Levels/Blue_1.png',
'resources/images/Power_Levels/Green_3.png',
'resources/images/Power_Levels/Green_2.png',
'resources/images/Instrument_Slot_1/Yellow_Vocals.png',
'resources/images/Instrument_Slot_1/Red_Guitar.png',
'resources/images/Instrument_Slot_1/Red_Keys.png',
'resources/images/Instrument_Slot_1/Red_Horns.png',
'resources/images/Instrument_Slot_1/Red_Strings.png',
'resources/images/Instrument_Slot_1/Blue_Drums.png',
'resources/images/Instrument_Slot_1/Green_Guitar.png',
'resources/images/Instrument_Slot_1/Green_Keys.png',
'resources/images/Instrument_Slot_2/Red_Guitar.png',
'resources/images/Instrument_Slot_2/Red_Keys.png',
'resources/images/Instrument_Slot_2/Red_Horns.png',
'resources/images/Instrument_Slot_2/Red_Strings.png',
'resources/images/Instrument_Slot_2/Red_Sampler.png',
'resources/images/Instrument_Slot_3/Blue_Drums.png',
'resources/images/Instrument_Slot_4/Green_Guitar.png',
'resources/images/Instrument_Slot_4/Green_Keys.png',
'resources/images/Playlist_Icons/Astro.png',
'resources/images/Playlist_Icons/The_Blade.png',
'resources/images/Playlist_Icons/Bomb.png',
'resources/images/Playlist_Icons/Breaker.png',
'resources/images/Playlist_Icons/Chiller.png',
'resources/images/Playlist_Icons/Controller.png',
'resources/images/Playlist_Icons/Dapper.png',
'resources/images/Playlist_Icons/Derby.png',
'resources/images/Playlist_Icons/Flawless.png',
'resources/images/Playlist_Icons/Highness.png',
'resources/images/Playlist_Icons/Hightower.png',
'resources/images/Playlist_Icons/Lucky.png',
'resources/images/Playlist_Icons/Mirrors.png',
'resources/images/Playlist_Icons/Moonlight.png',
'resources/images/Playlist_Icons/Ouroboros.png',
'resources/images/Playlist_Icons/Puff.png',
'resources/images/Playlist_Icons/Seer.png',
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
}
var elements = document.querySelectorAll('input[type=text], textarea, input[id^=text')
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", textchanged);
  elements[i].addEventListener("keyup", textchanged);
  elements[i].addEventListener("blur", textchanged);
  elements[i].addEventListener("change", textchanged);
  elements[i].addEventListener("click", textchanged);
}
var elements = document.querySelectorAll('input[name^=level]')
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", levelchanged);
  elements[i].addEventListener("keyup", levelchanged);
  elements[i].addEventListener("blur", levelchanged);
  elements[i].addEventListener("change", levelchanged);
  elements[i].addEventListener("click", levelchanged);
}
var elements = document.querySelectorAll('input[name^=instrument]')
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", instrumentchanged);
  elements[i].addEventListener("keyup", instrumentchanged);
  elements[i].addEventListener("blur", instrumentchanged);
  elements[i].addEventListener("change", instrumentchanged);
  elements[i].addEventListener("click", instrumentchanged);
}
var elements = document.querySelectorAll('input[name^=playlist]')
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", playlistchanged);
  elements[i].addEventListener("keyup", playlistchanged);
  elements[i].addEventListener("blur", playlistchanged);
  elements[i].addEventListener("change", playlistchanged);
  elements[i].addEventListener("click", playlistchanged);
}




























//INITIALIZE VARIABLES
function init()
	{
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
	def_copyright = '™ & © 2017 HARMONIX  © 2017 HASBROTHER';
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
	textcanvas  = new fabric.Canvas('canvas_text');
	textcanvas.id = "canvas_text";
	textcanvas.hidden = true;
	textcanvas.onLoad = "draw()";

	textchanged();
	levelchanged();
	instrumentchanged();
	playlistchanged();
	
	doneloading = true;
	draw();
	
	//Draw automatically after little bit, for some reason text doesn't show until here
	setTimeout(draw, 250); //0.25 sec
	setTimeout(draw, 500); //0.5 sec
	setTimeout(draw, 1000); //1.0 sec
	setTimeout(draw, 2000); //1.0 sec
	setTimeout(draw, 3000); //1.0 sec
	}

//REDRAW TEXT CANVAS CONTENTS - DRAWN TO VISIBLE CANVAS IN draw()
function drawtext()
	{
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

	text_artist = new fabric.IText(artist.toUpperCase(), {
	  fontFamily: 'boldtext',
	  fontWeight:400,
	  fontSize:fs_artist,
	  charSpacing:sp_artist,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	if (typeof title != 'undefined')
	text_title = new fabric.IText(title.toUpperCase(), {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_title,
	  charSpacing:sp_title,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	if (typeof title1 != 'undefined')
	//text_title1 = new fabric.IText('THROUGH THE FIRE AND FLAMES'.toUpperCase(), {
	text_title1 = new fabric.IText(title1.toUpperCase(), {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_title,
	  charSpacing:sp_title,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	if (typeof title2 != 'undefined')
	text_title2 = new fabric.IText(title2.toUpperCase(), {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_title,
	  charSpacing:sp_title,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	if (typeof title3 != 'undefined')
	text_title3 = new fabric.IText(title3.toUpperCase(), {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_title,
	  charSpacing:sp_title,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	if (typeof title4 != 'undefined')
	text_title4 = new fabric.IText(title4.toUpperCase(), {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_title,
	  charSpacing:sp_title,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	text_series_id = new fabric.IText(series_id, {
	  fontFamily: 'boldtext',
	  fontWeight:400,
	  fontSize:fs_series_id,
	  charSpacing:sp_series_id,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	text_card_id = new fabric.IText(card_id, {
	  fontFamily: 'boldtext',
	  fontWeight:400,
	  fontSize:fs_card_id,
	  charSpacing:sp_card_id,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	text_copyright = new fabric.IText(copyright, {
	  fontFamily: 'lighttext',
	  fontWeight:400,
	  fontSize:fs_copyright,
	  charSpacing:sp_copyright,
	  fontKerning: 'none !important',
	  fill:"white",
	});

	text_card_num = new fabric.IText(card_num, {
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
		var canvas_bg = document.getElementById('canvas_bg');		canvas.drawImage(canvas_bg,0,0);
		var canvas_text = document.getElementById('canvas_text');	canvas.drawImage(canvas_text,0,0);
		}
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
	drawtext();
	draw();
	}
function levelchanged()
	{
	if (!document.querySelector('input[name="level"]:checked')) powerlevel.src = '';
	else
	switch (document.querySelector('input[name="level"]:checked').value)
		{
		case 'w3': break;
		case 'w2': powerlevel.src = 'resources/images/Power_Levels/Wild_2.png'; break;
		case 'w1': break;
		case 'y3': powerlevel.src = 'resources/images/Power_Levels/Yellow_3.png'; break;
		case 'y2': powerlevel.src = 'resources/images/Power_Levels/Yellow_2.png'; break;
		case 'y1': break;
		case 'r3': powerlevel.src = 'resources/images/Power_Levels/Red_3.png'; break;
		case 'r2': powerlevel.src = 'resources/images/Power_Levels/Red_2.png'; break;
		case 'r1': powerlevel.src = 'resources/images/Power_Levels/Red_1.png'; break;
		case 'b3': powerlevel.src = 'resources/images/Power_Levels/Blue_3.png'; break;
		case 'b2': powerlevel.src = 'resources/images/Power_Levels/Blue_2.png'; break;
		case 'b1': powerlevel.src = 'resources/images/Power_Levels/Blue_1.png'; break;
		case 'g3': powerlevel.src = 'resources/images/Power_Levels/Green_3.png'; break;
		case 'g2': powerlevel.src = 'resources/images/Power_Levels/Green_2.png'; break;
		case 'g1': break;
		case 'f3': break;
		case 'f2': break;
		case 'f1': break;
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
		case 'rguitar': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Guitar.png'; break;
		case 'rkeys': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Keys.png'; break;
		case 'rhorns': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Horns.png'; break;
		case 'rstrings': instrument1.src = 'resources/images/Instrument_Slot_1/Red_Strings.png'; break;
		case 'bdrums': instrument1.src = 'resources/images/Instrument_Slot_1/Blue_Drums.png'; break;
		case 'gguitar': instrument1.src = 'resources/images/Instrument_Slot_1/Green_Guitar.png'; break;
		case 'gkeys': instrument1.src = 'resources/images/Instrument_Slot_1/Green_Keys.png'; break;
		}
	switch (i2.options[i2.selectedIndex].value)
		{
		case 'none': instrument2.src = ''; break;
		case 'rguitar': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Guitar.png'; break;
		case 'rkeys': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Keys.png'; break;
		case 'rhorns': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Horns.png'; break;
		case 'rstrings': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Strings.png'; break;
		case 'rsampler': instrument2.src = 'resources/images/Instrument_Slot_2/Red_Sampler.png'; break;
		}
	switch (i3.options[i3.selectedIndex].value)
		{
		case 'none': instrument3.src = ''; break;
		case 'bdrums': instrument3.src = 'resources/images/Instrument_Slot_3/Blue_Drums.png'; break;
		}
	switch (i4.options[i4.selectedIndex].value)
		{
		case 'none': instrument4.src = ''; break;
		case 'gguitar': instrument4.src = 'resources/images/Instrument_Slot_4/Green_Guitar.png'; break;
		case 'gkeys': instrument4.src = 'resources/images/Instrument_Slot_4/Green_Keys.png'; break;
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
		case 'blade': playlist.src = 'resources/images/Playlist_Icons/The_Blade.png'; break;
		case 'bomb': playlist.src = 'resources/images/Playlist_Icons/Bomb.png'; break;
		case 'breaker': playlist.src = 'resources/images/Playlist_Icons/Breaker.png'; break;
		case 'chiller': playlist.src = 'resources/images/Playlist_Icons/Chiller.png'; break;
		case 'controller': playlist.src = 'resources/images/Playlist_Icons/Controller.png'; break;
		case 'dapper': playlist.src = 'resources/images/Playlist_Icons/Dapper.png'; break;
		case 'derby': playlist.src = 'resources/images/Playlist_Icons/Derby.png'; break;
		case 'flawless': playlist.src = 'resources/images/Playlist_Icons/Flawless.png'; break;
		case 'highness': playlist.src = 'resources/images/Playlist_Icons/Highness.png'; break;
		case 'hightower': playlist.src = 'resources/images/Playlist_Icons/Hightower.png'; break;
		case 'lucky': playlist.src = 'resources/images/Playlist_Icons/Lucky.png'; break;
		case 'mirrors': playlist.src = 'resources/images/Playlist_Icons/Mirrors.png'; break;
		case 'moonlight': playlist.src = 'resources/images/Playlist_Icons/Moonlight.png'; break;
		case 'ouroboros': playlist.src = 'resources/images/Playlist_Icons/Ouroboros.png'; break;
		case 'puff': playlist.src = 'resources/images/Playlist_Icons/Puff.png'; break;
		case 'seer': playlist.src = 'resources/images/Playlist_Icons/Seer.png'; break;
		case 'sweets': playlist.src = 'resources/images/Playlist_Icons/Sweets.png'; break;
		}
	draw();
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
		}
	}