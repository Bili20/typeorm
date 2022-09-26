import { Request, Response } from "express";
import { postPhoto } from "../services/PostPhotoService";

export class PostPhotoController{
    async save ( req:Request, res:Response){
        const {name, description, filename, views, isPublished} = req.body

        const post = new postPhoto()

        const result = await post.executar({ name, description, filename, views, isPublished})

        if(name.length === 0 || filename.length === 0){
            return res.status(400).json("Campos name e filname Obrigatorios!!")
        }

        return res.status(201).json(result)
    }
}