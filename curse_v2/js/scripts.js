var field_value, audio_url, soundID, curseEndings, ranEnding;

$('#curse_field').keypress(function(event) {
    if (event.keyCode == 13) {
        cursifyIt();
    }
});

$(".submit").on('click', function(e){

	cursifyIt();

}); // End .submit click

function cursifyIt() {

	field_value = $("#curse_field").val();

	var version = 2;

	// Handle error shit
	if(field_value == "" || field_value.length <= 1 ) {
		//$("#curse_field").addClass('error');
		//$(".submit").addClass('error');
	}

	//soundID = "curse";
	while(randomCurseEnding() != ranEnding) {
		ranEnding = randomCurseEnding();
	} 

	audio_url = 'http://translate.google.com/translate_tts?tl=en&q=' + field_value + ranEnding;//lick%20my%20asshole

	if(version === 1) {

		audio_url = 'http://ssl.gstatic.com/dictionary/static/sounds/de/0/' + field_value + '.mp3';
		audio_url2 = 'http://ssl.gstatic.com/dictionary/static/sounds/de/0/' + ranEnding + '.mp3';

		$("#frame").attr("src", audio_url);

		setTimeout(function(){
			$("#frame").attr("src", audio_url2);
		}, 1200);
	} else {

		$("#frame").attr("src", audio_url);
	
	}

	var addOn = $( "<h2 class='curse'>" + field_value + " " + ranEnding + "</h2>" ).prependTo( ".curse_display" );
	TweenMax.set( addOn, {opacity:0})
	TweenMax.to( addOn, 1, {opacity:1, ease:Power2.easeOut});

	return;

	//audio_url = 'KissYou.mp3';

	//console.log(audio_url.toString());
 	/*createjs.Sound.alternateExtensions = ["mp3"];
 	createjs.Sound.on("fileload", createjs.proxy(this.loadHandler, (this)));
	createjs.Sound.registerSound(audio_url, 'snd');

	//createjs.Sound.play(soundID);

	/*var audioElement = $("<audio>").appendTo('#audio');
    audioElement.setAttribute('src', audio_url);
    audioElement.setAttribute('autoplay', 'autoplay');

    $.get();

    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);

	function loadHandler(event) {
		//console.log('loaded ' + event);
	    // This is fired for each sound that is registered.
	    var instance = createjs.Sound.play('snd');  // play using id.  Could also use full source path or event.src.
	    instance.on("complete", createjs.proxy(this.handleComplete, this));
	    instance.volume = 0.5;
	}*/
		
	var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', audio_url);
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();
    audioElement.addEventListener("load", function() {
    audioElement.Play();
    }, true);


    $('.play').click(function() {
    audioElement.play();
    });


    $('.pause').click(function() {
    audioElement.pause();
    });

}

$.getJSON( "assets/words.json", function( data ) {
	curseEndings = [];
	$.each( data.words, function( key, val ) {
		curseEndings.push( val.value.toLowerCase() );
	});
});

function randomCurseEnding() {

	var ranCurse = Math.floor((Math.random() * curseEndings.length));

	return curseEndings[ranCurse];
}


