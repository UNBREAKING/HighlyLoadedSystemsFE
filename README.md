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

## Обязательно к прочтению
1. https://reactjs.org/ - наш фреймоврк, наша сила
2. https://reactjs.org/docs/higher-order-components.html#use-hocs-for-cross-cutting-concerns - обязательно разобраться с тем, что такое HOC, архитектура нашего приложения будет построена на них.
3. https://reactjs.org/docs/react-api.html#reactfragment
4. https://redux.js.org/ - это хранилище данных, прочитайте что это и как там что устроено и как с этим работать.
5. https://redux-form.com/7.4.2/docs/api/ - эта библиотека для работы с формами, с ней работать гораздо легче.
6. https://redux-actions.js.org/api - апргейд для редакса, проще использовать
7. https://github.com/reduxjs/redux-thunk
8. https://github.com/acdlite/recompose/blob/master/docs/API.md все полезные HOC, мы будем пользоваться: withProps, withHandlers, withState, withStateHandlers, lifecycle, pure, compose. 
9. https://www.styled-components.com/ (знать, что такое styled, css и как пропихивать props)

## Работа с кодом

1. все уникальные компоненты(Меню, компоненты-контейнеры страницы сайта) создаются в папке `src/components`
2. все общие компоненты создают в папке `src/components/common`. Причем выносим так, чтобы их было можно переиспользовать:
```
//подключаем библиотеки и нужные файлы
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../constants'

//пишем view, children - это React.node(s), это могут быть и компоненты, и текст,и число, проще //говоря, содержимое, но не properties.
const Button = ({ children, className, onClick }) =>
  <Wrapper className={className} onClick={onClick}>
    {children}
  </Wrapper>

export default Button

// общий стиль
const Wrapper = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 3px;
  border: 1px solid black;
  background: ${COLORS.orange};
`
```
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
7. общие константы выносим в `constants`: пример, там уже есть константа COLORS(да, все цвета туда)
8. Компонента может стоять из: `NameOfComponent.js`,`index.js`,`helpers.js`,`actions`,`reducer`
9. Никаких классов, только `HOC`: можно писать свои, мы используем хоки от `recompose` и `connect` из `react-redux`.
10. по работе с логикой, если мы добавляем HOC, то можно писать так: 
```
export default myHoc()(Component)
```
если он не 1, то используем `compose` из `recompose`:
```
export default compose(
    connect()
    withState(...),
    withHandlers(...)
)(Component)
``` 
если нам нужен `connect` для работы с хранилищем, то обязательно в `compose` ставим его на верхний уровень.(Пример выше)
Если записать пример выше без `compose`, то это будет выглядеть так:
```
export default connect()(
    withState(...)(
        withHandlers(...)(Component)
    )    
)
```
11. Пример хоков `recompose` на `Header` компоненте: 
```
// Header.js

import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from '../../constants'

const Header = ({ links, indexOfMenuItem, setMenuItem }) =>
  <Wrapper>
    <ClickbleWrapper>
      <Links>
        {
          links.map(({ link, name }, index) =>
            <LinkWrapper
              selected={ indexOfMenuItem === index }
              key={`${index}_${name}`} 
              onClick={ () => setMenuItem(index)}>
              <LinkButton to={link}>
                {name}
              </LinkButton>
            </LinkWrapper>
          )
        }
      </Links>
    </ClickbleWrapper>
  </Wrapper>

export default Header

const Wrapper = styled.div`
  background: ${COLORS.orange};
  padding: 20px 0;
  width: 100%;
  box-shadow: 0 0 10px black;
  position: fixed;
  z-index: 1000;
`

const LinkButton = styled(Link) `
  color: black;
  font-size: 20px;
  text-decoration:none;
  cursor: pointer;
`

const Links = styled.div`
  border: 1px solid black;
  box-shadow: 2px 2px 2px black;
`

const LinkWrapper = styled.div`
  display: inline-block;
  padding: 10px 20px;
  border-right: 1px solid black;
  :hover {
    background: ${COLORS.lightblue};
    ${LinkButton} {
      color: black;
      text-decoration:none;
    }
  }
  :last-child {
    border-right: none;
  }
  ${props => props.selected && css`
    background: ${COLORS.lightblue};
  `}
`

const ClickbleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

```
В индексе задействованы withProps, withState, 
первый хок withProps - принимает в себя функцию, на входе функции все пропсы компненты, а на выходе она возвращает объект с новыми пропсами. withState - умные компоненты имеют State - для хранения и изменения данных, этот хок позволяет хранить 1 пропсу - ее имя и передается первым параметром, вторая пропса - это метод который ее изменяет, а 3 пропса- это начальное значение. Благодаря этому мы видим, какая страница открыта в хедере.
```
// index.js


import { compose, withProps, withState } from 'recompose'
import Header from './Header'

const links = [
  {
    link: '/home',
    name: 'Главная'
  },
  {
    link: '/about-us',
    name: 'О нас'
  },
  {
    link: '/places',
    name: 'Подбор заведения'
  },
  {
    link: '/events',
    name: 'События'
  }
]

export default compose(
  withProps( () => ({ links })),
  withState('indexOfMenuItem','setMenuItem', 0)
)(Header)

```

12. пример работы с `redux` на `Login`:

сперва в `actions` создаем нужные экшны:
```
import { createAction } from 'redux-actions'

export const toggleLogin = createAction('LOGIN/TOGGLE_LOGIN')
```
Затем создаем `reducer`: у каждого редьюсера должен быть initialState
```
import { handleActions } from 'redux-actions'
import { toggleLogin } from './actions'

const initialState = {
  isLoginOpen: false
}

const login = handleActions({
  [toggleLogin]: state => ({ ...state, isLoginOpen: !state.isLoginOpen })
}, initialState)

export default login
```
Потом в общих reducerах добавляем тот, который для логина, чтобы всегда было можно к нему обратиться:
```
import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import login from '../components/Login/reducer'

const reducers = combineReducers({
  form: reduxFormReducer,
  router: routerReducer,
  login
})

export default reducers
```
После этого в индекс компоненты пихаем логику:
что такое mapStateToProps - это первый параметр для connect,
по факту это функция, которая принимает State от redux, и возвращает определенные Proprerties из разных редьюсеров,
disptachToProps - это объект экшнов, которые мы собираемся использовать в компоненте
```
import { connect } from 'react-redux'
import { toggleLogin } from './actions'
import Login from './Login'

const dispatchToProps = {
  toggleLogin
}

const mapStateToProps = ({
  login: {
    isLoginOpen
  }
}) => ({
  isLoginOpen
})

export default connect(mapStateToProps, dispatchToProps)(Login)
```
Затем смотрим `Login.js`:
тут также есть пример того, как мы используем общую компоненту Button
как все происходит, пользователь нажмет на кнопку, затем в редаксе изменится перемнная `isLoginOpen`,
после этого она прокинется снова в компоненту, и обновленное значение изменит внешний вид кнопки.
```
import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../common'
import { COLORS } from '../../constants'

const Login = ({ isLoginOpen, toggleLogin }) =>
  <Wrapper>
    <LoginButton onClick={toggleLogin} isOpen={isLoginOpen}>
      Вход/Регистрация
    </LoginButton>
  </Wrapper>

export default Login

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`

const LoginButton = styled(Button)`
  ${props => props.isOpen && css`
    background: ${COLORS.lightblue};
  `}
`
```
13. Все экшны - должны иметь уникальные имена, чтобы случайно в разных редьюсерах не изменить данные.