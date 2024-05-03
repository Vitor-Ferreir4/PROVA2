import'../css/footer.css'

function Footer(){
    return(
        <footer className="footer">
            <div  className='footer-itens'>
                <img src={require('../assets/SESI.png')} width={120} className='sesi'/>
                <p className="texto-footer">&copy; Todos os Direitos reservados ao povo do 3°/Informática para Internet</p>
                <p className="text-footer">Contato: osmelhores@sessenai.com</p>
            </div>
        </footer>
    )
}

export default Footer;