import { LanguageLabel } from 'src/app/nw-language/language-label';

export enum Status {
  ADDED_BY_CUSTOMER = 'ADDED_BY_CUSTOMER', // waiting
  ADDED_BY_SELLER = 'ADDED_BY_SELLER', // waiting

  WAITING_FOR_EVALUATION = 'WAITING_FOR_EVALUATION', // evaluation
  IN_EVALUATION = 'IN_EVALUATION', // evaluation
  WAITING_FOR_CONFIRM = 'WAITING_FOR_CONFIRM', // evaluation
  // CONDITION_NEGOTIATION,

  REQUEST_ACCEPTED = 'REQUEST_ACCEPTED', // ok
  // REQUEST_ACCEPTED_WITH_CONDITION, // ok
  REQUEST_REFUSED = 'REQUEST_REFUSED', // error
  REQUEST_REFUSED_BY_CUSTOMER = 'REQUEST_REFUSED_BY_CUSTOMER', // error

  PAYMENT_ADVICE_REQUIRED = '', // payment
  PAYMENT_ADVICE_SENDED = '', // payment
  PAYMENT_ADVICE_RECEIVED = '', // payment

  ANTICIPATED_PAYMENT_REQUIRED = '', // payment
  ANTICIPATED_PAYMENT_SENDED = '', // payment
  ANTICIPATED_PAYMENT_RECEIVED = '', // payment

  IN_PROGRESS = '', // progress

  SUSPENDED = '', // waiting

  FINISHED = '', // ok

  PAYMENT_REQUIRED = '', // payment
  PAYMENT_SENDED = '', // payment
  PAYMENT_RECEIVED = '', // payment

  TO_DELIVER = '', // deliver
  DELIVERING = '', // deliver
  DELIVERED = '', // deliver

  CANCELED_BY_CUSTOMER = '', // error
  CANCELED_BY_SELLER = '', // error
  CALCELED_FOR_CUSTOMER_UNAVAILABLE = '', // error

  WAITING_FOR_PAYMENTS_REFUND = '', // payment
  PAYMENTS_REFUND_SENDED = '', // payment

  COMPLETED = '' // ok
}

export enum StatusColor {
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

export class StatusDetail {
  public code: Status;
  public title: string;
  public description: string;
  public icon: string;
  public color: StatusColor;
}

export const STATUS_LIST: StatusDetail[] = [
  {
    code: Status.WAITING_FOR_EVALUATION,
    title: LanguageLabel.STATUS_WAITINGFOREVALUATION_TITLE,
    description: LanguageLabel.STATUS_WAITINGFOREVALUATION_DESCRIPTION,
    icon: 'spinner',
    color: StatusColor.EVALUATION
  },
  {
    code: Status.IN_EVALUATION,
    title: LanguageLabel.STATUS_INEVALUATION_TITLE,
    description: LanguageLabel.STATUS_INEVALUATION_DESCRIPTION,
    icon: 'clock',
    color: StatusColor.EVALUATION
  },
  {
    code: Status.WAITING_FOR_CONFIRM,
    title: LanguageLabel.STATUS_WAITINGFORCONFIRM_TITLE,
    description: LanguageLabel.STATUS_WAITINGFORCONFIRM_DESCRIPTION,
    icon: 'user-clock',
    color: StatusColor.EVALUATION
  },
  {
    code: Status.REQUEST_ACCEPTED,
    title: LanguageLabel.STATUS_REQUESTACCEPTED_TITLE,
    description: LanguageLabel.STATUS_REQUESTACCEPTED_DESCRIPTION,
    icon: 'check',
    color: StatusColor.OK
  },
  {
    code: Status.REQUEST_REFUSED,
    title: LanguageLabel.STATUS_REQUESTREFUSED_TITLE,
    description: LanguageLabel.STATUS_REQUESTREFUSED_DESCRIPTION,
    icon: 'times',
    color: StatusColor.ERROR
  },
];

export function getDetail(status: Status) {
  const statusDetail = STATUS_LIST.find(i => i.code === status);
  return statusDetail || null;
}

export function isError(status: Status) {
  const statusDetail = getDetail(status);
  return statusDetail ? (statusDetail.color === StatusColor.ERROR) : false;
}
