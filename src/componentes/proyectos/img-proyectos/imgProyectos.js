import './imgproyectos.css'

const ImgProyectos = ({title, link}) =>{
    return(
        <div >
            <div className='cont-img'>
                <img src={link} alt="img" className='img'/>
            </div>
            <h3 className='title-img'>{title}</h3>
        </div>
    )
}

export default ImgProyectos;