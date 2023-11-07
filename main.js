class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

const person1 = new Person("Patrice", 56);
const person2 = new Person("Bob", 25);

person1.sayHello();
person2.sayHello();

// Class-based inheritance
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the constructor of the parent class
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student1 = new Student("Joe", 21, "123FG");
const student2 = new Student("Matt", 32, "564JG");

student1.sayHello();
student1.study();
student2.sayHello();
student2.study();
