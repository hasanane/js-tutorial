x = "hEello Wwworld"
y = `2+2=${7/2}`
firstName = "hassoni"
lastName = "sodani"
a= `${firstName} AL${lastName} ${firstName}`
// function fullName(first,last){
//     return `${first} AL${last}`
// }
fullName = (first, last) => {return `${first} ${last}`}
console.log(fullName(firstName,lastName))
