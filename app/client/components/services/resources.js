import Vue from 'vue'

export default {
  get: () => new Promise(
    (resolve, reject) => Vue.http.get('/resources').then(resolve, reject)
  )
}
