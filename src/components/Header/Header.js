import React from "react";
import styles from './Header.css';
import Menu from "./Menu";
import LocationSearcher from "./LocationSearcher";

function Header({onClick}) {
    return (
        <header className="container-fluid ">
            <div className="row">
                <div className="col-3 m-auto">
                <span className="text-adj">Giga Pogoda</span>
                </div>  
                <div className="col-9 m-auto">
                    <Menu/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col d-flex justify-content-center align-items-center">
                    <LocationSearcher onClick={onClick}/>
                </div>
            </div>
        </header>
    )
}

export default Header;