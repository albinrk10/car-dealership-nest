import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRAND_SEED: Brand[] = [
   {
      id: uuid(),
      name: 'Toyota',
      createdAt: Date.now()
   },
   {
      id: uuid(),
      name: 'Honda',
      createdAt: Date.now()


   },
   {
      id: uuid(),
      name: 'Hiunday',
      createdAt: Date.now()


   },

]