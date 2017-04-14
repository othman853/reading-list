import axios from 'axios'

import resources from './resources'
import config from '../config'

export default {
  resources: resources(axios, config.services.resources)
}
