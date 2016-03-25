import React, {PropTypes} from 'react';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

const EnrolmentItem = (props)=> {
  let {id, docSeries, isInterview, isState, departmentId, enrolmentTypeId} = props.item;
  let path = `/enrolments/${id}/info`;

  return (
    <tr>
      <td>
        <LinkContainer to={{ pathname: path}}>
          <a>{id}</a>
        </LinkContainer>
      </td>
      <td>{docSeries}</td>
      <td>{isInterview}</td>
      <td>{isState}</td>
      <td>{departmentId}</td>
      <td>{enrolmentTypeId}</td>
    </tr>);
};

EnrolmentItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default EnrolmentItem;

