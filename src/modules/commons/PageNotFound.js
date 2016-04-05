import React from 'react';
import {Link} from 'react-router';


const PageNotFound = React.createClass({
  render: function() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1 style={{textAlign: 'center'}}>
          404 сторінка не знайдена
        </h1>
        <Link className="btn btn-lg btn-success" to="/" >Перейти на гловну сторінку</Link>
      </div>

    );
  }
});

export default PageNotFound;
