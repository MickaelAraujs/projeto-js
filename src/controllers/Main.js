class Main {

	constructor(){

		this.elementsPrototype();
		this.loadElements();

		this.comedyMoviesChart();
		this.actionMoviesChart();

	}

	elementsPrototype(){

		Element.prototype.hide = function(){
			this.style.display = 'none';
			return this;
		};

		Element.prototype.show = function(){
			this.style.display = 'block';
			return this;
		};

		Element.prototype.toggle = function(){
			this.style.display = (this.style.display === 'none') ? 'block' : 'none';
			return this;
		};

		Element.prototype.on = function(events, fn){

			events.split(" ").forEach(e=>{
				this.addEventListener(e, fn);
			});
			return this;

		};

		Element.prototype.css = function(styles){

			for(let name in styles){
				this.style[name] = styles[name];
			}
			return this;

		};

		Element.prototype.addClass = function(name){
			this.classList.add(name);
			return this;
		};

		Element.prototype.removeClass = function(name){
			this.classList.remove(name);
			return this;
		};

		Element.prototype.toogleClass = function(name){
			this.classList.toggle(name);
			return this;
		};

		Element.prototype.hasClass = function(name){
			return this.classList.contains(name);
		};

	}

	loadElements(){

		this.el = {};
		document.querySelectorAll("[id]").forEach(el=>{

			this.el[Main.getCamelCase(el.id)] = el;

		});

	}
	
	static getCamelCase(text){

		let div = document.createElement("div");
		div.innerHTML = `<div data-${text}='id'></div>`;
		return Object.keys(div.firstChild.dataset)[0];

	}

	comedyMoviesChart(){

		let context = this.el.comedyCanvas.getContext('2d');

		let chart = new Chart(context, {
	    type: 'bar',
		    data: {
		        labels: ['As Branquelas', 'Inatividade Paranormal', 'Todo mundo em pânico'],
		        datasets: [{
		            label: 'Os melhores filmes de comédia',
		            data: [12, 19, 10],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)'
		            ],
		            borderWidth: 0.5
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        },
		        maintainAspectRatio: false,
		        responsive: false
		    }
		});

	}

	actionMoviesChart(){

		let context = this.el.actionCanvas.getContext('2d');

		let chart = new Chart(context, {
	    type: 'bar',
		    data: {
		        labels: ['Vingadores: Guerra Infinita', 'Vingadores: Ultimato', 'Thor'],
		        datasets: [{
		            label: 'Os melhores filmes de Ação',
		            data: [12, 19, 12],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)'
		            ],
		            borderWidth: 0.5
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        },
		        maintainAspectRatio: false,
		        responsive: false
		    }
		});

	}

}

window.main = new Main();