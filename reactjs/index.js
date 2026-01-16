const rootEl = document.getElementById("root-element")

const reactDom = ReactDOM.createRoot(rootEl)

const Resume = () => {
  return (
    <div>
      <div className="body-container">
        <nav id="nav-bar">
          <h2>RESUME</h2>
        </nav>
        <div className="data-div">
          <h1>Samandeep Kaur</h1><br></br>
          <p>Aspiring Web Developer | Student</p><br></br>
          <p>Email:kaursaman242@gmail.com | Phone: +91 7657827262</p>

          <div className="line-div"></div>

          <div className="about-me">
            <h3>About Me</h3>
            <p>I am a passionate student learning web development.I love building simple, <br></br>responsive website and exploring new technoloies.</p>

            <div className="line-div"></div>

            <div className="Education">
              <h3>Education</h3>
              <ul>
                <li>12th Grade(PSEB),2025</li>
                <li>Stream: Commerce</li>
              </ul><br></br>

              <div className="line-div"></div>

              <div className="skills">
                <h3>Skills</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul><br></br>

                <div className="line-div"></div>

                <div className="projects">
                  <h3>Projects</h3>
                  <ul>
                    <li>Pet Adoption Website</li>
                    <li>Personal Portfolio Site</li>
                  </ul><br></br>

                  <div className="line-div"></div>

                  <div className="hobbies">
                    <h3>Hobbies</h3>
                    <p>Designing, Reading, Music</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

reactDom.render(<Resume />)

// reactDom.render(

// )