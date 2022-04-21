const feedDisplay = document.querySelector('#feed');

fetch('http://localhost:8000/results')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		data.forEach((article) => {
			const articleItem = `<div class="card m-5">
                                    <div class="card-header">
                                        Feed The Guardian
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">${article.title}</h5>
                                        <p class="card-text">${article.url}</p>
                                        <a href="${article.url}" class="btn btn-primary">Go</a>
                                    </div>
                                </div>`;

			feedDisplay.insertAdjacentHTML('beforeend', articleItem);
		});
	})
	.catch((err) => console.log(err));
