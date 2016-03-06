export default function createReducer (initialState, actionHandlers) {
  return (state = initialState, action) => {
    const reduceFn = actionHandlers[action.type];
    console.log('action.type', action.type);
    if (!reduceFn) return state;

    return { ...state, ...reduceFn(state, action) }
  }
}
