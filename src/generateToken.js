const jwt = require('jsonwebtoken');
require('dotenv').config();

const user = {
  user: "Reynaldo",
  pass: "Dirksen",
  role: 'admin'
};


const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

console.log(token);
