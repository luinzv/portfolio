import './App.css'
import { downloadIcon, linkedinIcon, githubIcon, reactIcon, typescriptIcon, postgresqlIcon, dockerIcon, CSS3Icon, javaIcon, AWSIcon, gitIcon, menuIcon,} from '../src/assets/img/icons'
import { AboutmeSection, ProjectsSection, CertificationsSection, SkillSection, FooterSection } from './components'


function App() {

  return (
    <>
      <div id="app-root">
        <div id="content-wrapper">
          <nav className='navbar-menu'>
            <div className="container-menu">
              <img src={menuIcon} alt="" className='menu-icon'/>
            </div>
          </nav>
          <section className='home'>
            <header className='header-container'>
              <a href="#" className='download'>
                <img src={downloadIcon} alt="svg-download" className='svg-download' />
                <span>Descargar CV</span>
              </a>
              <h1> Software Enginner</h1>
              <h2>Luis Contreras</h2>
              <h3>Full Stack React & Microservices</h3>
              <div className="ancor-container">
                <a href="#">
                  Linkedin
                  <img src={linkedinIcon} alt="linkedin-svg" className='socialIcons' />
                </a>
                <a href="#">
                  Github
                  <img src={githubIcon} alt="github-svg" className='socialIcons' />
                </a>
              </div>
              <footer className='tech-stack'>
                <img src={reactIcon} alt="react" className='tech-icons' />
                <img src={typescriptIcon} alt="ts-svg" className='tech-icons'/>
                <img src={AWSIcon} alt="AWS-svg" className='tech-icons'/>
                <img src={dockerIcon} alt="docker-svg" className='tech-icons'/>
                <img src={CSS3Icon} alt="CSS3-svg" className='tech-icons'/>
                <img src={javaIcon} alt="java-svg" className='tech-icons'/>
                <img src={postgresqlIcon} alt="postgreSQL-svg" className='tech-icons'/>
                <img src={gitIcon} alt="git-svg" className='tech-icons'/>
              </footer>
            </header>
          </section>

          <ProjectsSection/>
          <AboutmeSection/>
          <CertificationsSection/>
          <SkillSection/>
          <FooterSection/>
        </div>
      </div>
    </>
  )
}

export default App
