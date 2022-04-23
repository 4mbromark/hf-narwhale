// tslint:disable: max-line-length
import { LanguageLabel } from 'src/app/nw-language/language-label';
import { CommissionType } from './commission-type';

export enum CommissionStatus {
  ADDED = 'ADDED', // waiting
  ADDED_BY_CUSTOMER = 'ADDED_BY_CUSTOMER', // waiting

  // WAITING_FOR_EVALUATION = 'WAITING_FOR_EVALUATION', // evaluation
  IN_EVALUATION = 'IN_EVALUATION', // evaluation
  // WAITING_FOR_CONFIRM = 'WAITING_FOR_CONFIRM', // evaluation
  // CONDITION_NEGOTIATION,

  ACCEPTED = 'ACCEPTED', // ok
  ACCEPTED_BY_CUSTOMER = 'ACCEPTED_BY_CUSTOMER', // ok
  // REQUEST_ACCEPTED_WITH_CONDITION, // ok
  REFUSED = 'REFUSED', // error
  REFUSED_BY_CUSTOMER = 'REFUSED_BY_CUSTOMER', // error

  // PAYMENT_ADVICE_REQUIRED = '', // payment
  // PAYMENT_ADVICE_SENDED = '', // payment
  // PAYMENT_ADVICE_RECEIVED = '', // payment

  // ANTICIPATED_PAYMENT_REQUIRED = '', // payment
  // ANTICIPATED_PAYMENT_SENDED = '', // payment
  // ANTICIPATED_PAYMENT_RECEIVED = '', // payment

  IN_PROGRESS = 'IN_PROGRESS', // progress

  SUSPENDED = 'SUSPENDED', // waiting

  FINISHED = 'FINISHED', // ok

  // PAYMENT_REQUIRED = '', // payment
  // PAYMENT_SENDED = '', // payment
  // PAYMENT_RECEIVED = '', // payment

  // TO_DELIVER = '', // deliver
  // DELIVERING = '', // deliver
  // DELIVERED = '', // deliver

  CANCELED = 'CANCELED', // error
  CANCELED_BY_CUSTOMER = 'CANCELED_BY_CUSTOMER', // error
  // CALCELED_FOR_CUSTOMER_UNAVAILABLE = '', // error

  // WAITING_FOR_PAYMENTS_REFUND = '', // payment
  // PAYMENTS_REFUND_SENDED = '', // payment

  // COMPLETED = 'COMPLETED' // ok
}

export class CommissionStatusUpdatable {
  status: CommissionStatus;
  previouses: {
    type: CommissionType;
    statuses: CommissionStatus[];
  }[];
}

