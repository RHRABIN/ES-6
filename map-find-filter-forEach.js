const products = [
    { name: 'Phone', brand: 'Vivo', price: 5000, color: 'silver' },
    { name: 'watch', brand: 'vivo', price: 4000, color: 'red' },
    { name: 'laptop', brand: 'hp', price: 60000, color: 'blacd' },
    { name: 'watch', brand: 'osaka', price: 2000, color: 'silver' },
    { name: 'laptop', brand: 'dell', price: 70000, color: 'golden' },
    { name: 'Phone', brand: 'vivo', price: 10000, color: 'yellow' },
]
// console.log(products)
const allName = products.map((product) => product.price);
// console.log(allName)
let total = 0;
allName.forEach(p => {
    total += p;
})
// console.log(total)


// let sum = 0;
// for (i = 0; i < allName.length; i++) {
//     sum += allName[i];
// }

// console.log(sum)
// const a = 'Vivo';
// const b = a.toLowerCase();
// console.log(b)
const special = products.filter(p => p.brand.includes('Vivo'.toLowerCase()));
console.log(special)