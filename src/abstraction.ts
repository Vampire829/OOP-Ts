class Car{
    constructor( protected title: string, protected year: number, protected speed: number){

    }
    public drive(): void{}
    public repair(): void{}
}

class BMW extends Car{
    constructor(protected year: number, protected speed: number){
        super('BmW', year, speed)
    }
    drive(){
        console.log(`The BMW car has speed ${this.speed}`)
    }
   repair(){
        console.log('The BmW car was repared')
    }
}

const carBmw =new BMW(2022, 350);
carBmw.drive();
