App.ApplicationView = Ember.View.extend({
    didInsertElement: function() {
        var drawFront = SVG('frontPreview'),
            drawBack = SVG('backPreview'),
            view = this;

        // Front
        $.get('svg/form.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentFrontMaterial.img;

                App.isFrontReady = true;

            App.Front = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2});
        });

        // Back 
        $.get('svg/form.txt', function(data) {
            var svg = drawBack.svg(data),
                materialUrl = App.currentBackMaterial.img;

                App.isBackReady = true;

            App.Back = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2});
        });


        // Up pocket 1
        $.get('svg/upFrontPocket1.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentUpPocketMaterial.img;

                App.isUpFrontPocket1Ready = true;

            App.UpFrontPocket1 = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(145, -10);
        });
        // Up pocket 2
        $.get('svg/upFrontPocket2.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentUpPocketMaterial.img;

                App.isUpFrontPocket2Ready = true;

            App.UpFrontPocket2 = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(145, -10).
                hide();
        });

        // Left front pocket
        $.get('svg/leftHandleFront.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentHandleMaterial.img;

                App.isLeftHandleFrontReady = true;

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

                App.isRightHandleFrontReady = true;

            App.RightHandleFront = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(390, 60);
        });

        // Botton pocket 1
        $.get('svg/bottomPocket1.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentBottomPocketMaterial.img;

                App.isBottomFrontPocket1Ready = true;

            App.BottomFrontPocket1 = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(135, 255);
        });

        // Botton pocket 2
        $.get('svg/bottomPocket2.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentBottomPocketMaterial.img;

                App.isBottomFrontPocket2Ready = true;

            App.BottomFrontPocket2 = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(175, 255).
                hide();
        });

        // Botton pocket 3
        $.get('svg/bottomPocket3.txt', function(data) {
            var svg = drawFront.svg(data),
                materialUrl = App.currentBottomPocketMaterial.img;

                App.isBottomFrontPocket3Ready = true;

            App.BottomFrontPocket3 = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(175, 255).
                hide();
        });

        // Left back pocket
        $.get('svg/leftHandleBack.txt', function(data) {
            var svg = drawBack.svg(data),
                materialUrl = App.currentHandleMaterial.img;

                App.isLeftHandleBackReady = true;

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

                App.isRightHandleBackReady = true;

            App.RightHandleBack = 
                svg.roots()[0]._children[0].
                fill(materialUrl).
                stroke({color: '#979797', width: 2}).
                move(312, 60);
        });

    }
    
});