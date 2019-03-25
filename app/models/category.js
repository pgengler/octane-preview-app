import DS from 'ember-data';
const { Model, attr } = DS;

export default class CategoryModel extends Model {
  @attr() name;
}
