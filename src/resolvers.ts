import { Person } from './models/person';
import  { CarState } from './models/car_state';
import { Car } from './models/car';

export const all_cars = [new Car("Toyota avensis","1234 ABC","2002", CarState.OLD),
                new Car("Renault Clio","9078 XYZ","2001", CarState.UNUSABLE),
                new Car("Citröen Saxo","3545 ERP","2007", CarState.OLD),
                new Car("Mazda 3","4586 LSB","2012", CarState.NEW)];


const all_persons = [new Person('1','Jaime', 25, [all_cars[0]]),
                     new Person('2','Pablo', 23, [all_cars[1]]),
                     new Person('3','Paco', 18, [all_cars[3]])];



export const carsResolver =  (root, args, context) => {
    let cars = all_cars;
    return cars;
}

export const personsResolver = (root, args, context) => {
    let persons = all_persons;
    return persons;
}

export const carById = (root, args, context) => {
    let res=null;
    all_cars.forEach( (car) => {
        if (car.plate === args['plate'])
        res = car;
    });
    return res;
}

export const personById = (root, args, context) => {
    let res;
    all_persons.forEach((p) => {
        if(p.id===args['id'])
        res=p;
    });
    return res;
}

export const resolvers = {
    
        cars: (root, args, context) => carsResolver(root, args, context),
        personsResolver: (root, args, context) => personsResolver(root, args, context),
        carById:(root, args, context) => carById(root, args, context),
        personById: (root, args, context) => personById(root, args, context),
    
    CarState: {
        UNUSABLE: 0,
        OLD: 1,
        NEW: 2,
      }
}