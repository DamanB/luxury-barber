import InstagramIconButton from "components/Buttons/IconButtons/InstagramIconButton";
import TwitterIconButton from "components/Buttons/IconButtons/TwitterIconButton";

const NavItemContainerFooter = () => {
    return ( 
        <div className="navItemContainerFooter">
            <div className="links">
                <TwitterIconButton link='https://twitter.com/'/>
                <InstagramIconButton link='https://www.instagram.com/'/>
            </div>
        </div>
    );
}
 
export default NavItemContainerFooter;