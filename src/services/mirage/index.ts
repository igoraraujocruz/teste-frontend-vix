import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

export interface ICar {
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
      car: Model.extend<Partial<ICar>>({}),
    },

    factories: {
      car: Factory.extend({
        id() {
          return faker.string.uuid();
        },
        imageUrl() {
          return 'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png';
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
      this.get('/cars/:params', (schema, request) => {
        const { params } = request.params;

        const object = [
          {
            id: faker.string.uuid(),
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'audi',
            model: 'a4',
            year: '2023',
            price: faker.commerce.price(),
          },
          {
            id: faker.string.uuid(),
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'gol',
            model: 'g1',
            year: '2022',
            price: faker.commerce.price(),
          },
          {
            id: faker.string.uuid(),
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'volvo',
            model: 'cts',
            year: '2021',
            price: faker.commerce.price(),
          },
        ];

        const filter = object.filter(function (obj) {
          return obj.brand === params;
        });

        return filter;
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
