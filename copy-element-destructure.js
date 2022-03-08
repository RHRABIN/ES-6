const products = [
    { name: 'Phone', brand: 'Vivo', price: 5000, color: 'silver' },
    { name: 'watch', brand: 'vivo', price: 4000, color: 'red' },
    { name: 'laptop', brand: 'hp', price: 60000, color: 'blacd' },
    { name: 'watch', brand: 'osaka', price: 2000, color: 'silver' },
    { name: 'laptop', brand: 'dell', price: 70000, color: 'golden' },
    { name: 'Phone', brand: 'vivo', price: 10000, color: 'yellow' },
]
const newProduct = { name: 'smartPhone', brand: 'sm', price: 3000 };
const newProducts = [...products, newProduct];
const remove = products.filter(p => p.name !== 'watch');
console.log(remove)
// console.log(products)
// console.log(newProducts)
