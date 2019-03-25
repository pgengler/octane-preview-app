import Route from '@ember/routing/route';

export default class UnsortedArrayRoute extends Route {
  model() {
    return this.store.findAll('category');
  }
}
