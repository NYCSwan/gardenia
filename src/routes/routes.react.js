import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './components/home/HomePage.react';
import Journal from './components/journal/Journal.react';
import Note from './components/note/Note.react';

export default (
  <Route path="/" component={HomePage}>
    {/*  <Route path='journal' component={Journal} /> */}
    <Route path="note" component={Note} />
  </Route>
);
