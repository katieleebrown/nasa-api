import { useState } from "react";

function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img className="nav--logo_icon" src="" alt="" />
            <h3>NASA Daily</h3>

            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar