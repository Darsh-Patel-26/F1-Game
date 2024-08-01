let bulbs = document.querySelectorAll('div.bulb')
let i = 0
let offtime,
  flag = false
let display = document.querySelector('#time-diff')

function switchL (i) {
  let color = bulbs[i].style.backgroundColor
  bulbs[i].style.backgroundColor = color === 'red' ? '#591212' : 'red'
  bulbs[i + 1].style.backgroundColor = color === 'red' ? '#591212' : 'red'
}

function start () {
  display.value = ''
  flag = false
  if (i < bulbs.length && i + 1 < bulbs.length) {
    switchL(i)
  }
  i += 2
  if (i >= bulbs.length) {
    setTimeout(() => {
      const randomDelay = Math.floor(Math.random() * (3000 - 200 + 1)) + 200
      setTimeout(reset, randomDelay)
    }, 1000)
    i = 0
    return
  }
  setTimeout(start, 1000)
}

function reset () {
  for (let d of bulbs) {
    d.style.backgroundColor = '#591212'
  }
  offtime = new Date()
  flag = true
}

function record () {
  if (flag) {
    const recTime = new Date()
    const diff = (recTime - offtime) / 1000
    const res = diff.toFixed(3)
    if (res != NaN) display.value = res
  }
}
