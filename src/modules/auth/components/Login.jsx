import React, {PropTypes} from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';

const Login = (props) => {
  const {error, form} = props;
  
  return (
    <div className="row">
      <Form horizontal className="col-xs-6 col-xs-offset-3" onSubmit={props.submit}>
        <h3>Будь ласка, авторизуйтеся:</h3>
        <br/>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={2}> Логін </Col>
          <Col sm={10}>
            <FormControl type="text"
                         autoFocus
                         value={form.login}
                         onChange={props.onLoginChange}
                         placeholder="Логін" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}> Пароль </Col>
          <Col sm={10}>
            <FormControl type="password"
                         placeholder="Пароль"
                         value={form.password}
                         onChange={props.onPasswordChange}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Авторизуватись
            </Button>
          </Col>
        </FormGroup>

        {error ? <Alert bsStyle="danger">
          <p>{error}</p>
        </Alert> : null}

      </Form>
    </div>
  );
};

Login.propTypes = {
  onLoginChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  error: PropTypes.any
};

export default Login;