import React from 'react'
import Agua from '../SVG/Ilustracion_agua_potable.svg'
import Alimentacion from '../SVG/ilustracion_alimentacion_sustentable.svg'
import Energia from '../SVG/Ilustracion_energias_limpias.svg'
import Economia from '../SVG/ilustracion_economia_circular.svg'
import Reactivacion from '../SVG/ilustracion_reactivacion.svg'
import Movilidad from '../SVG/Ilustracion_movilidad_urbana.svg'
import Tejido from '../SVG/ilustracion_tejido_social.svg'

const Carrusel = () => {
    return (
        <div className="" style={{ height: "400px" }}>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-indicators" style={{ top: "250px" }}>
                    <button style={{ backgroundColor: 'skyblue' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button style={{ backgroundColor: 'skyblue' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button style={{ backgroundColor: 'skyblue' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button style={{ backgroundColor: 'skyblue' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button style={{ backgroundColor: 'skyblue' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button style={{ backgroundColor: 'skyblue' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button style={{ backgroundColor: 'skyblue' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">
                                <img src={Agua} class="d-block w-100" style={{ width: "331px", height: "165px" }} alt="..."></img>
                            </div>
                            <div className="col-lg-4">
                                <h3 style={{ color: "#63C6C6" }}>Agua Potable</h3>
                                <p>
                                    Proyectos que proponen soluciones a retos hídricos urbanos en contextos de acceso, calidad, infraestructura, servicio, gestión y generación de datos.

                                    Proyectos que en sus actividades incrementen los niveles de salubridad ambiental y promuevan un comportamiento higiénico entre la ciudadanía, como prevención de la contaminación del agua.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">
                                <img src={Alimentacion} class="d-block w-100" style={{ width: "331px", height: "165px" }} alt="..."></img>
                            </div>
                            <div className="col-lg-4">
                                <h3 style={{ color: "#84AC8F" }}>Alimentación Sustentable</h3>
                                <p>
                                    Proyectos que incentiven las buenas prácticas en el proceso de producción y consumo de alimentos, buscando la soberaní­a alimentaria en contextos urbanos.

                                    Proyectos que promueven una alimentación saludable, y sensibilizan al consumidor sobre las consecuencias sociales y ambientales del desperdicio de alimentos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">
                                <img src={Energia} class="d-block w-100" style={{ width: "331px", height: "165px" }} alt="..."></img>
                            </div>
                            <div className="col-lg-4">
                                <h3 style={{ color: "#CBE75D" }}>Energías Limpias</h3>
                                <p>
                                    Proyectos que promueven el rescate de los espacios públicos como lugares de encuentro ciudadano, creando soluciones inteligentes de movilidad alternativa, prevención y reducción de emisiones de CO2 generadas por el uso de combustibles fósiles, infraestructura para repensar la ciudad respetando y preservando los recursos naturales.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">
                                <img src={Economia} class="d-block w-100" style={{ width: "331px", height: "165px" }} alt="..."></img>
                            </div>
                            <div className="col-lg-4">
                                <h3 style={{ color: "#84AC8F" }}>Ecpmpmía Circular</h3>
                                <p>
                                    Proyectos que promuevan un modelo de economía circular para las industrias. Así como la sensibilización y cambio de hábitos hacia un consumo, ético y responsable con el medio ambiente.

                                    Proyectos que proponen materiales, procesos, productos o servicios alineados a modelos sostenibles, circulares y resilientes.
                                </p>
                            </div>
                        </div>                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">
                                <img src={Reactivacion} class="d-block w-100" style={{ width: "331px", height: "165px" }} alt="..."></img>
                            </div>
                            <div className="col-lg-4">
                                <h3 style={{ color: "#416C81" }}>Reactivación</h3>
                                <p>
                                    Proyectos que generen alternativas y soluciones que promuevan la reactivación económica y la empleabilidad digna con especial énfasis en jóvenes y mujeres para el desarrollo de habilidades del futuro.

                                    Iniciativas que fomenten la educación e inclusión financiera y digital para favorecer la generación de espacios de fomento laboral.
                                </p>
                            </div>
                        </div>                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">
                                <img src={Movilidad} class="d-block w-100" style={{ width: "331px", height: "165px" }} alt="..."></img>
                            </div>
                            <div className="col-lg-4">
                                <h3 style={{ color: "#E36164" }}>Movilidad y Desarrollo Urbano</h3>
                                <p>
                                    Proyectos que promueven el rescate de los espacios públicos como lugares de encuentro ciudadano, creando soluciones inteligentes de movilidad alternativa, prevención y reducción de emisiones de CO2 generadas por el uso de combustibles fósiles, infraestructura para repensar la ciudad respetando y preservando los recursos naturales.
                                </p>
                            </div>
                        </div>                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">
                                <img src={Tejido} class="d-block w-100" style={{ width: "331px", height: "165px" }} alt="..."></img>
                            </div>
                            <div className="col-lg-4">
                                <h3 style={{ color: "#DC956D" }}>Tejido Social</h3>
                                <p>
                                    Proyectos que proponen soluciones en temas de inclusión de la vasta diversidad de grupos en situación de vulnerabilidad a partir de la desigualdad, marginación, discriminación y desplazamiento entre círculos sociales.

                                    Iniciativas que abonen a las discapacidades, diversidad y violencias de género, comunidades originarias, movilidad humana, personas en situación de calle, entre otros y que interseccionalmente incorporen de manera armónica las diferencias sociales como parte del valor del tejido social.
                                </p>
                            </div>
                        </div>                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
                    <span class="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "gray" }}></span>
                    <span class="visually-hidden" >Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "gray" }}></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrusel
