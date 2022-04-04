import './skill.css'
const Skill = ({icon , p, titulo}) =>{
    return(
        <div className="contenido-skills">
            <div className="icono-skil">
                {icon}
            </div>
            <h2 className='titulo-skill'>{titulo}</h2>
            <p className="parrafo-skill">
                {p}
            </p>
        </div>
    )
}

export default Skill;