import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";


class Intercambio extends Model {}

Intercambio.init(
	{
		miLibro: {
			type: Libro,
			allowNull: false,
		},
		suLibro: {
			type: Libro,
			allowNull: false,
		},
		usuarioIntercambiado: {
			type: Usuario,
			allowNull: false,
		},
	},
	{
		sequelize: connection,
		modelName: "Intercambio",
	}
);

export default Intercambio;
