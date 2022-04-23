import { CommissionOrderStatus } from '../commission/commission-order-status';
import { CommissionStatus } from '../commission/commission-status';
import { DatabaseObject } from './database-object';
import { UserDirection } from './user-direction';

export class CommissionOrder extends DatabaseObject {

  idCommission: number;

  deadline: Date;

  payment: string;

  paymentAdvance: string;

  status: CommissionOrderStatus;

  direction: UserDirection;
}
