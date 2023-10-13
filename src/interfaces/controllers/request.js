// Abstraction for the request so that it is framework agnostic

export class Request {
  constructor({ params, body }) {
    this.params = params;
    this.body = body;
  }
}
