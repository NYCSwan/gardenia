import React, { Component } from 'react';
import { database } from '../core/firebase';
import PropTypes from 'prop-types';

function Note() {
  const { noteSamples } = this.props;

  return (
    <div className="note-info media-body">
      <div className="note-body">
        <h4>Note Title</h4>
        <p>note body</p>
        <p>date</p>
        <p>garden</p>
      </div>
    </div>
  );
}

const noteSamples = [
  {
    title: 'Sample1',
    body: 'Body of sample 1',
    date: new Date().toLocaleTimeString(),
    garden: 'garden 1 id here'
  },
  {
    title: 'Sample2',
    body: 'Body of sample 2',
    date: new Date().toLocaleTimeString(),
    garden: 'garden 2 id here'
  }
];

export default Note;
