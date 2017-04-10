module.exports = {

  client: {
    port: 3000
  },

  server: {
    port: 3001,
    database: {
      protocol: 'mongodb',
      host: 'localhost',
      port: '27017',
      name: 'reading-list',
      url: `${this.protocol}://${this.host}:${this.port}/${this.name}`
    }
  }

}
