//Barra de navagação fixa no topo da página
import './style.css';

function Navbar(){
    return(
        <nav className="navbar">

            <div className="container">
                <a href="#" className="logo">EduTrack</a>

                <ul className="list-menu">
                    <li><a className="link" href="#sobre">Sobre</a></li>
                    <li><a className="link" href="#funcionalidades">Funcionalidades</a></li>
                    <li><a className="link" href="#equipe">Equipe</a></li>
                    <li><a className="link" href="#contato">Contato</a></li>
                </ul>

                <div>
                    <button className="btnLogin">Login</button>
                    <button className="btnCadastro">Começar agora</button>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;