"use strict"
let numberOfFilms;

start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();

detectPersonalLevel();

showMyDB();

writeYourGenres();

function showMyDB() {
    if (personalMoviesDB.privat == false) {
        console.log(personalMoviesDB);
    }
}

function writeYourGenres() {
    let genres =[];
    for (let j = 1; j <= 3; j++) {
        let tempGenre = prompt(`Ваш любимый жанр под номером ${j}?`,"");
        while(tempGenre == '' || tempGenre == null) {
            tempGenre = prompt(`Ваш любимый жанр под номером ${j}?`,"");
        } 
        genres.push(tempGenre);       
    }
    console.log(genres);
}

function detectPersonalLevel() {
    if(numberOfFilms < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if(numberOfFilms >= 10 && numberOfFilms <= 30){
        alert("Вы классический зритель");
    } else if (numberOfFilms>30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function start() {
    numberOfFilms = +(prompt("Сколько фильмов вы посмотрели?",""));

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +(prompt("Сколько фильмов вы посмотрели?",""));
    }
}

function rememberMyFilms() {
    let i = 0;
    do {
        const filmName = prompt("Один из последних просмотренных фильмов?","");
        const filmRank = +(prompt("На сколько его оцените?",""));
        if (filmName!="" && filmRank != "" && filmName.length<=50){
        personalMoviesDB.movies[filmName]=filmRank;
        i++;
        }  
    } while (i < 2);
}