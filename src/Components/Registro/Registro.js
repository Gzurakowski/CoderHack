import React, { useState } from 'react'

const Registro = () => {

    const [state, setState] = useState([])

    function onChangeEvent(e) {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container-fluid d-flex justify-content-center" style={{ backgroundColor: "#416C81", height: "100vh" }}>
            <div className="row col-lg-4 border" style={{ borderRadius: "25px", backgroundColor: "white", height: "550px", marginTop: "70px" }}>
                <h1 class="text-center align-self-center" style={{ color: "#E36164" }}>Registrarme</h1>
                <form action="/signUp" method="post" className="text-start" style={{ color: "#70AF90" }}>
                    <label className="col-lg-12 fs-4">Nombre Completo:</label>
                    <input className="col-lg-12 py-1" type="text" name="name" onChange={onChangeEvent} style={{ backgroundColor: "#C4C4C4", borderRadius: "10px" }}></input>
                    <label className="col-lg-12 fs-4">Pais de Residencia:</label>
                    <input className="col-lg-12 py-1" type="text" name="country" onChange={onChangeEvent} style={{ backgroundColor: "#C4C4C4", borderRadius: "10px" }}></input>
                    <label className="col-lg-12 fs-4">Correo Electronico:</label>
                    <input className="col-lg-12 py-1" type="email" name="email" onChange={onChangeEvent} required style={{ backgroundColor: "#C4C4C4", borderRadius: "10px" }}></input>
                    <label className="col-lg-12 fs-4">Nombre de Usuario:</label>
                    <input className="col-lg-12 py-1" type="text" name="user" onChange={onChangeEvent} style={{ backgroundColor: "#C4C4C4", borderRadius: "10px" }}></input>
                    <label className="col-lg-12 fs-4">Contraseña:</label>
                    <input className="col-lg-12 py-1" type="password" name="password" onChange={onChangeEvent} required style={{ backgroundColor: "#C4C4C4", borderRadius: "10px" }}></input>
                    <label className="col-lg-12 fs-4">Confirmar Contraseña:</label>
                    <input className="col-lg-12 py-1" type="password" name="password_2" onChange={onChangeEvent} required style={{ backgroundColor: "#C4C4C4", borderRadius: "10px" }}></input>
                    <div className="text-end">
                        <button className="col-lg-5 my-2 btn btn-warning" style={{ borderRadius: "10px", color: "#416C81" }}>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registro
