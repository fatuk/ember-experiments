window.App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();


App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return this.get('store').find('bag', 1);
    }
});

App.currentFrontMaterial = null;
App.currentUpPocketMaterial = null;
App.currentBackMaterial = null;
App.currentInnerMaterial = null;
App.currentHandleMaterial = null;
App.currentUpPocketForm = null;
App.currentBottomPocketMaterial = null;
App.currentBottomPocketForm = null;

App.isFrontReady, 
App.isBackReady, 
App.isUpFrontPocket1Ready, 
App.isUpFrontPocket2Ready, 
App.isLeftHandleFrontReady, 
App.isRightHandleFrontReady, 
App.isBottomFrontPocket1Ready, 
App.isBottomFrontPocket2Ready, 
App.isBottomFrontPocket3Ready, 
App.isLeftHandleBackReady, 
App.isRightHandleBackReady = false;

App.ApplicationController = Ember.ObjectController.extend({
    
    totalPrice: function() {
        var totalPrice = 0;
        var previewReady = 
            App.currentFrontMaterial &&
            App.currentUpPocketMaterial &&
            App.currentHandleMaterial &&
            App.currentUpPocketForm &&
            App.currentBottomPocketMaterial;


            if (App.isFrontReady) {
                App.Front.fill(App.currentFrontMaterial.img);
            }
            if (App.isBackReady) {
                App.Back.fill(App.currentBackMaterial.img);
            }
            if (App.isUpFrontPocket1Ready && App.isUpFrontPocket2Ready) {
                if(App.currentUpPocketForm.form == '1') {
                    App.UpFrontPocket1.show();
                    App.UpFrontPocket2.hide();
                } else {
                    App.UpFrontPocket2.show();
                    App.UpFrontPocket1.hide();
                }
                App.UpFrontPocket1.fill(App.currentUpPocketMaterial.img);
                App.UpFrontPocket2.fill(App.currentUpPocketMaterial.img);
            }
            if (App.isLeftHandleFrontReady) {
                App.LeftHandleFront.fill(App.currentHandleMaterial.img);
            }
            if (App.isRightHandleFrontReady) {
                App.RightHandleFront.fill(App.currentHandleMaterial.img);
            }
            if (App.isBottomFrontPocket1Ready && App.isBottomFrontPocket2Ready && App.isBottomFrontPocket3Ready) {
                if(App.currentBottomPocketForm.form == '1') {
                    App.BottomFrontPocket1.show();
                    App.BottomFrontPocket2.hide();
                    App.BottomFrontPocket3.hide();
                }
                if(App.currentBottomPocketForm.form == '2') {
                    App.BottomFrontPocket1.hide();
                    App.BottomFrontPocket2.show();
                    App.BottomFrontPocket3.hide();
                }
                if(App.currentBottomPocketForm.form == '3') {
                    App.BottomFrontPocket1.hide();
                    App.BottomFrontPocket2.hide();
                    App.BottomFrontPocket3.show();
                }
                App.BottomFrontPocket1.fill(App.currentBottomPocketMaterial.img);
                App.BottomFrontPocket2.fill(App.currentBottomPocketMaterial.img);
                App.BottomFrontPocket3.fill(App.currentBottomPocketMaterial.img);
            }
            if (App.isLeftHandleBackReady) {
                App.LeftHandleBack.fill(App.currentHandleMaterial.img);
            }
            if (App.isRightHandleBackReady) {
                App.RightHandleBack.fill(App.currentHandleMaterial.img);
            }

            if(previewReady){
                totalPrice = 
                App.currentFrontMaterial.price +
                App.currentUpPocketMaterial.price +
                App.currentBackMaterial.price +
                App.currentInnerMaterial.price +
                App.currentHandleMaterial.price +
                App.currentUpPocketForm.price +
                App.currentBottomPocketMaterial.price +
                App.currentBottomPocketForm.price;
            }

        return totalPrice;
    }.property(
        'App.currentFrontMaterial', 
        'App.currentUpPocketMaterial',
        'App.currentBackMaterial',
        'App.currentInnerMaterial',
        'App.currentHandleMaterial',
        'App.currentUpPocketForm',
        'App.currentBottomPocketMaterial',
        'App.currentBottomPocketForm'
        )
});

// App.IndexController.addObserver('currentMaterial', targetObject, targetAction)

App.Bag = DS.Model.extend({
    frontMaterial: DS.attr('string'),
    backMaterial: DS.attr('string'),
    innerMaterial: DS.attr('string'),
    handleMaterial: DS.attr('string'),
    upPocketMaterial: DS.attr('string'),
    upPocketForm: DS.attr('string'),
    bottomPocketMaterial: DS.attr('string'),
    bottomPocketForm: DS.attr('string'),
    totalPrice: DS.attr('number')
});

App.Bag.FIXTURES = [{
    id: 1,
    material: 'Choose material',
    color: 'Choose color',
    bubo: false,
    shipping: false,
    totalPrice: 0
}];