(function () {

	window.addEventListener('load', () => {
		let video = document.querySelector('.about__video');
		let videoPlayBtn = document.querySelector('.about__video-btn');
		
		videoPlayBtn.addEventListener('click', () => {
			video.play();
			videoPlayBtn.hidden = 'true';
		});
	});
	
})();