export const DICTIONARY = 'DEPARTMENTS';

export const LOAD_DEPARTMENTS = 'LOAD_DEPARTMENTS';
export const LOAD_ENROLMENTS_TYPES = 'LOAD_ENROLMENTS_TYPES';
export const LOAD_ENROLMENTS_STATUS_TYPES = 'LOAD_ENROLMENTS_STATUS_TYPES';

export const DEPARTMENTS = 'DEPARTMENTS';
export const ENROLMENTS_TYPES = 'ENROLMENTS_TYPES';
export const ENROLMENTS_STATUS_TYPES = 'ENROLMENTS_STATUS_TYPES';

export const LOAD_ = 'LOAD_';

export const DICTIONARY_MAP = {
  [DEPARTMENTS]: {
    url: '/departments',
    params: {
      departmentTypeId: 1,
      limit: 300
    },
    cache: true
  },
  [ENROLMENTS_TYPES]: {
    url: '/enrolments/types',
    params: {
      limit: 300
    },
    cache: true
  },
  [ENROLMENTS_STATUS_TYPES]: {
    url: '/enrolments/statustypes',
    params: {
      limit: 300
    },
    cache: true
  }
};