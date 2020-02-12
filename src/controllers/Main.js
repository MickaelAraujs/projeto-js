class Main {

	constructor(){

		this.elementsPrototype();
		this.loadElements();

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

			this.el[Utils.getCamelCase(el.id)] = el;

		});

	}
	
	static getCamelCase(text){

		let div = document.createElement("div");
		div.innerHTML = `<div data-${text}='id'></div>`;
		return Object.keys(div.firstChild.dataset)[0];

	}

}