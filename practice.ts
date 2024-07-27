class Car {
  year: number;
  make: string;
  model: string;
}

var mycar: Car = new Car();
var x: number = 1;
mycar.year = 2020;
mycar.make = "saipa";
mycar.model = "persia";
console.log(mycar);

// user

// user variables before login
var username: string = "Hasanain";
var password: string = "1234nfd23149";

// user variables after login
var avatarLink: string = "https://asdoijasdk.asdkjahl";
var username: string = "Hasanain";
var password: string = "1234nfd23149";
var nameee: string = "Hasanain Alsoudani";

// user billing page
var walletConnections: string[] = ["wallet1", "wallet2"];
var avatarLink: string = "https://asdoijasdk.asdkjahl";
var username: string = "Hasanain";
var password: string = "1234nfd23149";
var namee: string = "Hasanain Alsoudani";

// wallet setting
var selectedWalletIndex: number = 1;
var walletConnections: string[] = ["wallet1", "wallet2"];
var avatarLink: string = "https://asdoijasdk.asdkjahl";
var username: string = "Hasanain";
var password: string = "1234nfd23149";
var nameeee: string = "Hasanain Alsoudani";

// using classes

class User {
  // attribute, property
  username: string;
  password: string;
  name: string;
  avatarLink: string;

  // behavior, method
  getFirstName = () => {
    return this.name.split(" ")[0];
  };

  getLastName = () => {
    return this.name.split(" ")[-1];
  };
}

var hasanain: User = new User();

hasanain.avatarLink = "https://asdoijasdk.asdkjahl";
hasanain.username = "Hasanain";
hasanain.password = "1234nfd23149";
hasanain.name = "Hasanain Alsoudani";
hasanain.getFirstName();

// user billing page with objects

class WalletBillingPage {
  wallets: string[];
}

var billingPage = new WalletBillingPage();
billingPage.wallets = ["wallet1", "wallet2"];

// wallet settings page
var selectedWalletIndex = 1;
var user = hasanain;
var mainPage = billingPage;

class Person {
  healthLevel: number;
  tardinessLevel: number;

  isSick = () => {
    return this.healthLevel < 5;
  };
  isRegularlyTardy = () => {
    return this.tardinessLevel > 3;
  };

  constructor(healthLevel, tardinessLevel) {
    this.healthLevel = healthLevel;
    this.tardinessLevel = tardinessLevel;
  }
}

var jack: Person = new Person(8, 6);
var zack: Person = new Person(5, 5);
jack.healthLevel = 9;
// abstraction
var shouldIFireJack = () => {
  if (jack.isRegularlyTardy()) {
    if (jack.isSick()) {
      return false;
    }
    return true;
  }
  return false;
};









//incapsulation
//when we dont want another developer or ourselfs dont change or read an attribute by mistake
//we can control the reading and changing a attribute in the class
//for doing this we should add <#> in beginning of the name of the attribute
//when we added the # we cant use the attribute out of the class anymore
//for be able to use the attribute out of the class we should write two functions
//one for reading the attribute and one for changing it
//if the attribute is #wild for example we should write the code like this
class private {
  #wild: [];

  // this function is for reading the attribute
  reading() {
    return this.#wild;
  }

  //this function is for changing the attribute
  chainging(newAttribute) {
    this.#wild = newAttribute;
  }
}
//and here how we use them out of the class
var hasan = new name 
console.log(hasan.reding())
hasan.chainching(new)
// if we want to control the new attribute in changing function
//we should use <if> to dont add or remove somethig accidentally
//but if we use this method we should use the reading and changing as a function
//but the attribute is not a function and dont need () for useing it
//in javascript the are functions for this
//firs is <get> and the second one is <set>
//the get function is for reading the attribute
//and the set function is for the chainging the attribute
//we should use them like this :
class name {
  #wild: [];
  //we should have an attribute with name of the get or set functions
  //this is for reading the attribute 
  get wild(){
    return this.#wild
  }
  //this is for chainging the attribute 
  set wild (newAttribute){
    this.#wild = newAttribute
  }
}
//but here is the point when we use the get and set functions out of the class we dont need to use ()
//here how we use them
var sare = new name 
console.log(sare.wild)
sare.wild = new
//and now they are like a normal attribute



//abstraction
//two types of communication between class are <has> and <is>
//the has communication in programing means the class that we are writing have another class in it
//for example the house have persons in it 
//and the is communication in programing means the class that we are writing is another class
//for example the employee is a peson
//the abstraction is using has communication between two classes
//abstraction is a theoretical concept and its a coding method
//abstraction in coding means somone write a code and we use that code in our code
//for axample in the team somone write a class of person and we should write a class of house
//here we add persons attribute in house class and we give it the person class type
class person {
  name : string;
} 
//this is our code 
class house {
  persons : Person[];
}
//but some times its not like this
//for example we have a person class and we want to make a resturant class
//the resturant have employees 
//and the employees have attribute <busy> 
//but the porson class dont have it 
//so here we should make another class named employee and add attribute person with type of person
//and add another attribute named busy to find out that its busy or not with type of boolian
//after that we write the resturant class and add employee attribute with employee type
//this is the class that another guy write
class person {
  name : string;
  hunger : number;
  constructor(name, hunger){
    this.name = name
    this.hunger = hunger
  }
}
//and this is the code that we write
//employee class
class employee {
  person : person;
  busy : boolean;
}
//resturant class
class resturant{
employee:employee[]
customres: person[]
}
// like you see we didnt need to make a class for customers
//becuse they are just normal persons and dont need to add somthing on them fo eating food
//here the communication between person and employee is <is>
//but we used the <have> method for making it 
//becuse employee is a person 
//but the communication between person and house is <has>
//becuse the house have persons in it
//another axample is breaks 
//the house have breaks in it so the communication is <has>




// enheritance
// in abstraction we used have communication to do a is communication
//but this is a bad method 
//becuse if we want to call an attribute from parent class we should call it step by step
// in example that we write in abstraction if we want to call the name attribute 
//we should do this
var hasan = new employee ;
//calling and changing name attribute
hasan.peson.name = "hasan"
//so this method is not a good method
//in java script we can do this better 
class employe extends person{
  busy:boolean
} 
//here you see we add the person class to the employe class and we dont need to add a new attribute for person
//but in the constructor there is a difrent
class employeee extends person{
  busy:boolean
  constructor(name , hunger , busy){
    this.busy = busy
    //here if we want to fill the name and hunger attributes we should use <super>
    super(name , hunger)
  }
} 
// what super do is that it call the constructor of the parent class
// and with super we just filling the parent constructor
// and we dont need to fill the parent attribute manualy
// another difrents with this method is how we call the parent attributes out of the class 
var sara = new employeee(sara , 100 ,true)
// and now if we want to print the name we just do it like this
console.log(sara.name)
//if we dont put a construcrot for children classes the code wants the constractor of parents from us
class cook extends employe{}
var cook = new cook ()
//here we get an error tht say exspect 3 arguments but 0 
//it means we should give it the name and hunger and busy to work
//in java script we can use the children classes as the parent 