const childProcess = require('child_process')

const CHECK_COMMAND = 'termux-battery-status'

function _sync () {
  try {
    var out = childProcess.execSync(CHECK_COMMAND, {stdio: [0, 'pipe', null], encoding: 'utf8'})
    return checkOutput(out)
  } catch (e) {
    return false
  }
}

function _async () {
  return new Promise(function (resolve, reject) {
    childProcess.exec(CHECK_COMMAND, {encoding: 'utf8'}, function (err, stdout) {
      if (err) return reject(err)
      if (checkOutput(stdout)) resolve()
    })
  })
}

function checkOutput (out) {
  try {
    return !!JSON.parse(out)
  } catch (e) {
    return false
  }
}

var api = _async
api.sync = _sync

module.exports = api
