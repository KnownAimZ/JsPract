const numberOfFilms = +(prompt("Сколько фильмов вы посмотрели?",""));

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const filmName1 = prompt("Один из последних просмотренных фильмов?","");
const filmRank1 = +(prompt("На сколько его оцените?",""));
const filmName2 = prompt("Один из последних просмотренных фильмов?","");
const filmRank2 = +(prompt("На сколько его оцените?",""));

personalMoviesDB.movies[filmName1]=filmRank1;
personalMoviesDB.movies[filmName2]=filmRank2;

console.log(personalMoviesDB);