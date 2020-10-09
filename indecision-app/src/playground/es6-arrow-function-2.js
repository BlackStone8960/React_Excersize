// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1000));

// this keyword - no longer bound

const user = {
    name: 'Taichi',
    cities: ['Tokyo', 'Osaka', 'Nagoya'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [4, 2, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
