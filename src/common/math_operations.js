const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max) + 1
  return Math.floor(Math.random() * (max - min)) + min
}

const isCarrying = (x, y) => {
  let carrying = false
  for (let i = 0; i < (x > y ? x.toString().length : y.toString().length); i++) {
    if ((x % (10 ** (i + 1)) - x % (10 ** i)) / 10 ** i + (y % (10 ** (i + 1)) - y % (10 ** i)) / 10 ** i >= 10) {
      carrying = true
    }
  }
  return carrying
}

const isBorrowing = (x, y) => {
  let borrowing = false
  for (let i = 0; i < (x > y ? x.toString().length : y.toString().length); i++) {
    if (x % (10 ** (i + 1)) < y % (10 ** (i + 1))) {
      borrowing = true
    }
  }
  return borrowing
}

const addiction = (config) => {
  const { x: [xMin, xMax], y: [yMin, yMax], carrying } = config
  let x = getRandomInt(xMin, xMax)
  let y = getRandomInt(yMin, yMax)
  if (carrying) {
    while (!isCarrying(x, y)) {
      x = getRandomInt(xMin, xMax)
      y = getRandomInt(yMin, yMax)
    }
  }
  else {
    while (isCarrying(x, y)) {
      x = getRandomInt(xMin, xMax)
      y = getRandomInt(yMin, yMax)
    }
  }
  const answer = x + y
  return { x, y, answer }
}

const subtraction = (config) => {
  const { x: [xMin, xMax], y: [yMin, yMax], borrowing } = config
  let x = getRandomInt(xMin, xMax)
  let y = getRandomInt(yMin, yMax)
  if (borrowing) {
    while (!isBorrowing(x, y) || x < y) {
      x = getRandomInt(xMin, xMax)
      y = getRandomInt(yMin, yMax)
    }
  }
  else {
    while (isBorrowing(x, y) || x < y) {
      x = getRandomInt(xMin, xMax)
      y = getRandomInt(yMin, yMax)
    }
  }
  const answer = x + y
  return { x, y, answer }
}

export { addiction, subtraction }