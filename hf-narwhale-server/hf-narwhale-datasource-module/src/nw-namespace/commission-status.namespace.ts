import { CommissionType } from "./commission.namespace";

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

export class CommissionStatusSource {
    status: CommissionStatus;
    sources: {
        type: CommissionType;
        statuses: CommissionStatus[];
    }[];
}

export const COMMISSION_STATUS_SOURCE_LIST: CommissionStatusSource[] = [
    {
        status: CommissionStatus.IN_EVALUATION,
        sources: [
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
        sources: [
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
        sources: [
            {
                type: CommissionType.MANUAL,
                statuses: [CommissionStatus.IN_EVALUATION]
            }
        ]
    },
    {
        status: CommissionStatus.REFUSED,
        sources: [
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
        sources: [
            {
                type: CommissionType.MANUAL,
                statuses: [CommissionStatus.IN_EVALUATION]
            }
        ]
    },
    {
        status: CommissionStatus.IN_PROGRESS,
        sources: [
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
        sources: [
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
        sources: [
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
        sources: [
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
        sources: [
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
    const updatable = COMMISSION_STATUS_SOURCE_LIST.find(i => i.status === status);

    let previouses = null;
    if (updatable) {
        previouses = updatable.sources.find(i => i.type === type);
    }

    return previouses ? previouses.statuses : [];
}

export function getCommissionStatusSubsequentesByStatusAndType(status: CommissionStatus, type: CommissionType): CommissionStatus[] {
    const subsequentes = [];

    COMMISSION_STATUS_SOURCE_LIST.forEach((updatable: CommissionStatusSource) => {
        const previouses = getCommissionStatusPreviousesByStatusAndType(updatable.status, type);

        if (previouses.includes(status)) {
            subsequentes.push(updatable.status);
        }
    });

    return subsequentes;
}
