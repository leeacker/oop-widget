Category.prototype.render = function(){
	if(this.element) return this.element;
	console.log('this is in the category render function');
	this.element = objectTemplate.clone();

	this.element.attr('id', '')
		.find('p')
		.text(this.type);
	this.element.find('h3')
		.text(this.name);

	objectHolder.append(this.element);

};