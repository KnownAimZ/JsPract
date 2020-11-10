let numberOfFilms = +(prompt("Сколько фильмов вы посмотрели?",""));

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let filmName1 = prompt("Один из последних просмотренных фильмов?","");
let filmRank1 = +(prompt("На сколько его оцените?",""));
let filmName2 = prompt("Один из последних просмотренных фильмов?","");
let filmRank2 = +(prompt("На сколько его оцените?",""));

personalMoviesDB.movies[`${filmName1}`]=filmRank1;
personalMoviesDB.movies[`${filmName2}`]=filmRank2;

console.log(personalMoviesDB);