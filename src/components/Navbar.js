import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

import Button from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const history = useHistory();
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const closeMobileMenu2 = () => {
        localStorage.removeItem('token');
        history.push('/sign-in')
    };
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        ዜማ፥ግጥም
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/artists' className='nav-links' onClick={closeMobileMenu}>
                                Artists
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/songs' className='nav-links' onClick={closeMobileMenu}>
                                Songs
                            </Link>
                        </li>
                        <li className="nav-item">
                            {!localStorage.getItem('token') ? (
                                (<Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Sign up
                                </Link>
                                )
                            ) : (
                                <Link to="/sign-in" className='nav-links-mobile' onClick={closeMobileMenu2}>
                                    log out
                                </Link>
                            )}
                        </li>
                    </ul>
                    {/* {!localStorage.getItem('token') ? (!button && <Button path='/sign-up' buttonStyle='btn--outline'>SIGN UP</Button>) : (!button && <Button onClick={closeMobileMenu2} buttonStyle='btn--outline'>LOGOUT</Button>)} */}
                    {(!button && <Button path='/sign-up' buttonStyle='btn--outline'>SIGN UP</Button>)}
                </div>
            </nav>
        </>
    )
}

export default Navbar
