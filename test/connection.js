const mongoose = require('mongoose');

// Connect to the db before tests run
before(function (done) {
  // Connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open', function () {
    console.log('Connection has been mode, now make fireworks...');
    done();
  }).on('error', function (error) {
    console.log('Connection error:', error)
  });
});

// Drop the characters collection before each test
beforeEach(function (done) {
  // Drop the collection
  mongoose.connection.collections.mariochars.drop().then(function () {
    done();
  })
});