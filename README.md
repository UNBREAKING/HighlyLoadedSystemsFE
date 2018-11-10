# HighlyLoadedSystemsFE

Frontend часть проекта в магистратуре по спец курсу высоконагруженных систем. БГУ. 2018 г

## Участники:

1. Пасейшвили Алексей Юрьевич
2. Голенков Алексей Сергеевич
3. Сорокина Виктория Вадимовна
4. Лапыш Владислав Юрьевич

## Установка:
Написать `npm install` в консоли

## Запуск проекта
1. `npm run build` - для релизной сборки приложения, результат проекта сохраняется в папке `dist`
2. `npm run start` - для сборки приложения в деволпменте, запускается через вебпак локальный сервер в браузере, не надо из-за этого перезапускать проект каждый раз для просмотра изменений

## Технологии
1. node.js v10.13.0
2. webpack
3. react.js (фреймворк)
4. redux.js (хранилище и контроль данных), redux-thunk (асинхронный контроль данных), redux-actions (для облегчения работы с хранилищем), redux-form(для работы с формами)
5. styled-components (работа со стилями)
6. axios.js - для связи с бэкендом
7. recompose - для работы с логикой компонент

## Работа с кодом

1. все уникальные компоненты(Меню, компоненты-контейнеры страницы сайта) создаются в папке `src/components`
2. все общие компоненты создают в папке `src/components/common`
3. папка компоненты будет состоять из `index.js` и своего контейнера, который будет называться как компонента. В `index.js` будет прописана вся логика, а в контейнере будет написан весь View и стили.
4. все теги будут прописаны в styled-components пример:
```
const Container = styled.div`
    display: inline;
` 
```
5. компоненты в реакте делятся на "умные"(с логикой) и "тупые"(только показывают), так как для работы с логикой мы исползуем recompose, то все компоненты у нас будут "тупые":
```
const Containter = () => 
    <div>
        Я контейнер
    </div>
```
6. не создавать лишних оберток в компонентах, для этого можно использовать React.Fragment