import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CategoryListComponent extends Component {
  selectedCategories = [];

  get sortedCategories() {
    this.args.categories;
    return [{ name: 'foo' }, { name: 'bar' }].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  @action onchange(newCategorySelection) {
    this.selectedCategories.setObjects(newCategorySelection);
  }
}
