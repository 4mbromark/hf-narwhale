import { LanguageLabel } from 'src/app/nw-language/language-label';

export enum CommissionStatus {
  ADDED = 'ADDED', // waiting
  ADDED_BY_CUSTOMER = 'ADDED_BY_CUSTOMER', // waiting

  WAITING_FOR_EVALUATION = 'WAITING_FOR_EVALUATION', // evaluation
  IN_EVALUATION = 'IN_EVALUATION', // evaluation
  // WAITING_FOR_CONFIRM = 'WAITING_FOR_CONFIRM', // evaluation
  // CONDITION_NEGOTIATION,

  ACCEPTED = 'ACCEPTED', // ok
  // REQUEST_ACCEPTED_WITH_CONDITION, // ok
  REFUSED = 'REFUSED', // error
  REFUSED_BY_CUSTOMER = 'REFUSED_BY_CUSTOMER', // error

  PAYMENT_ADVICE_REQUIRED = '', // payment
  PAYMENT_ADVICE_SENDED = '', // payment
  PAYMENT_ADVICE_RECEIVED = '', // payment

  ANTICIPATED_PAYMENT_REQUIRED = '', // payment
  ANTICIPATED_PAYMENT_SENDED = '', // payment
  ANTICIPATED_PAYMENT_RECEIVED = '', // payment

  IN_PROGRESS = 'IN_PROGRESS', // progress

  SUSPENDED = 'SUSPENDED', // waiting

  FINISHED = 'FINISHED', // ok

  PAYMENT_REQUIRED = '', // payment
  PAYMENT_SENDED = '', // payment
  PAYMENT_RECEIVED = '', // payment

  TO_DELIVER = '', // deliver
  DELIVERING = '', // deliver
  DELIVERED = '', // deliver

  CANCELED = 'CANCELED', // error
  CANCELED_BY_CUSTOMER = 'CANCELED_BY_CUSTOMER', // error
  // CALCELED_FOR_CUSTOMER_UNAVAILABLE = '', // error

  WAITING_FOR_PAYMENTS_REFUND = '', // payment
  PAYMENTS_REFUND_SENDED = '', // payment

  COMPLETED = 'COMPLETED' // ok
}

export enum CommissionStatusColor {
  WAITING = 'gray', // in attesa / sospesi
  EVALUATION = 'blue', // in valutazione / trattativa
  PAYMENT = 'orange', // pagamenti
  OK = 'green', // accettati / completati
  PROGRESS = 'magenta', // in lavorazione
  DELIVER = 'aqua', // da spedire / inviare
  ERROR = 'red' // rifiutati / cancellati
}

// export const ERROR_BACKGROUND_COLOR = 'rgb(255, 197, 197)';
export const ERROR_BACKGROUND_COLOR = 'rgb(255, 200, 200)';

export class CommissionStatusDetail {
  public code: CommissionStatus;
  public title: string;
  public description: string;
  public icon: string;
  public color: CommissionStatusColor;
}

