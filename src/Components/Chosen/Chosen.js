import React from 'react'
import { Link } from 'react-router-dom'
import img from '../SVG/Emprendedor.svg'
import Ciudadano from "../SVG/ilustracion_perfil_ciudadano.svg"


const Chose = () => {
    return (
        <div className="d-flex justify-content-evenly align-items-center" style={{ height: "100vh", backgroundColor: "#416C81" }}>
            <div className="row">
                <img src={img} style={{ height: "275px" }} alt="Img-emprendedor"></img>
                <Link to="/register" className="text-center">
                    <button className="btn btn-success fs-4" style={{ borderRadius: "15px" }}>Emprendedor</button>
                </Link>
            </div>
            <div className="row">
                <img src={Ciudadano} style={{ height: "275px", marginBottom: "10px" }} alt="Img-emprendedor"></img>
                <Link to="/register" className="text-center">
                    <button className="btn btn-danger fs-4" style={{ borderRadius: "15px" }}>Participante</button>
                </Link>
            </div>
        </div>
    )
}

export default Chose
