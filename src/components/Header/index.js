
import { compose, withProps, withState } from 'recompose'
import Header from './Header'

const links = [
  {
    link: '/home',
    name: 'Главная'
  },
  {
    link: '/all-places',
    name: 'Подбор заведения'
  },
  {
    link: '/all-events',
    name: 'События'
  }
]

export default compose(
  withProps( () => ({ links })),
  withState('indexOfMenuItem','setMenuItem', 0)
)(Header)