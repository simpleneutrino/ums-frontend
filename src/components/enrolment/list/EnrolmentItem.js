import React from 'react'

export default function (props) {
  let {id, docSeries, isInterview, isState, departmentId, enrolmentTypeId} = props;

  return (<tr>
    <td><a href={`/enrolment/${id}/mainInfo`}>{id}</a></td>
    <td>{docSeries}</td>
    <td>{isInterview}</td>
    <td>{isState}</td>
    <td>{departmentId}</td>
    <td>{enrolmentTypeId}</td>
  </tr>);
}