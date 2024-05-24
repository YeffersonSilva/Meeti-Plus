const express = require('express');
const expressLayouts = require('express-ejs-layouts'); 
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;


app.use(express)
app.set('view engine', 'ejs');

app.set('views',path.join(__dirname,'views'));  

app.unsubscribe((req, res, next) => {
    const data = new Date();
    res.locals.year = data.getFullYear();
    next();
}
);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });