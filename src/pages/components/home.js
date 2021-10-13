import * as React from "react";
import 'semantic-ui-css/semantic.css';
import { Header, Container, Button, Segment} from 'semantic-ui-react';


const HomePage = () => {  

  return (
    <React.Fragment>
      <Container>
          <Segment textAlign="center">
          <Header as="h1">Home</Header>
          <Header as="h2">Some random text for here</Header>
          <Button
          color="green"
          >Join Now</Button>
          </Segment>

          <Header as="h2">News</Header>
          <Header as="h3">Some more random text</Header>
          
      </Container>
      
      
    </React.Fragment>
  );
};

export default HomePage;