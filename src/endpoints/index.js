import { api } from './endpoints'
import axios from 'axios'

const baseURL = "http://localhost:8001"
const timeout = 2000
const headers = {
  'Content-Type' : 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
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
      console.log(args)
      console.log(method)
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