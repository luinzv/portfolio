import { discordIcon, githubIcon, instagramIcon, linkedin2Icon, mailIcon } from '../../assets/img/icons'
import './FooterSection.css'

export const FooterSection = () => {
  return (
    <footer className='footer-footer'>
        <div className="container">
            <div className="footer-info">
                <a href="" className='contact-email'>
                    <img src={mailIcon} alt="" />
                    Contacto
                </a>
                <p>Developed by Luis Contreras</p>
            </div>
            <ul className="ancors-container">
                <li><a href="#" target="_blank"><img src={linkedin2Icon} alt="" /></a></li>
                <li><a href="#" target="_blank"> <img src={githubIcon} alt="" /></a></li>
                <li><a href="#" target="_blank"> <img src={discordIcon} alt="" /></a></li>
                <li><a href="#" target="_blank"> <img src={instagramIcon} alt="" /></a></li>
            </ul>
        </div>
    </footer>
  )
}
