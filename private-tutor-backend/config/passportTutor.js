const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Tutor = mongoose.model("tutors");
const keys = require("../config/keys");

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport_tutor) => {
  passport_tutor.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Tutor.findById(jwt_payload.id)
        .then((tutor) => {
          if (tutor) {
            return done(null, tutor);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
