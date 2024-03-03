x = "Hello World"
y = `2+2=${7/2}`
// variable types:
// these are prmitive types
// 1. number
num = 1
// 2. string 
str = "string"
// 3. array
// note: in java script we can mix types but in c we cant
arr = ["1",num,str]
// 4. object
obj = {
    firstname: "hasooni",
    age: num,
    lastname: "soodani",
    hobbies: ["manga","anime","foot ball","programing"]
}
arr[1]
obj.firstname
obj["firstname"]
// 5. boolean
hungry = false
sleepy = true
firstName = "hassoni"
lastName = "sodani"
a= `${firstName} AL${lastName} ${firstName}`
// function fullName(first,last){
//     return `${first} AL${last}`
// }
fullName = (first, last) => {return `${first} ${last}`}
console.log(fullName(firstName,lastName))
function add(a,b){
   return a+b
}
function addthree(a,b,c){
    return add(a,add(b,c))
}
