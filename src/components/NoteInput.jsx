import React, { useState } from "react";

function NoteInput(props) {
  const [noteInputes, setInputs] = useState({
    title: "",
    content: ""
  });

  function handleNoteInput(event) {
    const { name, value } = event.target;

    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function noteAdd(event) {
    props.onClick(noteInputes);
    setInputs({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="note-input-container">
      <div className="note-input">
        <h1>Add your note</h1>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Note heading"
            onChange={handleNoteInput}
            value={noteInputes.title}
          />

          <input
            type="text"
            name="content"
            className="details"
            placeholder="Details of note"
            onChange={handleNoteInput}
            value={noteInputes.content}
          />

          <button onClick={noteAdd}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default NoteInput;
