import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Statistics from './components/Statistics';
import StatisticsIndex from './components/StatisticsIndex';
import Chart from './containers/Chart';

export default (
  <Route path="statistics" component={Statistics}>
    <IndexRoute component={StatisticsIndex}/>
    <Route path="chart/:chartId" component={Chart}/>
  </Route>
);

