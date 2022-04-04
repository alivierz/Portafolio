import ImgProyectos from "./img-proyectos/imgProyectos"
import './proyectos.css'


const Proyectos = () => {
    
    const links = [{title: 'Quotes Generator', link: 'https://i.imgur.com/YAGEDIC.png'}, {title: 'Insta Pets', link: 'https://i.imgur.com/3Ot0Sm8.png'},{title: 'Gamer Store', link: 'https://i.imgur.com/305xCyQ.png'},{title: 'App Cloud', link: 'https://i.imgur.com/MqpSLrZ.png'}]
    const list = links.map((item) => <ImgProyectos  title={item.title} link={item.link} key={item.title}/>)
    
    //<ImgProyectos link={links} title={title[0]}/>
    return(
        <section className="grid" id="proyectos">
            {list}
        </section>
    )
}
export default Proyectos