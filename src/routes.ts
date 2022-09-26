import { Router} from "express";
import { DeleteController } from "./photos/controller/DeletePhotoController";
import { getPhotoController } from "./photos/controller/GetPhotoController";
import { PostPhotoController } from "./photos/controller/PostPhotoController";

const router = Router()


router.get('/photos', new getPhotoController().all)
router.post('/photos', new PostPhotoController().save)
router.delete('/photos/:id', new DeleteController().del)
export {router}
