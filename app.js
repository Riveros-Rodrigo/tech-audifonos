const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;

//ruteo los recursos estaticos
app.use(express.static('public'))

// RUTAS
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));


app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));