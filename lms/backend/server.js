const express = require('express');

const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const upload = multer({ dest: 'temp/' });



app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));