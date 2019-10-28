const mongoose = require('mongoose');
const keys = require('./keys');

const connect = async () => {
  try {
    await mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to Budget App database!');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connect;
