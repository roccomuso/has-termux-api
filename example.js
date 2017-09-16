const hasTermux = require('./index')

hasTermux().then(function () {
  // yeah
  console.log('si async')
}).catch(function () {
  // nope
  console.log('no async')
})

if (hasTermux.sync()) {
  console.log('si sync')
} else {
  console.log('no sync')
  // install it: apt install termux-api
}
