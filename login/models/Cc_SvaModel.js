import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Cc_SvaModel = db.define('cc_sva', {
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    codcliente: { type: DataTypes.NUMBER },
    num_rem: { type: DataTypes.NUMBER },
    total_rem: { type: DataTypes.FLOAT },
    zona: { type: DataTypes.NUMBER },
    saldo: { type: DataTypes.FLOAT },
    anulado: { type: DataTypes.NUMBER }
}, { freezeTableName: true })

export default Cc_SvaModel