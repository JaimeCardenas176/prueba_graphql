export class Car{
    model: string; 
    plate: string;
    year: string;
    state: number;
    constructor(model:string , plate: string, year: string, state: number){
        this.model=model;
        this.plate=plate;
        this.year=year;
        this.state=state;
    }
}