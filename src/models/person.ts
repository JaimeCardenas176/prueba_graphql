import { Car } from './car';

export class Person{
    id: string;
    name: string;
    surname: string;
    age: number;
    cars: [Car];

    constructor(id: string, name: string, age: number, car: [Car]){
        this.id=id;
        this.name= name;
        this.age=age;
        this.cars=car;
    }
}