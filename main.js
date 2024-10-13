x = "Hello World";
y = `2+2=${7 / 2}`;
// variable types:
// these are prmitive types
// 1. number
num = 1;
// 2. string
str = "string";
// 3. array
// note: in java script we can mix types but in c we cant
arr = ["1", num, str];
// 4. object
obj = {
  firstname: "hasooni",
  age: num,
  lastname: "soodani",
  hobbies: ["manga", "anime", "foot ball", "programing"],
};
arr[1];
obj.firstname;
obj["firstname"];
// 5. boolean
hungry = false;
sleepy = true;
firstName = "hassoni";
lastName = "sodani";
a = `${firstName} AL${lastName} ${firstName}`;
// function fullName(first,last){
//     return `${first} AL${last}`
// }
fullName = (first, last) => {
  return `${first} ${last}`;
};
console.log(fullName(firstName, lastName));
function add(a, b) {
  return a + b;
}
function addthree(a, b, c) {
  return add(a, add(b, c));
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
function NameOfFunction(firstVariable, secondVariable, ...and) {
  //  here we write what will hapened to the variables
}
// if we want our function return something we should use (return) command beside caculations
// example
function example(a, b) {
  return a + b;
}
// this function will return answer of a+b to our code
// tip: the function will not be actived when we write it, the functions only when we call them will be actived
// tip: the orginal functions (not the called functions)  will be saved as a code in binary
// we can call the function as follows
NameOfFunction(firstVariable, secondVariable);
// we can make functions that dont need variables (if we dont needs input)
// we can give the functions a rest parameter as follows
function NameOfFunction2(a, ...b) {
  console.log(a);
  console.log(b);
}
// when we call this function we can give it as much as we want values and variables
// example
NameOfFunction2(1, 2, 3, 4);
// this function first will print number (1) and second will print numbers (2,3,4) as a array as follows
// (1) [2,3,4]

// factorial

function factorial(a) {
  b = 1;
  for (i = 1; a >= i; i++) {
    b = i * b;
  }
  return b;
}

// home work 2
// callbacks

// map

// with this callback we can make new arrays with another array
// for an example we want to raise all of a arrays elemts to the power of two and save them in a another array
num = [1, 2, 3, 4, 5, 7, 9];
dev = num.map((a) => {
  return a * a;
});
// here we have the num array and with map callback we raised all of the elements to the power of two and saved them in dev array
// now when we print dev array will be like this
// [  1,  4,  9, 16, 25, 49, 81]

// reduce

// the function that we put it in this callback should have 2 viriables
// the first one the arrays elements will be places in it
// and the second one going to be a variable that will be saved all the time and dont matter we change the element or not
// but the first variable every time we change the element, will get reset
example1 = [e1, e2, e3, e4, e5];
example2 = example1.reduce(
  (a, b) => {
    // what happend to variables
  }
  // first value of (b) variableb
);
// for example we will get the total value of a array
numbers = [
  2, 5, 8, 3, 5, 7, 5, 7, 8, 6, 5, 54, 4, 4, 3, 5, 6, 6, 7, 7, 7, 2, 8,
];
total = numbers.reduce((a, d) => {
  return a + d;
}, 0);
// here first we give the b variable 0
// reduce callback is getting every element and add the element to value of b and after that will return it
// when it return the value of a+b will be saved in b variable and after that will do the entire process again
// and at the end will save it to the total variable
// another example
// we want to find the largest element of a array
numbers = [
  2, 5, 8, 3, 5, 7, 5, 7, 8, 6, 5, 54, 4, 4, 3, 5, 6, 6, 7, 7, 7, 2, 8,
];
larg = numbers.reduce((a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}, 0);
// here our function will check every element
// if the element was bigger than b variable the function will return that element and will be saved in b variable
// if the b variable was bigger than that element the function will return value of b and the b variable will not change and the function will do the process for the next element

// sum of twice the even numbers _______________________________________________________________________________________________

// if we want to get the sum of twice the even numbers, we have 2 ways to do it
numb = [1, 2, 3, 4, 5, 6];

evenNumb = numb.map((curr) => {
  if (curr % 2 == 0) {
    // here we check the number if its even
    return curr * 2; // here if its even will doble it and save it
  } else {
    return 0; // here if its not even will save it as a 0
  }
});
// here if we print evenNumb will get [0,4,0,8,0,12]
// now we need to get the sum of the elements
all = evenNumb.reduce((accu, curr) => {
  return accu + curr;
}, 0);

// we can do these two together like this
all = numb
  .map((curr) => {
    if (curr % 2 == 0) {
      return curr * 2;
    } else {
      return 0;
    }
  })
  .reduce((accu, curr) => accu + curr);

// second way

// here we can use callback calld filter
// filter callback used to filter arrays elements and save the filtered elements in a new array
// this callback just get true or false to filter
evenNumb = numb.filter((curr) => curr % 2 == 0); // here we check the elements and save the even numbers
// now if we print the evenNumb will get [2,4,6]
doubledNumb = evenNumb.map((curr) => curr * 2); // here with map callback we double the elements
// now if we print the doubledNumb will get [4,8,12]
all = doubledNumb.reduce((accu, curr) => accu + curr); // here we get the sum of the elements
// we can do these two together like this
all = numb
  .filter((curr) => curr % 2 == 0)
  .map((curr) => curr * 2)
  .reduce((accu, curr) => accu + curr);

// homeWorks

all = numbers
  .filter((curr) => {
    return curr % 2 != 0;
  })
  .map((curr) => curr * 2)
  .reduce((accu, curr) => accu * curr);

//   second way
all = numbers
  .map((curr) => {
    if (curr % 2 != 0) {
      return curr * 2;
    } else {
      return 1;
    }
  })
  .reduce((accu, curr) => accu * curr);
