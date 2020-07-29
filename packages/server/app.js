const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/hello', function (req, res) {
	res.send('hello from Express!');
});

app.listen(port, () => {
	console.log('app is running on port ' + port);
});

module.exports = app;
