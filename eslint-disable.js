var path = require("path");
var fs = require("fs");

var pathDefault = "dist";
var jsFilesName = ["react-summernote"];

jsFilesName.forEach(function (file) {
  try {
    var contents = fs.readFileSync(
      path.join(__dirname, pathDefault, file + ".js"),
      "utf8"
    ); // copy contents file into a variable
    fs.writeFileSync(
      path.join(__dirname, pathDefault, file + ".js"),
      "/* eslint-disable */\r\n" + contents
    ); // rewrite content file with the concatenation of comments and contents
    console.log("   - " + file + " => Done");
  } catch (err) {
    console.log("   - " + file + " => KO");
    if (err) throw err;
  }
});
