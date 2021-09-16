import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div id="top_bar">
         <table>
           <tr>
           <th id="hd"><a href="https://github.com/saketh395" class="fa fa-github" title="Github"></a></th>
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
             <p ><h2>Hello,</h2><b>"My Name is Saketh. Iam currently a 
               Computer Science and Engineering student at Ramaiah Institute of Technology,Bengaluru,Karnataka."</b>
             </p>
             </center>
           </div>
       </div>
       <div id="edu">
       <h1>Education</h1>
            <table id="table2">
                <tr>
                  <th id="ed"><h3>Bachelor of Engineering (B.E), Computer Science & Engineering</h3></th>
                  <th id="ed"><h3>Senior Secondary <br/>(XII)</h3></th>
                  <th id="ed"><h3>Secondary<br/> (X)</h3></th>
                </tr><br/>
                <tr>
                  <th id="ed">Ramaiah Institute of Technology</th>
                  <th id="ed">Bhashyam Junior College</th>
                  <th id="ed">Sri Chaitanya School</th>
                </tr>
                <tr>
                  <th id="ed">2019-2023</th>
                  <th id="ed">Year of Completion-2019</th>
                  <th id="ed">Year of Completion-2017</th>
                </tr>
                <tr>
                  <th id="ed">CGPA:8.96/10</th>
                  <th id="ed">Percentage:97.2%</th>
                  <th id="ed">CGPA:9.8/10</th>
                </tr>
            </table>
       </div>
       <div id="skill">
       <h1>Skills</h1>
           <center>
            <table id="table2">
                <tr>
                  <th class="sk">C Programming</th>
                  <th class="sk">Java Programming</th>
                </tr>
                <tr>
                  <th class="sk">C++ Programming</th>
                  <th class="sk">Python</th>
                </tr>
                <tr>
                  <th class="sk">HTML</th>
                  <th class="sk">CSS</th>
                </tr>
                <tr>
                  <th class="sk">JavaScript</th>
                  <th class="sk">Algorithms</th>
                </tr>
            </table>
            </center>
       </div>
       <div id="Project">
       <h1>Projects</h1>
            <table id="table4">
                <tr>
                <th id="proj"><h2>Insta Resume</h2><br/>Jun 2021-Jul 2021</th>
                <th id="projdes">On this website, you can build your basic resume. Firstly it asks you the content 
                that needs to be present on your resumes like Personal details, skills, education, work experiences,
                 certifications, and projects. Later it will show you the preview of your resume and a download option 
                 is present to download your resume in PDF format. For this I used HTML, CSS, JAVASCRIPT .</th>
                <th id="proj"><a href="https://saketh395.github.io/insta-resume/">See Project</a></th>
                </tr>
            </table>
       </div>
       <div id="cert">
       <h1>Certifications</h1>
           <center>
            <table id="table3">
                <tr>
                  <th id="ctf">Problem Solving(Basic)<br/>from HACKERRANK</th>
                  <th id="ctf">Introduction to Artificial Intelligence<br/>from COURSERA</th>
                  
                </tr>
                <tr>
                <th id="ctf"><a href="https://www.hackerrank.com/certificates/65462264d306">VIEW CERTIFICATE</a></th>
                <th id="ctf"><a href="https://coursera.org/share/587378177001906e3cbdc04d948df490">VIEW CERTIFICATE</a></th>
                </tr>
            </table>
            </center>
       </div>
       <div id="Acheive">
       <h1>Acheivements</h1>
       <center>
            <table id="table4">
                <tr>
                <th id="ach"><h3>Ideathon 2.0</h3><br/>Winners</th>
               
                <th id="ach"><a href="https://drive.google.com/file/d/1oEh4852rO-YMfJIkyugD7AOadr7nBveT/view?usp=sharing">VIEW CERTIFICATE</a></th>
                </tr>
            </table>
            </center>
       </div>
    </div>
  );
}

export default App;
