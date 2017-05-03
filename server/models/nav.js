var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NavSchema = new Schema({
    role: { type: String, required: false },
    logoText: { type: String, required: false },
    links: { 
        label: { type: String, required: false },
        url: { type: String, required: false },
        target: { type: String, required: false },
        icon: { type: String, required: false }
    }    
});

// return the model
module.exports = mongoose.model('Nav', NavSchema, 'nav');