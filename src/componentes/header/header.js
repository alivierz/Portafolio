import Info from "./Info/info";
import Experiencia from "./Experiencia/experiencia";
import Nav from "./Nav/nav";
import './header.css'

const Header = () =>{
    return(
        <header className="header">
        <Nav/>
        <div className="presentation">
            <Info/>
            <Experiencia/>
        </div>
        </header>
    )
}
export default Header;