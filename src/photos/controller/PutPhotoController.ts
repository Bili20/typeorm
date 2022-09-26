import { Request, Response } from "express";
import { Put } from "../services/PutPhotoService";


export class PutController{
    async up (req: Request, res: Response){
        const {id} = req.params
        const {name, description,filename} = req.body
        const service = new Put()
        
        const result = await service.executar({id,name, filename, description})

        return res.json(result)
    }
}