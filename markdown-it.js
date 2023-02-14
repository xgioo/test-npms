// node.js, "classic" way:
var MarkdownIt = require("markdown-it"),
  md = new MarkdownIt({ html: true });
var result = md.render(
  "People **tend to amass possessions**, sometimes without being **aware of** doing so. Indeed they can **have a delightful surprise** when they find something useful which they did not know they owned. Those who never have to move house become **indiscriminate** collectors of **what can only be described as clutter**. They leave unwanted objects in drawers, cupboards and attics for years, **in the belief that** they may one day need just those very things. As they grow old, people also **accumulate** belongings for two other reasons, **lack of** physical and **mental energy**, both of which are **essential** **in turning out** and throwing away, and **sentiment**. Things owned for **a long time** are full of **associations** with the past, perhaps with **relatives** who are dead, and so they **gradually** acquire a value <u>beyond their true worth</u>."
);
// console.log(result);

// node.js, the same, but with sugar:
var md = require("markdown-it")({ html: true });
var result = md.render(
  "People **tend to amass possessions**, sometimes without being **aware of** doing so. Indeed they can **have a delightful surprise** when they find something useful which they did not know they owned. Those who never have to move house become **indiscriminate** collectors of **what can only be described as clutter**. They leave unwanted objects in drawers, cupboards and attics for years, **in the belief that** they may one day need just those very things. As they grow old, people also **accumulate** belongings for two other reasons, **lack of** physical and **mental energy**, both of which are **essential** **in turning out** and throwing away, and **sentiment**. Things owned for **a long time** are full of **associations** with the past, perhaps with **relatives** who are dead, and so they **gradually** acquire a value <u>beyond their true worth</u>."
);
console.log(result);
