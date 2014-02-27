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
    
    currentMaterial: null,
    currentColor: {
        id: 1
    },
    currentBubo: {
        id: 1
    },
    currentShipping: {
        id: 1
    },
    material: [{
        id: 1,
        name: 'wool',
        price: 100
    }, {
        id: 2,
        name: 'acryl',
        price: 200
    }, {
        id: 3,
        name: 'fur',
        price: 500
    }],
    color: [{
        id: 1,
        name: 'red',
        price: 10
    }, {
        id: 2,
        name: 'blue',
        price: 20
    }, {
        id: 3,
        name: 'white',
        price: 5
    }],
    bubo: [{
        id: 1,
        name: 'false',
        price: 50
    }, {
        id: 2,
        name: 'true',
        price: 100
    }],
    totalPrice: function() {
        var currentFrontMaterialPrice = 0,
            totalPrice = 0,
            model = this.get('model');
        if(this.currentFrontMaterial){
            currentFrontMaterialPrice = this.currentFrontMaterial.price;

            totalPrice = parseInt(currentFrontMaterialPrice);
            var url = this.currentFrontMaterial.img;
            if(totalPrice){
                model.set('totalPrice', totalPrice);
                setTimeout(function() {
                    App.bagForm.fill(url);
                }, 200);
            }
        }

        return totalPrice;
    }.property('currentFrontMaterial')
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