'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name:{
		type:String
		//required:'El nombre de usuario es requerido'
	},
	lastname:{
		type:String
	},
	country:{
		type:String
	},
	city:{
		type:String
	},	
	postalCode:{
		type:String
	},
	address:{
		type:String
	},
	phone:{
		type:Number
	},
	email:{
		type:String
	},
	user:{
		type:String
	},
	password:{
		type:String
	},
	active:{
		type:Boolean
	}

});

module.exports = mongoose.model('User',UserSchema)