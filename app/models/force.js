import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	places: DS.attr('number'),
	color: DS.attr('string'),
	order: DS.attr('number'),

	editable: false,

	isEditable: Ember.computed('editable', 'isNew', function () {
		return this.get('isNew') || this.get('editable');
	}),
});
