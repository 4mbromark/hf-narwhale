export enum HighFiveDSApi {
  USER_LOGIN = '/hf-api/auth',
  USER_VERIFY = '/hf-api/auth/verify',
}

export enum NarwhaleCSApi {
  CUSTOMER_USER_GET_CUSTOMER = '/nw-cs/customer/user/',
  CUSTOMER_USER_GET_COMMISSION = '/nw-cs/customer/user/by-commission/',

  COMMISSION_FETCH = '/nw-cs/commission',
  COMMISSION_INSERT = '/nw-cs/commission',
  COMMISSION_UPDATE_STATUS = '/nw-cs/commission/update/status/',
  COMMISSION_UPDATE_PRIORITY = '/nw-cs/commission/update/priority/',

  COMMISSION_ACTION_GET_COMMISSION = '/nw-cs/commission-action/by-commission/',
  COMMISSION_ANNOTATION_GET_COMMISSION = '/nw-cs/commission-annotation/by-commission/',
  COMMISSION_ANNOTATION_INSERT = '/nw-cs/commission-annotation/',
  COMMISSION_ANNOTATION_UPDATE = '/nw-cs/commission-annotation/update/',
  COMMISSION_ANNOTATION_DELETE = '/nw-cs/commission-annotation/',
  COMMISSION_RESOURCE_GET_COMMISSION = '/nw-cs/commission-resource/by-commission/',
  COMMISSION_RESOURCE_HTML_GET = '/nw-cs/nw-cs/commission-resource/html/',
  COMMISSION_RESOURCE_INSERT = '/nw-cs/commission-resource/',
  COMMISSION_RESOURCE_UPDATE = '/nw-cs/commission-resource/update/',
  COMMISSION_RESOURCE_DELETE = '/nw-cs/commission-resource/',
  COMMISSION_ORDER_GET_COMMISSION = '/nw-cs/commission-order/by-commission/',
  COMMISSION_ORDER_INSERT = '/nw-cs/commission-order/',
}

export enum RoutingUrl {
  LOGIN_PAGE = 'login',

  DASHBOARD = 'dashboard',
  COMMISSION_LIST = 'commission-list',
  COMMISSION_ARCHIVE = 'commission-archive',
  TEMPLATES = 'templates',
  CUSTOMERS = 'customers'
}

export const HF_APP_CREDENTIALS = {
  hfappname: 'HIGH_FIVE_NARWHALE_CC',
  hfapptoken: 'admin'
};
