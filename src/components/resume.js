import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}><a href="https://drive.google.com/file/d/1aLzJyAVIWQfUKsj7NnkTBcEPZKrJSWht/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-file-text" aria-hidden="true" /> Resume
                </a></h2>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="/abhishek-jain.JPG"
                alt="avatar"
                style={{ height: '300px', marginBottom: '-100px', marginRight: '150px', marginTop: '30px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em', color: 'white' }}>Abhishek Jain</h2>
            <h4 style={{ color: 'white' }}>Software Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%', color: 'white' }} />
            <p style={{ color: 'white' }}>I am a Full Stack Developer. I like to explore new possibilities and designing is my cup of tea. Passionate about designing different systems and learning more technologies. Versatility is my strength.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%', color: 'white' }} />
            <h5 style={{ color: 'white' }}>Address</h5>
            <p style={{ color: 'white' }}>Fort Wayne, Indiana</p>
            <h5 style={{ color: 'white' }}>Email</h5>
            <p style={{ color: 'white' }}>1709abhishek@gmail.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5 style={{ color: 'white' }}>Core CS Subjects</h5>
            <ul style={{ color: 'white' }}>Data Structures</ul>
            <ul style={{ color: 'white' }}>Algorithms</ul>
            <ul style={{ color: 'white' }}>System design</ul>
            <ul style={{ color: 'white' }}>Operating Systems</ul>
            <ul style={{ color: 'white' }}>Database Management Systems</ul>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%', color: 'white' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2023}
              endYear={2025}
              schoolName="Purdue University"
              schoolDescription="Masters in Computer Science | Indiana"
            />


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Jaypee Institute Of Information Technology"
              schoolDescription="Computer Science Engineering | Noida"
            />



            <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2023}
              jobName="Avalara | Software Engineer"
              jobDescription="A full stack developer, worked in product engineering of beverage alcohol for Avalara, a client-facing portal for automating tax calculations, license generations, and other product shipment facilities."
            />

<Experience
              startYear={2022}
              endYear={2022}
              jobName="Masai School | Industry Mentor"
              jobDescription="Mentored and trained budding software engineers, whether backend, frontend, or full-stack. Helped them become industry ready."
            />

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Coding Ninjas | Intern and Trainee"
              jobDescription="A full stack developer, joined as a careercamp student in coding ninjas, also working as an intern there."
            />


            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="HTML/CSS"
              progress={90}
            />
            <Skills
              skill="Javascript"
              progress={70}
            />
            <Skills
              skill="Java"
              progress={70}
            />
            <Skills
              skill="NodeJS"
              progress={80}
            />
            <Skills
              skill="ExpressJS"
              progress={80}
            />
            <Skills
              skill="ReactJS"
              progress={90}
            />
            <Skills
              skill="Context API"
              progress={90}
            />
            <Skills
              skill="MongoDB"
              progress={80}
            />
            <Skills
              skill="SQL"
              progress={80}
            />
            <Skills
              skill="AWS"
              progress={80}
            />
            <Skills
              skill="Terraform"
              progress={80}
            />
            <Skills
              skill="Gitlab"
              progress={90}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
