Tag.prototype.renderTag = function(){

	if(this.element) return this.element;

	this.element = newTag.clone();

	this.element.attr('class', 'btn btn-warning drag')
		.text(this.name)
		.css({position: 'relative', top: 0, bottom: 0});
	list.append(this.element);
	Draggable.create(this.element, {type: "top,left"});

};