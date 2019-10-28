const express = require('express');
const databaseConnect = require('./config/db');

const app = express();
databaseConnect();

app.use(express.json({ extended: false })); // bodyParser
app.use('/api/budget', require('./routes/budget'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
