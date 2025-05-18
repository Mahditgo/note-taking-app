import Note from "../model/noteModel";


//create Note
export const createNote = async ( data : {title : string, content : string}) => {
    return await Note.create(data);
};

//gat all notes
export const getNotes = async () => {
    return await Note.findAll();
};

//get single note by id
export const getNoteById = async (id: number) => {
    const note = await Note.findByPk(id);
    if(!note) {
        const error = new Error('There is no note with that id') as any;
        error.status = 404;
        throw error
    }
    return note;
};

//update note
export const updateNote = async (id : number, data : {title ?: string, content ?: string}) => {
    const note = await Note.findByPk(id);
    if(!note) {
        const error = new Error('There is no note with that Id') as any;
        error.status = 404;
        throw error;
    }

    await note.update(data);
    return note;
};

//delete note
export const deleteNote = async (id : number) => {
     const note = await Note.findByPk(id);
    if(!note) {
        const error = new Error('There is no note with that Id') as any;
        error.status = 404;
        throw error;
    }

    await note.destroy();
    
}