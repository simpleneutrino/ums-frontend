import * as types from '../constants';

const defaultState = {
  isLoading: false,
  loaded: false,
  data: {}
};

export default function enrolments(state = defaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_ONE_ENROLMENT_START:
      return Object.assign({}, state, {isLoading: true, loaded: false});

    case types.LOAD_ONE_ENROLMENT_SUCCESS:
      let enrolPresented = state.data[action.payload.id];

      if (enrolPresented) {
        return Object.assign({}, state,
          {
            isLoading: false,
            loaded: true
          }
        );
      } else {
        let newObj = {...state.data};
        newObj[action.payload.id] = action.response;

        return Object.assign({}, state,
          {
            isLoading: false,
            loaded: true,
            data: Object.assign({}, state.data, newObj)
          }
        );
      }

    case types.LOAD_ONE_ENROLMENT_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    default:
      return state;
  }
}