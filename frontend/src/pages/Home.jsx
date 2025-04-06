// Home.jsx
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
       <h1 class="head">Learn More About Me!</h1>
      {/* Intro Section */}
      <section className="section light">
        <div className="content left">
          <h2>Current Position</h2>
          <ul>
            <li>Software Engineer at <strong>Rakuten Group Inc. Tokyo, Japan</strong>.</li>
            <li>Email ID: <a href="mailto:hlvcse@gmail.com">hlvcse@gmail.com</a></li> 
            <li>GitHub: <a href="https://github.com/hlvcse">https://github.com/hlvcse</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/hlvcse">https://linkedin.com/in/hlvcse</a></li>
            <li>Contact: +918287648766(Whatsapp Only), +817083110880(Call)</li>
          </ul>
        </div>
        <div className="image right">[Image Here]</div>
      </section>

      {/* Education Section */}
      <section className="section blue">
        <div className="content left">
          <h2>Educational Qualifications</h2>
          <ul>
            <li><strong>M.Tech(CSE)</strong> from <strong>IIT Ropar</strong>, CGPA : 7.38/10, Year:2021-23</li>
            <li><strong>B.Tech(CSE)</strong> from <strong>NIT Manipur</strong>, CGPA : 8.41/10, Year:2015-19</li>
            <li>Intermediate(Class 12th), PCM- UP Board, Percentage:83.20%, Year:2013</li>
            <li>Highschool(Class 12th), Science- UP Board, Percentage:77.50%, Year:2011</li>
          </ul>
        </div>
        <div className="image right">[Image Here]</div>
      </section>

      {/* Skills Section */}
      <section className="section light">
        <div className="content left">
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Programming Languages:</strong> C, C++, Python, SQL</li>
            <li><strong>Libraries & Frameworks:</strong> NumPy, Pandas, Matplotlib, Seaborn, SciPy, Scikit-learn, PyTorch, TensorFlow</li>
            <li><strong>DevOps & Cloud Tools:</strong> Linux, Azure, Jenkins, Docker, Kubernetes, Git, GitHub</li>
            <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React.js, Flask, Firebase</li>
            <li><strong>Domains & Expertise:</strong> Machine Learning, Deep Learning, DevOps, Web Development</li>
            </ul>
        </div>
        <div className="image right">[Image Here]</div>
      </section>

      {/* Experience Section */}
      <section className="section blue">
        <div className="content left">
          <h2>Working Experience</h2>
          <h3>DevOps Engineer – Rakuten Group Inc. Tokyo, Japan</h3>
          <ul>
            <li>Jan 2024 – Present</li>
            <li>Resposibilities: Managing Linux servers, Server Creation, Server Decommissioning, SSL certficate create/renew, Disk Resize Request, Cookbook Update, etc.</li>
            <li>Tools& Technologies: Python, Linux, Azure, KQL, Chef, Ruby, Jenkins, Docker, Kubernetes, Jira, Confluence, DOMO- Data Visualization.</li>
            </ul>
        </div>
        <div className="image right">[Image Here]</div>
      </section>

      {/* Internship Section */}
      <section className="section light">
        <div className="content left">
          <h2>Internship Project</h2>
          <h3>Human Posture Detection – MNNIT Allahabad</h3>
          <ul>
            <li>May–July 2018</li>
            <li>Built human classifiers using HOG features and SVM, implemented real-time detection system to detect human in any input image.</li>
            <li>Tools& Technologies: Python, OpenCV, Scikit-learn, Matplotlib, Machine Learning, Image Processing, Computer Vision.</li>
            </ul>
        </div>
        <div className="image right">[Image Here]</div>
      </section>

      
      <h1 class="project-head">Major Projects</h1>
      {/* Projects Section */}
      <section className="project-section">
        <div className="project-left">
          <h2>1. End to End Website - IITJEE MATHX</h2> 
          <h3>Independently developed and deployed the IITJEE MATHX for my teaching passion.</h3>
          <ul>
            <li>Visit my website: <a href="https://www.iitjeemathx.com/">https://www.iitjeemathx.com/</a></li>
            <li><strong>Tools& Technologies: </strong>HTML, CSS, JavaScript, React.js, Firebase, EmailJS, Versel, Git& Github, namechip.</li>
            <li><strong>Description:  </strong>Designed and deplyed fully end to end website named "IITJEE MATHX" for helping aspirants preparing for iitjee(mains and advance) and similar comeptitive exams. Aspirants will get end-end video tutorials of best quality with PYQ Questions and free of cost. Deployed using versel and purchased domain from namechip for my professional website.</li>
          </ul>
        </div>

        <div className="project-right"> 
            <h2>2. End to End Portfolio Website</h2> 
            <h3>Developed and deployed a personal website as a creative outlet for my interests and projects.</h3>
            <ul>
                <li><strong>Tools& Technologies: </strong>HTML, CSS, JavaScript, React.js, Flask, Versel, Git& Github</li>
                <li><strong>Description:  </strong>Designed and deplyed fully end to edn my portfolio website to include my detailed information about my projects, interests, skills, projects and other details.</li>
            </ul>
        </div>   
      </section>

      <section className="project-section">
        <div className="project-left">
          <h2>3. Create an ADX Alert and integrate it to PagerDuty</h2> 
          <h3>Rakuen Group Inc. Tokyo, Japan</h3>
          <ul>
            <li><strong>Tools& Technologies: </strong>Kusto Query Language(KQL), Azure, ADX, PagerDuty</li>
            <li><strong>Description:  </strong>Creating a Custom Log Search-Based Azure Monitor Alert for Azure Data Explorer(ADX) and Integrate to PagerDuty for
            automated incident notifications and management.</li>
          </ul>
        </div>

        <div className="project-right"> 
            <h2>4. Graph Sparsification for Dynamic Matching</h2> 
            <h3>IIT Ropar, M.Tech(CSE) Thesis Research Project</h3>
            <ul>
                <li><strong>Tools& Technologies: </strong>Dynamic Graph data structure, Dynamic maximum matching Problem, Splay Tree, C/C++</li>
                <li><strong>Description:  </strong>Designed a new deterministic graph sparsification algorithm for dyanamic fractional matching without loosing much on
                size of fractional matching. Also implemented using C/C++ and tested on both small and large sample of graph.</li>
            </ul>
        </div>   
      </section>

      {/* footer */}
      <footer className="footer">
        <div className="footer-content">
            <div className="footer-links"> 
            <a href="https://github.com/hlvcse" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/hlvcse/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:hlvcse@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://www.instagram.com/_nvhlv/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/hanumatlal.vishwakarma.3" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} Portfolio - Hanumat Lal Vishwakarma. All rights reserved.</p>
        </div>
        </footer>
    </div>
  );
}

export default Home;
