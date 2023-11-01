import Libro from "./Libro.js"
import Usuario from "./Usuario.js"
import Intercambio from "./Intercambio.js"


Usuario.hasMany(Libro,{
    foreignKey:"usuarioId"
})

Libro.belongsTo(Usuario, {
	foreignKey: "usuarioId",
});

Usuario.hasMany(Intercambio,{
    foreignKey:"usuarioId"
})

Intercambio.belongsTo(Usuario, {
	foreignKey: "usuarioId",
});

Intercambio.hasMany(Libro,{
    foreignKey:"intercambioId"
})


export {Libro,Usuario,Intercambio}