const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getData = (req, res) => {
  const users = [];
  res.json({ data: "esto viene desde ruta", users });
};

exports.login = async (req, res) => {
  const data = req.body;
  // Logica de autentificacion
  const user = await prisma.user.findUnique({
    where: { username: data.username },
  });

  if (user && user.password === data.password) {
    switch (user.role) {
      case "DOCENTE":
        // Reriderccionar
        // res.json({ title: "ERES UN DOCENTE", user });
        res.redirect("./loginsignup/docente/docente.html");
        break;
      case "ESTUDIANTE":
        // Reriderccionar
        res.json({ title: "ERES UN ESTUDIANTE", user });
        break;
      default:
        res.json({ error: "Error en el usuario" });
        break;
    }
  }

  res.json({ error: "Usuario no encontrado" });
};

exports.signup = async (req, res) => {
  const data = req.body;

  if (data.username && data.password && data.role) {
    const user = await prisma.user.create({
      data: {
        username: data.username,
        password: data.password,
        role: data.role,
      },
    });
    res.json({ user });
  }
  res.json({ error: "Faltan datos" });
};
