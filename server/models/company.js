var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');



var CompanySchema = new Schema({
    companyName: { type: String, required: true },
    billingInformation: {
        ccNumber: { type: Number },
        ccExpMonth: { type: Number },
        ccExpYear: { type: Number },
        ccCode: { type: Number },
        address1: { type: String },
        address2: { type: String },
        city: { type: String },
        state: { type: String },
        billingZip: { type: Number },
        billingPhone: { type: String }
    }
});

CompanySchema.pre('save', function (next) {
    var company = this;
    
    var len = company.users.length();
    for(var i = 0; i <= len; i++){
        var obj company.users[i];
        // hash the password only if the password has been change or member is new
        if (!obj.isModified('password')) return next();

        // generate the hash
        bcrypt.hash(obj.password, null, null, function (err, hash) {
            if (err) return next(err);
            // change the password to the hashed version
            obj.password = hash;
            next();
        });
    }

});


// return the model
module.exports = mongoose.model('CompanyModel', CompanySchema);