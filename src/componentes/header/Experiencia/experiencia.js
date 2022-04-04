import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare , faGithub , faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './experiencia.css'


const Experiencia = ()  =>{
    return(
        <div className="contenido-side">
            <h3 className="titulo">Redes Sociales</h3>
            <div className="redes">
                <a href="https://twitter.com/AlivierZ" className='iconos' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare}  /></a>
                <a href="https://github.com/alivierz" className='iconos' target={'_blank'} rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /> </a>
                <a href="https://www.linkedin.com/in/alivier-zapata-b15a31203/" className='iconos' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>  
        </div>
    )
}
export default Experiencia;