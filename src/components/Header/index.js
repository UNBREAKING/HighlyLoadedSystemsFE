
import { compose, withProps, withState } from 'recompose'
import Header from './Header'

const links = [
  {
    link: '/home',
    name: 'Главная'
  },
  {
    link: '/place/all',
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