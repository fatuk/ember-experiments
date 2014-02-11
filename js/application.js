window.App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();


App.IndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('model', model);
    },
    model: function() {
        return this.store.find('bag');
    },
    actions: {
        test: function() {
            console.log('test');
        }
    }
});



App.Bag = DS.Model.extend({
    name: DS.attr('string'),
    color: DS.attr('string'),
    price: DS.attr('number')
});

App.Bag.FIXTURES = [{
    id: 1,
    name: 'Omega',
    color: 'red',
    price: 100
}, {
    id: 2,
    color: 'blue',
    name: 'Diggy',
    price: 200
}, {
    id: 3,
    color: 'green',
    name: 'Shocky',
    price: 300
}];