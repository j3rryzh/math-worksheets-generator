const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const plus = () => {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);
    while (b + a > 10) {
        b = getRandomInt(1, 10);
    }
    return [a, b];
}

const minus = () => {
    let a = getRandomInt(2, 11);
    let b = getRandomInt(1, 10);
    while (a < b) {
        b = getRandomInt(1, 10);
    }
    return [a, b];
}

const fiveInRow = (type) => {
    const row = document.createElement('tr');
    for (let i = 0; i < 5; i++) {
        const cell = document.createElement('td');
        if (type == 'plus') {
            const [a, b] = plus();
            cell.innerHTML = `${a} + ${b} =`;
        }
        else if (type == 'minus') {
            const [a, b] = minus();
            cell.innerHTML = `${a} - ${b} =`;
        }
        row.appendChild(cell);
    }
    return row;
}

const table_plus = document.querySelector('#plus');
for (let i = 0; i < 10; i++) {
    table_plus.appendChild(fiveInRow('plus'));
}
const table_minus = document.querySelector('#minus');
for (let i = 0; i < 10; i++) {
    table_minus.appendChild(fiveInRow('minus'));
}
