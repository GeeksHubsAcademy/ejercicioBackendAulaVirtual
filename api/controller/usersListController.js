'use strict';

var mongoose = require('mongoose');
	User = mongoose.model('User');

exports.list_all_users = function(req, res){
	User.find({}, function(err, user){
		if(err)
			res.send(err);
		res.json(user);
	});
};

exports.create_a_user = function(req,res){
	var new_user = new User(req.body);
	new_user.save(function(err, user){
		if(err)
			res.send(err);
		res.json(user);
	});
};

exports.get_a_user = function(req, res){
	User.findById(req.params.userId, function(err, user) {
		if(err)
			res.send(err);
		res.json(user)
	})
}

exports.update_a_user = function(req, res) {
	User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
		if (err)
			res.send(err);
		res.json(user);
	});
}

exports.delete_a_user = function(req, res){
	User.remove({
		_id: req.params.userId
	},function(err,user){
		if(err)
			res.send(err);
		res.json({message:'Usuario eliminado correctamente'});
	});
};

exports.assing_session = function(req,res){
	User.update({
		_id: req.params.userId
	},{
		$push:{sessions:session}
	})
}
