import './hero.css'
import Logo from '../../assets/img/logo-white.png'

import Button from '../../components/button/button.js'

const hero = () => {
    return ( 
        <div className="Hero">
                <div className="overlay"> </ div>
                <div className="bg-image"></div>
            <header>
                <img src={Logo} alt="" />
                <h1>LUXURY</h1>
                <h2>- Barber Shop -</h2>
                <Button text="BOOK AN APPOINTMENT" />
            </header>
        </div> 
    );
}
 
export default hero;