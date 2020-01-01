import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';

import "bootstrap/dist/css/bootstrap.min.css";
/**
 * créer un objet qui contient tous les composants de l'application (signIn, form, note)
 */
class App extends Component {
  /**
   * @property {Function} render 
   * @return un composant 
   */
  render() {
    return (
    <div className="demo-big-content">
    <Layout>
              
              
              <Content >
                  <div className="page-content"  />
                  <Main/>
              </Content>
     </Layout>
      </div>

    );
  }
}

export default App;
