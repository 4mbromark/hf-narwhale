import { Status } from '../status/status';

export class Commission {
  idCreator: number;

  idCustomer: number;

  idTemplate: number;

  title: string;

  description: string;

  deadline: Date;

  source: string;

  status: Status;

  priority: string;
}
