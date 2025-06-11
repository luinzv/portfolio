import { menuIcon } from '../../assets/img/icons'
import './NavbarMenu.css'
import meIcon from '../../assets/svg/me-icon.png'
import { useEffect, useRef, useState } from 'react'

export const NavbarMenu = () => {
    const [click, setClick] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const menuHandleClick = () => {
        setClick(true);
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setClick(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='navbar-menu'>
            <div className="container-menu">
                {!click && <img src={menuIcon} alt="" className='menu-icon' onClick={menuHandleClick} />}
                <div className="me-container">
                    <img src={meIcon} alt="img" className='me' />
                    <div className="me-text">
                        <p className='name'>Luis Contreras</p>
                        <p className='profession'>Software Engineer</p>
                    </div>
                </div>
                <div
                    className={`mobile-menu ${click ? 'show' : ''}`}
                    ref={menuRef}
                >
                    <ul className='sections-menu'>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#mis-proyectos">Proyectos</a></li>
                        <li><a href="#sobre-mi">Sobre mi</a></li>
                        <li><a href="#mis-certificaciones">Certificaciones</a></li>
                        <li><a href="#mis-skills">Skills</a></li>
                    </ul>
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
    );
}
