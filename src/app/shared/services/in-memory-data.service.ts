import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Constants } from '../../shared/constants/constants';
import * as faker from "faker/locale/pt_BR";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    /**
    * Simulate a API request sending 100 random values.
    * Using fill without map  makes faker geneate the same singer always.
    */
    const randomSingers = Array(Constants.__numberOfRandomToFetch).fill("").map(() => {
      return {
        nome: faker.name.findName(),
        genero: faker.internet.domainName(),
        grupo: faker.random.arrayElement(Constants.__bestGroupsEver),
        idade: faker.random.number({ 'min': 12, 'max': 99 }),
        image: faker.image.avatar()
      }
    });

    return { randomSingers };
  }
}