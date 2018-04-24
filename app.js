const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.render('home')
});

app.listen(PORT);