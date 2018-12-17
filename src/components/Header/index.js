
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
  },
  {
    link: '/place',
    name: 'Заведение'
  },
  {
    link: '/profile',
    name: 'Профиль'
  },
  {
    link: '/add-place',
    name: 'Add Place'
  },
  {
    link: '/add-event',
    name: 'Add Event'
  },
  {
    link: '/reserve-place',
    name: 'Re Place'
  },
  {
    link: '/reserve-event',
    name: 'Re Event'
  }
]

export default compose(
  withProps( () => ({ links })),
  withState('indexOfMenuItem','setMenuItem', 0)
)(Header)