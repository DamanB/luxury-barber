import Logo from 'assets/img/logo-white.png'

import TextButton from 'components/Buttons/textButton/textButton'
import ArcText from 'components/arcText/ArcText'

const Hero = () => {
    return ( 
        <div id="Hero">
                <div className="overlay"> </ div>
                <div className="bg-image"></div>
            <header>
                <img src={Logo} alt="" />
                <ArcText text="LUXURY" />
                <h2>- BARBER SHOP -</h2>
                <TextButton text="BOOK AN APPOINTMENT" />
            </header>
        </div> 
    );
}
 
export default Hero;