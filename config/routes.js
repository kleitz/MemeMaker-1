var express = require("express");
var router  = express.Router();

var staticsController = require("../controllers/staticsController");
var memesController   = require("../controllers/memesController");


router.route("/").get(staticsController.home);


router.route("/friends").get(memesController.memesIndex).post(memesController.memesCreate);

router.route("/memes").get(memesController.memesIndex);


router.route("/newmeme").get(memesController.memeNew);


router.route("/memes/new")
  .get(memesController.memesNew);

router.route("/memes/:id")
  .get(memesController.memesShow)
  .put(memesController.memesUpdate)
  .delete(memesController.memesDelete);

  router.route("/tag/:id") // I dont think this will work, google how TAGS JS Node works.(see the controller also)
    .get(memesController.memesShowTag)

router.route("/memes/:id/edit")
  .get(memesController.memesEdit);

module.exports = router;
