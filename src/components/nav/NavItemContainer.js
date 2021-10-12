import NavItem from './NavItem';

const NavItemContainer = (props) => {
    const NavLinks = [
        { text: 'Book and Appointment', link: '#'},
        { text: 'About ', link: '#'},
        { text: 'Services ', link: '#'},
        { text: 'Contact ', link: '#'},   
      ];

    return ( 
        <div className="navItemContainer">
            {NavLinks?.map((item, index) => 
                <NavItem text={ item.text } link={ item.link } key={ index }/>
            )}
        </div>
     );
}
 
export default NavItemContainer;