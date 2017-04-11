import axios from 'axios'

export default {
  getResources: () => new Promise((resolve, reject) => {
    console.log('Request => /motd');
    axios.get('/motd')
      .then(response => {
        console.log('Response => /motd');
        console.log(response);
        return resolve(response);
      })
      .catch(reject)
  })
}
