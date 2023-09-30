class Animal {
    constructor(public year: number){

    }
    run(): void{
    }
}

class Dog extends Animal{
    constructor(public year: number){
        super(year)
    }
    run(){
        console.log('бегает веляя хвостом!')
    }
}
const dog = new Dog(1);
dog.run()

