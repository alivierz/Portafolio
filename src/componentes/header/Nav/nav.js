import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './nav.css';
import { useState } from 'react';
const Nav = ()  =>{
    //estado menu
    const [menu , setMenu] = useState('elementos-nav-inicial')
    /* Funcion de animacion menu*/
    const menuMovil = () =>{
        if(menu === 'elementos-nav-inicial'){ // inicio sin nada
            setMenu('elementos-nav')
        }else if(menu === 'elementos-nav'){
            setMenu('elementos-nav-none') // despliegue
            
        }else{
            setMenu('elementos-nav') // despliegue opcional
        }
    }
    return(
        <nav className="navegacion">
            <FontAwesomeIcon icon={faBars} className='color' onClick={() => menuMovil()}/>
            <div className={menu}>
                <a href="#seccion-me">Acerca de mi</a>
                <a href="#skills">Mis habilidades</a>
                <a href="#proyectos">Mi portafolio</a>
                <a href="#footer">Contacto</a> 
            </div>
        </nav>
    )
}
export default Nav;