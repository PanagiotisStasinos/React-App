import React from 'react'
import {Link} from "react-router-dom";

function NavigationMenu(props){
    return(
        <div>
            <div className="font-bold py-3">
                The Menu
            </div>
            <ul>
                <li>
                    <Link to="/" className='text-blue-500 py-3 border-t border-b block' onClick={props.closeMenu}>
                        HOME!
                    </Link>
                </li>
                <li>
                    <Link to="/about" className='text-blue-500 py-3 border-b block' onClick={props.closeMenu}>
                         ABOUT!
                    </Link>
                </li>
                <li>
                    <Link to="/products" className='text-blue-500 py-3 border-b block' onClick={props.closeMenu}>
                         PRODUCTS
                    </Link>
                </li>
                <li>
                    <Link to="/test" className='text-blue-500 py-3 border-b block' onClick={props.closeMenu}>
                         TEST
                    </Link>
                </li>
                <li>
                    <Link to="/image" className='text-blue-500 py-3 border-b block' onClick={props.closeMenu}>
                         IMAGE
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;