module.exports = class AsyncPromise {

  constructor() {
    this.renew();
  }

  get promise() {
    return this._promise;
  }

  get resolve() {
    return this._resolve;
  }

  get reject() {
    return this._reject;
  }

  renew() {
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    return this;
  }

}
