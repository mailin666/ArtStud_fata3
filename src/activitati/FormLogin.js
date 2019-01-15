import React, { Component } from 'react';
import axios from 'axios'

const SERVER='https://art-stud2-maria400.c9users.io'

class FormLogin extends Component {
 constructor(props) {
    super(props);
    this.state = { 
        utilizatori:[]
    };
}
  componentDidMount() {
    axios.get(SERVER + '/utilizatori').then((result) => {
        this.setState({utilizatori: result.data.results})
        })
  }
  
 
  render() {
    return (
     <div>
     <h3>UTILZATORI</h3>
   
     </div>
    )  }} 
export default FormLogin;