const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const addiction = () => {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);
    while (b + a > 10) {
        b = getRandomInt(1, 10);
    }
    return [a, b];
}

const subtraction = () => {
    let a = getRandomInt(2, 11);
    let b = getRandomInt(1, 10);
    while (a < b) {
        b = getRandomInt(1, 10);
    }
    return [a, b];
}

export { addiction, subtraction }