import { Router } from "express"
import UsersController from "../controller/userController";
const router = Router();

const userController = new UsersController();


router.post("/signup", userController.add);
router.post("/signin", userController.get);
// router.get("/list",validateToken,userController.get)

export default router;