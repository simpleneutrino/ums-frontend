import * as types from '../constants';

let fieldWidth = {};
types.FIELD_NAMES.map((item) => fieldWidth[item.field] = item.width);

const defaultState = {
  isLoading: true,
  count: 0,
  limit: 50,
  offset: 0,
  resources: [],
  fieldWidth: fieldWidth,
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
      return Object.assign({}, state,
        {
          fieldWidth: {...state.fieldWidth, [action.payload.columnKey]: action.payload.newColumnWidth}
        }
      );

    default:
      return state;
  }
}