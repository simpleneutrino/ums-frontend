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

export const SPECOFFERS_FIELD_NAMES = {
  id:                   {'name': '№',                     'width': 80},
  specialtyId:          {'name': 'Спеціальність',         'width': 100},
  departmentId:         {'name': 'Структурний підрозділ', 'width': 100},
  specofferTypeId:      {'name': 'Тип пропозиції',        'width': 80},
  docNum:               {'name': 'docNum',                'width': 50},
  weightCertificate:    {'name': 'weightCertificate',     'width': 80},
  weightAward:          {'name': 'weightAward',           'width': 80},
  educationFormTypeId:  {'name': 'Форма навчання',        'width': 80},
  licCount:             {'name': 'Ліцензований обсяг',    'width': 80},
  stateCount:           {'name': 'Державне замовлення',   'width': 80}
};