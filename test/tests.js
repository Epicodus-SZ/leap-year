QUnit.test("isLeapYear Basics", function(assert) {
  function LeapTest(year, expected) {
    assert.equal(isLeapYear(year), expected);
  }
  LeapTest(2004, true); // is the year divisible by 4?
  LeapTest(2000, true); // is the year divisible by 400?
  LeapTest(1900, false); //A year is not a leap year if it is divisible by 100
  LeapTest(1993, false); //not divisible by 4
});