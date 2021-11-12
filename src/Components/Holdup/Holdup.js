import React from 'react'
import Ilustracion from "../SVG/svg"
import EmprendedorP from '../SVG/ilustracion_emprendedor_preguntas.svg'


const Holdup = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center" style={{ backgroundColor: "#F9F5A2", height: "523px", paddingTop: "70px" }}>
                <div className="col-lg-5 align-self-center">
                    <h1 style={{ color: "#70AF90", fontSize: "54px", stroke: "black", WebkitTextStroke: "1px black" }}>¡Bienvenido al Hold_up!</h1>
                    <h3 style={{ color: "#70AF90" }}>Explora la plataforma y ayuda a emprededorxs a resolver retos de su proyecto a través de la inteligencia colectiva</h3>
                </div>
                <div className="col-lg-5 align-self-center">
                    <Ilustracion />
                </div>
            </div>
            <div className="row d-flex justify-content-center" style={{ backgroundColor: "#416C81", height: "100vh", paddingTop: "70px" }}>
                <div className="col-lg-5" style={{ height: "416px" }}>
                    <img src={EmprendedorP} alt="" />
                </div>
                <div className="col-lg-5 fs-4 align-self-center" >
                    <h3 style={{ color: "#FCF6A0" }}>Déjate guiar por nuestras preguntas para que
                        identifiques la mejor manera el
                        reto de tu proyecto:
                    </h3>
                    <p style={{ color: "white" }}>¿Cuál es el mayor reto que vive hoy tu emprendimiento?</p>
                    <p style={{ color: "white" }}>¿Por qué crees que tienes este reto? ¿Hay alguna otra
                        causante del reto?</p>
                    <p style={{ color: "white" }}>¿Quién es el usuario que se ve más afectado por tu reto?
                        (Personas de tu equipo, tus beneficiarios, proveedor, etc)</p>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ahora, redacta aquí tu reto y sé lo más específico posible." style={{ borderRadius: "15px" }}></textarea>
                    <div className="col-lg-12 d-flex justify-content-end my-2">
                        <button className="btn" style={{ backgroundColor: "#84AC8F" }}>Registrar Reto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Holdup
