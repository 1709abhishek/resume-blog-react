import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Abhishek Jain</h2>
            <img
              src="/abhishek-jain.JPG"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <h4 style={{ width: '75%', margin: 'auto', paddingTop: '1em', color: 'white' }}>Feel Free to contact. Looking to expand my horizon in SDE field, excited for some great summer intern 2024 opportunities.</h4>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'white' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +12604186186
                  </ListItemContent>
                </ListItem>



                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'white' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    1709abhishek@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'white' }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    1709abhishek
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
