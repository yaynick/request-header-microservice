/* jshint node: true */
"use strict";

var path = process.cwd();

module.exports = function (app) {

	app.route('/')
		.get(function (req, res) {
			
			var ip = req.ip;
			var userAgent = req.headers['user-agent'];
			var language = req.headers['accept-language'].split(',')[0];

			var result = {
				ipaddress:  ip,
				language: language,
				software: userAgent
			};
			res.send(result);
		});

	


};