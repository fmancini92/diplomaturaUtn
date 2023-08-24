import { ClientesModel } from "../models/ClientesModel.js";


export const getClientes = async (req, res) =>{
    try {
        const clientes = await ClientesModel.findAll({
            attributes: ['id', 'nombre'],
            order: [['nombre', 'ASC']]
        });
        res.json(clientes)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

export const getCliente = async (req, res) => {
    try {
        const cuenta = await ClientesModel.findAll({
            where: {id: req.params.id}
        })
        res.json(clientes[0])
    } catch (error) {
        res.json({message: error.message})
    }
}