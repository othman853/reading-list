const client = {
  port: process.env.READING_LIST_CLIENT_PORT || 3000
}

const server = {
  port: process.env.READING_LIST_SERVER_PORT || 3001
}

const database = {
  protocol: 'mongodb',
  host: 'localhost',
  port: '27017',
  name: 'reading-list',
  get url() {
    return `${this.protocol}://${this.host}:${this.port}/${this.name}`
  }
}

export default {
  client,
  server,
  database: {
    get url() {
      return process.env.READING_LIST_DATABASE_URL || database.url
    }
  }
}
