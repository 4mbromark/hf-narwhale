import { DatabaseObject } from './database-object';
import { CommissionActionType } from '../commission/commission-action-type';
import { CommissionStatus } from '../commission/commission-status';

export class CommissionAction extends DatabaseObject {

    idCommission: number;

    type: CommissionActionType;

    status: CommissionStatus;

    description: string;
}
