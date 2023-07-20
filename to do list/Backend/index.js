const express = require('express');
const conectMongo =require('./mongoDB');
const cors = require('cors')
const port = 5000
const app = express();
conectMongo();

app.use(cors())
app.use(express.json())

// app.use('/api/auth',require('./routes/authentication'));
app.use('/api',require('./routes/addnote'));
app.use('/api',require('./routes/getNote'));
app.use('/api',require('./routes/deletenote'));
app.use('/api',require('./routes/updatenote'));
app.use('/api',require('./routes/signup'));
app.use('/api',require('./routes/login'));
app.use('/api',require('./routes/getuser'));


app.listen(port, () => {
    console.log(`NoteBook app listening on port ${port}`)
  })