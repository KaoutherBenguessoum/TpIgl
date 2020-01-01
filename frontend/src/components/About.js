import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import main from './main';


/**
 * Créer le menu de l'application (bar de navigation)
 */

class About extends Component {
 /**
   * @property {Function} render 
   * @return le composant le menu de l'application
   */
    render()
    {
        return(
            <div style={{width: '100%', margin: '0px',marginTop:'0px',marginLeft:'0px',marginRight:'0px'}} >
               <Layout fixedHeader>
               <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"></Link>} scroll>
                    <Navigation>
                          <Link to="/Form" id="Formu" >Form</Link>
                          
                          <Link to="/Note"id ="Note">Note</Link>
                    </Navigation>
              </Header>
              <Drawer>
                  <Navigation >
                    <Link to="/Form">Form</Link>
                    
                    <Link to="/Note">Note</Link>
                  </Navigation>
              </Drawer>
              </Layout>
              
            
              <Content >
                  <div className="page-content"  />
                  <main/>
              </Content>
             
            </div>
        )
}
}

export default About;