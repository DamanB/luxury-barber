import Header1 from "layout/headers/Header1";
import Image1 from 'assets/img/aboutus/squared_image_1.png';
import Image2 from 'assets/img/aboutus/squared_image_2.png';

const AboutUs = () => {
    return ( 
        <div id="aboutUs">
            <Header1 text='About Us' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae tempore dolores quaerat dolor eligendi accusantium sed, inventore tempora autem temporibus ducimus numquam odit minima sint suscipit exercitationem distinctio asperiores reprehenderit aliquid dignissimos optio illum adipisci? Sint nemo provident esse!</p>
            <p>- The Luxury Team</p>
            <div className='imageContainer'>
                <img className='center_squared' src={ Image1 } alt='barber shop seats' />
                <img className='center_squared' src={ Image2 } alt='man having a beard shave line up' />
            </div>
            
        </div>
     );
}
 
export default AboutUs;