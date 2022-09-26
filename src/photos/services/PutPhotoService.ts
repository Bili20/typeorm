import { AppDataSource } from "../../data-source";
import { Photo } from "../entity/photoEntity";

type interPhoto = {
    id: number
    name:string 
    description: string 
    filename: string
}

export class Put {
    async executar({id, name, description,filename}: interPhoto){
        const repository = AppDataSource.getRepository(Photo)

        const data = await repository.findOneBy({id: id})

        if(!data){
            return new Error('id não encontrado')
        }

        data.name = name
        data.filename = filename
        data.description = description

        return repository.save(data)
    }
}