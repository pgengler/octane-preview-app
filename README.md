The model in `app/models/item.js` was generated using the command `ember g model item value`.

However, the attribute does not seem to get set on the model, leading to, e.g.,
error such as that when running the tests on this repo, found in
`tests/unit/models/item-test.js`.


Replacing `@attr value` with `@attr() value` seems to be a workaround.
