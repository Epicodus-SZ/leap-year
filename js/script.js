// BUSINESS LOGIC
function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }

}

// UI LOGIC
$(document).ready(function() {
  //create a submit event listener on the button 
  $("form#leapYearForm").submit(function(event) {
    event.preventDefault(); //supresses the submit
    var year = parseInt($("input#inputYear").val());
    //move year to both results html
    $(".yearPlace").text(year);

    //
    if (isLeapYear(year)) {
      $("#noResult").hide();
      $("#yesResult").show();
    } else {
      $("#yesResult").hide();
      $("#noResult").show();
    }
  });

  //reset form when X is pressed
  $(".close").click(function() {
    $("#yesResult").hide();
    $("#noResult").hide();
    $('#leapYearForm')[0].reset()
  });
});