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



// Home Work

// description about git command 

// there is a problem in working with coding team and that is that when for example two people wants to work on same file at the same time they cant save the file at the same time and if one of them save it there was a different between the saved file and second persons file and if the second person save the file the first persons work will be destroyed 
// for solving this problem we can make a repository and 

// description about functions



// factorial

b = 1
function factorial(a){
    for (i = 1; a >= i; i++) {
        b = i*b
    }
    return b
}