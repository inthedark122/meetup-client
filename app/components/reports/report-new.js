import Ember from 'ember';

export default Ember.Component.extend({
  title: '',
  store: Ember.inject.service('store'),

  actions: {
    save: function(event) {
      event.preventDefault();

      const report = this.get('store').createRecord('report', {
        title: this.get('title')
      });

      report.save();
    }
  }
});
