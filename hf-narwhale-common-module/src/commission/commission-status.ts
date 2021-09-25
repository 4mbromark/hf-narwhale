export enum CommissionStatus {
    ADDED = 'ADDED', // waiting
    ADDED_BY_CUSTOMER = 'ADDED_BY_CUSTOMER', // waiting

    WAITING_FOR_EVALUATION = 'WAITING_FOR_EVALUATION', // evaluation
    IN_EVALUATION = 'IN_EVALUATION', // evaluation
    WAITING_FOR_CONFIRM = 'WAITING_FOR_CONFIRM', // evaluation
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