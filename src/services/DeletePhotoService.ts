import { AppDataSource } from "../data-source";
import { Photo } from "../entity/photoEntity";

export class Delete{

    async executar(id: number){
        const repository = AppDataSource.getRepository(Photo)

        let photo = await repository.findOneBy({id: id});

        if(photo === null){
            return new Error ("id não existe")
        }

        return repository.remove(photo);

    }
}