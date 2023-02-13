// node.js, "classic" way:
var MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();
var result = md.render("# markdown-it rulezz!");
console.log(result);

// node.js, the same, but with sugar:
var md = require("markdown-it")();
var result = md.render("# markdown-it rulezz!");
console.log(result);
