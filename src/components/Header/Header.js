import React from "react";
import styles from './Header.css';
import Menu from "./Menu";

function Header() {
    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-2 m-auto">
                <span className="text-adj">Giga Pogoda</span>
                </div>
                <Menu/>
            </div>
        </header>
    )
}

export default Header;