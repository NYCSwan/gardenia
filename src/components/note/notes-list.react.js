import React from 'react';

import Note from './Note.react';

function NotesList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map(note => {
        return <Note key={note.title} className="notes-item" />;
      })}
    </div>
  );
}

export default NotesList;
