function uuid() {
  var uuid = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 32; i++)
    uuid += possible.charAt(Math.floor(Math.random() * possible.length));
  return uuid;
}

module.exports = uuid;
