// Abstraction for the response so that it is framework agnostic

export class Response {
  constructor(callback) {
    this.callback = callback;
  }

  json(data) {
    this.callback(null, { status: 200, body: data });
  }

  status(statusCode) {
    return {
      json: (data) => this.callback(null, { status: statusCode, body: data }),
      send: (data) => this.callback(null, { status: statusCode, body: data }),
    };
  }
}
