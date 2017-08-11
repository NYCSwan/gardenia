import React from 'react';
import map from 'lodash/map';

import Note from './Note.react';

function NotesList({ notes }) {
  return (
    <div className="notes-list">
      {/*notes.map(note => {
        return <Note key={note.body} className="notes-item" />;
      })*/}
    </div>
  );
}

export default NotesList;
