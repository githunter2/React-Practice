import './Footer.css';

import Visa from '../../img/visa-pay-logo.svg'
import MasterCard from '../../img/mastercard.svg'

const Footer = () => {
    return (
        <div className='Footer'>

            <div className="sosial">
                <h4>Ödəniş:</h4>
                <div className='cards'>
                    <img src={Visa} alt="Visa" />
                    <img src={MasterCard} alt="MasterCard" />
                </div>

                <h4>Bizə qoşulun:</h4>
                <div className='sosMedia'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>

                <p style={{ color: '#fff', fontSize: '14.2px', margin: '100px 0 0 15px' }}>© 2018 - 2023 bakuelectronics.az
                    Məxfilik siyasəti</p>
            </div>

            <div className="info">
                <h2>Məlumat mərkəzi</h2>
                <p>9:00 - 20:00 (hər gün)</p>

                <div className='mail'>
                    <div className='number'>
                        <i class="fa-sharp fa-solid fa-phone-volume"></i>
                        <h1>143</h1>
                    </div>
                    <p>info@bakuelectronics.az</p>
                </div>

                <div style={{ margin: '70px 0 0 0px' }}>
                    <p>Saytın hazırlanması</p>
                    <h3 style={{marginLeft:'20px'}}>Турум-бурум</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;