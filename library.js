


/////////////////////
// Library Methods //
/////////////////////

Library.prototype.addTag = function(name){
	var tag = new Tag(name);
	this.tags.push(tag);
	tag.renderTag();
};

Library.prototype.addCategory = function(name, type){
	var category = new Category(name, type);
	console.log(category);
	this.categories.push(category);
	category.render();
};