
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