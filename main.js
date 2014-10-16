var newTag = $('<div>');
var list = $('.list');
var newItemInput = $("[name='new-item']");
var isitObject = $("[isObject='true']");
var objectTemplate = $('#object-div-template');
var objectHolder = $('.objects-div');
var addCategoryBtn = $('#add-category-button');


// define library constructor
var Library = function(name){
	this.name = name;
	this.categories = [];
	this.tags = [];
};
// create single instance of library
var oopLib = new Library('OOP Library');

// define tag constructor
var Tag = function(name){
	this.name = name;
	this.description = [];
};
// define category constructor
var Category = function(name, type){
	this.name = name;
	this.type = type;
};



// On any category button click, gather type and update popup form to reflect for category addition
isitObject.on('click', function(){
	console.log(this);
	var type = $(this).attr('object-type');
	console.log($(this).attr('object-type'));

	$('#new-category').attr('current-type', type);

});
// on category add button click, gather type from custom attribute "current-type" on html input
// name, from current input value and create new category with gathered info. Add new category
// to library.
$('button').on('click', addCategoryBtn, function(){
	var type = $('#new-category').attr('current-type');
	console.log(type);
	var name = $('#new-category').val();
	console.log(name);
	$('#new-category').val('');

	oopLib.addCategory(name, type);

	$('#toggle-category-popup').trigger('click');


});

// allow enter key to work for form submission when adding new item
$('#new-item').on('keypress', function(event){
	 if (event.which == 13) {
        event.preventDefault();
        $('#new-item-form').submit();
    }
});

// on form submisison for adding item, take new name from input val and create new item instance
$('#new-item-form').on('submit', function(e){
	e.preventDefault();

	var newItemName = newItemInput.val();
	newItemInput.val('');
	
	oopLib.addTag(newItemName);
});





$(document).on('ready', function() {
  
});