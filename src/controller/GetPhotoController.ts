import { Request, Response } from "express";
import { getAll } from "../services/GetPhotoService";

export class getPhotoController{

    async all (req: Request, res: Response){

        const Get = new getAll()
        const photo = await Get.executar()

        return res.status(200).json(photo)
    }
}
