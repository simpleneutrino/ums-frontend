
## Frontend part for UMS sdmission system


### FE project features

- `react`, `redux`, `react-router`
- `devtools` + `HMR` for development

### Development

```bash
$ npm install
$ npm start 
```

with devtools:
```bash
$ npm run start:devtools
```
To build: 
```bash
$ npm run build
```


Default basic url - `http://194.44.198.222:8080/is-lnu-rest-api/api`


### Production
To build: 
```bash
$ npm run dist
```
it eq to  `npm run clean && npm run lint && NODE_ENV=production webpack --config webpack.config.production.js` under the hood
To change default basic url - add BASIC_URL variable, like so: `BASIC_URL=http://localhost`


#### Specification

- [REST API](http://194.44.198.222:8080/is-lnu-rest-api/documentation/) .
- [Documentations](https://drive.google.com/folderview?id=0BwHaBiqMSw16fkE2dnNQRG9WMnlXSkE1WDY3NUJfQ0h4VlFsXzB5MGpXRVhKcVp1MUkyOVU&usp=sharing).

#### Other info

The skeleton for this app was taken from [emmenko/redux-react-router-async-example](http://emmenko.github.io/redux-react-router-async-example)
