const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.add = function (film) {
  this.films.push(film);
}

Cinema.prototype.findFilmByTitle = function (title) {
  const total = this.films.find( function (film) {
    return film.title === title
  });
return total;
}

Cinema.prototype.findFilmByGenre = function (genre) {
  const total = this.films.filter( function (film) {
    return film.genre === genre
  });
  return total;
}

Cinema.prototype.findFilmByYear = function (year) {
  const total = this.films.filter( function (film) {
    return film.year === year
  });
  return total;
}

module.exports = Cinema;
