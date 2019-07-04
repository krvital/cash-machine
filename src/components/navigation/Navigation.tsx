import React from 'react';
import { Link, useLocation } from 'wouter';
import { Pages } from '../../models';
import './Navigation.css';

export default function Navigation() {
  const [location] = useLocation();

  return (
    <div className="navigation">
      {location !== Pages.main && (
        <Link href={Pages.main}>
          <a className="button navigation__link">Back</a>
        </Link>
      )}

      {location !== Pages.withdraw && (
        <Link href={Pages.withdraw}>
          <a className="button navigation__link">Withdraw</a>
        </Link>
      )}

      {location !== Pages.settings && (
        <Link href={Pages.settings}>
          <a className="button navigation__link">Settings</a>
        </Link>
      )}
    </div>
  );
}
