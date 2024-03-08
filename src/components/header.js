import {Link} from 'react-router-dom';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Header(){
    return (
        <header className='header'>
            <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                <button className="btn btnSectionTopo">
                    <Link to="/"> <h1>❄ Receitas de Gelo🧊</h1></Link>
                </button>               
                <button className="btn btnSectionTopo">
                    <Link to="/novo"><h2> Adicionar! 🏂</h2></Link>
                </button>
            </div>        
        </header>
    );
}

export default Header;