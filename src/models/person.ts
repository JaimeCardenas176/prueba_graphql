import { Car } from './car';

export class Person{
    id: string;
    name: string;
    surname: string;
    age: number;
    cars: [Car];

    constructor(id, name, age, car){
        this.id=id;
        this.name= name;
        this.age=age;
        this.cars=car;
    }
}