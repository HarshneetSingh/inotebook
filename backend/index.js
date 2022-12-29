const connectToMongoose = require("./db");
const express = require('express');
connectToMongoose();
const app = express()
const port = 3000

// available routes

// The app.use() function is used to mount the specified middleware function(s) at the path which is being specified.
app.use('/api/auth',require("./routes/auth"));
app.use('/api/notes',require("./routes/notes"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})