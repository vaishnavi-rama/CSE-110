import React from 'react';
import './App.css';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants";
import { useState, useEffect } from 'react';
import { ThemeContext, themes } from "./themeContext";
import ToggleTheme from './hooksExercise';


export const StickyNotes = () => {
  const [notes, setNotes] = useState(dummyNotesList);
  const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
    favorite: false
  };
  const [createNote, setCreateNote] = useState(initialNote);

  const createNoteHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("title: ", createNote.title);
    console.log("content: ", createNote.content);
    createNote.id = notes.length + 1;
    setNotes([createNote, ...notes]);
    setCreateNote(initialNote);
  };

  const [editNote, setEditNote] = useState<Note>(initialNote);


  const editNoteHandler = (event: React.FormEvent) => {
    console.log("title: ", createNote.title);
    console.log("content: ", createNote.content);
    setNotes([editNote, ...notes]);
    setEditNote(initialNote);
  }

  let [likedNotes, setLikesNotes] = useState<Note[]>([]);

  const likedNoteHandler = (noteToLike: Note) => {
    console.log("title: ", noteToLike.title);
    console.log("content: ", noteToLike.content);
    // if its in list remove, if not add 
    // if (likedNotes.includes(noteToLike)) {
    //   likedNotes = likedNotes.filter(note => note != noteToLike);
    // }
    // else {
    //   likedNotes.push(noteToLike)
    // }
    //  console.log("likedNotes",likedNotes)
    const updatedNote: Note = noteToLike
    updatedNote.favorite = !noteToLike.favorite

    const updatedNoteList = notes.map((note) => 
    note.id === updatedNote.id ? updatedNote : note);
    setNotes(updatedNoteList)

  }

  const [deleteNote, setDeleteNote] = useState<Note>(initialNote);

  const deleteNoteHandler = (noteToDelete: Note) => {
    console.log("title: ", deleteNote.title);
    console.log("content: ", deleteNote.content);
    const updatedNotes = notes.filter(note => note != noteToDelete);
    setNotes(updatedNotes);
    setDeleteNote(initialNote);
  }


  useEffect(() => {
    setNotes(notes)
  }, [likedNotes]);


  const [currentTheme, setCurrentTheme] = useState(themes.light);
   
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
  };
    
  return (
    <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
    <div className='app-container'>
      <form className="note-form" onSubmit={createNoteHandler}>
        <div>
          <input
            placeholder="Note Title"
            onChange={(event) =>
              setCreateNote({ ...createNote, title: event.target.value })}
            required>
          </input>
        </div>

        <div>
          <textarea
            placeholder='Note Content'
            onChange={(event) =>
              setCreateNote({ ...createNote, content: event.target.value })}
            required>
          </textarea>
        </div>

        <div>
          <select
            onChange={(event) =>
              setCreateNote({ ...createNote, label: event.target.value as Label })}
            required>
            <option value={Label.personal}>Personal</option>
            <option value={Label.study}>Study</option>
            <option value={Label.work}>Work</option>
            <option value={Label.other}>Other</option>
          </select>
        </div>
        <div><button type="submit">Create Note</button></div>
      </form>
      {/* <div>{likedNotes.map((note) => (
        <div
          key={note.id}
        >
          <h1>List of favorites</h1>
          <h2> {note.title} </h2>
        </div>
      ))}</div> */}


      <div className="notes-grid">
        {notes.map((note: Note) => (
          <div 
            key={note.id}  
            className="note-item" data-testid = "notes-item" style = {{background: currentTheme.background}}
          >
            <div className="notes-header">
              {/* <button onClick={() => likedNoteHandler(note)}><CiHeart /></button> */}
              <button data-testid={`favorite-note-${note.id}`} onClick={() => likedNoteHandler(note)}>{note.favorite ? "❤️" : "🤍"}</button>
              {/* <button data-testid = "note-delete" onClick={() => deleteNoteHandler(note)}>x</button> */}
              <button data-testid={`remove-note-${note.id}`} onClick={() => deleteNoteHandler(note)}>x</button>
            </div>
            <h2 contentEditable="true" onChange={editNoteHandler} data-testid = "note-title"> {note.title} </h2>
            <p contentEditable="true" onChange={editNoteHandler} data-testid = "note-content">  {note.content} </p>
            <p contentEditable="true" onChange={editNoteHandler}> {note.label} </p>
          </div>
        ))}
      </div>
        {/* <div> */}
        
        {/* </div> */}
      <div>
        {/* {notes.map((note) => (note.favorite ? ))} */}
        <h3>List of favorites</h3>
        {notes.map((note)=> (note.favorite ? <div data-testid= 'favorite-title'>{note.title}</div> :  <div></div>))}
      </div>
      <div><ToggleTheme /></div>

    </div> </ThemeContext.Provider>);
}