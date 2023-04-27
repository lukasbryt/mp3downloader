const form = document.querySelector('#form');
const urlInput = document.querySelector('#url');
const responseDiv = document.querySelector('#response');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const url = urlInput.value;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0e51144eb8msh01536b5c9bed3f3p1a6389jsn7e17aa84c27a',
			'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
		}
	};

	const loadingMessage = document.createElement('p');
	loadingMessage.textContent = 'Aguarde...';
	responseDiv.appendChild(loadingMessage);

	fetch(`https://youtube-mp3-download1.p.rapidapi.com/dl?id=${url}`, options)
		.then(response => response.json())
		.then(response => {
			responseDiv.removeChild(loadingMessage);
			responseDiv.innerHTML = `<a href="${response.link}">Baixar MP3</a>`;
			console.log(response.link);
		})
		.catch(err => console.error(err));
});
