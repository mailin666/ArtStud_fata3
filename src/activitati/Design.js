import React, { Component } from 'react';
import FormLogin from './activitati/FormLogin'
import CreazaCont from './activitati/CreazaCont'

class Design extends Component {
  render() {
    return (
      <div>
      <h1 id="titluAutentificare">Bine ai venit</h1>
      <FormLogin/>
      <CreazaCont/>
      </div>
    );
  }
}
export default Design;
