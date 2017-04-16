import axios from 'axios'
import config from '../config'
import resources from './resources'

export default {
  resources: resources(axios, config.services.resources)
}
