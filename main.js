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
// for solving this problem we can make a repository and share it with team members and work with it
// with repository we can save all the code versions that team members make
// all the code changes will bw saved in git directory
// we can control the repository with (git) command 
// when we want to get a clone of repository that somone else made we should use this command (git clone <name of repository>)
// when we want to update the repository to get the newest version(changed codes) that other members  uploaded on the repository we should use this command (git pull)
// now that we have the newest version we can start to change the code and when we finished changing we should use the (git add <name of file that we want to save(we can use dot to save all the files)>) command to save the code in the (stage) 
// stage is a memory which is in our computer and we can save our codes in it
// if we wants to see the difrents between our code and stage we can use this command (git diff)
// now when we finished coding and saving the code in stage, we must make a version of our code with this command (git commit -m "description about the version")
// when we make a version, we cant change the code anymore and if we wants to change the code we should make a new version of the code
// now that we are done with making the last version, we should upload it in the main repository with this command (git push)

// description about functions

// some times we wants to write one code many times in our file and if we write it many times, our code will be large
// we can use functions to minify the code, we can write a function and call it when ever we want it 
// for write a function we should use the (function) command
// the general construction of the functions are as follows
function NameOfFunction(firstVariable,secondVariable,...and){
//  here we write what will hapened to the variables
}
// if we want our function return something we should use (return) command beside caculations
// example
function example(a,b){
    return a+b
}
// this function will return answer of a+b to our code
// tip: the function will not be actived when we write it, the functions only when we call them will be actived
// tip: the orginal functions (not the called functions)  will be saved as a code in binary
// we can call the function as follows
NameOfFunction(firstVariable,secondVariable)
// we can make functions that dont need variables (if we dont needs input)
// we can give the functions a rest parameter as follows
function NameOfFunction2(a , ...b){
    console.log(a)
    console.log(b)
}
// when we call this function we can give it as much as we want values and variables
// example
NameOfFunction2(1,2,3,4)
// this function first will print number (1) and second will print numbers (2,3,4) as a array as follows
// (1) [2,3,4]

// factorial

function factorial(a){
    b = 1
    for (i = 1; a >= i; i++) {
        b = i*b
    }
    return b
}