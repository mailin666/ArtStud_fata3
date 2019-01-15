import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';

export class Contact extends Component {

    constructor() {
        super();
        this.state = {
            sales: [
                {username: 'Pitis Maria..........................', email: 'Marya_marya400@yahoo.com......................', nrTelefon: '0733011774....................', facultate: 'ASE'},
                {username: 'Bordeeanu Mirela', email: 'boordeanumirela16@stud.ase.ro', nrTelefon: '0764537823', facultate: 'ASE'},
                {username: 'Buse Sabina', email: 'busemonica@stud.ase.ro', nrTelefon: '0764537823', facultate: 'ASE'}
                
            ]
        };
    }

    render() {
        
        let headerGroup = <ColumnGroup>
                            <Row>
                                <Column header="Username" rowSpan={3} />
                                <Column header="Email" rowSpan={3} />
                                <Column header="Nr Telefon" rowSpan={3}/>
                                <Column header="Facultate" rowSpan={3} />
                            </Row>
                        </ColumnGroup>;

        return (
            <div>
            <br/><br/>
            <h3 id="c5">CONTACT</h3>
            <pre className="contact"> Pentru orice problema sau nelamurire cu privire la site, nu existati sa ne contactati Luni - Vineri intre orele 08:00 -20:00. Va multumim!</pre>
            <DataTable value={this.state.sales} headerColumnGroup={headerGroup} >                        
                <Column id="yo" field="username" />
                <Column id="yo" field="email" />
                <Column id="yo" field="nrTelefon" />
                <Column id="yo" field="facultate" />
            </DataTable>
            
 

            
            </div>
        );
    }
}
export default Contact;