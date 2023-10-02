import Jwt from "jsonwebtoken";

export default function verificarJWT(req, res, next) {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(401).json({
      auth: false,
      message: "Nao autorizado!",
    });

  Jwt.verify(token.split(" ")[1], process.env.SECRET, function (err, decoded) {
    if (err)
      return res.status(500).json({
        auth: false,
        message: "Falha da autenticação do Token",
      });

    next();
  });
}
