class Develop {
    constructor(private name: string, private salary: number){
    }
    getsalary(): void{
        console.log(this.salary)
    }
}
const develop = new Develop('Alim', 5000);
develop.getsalary()