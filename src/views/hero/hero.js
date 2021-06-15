import './hero.css'
import Logo from '../../assets/img/logo-white.png'

import Button from '../../components/button/button.js'
import ArcText from '../../components/arcText/ArcText.js'

const hero = () => {
    return ( 
        <div className="Hero">
                <div className="overlay"> </ div>
                <div className="bg-image"></div>
            <header>
                <img src={Logo} alt="" />
                <ArcText text="LUXURY" />
                <h2>- BARBER SHOP -</h2>
                <Button text="BOOK AN APPOINTMENT" />
            </header>
        </div> 
    );
}
 
export default hero;