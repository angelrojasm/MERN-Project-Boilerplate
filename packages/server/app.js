const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const sampleModel = require('./mongoose/sampleModel');

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	app.use(express.static('../client/build'));

	// Express serve up index.html file if it doesn't recognize route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
	});
}
app.listen(process.env.PORT || port, () => {
	console.log('app is running on port ' + port);
});

app.get('/hello', function (req, res) {
	res.send('hello from Express!');
});

app.get('/get-all', async function (req, res) {
	res.send(await sampleModel.find());
});

module.exports = app;
