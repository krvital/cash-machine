import React, { SetStateAction, useState } from 'react';
import { AvailableNotes } from '../../models';
import { formValues, validateNotesString, convertNotes } from '../../utils';
import './Settings.css';

interface ISettingsForm {
  notes: string;
}

interface IProps {
  setNotes: React.Dispatch<SetStateAction<AvailableNotes>>;
  availableNotes: AvailableNotes;
}

export default function Settings({ setNotes, availableNotes }: IProps) {
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const values = formValues<ISettingsForm>(e.target);

    const error = validateNotesString(values.notes);
    if (error) {
      setError(error);
      return;
    }

    setNotes(convertNotes(values.notes));
  };

  return (
    <div className="settings">
      <form onSubmit={handleSubmit} className="form">
        <div className="form__row">
          <label htmlFor="notes">Notes:</label>
          <br />
          <input type="text" className="input" name="notes" defaultValue={availableNotes.join(' ')} />

          {error && <div className="form__error">{error}</div>}
        </div>

        <div className="form__row">
          <button className="button">Save</button>
        </div>
      </form>
    </div>
  );
}
