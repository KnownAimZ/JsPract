"use strict"
let numberOfFilms;

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
    showMyDB: function(){
        if (this.privat == false) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        
        for (let j = 1; j <= 3; j++) {
            let tempGenre = prompt(`Ваш любимый жанр под номером ${j}?`,"");
            while(tempGenre == '' || tempGenre == null) {
                tempGenre = prompt(`Ваш любимый жанр под номером ${j}?`,"");
            } 
            this.genres.push(tempGenre);       
        }
        this.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    detectPersonalLevel: function() {
        if(this.count < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if(this.count >= 10 && this.count <= 30){
            alert("Вы классический зритель");
        } else if (this.count>30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    start: function() {
        numberOfFilms = +(prompt("Сколько фильмов вы посмотрели?",""));

        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +(prompt("Сколько фильмов вы посмотрели?",""));
        }
        this.count = numberOfFilms;
    },
    rememberMyFilms: function() {
        let i = 0;
        do {
            const filmName = prompt("Один из последних просмотренных фильмов?","");
            const filmRank = +(prompt("На сколько его оцените?",""));
            if (filmName!="" && filmRank != "" && filmName.length<=50){
                this.movies[filmName]=filmRank;
            i++;
            }  
        } while (i < 2);
    },
    toggkeVisibleMyDB: function() {
        if(this.privat == true) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};
personalMoviesDB.start();

personalMoviesDB.rememberMyFilms();

personalMoviesDB.detectPersonalLevel();

personalMoviesDB.showMyDB();

personalMoviesDB.writeYourGenres();

