function logging(req, res, next) {
  console.log("Received logging request:", `${req.baseUrl}${req.path}`, req.body);

  next();
}

module.exports = logging;
