export default class Route {

  constructor(expressRoute) {
    this.route = expressRoute
    this.imports = []
  }

  at(endpoint) {
    this.endpoint = endpoint
    return this
  }

  handledBy(handler) {
    this.handler = handler
    return this
  }

  importing(dependency) {
    this.imports.push(dependency)
    return this
  }

  register() {
    this.handler(this.route(this.endpoint))(...this.imports)
  }

}
