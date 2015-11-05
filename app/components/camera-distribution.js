import Ember from 'ember';

export default Ember.Component.extend({

	forceChange: function () {
		this.$('g').css({ fill: "#000000" });
		if (this.get('forces')) {
			var i = 0;
			this.get('forces').forEach(function (force) {
				if (force.get('places')) {
					for (var o = 0; o < force.get('places'); o++) {
						i++;
						this.$('#banca-' + i).css({ fill: force.get('color') });
					};
				}
			}, this);
		}
	}.observes('forces.@each.color', 'forces.@each.places'),

	didInsertElement: function () {
		this._super();
		this.forceChange();
	}
});
