/**
 * function that simplify syntax for creating redux reducers
 * (it dosn't provide additional functionality, just syntax sugar).
 * @param initialState
 * @param actionHandlers
 * @returns {function()}
 */
export default function createReducer (initialState, actionHandlers) {
  return (state = initialState, action) => {
    const reduceFn = actionHandlers[action.type];
    if (!reduceFn) return state;

    return { ...state, ...reduceFn(state, action) }
  }
}
