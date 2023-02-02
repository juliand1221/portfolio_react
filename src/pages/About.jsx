import React from "react"
import "styles/about.css"
import simple from "media/portfolioSimple.png"
import calculator from "media/Calculator.png"

export default function About () {
    return(
        <div>
            <div>
                <h1>Pagina de acerca</h1>
                <br></br>
                <p>💻 Me he dedicado al desarrollo web al rededor de un año, primero como un aficionado y ahora como autónomo.
                   Como resultado tengo un solido conocimiento de los principales lenguajes de programación de desarrollo web
                y del software relacionado, así como la codificación HTML.
                </p>
                <br></br>
                <p> 💻  Adquirí conocimientos y experiencia en esta área por medio del programa Misión TIC 2022 del ministerio de telecomunicaciones en Colombia,
                    el cual fue una especie de Bootcamp donde nos preparaban para ser programadores al tiempo que realizábamos proyectos
                </p>
                <br></br>
                <p> 💻  Adquirí conocimientos y experiencia en esta área por medio del programa Misión TIC 2022 del ministerio de telecomunicaciones en Colombia,
                    el cual fue una especie de Bootcamp donde nos preparaban para ser programadores al tiempo que realizábamos proyectos.
                </p>
            </div>
            <br></br>

            <section className="seccion works" id="works">
                <h1>Trabajos</h1>
                <br></br>
                <p>Aqui te presento mis trabajos mientras
                estudiaba un curso de HTML, CSS y Javascript
                </p>

                <div className="grid">
                    <article className="article">
                        
                            <figure class="figure">
                                <img src={simple} alt="Imagen" class="img" loading="lazy" />
                            </figure>
                            <h4 className="h4">Portfolio Simple</h4>
                        
                    </article>
                    <article class="article">
                        
                            <figure>
                                <img src={calculator} alt="Imagen" class="img" loading="lazy" />
                            </figure>
                            <h4 className="h4">Calculator React</h4>
                        
                    </article>
                </div>
            </section>
        </div>
    )
}