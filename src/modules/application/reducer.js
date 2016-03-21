import * as constants from '../../constants'
import createReducer from '../../utils/create-reducer'

const initialState = {
  token: null,
  locale: 'en',
  user: {
    permissions: []
  },
  error: null
}

const actionHandlers = {
  [constants.LOGGED_IN]: (_, action) => action.payload,
  [constants.LOG_OUT]: () => ({ token: null }),
  [constants.LOCALE_SWITCHED]: (_, action) => ({ locale: action.payload }),

  // TO-DO: this handle only API error responses.
  // We should also handle all other kind of application errors,
  // report them and show some kind of helpful message to the user.
  [constants.SHOW_ERROR]: (state, action) => {
    const { payload, source } = action
    return Object.assign({}, state, {
      // TO-DO: ideally we want to map API error response codes
      // with some user-friendly messages.
      error: {
        source,
        message: payload.message,
        statusCode: payload.statusCode || payload.code,
        body: payload.body || (payload instanceof Error ?
          (payload.toString() + '\n' + payload.stack) : payload)
      }
    })
  },
  [constants.HIDE_ERROR]: state => ({ ...state, ...{ error: null } })
};

export default createReducer(initialState, actionHandlers)
