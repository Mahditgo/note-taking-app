import { Request, Response } from "express";
import * as noteService from './../services/noteService';
import { asyncHandler } from "../utils/asyncHandler";
import { createNoteSchema, updateNoteSchema } from "../validation/noteSchema";


//create note
export const createNote = asyncHandler(async (req: Request, res: Response) => {
  const parsed = createNoteSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.format() });
  }

  const user = await noteService.createNote(parsed.data);
  res.status(201).json(user);
});

//get all notes
export const getNotes = asyncHandler(async (req: Request, res: Response) => {
  const note = await noteService.getNotes();
  res.json(note);
});

//get single note
export const getNote = asyncHandler(async (req: Request, res: Response) => {
  const note = await noteService.getNoteById(Number(req.params.id));
  res.json(note);
});

//update note
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const parsed = updateNoteSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.format() });
  }

  const user = await noteService.updateNote(Number(req.params.id), parsed.data);
  res.json(user);
});

//delet note
export const deleteNote = asyncHandler(async (req: Request, res: Response) => {
  await noteService.deleteNote(Number(req.params.id));
  res.status(204).send();
});