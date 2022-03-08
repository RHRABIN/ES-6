const student = {
    name: 'Rafiul Hasna',
    age: 22,
    hobboy: ['cricket', 'badminton', 'football', 'others..'],
    friend: { f1: 'F.Rabbi', f2: 'Tushar', f3: 'rasel', f4: 'Borkot' },
}
// getting array value vai loop
student.hobboy.forEach(each => console.log(each));
for (const each of student.hobboy) {
    // console.log(each)
}


//getting object value via loop
for (const each in student.friend) {
    // console.log(each, student.friend[each])
}



// getting object value vai kyes
const keys = Object.keys(student.friend)
// console.log(keys)
for (const each of keys) {
    // console.log(each, student.friend[each])
}



//getting object value via entries
const entriess = Object.entries(student.friend)

for (const [key, value] of entriess) {
    // console.log(key, value)
} 