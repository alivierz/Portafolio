import './presentacion.css';
import Descrip from './descripcion/descripcion';
import Cartel from './cartel/cartel';
const Presentacion = ()  =>{
    return(
        <section className="seccion-me" id='seccion-me'>
            <Cartel/>
            <Descrip/>
        </section>
    )
}
export default Presentacion;