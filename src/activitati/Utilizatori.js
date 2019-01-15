import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Row} from 'primereact/row';
import {ColumnGroup} from 'primereact/columngroup';
import "isomorphic-fetch";
import {OverlayPanel} from 'primereact/overlaypanel';
import $ from 'jquery';
import axios from 'axios';
const SERVER='https://art-stud2-maria400.c9users.io'

class Utilizatori extends Component{
  constructor(props) {
    super(props);
    this.state = {
                  items: [],
                  isLoaded: false,
                  nume:'anonim',
                  prenume:'',
                  vector:[],
                  username:'',
                  email:'',
                  parola:'',
                  descriere:'',
                  useri: [],
                 
                 utilizatori:[],
                 
    user: null
    
    }
    this.a=this.a.bind(this);
    this.b=this.b.bind(this);
    this.c=this.c.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
    postUser=(e)=>{
    e.preventDefault();
    let nume = $("#nume").val();
    let prenume = $("#prenume").val();
    let username= $("#username").val();
    let email = $("#a1").val();
    let pass = $("#a2").val();
    axios.post(SERVER+'/users',{
      nume:nume,
      prenume:prenume,
      numeUtilizator:username,    
      email: email,
      parola: pass
    }).then((response)=>{
      alert('Utilizator creat!');
      this.setState({user: response.data[0]});
       this.setState( {nume: nume});
       this.setState( {prenume: prenume});
       this.setState( {username: username});
       this.setState({email: email});
       this.setState({parola: pass});
   
 let user={nume:this.state.nume, prenume:this.state.prenume, numeUtilizator:this.state.username, email:this.state.email,parola:this.state.parola }
 console.log(user);
 
 let useri=this.state.useri;
 useri.push(user);
 this.setState({useri});
 console.log(this.state.useri);
   
    }).catch(function(err){
      console.log(err);
    });
    return false;
  }
  
  
 getUser=()=>{
    let email = $("#email").val();
    axios.get(SERVER+'/users/'+email).then((response)=>{
      if(email === response.data.email){
        this.setState({user: response.data});
        $("#loginBtn").text('Welcome '+email);
 
      }
      else alert('Email or password incorrect!');
    }).catch(function(err){
      console.log(err);
    });
    return false;
  }

  getUtilizatori=()=>{

      axios.get(SERVER+'/users')
      .then((response)=>{
        this.setState({utilizatori: response.data});
    var utilizatori=this.state.utilizatori;  
        utilizatori.forEach((elem)=>{
      let nume = elem.nume;
      let prenume = elem.prenume;
      let numeUtilizator=elem.numeUtilizator;
      let email=elem.email;
      let parola=elem.parola;
     let user={nume:nume, prenume:prenume, numeUtilizator:numeUtilizator, email:email,parola:parola };
     console.log(user);
 
     let useri=this.state.useri;
     useri.push(user);
     this.setState({useri});
     console.log(this.state.useri);
    });

      }).catch(function(err){
        console.log(err);
      });
    
    
  }
  


  handleChange(event) {
    this.setState({username: event.target.value});
  }
  a(event) {
    this.setState({email: event.target.value});
  }
   b(event) {
    this.setState({parola: event.target.value});
  }
  c(event) {
    this.setState({descriere: event.target.value});
  }

  componentDidMount() {
        fetch('https://api.myjson.com/bins/e5o9k')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
}

 
 
 

  render() {
   
    var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
   
    let headerGroup = <ColumnGroup>
                            <Row>
                                <Column header="Nume" rowSpan={5} />
                                <Column header="Prenume" rowSpan={5} />
                                <Column header="Username" rowSpan={5}/>
                                <Column header="Email" rowSpan={5}/>
                            </Row>
                        </ColumnGroup>;
    return (
            
     
     <div>
     
            <div id="profil" onClick={(e) => this.op.toggle(e)}>
        
             <h5>Bine ai venti { this.state.username } !</h5>
            </div>
            <OverlayPanel ref={(el) => {this.op = el;}} showCloseIcon={true} dismissable={true}>
            <div id="AfisareProfil">
           <h6> Mail: {this.state.email}</h6> 
           <h6> Descriere: {this.state.descriere}</h6>
            </div>
             </OverlayPanel>
             
         <button id="bd" onClick={this.getUtilizatori} data-dismiss="a">Baza de date</button>     
         <DataTable id="tabelUser" value={this.state.useri} headerColumnGroup={headerGroup} > 
                <Column  field="nume" />
                <Column  field="prenume" />
                <Column  field="numeUtilizator" />
                <Column  field="email" />
            </DataTable><br/><br/>
             <table id="json">
                {items.results.map(item => (
                    
                        <tr key="{item.deviationid}">
                            Name: {item.author.username} => Comentarii: {item.stats.comments} & Imagini favorite: {item.stats.favourites}
                        </tr>
                        
                    ))}
                </table>
           
            
            <div id="formUser">
            <label id="a">CREARE CONT: </label><br/><br/><br/>
         
          <label >Nume</label>
          <input type="text" placeholder="Nume:" id="nume"/><br/><br/>
          
          <label >Prenume</label>
          <input type="text" placeholder="Prenume:" id="prenume"/><br/><br/>
          
          <label id="a">Username: </label>
          <input id="username" type="text" placeholder="Username"  value={this.state.value} onChange={this.handleChange} /><br/><br/>
          
          <label id="a">Email: </label>
          <input id="a1" type="text" placeholder="Email" value={this.state.value} onChange={this.a}  /><br/><br/>
          
          <label id="a">Parola: </label>
          <input id="a2" type="text" placeholder="Parola" value={this.state.value} onChange={this.b}/><br/><br/>
  
           <button onClick={this.postUser} data-dismiss="modal">Inregistrare</button>
          <br/><br/><br/>
          
          </div>
         
     </div>
    );
  }
}
export default Utilizatori