import './Header.css';
import logo from '../../img/Logo Mob.svg'


const Header = () => {

    return (

        <div className='Header'>
            <header>
                <nav>
                    <div className='headLeft'>
                        <i class="fa-solid fa-bars"></i>
                        <img src={logo} alt="Logo" />
                        <span>143</span>
                        <i class="fa-sharp fa-solid fa-phone-volume"></i>
                    </div>

                    <div className='headRight'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-brands fa-shopify"></i>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;