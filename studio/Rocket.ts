
import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

 export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[]=[];
    astronauts: Astronaut[]=[];
   
    constructor(name: string, totalCapacityKg: number){
    this.name = name ;
    this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number{
        let totalMass: number = 0;
        for (let i=0; i<items.length; i++){
            totalMass += items[i].massKg;
        } return totalMass;

    }

    currentMassKg(): number{
       return this.sumMass(this.astronauts) 
        + this.sumMass(this.cargoItems);
    } 
    
    canAdd(item: Payload): boolean{
        if (this.currentMassKg() + item.massKg <=
        this.totalCapacityKg){
            return true;
        }

    }
    addCargo(cargo: Cargo){
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut){
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }

    }

   
 }