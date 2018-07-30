module.exports = {
  show(req, res) {
    delete req.user.Password;

    res.status(200).json(req.user);
  }
};
