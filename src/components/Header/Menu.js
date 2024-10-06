import React from "react";

function Menu() {
    return (
    <div className="col-10 m-auto">

        <div className="col-lg d-none d-md-block">
            <div>
                <span className="p-4">O mnie</span>
                <span className="p-4">Kontakt</span>
            </div>
        </div>
       {/* Menu rozwijane */}
        <div className="col-md d-md-none">
        <div className="dropdown">
            <span className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Rozwiń
            </span>

            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">O mnie</a></li>
                <li><a className="dropdown-item" href="#">Kontakt</a></li>
            </ul>
        </div>
        </div>

    </div>
        
    )
}

export default Menu;