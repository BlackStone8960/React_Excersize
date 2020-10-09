// const square = function (x) {
//     return x * x ;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(5));



const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

const name = 'Mike Smith';
console.log(getFirstName(name));
console.log(getFirstNameShort(name));