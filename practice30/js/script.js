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
    UpdMovList: function (movies, parent) {
        parent.innerHTML = '';

        sortArr(movies);

        movies.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}: ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                movieDB.UpdMovList(movies, parent);
            })
        });
    }

};

const adv = document.querySelectorAll('.promo__adv img');
const advText = document.querySelectorAll('.promo__adv-title');
const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

deleteAdv(adv);
deleteAdv(advText);

[].forEach.call(document.getElementsByClassName('promo__genre'), function (div_promo__genre) {
    div_promo__genre.innerText = "драма";
});

const changBG = () => {
    let class_promo__content_s = document.querySelectorAll('.promo__content');
    let class_promo__content_promo__bg_s = class_promo__content_s[0].querySelector('.promo__bg');
    class_promo__content_promo__bg_s.style.backgroundImage = "url('/img/bg.jpg')";
};

changBG();

const sortArr = (arr) => {
    arr.sort();
};

sortArr(movieDB.movies);

let movieList = document.querySelectorAll('.promo__interactive-list');
movieDB.UpdMovList(movieDB.movies, movieList[0]);

//События
const addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newMovie = addInput.value;
    const favorite = checkbox.checked;

    if (newMovie) {

        const sslen = 21;
        const input_adding__input = document.querySelector('.adding__input');
        const movieName = input_adding__input.value.lenght <= sslen ? input_adding__input.value : input_adding__input.value.substr(0, sslen) + "...";

        movieDB.movies.push(newMovie);
        movieDB.UpdMovList(movieDB.movies, movieList[0]);

        if(favorite){
            console.log('New favorite film added!');
        }
    }

    event.target.reset();
});

// const btn = document.querySelector('button');
// const ClickAddMovie = (event) => {
//     event.preventDefault();

//     const sslen = 21;
//     const input_adding__input = document.querySelector('.adding__input');
//     const movieName = input_adding__input.value.lenght <= sslen ? input_adding__input.value : input_adding__input.value.substr(0, sslen) + "...";

//     movieDB.movies.push(movieName);
//     movieDB.UpdMovList();
// };

// btn.addEventListener('click', ClickAddMovie);

//Удаление из списка фильмов
const promoInter_item = document.querySelector('.delete'); //'.promo__interactive-item');
const ClickPromoInter_item = (event) => {
    console.log(event);
};
promoInter_item.addEventListener('click', ClickPromoInter_item);