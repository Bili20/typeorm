import { Request, Response } from "express";
import { Delete } from "../services/DeletePhotoService";

export class DeleteController{

    async del (req: Request, res: Response){
        const { id } = req.params

        const service = new Delete()

        const result = await service.executar(parseInt(id));

        if(result instanceof Error){
            return res.status(404).json(result.message)
        }

        return res.status(204).end()
    }
}