import { SHOW_ERROR } from '../constants'

// redundant. need to move this to other place
export default function handleActionError (dispatch, error, source) {
  return dispatch({
    type: SHOW_ERROR,
    source,
    payload: error
  })
}
