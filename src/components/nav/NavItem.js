const NavItem = (props) => {
    const {
        text,
        link
    } = props; 
    
    return ( 
        <div className='navItem'>
            <a href={ link }>{ text }</a>
        </div>
     );
}
 
export default NavItem;