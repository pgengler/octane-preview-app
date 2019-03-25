This is a simple reproduction of an error I came across with a combination of a computed property, the array `.sortBy` method, and ember-power-select.

To run the app, run `yarn install`, then `ember s`, then go to http://localhost:4200

The index page has two links, "With array .sortBy" and  "Without array .sortBy". The first link ("With array .sortBy") produces the error ("Uncaught RangeError: Maximum call stack size exceeded") while the other work to show the expected behavior.

The difference between these two routes is that in the failing case, the computed property calls `.sortBy` on the `this.args.categories` array while the other case just returns `this.args.categories` without calling `.sortBy`.