export const COMMISSION_STATUS_UPDATABLE_LIST: CommissionStatusUpdatable[] = [
  {
    status: CommissionStatus.IN_EVALUATION,
    previouses: [
      {
        type: CommissionType.CUSTOMER,
        statuses: [CommissionStatus.ADDED_BY_CUSTOMER]
      },
      {
        type: CommissionType.PERSONAL,
        statuses: [CommissionStatus.ADDED]
      },
      {
        type: CommissionType.PRE_AGREED,
        statuses: [CommissionStatus.ADDED]
      },
      {
        type: CommissionType.MANUAL,
        statuses: [CommissionStatus.ADDED]
      }
    ]
  },
  {
    status: CommissionStatus.ACCEPTED,
    previouses: [
      {
        type: CommissionType.CUSTOMER,
        statuses: [CommissionStatus.ADDED_BY_CUSTOMER, CommissionStatus.IN_EVALUATION]
      },
      {
        type: CommissionType.PRE_AGREED,
        statuses: [CommissionStatus.ADDED, CommissionStatus.IN_EVALUATION]
      },
      {
        type: CommissionType.MANUAL,
        statuses: [CommissionStatus.ADDED, CommissionStatus.IN_EVALUATION]
      }
    ]
  },
  {
    status: CommissionStatus.ACCEPTED_BY_CUSTOMER,
    previouses: [
      {
        type: CommissionType.MANUAL,
        statuses: [CommissionStatus.IN_EVALUATION]
      }
    ]
  },
  {
    status: CommissionStatus.REFUSED,
    previouses: [
      {
        type: CommissionType.CUSTOMER,
        statuses: [CommissionStatus.ADDED_BY_CUSTOMER, CommissionStatus.IN_EVALUATION]
      },
      {
        type: CommissionType.PRE_AGREED,
        statuses: [CommissionStatus.ADDED, CommissionStatus.IN_EVALUATION]
      },
      {
        type: CommissionType.MANUAL,
        statuses: [CommissionStatus.ADDED, CommissionStatus.IN_EVALUATION]
      }
    ]
  },
  {
    status: CommissionStatus.REFUSED_BY_CUSTOMER,
    previouses: [
      {
        type: CommissionType.MANUAL,
        statuses: [CommissionStatus.IN_EVALUATION]
      }
    ]
  },
  {
    status: CommissionStatus.IN_PROGRESS,
    previouses: [
      {
        type: CommissionType.CUSTOMER,
        statuses: [CommissionStatus.ACCEPTED, CommissionStatus.ACCEPTED_BY_CUSTOMER, CommissionStatus.SUSPENDED]
      },
      {
        type: CommissionType.PERSONAL,
        statuses: [CommissionStatus.ADDED, CommissionStatus.IN_EVALUATION, CommissionStatus.SUSPENDED]
      },
      {
        type: CommissionType.PRE_AGREED,
        statuses: [CommissionStatus.ACCEPTED, CommissionStatus.ACCEPTED_BY_CUSTOMER, CommissionStatus.SUSPENDED]
      },
      {
        type: CommissionType.MANUAL,
        statuses: [CommissionStatus.ACCEPTED, CommissionStatus.SUSPENDED]
      }
    ]
  },
  {
    status: CommissionStatus.SUSPENDED,
    previouses: [
      {
        type: CommissionType.CUSTOMER,
        statuses: [CommissionStatus.IN_PROGRESS]
      },
      {
        type: CommissionType.PERSONAL,
        statuses: [CommissionStatus.IN_PROGRESS]
      },
      {
        type: CommissionType.PRE_AGREED,
        statuses: [CommissionStatus.IN_PROGRESS]
      },
      {
        type: CommissionType.MANUAL,
        statuses: [CommissionStatus.IN_PROGRESS]
      }
    ]
  },
  {
    status: CommissionStatus.FINISHED,
    previouses: [
      {
        type: CommissionType.CUSTOMER,
        statuses: [CommissionStatus.IN_PROGRESS]
      },
      {
        type: CommissionType.PERSONAL,
        statuses: [CommissionStatus.IN_PROGRESS]
      },
      {
        type: CommissionType.PRE_AGREED,
        statuses: [CommissionStatus.IN_PROGRESS]
      },
      {
        type: CommissionType.MANUAL,
        statuses: [CommissionStatus.IN_PROGRESS]
      }
    ]
  },
  {
    status: CommissionStatus.CANCELED,
    previouses: [
      {
        type: CommissionType.CUSTOMER,
        statuses: [CommissionStatus.ACCEPTED, CommissionStatus.ACCEPTED_BY_CUSTOMER, CommissionStatus.IN_PROGRESS, CommissionStatus.SUSPENDED]
      },
      {
        type: CommissionType.PERSONAL,
        statuses: [CommissionStatus.IN_PROGRESS, CommissionStatus.SUSPENDED]
      },
      {
        type: CommissionType.PRE_AGREED,
        statuses: [CommissionStatus.ACCEPTED, CommissionStatus.ACCEPTED_BY_CUSTOMER, CommissionStatus.IN_PROGRESS, CommissionStatus.SUSPENDED]
      },
      {
        type: CommissionType.MANUAL,
        statuses: [CommissionStatus.ACCEPTED, CommissionStatus.IN_PROGRESS, CommissionStatus.SUSPENDED]
      }
    ]
  },
  {
    status: CommissionStatus.CANCELED_BY_CUSTOMER,
    previouses: [
      {
        type: CommissionType.MANUAL,
        statuses: [CommissionStatus.ACCEPTED, CommissionStatus.IN_PROGRESS, CommissionStatus.SUSPENDED]
      }
    ]
  }
  /* {
      status: CommissionStatus.COMPLETED,
      previouses: [
          {
              type: CommissionType.CUSTOMER,
              statuses: [CommissionStatus.FINISHED]
          },
          {
              type: CommissionType.PERSONAL,
              statuses: [CommissionStatus.FINISHED]
          },
          {
              type: CommissionType.PRE_AGREED,
              statuses: [CommissionStatus.FINISHED]
          },
          {
              type: CommissionType.MANUAL,
              statuses: [CommissionStatus.FINISHED]
          }
      ]
  } */
];

