import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FullLogo from '../../../assets/images/example.png';

export const Navigation = (props) => {

    const buttonStyle = {
        textDecoration: 'none'
    };

    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <Link to={"/"} >
                        <img src={FullLogo} />
                    </Link>
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <Link to="/accounts" style={buttonStyle}>Accounts</Link>
                            <ul>
                                <li>
                                    <Link to={"/accounts/bankAccounts"} style={buttonStyle}>Bank Accounts</Link>
                                </li>
                                <li>
                                    <Link to={"/accounts/creditCards"} style={buttonStyle}>Credit Cards</Link>
                                </li>
                                <li>
                                    <Link to={"/accounts/cash"} style={buttonStyle}>Cash</Link>
                                </li>
                                <li>
                                    <Link to={"/accounts/investments"} style={buttonStyle}>Investments</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/budgets" style={buttonStyle}>Budgets</Link>
                        </li>
                        <li>
                            <Link to="/reports" style={buttonStyle}>Reports</Link>
                        </li>
                        <li>
                            <Link to="/contact" style={buttonStyle}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navicon" onClick={() => { props.toggleMobileNav() }}>
                    <a>
                        <i className="fas fa-bars" />
                        <span>Menu</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

Navigation.propTypes = {
    toggleMobileNav: PropTypes.func
}
