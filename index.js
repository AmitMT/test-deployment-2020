const express = require('express');
const chalk = require('chalk');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const server = app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(
	chalk.bold(chalk.underline('\nrunning')) +
		' - ' +
		chalk.cyan(chalk.underline(`http://localhost:${server.address().port}`))
);

app.get('/', (req, res) => {
	res.render('home.ejs', { url: `http://localhost:${server.address().port}${req.url}` });
});
