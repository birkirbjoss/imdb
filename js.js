let link = "imdb.json";
			let template = document.querySelector('template').content;
			let main = document.querySelector('main');
			function getData(link){
				fetch(link).then(response=>response.json()).then(json=>show(json));
			}

			function show(json){
				json.forEach(elm=>{

					let clone = template.cloneNode(true);

					clone.querySelector('.title').textContent = "Movie title: " +  elm.title;
					clone.querySelector('.stars').textContent = "Starring: " +  elm.stars;
					clone.querySelector('.director').textContent = "Directed by: " +  elm.director;
					clone.querySelector('.year').textContent = "Year released: " + elm.year;
					clone.querySelector('.length').textContent = "Length: " + elm.length + " minutes";
					clone.querySelector('.genres').textContent = "Genres: " + elm.genres;
					clone.querySelector('.moviePlot').textContent = "Plot: " + elm.moviePlot;
					//let newelm = document.createElement('main');
					//newelm.textContent=elm.title;
					main.appendChild(clone);
				});
			}

			getData(link);
