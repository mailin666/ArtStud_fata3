import React, { Component } from 'react';
//import {EventEmitter} from 'fbemitter'
   import Preturi from './activitati/Preturi'
   import Utilizatori from './activitati/Utilizatori'
   import Contact from './activitati/Contact'
//   import Registration from './activitati/Uti'
// import {TabMenu} from 'primereact/tabmenu';
import './css/poster.css';
import poster from './images/a.jpg';
import './css/descriere.css';
import {SelectButton} from 'primereact/selectbutton';

class Poster extends Component {
   constructor() {
    super();
    this.state = {
      value1: null,
       img:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dblhs5p-6ba3ad01-fd47-4715-b6c8-db396d26f1cb.png/v1/fill/w_438,h_250,q_70,strp/heart_of_sea_and_shore_by_ducklordethan_dblhs5p-250t.jpg',
       img2:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dbkx7t1-96284571-4dec-42b8-9131-a23763c6f9df.png/v1/fill/w_1183,h_676,q_70,strp/hero_behind_the_reflection_by_ducklordethan_dbkx7t1-pre.jpg',
       img3:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dccuyyj-2fd5ee39-201f-4bef-be30-b49fb52645a4.png/v1/fill/w_1095,h_730,strp/boku_no_marvel_academia_xd_by_ducklordethan_dccuyyj-pre.png',
       img4:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dbkvltd-4d143d47-a656-46ab-8306-348527cf410a.jpg/v1/fill/w_730,h_1095,q_70,strp/masks_and_roses_by_ducklordethan_dbkvltd-pre.jpg',
       img5:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dchhb9c-6b69de70-f646-4f83-a987-f334590f47e1.png/v1/fill/w_730,h_1095,q_70,strp/spidey_and_scarlet_by_ducklordethan_dchhb9c-pre.jpg',
       img6:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dcgx543-02967dea-7681-4169-9dbc-3d213e810d24.png/v1/fill/w_730,h_1095,q_70,strp/snow_white___remastered_by_ducklordethan_dcgx543-pre.jpg',
       img7:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dcil90s-4a6ac22c-0af9-474f-801a-0982b32daf0d.png/v1/fill/w_1197,h_668,q_70,strp/mymarvelacademiaclass1_a_by_ducklordethan_dcil90s-pre.jpg',
       img8:'https://orig00.deviantart.net/7771/f/2018/200/2/2/marvel_academia_by_ducklordethan-dchoorb.gif',
       img9:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dcis6n2-389741d9-0e40-4da8-9cc2-6f5cd9eb83fa.png/v1/fill/w_1264,h_632,q_70,strp/league_of_villains__marvel_edition__by_ducklordethan_dcis6n2-pre.jpg'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}


  handleSubmit(event) {
    
    this.setState({value1: event.value});
    
      if(this.state.value1==='Anime'){
      this.setState({
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dblhs5p-6ba3ad01-fd47-4715-b6c8-db396d26f1cb.png/v1/fill/w_438,h_250,q_70,strp/heart_of_sea_and_shore_by_ducklordethan_dblhs5p-250t.jpg'})
    
        this.setState({
    img2: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dbkx7t1-96284571-4dec-42b8-9131-a23763c6f9df.png/v1/fill/w_1183,h_676,q_70,strp/hero_behind_the_reflection_by_ducklordethan_dbkx7t1-pre.jpg'})
    
    this.setState({
    img3: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dccuyyj-2fd5ee39-201f-4bef-be30-b49fb52645a4.png/v1/fill/w_1095,h_730,strp/boku_no_marvel_academia_xd_by_ducklordethan_dccuyyj-pre.png'})
    
     this.setState({
    img4: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dbkvltd-4d143d47-a656-46ab-8306-348527cf410a.jpg/v1/fill/w_730,h_1095,q_70,strp/masks_and_roses_by_ducklordethan_dbkvltd-pre.jpg'})
    
        this.setState({
    img5: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dchhb9c-6b69de70-f646-4f83-a987-f334590f47e1.png/v1/fill/w_730,h_1095,q_70,strp/spidey_and_scarlet_by_ducklordethan_dchhb9c-pre.jpg'})
    
    this.setState({
    img6: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dcgx543-02967dea-7681-4169-9dbc-3d213e810d24.png/v1/fill/w_730,h_1095,q_70,strp/snow_white___remastered_by_ducklordethan_dcgx543-pre.jpg'})
       this.setState({
    img7: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dcil90s-4a6ac22c-0af9-474f-801a-0982b32daf0d.png/v1/fill/w_1197,h_668,q_70,strp/mymarvelacademiaclass1_a_by_ducklordethan_dcil90s-pre.jpg'})
    
        this.setState({
    img8: 'https://orig00.deviantart.net/7771/f/2018/200/2/2/marvel_academia_by_ducklordethan-dchoorb.gif'})
    
    this.setState({
    img9: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e21016dc-97ec-4187-ab36-aeb376c080fb/dcis6n2-389741d9-0e40-4da8-9cc2-6f5cd9eb83fa.png/v1/fill/w_1264,h_632,q_70,strp/league_of_villains__marvel_edition__by_ducklordethan_dcis6n2-pre.jpg'})
     
      }else if(this.state.value1==='Portret'){
    this.setState({  img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1818d90d-b224-46f8-9832-955b50c6cf4f/db04brt-0c344ab7-f71c-47e1-b2bf-73ac9379f5cb.jpg'})
    
    this.setState({ img2: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1818d90d-b224-46f8-9832-955b50c6cf4f/dct6kq3-ec36b765-33df-470d-9365-7de849f0b25d.png/v1/fill/w_900,h_637,q_80,strp/the_star_sign___aquarius_by_serafleur_dct6kq3-fullview.jpg'})
    
    this.setState({ img3: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1818d90d-b224-46f8-9832-955b50c6cf4f/dabb53w-48e2bf77-1131-4686-9602-3b16bc09082b.jpg'})
    
    this.setState({ img4: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1818d90d-b224-46f8-9832-955b50c6cf4f/dcw08mk-ed9c3a1d-1e66-47fa-a32b-624f0f32f81a.png'})
    
    this.setState({ img5: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1818d90d-b224-46f8-9832-955b50c6cf4f/dc8wg2o-e0a17b89-23ae-4122-8c5c-ac4113c2a6f6.jpg'})
    
    this.setState({ img6: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1818d90d-b224-46f8-9832-955b50c6cf4f/da6bms9-a30d6e74-092b-4d60-8aee-be7d3a134a7b.jpg'})
    this.setState({ img7: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1818d90d-b224-46f8-9832-955b50c6cf4f/dadccha-7c631576-e261-4420-8610-2335af2ecf97.jpg'})
    
    this.setState({ img8: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1818d90d-b224-46f8-9832-955b50c6cf4f/dapcz3f-e7ae395d-97fe-4e41-9183-6dba40d017c6.jpg'})
    
    this.setState({ img9: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1818d90d-b224-46f8-9832-955b50c6cf4f/dastfk3-de282fc3-274d-43c8-b140-c9f88c6f66da.jpg'})
    
    } 
    else if(this.state.value1==='Pictura') {
    this.setState({  img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/a99b2c6f-5e83-459e-83a1-f08f989c2514/dawmywr-a0a07deb-3265-4a9d-99f6-932747fb7ee9.jpg/v1/fill/w_1024,h_616,q_70,strp/olga_by_kenket_dawmywr-fullview.jpg'})
    
    this.setState({ img2: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/a99b2c6f-5e83-459e-83a1-f08f989c2514/daw78d0-1c8fb8cd-0937-404f-9a1a-caee3c5b9f80.jpg/v1/fill/w_1024,h_633,q_70,strp/impasse_by_kenket_daw78d0-fullview.jpg'})
    
    this.setState({ img3: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/a99b2c6f-5e83-459e-83a1-f08f989c2514/d9ewon4-be5d86ee-6315-497f-a4b5-c3fc12c904ff.jpg/v1/fill/w_1024,h_633,q_70,strp/outlaw_by_kenket_d9ewon4-fullview.jpg'})
    
    this.setState({ img4: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/a99b2c6f-5e83-459e-83a1-f08f989c2514/d9pxrmt-a2624f2d-7a33-40ff-8242-1da7d5bd5d0f.jpg/v1/fill/w_790,h_1012,q_70,strp/highena_by_kenket_d9pxrmt-pre.jpg'})
    
    this.setState({ img5: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/a99b2c6f-5e83-459e-83a1-f08f989c2514/d9bpp0l-0f86d4cc-a685-427d-98d2-b8419e3ee360.jpg/v1/fill/w_832,h_961,q_70,strp/white_lies_by_kenket_d9bpp0l-pre.jpg'})
    
    this.setState({ img6: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/a99b2c6f-5e83-459e-83a1-f08f989c2514/dcckqru-7b5e19ac-6f30-403a-a7b0-52cf6ea59ede.jpg'})
    this.setState({ img7: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/a99b2c6f-5e83-459e-83a1-f08f989c2514/d9pd8yj-3d6720b1-859f-4305-85a4-33934e2f9c7a.jpg/v1/fill/w_1024,h_629,q_70,strp/mess_by_kenket_d9pd8yj-fullview.jpg'})
    
    this.setState({ img8: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/a99b2c6f-5e83-459e-83a1-f08f989c2514/d96evt4-ecb22890-2e6d-4c13-9940-da947a01faca.jpg/v1/fill/w_1024,h_704,q_70,strp/greenhouse_world_by_kenket_d96evt4-fullview.jpg'})
    
    this.setState({ img9: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/a99b2c6f-5e83-459e-83a1-f08f989c2514/d9ch4aj-c5e4666c-a489-4f7b-a1d3-d61946c8a520.jpg'})
    }
      
  }
  render() {
 const options = [
            {label: 'Anime', value: 'Anime'},
            {label: 'Portret', value: 'Portret'},
            {label: 'Pictura', value: 'Pictura'}
        ];
        
    return (
      <div className="Poster" >
              <ul>
              <li className='active'><a href='#c1'><span>Home</span></a></li>
              <li><a href='#c2'><span>Imagini</span></a></li>
              <li><a href='#c3'><span>Preturi</span></a></li>
              <li><a href='#c4'><span>Artisti</span></a></li>
              <li class='last'><a href='#c5'><span>Contact</span></a></li>
              </ul>
                 <img id="c1" src={poster} alt="Poster"/>
                 <h1>ESTI GATA SA-TI DESCOPERI TALENTU?</h1>
                 <h2>HOME</h2>
                  <p >
      ArtStud este o comunitate online ce prezintă diverse forme de lucrări de artă.  Site-ul reprezintă un popular portal și rețea de socializare pentru fotografi, ilustratori,
 pictori și scriitori. Site-ul a fost conceput ca un portal pentru tot ce inseamna creeati. ArtStud are telul de a devenii cea mai mare comunitate de graficieni si artisti din lume.
 Membrii ArtStud pot lăsa comentarii și critici privind paginile individuale de abatere, permitând site-ului să fie numit "o 
aplicație de evaluare reciprocă".Odată cu critica textuală, DeviantArt oferă acum opțiunea de a lăsa o imagine mică ca comentariu. Site-ul prezinta cateva facilitati interesante printre care : evaluarea unei creatii in functie de anumite criterii si aflarea pretului impreuna cu unele exemple de creatie care s-ar incadra in suma respectiva.
      </p>
      <img className="rotite" src="https://thumbs.gfycat.com/FailingSorrowfulIchthyosaurs-size_restricted.gif" alt="Poster"/>
      <h3 id="c2">IMAGINI</h3>

                <div className="radioButtons">
                    <SelectButton value={this.state.value1} options={options} onChange={(e) => this.handleSubmit(e)} />
                    <p id="radioButtons">Categorie selectata: {this.state.value1}</p>

                </div>
      <table  id="poze">
      <tr>
      
      <td><img id="yo" src={this.state.img} alt="Poster"/>
      <pre>   Titlu: Mica sirena</pre></td>
      <td><img id="yo" src={this.state.img2} alt="Poster"/>
      <pre>   Titlu: Mulan</pre></td>
      <td><img id="yo" src={this.state.img3} alt="Poster"/>
      <pre>Titlu: Academia mea de eroi</pre></td>
      </tr>
      <tr>
      <td><img id="bu" src={this.state.img4} alt="Poster"/>
      <pre>   Titlu: Frumoasa si bestia</pre></td>
      <td><img id="bu" src={this.state.img5} alt="Poster"/>
      <pre>   Titlu: Caractere - Academia mea de eroi</pre></td>
      <td><img id="bu" src={this.state.img6} alt="Poster"/>
      <pre>Titlu: Alba ca zapada</pre></td>
      </tr>
      <tr>
      <td><img id="yo" src={this.state.img7} alt="Poster"/>
      <pre>   Titlu: My marvel academy</pre></td>
      <td><img id="yo" src={this.state.img8} alt="Poster"/>
      <pre>   Titlu: SuperEroi</pre></td>
      <td><img id="yo" src={this.state.img9} alt="Poster"/>
      <pre>Titlu: Destinania finala</pre></td>
      </tr>
      </table>
      <h3 id="c3">PRETURI</h3>
   
     
      
      </div>
      
      
    );
  }
}


class App extends Component {
   constructor(props) {
        super(props);
        this.state = {

        }

    }
 

  render() {


    return (
      <div >
      <Poster/>
        <Preturi/>  <br/>
           <h3 id="c4">UTILZATORI</h3>
           <Utilizatori/>
           <Contact />
      </div>
    );
  }
}
export default App;


// //voi scrie si aici 
// class Utilizatori extends Component{
    
//     constructor(props){
//         super(props)
//         this.state={
//             isEditing:false,
//             nume:this.props.utilizator.nume,
//             prenume:this.props.utilizator.prenume,
//             numeUtilizator:this.props.utilizator.numeUtilizator,
//             email:this.props.utilizator.email,
//             descriere:this.props.utilizator.descriere
//         }


//     }
    

// }???
//tocmai voiam sa comentez eu ca imi dadea eroare
//da...si mie ...offff

//const emitter=new EventEmitter()
//const c=new Utilizatori(emitter)
//let obtUtilizAll=()=>{
    
    //c.getAll();

//}
