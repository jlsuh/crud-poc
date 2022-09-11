import React, { Fragment } from 'react';

export default function Bar() {
  return (
    <Fragment>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <a href='/' className='navbar-brand'>
              CRUD Proof of Concept
            </a>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}