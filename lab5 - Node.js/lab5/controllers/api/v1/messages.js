const getAll = (req, res) => {
    res.json({
      "message": "Getting your messages good sir",
    });
}

const getOne = (req, res) => {
    res.json({
      "message": "Getting message with id " + req.params.id + " for you sir",
    });
}

const postOne = (req, res) => {
    res.json({
      "message": req.body.name + " is posting a message sir",
    });
}

const getName = (req, res) => {
    res.json({
      "message": "Getting your messages sir " + req.params.get(username),
    });
}

const putOne = (req, res) => {
    res.json({
      "message": "Updating message with id " + req.params.id + " for you sir",
    });
}

const deleteOne = (req, res) => {
    res.json({
      "message": "Deleting message " + req.params.id + " for you sir",
    });
}

module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.postOne = postOne;
module.exports.getName = getName;
module.exports.putOne = putOne;
module.exports.deleteOne = deleteOne;