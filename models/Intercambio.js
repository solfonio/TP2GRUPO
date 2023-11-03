import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";


class Intercambio extends Model {}

Intercambio.init(
	{
		miLibro: {
			type: DT.STRING,
			allowNull: false,
		},
		suLibro: {
			type: DT.STRING,
			allowNull: false,
		},
		usuarioIntercambiado: {
			type: DT.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: connection,
		modelName: "Intercambio",
	}
);

export default Intercambio;
