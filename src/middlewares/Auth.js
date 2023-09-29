import Jwt from "jsonwebtoken";

export default function verificarJWT(req, res, next) {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(401).json({
      auth: false,
      message: "Não autorizado!",
    });

  Jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res.status(500).json({
        auth: false,
        message: "Falha da autenticação do Token",
      });

      next()
  });

}