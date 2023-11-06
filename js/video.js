var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	// Initialize video element
	    // Initialize the video element and turn off autoplay and looping
		video = document.getElementById("player1");
		play_button = document.querySelector("#play");
		volume_slider = document.getElementById("volume");
		duration = video.duration;
		video.autoplay = false;
		video.loop = false;
	
		// Play Button
		play_button.addEventListener("click", function() {
			console.log("Play Video");
			video.play();
			volume_slider.textContent = Math.round(video.volume * 100) + "%";
		});
	
		// Pause Button
		document.getElementById("pause").addEventListener("click", function() {
			console.log("Pause Video");
			video.pause();
		});
	
		// Slow Down
		document.getElementById("slower").addEventListener("click", function() {
			console.log("Slow Down");
			video.playbackRate -= 0.1;
			console.log("New speed: " + video.playbackRate);
		});
	
		// Speed Up
		document.getElementById("faster").addEventListener("click", function() {
			console.log("Speed Up");
			video.playbackRate += 0.1;
			console.log("New speed: " + video.playbackRate);
		});
	
		// Skip Ahead
		document.getElementById("skip").addEventListener("click", function() {
			console.log("Skip Ahead");
			console.log("Video current Time " + video.currentTime)
			video.currentTime += 10;
			if (video.currentTime >= duration) {
				video.currentTime = 0;
			}
			console.log("Video Current Time after skipping" + video.currentTime);
		});
	
		// Mute
		document.getElementById("mute").addEventListener("click", function() {
			if (video.muted) {
				video.muted = false;
				this.textContent = "Mute";
			} else {
				video.muted = true;
				this.textContent = "Unmute";
			}
		});
	
		// Volume Slider
		var volumeSlider = document.getElementById("slider");
		volumeSlider.addEventListener("input", function() {
			video.volume = volumeSlider.value / 100;
			document.getElementById("volume").textContent = Math.round(video.volume * 100) + "%";
		});
	
	
		// Styled (Add the oldSchool class)
		document.getElementById("vintage").addEventListener("click", function() {
			video.classList.add("oldSchool");
		});
	
		// Original (Remove the oldSchool class)
		document.getElementById("orig").addEventListener("click", function() {
			video.classList.remove("oldSchool");
		});
	});