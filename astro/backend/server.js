require('dotenv').config()
const express = require('express');
const home = require("./src/pages/components/home.astro");

const app = express();
app.use(express.json());

app.get('/',home);
app.get('/exp', (req, res) => {

res.send('<h1>Running EXPS<h2>');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));