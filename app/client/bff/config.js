const url = ({host, port}) => `http://${host}:${port}`

const hosts = {
  resources: {
    host: 'localhost',
    port: 3001
  }
}

const endpoints = {
  resources: {
    getResources: `${url(hosts.resources)}/resources`
  }
}

export default {
  services: {
    resources: {
      host: hosts.resources,
      endpoints: endpoints.resources
    }
  }
}
