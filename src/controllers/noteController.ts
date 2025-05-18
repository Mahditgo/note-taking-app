import { Request, Response } from "express";
import * as noteService from './../services/noteService';
import { asyncHandler } from "../utils/asyncHandler";


//create note
export const createNote = asyncHandler(async (req: Request, res: Response) => {
  const note = await noteService.createNote(req.body);
  res.status(201).json(note);
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
  const updatedNote = await noteService.updateNote(Number(req.params.id), req.body);
  res.json(updatedNote);
});

//delet note
export const deleteNote = asyncHandler(async (req: Request, res: Response) => {
  await noteService.deleteNote(Number(req.params.id));
  res.status(204).send();
});