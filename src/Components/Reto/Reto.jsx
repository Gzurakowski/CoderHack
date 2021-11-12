import React from 'react'
import Img from '../SVG/Fotos de tarjeta de reto emprendedor/agua_de_lluvia-1.jpeg'
import ImgPerfil from '../SVG/avatar_perfil_5.svg'
import Agua from '../SVG/Ilustracion_agua_potable.svg'
import Movilidad from '../SVG/Ilustracion_movilidad_urbana.svg'
import Alimentacion from '../SVG/ilustracion_alimentacion_sustentable.svg'
import Img2 from '../SVG/Fotos de tarjeta de reto emprendedor/img1.png'
import Img3 from '../SVG/Fotos de tarjeta de reto emprendedor/img2.png'




const Reto = () => {
    return (
        <div className="container-fluid d-flex justify-content-center" style={{ height: "100vh", backgroundColor: "#70AF90", paddingTop: "6%", paddingBottom: "40%" }}>
            <div className="card" style={{ width: "1020px", borderRadius: "15px", border: "1px solid black", height: "717px" }}>
                <img src={Img} className="card-img-top" alt="..." style={{ height: "175px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}></img>
                <div className="card-body mx-5">
                    <h2 className="card-title" style={{ color: "#84AC8F" }}>Nombre corto del reto</h2>
                    <div className="row d-flex justify-content-around">
                        <div className="col-lg-4">
                            <div class="row">
                                <div className="col-lg-4 d-flex justify-content-end align-self-center">
                                    <img src={ImgPerfil} alt="" style={{ height: "60px" }} />
                                </div>
                                <div className="col-lg-8 text-end" style={{ color: "#84AC8F" }}>
                                    <div>Juan_Camilo_Rodriguez</div>
                                    <div>juancarod@correo.com</div>
                                    <div>Mexico</div>
                                </div>
                                <div className="col-lg-12 mt-2">
                                    <h4 style={{ color: "#84AC8F" }}>Ejes de acción</h4>
                                    <div className="d-flex">
                                        <img src={Alimentacion} alt="" style={{ height: "45px", width: "90px" }} />
                                        <img className="mx-2" src={Agua} alt="" style={{ height: "45px", width: "90px" }} />
                                        <img src={Movilidad} alt="" style={{ height: "45px", width: "90px" }} />
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-2">
                                    <h5 style={{ color: "#84AC8F" }}>Emprendimiento</h5>
                                    <div className="text-center" style={{ border: "1px solid #EBEBEB", borderRadius: "15px", backgroundColor: "#EBEBEB", color: "#253C45" }}>Agua apta parra todos</div>
                                    <h5 className="mt-2" style={{ color: "#84AC8F" }}>Videos de mi emprendimiento</h5>
                                    <div className="d-flex justify-content-center">
                                        <img src={Img2} alt="" style={{ height: "110px", width: "110px", marginRight: "10px", borderRadius: "15px" }} />
                                        <img src={Img3} alt="" style={{ height: "110px", width: "110px", marginLeft: "10px", borderRadius: "15px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 style={{ color: "#70AF90" }}>Descripción de mi reto</h4>
                                    <div style={{ border: "1px solid #EBEBEB", padding: "5px", borderRadius: "10px", backgroundColor: "#EBEBEB" }}>Morbi ante himenaeos viverra pellentesque sem, enim molestie euismod sollicitudin neque, in dolor convallis, aenean rhoncus class donec. </div>
                                </div>
                                <div className="col-lg-12 mt-2">
                                    <h4 style={{ color: "#70AF90" }}>Temas de interés</h4>
                                    <div style={{ border: "1px solid #EBEBEB", padding: "5px", borderRadius: "10px", backgroundColor: "#EBEBEB" }}>Morbi ante himenaeos viverra pellentesque sem, enim molestie euismod sollicitudin neque, in dolor convallis, aenean rhoncus class donec. </div>
                                </div>
                                <div className="col-lg-12 mt-2">
                                    <h4 style={{ color: "#70AF90" }}>Agregar links a video en youtube:</h4>
                                    <div className="mb-2" style={{ border: "1px solid #EBEBEB", padding: "5px", borderRadius: "10px", backgroundColor: "#EBEBEB" }}>https://www.youtube.com/watch=Reciclajeysustentabilidad </div>
                                    <div style={{ border: "1px solid #EBEBEB", padding: "5px", borderRadius: "10px", backgroundColor: "#EBEBEB" }}>https://www.youtube.com/watch=Reciclajeysustentabilidad </div>
                                </div>
                                <div className="col-lg-12 d-flex justify-content-end mt-2">
                                    <div className="btn" style={{ border: "1px solid #7196A8", borderRadius: "10px", backgroundColor: "#7196A8", width: "150px", color: "white" }}>
                                        Ver Ideas
                                    </div>
                                    <div className="btn mx-2" style={{ border: "1px solid #84AC8F", borderRadius: "10px", backgroundColor: "#84AC8F", width: "100px", color: "white" }}>
                                        Ir al foro
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Reto
