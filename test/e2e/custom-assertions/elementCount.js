// A custom Nightwatch assertion.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.assert.elementCount(selector, count)
//
// for how to write custom assertions see
// http://nightwatchjs.org/guide#writing-custom-assertions
exports.assertion = function elementCount(selector, count) {
  this.message = `Testing if element <${selector}> has count: ${count}`;
  this.expected = count;
  this.pass = function pass(val) {
    return val === this.expected;
  };
  this.value = function value(res) {
    return res.value;
  };
  this.command = function command(cb) {
    const self = this;
    return this.api.execute(sel => document.querySelectorAll(sel).length, [selector], (res) => {
      cb.call(self, res);
    });
  };
};
