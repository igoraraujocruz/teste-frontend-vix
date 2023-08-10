import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

export interface ICar {
  id: string;
  imageUrl: string;
  brand: string;
  model: string;
  year: string;
  price: number;
  description: string;
  characteristics: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      car: Model.extend<Partial<ICar>>({}),
    },

    factories: {
      car: Factory.extend({
        id(i: number) {
          return `${i + 1}`;
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
        description() {
          return faker.lorem.lines(3);
        },

        characteristics() {
          return faker.lorem.slug(10);
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
            id: '1',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Audi',
            model: 'A4',
            year: '2023',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '2',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Audi',
            model: 'A4',
            year: '2023',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '3',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Audi',
            model: 'A4',
            year: '2023',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '4',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Gol',
            model: 'G1',
            year: '2022',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '5',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Volvo',
            model: 'CTS',
            year: '2021',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
        ];

        const filter = object.filter(
          obj =>
            obj.brand.toLowerCase().includes(params.toLowerCase()) ||
            obj.model.toLowerCase().includes(params.toLowerCase()) ||
            obj.year.toLowerCase().includes(params.toLowerCase()),
        );

        return filter;
      });

      this.get('/car/:params', (schema, request) => {
        const { params } = request.params;

        const object = [
          {
            id: '1',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Marca 1',
            model: 'Modelo 1',
            year: '2023',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '2',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Marca 2',
            model: 'Modelo 2',
            year: '2023',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '3',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Marca 3',
            model: 'Modelo 3',
            year: '2023',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '4',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Marca 4',
            model: 'Modelo 4',
            year: '2022',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '5',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Marca 5',
            model: 'Modelo 5',
            year: '2021',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '6',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Marca 6',
            model: 'Modelo 6',
            year: '2023',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '7',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Marca 7',
            model: 'Modelo 7',
            year: '2023',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '8',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Marca 8',
            model: 'Modelo 8',
            year: '2023',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '9',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Marca 9',
            model: 'Modelo 9',
            year: '2022',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
          {
            id: '10',
            imageUrl:
              'https://static.wixstatic.com/media/74d759_d482f8d45db940cf8b2c010eb4fdb6dd~mv2.png/v1/crop/x_278,y_2,w_1318,h_905/fill/w_804,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/carro.png',
            brand: 'Marca 10',
            model: 'Modelo 10',
            year: '2021',
            price: faker.commerce.price(),
            description: faker.lorem.lines(3),
            characteristics: faker.lorem.slug(10),
          },
        ];

        const filter = object.filter(obj =>
          obj.id.toLowerCase().includes(params.toLowerCase()),
        );

        return filter[0];
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
