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

export const ENROLMENTS_LIST_PAGE_WIDTH_CHANGED = 'ENROLMENTS_LIST_PAGE_WIDTH_CHANGED';

export const ENROLMENTS_FIELD_NAMES = {
  id:               {'name': '№',                       'width': 40},
  personId:         {'name': 'Персона (id)',            'width': 70},
  specofferId:      {'name': 'Пропозиція (id)',         'width': 90},
  isState:          {'name': 'Бюджет',                  'width': 70},
  isContract:       {'name': 'Контракт',                'width': 80},
  departmentId:     {'name': 'Підрозділ',               'width': 80},
  mark:             {'name': 'Загальний бал',           'width': 90},
  isPrivilege:      {'name': 'Наявність пільг',         'width': 80},
  docSeries:        {'name': 'Серія док.',              'width': 80},
  docNum:           {'name': 'Номер док.',              'width': 80},
  isHostel:         {'name': 'Потреб. гуртож',          'width': 80},
  enrolmentTypeId:  {'name': 'Тип поступлення',         'width': 100},
  isInterview:      {'name': 'Відмітка про співбесіду', 'width': 100}
};

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