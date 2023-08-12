import React from "react";
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum voluptatibus quas voluptatum quae sed eum voluptatibus
                    quas voluptatum quae sed eum volupt</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, magnam dolore? Officia quod sit voluptas ut,
                    reprehenderit error minima odit temporibus architecto consequatur
                    itaque, quidem laudantium accusantium! Neque, modi vitae!</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Delectus facere, possimus molestiae dolorem sapiente ipsa illum
                            ullam ea quasi eveniet cumque repudiandae quis ex excepturi iure
                            tenetur nihil doloribus ab.</p>
                    </div>

                    <div className="persona">
                        <img src="img/nosotros/nosotros2.jpg" alt="Juan Gomez" />
                        <h5>Diana Reyes</h5>
                        <h6>Gerente Comercial</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Delectus facere, possimus molestiae dolorem sapiente ipsa illum
                            ullam ea quasi eveniet cumque repudiandae quis ex excepturi iure
                            tenetur nihil doloribus ab.</p>
                    </div>

                    <div className="persona">
                        <img src="img/nosotros/nosotros3.jpg" alt="Juan Gomez" />
                        <h5>Roberto Zaptos</h5>
                        <h6>Gerente de Sistemas</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Delectus facere, possimus molestiae dolorem sapiente ipsa illum
                            ullam ea quasi eveniet cumque repudiandae quis ex excepturi iure
                            tenetur nihil doloribus ab.</p>
                    </div>

                    <div className="persona">
                        <img src="img/nosotros/nosotros4.jpg" alt="Juan Gomez" />
                        <h5>Sandra Mastropiero</h5>
                        <h6>Gerente de Marketing</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Delectus facere, possimus molestiae dolorem sapiente ipsa illum
                            ullam ea quasi eveniet cumque repudiandae quis ex excepturi iure
                            tenetur nihil doloribus ab.</p>
                    </div>

                    <div className="persona">
                        <img src="img/nosotros/nosotros5.jpg" alt="Juan Gomez" />
                        <h5>Luciano Figuero</h5>
                        <h6>Gerente Logistica</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Delectus facere, possimus molestiae dolorem sapiente ipsa illum
                            ullam ea quasi eveniet cumque repudiandae quis ex excepturi iure
                            tenetur nihil doloribus ab.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default NosotrosPage;