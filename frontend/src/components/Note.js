




  
  
import React, { Component } from 'react';
import About from './About';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



/**
 * l'objet Note qui contient une note
 * @param {Note} props 
 */


const Note = props => (
    <tr>
        <td>{props.note.cc}</td>
        <td>{props.note.cf}</td>
        <td>{props.note.ci}</td>
        <td>{props.note.moyenne}</td>
       
        <td>{props.note.module}</td>
        
    </tr>
)
/**
 * Créer le tableau qui contient les notes d'un étudiant
 */

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":"Content-Type, Authorization, Content-Length",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
export default class notesList extends Component {

    constructor(props) {
        super(props);
        this.state = {note: []};
    }
/**
 * @property {Function}  componentDidMount Sert à relier le frontend avec le backend
 * @returns void
 */
    componentDidMount() {
        axios.get('http://localhost:1234/note', config)
            .then(response => {
                this.setState({ note: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
/**
 * @property {Function} noteList
 * @returns la liste de tout les notes à afficher
 */
    noteList() {
        return this.state.note.map(function(currentnote, i){
            return <Note note={currentnote} key={i} />;
        })
    }
/**
 * @property {Function} render
 * @returns le tableau qui contient les notes d'un étudiant
 */
    render() {
        return (
            
            <layout>
                <About></About>
                <React.Fragment>
                 <CssBaseline />
                     <Container >  

                                <div style={{marginTop:"70px"}}>
                                <h3 >Liste notes</h3>
                                <table className="table table-striped" style={{ marginTop: 20 }} >
                                    <thead>
                                        <tr>
                                            <th>cc</th>
                                            <th>CF</th>
                                            <th>CI</th>
                                            <th>Module</th>
                                            
                                            <th>Moyenne</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.noteList() }
                                    </tbody>
                                </table>
                                </div>
                     </Container>
                  </React.Fragment>
            </layout>
        )
    }
}
  
  




  
  
 

   
  
  
    
