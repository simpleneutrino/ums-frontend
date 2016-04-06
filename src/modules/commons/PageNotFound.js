import React from 'react';
import {Link} from 'react-router';


export default PageNotFound  =>
  <div className='center-align'>
    <h1 className='center-align'>
      404 сторінка не знайдена
    </h1>
    <Link className="btn btn-lg btn-success" to="/" >Перейти на гловну сторінку</Link>
  </div>
