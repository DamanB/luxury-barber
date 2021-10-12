const NavButton = (props) => {    
    const { 
        active, 
        onClick 
    } = props;

    return ( 
        <div className="navButton" onClick={ onClick }>
            <div className={ active ? 'change' : ''}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
    );
}
 
export default NavButton;