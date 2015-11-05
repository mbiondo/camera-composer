import Ember from 'ember';

export default Ember.Controller.extend({

	orderedForces: Ember.computed('model.@each.order', function () {
		return this.get('model').sortBy('order');
	}),
});
