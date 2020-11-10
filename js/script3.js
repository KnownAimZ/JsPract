"use strict"
const numberOfFilms = +(prompt("Сколько фильмов вы посмотрели?",""));

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*for(let i = 0; i < 2; i++ ){
    const filmName = prompt("Один из последних просмотренных фильмов?","");
    const filmRank = +(prompt("На сколько его оцените?",""));
    if (filmName!="" && filmRank != "" && filmName.length<=50){
    personalMoviesDB.movies[filmName]=filmRank;
    } else {
        i--;
    }  
}*/

/**let i = 0;
while (i < 2) {
const filmName = prompt("Один из последних просмотренных фильмов?","");
const filmRank = +(prompt("На сколько его оцените?",""));
if (filmName!="" && filmRank != "" && filmName.length<=50){
personalMoviesDB.movies[filmName]=filmRank;
i++; }
}*/

let i = 0;
do {
    const filmName = prompt("Один из последних просмотренных фильмов?","");
    const filmRank = +(prompt("На сколько его оцените?",""));
    if (filmName!="" && filmRank != "" && filmName.length<=50){
    personalMoviesDB.movies[filmName]=filmRank;
    i++;
    }  
} while (i < 2);

if(numberOfFilms < 10){
    alert("Просмотрено довольно мало фильмов");
} else if(numberOfFilms >= 10 && numberOfFilms <= 30){
    alert("Вы классический зритель");
} else if (numberOfFilms>30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}



console.log(personalMoviesDB);