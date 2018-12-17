import Cookies from 'cookies-js'

export default () => Cookies.get && Cookies.get('JSESSIONID')