import axios from 'axios'

export default {
  getResources: () => new Promise((resolve, reject) => {
    axios.get('/motd')
      .then(resolve)
      .catch(reject)
  })
}
