const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
//Templating Engine
app.set('views','./views');
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended:true }));

//Routes
app.use('/', require('./routes/index.js'));
app.listen(port, () => console.log(`Listening on Port ${port}`));