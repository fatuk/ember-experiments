App.IndexView = Ember.View.extend({
	bagForm: null,
	test: 123,
	didInsertElement: function() {
		var draw = SVG('drawing'),
			view = this;
			
		$.get('../svg/form.txt', function(data) {
			var store = draw.svg(data);
			store.get('SvgjsPath1007').fill('../assets/img/001.jpg');
			// view.set('bagForm', store.get('SvgjsPath1007'));
			App.bagForm = store.get('SvgjsPath1007');	
			// console.log(view.get('bagForm'));
		});
		// this.set('test', 123);
		// console.log(this.get('test'));
	}
	
});