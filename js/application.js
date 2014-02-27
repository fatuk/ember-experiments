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

App.ApplicationController = Ember.ObjectController.extend({
    currentFrontMaterial: null,
    currentUpPocketMaterial: null,
    
    totalPrice: function() {
        var currentFrontMaterialPrice = 0,
            currentUpPocketMaterialPrice = 0,
            totalPrice = 0,
            model = this.get('model');
        if(this.currentFrontMaterial && this.currentUpPocketMaterial){
            currentFrontMaterialPrice = this.currentFrontMaterial.price;
            currentUpPocketMaterialPrice = this.currentUpPocketMaterial.price;


            totalPrice = 
                parseInt(currentFrontMaterialPrice) + 
                parseInt(currentUpPocketMaterialPrice);

            var currentFrontMaterialUrl = this.currentFrontMaterial.img,
                currentUpPocketMaterialUrl = this.currentUpPocketMaterial.img
            if(totalPrice){
                model.set('totalPrice', totalPrice);
                setTimeout(function() {
                    App.bagForm.fill(currentFrontMaterialUrl);
                    App.upPocket.fill(currentUpPocketMaterialUrl);
                }, 200);
            }
        }

        return totalPrice;
    }.property('currentFrontMaterial', 'currentUpPocketMaterial')
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