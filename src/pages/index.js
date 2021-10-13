import * as React from "react";
import 'semantic-ui-css/semantic.css';
import { Header, Container, Button, Grid, Segment, Form, Select, List, Label, Modal, Icon } from 'semantic-ui-react';

import Home from './components/home';
import Games from './components/games';
import Contact from './components/contact';

const IndexPage = () => {

  const [HomeOpen, setHomeOpen] = React.useState(false);
  const [GamesOpen, setGamesOpen] = React.useState(false);
  const [ContactOpen, setContactOpen] = React.useState(false);

  function openHome() {
    setHomeOpen(true);
  }
  function closeHome() {
    setHomeOpen(false);
  }
  function openGames() {
    setGamesOpen(true);
  }
  function closeGames() {
    setGamesOpen(false);
  }
  function openContact() {
    setContactOpen(true);
  }
  function closeContact() {
    setContactOpen(false);
  }

  return (
    <React.Fragment>
      <Container>

        <Grid>
          <Grid.Column width='2'>
            yes
          </Grid.Column>
          <Grid.Column width='2'>
            h
          </Grid.Column>
          <Grid.Column width='12'> 
          </Grid.Column>
        </Grid>
        

      { HomeOpen ? (
          <Home 
            closeHome={closeHome}  
          />
        ) : null}

        {GamesOpen ? (
          <Games 
            closeGames={closeGames}
          />
        ) : null}

        {ContactOpen ? (
          <Contact 
            closeContact={closeContact} 
          />
        ) : null}
      </Container>
      
      
    </React.Fragment>
  );
};

export default IndexPage;