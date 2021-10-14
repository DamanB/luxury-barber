const NavButton = (props) => {    
    const { 
        active, 
        onClick 
    } = props;

    return ( 
        <div className="navButton" onClick={ onClick }>
            <div className={ active ? 'change' : ''}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    );
}
 
export default NavButton;