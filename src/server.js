'use strict';
//common-js require
// es6 - import
const express = require('express');
const app = express();
app.use(express.json);
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

app.use(logger)

// to add any middleware we use the 'use' keyward
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/person',validator, (req,res)=>{
    const result ={
        name:req.query,
    }
    res.json(result);
})

app.use('*',notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`Server is up on ${port}`));
}
module.exports = {
  app: app,
  start: start,
};