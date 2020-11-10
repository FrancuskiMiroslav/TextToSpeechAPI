document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('load', (e) => {
		const preload = document.querySelector('.preload');

		preload.classList.add('preload-finished');
	});

	const btnScrollToTop = document.getElementById('btnScrollToTop');

	if (btnScrollToTop) {
		btnScrollToTop.addEventListener('click', (e) => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		});
	}

	const main = document.getElementById('boxes');
	const voicesSelect = document.getElementById('voices');
	const textarea = document.getElementById('text');
	const readBtn = document.getElementById('read');
	const toggleBtn = document.getElementById('toggle');
	const closeBtn = document.getElementById('close');

	const data = [
		{
			image: './assets/images/drink.jpg',
			text: "I'm Thirsty",
		},
		{
			image: './assets/images/food.jpg',
			text: "I'm Hungry",
		},
		{
			image: './assets/images/tired.jpg',
			text: "I'm Tired",
		},
		{
			image: './assets/images/hurt.jpg',
			text: "I'm Hurt",
		},
		{
			image: './assets/images/happy.jpg',
			text: "I'm Happy",
		},
		{
			image: './assets/images/angry.jpg',
			text: "I'm Angry",
		},
		{
			image: './assets/images/sad.jpg',
			text: "I'm Sad",
		},
		{
			image: './assets/images/scared.jpg',
			text: "I'm Scared",
		},
		{
			image: './assets/images/outside.jpg',
			text: 'I Want To Go Outside',
		},
		{
			image: './assets/images/home.jpg',
			text: 'I Want To Go Home',
		},
		{
			image: './assets/images/school.jpg',
			text: 'I Want To Go To School',
		},
		{
			image: './assets/images/grandma.jpg',
			text: 'I Want To Go To Grandmas',
		},
	];

	data.forEach(createBox);

	function createBox(item) {
		const box = document.createElement('div');

		const { image, text } = item;

		box.classList.add('box');
		box.innerHTML = `
			<img class="box__img" src="${image}" alt="${text}" /> 
			<p class="box__info">${text}</p>
		`;

		box.addEventListener('click', (e) => {
			setTextMessage(text);
			speakText();

			box.classList.add('active');
			setTimeout(() => box.classList.remove('active'), 1000);
		});

		main.appendChild(box);
	}

	const message = new SpeechSynthesisUtterance();

	let voices = [];

	function getVoices() {
		voices = speechSynthesis.getVoices();

		voices.forEach((voice) => {
			const option = document.createElement('option');

			option.value = voice.name;
			option.innerText = `${voice.name} ${voice.lang}`;

			voicesSelect.appendChild(option);
		});
	}

	function setTextMessage(text) {
		message.text = text;
	}

	function speakText() {
		speechSynthesis.speak(message);
	}

	function setVoice(e) {
		message.voice = voices.find((voice) => voice.name === e.target.value);
	}

	speechSynthesis.addEventListener('voiceschanged', getVoices);

	toggleBtn.addEventListener('click', (e) => {
		document.getElementById('text-box').classList.toggle('show');
	});

	closeBtn.addEventListener('click', (e) => {
		if (document.getElementById('text-box').classList.contains('show')) {
			document.getElementById('text-box').classList.remove('show');
		}
	});

	voicesSelect.addEventListener('change', setVoice);

	readBtn.addEventListener('click', (e) => {
		setTextMessage(textarea.value);
		speakText();
	});

	getVoices();
});
