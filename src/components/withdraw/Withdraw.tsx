import React, { useState } from 'react';
import { formValues, calculateMoney } from '../../utils';
import { AvailableNotes } from '../../models';
import './Withdraw.css';

interface IProps {
  availableNotes: AvailableNotes;
}

interface IWithdrawalForm {
  amount: string;
}

export default function Withdraw({ availableNotes }: IProps) {
  const [money, setMoney] = useState(null);
  const [error, setError] = useState('');

  const handleWithdrawSubmit = e => {
    e.preventDefault();

    const values = formValues<IWithdrawalForm>(e.target);
    const amount = Number(values.amount);

    if (Number.isNaN(amount)) {
      setError('Incorrect value');
      return;
    }

    const money = calculateMoney(Number(values.amount), availableNotes);

    if (!money) {
      setError(`Not possible to withdraw. Available notes: ${availableNotes.join(' ')}`);
      return;
    }

    setError('');
    setMoney(money);
  };

  return (
    <div className="withdraw">
      <form onSubmit={handleWithdrawSubmit} className="form">
        <div className="form__row">
          <label htmlFor="amount">Enter amount:</label>
          <br />
          <input type="text" name="amount" className="input" />

          {error && <div className="form__error">{error}</div>}
        </div>
        <div className="form__row">
          <button className="button">Withdraw</button>
        </div>
        {money && (
          <div className="form__row withdraw__result">
            <label>Take your money: </label>
            <br />
            <input type="text" value={money} className="input" disabled />
          </div>
        )}
      </form>
    </div>
  );
}
