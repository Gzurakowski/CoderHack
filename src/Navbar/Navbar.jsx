import React, { useState } from 'react'

const Navbar = () => {

    const [state, setState] = useState([])

    function onChangeEvent(e) {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }




    return (
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-lg-3">
                <form action="/signUp" method="post">
                    <label className="col-lg-12">Nombre Completo:</label>
                    <input type="text" name="name" onChange={onChangeEvent}></input>
                    <label className="col-lg-12">Pais de Residencia:</label>
                    <input type="text" name="country" onChange={onChangeEvent}></input>
                    <label className="col-lg-12">Correo Electronico:</label>
                    <input type="email" name="mail" onChange={onChangeEvent} required></input>
                    <label className="col-lg-12">Nombre de Usuario:</label>
                    <input type="text" name="user" onChange={onChangeEvent}></input>
                    <label className="col-lg-12">Contraseña:</label>
                    <input type="password" name="password" onChange={onChangeEvent} required></input>
                    <label className="col-lg-12">Confirmar Contraseña:</label>
                    <input type="password" name="password_2" onChange={onChangeEvent} required></input>
                    <button className="col-lg-12 my-2">Registrar</button>
                </form>
            </div>
        </div>
    )
}

export default Navbar
