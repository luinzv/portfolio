import './CertificationsSection.css'
import { arrowup } from '../../assets/img/icons'

export const CertificationsSection = () => {
  return (
    <section className='section-certifications' id='mis-certificaciones'>
      <div className="certifications-container">
        <header className='certifications-header'>
          <h3>CERTIFICACIONES</h3>
          <div className="certifications">
            <div className="certification">
              <h3>Microservicios, Docker & Kubernetes</h3>
              <a href="#">
                <p>Certificado de aprobacion de Microservicios, Docker & Kubernetes
                  <img src={arrowup} alt="" className='arrow-up'/>
                </p>
              </a>
            </div>
            <div className="certification">
              <h3>Microservicios, Docker & Kubernetes</h3>
              <a href="#">
                <p>Certificado de aprobacion de Microservicios, Docker & Kubernetes
                  <img src={arrowup} alt="" className='arrow-up'/>
                </p>
              </a>
            </div>
          </div>
        </header>
      </div>
    </section>
  )
}
