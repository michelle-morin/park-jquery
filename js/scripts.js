$(document).ready(function() {
  var height = parseInt(prompt("Enter your height in inches"));
  if (height >= 48) {
    $("#tall").show();
  } else {
    $("#short").show();
  }
});

