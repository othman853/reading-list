const get = (axios, config) => () => new Promise((resolve, reject) =>
  axios
    .get(config.endpoints.getResources)
    .then(resolve)
    .catch(reject)
)

export default (axios, config) => ({ get: get(axios, config) })
