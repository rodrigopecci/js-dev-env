import express from 'express';
import open from 'open';
import path from 'path';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.listen(port, (err) => {
	if (err) {
		console.error(err);
	} else {
		console.log(`Example app listening at http://localhost:${port}`)
		open(`http://localhost:${port}`);
	}
});
