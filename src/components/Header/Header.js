import React, { useState } from 'react';
import { Navigation } from "./Navigation/Navigation";
import { MobileNavigation } from "./MobileNavigation/MobileNavigation";
import './Header.css';

export const Header = (props) => {

    const [mobileNavToggle, setMobileNavToggle] = useState(false);

    function toggleMobileNav() {
        setMobileNavToggle(!mobileNavToggle);
        document.body.classList.toggle("lock");
    }

    return (
        <div id="header">
            <Navigation toggleMobileNav={toggleMobileNav}></Navigation>
            <MobileNavigation
                mobileNavToggle={mobileNavToggle}
                toggleMobileNav={toggleMobileNav}
            ></MobileNavigation>
        </div>
    );
}

