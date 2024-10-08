const express = require('express');
const cors = require('cors');
const port=8080;

const app = express();

app.use(cors()); 

app.get('/data', (req, res) => {
    res.json({ message: 'Hello from the server with CORS middleware!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
