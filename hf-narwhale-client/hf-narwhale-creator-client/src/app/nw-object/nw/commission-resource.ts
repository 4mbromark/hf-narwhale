import { DatabaseObject } from './database-object';
import { UserDirection } from './user-direction';

export class CommissionResource extends DatabaseObject {

  idCommission: number;

  name: string;

  link: string;

  direction: UserDirection;

  private: boolean;

  reference: boolean;
}
