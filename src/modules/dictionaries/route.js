import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dictionaries from './components/Dictionaries';
import DictionariesIndex from './components/DictionariesIndex';
import DictionaryList from './containers/DictionaryList';

export default (

  <Route path="dictionaries" component={Dictionaries}>
    <IndexRoute component={DictionariesIndex}/>
    <Route path="/dictionaries/:dicName" component={DictionaryList}/>
  </Route>

);