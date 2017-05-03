var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    recoveryEmail: { type: String, required: false },
    recoveryPhone: { type: String, required: false },
    role: { type: String, required: true },
    enabled: { type: Boolean, required: false }
});

UserSchema.pre('save', function (next) {
    var user = this;
    // hash the password only if the password has been change or member is new
    if (!user.isModified('password')) return next();

    // generate the hash
    bcrypt.hash(user.password, null, null, function (err, hash) {
        if (err) return next(err);
        // change the password to the hashed version
        user.password = hash;
        next();
    });
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function (password) {
    var user = this;
    return bcrypt.compareSync(password, user.password);
};

// return the model
module.exports = mongoose.model('User', UserSchema);