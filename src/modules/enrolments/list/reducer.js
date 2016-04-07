import * as types from '../constants';

const defaultState = {
  isLoading: true,
  count: 0,
  limit: 50,
  offset: 0,
  resources: [],
  enrolmentsFieldNames: types.ENROLMENTS_FIELD_NAMES,
  error: null
};

export default function enrolments(state = defaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_ALL_ENROLMENTS_START:
      return Object.assign({}, state, {isLoading: true, resources: []});

    case types.LOAD_ALL_ENROLMENTS_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false
        },
        action.response
      );

    case types.LOAD_ALL_ENROLMENTS_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    case types.ENROLMENTS_LIST_PAGE_WIDTH_CHANGED:
      let changedName = {
        'name': state.enrolmentsFieldNames[action.payload.columnKey].name,
        'width': action.payload.newColumnWidth
      };
      return Object.assign({}, state,
        {
          enrolmentsFieldNames: {...state.enrolmentsFieldNames, [action.payload.columnKey]: changedName}
        }
      );

    default:
      return state;
  }
}