import DS from 'ember-data';
const { Model, attr } = DS;

export default class ItemModel extends Model {
  @attr value;
}