export const COMMISSION_STATUS_DETAIL_LIST: CommissionStatusDetail[] = [
  {
    code: CommissionStatus.ADDED,
    title: LanguageLabel.STATUS_ADDED_TITLE,
    description: LanguageLabel.STATUS_ADDED_DESCRIPTION,
    icon: 'circle',
    color: CommissionStatusColor.WAITING
  },
  {
    code: CommissionStatus.ADDED_BY_CUSTOMER,
    title: LanguageLabel.STATUS_ADDEDCUSTOMER_TITLE,
    description: LanguageLabel.STATUS_ADDEDCUSTOMER_DESCRIPTION,
    icon: 'circle',
    color: CommissionStatusColor.WAITING
  },
  {
    code: CommissionStatus.WAITING_FOR_EVALUATION,
    title: LanguageLabel.STATUS_WAITINGFOREVALUATION_TITLE,
    description: LanguageLabel.STATUS_WAITINGFOREVALUATION_DESCRIPTION,
    icon: 'spinner',
    color: CommissionStatusColor.EVALUATION
  },
  {
    code: CommissionStatus.WAITING_FOR_EVALUATION,
    title: LanguageLabel.STATUS_WAITINGFOREVALUATION_TITLE,
    description: LanguageLabel.STATUS_WAITINGFOREVALUATION_DESCRIPTION,
    icon: 'spinner',
    color: CommissionStatusColor.EVALUATION
  },
  {
    code: CommissionStatus.IN_EVALUATION,
    title: LanguageLabel.STATUS_INEVALUATION_TITLE,
    description: LanguageLabel.STATUS_INEVALUATION_DESCRIPTION,
    icon: 'clock',
    color: CommissionStatusColor.EVALUATION
  },
/*   {
    code: CommissionStatus.WAITING_FOR_CONFIRM,
    title: LanguageLabel.STATUS_WAITINGFORCONFIRM_TITLE,
    description: LanguageLabel.STATUS_WAITINGFORCONFIRM_DESCRIPTION,
    icon: 'user-clock',
    color: CommissionStatusColor.EVALUATION
  }, */
  {
    code: CommissionStatus.ACCEPTED,
    title: LanguageLabel.STATUS_REQUESTACCEPTED_TITLE,
    description: LanguageLabel.STATUS_REQUESTACCEPTED_DESCRIPTION,
    icon: 'check',
    color: CommissionStatusColor.OK
  },
  {
    code: CommissionStatus.REFUSED,
    title: LanguageLabel.STATUS_REQUESTREFUSED_TITLE,
    description: LanguageLabel.STATUS_REQUESTREFUSED_DESCRIPTION,
    icon: 'times',
    color: CommissionStatusColor.ERROR
  },
  {
    code: CommissionStatus.REFUSED_BY_CUSTOMER,
    title: LanguageLabel.STATUS_REQUESTREFUSEDCUSTOMER_TITLE,
    description: LanguageLabel.STATUS_REQUESTREFUSEDCUSTOMER_DESCRIPTION,
    icon: 'user-times',
    color: CommissionStatusColor.ERROR
  },
  {
    code: CommissionStatus.IN_PROGRESS,
    title: LanguageLabel.STATUS_PROGRESS_TITLE,
    description: LanguageLabel.STATUS_PROGRESS_DESCRIPTION,
    icon: 'pencil-ruler',
    color: CommissionStatusColor.PROGRESS
  },
  {
    code: CommissionStatus.SUSPENDED,
    title: LanguageLabel.STATUS_SUSPENDED_TITLE,
    description: LanguageLabel.STATUS_SUSPENDED_DESCRIPTION,
    icon: 'pause',
    color: CommissionStatusColor.WAITING
  },
  {
    code: CommissionStatus.FINISHED,
    title: LanguageLabel.STATUS_FINISHED_TITLE,
    description: LanguageLabel.STATUS_FINISHED_DESCRIPTION,
    icon: 'check-circle',
    color: CommissionStatusColor.OK
  },
  {
    code: CommissionStatus.CANCELED,
    title: LanguageLabel.STATUS_CANCELED_TITLE,
    description: LanguageLabel.STATUS_CANCELED_DESCRIPTION,
    icon: 'times-circle',
    color: CommissionStatusColor.ERROR
  },
  {
    code: CommissionStatus.CANCELED_BY_CUSTOMER,
    title: LanguageLabel.STATUS_CANCELEDCUSTOMER_TITLE,
    description: LanguageLabel.STATUS_CANCELEDCUSTOMER_DESCRIPTION,
    icon: 'user-times',
    color: CommissionStatusColor.ERROR
  },
  {
    code: CommissionStatus.COMPLETED,
    title: LanguageLabel.STATUS_COMPLETED_TITLE,
    description: LanguageLabel.STATUS_COMPLETED_DESCRIPTION,
    icon: 'check-circle',
    color: CommissionStatusColor.OK
  }
];

export function getCommissionStatusDetail(status: CommissionStatus): CommissionStatusDetail {
  const statusDetail = COMMISSION_STATUS_DETAIL_LIST.find(i => i.code === status);
  return statusDetail || null;
}

export function getCommissionStatusesByColor(color: CommissionStatusColor): CommissionStatus[] {
  const statusDetails = COMMISSION_STATUS_DETAIL_LIST.filter((statusDetail: CommissionStatusDetail) => {
    return statusDetail.color === color;
  });

  const statuses: CommissionStatus[] = [];
  statusDetails.forEach((statusDetail: CommissionStatusDetail) => {
    statuses.push(statusDetail.code);
  });

  return statuses;
}

export function isCommissionStatusError(status: CommissionStatus): boolean {
  const statusDetail = getCommissionStatusDetail(status);
  return statusDetail ? (statusDetail.color === CommissionStatusColor.ERROR) : false;
}
