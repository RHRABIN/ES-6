const student = {
    name: 'h',
    dep: 'cd',
    money: 4000,
    rool: 12,
    all: function (money) {
        this.money = this.money - money;
        console.log(this)
        // return this.money;
    }
}
const rabin = {
    money: 500,
    deapartment: "computer"
}
// const ra = student.all.bind(rabin);
const rabbin = student.all.call(rabin, 200)
// ra(300)