import { api } from './endpoints'
import axios from 'axios'

const baseURL = "http://localhost:8001"
const timeout = 2000
const headers = {
  'Content-Type' : 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'X-Requested-With',
  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'
}

const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers
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
        .then(data => {
          console.log(data)

          return data
        })
    }
  })

export default endpoints