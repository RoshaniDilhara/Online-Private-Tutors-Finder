const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Student = mongoose.model("students");
const keys = require("../config/keys");

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport_std => {
  passport_std.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Student.findById(jwt_payload.id)
        .then(student => {
          if (student) {
            return done(null, student);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};