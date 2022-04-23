import { CommissionStatus } from './commission-status';

export enum CommissionOrderStatus {
  ACCEPTED = CommissionStatus.ACCEPTED,
  ACCEPTED_BY_CUSTOMER = CommissionStatus.ACCEPTED_BY_CUSTOMER,
  REFUSED = CommissionStatus.REFUSED,
  REFUSED_BY_CUSTOMER = CommissionStatus.REFUSED_BY_CUSTOMER
}
