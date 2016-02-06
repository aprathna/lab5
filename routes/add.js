var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes heexports.addFriend = function(req, res) {

	var newFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/400/400"
	}
	console.log(newFriend);
	res.render('add', newFriend);
	data["friends"].push(newFriend);
 }