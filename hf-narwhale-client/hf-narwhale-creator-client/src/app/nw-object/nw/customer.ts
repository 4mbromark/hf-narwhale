import { DatabaseObject } from 'src/app/nw-object/nw/database-object';
import { User } from './user';

export class Customer extends DatabaseObject {

  user: User;
  idRegistry: number;
  blocked: boolean;

  idUser: number;
}
