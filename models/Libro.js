import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Libro extends Model {}

Libro.init(
	{
		titulo: {
			type: DT.STRING(50),
			allowNull: false,
		},
		descripcion: {
			type: DT.STRING(150),
			allowNull: false,
		},
		genero: {
			type: DT.STRING(50),
			allowNull: false,
		},
		autor: {
			type: DT.STRING(50),
			allowNull: false,
		},
		imagen: {
			type: DT.STRING(5000),
			
		},
		
	},
	{
		sequelize: connection,
		modelName: "Libro",
	}
);

export default Libro;
