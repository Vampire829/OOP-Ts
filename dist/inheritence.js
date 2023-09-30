"use strict";
class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getInfo() {
        console.log(this.name);
        console.log(this.salary);
    }
}
const developer = new Developer('Alim', 9000);
developer.getInfo();
//# sourceMappingURL=inheritence.js.map