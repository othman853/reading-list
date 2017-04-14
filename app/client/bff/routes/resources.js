const {Router} = require('express')
const axios = require('axios')

const router = Router()

router.route('/resources')
  .get((request, response) => {
    console.log('GET /resources')
    axios.get(`http://localhost:3001/resources`)
      .then(remoteResponse => {
        console.log('OK')
        return response.json(remoteResponse.data)
      })
      .catch(error => {
        const status = error.response ? error.response.status : 500
        const body = {error, message: 'Failed to connect to remote server'}
        return response.status(status).json(body)
      })
  })

module.exports = router
