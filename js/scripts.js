// function Movie(name, time) {
//   this.name = name;
//   this.time = time;
// }

function Ticket(name, time, price) {
  this.movieName = name;
  this.movieTime = time;
  this.moviePrice = price;
}

// Movie.prototype.movieName = function () {
//   return this.name;
// };
//
// Movie.prototype.movieTime = function () {
//   return this.time;
// };

// var movieBlackPanther = new Movie("Black Panther", "PM");

var movies = [];

$(document).ready(function () {
  $("form#movie").submit(function(ready) {
    event.preventDefault();

    var inputMovie = $("input:radio[name=movieOptionOne]:checked").val();
    var inputTime = $("input:radio[name=movieTimeOne]:checked").val();

    var newTicket = new Ticket(inputMovie, inputTime);

    $(".ticket").append('<div class="ticket"><h2>' + newTicket.movieName + '</h2><p>' + newTicket.movieTime + ' showing' + '</p></div>')

  });
  // console.log(movieBlackPanther.movieName(), movieBlackPanther.movieTime());
});
