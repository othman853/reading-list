const handleError = response => error => {
  const status = error.response ? error.response.status : 500
  const body = {error, message: 'Failed to connect to remote server'}

  return response.status(status).json(body)
}

export default (route) => (resourcesService) => {

  route.get((request, response) => {
    console.log('GET /resources')
    resourcesService.get()
      .then(remoteResponse => response.json(remoteResponse.data))
      .catch(handleError(response))
  })

}
