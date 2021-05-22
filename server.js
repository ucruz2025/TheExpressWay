const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
