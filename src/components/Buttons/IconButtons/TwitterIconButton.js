import IconButton from "./IconButton";
import logo from 'assets/icons/twitter.png'

const TwitterIconButton = (props) => {
    const {
        link = 'https://twitter.com/'
    } = props;

    return ( 
        <div className="twitterIconButton">
            <IconButton 
                    link={link}
                    src={logo}
                    alt='Link to Twitter'
            />
        </div>
     );
}
 
export default TwitterIconButton;