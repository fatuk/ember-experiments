window.App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();


App.IndexRoute = Ember.Route.extend({
    // setupController: function(controller, model) {
    //     controller.set('model', model);
    // },
    model: function() {
        return this.get('store').find('bag', 1);
    }

});

App.IndexController = Ember.ObjectController.extend({
    defaultMaterial: {
        id: 2
    },
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
    actions: {
        test: function() {
            this.currentMaterial.set('id', 2);
            // this.get('model').set('color', 'green');
            console.log(this);

        },
        onChange: function() {
            console.log(this);
        }
    },
    totalPrice: function() {
        var currentMaterialPrice = 0,
            currentColorPrice = 0,
            currentBuboPrice = 0,
            currentShippingPrice = 0,
            totalPrice = 0,
            model = this.get('model');
        if(this.currentMaterial){
            currentMaterialPrice = this.currentMaterial.price;
        }
        if(this.currentColor){
            currentColorPrice = this.currentColor.price;
        }
        if(this.currentColor){
            currentBuboPrice = this.currentBubo.price;
        }

        totalPrice = parseInt(currentMaterialPrice) + parseInt(currentColorPrice) + parseInt(currentBuboPrice);
        
        if(totalPrice){
            model.set('totalPrice', totalPrice);
        }
    }.property('currentMaterial', 'currentColor', 'currentBubo', 'currentShipping')
});

// App.IndexController.addObserver('currentMaterial', targetObject, targetAction)

App.Bag = DS.Model.extend({
    material: DS.attr('string'),
    color: DS.attr('string'),
    bubo: DS.attr('boolean'),
    shipping: DS.attr('boolean'),
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