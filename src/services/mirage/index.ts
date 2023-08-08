import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

interface User {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      // são para gerar dados em massa. muitos dados!
      user: Factory.extend({
        // tem q ser o mesmo nome do model (user).
        name(i: number) {
          return `User ${i + 1}`;
        }, // cada campo que tem dentro do model, deve ser passsado como método.
        email() {
          return faker.internet.email();
        },
        createdAt() {
          return faker.date.recent();
        }, // tanto faz em ser em Camel Case aqui. o mirage troca.
      }),
    },

    seeds(server) {
      server.createList('user', 10);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
