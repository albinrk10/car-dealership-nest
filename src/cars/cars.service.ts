import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: uuid(),
            brand: 'Hiunday',
            model: 'Sonata',
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: String) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(
            `Car with id ${id} not found`);

        return car;
    }

    create(createCarDto: CreateCarDto) {
        const car:Car = {
            id: uuid(),
            // brand: createCarDto.brand,
            // model: createCarDto.model,
            ...createCarDto,
        }
        this.cars.push(car);
        return car;
    }
    update(id: String, updateCarDto: UpdateCarDto){
        let carDb = this.findOneById(id);
        if(updateCarDto.id && updateCarDto.id !== id)
        throw new BadRequestException(`Car with id ${id} not found`);

        this.cars = this.cars.map(car=>{
            if(car.id === id){
                carDb = {
                    ...car,
                    ...updateCarDto,
                    id,
                }
                return  carDb;
            }
            return car; 
        })

        return carDb; //carro actulizado
    }
    delete (id : String) {
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        
    }
}
