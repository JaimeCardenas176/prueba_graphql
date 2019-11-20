"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./models/person");
const car_state_1 = require("./models/car_state");
const car_1 = require("./models/car");
exports.all_cars = [new car_1.Car("Toyota avensis", "1234 ABC", "2002", car_state_1.CarState.OLD),
    new car_1.Car("Renault Clio", "9078 XYZ", "2001", car_state_1.CarState.UNUSABLE),
    new car_1.Car("Citröen Saxo", "3545 ERP", "2007", car_state_1.CarState.OLD),
    new car_1.Car("Mazda 3", "4586 LSB", "2012", car_state_1.CarState.NEW)];
const all_persons = [new person_1.Person('1', 'Jaime', 25, [exports.all_cars[0]]),
    new person_1.Person('2', 'Pablo', 23, [exports.all_cars[1]]),
    new person_1.Person('3', 'Paco', 18, [exports.all_cars[3]])];
exports.carsResolver = (root, args, context) => {
    let cars = exports.all_cars;
    return cars;
};
exports.personsResolver = (root, args, context) => {
    let persons = all_persons;
    return persons;
};
exports.carById = (root, args, context) => {
    let res = null;
    exports.all_cars.forEach((car) => {
        if (car.plate === args['plate'])
            res = car;
    });
    return res;
};
exports.personById = (root, args, context) => {
    let res;
    all_persons.forEach((p) => {
        if (p.id === args['id'])
            res = p;
    });
    return res;
};
exports.resolvers = {
    cars: (root, args, context) => exports.carsResolver(root, args, context),
    personsResolver: (root, args, context) => exports.personsResolver(root, args, context),
    carById: (root, args, context) => exports.carById(root, args, context),
    personById: (root, args, context) => exports.personById(root, args, context),
    CarState: {
        UNUSABLE: 0,
        OLD: 1,
        NEW: 2,
    }
};
//# sourceMappingURL=resolvers.js.map