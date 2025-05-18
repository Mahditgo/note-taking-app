import { Router } from "express";
import * as noteController from "./../controllers/noteController";

const router = Router();

router.post('/', noteController.createNote);
router.get('/', noteController.getNotes);
router.get('/:id', noteController.getNote);
router.put('/:id', noteController.updateUser);
router.delete('/:id', noteController.deleteNote);

export default router;