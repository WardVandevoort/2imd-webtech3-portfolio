var express = require('express');
var router = express.Router();
const messagesController = require("../controllers/api/v1/messages");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get("/api/v1/messages", messagesController.getAll)

router.get("/api/v1/messages/:id", messagesController.getOne)

router.get("/api/v1/messages?user=username", messagesController.getName)

router.post("/api/v1/messages", messagesController.postOne)

router.put("/api/v1/messages/:id", messagesController.putOne)

router.delete("/api/v1/messages/:id", messagesController.deleteOne)

module.exports = router;
