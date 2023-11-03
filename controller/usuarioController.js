 import { Usuario } from "../models/relaciones.js";

class UsuarioController {
	constructor() {}
	getAllUsuarios = (req, res) => {
		res.send("Usuarios");
	};
	getUsuarioById = async (req, res) => {
		try {
			const { id } = req.params;
			const user = await Usuario.findOne({
				where: { id },
				attributes: ["id", "nombre"],
            });

			if (!user) throw new Error("no hay User");

			res.status(200).send({
				success: true,
				message: "Usuario encontrado",
				data: user,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	createUser = async (req, res) => {
		try {
			const { nombre, password, mail,telefono } = req.body;
			const user = await Usuario.create({ nombre, password, mail, telefono });
			res.status(200).send({
				success: true,
				message: "Usuario creado con exito",
				data: user,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	updateUser = (req, res) => {
		res.send("Usuario actualizado");
	};
	deleteUser = (req, res) => {
		res.send("Usuario eliminado");
	};
}

export default UsuarioController;
