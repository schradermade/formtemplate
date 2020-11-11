// Business Logic

function Tickets( customerName, movieTime, movieName )  {
  this.customerName = customerName,
  this.movieTime = movieTime,
  this.movieName = movieName
}

Tickets.prototype.calculateCost = function()  {
  let cost = 10;
  if (this.customerName === "Christian") {
    cost = 5;
    return cost;
  }
  return cost;
}

// User Interface Logic

$(document).ready(function() {
  $("#formOne").submit(function(event)  {
    event.preventDefault();
    
    let customerName = $("#customer-name").val();
    let movieTime = $("#movie-time").val();
    let movieName = $("#movie-name").val();
    let movieTicket = new Tickets( customerName, movieTime, movieName );
    let calculateCost = movieTicket.calculateCost();

    console.log(movieTicket);
    console.log(movieTicket.customerName, movieTicket.movieTime, movieTicket.movieName );
    console.log(movieTicket.calculateCost());
    $("#results").empty().append(customerName + " - $" + calculateCost);
  })
});




