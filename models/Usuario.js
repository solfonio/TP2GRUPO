import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Usuario extends Model {}

Usuario.init(
	{
		nombre: {
			type: DT.STRING(50),
			allowNull: false,
		},
		password: {
			type: DT.STRING(50),
			allowNull: false,
            
		},
		mail: {
			type: DT.STRING(50),
			allowNull: false,
			validate: {
				isEmail: true,
			},
		},
		telefono: {
			type: DT.NUMBER,
			allowNull: false,
			validate: {
				isInt: true,
				max: 10,
			},
		},
		libros: {
			type: DT.ARRAY,
			allowNull: true,
		},
		librosQueridos: {
			type: DT.ARRAY,
			allowNull: true,
		},
		librosQueQuieren: {
			type: DT.ARRAY,
			allowNull: true,
		},
		intercambios: {
			type: DT.ARRAY,
			allowNull: true,
		},
	},
	{
		sequelize: connection,
		modelName: "Usuario",
	}
);

export default Usuario;
