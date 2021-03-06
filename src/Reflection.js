module.exports = class Reflection {

  static describeFunction(func) {
    return func.name + '(' + this.getFunctionArgs(func).join(', ') + ')';
  }

  static getFunctionArgs(func) {
    const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    const ARGUMENT_NAMES = /([^\s,]+)/g;
    const fnStr = func.toString().replace(STRIP_COMMENTS, '');
    const result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);

    return (result === null ? [] : result);
  }

}
