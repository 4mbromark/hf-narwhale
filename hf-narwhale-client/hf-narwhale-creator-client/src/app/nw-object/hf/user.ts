import { DatabaseObject } from './../nw/database-object';
export class HighFiveUser extends DatabaseObject {
  firstName: string;

  lastName: string;

  birthDate: Date;

  emailAddress: string;

  phoneNumber: string;

  username: string;
}
