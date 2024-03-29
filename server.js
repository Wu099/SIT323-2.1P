const express = require('express');
const app = express();
const port = 3000; // You can change this port number if needed

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


