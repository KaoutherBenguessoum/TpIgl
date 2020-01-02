import React, { Component } from 'react';
import axios from 'axios';
import About from './About';
import {Card,ListItem,Button,CardTitle,Textfield,CardText} from  'react-mdl';
/**
 * Créer le formulaire du demande de changement de groupe
 */

export default class Form extends Component {
   /**
    * le constructeur du formulaire
    * @returns void
    * @param {Groupe} props 
    */
    constructor(props) {
        super(props);

        this.state = {
            matricule: '',
            promo:'',
            groupeactuel: '',
            groupevoulu: '',
            raison: '',
            valide:false
        }

        this.onChangeMatricule = this.onChangeMatricule.bind(this);
        this.onChangegroupeactuel = this.onChangegroupeactuel.bind(this);
        this.onChangegroupevoulu = this.onChangegroupevoulu.bind(this);
        this.onChangeraison = this.onChangeraison.bind(this);
        this.onChangepromo = this.onChangepromo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    /**
     * Change le contenu du champs de la matricule
     * @returns void
     * @param {Object} e 
     */
    onChangeMatricule(e) {
        this.setState({
        matricule: e.target.value
        });
    }
    /**
     * Change le contenu du champs de la promo
     * @returns void
     * @param {Object} e 
     */
    onChangepromo(e) {
        this.setState({
        promo: e.target.value
        });
    }
    /**
     * Change le contenu du champs du groupe Actuel
     * @returns void
     * @param {Object} e 
     */
    onChangegroupeactuel(e) {
        this.setState({
            groupeactuel: e.target.value
        });
    }
    /**
     * Change le contenu du champs du groupe voulu
     * @returns void
     * @param {Object} e 
     */
    onChangegroupevoulu(e) {
        this.setState({
            groupevoulu: e.target.value
        });
    }
    /**
     * Change le contenu du champs du raison de changement de groupe
     * @return void
     * @param {Object} e 
     */
    onChangeraison(e) {
        this.setState({
            raison: e.target.value
        });
    }
    /**
     * Envoie la demande au route qui est relier à la BDD
     * @returns void
     * @param {*} e 
     */
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        
        const form = {
            matricule: this.state.matricule,
            groupeactuel: this.state.groupeactuel,
            groupevoulu: this.state.groupevoulu,
            promo: this.state.promo,
            raison:this.state.raison,
            valide:false
        };
       if  (((form.promo =='')|(form.groupeactuel=='')|(form.groupevoulu=='')|(form.matricule=='')|(form.raison==''))){alert("vous devez remplir tous les champs !!");}
        else{
        axios.post('http://localhost:3001/groupe', form)
            .then(res => console.log(res.data));
        this.setState({
            matricule: '',
            groupeactuel: '',
            groupevoulu: '',
            promo:'',
            valide:false,
            raison:''
        })
        alert("Votre demande est prise en charge!!");
       }

    }
    /**
     * @property {Function} render
     * @returns le formulaire créé
     */
    render() {
        return (
            
            <layout >
           
           <About ></About>
            <div  className="list-form" style={{marginTop:'50px'}} >
              <layout > 
                <Card shadow={10} style={{width: '700px', height: '890px',pandding:"10",marginTop:'300px',marginBottom:'90px'}}>
                  <CardTitle >
                     <h1 className="h-form">Demande changement groupe</h1>
                  </CardTitle>
                  <CardText expand  style={{padding:"0px",margin:"150px",marginTop: "-15px",width:'700px'}}>
                         <form onSubmit={this.onSubmit}>
                         <list>                        
                          <ListItem>
                            <Textfield   
                              id="matricule"                       
                              label="Matricule..."
                              value={this.state.matricule}
                              onChange={this.onChangeMatricule}
                              floatingLabel
                              style={{width: '300px'}}/>
                          </ListItem>
                         
                         
                         
                          <ListItem>
                          <Textfield
                                    value={this.state.promo}
                                    onChange={this.onChangepromo}
                                    id="promo"
                                    label="Promo..."
                                    floatingLabel
                                    style={{width: '300px'}}
                                />
                          </ListItem>
                         
                          
                         
                          <ListItem>
                            <Textfield   
                              id="gpactuel"                        
                              label="Groupe Actuel..."
                              value={this.state.groupeactuel}
                              onChange={this.onChangegroupeactuel}
                              floatingLabel
                              style={{width: '300px'}}/>
                          </ListItem>

                          <ListItem>
                            <Textfield
                              id="grpvoulu"
                              label="Groupe voulu..."
                              value={this.state.groupevoulu}
                              onChange={this.onChangegroupevoulu}
                              floatingLabel
                              style={{width: '300px'}}/>
                          </ListItem>

                          

                          <ListItem>
                              <Textfield id='why'                         
                              label="Pourquoi vous voulez changer de groupe?..."
                              value={this.state.raison}
                              onChange={this.onChangeraison}
                              rows={3}
                              style={{width: '350px'}} />
                          </ListItem>

                          <ListItem>
                             <Button  id='send'type='submit' ClassName ="btn-form" position ="center" raised accent ripple type='submit' >Envoyer</Button>
      
                         </ListItem>

                         </list>
                         </form>
                   </CardText>
                  
                </Card>
              </layout>
            </div>
            </layout>
        )
    }
}