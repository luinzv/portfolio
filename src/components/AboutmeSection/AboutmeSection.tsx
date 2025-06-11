import './AboutmeSection.css'

export const AboutmeSection = () => {
    return (
        <section className='About-me' id='sobre-mi'>
            <div className="about-container">
                <header className='header-about'>
                    <h3>SOBRE MÍ</h3>
                    <h2>Luis Contreras</h2>
                </header>

                <div className="about">
                    <div className="about-text">
                        <p> Desarrollador en formación interesado en aplicaciones en la nube y arquitecturas de microservicios,
                            con especial enfoque en el stack de React. </p>
                        <p> Estudio Ingeniería Civil Informática y actualmente me encuentro ampliando mis conocimientos en desarrollo web y tecnologías en la nube. </p>
                        <p> Tengo 21 años y resido en Valparaíso, Chile. </p>
                    </div>

                    <div className="studies-container">
                        <div className="study-card">
                            <h3>Ingeniero Civil Informático</h3>
                            <p className='study-text'>Actualmente estudiando en la Universidad de Playa Ancha</p>
                            <p className='study-text'> 22 marzo 2022 - Actualmente</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
