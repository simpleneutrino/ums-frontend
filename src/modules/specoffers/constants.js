export const LOAD_ALL_SPECOFFERS_START = 'LOAD_ALL_SPECOFFERS_START';
export const LOAD_ALL_SPECOFFERS_SUCCESS = 'LOAD_ALL_SPECOFFERS_SUCCESS';
export const LOAD_ALL_SPECOFFERS_FAIL = 'LOAD_ALL_SPECOFFERS_START';

export const LOAD_ONE_SPECOFFER_START = 'LOAD_ONE_SPECOFFER_START';
export const LOAD_ONE_SPECOFFER_SUCCESS = 'LOAD_ONE_SPECOFFER_SUCCESS';
export const LOAD_ONE_SPECOFFER_FAIL = 'LOAD_ONE_SPECOFFER_START';

export const LOAD_ENROLMENTS_BY_SPECOFFERS_START = 'LOAD_ENROLMENTS_BY_SPECOFFERS_START';
export const LOAD_ENROLMENTS_BY_SPECOFFERS_SUCCESS = 'LOAD_ENROLMENTS_BY_SPECOFFERS_SUCCESS';
export const LOAD_ENROLMENTS_BY_SPECOFFERS_FAIL = 'LOAD_ENROLMENTS_BY_SPECOFFERS_FAIL';

export const SPECOFFERS_LIST_WIDTH_CHANGED = 'SPECOFFERS_LIST_WIDTH_CHANGED';
export const ENROLMENTS_LIST_WIDTH_CHANGED = 'ENROLMENTS_LIST_WIDTH_CHANGED';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const SPECOFFERS_FIELD_NAMES = {
  id:                   {'name': '№',                     'width': 70},
  name:                 {'name': 'Спеціальність',         'width': 130},
  departmentId:         {'name': 'Структурний підрозділ', 'width': 130},
  specofferTypeId:      {'name': 'Тип пропозиції',        'width': 130},
  docNum:               {'name': 'Номер ліцензії',        'width': 50},
  weightCertificate:    {'name': 'weightCertificate',     'width': 80},
  weightAward:          {'name': 'weightAward',           'width': 80},
  educationFormTypeId:  {'name': 'Форма навчання',        'width': 80},
  licCount:             {'name': 'Ліцензований обсяг',    'width': 100},
  stateCount:           {'name': 'Державне замовлення',   'width': 100}
};