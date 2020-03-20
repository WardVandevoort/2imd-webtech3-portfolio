const getAll = (req, res) => {
    res.json({
      "message": "Getting your messages good sir",
    });
}

module.exports.getAll = getAll;