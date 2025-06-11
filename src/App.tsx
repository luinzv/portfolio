import './App.css'
import { downloadIcon, linkedinIcon, githubIcon, reactIcon, typescriptIcon, postgresqlIcon, dockerIcon, CSS3Icon, javaIcon, AWSIcon, gitIcon, menuIcon,} from './assets/img/icons'
import { AboutmeSection, ProjectsSection, CertificationsSection, SkillSection, FooterSection } from './components'
import meIcon from './assets/svg/me-icon.png'

function App() {

  return (
    <>
      <div id="app-root">
        <div id="content-wrapper">
          <nav className='navbar-menu'>
            <div className="container-menu">
              <img src={menuIcon} alt="" className='menu-icon'/>
              <div className="me-container">
                <img src={meIcon} alt="img" className='me'/>
                <div className="me-text">
                  <p className='name'>Luis Contreras</p>
                  <p className='profession'>Software Enginner</p>
                </div>
              </div>
              <ul className='sections'>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#mis-proyectos">Proyectos</a></li>
                <li><a href="#sobre-mi">Sobre mi</a></li>
                <li><a href="#mis-certificaciones">Certificaciones</a></li>
                <li><a href="#mis-skills">Skills</a></li>
              </ul>
            </div>
          </nav>
          <section className='home' id='home'>
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
