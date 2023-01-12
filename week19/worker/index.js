class Worker {
constructor (name, lastname, rate, date) {
    this.name = name;
    this.lastname = lastname;
    this.rate = rate;
    this.date = date;
}

getSalary() {
return this.rate * this.date;
}
}

let worker = new Worker('Иван', 'Иванов', 10, 31 );

console.log(worker.name);
console.log(worker.lastname);
console.log(worker.rate);
console.log(worker.date);
console.log(worker.getSalary());

