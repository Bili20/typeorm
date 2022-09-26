import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo } from "./photos/entity/photoEntity"


export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    entities: [Photo],
    
})
