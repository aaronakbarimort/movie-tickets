function Movie(name, time) {
  this.name = name;
  this.time = time;
}

Movie.prototype.movieName = function () {
  return this.name;
};

Movie.prototype.movieTime = function () {
  return this.time;
};

$(document).ready(function () {
  var movieBlackPanther = new Movie("Black Panther", 1200);
  console.log(movieBlackPanther.movieName(), movieBlackPanther.movieTime());
});
