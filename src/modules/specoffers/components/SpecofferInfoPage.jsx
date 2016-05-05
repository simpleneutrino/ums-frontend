import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

export class SpecofferInfoPage extends Component {
  render() {
    return (
      <div>
        <br/>
        <Nav bsStyle="tabs" activeKey={1}>
          <LinkContainer to={{ pathname: `/specoffers/${this.props.params.id}/enrolments` }}>
            <NavItem eventKey={1}>Заяви до пропозиції</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: `/specoffers/${this.props.params.id}/benefits`}}>
            <NavItem eventKey={2}>Пільги</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: `/specoffers/${this.props.params.id}/info` }}>
            <NavItem eventKey={3}>Основна інформація</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: `/specoffers/${this.props.params.id}/subjects`}}>
            <NavItem eventKey={4}>Предмети</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: `/specoffers/${this.props.params.id}/waves`}}>
            <NavItem eventKey={5}>Хвилі</NavItem>
          </LinkContainer>
        </Nav>
        {this.props.children}
      </div>
    );
  }
}

SpecofferInfoPage.propTypes = {
  children: PropTypes.any
};

function select(state) {
  return {
    specoffersQueryParams: {
      timePeriodId: state.specoffers.list.timePeriodId,
      limit: state.specoffers.list.limit
    }
  };
}

export default connect(select)(SpecofferInfoPage);