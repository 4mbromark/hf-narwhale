import { HighFiveUser } from './../hf/user';
import { Customer } from './customer';
import { CommissionPriority } from 'src/app/nw-object/commission/commission-priority';
import { DatabaseObject } from './database-object';
import { CommissionStatus } from '../commission/commission-status';
import { CommissionType } from '../commission/commission-type';

export class Commission extends DatabaseObject {

  creator: any;
  customer: Customer;
  customerData: HighFiveUser;
  template: any;

  idCreator: number;

  idCustomer: number;

  idTemplate: number;

  type: CommissionType;

  title: string;

  description: string;

  deadline: Date;

  status: CommissionStatus;

  priority: CommissionPriority;
}
