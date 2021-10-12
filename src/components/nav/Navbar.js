import { useState } from 'react';

import NavButton from "./NavButton";
import NavItemContainer from "./NavItemContainer";

const Navbar = () => {
    const [active, setActive] = useState(false); 

    const toggleNav = () => {
        setActive(!active);
    }

    return ( 
        <div className="navbar">
            <NavButton 
                active={ active }
                onClick={ toggleNav }
            />
            { active && <NavItemContainer /> } 
        </div>
     );
}
 
export default Navbar;