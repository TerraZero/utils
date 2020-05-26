const OS = require('os');

module.exports = class Net {

  static getIPs() {
    const ifaces = OS.networkInterfaces();
    const ips = {};

    for (const ifname of Object.keys(ifaces)) {
      for (const iface of ifaces[ifname]) {
        if ('IPv4' !== iface.family || iface.internal !== false) continue;

        ips[ifname] = ips[ifname] || [];
        ips[ifname].push(iface.address);
      }
    }

    return ips;
  }

}
