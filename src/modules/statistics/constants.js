// ACTION TYPES
export const LOAD_STATISTICS = 'LOAD_STATISTICS';

// statistics entities names
export const PRIORITIES = 'PRIORITIES';
export const ALLOCATIONS_ADMINUNITS = 'ALLOCATIONS_ADMINUNITS';
export const ALLOCATIONS_DEPARTMENTS = 'ALLOCATIONS_DEPARTMENTS';

// CONSTANTS
export const STATISTICS_REDUCER = 'statistics';

//
/**
 * callApi - info for fetching data from a server
 * cacheTime - 5h x 60sec = 300
 * route - internal route for navigation
 * chartTitle - pill title
 * amChartConfig - config for amchart
 * @type {{}}
 */
export const STATISTICS_MAP = {
  [PRIORITIES]: {
    callApi: {
      url: '/stats/8/priorities',
      params: {},
      cache: true,
      cacheTime: 300
    },
    route: `/statistics/chart/${PRIORITIES}`,
    title: 'Статистика по пріоритетам',
    amChartConfig: {
      'type': 'serial',
      'theme': 'light',
      'marginRight': 70,
      'dataProvider': [ {
        'priority' : 12,
        'count' : 10
      }, {
        'priority' : 8,
        'count' : 1
      }, {
        'priority' : 1,
        'count' : 18
      }, {
        'priority' : 4,
        'count' : 1
      }, {
        'priority' : 0,
        'count' : 5
      }, {
        'priority' : 3,
        'count' : 158
      }, {
        'priority' : 5,
        'count' : 1
      }, {
        'priority' : 9,
        'count' : 2
      } ],
      'valueAxes': [{
        'axisAlpha': 0,
        'position': 'left',
        'title': 'Кількість'
      }],
      'startDuration': 1,
      'graphs': [{
        'balloonText': '<b>[[value]] заяв [[category]]-го пріоритету</b>',
        'fillAlphas': 0.9,
        'lineAlpha': 0.2,
        'title': 'count',
        'type': 'column',
        'valueField': 'count'
      }],
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'priority',
      'categoryAxis': {
        'gridPosition': 'start',
        'labelRotation': 45,
        'title': 'Пріоритет'
      },
      'export': {
        'enabled': true
      }

    }
  },
  [ALLOCATIONS_ADMINUNITS]: {
    callApi: {
      url: '/stats/8/entrants/allocations/adminunits',
      params: {},
      cache: true,
      cacheTime: 300
    },
    route: `/statistics/chart/${ALLOCATIONS_ADMINUNITS}`,
    title: 'Статистика по областям',
    amChartConfig: {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': null,
      'titleField': 'adminUnit',
      'valueField': 'entrantCount',
      'labelRadius': 5,
      'radius': '42%',
      'innerRadius': '60%',
      'labelText': '[[title]]',
      'export': {
        'enabled': true
      }
    }
  },
  [ALLOCATIONS_DEPARTMENTS]: {
    callApi: {
      url: '/stats/8/entrants/allocations/departments',
      params: {},
      cache: true,
      cacheTime: 300
    },
    route: `/statistics/chart/${ALLOCATIONS_DEPARTMENTS}`,
    title: 'Статистика по факультетам',
    amChartConfig: {
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'name',
      'rotate': false,
      'startDuration': 1,
      'categoryAxis': {
        'gridPosition': 'start',
        'position': 'left'
      },
      'trendLines': [],
      'legend': {
        'useGraphSettings': true
      },
      'graphs': [
        {
          'balloonText': 'Загальна кількість:[[value]]',
          'alphaField': 'Загальна кількіст',
          'fillAlphas': 0.8,
          'id': 'AmGraph-1',
          'lineAlpha': 0.2,
          'title': 'Загальна кількість',
          'type': 'column',
          'valueField': 'generalCount'
        },
        {
          'balloonText': 'Нагороди:[[value]]',
          'fillAlphas': 0.8,
          'id': 'AmGraph-2',
          'lineAlpha': 0.2,
          'title': 'Нагороди',
          'type': 'column',
          'valueField': 'awardsCount'
        },
        {
          'balloonText': 'Пільги:[[value]]',
          'fillAlphas': 0.8,
          'id': 'AmGraph-3',
          'lineAlpha': 0.2,
          'title': 'Пільги',
          'type': 'column',
          'valueField': 'benefitCount'
        }
      ],
      'guides': [],
      'valueAxes': [
        {
          'id': 'ValueAxis-1',
          'position': 'top',
          'axisAlpha': 0
        }
      ],
      'allLabels': [],
      'balloon': {},
      'titles': [],
      'dataProvider': null,
      'export': {
        'enabled': true
      }
    }
  }
};
