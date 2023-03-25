import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FullLogo from '../../../assets/images/example.png';

export const MobileNavigation = (props) => {

    const [testToggle, setTestToggle] = useState(false);

    const buttonStyle = {
        textDecoration: 'none'
    };

    return (
        <div className="mobile-nav" style={{ display: props.mobileNavToggle ? 'block' : 'none' }}>
            <div className="mobile-nav-overlay" onClick={() => { props.toggleMobileNav() }} />
            <div className="mobile-nav-inner">
                <div className="close-mobile-nav" onClick={() => { props.toggleMobileNav() }}>
                    <a>
                        <i className="fas fa-times" />
                    </a>
                </div>
                <div className="logo">
                    <Link to={"/"} >
                        <img src={FullLogo} />
                    </Link>
                </div>
                <ul>
                    <li className="has-sub">
                        <a onClick={() => { setTestToggle(!testToggle) }}>
                            <i className="fas fa-folder" /> Accounts
                        </a>
                        <ul style={{ display: testToggle ? 'block' : 'none' }}>
                            <li>
                                <Link to={"/accounts/bankAccounts"} style={buttonStyle}>
                                    Bank Accounts
                                </Link>
                            </li>
                            <li>
                                <Link to={"/accounts/cash"} style={buttonStyle}>
                                    Cash
                                </Link>
                            </li>
                            <li>
                                <Link to={"/accounts/creditCards"} style={buttonStyle}>
                                    Credit Cards
                                </Link>
                            </li>
                            <li>
                                <Link to={"/accounts/investments"} style={buttonStyle}>
                                    Investments
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={"/budgets"} style={buttonStyle}>
                            <i className="fas fa-home" /> Budgets
                        </Link>
                    </li>
                    <li>
                        <Link to={"/reports"} style={buttonStyle}>
                            <i className="fas fa-home" /> Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"} style={buttonStyle}>
                            <i className="fas fa-home" /> Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

MobileNavigation.propTypes = {
    mobileNavToggle: PropTypes.bool,
    toggleMobileNav: PropTypes.func
}