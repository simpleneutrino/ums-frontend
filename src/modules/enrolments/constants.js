export const LOAD_ALL_ENROLMENTS_START = 'LOAD_ALL_ENROLMENTS_START';
export const LOAD_ALL_ENROLMENTS_SUCCESS = 'LOAD_ALL_ENROLMENTS_SUCCESS';
export const LOAD_ALL_ENROLMENTS_FAIL = 'LOAD_ALL_ENROLMENTS_START';

export const LOAD_ONE_ENROLMENT_START = 'LOAD_ONE_ENROLMENT_START';
export const LOAD_ONE_ENROLMENT_SUCCESS = 'LOAD_ONE_ENROLMENT_SUCCESS';
export const LOAD_ONE_ENROLMENT_FAIL = 'LOAD_ONE_ENROLMENT_FAIL';

export const LOAD_ONE_BENEFIT_START = 'LOAD_ONE_BENEFIT_START';
export const LOAD_ONE_BENEFIT_SUCCESS = 'LOAD_ONE_BENEFIT_SUCCESS';
export const LOAD_ONE_BENEFIT_FAIL = 'LOAD_ONE_BENEFIT_FAIL';

export const LOAD_ONE_STATUS_START = 'LOAD_ONE_STATUS_START';
export const LOAD_ONE_STATUS_SUCCESS = 'LOAD_ONE_STATUS_SUCCESS';
export const LOAD_ONE_STATUS_FAIL = 'LOAD_ONE_STATUS_FAIL';

export const ENROLMENT_REDUCER = 'enrolments';
export const ENROLMENT_LIST_REDUCER = 'list';
export const ENROLMENT_VIEW_REDUCER = 'view';
export const ENROLMENT_MAININFO_REDUCER = 'mainInfo';
export const ENROLMENTS_LIST_PAGE_WIDTH_CHANGED = 'ENROLMENTS_LIST_PAGE_WIDTH_CHANGED';

export const FIELD_NAMES = [
  {'name': '№',               'field': 'id', 'width': 40},
  {'name': 'Персона (id)',    'field': 'personId', 'width': 70},
  {'name': 'Пропозиція (id)', 'field': 'specOfferId', 'width': 90},
  {'name': 'Бюджет',          'field': 'isState', 'width': 70},
  {'name': 'Контракт',        'field': 'isContract', 'width': 80},
  {'name': 'Підрозділ',       'field': 'departmentId', 'width': 80},
  {'name': 'Загальний бал',   'field': 'mark', 'width': 90},
  {'name': 'Наявність пільг', 'field': 'isPrivilege', 'width': 80},
  {'name': 'Серія док.',      'field': 'docSeries', 'width': 80},
  {'name': 'Номер док.',      'field': 'docNum', 'width': 80},
  {'name': 'Потреб. гуртож',  'field': 'isHostel', 'width': 80},
  {'name': 'Тип поступлення', 'field': 'enrolmentTypeId', 'width': 100},
  {'name': 'Відмітка про співбесіду',     'field': 'isInterview', 'width': 100}

];

export const isStateNames = ['\u2718', '\u2713'];
export const isContractNames = ['\u2718', '\u2713'];
export const isPrivilegeNames = ['пільги відсутні', 'є пільги'];
export const isHostelNames = ['не потреб. гуртож.', 'потреб. гуртож.'];

export const isEducationStateNames = {
  0: 'Не отримую освіти',
  1: 'Отримую освіту',
  11: 'Є вища освіта'
};

export const isInterviewNames = {
  '-1': 'Не пройшов співбесіду',
  '0': 'Не потрібно співбесіди',
  '1': 'Потрібна співбесіда',
  '11': 'Співбесіда пройдена'
};

export const isOriginalNames = ['\u2718', '\u2713'];