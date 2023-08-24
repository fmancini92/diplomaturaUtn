import Cc_SvaModel from "../models/Cc_SvaModel.js";
import { ClientesModel } from "../models/ClientesModel.js";


Cc_SvaModel.belongsTo(ClientesModel, { foreignKey: 'codcliente', targetKey: 'id' });

export const getAllCuentas = async (req, res) => {
    try {
        const cuentas = await Cc_SvaModel.findAll({
            include:[
                {
                    model : ClientesModel ,
                    attributes : ['nombre']
                },
            ],
        })
        res.json(cuentas)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

export const getCuenta = async (req, res) => {
    try {
        const cuenta = await Cc_SvaModel.findAll({
            where: {id: req.params.id}
        })
        res.json(cuenta[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createCuenta = async (req, res) => {
    try {
        await Cc_SvaModel.create(req.body)
        res.json({"message": "!Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateCuenta = async (req, res) =>{
    try {
        await Cc_SvaModel.update (req.body, 
            {where: {id: req.params.id}})
        res.json({"message": "!Registro actualizado correctamente"})
    } catch (error) {
        res.json({message: error.message}) 
    }
}

export const deleteCuenta = async (req, res) =>{
    try {
        await Cc_SvaModel.destroy ({
            where: {id: req.params.id}})
            res.json({"message":"!Registro eliminado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

