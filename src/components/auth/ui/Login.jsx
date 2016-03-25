import React, {PropTypes} from 'react';

const Login = (props) => {
  const {form, error} = props.auth;

  return (
    <div className="row">
      <form className="form-horizontal col-xs-6 col-xs-offset-3" onSubmit={props.submit}>
        <h3>Будь ласка, авторизуйтеся:</h3>
        <div className="form-group">
          <input type="text"
                 className="form-control input-lg"
                 autoFocus="autofocus"
                 placeholder="Логін"
                 value={form.login}
                 onChange={props.onLoginChange}
          />
        </div>

        <div className="form-group">
          <input type="password"
                 className="form-control input-lg"
                 placeholder="Пароль"
                 value={form.password}
                 onChange={props.onPasswordChange}
          />
        </div>

        {error.length ? <div className="form-group alert alert-danger text-center" role="alert">{error}</div> : null}

        <div className="form-group">
          <button type='submit' className="btn btn-primary pull-right">Авторизуватись</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  onLoginChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default Login;