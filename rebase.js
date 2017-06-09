#!/usr/env/bin node

var path = require("path");
var fs = require("fs");
const rebase = require("./index");

function isEnglish(record) {
	return (
		(record.platformID === 3 && record.encodingID === 1 && record.languageID === 1033) ||
		(record.platformID === 1 && record.encodingID === 0 && record.languageID === 0)
	);
}

var glyfsource = "";
process.stdin.resume();
process.stdin.on("data", function(buf) {
	glyfsource += buf.toString();
});
process.stdin.on("end", function() {
	var font = JSON.parse(glyfsource.trim());
	rebase(font, process.argv[2] - 0 || 1);
	process.stdout.write(JSON.stringify(font));
});
