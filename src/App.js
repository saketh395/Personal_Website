import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects'
import Certifications from './Certifications';
import Acheivements from './Acheivements';

function App() {
  return (
    <div className="App">
       <div id="top_bar">
         <table>
           <tr>                        {/* eslint-disable-next-line*/}  
           <th id="hd"><a href="https://github.com/saketh395" class="fa fa-github" title="Github"></a></th> {/* eslint-disable-next-line*/}  
           <th id="hd" color="black"><a href="https://www.linkedin.com/in/pagidala-saketh-reddy-31923918b" title="Linkedin" class="fa fa-linkedin"></a></th>
           <th id="hd"></th>
           <th id="hd"></th>
           <th id="hd"></th>
           <th id="h"><a href="#home">Home</a></th>
           <th id="h"><a href="#edu">Education</a></th>
           <th id="h"><a href="#skill">Skills</a></th>
           <th id="h"><a href="#edu">Experience</a></th>
           <th id="h"><a href="#Project">Projects</a></th>
           <th id="h"><a href="#cert">Certifications</a></th>
           <th id="h"><a href="#Acheive">Acheivements</a></th>

           </tr>
           </table>  
       </div>
       <div id="home">
           <div className="column right">
             <center>
             <p className="animate__animated animate__pulse"><h2>Hello,</h2><b>"My Name is Saketh. Iam currently a 
               Computer Science and Engineering student at Ramaiah Institute of Technology,Bengaluru,Karnataka."</b>
             </p>
             </center>
           </div>
       </div>
       <div id="edu">
       <h1>Education</h1>
            <Education/>
           
       </div>
       <div id="skill">
       <h1>Skills</h1>
           <center>
            <Skills/>
            </center>
       </div>
       <div id="Project">
       <h1>Projects</h1>
            <Projects/>
       </div>
       <div id="cert">
       <h1>Certifications</h1>
           <center>
            <Certifications/>
            </center>
       </div>
       <div id="Acheive">
       <h1>Acheivements</h1>
       <center>
            <Acheivements/>
            </center>
       </div>
    </div>
  );
}

export default App;
