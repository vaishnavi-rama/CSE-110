import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";



describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });

 test("all created notes are displayed on the page", () => {
    render(<StickyNotes/>);
    //const notesList = screen.getByTestId('note-id');
    //expect(notesList)
    let notesList = screen.getAllByTestId("notes-item");
    expect(notesList.length).toBe(6);
    
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea =
      screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");
 
    fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
    fireEvent.change(createNoteContentTextarea, {
      target: { value: "Note content" },
    });
    fireEvent.click(createNoteButton);

    notesList = screen.getAllByTestId("notes-item");
    expect(notesList.length).toBe(7);
 });

test("update a note and see if the changes are displayed", () => {
    render(<StickyNotes/>);
    let noteTitle = screen.getAllByTestId("note-title");
    
    expect(noteTitle[0].innerHTML).toBe(" test note 1 title ")
    
    noteTitle[0].innerHTML = '<h2 contenteditable="true" data-testid="note-title">title has been changed</h2>';
    
   
    expect(noteTitle[0].innerHTML).toBe('<h2 contenteditable="true" data-testid="note-title">title has been changed</h2>');

    let noteContent = screen.getAllByTestId("note-content");
    expect(noteContent[0].innerHTML).toBe("  test note 1 content ");
    noteContent[0].innerHTML = '<p contenteditable="true" data-testid="note-content">content has been changed</p>';
    
   
    expect(noteContent[0].innerHTML).toBe('<p contenteditable="true" data-testid="note-content">content has been changed</p>');

});

test("does note get filtered on delete", () => {
    // render(<StickyNotes/>);
    // let notesList = screen.getAllByTestId("notes-item");
    // expect(notesList.length).toBe(6);

    // const deleteNoteButton = screen.getAllByTestId("note-delete")[0];
 
    // fireEvent.click(deleteNoteButton);

    // expect(notesList.length).toBe(5);

    render(<StickyNotes />);

    expect(screen.getAllByTestId("notes-item")).toHaveLength(6);

    fireEvent.click(screen.getByTestId('remove-note-1'));
    expect(screen.getAllByTestId("notes-item")).toHaveLength(5);


});

test("the list of favorites is correctly updated when the button is clicked", () => {
  render(<StickyNotes />);

  const favorite = screen.getByTestId('favorite-note-2');
  expect(favorite.innerHTML).toBe("🤍");
  fireEvent.click(favorite);

  // favorite.innerHTML = '<h2 contenteditable="true" data-testid="note-title">title has been changed</h2>';
   
  expect(favorite.innerHTML).toBe("❤️");

  const favoriteTitle = screen.getAllByTestId('favorite-title')[0];

  expect(favoriteTitle.textContent).toEqual('test note 2 title');

  // fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
  // fireEvent.change(createNoteContentTextarea, {
  //   target: { value: "Note content" },
  // });
  // fireEvent.click(createNoteButton);


});

});

