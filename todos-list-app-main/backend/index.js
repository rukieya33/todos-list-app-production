
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

app.use(cors({origin:'https://todos-list-app-production-frontend.onrender.com'}));
 // Enable CORS for all origins // Middleware to parse URL-encoded bodies
app.use(express.json());
app.use(express.static('public'));
app.use('/', home);
app.use('/', register);
app.use('/', login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
