let numberOfFilms = +(prompt("Сколько фильмов вы посмотрели?",""));

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMoviesDB);

