import React from 'react';
import './styles/page-loader.styl';
import Spinner from './Spinner'

export default PageLoader =>
  <div className="page-loader">
    <div className="page-loader__spinner">
      <Spinner className="sk-fading-circle--big"/>
    </div>
  </div>;
