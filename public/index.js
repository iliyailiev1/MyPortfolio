const express = require('express');
const path = require('path');
const app = express();
const port = 5001

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})
app.use(express.static(path.join(__dirname,"public")));

