import './App.css'
import { downloadIcon, linkedinIcon, githubIcon, reactIcon, typescriptIcon, postgresqlIcon, dockerIcon, CSS3Icon, javaIcon, AWSIcon, gitIcon, menuIcon, } from './assets/img/icons'
import { AboutmeSection, ProjectsSection, CertificationsSection, SkillSection, FooterSection } from './components'
import meIcon from './assets/svg/me-icon.png'
import { FadeIn } from './motion/MotionWrapper';

function App() {
  const techIcons = [
    { src: reactIcon, alt: "react" },
    { src: typescriptIcon, alt: "ts-svg" },
    { src: AWSIcon, alt: "AWS-svg" },
    { src: dockerIcon, alt: "docker-svg" },
    { src: CSS3Icon, alt: "CSS3-svg" },
    { src: javaIcon, alt: "java-svg" },
    { src: postgresqlIcon, alt: "postgreSQL-svg" },
    { src: gitIcon, alt: "git-svg" },
  ];
  return (
    <>
      <div id="app-root">
        <div id="content-wrapper">
          <nav className='navbar-menu'>
            <div className="container-menu">
              <img src={menuIcon} alt="" className='menu-icon' />
              <div className="me-container">
                <img src={meIcon} alt="img" className='me' />
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
                <a href="https://www.linkedin.com/in/luis-contreras-9b248436a/" target="_blank">
                  Linkedin
                  <img src={linkedinIcon} alt="linkedin-svg" className='socialIcons' />
                </a>
                <a href="https://github.com/luinzv" target="_blank">
                  Github
                  <img src={githubIcon} alt="github-svg" className='socialIcons' />
                </a>
              </div>
              <footer className='tech-stack'>
                {techIcons.map((icon, i) => (
                  <FadeIn key={icon.alt} delay={i * 0.1}>
                    <img src={icon.src} alt={icon.alt} className='tech-icons' />
                  </FadeIn>
                ))}
              </footer>
            </header>
          </section>

          <ProjectsSection />
          <AboutmeSection />
          <CertificationsSection />
          <SkillSection />
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default App
