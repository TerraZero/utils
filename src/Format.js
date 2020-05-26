module.exports = class Format {

  static fileSize(bytes) {
    var thresh = 1000;
    if (Math.abs(bytes) < thresh) {
      return Format.pad(bytes + ' B', 8, ' ', true);
    }
    var units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var u = -1;
    do {
      bytes /= thresh;
      ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return Format.pad(bytes.toFixed(1) + ' ' + units[u], 8, ' ', true);
  }

  static pad(string, length, padding = ' ', left = false) {
    string = string && string + '' || '';
    if (string.length > length) return string.substring(0, length);
    const pad = padding.repeat(length - string.length);
    if (left) {
      return pad + string;
    } else {
      return string + pad;
    }
  }

}
