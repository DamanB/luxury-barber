import IconButton from "./IconButton";
import logo from 'assets/icons/instagram.png'

const InstagramIconButton = (props) => {
    const {
        link = 'https://www.instagram.com/'
    } = props;

    return ( 
        <div className="instagramIconButton">
            <IconButton 
                    link={link}
                    src={logo}
                    alt='Link to Instagram'
            />
        </div>
     );
}
 
export default InstagramIconButton;