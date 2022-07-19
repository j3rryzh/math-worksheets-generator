const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}



const addiction = (settings) => {
    const { x: { xMin, xMax }, y: { yMin, yMax }, carry } = settings
    if (carry) {
        let x = getRandomInt(xMin, xMax)
        let y = getRandomInt(yMin, yMax)

        return { x, y }
    }
    else { }


    let a = getRandomInt(1, 10)
    let b = getRandomInt(1, 10)
    while (b + a > 10) {
        b = getRandomInt(1, 10)
    }
    return [a, b]
}

const subtraction = () => {
    let a = getRandomInt(2, 11)
    let b = getRandomInt(1, 10)
    while (a < b) {
        b = getRandomInt(1, 10)
    }
    return [a, b]
}

export { addiction, subtraction }