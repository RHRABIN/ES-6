const number = [100, 200, 300, 400];
const [firstNumber, secondNumber] = number;

let twoNumber = (first, second) => {
    const numbers = [first, second]
    return numbers;
}

const s = twoNumber(1, 2);
// console.log(s)

// object destructing 
const student = {
    name: "Rafiul Hasan Rabin",
    rool: 934602,
    sub: ['english', { s1: 'bangla 1st', s2: 'bangla 2nd' }, 'math'],
    friend: {
        f1: 'tushar',
        f2: 'F.rabbi',

    },
}
const student2 = {
    name: "Rafiul Hasan Rabin",
    rool: 934602,
    sub: ['english', { s1: 'bangla 1st', s2: 'bangla 2nd' }, 'math'],
    // friend: { f1: 'tushar', f2: 'F.rabbi' },
}

// const { s1, s2 } = student.sub[1];
// console.log(s1, s2)
// const [first, second] = student?.friend?.special?.third;
// console.log(first, second)
// console.log(student.friend.special.third)
const { f1 } = student2?.friend;
console.log(f1)