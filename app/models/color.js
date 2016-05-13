import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  r: attr('number'),
  g: attr('number'),
  b: attr('number'),
  a: attr('number'),
  order: attr('number'),
  duration: attr('number'),
  transition: attr('string')
});
