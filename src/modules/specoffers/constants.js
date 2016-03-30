export const LOAD_ALL_SPECOFFERS_START = 'LOAD_ALL_SPECOFFERS_START';
export const LOAD_ALL_SPECOFFERS_SUCCESS = 'LOAD_ALL_SPECOFFERS_SUCCESS';
export const LOAD_ALL_SPECOFFERS_FAIL = 'LOAD_ALL_SPECOFFERS_START';

export const LOAD_ONE_SPECOFFER_START = 'LOAD_ONE_SPECOFFER_START';
export const LOAD_ONE_SPECOFFER_SUCCESS = 'LOAD_ONE_SPECOFFER_SUCCESS';
export const LOAD_ONE_SPECOFFER_FAIL = 'LOAD_ONE_SPECOFFER_START';

export const LOAD_ENROLMENTS_BY_SPECOFFERS_START = 'LOAD_ENROLMENTS_BY_SPECOFFERS_START';
export const LOAD_ENROLMENTS_BY_SPECOFFERS_SUCCESS = 'LOAD_ENROLMENTS_BY_SPECOFFERS_SUCCESS';
export const LOAD_ENROLMENTS_BY_SPECOFFERS_FAIL = 'LOAD_ENROLMENTS_BY_SPECOFFERS_FAIL';

export const SPECOFFERS_REDUCER = 'specoffers';
export const SPECOFFERS_LIST_REDUCER = 'list';
export const SPECOFFERS_VIEW_REDUCER = 'view';
export const SPECOFFERS_ENROLMENTS_REDUCER = 'specofferEnrolments';

export const SPECOFFERS_LIST_WIDTH_CHANGED = 'SPECOFFERS_LIST_WIDTH_CHANGED';
export const ENROLMENTS_LIST_WIDTH_CHANGED = 'ENROLMENTS_LIST_WIDTH_CHANGED';

export const FIELD_NAMES = [
  {'name': '№',                     'field': 'id',                  'width': 80},
  {'name': 'Спеціальність',         'field': 'specialtyId',         'width': 100},
  {'name': 'Структурний підрозділ', 'field': 'departmentId',        'width': 100},
  {'name': 'Тип пропозиції',        'field': 'specofferTypeId',     'width': 80},
  {'name': 'docNum',                'field': 'docNum',              'width': 50},
  {'name': 'weightCertificate',     'field': 'weightCertificate',   'width': 80},
  {'name': 'weightAward',           'field': 'weightAward',         'width': 80},
  {'name': 'Форма навчання',        'field': 'educationFormTypeId', 'width': 80},
  {'name': 'Ліцензований обсяг',    'field': 'licCount',            'width': 80},
  {'name': 'Державне замовлення',   'field': 'stateCount',          'width': 80},
];