const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("Autorizado");

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token inválido" });
  }
};

module.exports = { authenticate };
