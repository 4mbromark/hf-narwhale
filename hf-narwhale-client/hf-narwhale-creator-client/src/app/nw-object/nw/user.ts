import { DatabaseObject } from './database-object';

export class User extends DatabaseObject {

  idRegistry: number;

  blocked: boolean;
}
