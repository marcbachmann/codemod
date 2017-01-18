module.exports = function (fileInfo, api, options) {
  // if (!/all\.coffee$/.test(fileInfo.path)) return
  // if (/app\.users/.test(fileInfo.source)) return

  return fileInfo.source
    .replace('foo', 'bar')
}
