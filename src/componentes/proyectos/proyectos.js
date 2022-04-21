import ImgProyectos from "./img-proyectos/imgProyectos"
import './proyectos.css'


const Proyectos = () => {
    
    const links = [{title: 'Quotes Generator', link: 'https://i.imgur.com/YAGEDIC.png', url: 'https://quotes-generator-alivier.netlify.app/'}, 
    {title: 'Insta Pets', link: 'https://i.imgur.com/3Ot0Sm8.png', url: 'https://insta-clon-alivier.netlify.app/'},
    {title: 'Gamer Store', link: 'https://i.imgur.com/305xCyQ.png', url: 'https://alivier-jode-mucho.netlify.app/'},
    {title: 'App Cloud', link: 'https://i.imgur.com/MqpSLrZ.png', url: 'https://appclimaalivier.netlify.app/'}]
    const list = links.map((item) => <ImgProyectos  title={item.title} link={item.link} key={item.title} url={item.url}/>)
    
    //<ImgProyectos link={links} title={title[0]}/>
    return(
        <section className="grid" id="proyectos">
            {list}
        </section>
    )
}
export default Proyectos