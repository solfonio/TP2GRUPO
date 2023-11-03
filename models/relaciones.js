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

Intercambio.belongsToMany(Usuario, {
	foreignKey: "usuarioId",
});

 Intercambio.hasMany(Libro,{
     foreignKey:"intercambioId"
 })

 Libro.belongsTo(Intercambio,{
    foreignKey:"IntercambioId"
 })

export {Libro,Usuario,Intercambio}