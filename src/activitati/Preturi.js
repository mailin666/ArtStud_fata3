import React, { Component } from 'react';

class Preturi extends Component {
  constructor(props) {
    super(props);
    this.state = {peisaj: 'nu',
                  result:0,
                  color:'nu',
                  dimensiuni:'mic',
                  caractere:"0",
                  img:'',
                  img2:'',
                  img3:''
    };
    this.a=this.a.bind(this);
    this.b=this.b.bind(this);
    this.c=this.c.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({peisaj: event.target.value});
  }
  a(event) {
    this.setState({color: event.target.value});
  }
   b(event) {
    this.setState({dimensiuni: event.target.value});
  }
  c(event) {
    this.setState({caractere: event.target.value});
  }
  
  inc() {
      
     console.log(this.state.result);
     var peisaj=this.state.peisaj;
     var color=this.state.color;
     var dimensiuni=this.state.dimensiuni;
     var caractere=this.state.caractere;
    
    console.log(peisaj);
    
     if(peisaj==='simplu'){
       this.setState({
      result: this.state.result+50
    });
     }else if (peisaj==='complex'){
       this.setState({
      result: this.state.result+100
    });
     }
    
     if(color==='da'){
       this.setState({
      result: this.state.result+150
    });
    }else if(color==='nu'){
       this.setState({
      result: this.state.result+50
    });
    }
    
     if(dimensiuni==='mediu'){
       this.setState({
      result: this.state.result+50
    });
     }else 
     if(dimensiuni==='mare'){
       this.setState({
      result: this.state.result+100
    });
     }else
     if(dimensiuni==='fmare'){
       this.setState({
      result: this.state.result+150
    });
     }
    
     if(caractere==='1'){
       this.setState({
      result: this.state.result+50
    });
     }else 
     if(caractere==='2'){
      this.setState({
      result: this.state.result+100
    });
    }else
     if(caractere==='multe'){
       this.setState({
      result: this.state.result+200
    });
     }
     
    console.log('after: ' + this.state.result);
  }

  handleSubmit(event) {
    this.setState({
    result: this.state.result-this.state.result})
    this.inc(); 
    event.preventDefault();
      if(this.state.result<100){
      this.setState({
    img2: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/985a6bee-aeef-4ff4-80a9-07d344e13059/dcubzh9-6f5756d2-5d9a-431a-be73-ba975e78ce31.jpg/v1/fill/w_752,h_1063,q_70,strp/wip___velvet_crowe_lineart__battlesuit_side_a_by_adsouto_dcubzh9-pre.jpg'})
    
        this.setState({
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/985a6bee-aeef-4ff4-80a9-07d344e13059/dcw3ruh-b965d339-224c-4f2c-9770-66bd3f593317.jpg/v1/fill/w_752,h_1063,q_70,strp/wip___kali_belladonna___lineart_by_adsouto_dcw3ruh-pre.jpg'})
    
    this.setState({
    img3: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/985a6bee-aeef-4ff4-80a9-07d344e13059/dcwqppl-897b3cc3-ee4b-4cae-b884-bf655f07e8aa.jpg/v1/fill/w_752,h_1063,q_70,strp/wip___sword_maiden_archbishop___lineart_by_adsouto_dcwqppl-pre.jpg'})
    
       
      }else if(this.state.result<250){
      this.setState({
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/985a6bee-aeef-4ff4-80a9-07d344e13059/dcw7ow3-7e3e3678-d138-4497-95b2-2e78947c1969.jpg/v1/fill/w_752,h_1063,q_70,strp/wip___kali_belladonna___bg_by_adsouto_dcw7ow3-pre.jpg'})
    
     this.setState({
    img2: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/985a6bee-aeef-4ff4-80a9-07d344e13059/dcufmdy-12bac730-e38c-494b-9fed-dcb72098adea.jpg/v1/fill/w_752,h_1063,q_70,strp/wip___velvet_crowe_background__battlesuit_side_a_by_adsouto_dcufmdy-pre.jpg'})
    
    this.setState({
    img3: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/985a6bee-aeef-4ff4-80a9-07d344e13059/dcwtk82-4b6f845f-b944-42cf-82ea-17c298b2d938.jpg/v1/fill/w_752,h_1063,q_70,strp/sword_maiden_archbishop_bg_by_adsouto_dcwtk82-pre.jpg'})
    
    } 
    else if(this.state.result>=250) {
     this.setState({
     img:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/985a6bee-aeef-4ff4-80a9-07d344e13059/dcwdsvu-fb1f8655-bb06-4815-a6ef-e974730d2ac6.jpg/v1/fill/w_752,h_1063,q_70,strp/kali_belladonna___strong_motherhood_by_adsouto_dcwdsvu-pre.jpg'
    })
    
     this.setState({
     img2:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/985a6bee-aeef-4ff4-80a9-07d344e13059/dcukk84-9413adc8-b45d-4067-a6c1-71d3209f8147.jpg/v1/fill/w_752,h_1063,q_70,strp/velvet_crowe__lord_of_calamity___battlesuit_by_adsouto_dcukk84-pre.jpg'
    })
    
     this.setState({
     img3:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/985a6bee-aeef-4ff4-80a9-07d344e13059/dcwzbb7-233609bb-9d0b-4d99-ad50-a619bd4d6b8f.jpg/v1/fill/w_752,h_1063,q_70,strp/sword_maiden__archbishop_by_adsouto_dcwzbb7-pre.jpg'
    })
     
    }
  }

  render() {
    return (
     <div>
      <form id="cont" onSubmit={this.handleSubmit}>
         <label id="a">Peisaj: </label>
          <select value={this.state.value} onChange={this.handleChange}>
           <option value="nu">none</option>
            <option value="simplu">simplu</option>
            <option value="complex">complex</option>
          </select><br/><br/>
          <label id="b">Color:</label>
          <select value={this.state.value} onChange={this.a}>
           <option value="nu">nu</option>
            <option value="da">da</option>
          </select><br/><br/>
          <label id="c">Dimensiuni lucrare:</label>
           
          <select value={this.state.value}  onChange={this.b}>
            <option value="mic">400x300</option>
            <option value="mediu">640x480</option>
            <option value="mare">800x600</option>
            <option value="fmare">1240x768</option>
          </select><br/><br/>
          <label id="d">Numar caractere: </label>
          <select value={this.state.value} onChange={this.c}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2-3</option>
            <option value="multe">mai mult de 3</option>
          </select><br/><br/><br/>
          
        <input onChange={(e)=>this.handleSubmit(e)} type="submit" value="Calculeaza" />
        <label id="r">Rezultat: {this.state.result} </label>
      </form >
      <div id="pozePreturi">
      <img id="model" src={this.state.img} alt="model"/>
      <img id="model2" src={this.state.img2} alt="model2"/>
      <img id="model3" src={this.state.img3} alt="model2"/>
      </div>
      </div>
    );
  }
}


export default Preturi;