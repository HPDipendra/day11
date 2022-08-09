import { Router } from "express"
import BookController from "../controller/bookController";
// import validateToken from "../middlewares/tokenValidate";

const router = Router();

const bookController = new BookController();

router.post("/add", bookController.add)
router.get("/find/:id", bookController.getByID)
router.put("edit/:id", bookController.edit)
router.delete("delete/:id", bookController.delete)
router.get("/getAll", bookController.getAll)
// router.get("/getAll",validateToken,bookController.getAll)



export default router;

