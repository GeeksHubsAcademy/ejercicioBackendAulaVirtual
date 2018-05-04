'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name:{
		type:String,
		required: 'The user name is required'
	},
	address:{
		type:String,
		required:'The user address is required'
	},
	email:{
		type:String,
		required:'The user email is required'
	}
});

module.exports = mongoose.model('User',UserSchema)