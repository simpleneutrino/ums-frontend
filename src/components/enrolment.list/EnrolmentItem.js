import React from 'react'

export default function (props) {
  let {docSeries, id} = props;

  return (<tr>
    <td>{id}</td>
    <td>{docSeries}</td>
  </tr>);
}