const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Updating records', function () {

  var char;

  beforeEach(function (done) {
    char = new MarioChar({
      name: 'Mario',
    });

    char.save().then(function () {
      done();
    });
  });

  // Create tests
  it('Updates one record in the database', function (done) {
    MarioChar.findOneAndUpdate({
      name: 'Mario'
    }, {
      name: 'Luigi'
    }).then(function () {
      MarioChar.findOne({
        _id: char._id
      }).then(function (res) {
        assert(res.name === 'Luigi');
        done();
      })
    })
  });

});