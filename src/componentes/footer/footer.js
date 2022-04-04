import './footer.css'
const Footer = () =>{
    return(
        <footer className="footer" id="footer">
            <div className='email'>
                <h3>Correo</h3>
                <a href="mailto:alejandroalivier20@gmail.com" target={'_blank'}>Gmail</a>
            </div>
            <p className='copy'>Create in Academlo by Alivier Zapata &copy;</p>
        </footer>
    )
}

export default Footer;