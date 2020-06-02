import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(ipod.gif) center / cover' }} >ipod-app</CardTitle>
            <CardText>
              A virtual web ipod with zingtouch library Implemented and coverflow.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://www.github.com/1709abhishek/ipod-app">GitHub</a></Button>
              <Button colored><a href="http://ipod-web-app.netlify.app">Live app</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(bloc-notes.png) center / cover' }} >bloc-notes</CardTitle>
            <CardText>
              A keeper app clone with some interesting UI features using material-UI. Implemented hooks in this app.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://www.github.com/1709abhishek/bloc-notes">GitHub</a></Button>
              <Button colored><a href="http://Bloc-notes.netlify.app">Live app</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(/todo.png) center / cover' }} >Todo-web-app</CardTitle>
            <CardText>
              A project designed in react-redux with choices of filters.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://www.github.com/1709abhishek/todo-app-react">GitHub</a></Button>
              <Button colored><a href="http://karyakaro.netlify.app">Live app</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(/todo.png) center / cover' }} >SARS-COV-2</CardTitle>
            <CardText>
              A hospital API for patients and doctors to login, register, and feed the reports. Completed with unit testing written with Mocha and Chai.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://www.github.com/1709abhishek/SARS-COV-2">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(/todo.png) center / cover' }} >Codeial</CardTitle>
            <CardText>
              A clone for facebook. Implemented likes, posts, comments, friends models and other things in it. Authenticated with passportJS, google O-Auth.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://www.github.com/1709abhishek/codeial">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


        </div>


      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(music.png) center / cover' }} >Music Player Project</CardTitle>
            <CardText>
              A clone for spotify's frontend. Made responsive with grid and css media queries.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://www.github.com/1709abhishek/bloc-notes">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(youtube.png) center / cover' }} >Youtube-Homepage</CardTitle>
            <CardText>
              A clone for youtube's video page frontend. Made responsive with grid and css media queries.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://www.github.com/1709abhishek/bloc-notes">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(/todo.png) center / cover' }} >Calculator</CardTitle>
            <CardText>
              A project written in vanilla javascript with functionalities as a basic calculator.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://www.github.com/1709abhishek/todo-app-react">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Movies-web-app</CardTitle>
            <CardText>
              A full stack MERN project. A movie app where client can feed in movies with category as genres and it will fetch data category wise, used react/redux for frontend.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://www.github.com/1709abhishek/bloc-notes">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url() center / cover' }} >Codeial-full-stack</CardTitle>
            <CardText>
              A full stack MERN project. A clone of facebook app, used react/redux for frontend.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://www.github.com/1709abhishek/bloc-notes">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


        </div>


      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{ color: '#fff' }}>React</Tab>
          <Tab style={{ color: '#fff' }}>Nodejs</Tab>
          <Tab style={{ color: '#fff' }}>HTML/CSS/JS</Tab>
          <Tab style={{ color: '#fff' }}>Full stack</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