export function getCommissionStatusPreviousesByStatusAndType(status: CommissionStatus, type: CommissionType): CommissionStatus[] {
  const updatable = COMMISSION_STATUS_UPDATABLE_LIST.find(i => i.status === status);

  let previouses = null;
  if (updatable) {
    previouses = updatable.previouses.find(i => i.type === type);
  }

  return previouses ? previouses.statuses : [];
}

export function getCommissionStatusSubsequentesByStatusAndType(status: CommissionStatus, type: CommissionType): CommissionStatus[] {
  const subsequentes = [];

  COMMISSION_STATUS_UPDATABLE_LIST.forEach((updatable: CommissionStatusUpdatable) => {
    const previouses = getCommissionStatusPreviousesByStatusAndType(updatable.status, type);

    if (previouses.includes(status)) {
      subsequentes.push(updatable.status);
    }
  });

  return subsequentes;
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
// export const ERROR_BACKGROUND_COLOR = 'rgb(255, 200, 200)';
// export const ERROR_BACKGROUND_COLOR = 'rgb(255, 145, 145)';
export const ERROR_BACKGROUND_COLOR = 'rgb(255, 220, 220)';

export class CommissionStatusDetail {
  code: CommissionStatus;
  title: string;
  description: string;
  icon: string;
  color: CommissionStatusColor;
  action?: LanguageLabel;
}

export const COMMISSION_STATUS_DETAIL_LIST: CommissionStatusDetail[] = [
  {
    code: CommissionStatus.ADDED,
    title: LanguageLabel.COMMISSION_STATUS_ADDED_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_ADDED_DESCRIPTION,
    icon: 'plus',
    color: CommissionStatusColor.WAITING
  },
  {
    code: CommissionStatus.ADDED_BY_CUSTOMER,
    title: LanguageLabel.COMMISSION_STATUS_ADDEDCUSTOMER_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_ADDEDCUSTOMER_DESCRIPTION,
    icon: 'user-plus',
    color: CommissionStatusColor.WAITING
  },
  {
    code: CommissionStatus.IN_EVALUATION,
    title: LanguageLabel.COMMISSION_STATUS_INEVALUATION_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_INEVALUATION_DESCRIPTION,
    icon: 'clock',
    color: CommissionStatusColor.EVALUATION,
    action: LanguageLabel.COMMISSION_STATUS_INEVALUATION_ACTION
  },
  {
    code: CommissionStatus.ACCEPTED,
    title: LanguageLabel.COMMISSION_STATUS_REQUESTACCEPTED_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_REQUESTACCEPTED_DESCRIPTION,
    icon: 'check',
    color: CommissionStatusColor.OK,
    action: LanguageLabel.COMMISSION_STATUS_REQUESTACCEPTED_ACTION
  },
  {
    code: CommissionStatus.ACCEPTED_BY_CUSTOMER,
    title: LanguageLabel.COMMISSION_STATUS_REQUESTACCEPTEDCUSTOMER_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_REQUESTACCEPTEDCUSTOMER_DESCRIPTION,
    icon: 'user-check',
    color: CommissionStatusColor.OK,
    action: LanguageLabel.COMMISSION_STATUS_REQUESTACCEPTEDCUSTOMER_ACTION
  },
  {
    code: CommissionStatus.REFUSED,
    title: LanguageLabel.COMMISSION_STATUS_REQUESTREFUSED_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_REQUESTREFUSED_DESCRIPTION,
    icon: 'times',
    color: CommissionStatusColor.ERROR,
    action: LanguageLabel.COMMISSION_STATUS_REQUESTREFUSED_ACTION
  },
  {
    code: CommissionStatus.REFUSED_BY_CUSTOMER,
    title: LanguageLabel.COMMISSION_STATUS_REQUESTREFUSEDCUSTOMER_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_REQUESTREFUSEDCUSTOMER_DESCRIPTION,
    icon: 'user-times',
    color: CommissionStatusColor.ERROR,
    action: LanguageLabel.COMMISSION_STATUS_REQUESTREFUSEDCUSTOMER_ACTION
  },
  {
    code: CommissionStatus.IN_PROGRESS,
    title: LanguageLabel.COMMISSION_STATUS_PROGRESS_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_PROGRESS_DESCRIPTION,
    icon: 'pencil-ruler',
    color: CommissionStatusColor.PROGRESS,
    action: LanguageLabel.COMMISSION_STATUS_PROGRESS_ACTION
  },
  {
    code: CommissionStatus.SUSPENDED,
    title: LanguageLabel.COMMISSION_STATUS_SUSPENDED_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_SUSPENDED_DESCRIPTION,
    icon: 'pause',
    color: CommissionStatusColor.WAITING,
    action: LanguageLabel.COMMISSION_STATUS_SUSPENDED_ACTION
  },
  {
    code: CommissionStatus.FINISHED,
    title: LanguageLabel.COMMISSION_STATUS_FINISHED_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_FINISHED_DESCRIPTION,
    icon: 'check-circle',
    color: CommissionStatusColor.OK,
    action: LanguageLabel.COMMISSION_STATUS_FINISHED_ACTION
  },
  {
    code: CommissionStatus.CANCELED,
    title: LanguageLabel.COMMISSION_STATUS_CANCELED_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_CANCELED_DESCRIPTION,
    icon: 'times-circle',
    color: CommissionStatusColor.ERROR,
    action: LanguageLabel.COMMISSION_STATUS_CANCELED_ACTION
  },
  {
    code: CommissionStatus.CANCELED_BY_CUSTOMER,
    title: LanguageLabel.COMMISSION_STATUS_CANCELEDCUSTOMER_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_CANCELEDCUSTOMER_DESCRIPTION,
    icon: 'user-times',
    color: CommissionStatusColor.ERROR,
    action: LanguageLabel.COMMISSION_STATUS_CANCELEDCUSTOMER_ACTION
  },
  /* {
    code: CommissionStatus.COMPLETED,
    title: LanguageLabel.COMMISSION_STATUS_COMPLETED_TITLE,
    description: LanguageLabel.COMMISSION_STATUS_COMPLETED_DESCRIPTION,
    icon: 'check-circle',
    color: CommissionStatusColor.OK,
    action: LanguageLabel.COMMISSION_STATUS_COMPLETED_ACTION
  } */
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

export function isCommissionStatusSuccess(status: CommissionStatus): boolean {
  const statusDetail = getCommissionStatusDetail(status);
  return statusDetail ? (statusDetail.color === CommissionStatusColor.OK) : false;
}
export function isCommissionStatusError(status: CommissionStatus): boolean {
  const statusDetail = getCommissionStatusDetail(status);
  return statusDetail ? (statusDetail.color === CommissionStatusColor.ERROR) : false;
}
