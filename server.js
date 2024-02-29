const express = require('express');
require('./mongoose/db');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());


const router = require('./routers/index')
app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
