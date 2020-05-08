import express from 'express';
import open from 'open';
import path from 'path';
import compression from 'compression';

const app = express();
const port = 3000;

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/users', (req, res) => {
	res.json([
		{
			id: 1,
			firstName: 'Bob',
			lastName: 'Smith',
			email: 'bob@gmail.com',
		}
	]);
})

app.listen(port, (err) => {
	if (err) {
		// eslint-disable-next-line no-console
		console.error(err);
	} else {
		// eslint-disable-next-line no-console
		console.log(`Example app listening at http://localhost:${port}`)
		open(`http://localhost:${port}`);
	}
});
