import Ember from 'ember';

export default Ember.Route.extend({

	model: function () {
		return this.get('store').find('force');
	},

	actions: {
		addForce: function () {
			this.get('store').createRecord('force', { });
		},

		saveForce: function (force) {
			force.set('editable', false);
			force.save();
		},

		turnEditForce: function (force) {
			force.set('editable', true);
		},

		removeForce: function (force) {
			//delete Force
			force.destroyRecord();
		},

		cancel: function (force) {
			if (force.get('isNew')) {
				force.destroyRecord();
			} else {
				force.set('editable', false);
			}
		},

		reorderItems: function(itemModels, draggedModel) {
		  var i = 0;

		  itemModels.forEach(function (item) {
		  	item.set('order', i);
		  	item.save();
		  	i++;
		  });
	    }		
	}
});
