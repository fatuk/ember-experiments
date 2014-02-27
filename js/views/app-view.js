App.ApplicationView = Ember.View.extend({
	bagForm: null,
	test: 123,
	didInsertElement: function() {
		var draw = SVG('frontPreview'),
			view = this;

		$.get('svg/form.txt', function(data) {
			var svg = draw.svg(data);
			App.bagForm = svg.get('SvgjsPath1007').fill('#ccc').stroke({color: '#979797', width: 2});
		});

		$.get('svg/upPocket1.txt', function(data) {
			var svg = draw.svg(data);
			App.upPocket = svg.get('SvgjsPath1009').
				fill('#ccc').
				stroke({color: '#979797', width: 2}).
				move(35, -10);
		});
	}
	
});