import React from "react";
import styles from "./Main.css";

function Main() {
    return (
        <div className="d-flex main-background">
            <div className="row">
                <div className="col">
                    <div className="weather-card">
                        <div className="top">
                            <p>10°C</p>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Main;