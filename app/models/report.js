import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  bgImage: DS.attr('string'),
  text: DS.attr('string')
});
