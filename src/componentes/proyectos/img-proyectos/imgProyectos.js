import './imgproyectos.css'

const ImgProyectos = ({title, link, url}) =>{
    return(
        <div >
            <div className='cont-img'>
                <a href={url} target='_blank'  rel="noreferrer"><img src={link} alt="img" className='img'/></a>
            </div>
            <h3 className='title-img'>{title}</h3>
        </div>
    )
}

export default ImgProyectos;