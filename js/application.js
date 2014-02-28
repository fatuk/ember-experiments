window.App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();


App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return this.get('store').find('bag', 1);
    }
});

App.ApplicationController = Ember.Controller.extend({
    actions: {
        change: function() {
            App.bagForm.fill('../assets/img/002.jpg');
        }
    }
});

App.currentFrontMaterial = null;
App.currentUpPocketMaterial = null;
App.currentBackMaterial = null;
App.currentInnerMaterial = null;
App.currentHandleMaterial = null;
App.currentFormUpPocketMaterial = null;
App.currentBottomPocketMaterial = null;
App.currentBottomPocketForm = null;

App.ApplicationController = Ember.ObjectController.extend({
    
    totalPrice: function() {
        var totalPrice = 0;
        var previewReady = 
            App.currentFrontMaterial &&
            App.currentUpPocketMaterial &&
            App.bagForm &&
            App.upPocket;
            
            if(previewReady){
                totalPrice = 
                App.currentFrontMaterial.price +
                App.currentUpPocketMaterial.price;

                App.bagForm.fill(App.currentFrontMaterial.img);
                App.upPocket.fill(App.currentUpPocketMaterial.img);
            }





        return totalPrice;
    }.property('App.currentFrontMaterial', 'App.currentUpPocketMaterial')
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

// App.Bag.FIXTURES = [{
//     id: 1,
//     name: 'Omega',
//     color: 'red',
//     price: 100
// }, {
//     id: 2,
//     color: 'blue',
//     name: 'Diggy',
//     price: 200
// }, {
//     id: 3,
//     color: 'green',
//     name: 'Shocky',
//     price: 300
// }];

App.Bag.FIXTURES = [{
    id: 1,
    material: 'Choose material',
    color: 'Choose color',
    bubo: false,
    shipping: false,
    totalPrice: 0
}];

// App.IndexController = Ember.ArrayController.extend({

// });