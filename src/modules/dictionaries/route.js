import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dictionaries from './components/Dictionaries';
import DictionariesIndex from './components/DictionariesIndex';
import DictionaryTable from './containers/DictionaryTable';

export default (

  <Route path="dictionaries" component={Dictionaries}>
    <IndexRoute component={DictionariesIndex}/>
    <Route path="/dictionaries/:dicName" component={DictionaryTable}/>
  </Route>

);