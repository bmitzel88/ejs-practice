// Import the express module
import express from 'express';

// Create an instance
const app = express();

// Define a port number
const PORT = 3008;

// Set view engine to ejs
app.set('view engine', 'ejs');

// Enable static file serving
app.use(express.static('public'));

// Define a default route ("/")
app.get('/', (req, res) => {

    const person = ({ name: 'Donald Duck'}, { occupation: 'plumber'}, {favoriteColor: 'blue'});
    res.render('home', {person});

});

// Start server on designated port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)
);