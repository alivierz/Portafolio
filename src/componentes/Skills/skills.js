import Skill from "./skill/skill";
import './skills.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode , faSmile } from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
const Skills = () =>{
    return(
        <section className="skills" id="skills">
            <Skill titulo='Habilidad Front' icon={<FontAwesomeIcon icon={faCode}/>} p='Experiencia en Html Css y Js en animaciones y maquetados ademas de conocimiento en Git'/>
            <Skill titulo='Habilidades Blandas' icon={<FontAwesomeIcon icon={faSmile}/>} p='Manejo del estres, concentracion laboral, trabajo en equipo y atencion al cliente'/>
            <Skill titulo='Lenguajes' icon={<FontAwesomeIcon icon={faJs}/>} p='Manejo de Js y diversas herramientas derivadas de este como React.js y Node.js'/>
        </section>
    )
}
export default Skills;