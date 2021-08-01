class Worker {
  #experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.salaryWithExp = this.dayRate * this.workingDays * this.#experience;
    this.salary = this.dayRate * this.workingDays;
  }

  showSalary() {
    this.salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${this.salary}`);
  }

  showSalaryWithExperience() {
    this.salaryWithExp = this.dayRate * this.workingDays * this.#experience;
    console.log(`${this.fullName} salary: ${this.salaryWithExp}`);
  }

  get showExp() {
    return this.#experience;
  }

  set setExp(newExperience) {
    if (newExperience < 0) {
      throw new Error("The rate couldn't be negative number");
    }
    this.#experience = newExperience;
    this.salaryWithExp = this.dayRate * this.workingDays * this.#experience;
  }

  showSortedSalary(...workers){
    workers.push(this);
    const sortedSlaryList = workers.sort((firstWorker, secondWorker) => firstWorker.salaryWithExp - secondWorker.salaryWithExp);
    console.log("Sorted salary: \n");
    sortedSlaryList.forEach(worker => console.log(`${worker.fullName}: ${worker.salaryWithExp}\n`))
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName); // John Johnson             
worker1.showSalary(); // John Johnson salary: 460 
console.log("New experience: " + worker1.showExp); // New experience: 1.2
worker1.showSalaryWithExperience(); // John Johnson salary: 552
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp); // New experience: 1.5
worker1.showSalaryWithExperience(); // John Johnson salary: 690

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 1.5; 
worker2.showSalaryWithExperience(); // Tom Tomson salary: 1584


let worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 1.5;
worker3.showSalaryWithExperience(); // Andy Ander salary: 1000.5

worker3.showSortedSalary(worker1, worker2);
// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584

