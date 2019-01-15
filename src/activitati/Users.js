import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Row} from 'primereact/row';
import {ColumnGroup} from 'primereact/columngroup';
import "isomorphic-fetch";
import {OverlayPanel} from 'primereact/overlaypanel';


class Utilizatori extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  items: [],
                  isLoaded: false,
                  nume:'anonim',
                  vector:[],
                  username:'',
                  email:'',
                  parola:'',
                  descriere:'',
                  useri: [
    { numeUtilizator:"maria..........", email:"marya@...........", descriere:"nu sunt chiar artist" },
    { numeUtilizator:"mirela", email:"mirela@", descriere:"no comment" },
    { numeUtilizator:"sabina", email:"sabina@", descriere:"nu sunt artist" },
    { numeUtilizator:"ana", email:"ana@", descriere:"am peste 20 de ani de experienta" },
    { numeUtilizator:"cristina", email:"Cristina@", descriere:"incepator cu acte in regula" },
    { numeUtilizator:"taenaron ", email:"taenaron @", descriere:"experienta de peste 5 ani" },
    { numeUtilizator:"TaNa-Jo", email:" TaNa-Jo@", descriere:"incepator" }]
    
    }
    this.a=this.a.bind(this);
    this.b=this.b.bind(this);
    this.c=this.c.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

createObj(){
 
 let user={numeUtilizator:this.state.username, email:this.state.email,parola:this.state.parola, descriere:this.state.descriere  }
 console.log(user);
 
 let useri=this.state.useri;
   useri.push(user);
   this.setState({useri});
   console.log(this.state.useri);

 }
 
 
 

  render() {
   
    var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
   
    let headerGroup = <ColumnGroup>
                            <Row>
                                <Column header="Username" rowSpan={5} />
                                <Column header="Email" rowSpan={5} />
                                <Column header="Descriere" rowSpan={5}/>
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
         <DataTable id="tabelUser" value={this.state.useri} headerColumnGroup={headerGroup} >                        
                <Column  field="numeUtilizator" />
                <Column  field="email" />
                <Column  field="descriere" />
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
          <label id="a">Username: </label>
          <input type="text"  value={this.state.value} onChange={this.handleChange} /><br/><br/>
          
          <label id="a">Email: </label>
          <input id="a1" type="text" value={this.state.value} onChange={this.a}  /><br/><br/>
          
          <label id="a">Parola: </label>
          <input id="a2" type="text"  value={this.state.value} onChange={this.b}/><br/><br/>
          
          <label id="a">Descriere: </label>
          <input id="a3" type="text"  value={this.state.value} onChange={this.c}/><br/><br/>
          
          
          <button onClick={()=> this.createObj()}>Adauga</button>
          
          
          
          </div>
         
     </div>
    );
  }
}
export default Utilizatori;