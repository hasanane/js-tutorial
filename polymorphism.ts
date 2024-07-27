class Person {
  age: number;
  name: string;
  dayWork() {
    return `my name is ${this.name} and my age is ${this.age}`;
  }
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Employee extends Person {
  employerName: string;
  shiftStart: number;
  shiftEnd: number;
  dayWork() {
    return `${super.dayWork()}, I work at ${this.employerName} from ${
      this.shiftStart
    } till ${this.shiftEnd} `;
  }
  constructor(
    name: string,
    age: number,
    employerName: string,
    shiftStart: number,
    shiftEnd: number
  ) {
    if (age < 18) {
      throw console.log(`${name} is too young`);
    }
    super(name, age);
    this.employerName = employerName;
    this.shiftStart = shiftStart;
    this.shiftEnd = shiftEnd;
  }
}
class Student extends Person {
  schoolName: string;
  dayWork(){
     return `${super.dayWork()}, and my school name is ${this.schoolName}`
  }
  constructor(name: string, age: number, schoolName: string) {
    super(name, age);
    this.schoolName = schoolName;
  }
}
class CollegeStudent extends Student {
  numberOfCredit: number;
  dayWork() {
    return `${super.dayWork()}, and I take ${this.numberOfCredit} Credits`;
  }
  constructor(
    name: string,
    age: number,
    schoolName: string,
    numberOfCredit: number
  ) {
    super(name, age, schoolName);
    this.numberOfCredit = numberOfCredit;
  }
}
var hasan: Person = new CollegeStudent("hasan", 19, "olom", 24);
function printDayWork(anyone: Person) {
  console.log(anyone.dayWork());
}
var StudentAray: Person[] = [
  new Person("sara", 16),
  new Employee("abas", 20, "heydar", 12, 18),
  new Student("noore", 8, "zeynab"),
  new CollegeStudent("mohammad", 21, "tehran", 16),
];
StudentAray.forEach((accu) => printDayWork(accu));
