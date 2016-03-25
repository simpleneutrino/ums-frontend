import React, {PropTypes} from 'react';

const EnrolmentItem = (props)=> {
  let {docSeries, id} = props.item;

  return (<tr>
    <td>{id}</td>
    <td>{docSeries}</td>
  </tr>);
};

EnrolmentItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default EnrolmentItem;

