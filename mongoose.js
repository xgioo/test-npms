const mongoose = require("mongoose");
let mongodbUrl =
  "mongodb+srv://969250758:pf91X9JoSQHzs5Kq@cluster0.rmj60us.mongodb.net/test";
// 账号：969250758@qq.com，登陆 https://account.mongodb.com/account/login 浏览器记住了密码
mongoose.connect(mongodbUrl);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
