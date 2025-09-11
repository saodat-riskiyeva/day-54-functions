class Job {
  constructor(title, location, salary) {
    this.title = title;
    this.location = location;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I am a ${this.title}, I live in ${this.location} and I earn a salary of $${this.salary}`
    );
  }
}

const developer = new Job("Developer", "New York", 120000);
const designer = new Job("Designer", "San Francisco", 100000);
const manager = new Job("Manager", "Chicago", 110000);
const cook = new Job("Cook", "Los Angeles", 80000);
// console.log(developer);
// console.log(designer);
// console.log(manager);
// console.log(cook);

developer.describe();
designer.describe();
manager.describe();
cook.describe();
