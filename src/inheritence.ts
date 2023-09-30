class Developer {
    constructor(public name: string, public salary: number){

    }
    getInfo(){
        console.log(this.name);
        console.log(this.salary);
    }
}

class JuniorDeveloper extends Developer{
    constructor(public name: string, public salary: number){
        super(name, salary)
    }
}

const developer = new Developer('Alim', 9000);
developer.getInfo()
const juniorDeveloper = new JuniorDeveloper('Ali', 3000)
