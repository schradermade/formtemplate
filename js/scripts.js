// Business Logic


// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event)  {
    event.preventDefault();
    
    let firstName = $("#firstName").val();
    $("#results").append(firstName);
  })
});




