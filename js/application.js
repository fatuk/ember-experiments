window.App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
    this.resource('bag_constructor');
    this.resource('people');
});

App.BagConstructorController = Ember.ArrayController.extend({
    bag: function() {
        return this.store.find('bag');
    }.property()
});

App.BagConstructorRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('bag');
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

App.Person = Ember.Object.extend({
    id: null,
    firstName: null,
    lastName: null,

    fullName: function() {
        return this.get('firstName') + " " + this.get('lastName');
    }.property('firstName', 'lastName').cacheable()
});

App.selectedPersonControllerTop = Ember.Object.create({
    person: null
});

App.selectedPersonControllerMiddle = Ember.Object.create({
    person: null
});

App.selectedPersonControllerBottom = Ember.Object.create({
    person: null
});

App.peopleControllerTop = Ember.ArrayController.create({
    content: [
        App.Person.create({
            id: 1,
            firstName: 'Yehuda',
            lastName: 'Katz',
            color: 'green',
            price: 100
        }),
        App.Person.create({
            id: 2,
            firstName: 'Tom',
            lastName: 'Dale',
            color: 'red',
            price: 150
        }),
        App.Person.create({
            id: 3,
            firstName: 'Peter',
            lastName: 'Wagenet',
            color: 'orange',
            price: 200
        }),
        App.Person.create({
            id: 4,
            firstName: 'Erik',
            lastName: 'Bryn',
            color: 'blue',
            price: 250
        })
    ]
});

App.peopleControllerMiddle = Ember.ArrayController.create({
    content: [
        App.Person.create({
            id: 1,
            firstName: 'Yehuda',
            lastName: 'Katz',
            color: 'green',
            price: 100
        }),
        App.Person.create({
            id: 2,
            firstName: 'Tom',
            lastName: 'Dale',
            color: 'red',
            price: 150
        }),
        App.Person.create({
            id: 3,
            firstName: 'Peter',
            lastName: 'Wagenet',
            color: 'orange',
            price: 200
        }),
        App.Person.create({
            id: 4,
            firstName: 'Erik',
            lastName: 'Bryn',
            color: 'blue',
            price: 250
        })
    ]
});

App.peopleControllerBottom = Ember.ArrayController.create({
    content: [
        App.Person.create({
            id: 1,
            firstName: 'Yehuda',
            lastName: 'Katz',
            color: 'green',
            price: 150
        }),
        App.Person.create({
            id: 2,
            firstName: 'Tom',
            lastName: 'Dale',
            color: 'red',
            price: 200
        }),
        App.Person.create({
            id: 3,
            firstName: 'Peter',
            lastName: 'Wagenet',
            color: 'orange',
            price: 1000
        }),
        App.Person.create({
            id: 4,
            firstName: 'Erik',
            lastName: 'Bryn',
            color: 'blue',
            price: 1050
        })
    ]
});

App.selectedPersonControllerTop.set('person', App.peopleControllerTop.objectAt(3));
App.selectedPersonControllerMiddle.set('person', App.peopleControllerMiddle.objectAt(1));
App.selectedPersonControllerBottom.set('person', App.peopleControllerBottom.objectAt(0));

App.PeopleRoute = Ember.Route.extend({
    setupController: function(controller) {
        var totalPrice = App.selectedPersonControllerTop.get('person.price');
        controller.set('totalPrice', totalPrice);
    }
});