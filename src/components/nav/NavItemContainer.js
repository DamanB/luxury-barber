import NavItem from './NavItem';
import NavItemContainerFooter from './NavItemContainer.Footer';

const NavItemContainer = (props) => {
    const NavLinks = [
        { text: 'Book and Appointment', link: '#'},
        { text: 'About ', link: '#aboutUs'},
        { text: 'Services ', link: '#'},
        { text: 'Contact ', link: '#'},   
      ];

    return ( 
        <div className="navItemContainer">
            {NavLinks?.map((item, index) => 
                <NavItem text={ item.text } link={ item.link } key={ index }/>
            )}
            <NavItemContainerFooter />
        </div>
     );
}
 
export default NavItemContainer;