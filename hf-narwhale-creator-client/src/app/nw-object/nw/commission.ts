import { DatabaseObject } from './database-object';
import { CommissionType } from 'src/app/nw-frame/toolbar/new-commission/create-commission.config';
import { CommissionStatus } from '../commission/commission-status';

export class Commission extends DatabaseObject {

  idCreator: number;

  idCustomer: number;

  idTemplate: number;

  type: CommissionType;

  title: string;

  description: string;

  deadline: Date;

  status: CommissionStatus;

  priority: string;
}
