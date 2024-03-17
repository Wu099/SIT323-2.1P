## Set Up Project
a. Install Node.js
Install nodejs at my computer.

b. Create a Project Folder
Create a folder and open a terminal, then run command `npm init -y` to initlize a nodejs project.

c. Install dependencies
For use `express`, i run command `npm install express -S`.

d. Create folders, files.
I created a folder `public`, and create `index.html` inside it. In addition, i created a js file `server.js`, and fill following code:

    const express = require('express');
    const app = express();
    const port = 3000; // You can change this port number if needed

    // Serve static files from the 'public' directory
    app.use(express.static('public'));

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

e. Test code.
Open a terminal and run command `node server.js`, then open browser visit `http://localhost:3000`, so i can see the content of html file.


