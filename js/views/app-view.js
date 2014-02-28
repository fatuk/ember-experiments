App.ApplicationView = Ember.View.extend({
    bagForm: null,
    test: 123,
    didInsertElement: function() {
        var draw = SVG('frontPreview'),
            view = this;

        $.get('svg/form.txt', function(data) {
            var svg = draw.svg(data),
                materialUrl = App.currentFrontMaterial.img;
            App.bagForm = svg.get('SvgjsPath1007').fill(materialUrl).stroke({color: '#979797', width: 2});
            console.log(materialUrl);
        });

        $.get('svg/upPocket1.txt', function(data) {
            var svg = draw.svg(data),
                materialUrl = App.currentUpPocketMaterial.img;
            App.upPocket = svg.get('SvgjsPath1011').
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(35, -10);
        });

    }
    
});