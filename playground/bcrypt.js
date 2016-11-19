const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('hash', hash);
  })
});

var hashedPassword = "$2a$10$C61dmHHVdeRt2c8Gd3cF4eYsEpak44ev7VIRfkiMN8/grq7BiGnVO";

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log('compare', res);
});
