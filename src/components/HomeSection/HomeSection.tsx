import './HomeSection.css'
import { FadeIn } from '../../motion/MotionWrapper';
import { downloadIcon, linkedinIcon, githubIcon, AWSIcon, CSS3Icon, dockerIcon, gitIcon, postgresqlIcon, reactIcon, typescriptIcon } from '../../assets/img/icons'

export const HomeSection = () => {

    const techIcons = [
        { src: reactIcon, alt: "react" },
        { src: typescriptIcon, alt: "ts-svg" },
        { src: AWSIcon, alt: "AWS-svg" },
        { src: dockerIcon, alt: "docker-svg" },
        { src: CSS3Icon, alt: "CSS3-svg" },
        { src: postgresqlIcon, alt: "postgreSQL-svg" },
        { src: gitIcon, alt: "git-svg" },
    ];

    return (
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
    )
}
