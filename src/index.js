const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');

app.set('views',path.join(__dirname,'views'));  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });