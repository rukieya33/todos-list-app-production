const front = require("./router/app");
const home = require("./router/home");
const register = require("./router/register");
const login = require("./router/login");
const express = require('express');

const app = express();
const cors = require('cors');
const port = 3000;
// const bodyParser = require('body-parser'); // Not used in this code, but can b for parsing request bodies
// const cors = require('cors'); // CORS middleware to allow cross-origin requests    
//app.options('*', cors()); // Enable pre-flight requests for all routes

app.use(cors({origin:'https://sage-youtiao-e6765a.netlify.app/'}));
 // Enable CORS for all origins // Middleware to parse URL-encoded bodies
app.use('/', front);
app.use('/', home);
app.use('/', register);
app.use('/', login);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
