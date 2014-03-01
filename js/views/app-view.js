App.ApplicationView = Ember.View.extend({
    bagForm: null,
    test: 123,
    didInsertElement: function() {
        var drawFront = SVG('frontPreview'),
            drawBack = SVG('backPreview'),
            view = this;

        // Front
        $.get('svg/form.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentFrontMaterial.img;

            App.Front = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2});
        });

        // Back 
        $.get('svg/form.txt', function(data) {
            var svg = drawBack.svg(data),
                materialUrl = App.currentBackMaterial.img;

            App.Back = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2});
        });

        // Up pocket
        $.get('svg/upFrontPocket1.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentUpPocketMaterial.img;

            App.UpPocket = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(145, -10);
        });

        // Left front pocket
        $.get('svg/leftHandleFront.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentHandleMaterial.img;

            App.LeftHandleFront = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(18, 60);
        });

        // Right front pocket
        $.get('svg/rightHandleFront.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentHandleMaterial.img;

            App.RightHandleFront = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(390, 60);
        });

        // Botton pocket
        $.get('svg/bottomPocket3.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentHandleMaterial.img;

            App.BottomPocket = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(175, 255);
        });

        // Left back pocket
        $.get('svg/leftHandleBack.txt', function(data) {
            var svg = drawBack.svg(data),
                materialUrl = App.currentHandleMaterial.img;

            App.LeftHandleBack = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(21, 60);
        });

        // Right back pocket
        $.get('svg/rightHandleBack.txt', function(data) {
            var svg = drawBack.svg(data),
                materialUrl = App.currentHandleMaterial.img;

            App.RightHandleBack = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(312, 60);
        });

    }
    
});