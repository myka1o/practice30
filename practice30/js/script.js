/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    UpdMovList: function() {
        let movieList = document.querySelectorAll('.promo__interactive-list');
        movieList[0].innerHTML = '';

        movieDB.movies.sort();
        
        movieDB.movies.forEach((film, i) => {
            movieList[0].innerHTML += `
            <li class="promo__interactive-item">${i + 1}: ${film}
                <div class="delete"></div>
            </li>
            `;
        });

    }

};

let div_promo__adv_s = document.getElementsByClassName('promo__adv');
div_promo__adv_s[0].remove();


[].forEach.call(document.getElementsByClassName('promo__genre'), function (div_promo__genre) {
    div_promo__genre.innerText = "драма";
});

let class_promo__content_s = document.querySelectorAll('.promo__content');
let class_promo__content_promo__bg_s = class_promo__content_s[0].querySelector('.promo__bg');
class_promo__content_promo__bg_s.style.backgroundImage = "url('/img/bg.jpg')";

movieDB.UpdMovList();
//События

const btn = document.querySelector('button');
const ClickAddMovie = (event) => {
    event.preventDefault();

    const sslen = 21;
    const input_adding__input = document.querySelector('.adding__input');
    const movieName = input_adding__input.value.lenght <= sslen ? input_adding__input.value : input_adding__input.value.substr(0, sslen) + "...";

    movieDB.movies.push(movieName);
    movieDB.UpdMovList();
};

btn.addEventListener('click', ClickAddMovie);

//Удаление из списка фильмов
const promoInter_item = document.querySelector('.delete'); //'.promo__interactive-item');
const ClickPromoInter_item = (event) => {
    console.log(event);
};
promoInter_item.addEventListener('click', ClickPromoInter_item);

