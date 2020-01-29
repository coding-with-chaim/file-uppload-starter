const express = require('express');
const app = express();

app.use(express.static("public"));

app.listen(5678, () => console.log('server is running on port 5678'));