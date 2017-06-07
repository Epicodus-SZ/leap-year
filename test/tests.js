QUnit.test("isLeapYear Basics", function(assert) {
  function LeapTest(year, expected) {
    assert.equal(isLeapYear(year), expected);
  }
  LeapTest(2000, false);
  LeapTest(1994, true);
});

QUnit.test("hello test", function(assert) {
  assert.ok(1 == "1", "Passed!");
});