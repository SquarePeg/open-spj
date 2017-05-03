var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var CandidateSchema = new Scheme({
    dateReferred: Date,
    dateApplied: Date,
    candidateFirstName: String,
    candidateLastName: String,
    candidateEmail: String,
    memberName: String,
    memberEmail: String,
    dateApplied: Date,
    overallScore: Number,
    cultureScore: Number,
    skillsScore: Number,
    personalityScore: Number,
    memberMatch: {
        culture: [{ label: String, rank: Number, score: Number }],
        skills: [{ label: String, rank: Number, score: Number }],
        personality: [{ label: String, rank: Number, score: Number }]
    },
    candidateMatch: {
        culture: [{ label: String, rank: Number, score: Number }],
        skills: [{ label: String, rank: Number, score: Number }],
        personality: [{ label: String, rank: Number, score: Number }]
    },
    candidateResponse: String,
    resume: String,
    urls: [{ label: String, url: String }],
    salaryMin: Number,
    salaryMax: Number,
    status: String,
    hidden: Boolean,
    reviewed: Boolean,
    declined: Boolean,
    hired: Boolean
});

var JobSchema = new Schema({
    datePosted: Date,
    jobTitle: String,
    jobDescription: String,
    salaryMin: Number,
    salaryMax: Number,
    bonus: Number,
    culture: [{ label: String, rank: Number }],
    skills: [{ label: String, rank: Number }],
    personality: [{ label: String, rank: Number }],
    candidates: [ CandidateSchema ],
    status: String,
    cancelReason: String
});



// method to calculate the company culture score
JobSchema.methods.calculateCulture = function (companyCulture, memberCulture, candidateCulture) {

    var cultureScore = 0;
    
    // loop thru company culture
    var len = companyCulture.length();
    for(var i = 0; i < len; i++){
        var obj = companyCulture[i];
        /*
        if( obj. ){
            
        }
        cultureScore = cultureScore + (10 - abs())
        */
    }

				/*
				if( String( userObj.user ) != "company" )
				{	
					var val1:int = getCompanyValue( Number( userObj.id ) );
					var val2:int = Number( userObj.val );
					_matchScore = _matchScore + ( MAX_TOTAL - Math.abs(val1 - val2) );
				}
			*/
    
    // add together member and candidate ranks to create combined ranks
    // average combined ranks
    // add combined ranks to company ranks to create culture total
    // average company and combined ranks
    
    
    return cultureScore;
};


// return the model
module.exports = mongoose.model('JobModel', JobSchema);