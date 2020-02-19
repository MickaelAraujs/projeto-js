export class Main {

	constructor(){

		this.Chart = require('chart.js');

		this.elementsPrototype();
		window.onload = ()=>{

			this.loadElements();
			this.createChart();

		}

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

		this.el.comediaCanvasBar.css({
			width: '100%',
			height: '100%'
		});

		this.el.comediaCanvasLine.css({
			width: '100%',
			height: '100%'
		});

		let contextBar = this.el.comediaCanvasBar.getContext('2d');

		let chartBar = new this.Chart(contextBar, {
	    type: 'bar',
		    data: {
		        labels: ['As Branquelas', 'Inatividade Paranormal', 'Ace Ventura: Um detetive diferente'],
		        datasets: [{
		            label: 'Os melhores filmes de comédia',
		            data: [16, 19, 10],
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

		//GRÁFICO DE LINHA

		let contextLine = this.el.comediaCanvasLine.getContext('2d');

		let chartLine = new this.Chart(contextLine, {
	    type: 'line',
		    data: {
		        labels: ['As Branquelas', 'Inatividade Paranormal', 'Ace Ventura: Um detetive diferente'],
		        datasets: [{
		            label: 'Os melhores filmes de comédia',
		            data: [16, 19, 10],
		            backgroundColor: [
		                'rgba(200, 10, 160, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)'
		            ],
		            borderColor: [
		                'rgba(200, 10, 160, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)'
		            ],
		            borderWidth: 0.5,
		            fill: false,
		            pointRadius: 8,
		            lineTension: 0.5
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

		this.el.acaoCanvasBar.css({
			width: '100%',
			height: '100%'
		});

		this.el.acaoCanvasLine.css({
			width: '100%',
			height: '100%'
		});

		let contextBar = this.el.acaoCanvasBar.getContext('2d');

		let chartBar = new this.Chart(contextBar, {
	    type: 'bar',
		    data: {
		        labels: ['Vingadores: Guerra Infinita', 'Vingadores: Ultimato', 'Capitã Marvel'],
		        datasets: [{
		            label: 'Os melhores filmes de Ação',
		            data: [36, 25, 13],
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

		//GRÁFICO DE LINHA

		let contextLine = this.el.acaoCanvasLine.getContext('2d');

		let chartLine = new this.Chart(contextLine, {
	    type: 'line',
		    data: {
		        labels: ['Vingadores: Guerra Infinita', 'Vingadores: Ultimato', 'Capitã Marvel'],
		        datasets: [{
		            label: 'Os melhores filmes de Ação',
		            data: [36, 25, 13],
		            backgroundColor: [
		                'rgba(200, 10, 160, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)'
		            ],
		            borderColor: [
		                'rgba(200, 10, 160, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)'
		            ],
		            borderWidth: 0.5,
		            fill: false,
		            pointRadius: 8,
		            lineTension: 0.5
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

	createChart(){

		let div = document.createElement("div");
		div.addClass('container');
		div.css({
			width: '800px',
			height: '400px',
			margin: '20px auto'
		});

		let url = (window.location.href).split("/");
		let page = url[url.length - 1];

		div.innerHTML = `
			<canvas id='${page}-canvas-bar'></canvas>
			<canvas id='${page}-canvas-line'></canvas>
		`;

		this.el.root.appendChild(div);
		this.loadElements();
		this.chooseCanvas(page);

	}

	chooseCanvas(page){

		switch (page) {
			case 'comedia':
				this.comedyMoviesChart();
				break;

			case 'acao':
				this.actionMoviesChart();
				break;
			
		}

	}

}