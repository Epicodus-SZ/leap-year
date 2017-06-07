QUnit.test("isLeapYear Basics", function(assert) {
  function LeapTest(year, expected) {
    assert.equal(isLeapYear(year), expected);
  }
  // is the year divisible by 4 test
  LeapTest(2012, true);
  LeapTest(4, true);

  // is the year divisible by 400 test
  LeapTest(400, true);
  LeapTest(800, true);

  //

});