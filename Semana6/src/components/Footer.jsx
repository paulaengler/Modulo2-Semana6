import '../components/Footer.css'

function Footer() {
    return (
        <div className="footer">

            <div className="footer-container">
            
            
            <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" width="136" height="32" alt="Bikcraft"></img>
            
            
            <div className='footer-contato'>
            <h3>CONTATO</h3>
            <ul className="contato-dados">
            <li><a href="tel:+552199999999">+55 21 9999-9999</a></li>
            <li><a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a></li>
            <li>Rua Ali Perto, 42 - Botafogo</li>
            <li>Rio de Janeiro - RJ</li>
            </ul>

            <div className="footer-redes">
            <a href="./"><img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg" alt="Instagram"></img></a>
            <a href="./"><img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg" alt="Facebook"></img></a>
            <a href="./"><img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg"  alt="Youtube"></img></a>
            </div>

            </div>                

            
            <div className='footer-informacoes'> 
            <h3>INFORMAÇÕES</h3>
            <nav>
            <ul>           
                <li>Bicicletas</li>
                <li>Seguros</li>
                <li>Contato</li>
                <li>Termos e Condições</li>
            </ul>
            </nav>
            </div>
           
            

            </div>

            <p>Bikcraft © Alguns direitos reservados.</p>
        </div>
    )
}

export default Footer