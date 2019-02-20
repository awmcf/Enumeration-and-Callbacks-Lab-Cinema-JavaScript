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

module.exports = Cinema;

// for (const film of this.films) {
//   if (film.title === title) {
//     foundFilms.push(film);
//   }
// }
// return foundFilms;
// }
