import axios from 'axios'
import { ShipService } from './ships'
import { PortService } from './ports'

const http = axios.create({
  baseURL: process.env.BACKEND_BASE_URL
})

export default {
  user: new ShipService(http),
  role: new PortService(http)
}
