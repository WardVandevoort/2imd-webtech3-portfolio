var express = require('express');
var router = express.Router();
const messagesController = require("../controllers/api/v1/messages");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get("/api/v1/messages", messagesController.getAll)

router.get("/api/v1/messages/:id", function(req, res){
  res.json({
    "message": "Getting message with id " + req.params.id + " for you sir",
  });
})

router.get("/api/v1/messages?user=username", function(req, res){
  res.json({
    "message": "Getting your messages sir " + req.params.get(username),
  });
})

router.post("/api/v1/messages", function(req, res){
  res.json({
    "message": req.body.name + " is posting a message sir",
  });
})

router.put("/api/v1/messages/:id", function(req, res){
  res.json({
    "message": "Updating message with id " + req.params.id + " for you sir",
  });
})

router.delete("/api/v1/messages/:id", function(req, res){
  res.json({
    "message": "Deleting message " + req.params.id + " for you sir",
  });
})

module.exports = router;
