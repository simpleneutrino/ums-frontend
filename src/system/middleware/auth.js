import {LOCATION_CHANGE, replace} from 'react-router-redux'
import {REQUIRED_AUTH} from '../routes'
import {checkPermission} from '../../modules/auth/helpers'

export default store => next => action => {
  const {payload, type} = action;

  // if it's a route action
  if (type === LOCATION_CHANGE) {
    const {pathname} = payload;
    const {auth} = store.getState();
    // and user want to react a protected page(route)
    if (!checkPermission(auth, pathname, REQUIRED_AUTH)) {
      // redirect him to the 'login' page
      store.dispatch(replace({pathname: '/login', query: {next: pathname}}))
      return null;
    }
  }

  return next(action);
};