//import application from '../reducers/application'
//import github from '../reducers/github'
//import { enrolmentList } from  '../modules/enrolment.list'
//import { dictionaries } from  '../modules/dictionaries'
//console.log('enrolmentList x', enrolmentList);
//console.log('dictionaries x', dictionaries);
//console.log('github x', dictionaries);
//console.log('application x', dictionaries);
//export { application, github, enrolmentList, dictionaries };

export { default as application } from '../reducers/application'
export { default as github } from '../reducers/github'
export { default as enrolmentList } from '../modules/enrolment.list/reducer'
export { default as dictionaries } from '../modules/dictionaries/reducer'
export { default as statistics } from '../modules/statistics/reducer'