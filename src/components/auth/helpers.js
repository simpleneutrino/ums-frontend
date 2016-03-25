import {routes} from '../../system/routes';

export default function checkAuth(auth, path) {
  let config = routes[path];

  if (config) {
    const {groups=[], login, roles=[]} = config;

    if (auth.user.authenticated) {
      if (login && auth.user.login === login) {
        return true;
      }

      if (contains(groups, auth.user.groups) || contains(roles, auth.user.roles)) {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function contains(firstArr = [], secondArr = []) {
  let result = false;

  for (let i = firstArr.length - 1; i >= 0; i--) {
    for (let j = secondArr.length - 1; j >= 0; j--) {
      if (firstArr[i] === secondArr[j]) {
        result = true;
        break;
      }

      if (result) {
        break;
      }
    }
  }

  return result;
}
