"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("Один из последних просмотренных фильмов?", ''),
          rating = prompt("На сколько оцените его?", '');

    if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length <= 50) {
        personalMovieDB.movies[lastFilm] = rating;
        console.log('done');
    } else { 
        alert('В названии фильма не может быть 0 или более 50 символов');
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count >= 0 && personalMovieDB.count < 10 ) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert ('Вы киноман');
} else { 
    alert('Произошла ошибка');
}
console.log(personalMovieDB);