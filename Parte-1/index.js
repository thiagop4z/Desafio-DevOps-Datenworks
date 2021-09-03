// Desafio DevOps Datenworks :: Thiago Paz //

const express = require('express')

const app = express()

const port = 3000

app.listen(port, () => {
	console.log(`app listenning at http://localhost:${port}`)
});

app.get('/api', function (req, res) {
	res.send('Hello Datenworks!')
});
