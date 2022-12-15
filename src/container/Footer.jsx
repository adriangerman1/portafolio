

const Footer = ()  => {
    
    return (
        
        <div className="container-fluid">

            <div className="row">

                <h2 className="footerText">Contactos</h2>

                <div className="boxFooter1 col-md-6">
                    
                    {/* <img className="iconLinkedin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvllWENwjAQhb8pAAk4AAeAA1AAEnCCBXAACgAHSEACKIC85Eqabg0s1y0h3K82ub5vd++6VnQcVcf69A44A1NnVdKYB420gqdTvKabAzyAg2UvgEFL8Fs3B9gDaxPdAaufA9yTFg1LVyAPriY6MQ8uth8BAsqjGyCPxskHfPRAYjM7FEY3HJI3EleVITbANtq7ALluCRimzQVQe06AWreMvIovqQug1gmgOJoHWncCaPJKsGIV/DFAIxdfNE2OTFRorQlSNOV95UHLP0MtPWtyiQcnNr7/J9Pbmnyviiub4As/E0wZX0UvUwAAAABJRU5ErkJggg=="/> */}
                    <a className="textLink" href='https://www.linkedin.com/in/germ%C3%A1n-adri%C3%A1n-pi%C3%B1eiro-3b4b1818a/'><h4 className="textLinkedin">www.linkedin.com/in/germán-adrián-piñeiro-3b4b1818a</h4></a>
                    <h3 className="textLinkedin1" > Mail: adriangerman1@hotmail.com</h3>

                </div>

                <div className="boxFooter2 col-md-6">

                    {/* <form className="repositorio" action="POST" data-netlify="true">
                        <div>
                            <label htmlFor="name" >Nombre</label>
                            <input className="m-2" type="text" name="name" id="name" placeholder="Ingrese su nombre" />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input className="m-2" type="email" name="email" id="email"  placeholder="Ingrese su email"  />
                        </div>

                        <div>
                            <label htmlFor="message">Mensaje</label>
                            <textarea className="m-2" name="message" id="message" cols="30" rows="5" ></textarea>
                        </div>

                        <button className="btn btn-success m-2">Enviar</button>

                    </form> */}
                    <form name="contact" netlify>
                        <p>
                            <label>Name <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Email <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>

                </div>

            </div>

        </div>

    )
}

export default Footer