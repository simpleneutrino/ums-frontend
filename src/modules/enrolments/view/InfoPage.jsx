import React, {Component, PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import {LinkContainer} from 'react-router-bootstrap';

class InfoPage extends Component {
  render() {
    return (
      <div>
        <div className="btn-group">
          <LinkContainer to={{ pathname: `/enrolments/${this.props.params.id}/info`}}>
            <Button eventKey={1} className="btn btn-default"> Main Info </Button>
          </LinkContainer>
          <LinkContainer to={{ pathname: `/enrolments/${this.props.params.id}/benefits`}}>
            <Button eventKey={2} className="btn btn-default"> Benefits </Button>
          </LinkContainer>

        </div>
        {this.props.children}
      </div>
    );
  }
}

InfoPage.propTypes = {
  children: PropTypes.any
};

export default InfoPage;