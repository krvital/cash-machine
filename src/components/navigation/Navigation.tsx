import React from 'react';
import { Link, useLocation } from 'wouter';
import './Navigation.css';

enum Page {
  main = '/',
  withdraw = '/withdraw',
  settings = '/settings'
}

export default function Navigation() {
  const [location] = useLocation();

  return (
    <div className="navigation">
      {location !== Page.main && (
        <Link href={Page.main}>
          <a className="button navigation__link">Back</a>
        </Link>
      )}

      {location !== Page.withdraw && (
        <Link href={Page.withdraw}>
          <a className="button navigation__link">Withdraw</a>
        </Link>
      )}

      {location !== Page.settings && (
        <Link href={Page.settings}>
          <a className="button navigation__link">Settings</a>
        </Link>
      )}
    </div>
  );
}
