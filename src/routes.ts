import { Router} from "express";
import { DeleteController } from "./controller/DeletePhotoController";
import { getPhotoController } from "./controller/GetPhotoController";
import { PostPhotoController } from "./controller/PostPhotoController";

const router = Router()


router.get('/photos', new getPhotoController().all)
router.post('/photos', new PostPhotoController().save)
router.delete('/photos/:id', new DeleteController().del)
export {router}
