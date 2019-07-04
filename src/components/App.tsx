import React, { useState } from 'react';
import { Route } from 'wouter';
import Withdraw from './withdraw/Withdraw';
import Settings from './settings/Settings';
import Navigation from './navigation/Navigation';

import { AvailableNotes, Pages } from '../models';
import './App.css';

export default function App() {
  const [notes, setNotes] = useState<AvailableNotes>([100, 50, 10]);

  return (
    <div className="app">
      <Route path={Pages.withdraw} component={() => <Withdraw availableNotes={notes} />} />
      <Route path={Pages.settings} component={() => <Settings availableNotes={notes} setNotes={setNotes} />} />
      <Navigation />
    </div>
  );
}
