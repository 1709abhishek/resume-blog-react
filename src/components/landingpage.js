import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{
        width: '100%', margin: 'auto'
      }
      }>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="/abhishek-jain.JPG"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Abhishek Jain</h1>
              <h1>Full Stack Web Developer</h1>

              <p>JAVA | Python | JavaScript | React/Redux/Context | Firebase | NodeJS | Express | MongoDB | AWS | Terraform | Git CI/CD | Spring | System Design</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/abhishek-jain-08a92117a/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://github.com/1709abhishek" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Leetcode */}
                <a href="http://leetcode.com/1709abhishek" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-code" aria-hidden="true" />
                </a>



              </div>
            </div>
          </Cell>
        </Grid>
      </div >
    )
  }
}

export default Landing;
