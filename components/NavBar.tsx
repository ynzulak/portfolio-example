import Hamburger from 'hamburger-react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom';
import React, { useState }from 'react'

function NavBar () {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='nav-bar'>
            <div className='hamburger-x'><Hamburger toggled={isOpen} toggle={setOpen} /></div>
                    <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames="menu"
                    unmountOnExit
                >
                <div className='nav-bar-content'>
                    <ul className=''>
                        {/* <li className=''><Link to="/kontakt">Kontakt</Link></li>
                        <li className=''><Link to="/kontakt">Galeria</Link></li>
                        <li className=''><Link to="/kontakt">Strona Główna</Link></li>
                        <li className=''><Link to="/kontakt">Kontakt</Link></li> */}
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
                        </CSSTransition>
            
        </div>
    )
}

export default NavBar