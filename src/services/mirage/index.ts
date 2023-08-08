import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

export interface Car {
  id: string;
  imageUrl: string;
  brand: string;
  model: string;
  year: Date;
  price: number;
}

export function makeServer() {
  const server = createServer({
    models: {
      car: Model.extend<Partial<Car>>({}),
    },

    factories: {
      car: Factory.extend({
        id() {
          return faker.string.uuid();
        },
        imageUrl() {
          return faker.image.avatar();
        },
        brand() {
          return faker.vehicle.manufacturer();
        },
        model() {
          return faker.vehicle.model();
        },
        year() {
          return faker.date.anytime();
        },
        price() {
          return faker.commerce.price();
        },
      }),
    },

    seeds(server) {
      server.createList('car', 10);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/cars');
      this.post('/cars');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
