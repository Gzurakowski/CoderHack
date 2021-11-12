import React from 'react'
import Ilustracion from "../SVG/svg"
import Img from "../SVG/Emprendedor.svg"
import Ciudadano from "../SVG/ilustracion_perfil_ciudadano.svg"
import Carrusel from '../Carrusel/Carrusel'

const Home = () => {

    return (
        <div class="container-fluid">
            <div className="row d-flex justify-content-center" style={{ backgroundColor: "#84AC8F", height: "523px", paddingTop: "70px" }}>
                <div className="col-lg-5 align-self-center">
                    <h1 style={{ color: "#F9F5A2", fontSize: "54px", stroke: "black", WebkitTextStroke: "1px black" }}>¡Participa en el hold_up!</h1>
                    <h3 style={{ color: "white" }}>Explora la plataforma y ayuda a emprededorxs a resolver retos de su proyecto a través de la inteligencia colectiva</h3>
                    <div class="btn border mt-3" style={{ backgroundColor: "#416C81", color: "white", borderRadius: "15px", width: "232px" }}>Quiero Participar</div>
                </div>
                <div className="col-lg-5 align-self-center">
                    <Ilustracion />
                </div>
            </div>
            <div className="row" style={{ backgroundColor: "#F3F5F6", height: "514px" }}>
                <div className="col-lg-12 d-flex justify-content-center pt-4">
                    <h2>¿Quiénes pueden participar?</h2>
                </div>
                <div className="row col-lg-12 d-flex justify-content-evenly">
                    <div className="row col-lg-4 d-flex justify-content-center">
                        <img className="" src={Img} style={{ height: "193px", width: "150px" }} alt="img de emprendedores"></img>
                        <h2 className="text-center" style={{ color: "#7196A8" }}>_emprendedores</h2>
                        <p className="text-start">
                            Podés presentar
                            retos de mi proyecto a una gran
                            comunidad de ciudadanxs activxs que
                            te apoyarán con ideas creativas ayudandote a encontrar la mejor
                            solución.
                        </p>
                    </div>
                    <div className="row col-lg-4 d-flex justify-content-center">
                        <img className="" src={Ciudadano} style={{ height: "193px", width: "150px" }} alt="img de emprendedores"></img>
                        <h2 className="text-center" style={{ color: "#7196A8" }}>_ciudadanxs</h2>
                        <p className="text-start">
                            Registrandote en
                            la plataforma podes aportar ideas para ayudar a los
                            emprendedores a resolver sus
                            retos desde tu área de
                            conocimiento.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center" style={{ paddingTop: "10%" }}>
                <Carrusel />
            </div>
        </div>
    )
}

export default Home
