import { AppDataSource } from "../../data-source";
import { Photo } from "../entity/photoEntity";

export class getAll{

    private repository = AppDataSource.getRepository(Photo)

    async executar(){
        const Get = this.repository.find()
        return Get
    }
}