import { AppDataSource } from "../data-source";
import { Photo } from "../entity/photoEntity";

type IUPhoto = {
    name: string
    description?: string
    filename: string
    views?: number
    isPublished?: boolean
}

export class postPhoto{

    async executar({ name, description, filename, views, isPublished}: IUPhoto): Promise<Photo | Error>  {
        const repository = AppDataSource.getRepository(Photo)

        const Post = repository.create({
            name,
            description,
            filename,
            views,
            isPublished
        })
        await repository.save(Post)

        return Post
    }
}