import { api } from './endpoints'
import axios from 'axios'

//const baseURL = "http://localhost:8001"
const timeout = 2000
const headers = {
  'Content-Type' : 'application/json'
}

// just add them to headers if something will go wrong
/* 
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'X-Requested-With',
  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'
*/

//now it doesn't work with 'withCredentials' - we need it save cookies in app
const axiosInstance = axios.create({
  //baseURL,
  timeout,
  headers,
  withCredentials: true
})

const endpoints = {
}

Object.keys(api)
  .forEach( key => {
    const { url, method } = api[key]

    endpoints[key] = (...args) => {
      return axiosInstance[method](url, ...args)
        .catch( err => {
          console.log(err)

          throw err
        })
        .then(({ data }) => data)
    }
  })

export default endpoints