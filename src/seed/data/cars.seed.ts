import { v4 as uud } from 'uuid';
import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car[] =[
   {
    id: uud(),
    brand: 'Toyota',
    model: 'Corolla',

   },
   {
    id: uud(),
    brand: 'Honda',
    model: 'Civic',

   },
   {
    id: uud(),
    brand: 'Hiunday',
    model: 'Elantra',

   }
]