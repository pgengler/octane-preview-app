This is a simple reproduction of an error I came across with a combination of a ember-power-select and a getter that accesses an array from `this.args` and calls `sort` on an array (even a completely different array).

There is no dependence on ember-data; the index route model hook returns an array of hashes which are passed into the `CategoryPicker` component. That component has a getter (`sortedCategories`) that accesses `this.args.categories` but doesn't do anything with it, then creates, sorts, and returns a completely new array. This is passed into {{ember-power-select}} and causes a "Maximum call stack size exceeded" error.

To run the app, run `yarn install`, then `ember s`, then go to http://localhost:4200. You will see the error in the console.

If you comment out line 8 of app/components/category-picker.js (where `this.args.categories` is read but not used) then the error will not occur.
