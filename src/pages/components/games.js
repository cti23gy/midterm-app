import * as React from "react";
import 'semantic-ui-css/semantic.css';
import { Container, Header, Card, Rating, Icon, Grid } from 'semantic-ui-react';


const GamesPage = () => {  

  return (
    <React.Fragment>
      <Container>
          <Header as="h1">Games</Header>
          <Grid columns="3">
            <Grid.Column>
            <Card>
              <Header as="h2">TicTacToe</Header>
              <Header as='h4' color="gray">3 in a row</Header>
              <Grid>
                  <Grid.Column width="12">
                  <Rating icon='star' defaultRating={2} maxRating={5} />
                  </Grid.Column>
                  <Grid.Column width="4">
                  <Icon name="warning circle"></Icon>
                  </Grid.Column>
              </Grid>
          </Card>
            </Grid.Column>
            <Grid.Column>
            <Card>
              <Header as="h2">Checkers</Header>
              <Header as='h4' color="gray">Jumping race</Header>
              <Grid>
                  <Grid.Column width="12">
                  <Rating icon='star' defaultRating={3} maxRating={5} />
                  </Grid.Column>
                  <Grid.Column width="4">
                  <Icon name="warning circle"></Icon>
                  </Grid.Column>
              </Grid>
          </Card>
            </Grid.Column>
            <Grid.Column>
            <Card>
              <Header as="h2">Snakes and Ladders</Header>
              <Header as='h4' color="gray">Snake!</Header>
              <Grid>
                  <Grid.Column width="12">
                  <Rating icon='star' defaultRating={4} maxRating={5} />
                  </Grid.Column>
                  <Grid.Column width="4">
                  <Icon name="warning circle"></Icon>
                  </Grid.Column>
              </Grid>
          </Card>
            </Grid.Column>
          </Grid>
          
          <Grid columns="3">
              <Grid.Column>
              <Card>
              <Header as="h2">Yahtzee</Header>
              <Header as='h4' color="gray">Feeling lucky?</Header>
              <Grid>
                  <Grid.Column width="12">
                  <Rating icon='star' defaultRating={5} maxRating={5} />
                  </Grid.Column>
                  <Grid.Column width="4">
                  <Icon name="warning circle"></Icon>
                  </Grid.Column>
              </Grid>
          </Card>
              </Grid.Column>
              <Grid.Column></Grid.Column>
              <Grid.Column></Grid.Column>
          </Grid>
          
          
      </Container>
      
      
    </React.Fragment>
  );
};

export default GamesPage;