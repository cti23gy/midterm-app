import * as React from "react";
import 'semantic-ui-css/semantic.css';
import { Menu, Container, Icon, Button, Grid} from 'semantic-ui-react';

import Home from './components/home';
import Games from './components/games';
import Contact from './components/contact';

const IndexPage = () => {

  const [HomeOpen, setHomeOpen] = React.useState(false);
  const [GamesOpen, setGamesOpen] = React.useState(false);
  const [ContactOpen, setContactOpen] = React.useState(false);

  function openHome() {
    setHomeOpen(true);
    setGamesOpen(false);
    setContactOpen(false);
  }
  function openGames() {
    setHomeOpen(false);
    setGamesOpen(true);
    setContactOpen(false);
  }
  function openContact() {
    setHomeOpen(false);
    setGamesOpen(false);
    setContactOpen(true);
  }

  return (
    <React.Fragment>
      <Container>
      <Menu>
        <Menu.Item
          onClick={openHome}
        >
          <Icon name="home"/>
        </Menu.Item>

        <Menu.Item
          onClick={openGames}
        >
          <Icon name="gamepad"/>
        </Menu.Item>

        <Menu.Item
          onClick={openContact}
        >
          <Icon name="users"/>
        </Menu.Item>
      </Menu>
        

      { HomeOpen ? (
          <Home  
          />
        ) : null}

        {GamesOpen ? (
          <Games 
          />
        ) : null}

        {ContactOpen ? (
          <Contact  
          />
        ) : null}
      </Container>
      
      
    </React.Fragment>
  );
};

export default IndexPage;