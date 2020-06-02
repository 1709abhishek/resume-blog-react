import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class About extends Component {
  render() {
    return (
      <div><Grid className="contact-grid2">
        <Cell col={3}>
          <h2>Cover</h2>

          <h6 style={{ width: '75%', margin: 'auto', paddingTop: '1em', color: 'black' }}> I am a versatile, hard-working, software enthusiast who loves to code and design things inside out. Throughout my college years, I have worked in diverse software development stacks to keep myself updated in this fast-moving industry.
          Eager to work in a company where I can brush up my software development skills and create softwares from scratch to deploying them.
          I love data structures and algorithms and i am proficient in other core computer science subjects also i.e. system design, operating systems and DBMS.
          Thus, I am a developer with strong cs basics and can help software development teams with an all round performance.
          </h6>

        </Cell>
        <Cell col={9}>
          <h4 style={{ width: '75%', margin: 'auto', paddingTop: '1em', color: 'white', marginLeft: '0' }}>My Github statistics</h4>
          <a href="http://github.com/1709abhishek"><h6 style={{ width: '75%', paddingTop: '0', color: 'white', marginLeft: '0' }}>See Repositories</h6></a>
          <img
            src="/gitstats.png"
            alt="avatar"
            style={{ height: '1500px', width: '90%', marginLeft: '0' }}
          />


        </Cell>
      </Grid></div>
    )
  }
}

export default About;
