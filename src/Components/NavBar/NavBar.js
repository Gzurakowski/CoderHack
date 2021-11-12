import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#0C3944" }}>
                <div className="container">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span className="navbar-brand">Make_Sense</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav col-lg-12 d-flex justify-content-evenly">
                            <div className="col-lg-6 d-flex justify-content-end">
                                <Link to="/holdUp" style={{ textDecoration: "none", marginRight: "4%" }}>
                                    <div className="navbar-brand" style={{ color: "#DC956D" }}>Hold_up</div>
                                </Link>
                                <Link to="/reto" style={{ textDecoration: "none" }}>
                                    <div className="navbar-brand" >_Retos</div>
                                </Link>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end">
                                <Link to="/chosen" style={{ textDecoration: "none", marginRight: "4%" }}>
                                    <div className="navbar-brand" style={{ color: "#FFF30D" }}>Registrarme</div>
                                </Link>
                                <Link to="/logIn" style={{ textDecoration: "none" }}>
                                    <div className="navbar-brand" style={{ color: "#FFF30D" }}>Iniciar Sesión</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
