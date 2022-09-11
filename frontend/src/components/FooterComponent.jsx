import React, { Component } from 'react';

class FooterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <footer className='footer'>
          <span className='text-muted'>&copy; CRUD Proof of Concept</span>
        </footer>
      </div>
    );
  }
}


export default FooterComponent;