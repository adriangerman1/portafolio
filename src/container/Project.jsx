import foto1 from '../imagen2.jpg'
import foto2 from '../fotoCiudad.jpeg'
import foto3 from '../pag1.png'
import foto4 from '../king.png'


const Project = ()  => {

    return(

        <div className="container-fluid">

            <div className="row">

                <div className="boxProject col-md-4">

                    <h2 className="projectText">Proyectos</h2>

                </div>

                <div className="boxProject1 col-md-8">

                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a href="https://kinge.netlify.app/"><img src={foto4} className="d-block w-100" alt="sitioWeb"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="https://reporteclimatico.netlify.app/"><img src={foto2} className="d-block w-100" alt="sitioWeb"/></a>
                            </div>
                            <div className="carousel-item">  
                                <a href="https://tiendacelulares-33b0d2.netlify.app/"><img src={foto3} className="d-block w-100" alt="sitioWeb"/></a>  
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
