//Import the express library
const express =require('express');

//Import built-in path module
const path = require('path');

//Create an instance of an express app
const app = express();

//Define a port to run the server on (3000)
const port = 3000;

//Create route handler for GET request to the root URL(/)
//When requested send to index.html rom the public directory
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


//Create another route handler for GET request to /contact
app.get('/contact',(req, res) => {
    res.sendFile(path.join(__dirname, 'public','contact.html' ));
});


//Starts the server and listens on the defined port - 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

