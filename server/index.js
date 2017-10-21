const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const auth_controller = require('./auth_controller');
const prop_controller = require('./prop_controller');
const checkForSession = require('./middlewares/checkForSession');
require('dotenv').config();

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
});

app.use( bodyParser.json() );
app.use( cors() );

app.use(
  session({
      secret: 'whatever',
      resave: false,
      // saveUnititialized: false
    })
  );
app.use(checkForSession) ;



// Auth Endpoints
app.post('/api/auth/login', auth_controller.login);
app.post('/api/auth/register', auth_controller.register);
app.post('/api/auth/logout', auth_controller.logout);

// Property Endpoints
app.post('/api/properties', prop_controller.newProp);
app.get('/api/properties', prop_controller.allProps);
app.delete('/api/properties/:id', prop_controller.deleteProp);
app.get('/api/properties/filter', prop_controller.filterProps);


const port= process.env.PORT || 3001
app.listen( port, () => { console.log(`Listening on port ${port}`); } );
