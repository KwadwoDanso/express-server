# The Daily Grind Express Server

This is a basic Express.js server built for a fictional local coffee shop called **The Daily Grind**.

The server serves two static HTML pages:

- Home page
- Contact page

## Project Features

- Node.js project setup with npm
- Express.js server
- Basic routing
- Serves static HTML files using `res.sendFile()`
- Uses the Node.js `path` module for reliable file paths

## Author
Kwadwo Danso

## Acknowledgement
- Per Scholas Express and Node modules

## Reflection

- What is the difference between res.send() and res.sendFile()? When would you use one over the other? 
    -- res.send() sends a simple text response. res.sendFile() sends a comlete file.

- Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'? 
    -- Path file is necessary to specify the specific file in the folder because node.js has a built in path module, this can fail if the server is started from a different folder. 


- How would you add a third page (e.g., a menu page) to this server? What steps would you take?
    -- To add a third page I would add menu.html to public and then in the server.js add '//Create another route handler for GET request to /contact
        app.get('/menu',(req, res) => {
            res.sendFile(path.join(__dirname, 'public','menu.html' ));
        });'