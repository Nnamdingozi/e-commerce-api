const express = require('express' );
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a catch-all route for testing the installation.
app.get('*', (req, res) => {
    res.status(200).send('welcome')
});

const port = 8080;
app.listen(port, () => { `ecommerce app listening on ${port}`})b