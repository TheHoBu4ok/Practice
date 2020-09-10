"use strict";


const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
const lastFilm = prompt("Один из последних просмотренных фильмов?"),
      rating = prompt("На сколько оцените его?"),
      lastFilm2 = prompt("Один из последних просмотренных фильмов?"),
      rating2 = prompt("На сколько оцените его?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);

personalMovieDB.movies[lastFilm] = rating;
personalMovieDB.movies[lastFilm2] = rating2;