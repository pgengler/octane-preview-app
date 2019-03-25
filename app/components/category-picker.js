import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CategoryListComponent extends Component {
  selectedCategories = [];

  get sortedCategories() {
    return this.args.sortArray ? this.args.categories.sortBy('name') : this.args.categories;
  }

  @action onchange(newCategorySelection) {
    this.selectedCategories.setObjects(newCategorySelection);
  }
}
