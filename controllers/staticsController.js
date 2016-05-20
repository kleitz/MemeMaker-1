var memes = require("../data/memes");


function home(req, res) {
  res.render("home", { memes: memes });
}



module.exports = {
     home: home
};
