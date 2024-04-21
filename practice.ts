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
var username: string = "Hasanain"
var password: string = "1234nfd23149"

// user variables after login
var avatarLink: string = "https://asdoijasdk.asdkjahl"
var username: string = "Hasanain"
var password: string = "1234nfd23149"
var name: string = "Hasanain Alsoudani"


// user billing page
var walletConnections: string[] = ["wallet1", "wallet2"]
var avatarLink: string = "https://asdoijasdk.asdkjahl"
var username: string = "Hasanain"
var password: string = "1234nfd23149"
var name: string = "Hasanain Alsoudani"


// wallet setting
var selectedWalletIndex: number = 1
var walletConnections: string[] = ["wallet1", "wallet2"]
var avatarLink: string = "https://asdoijasdk.asdkjahl"
var username: string = "Hasanain"
var password: string = "1234nfd23149"
var name: string = "Hasanain Alsoudani"

// using classes

class User {
  // attribute, property
  username: string
  password: string
  name: string
  avatarLink: string

  // behavior, method
  getFirstName = () => {
    return this.name.split(" ")[0]
  }
  
  getLastName = () => {
    return this.name.split(" ")[-1]
  }
}


var hasanain: User = new User();

hasanain.avatarLink = "https://asdoijasdk.asdkjahl"
hasanain.username = "Hasanain"
hasanain.password = "1234nfd23149"
hasanain.name = "Hasanain Alsoudani"
hasanain.getFirstName()
// user billing page with objects

class WalletBillingPage {
  wallets: string[]
}

var billingPage = new WalletBillingPage()
billingPage.wallets = ["wallet1", "wallet2"]

// wallet settings page
var selectedWalletIndex = 1
var user = hasanain
var mainPage = billingPage


class Person {
  healthLevel: number
  tardinessLevel: number
  
  isSick = () => {
    return this.healthLevel < 5
  }

  isRegularlyTardy = () => {
    return this.tardinessLevel > 3
  }

  constructor(healthLevel, tardinessLevel) {
    this.healthLevel = healthLevel
    this.tardinessLevel = tardinessLevel
  }
}

var jack: Person = new Person(8, 6)
var zack: Person = new Person(5, 5)

// abstraction
var shouldIFireJack = () => {
  if (jack.isRegularlyTardy()) {
    if (jack.isSick()) {
      return false
    }
    return true
  }
  return false
}
