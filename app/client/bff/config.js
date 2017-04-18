const url = ({host, port}) => `http://${host}:${port}`

const hosts = {
  resources: {
    host: 'server',
    port: 3000
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
