import foto from "../media/redes/Perfil_Julian.jpeg"
import "styles/principal.css"




export default function Principal () {
    return(
        <div className="container">
            <div className="olivetti">
                <h2>¡HEY!, Welcome to my portfolio web</h2>
            </div>
            <div className="seccion">
                <h2 class="h2">Julian David Tenorio</h2>
                <h3 class="h3">Frontend Developer</h3>
            </div>
            <div>
                <img className="foto" src={foto} alt="Perfil"/>
            </div>
            <ul className="ul">
                <li className="li">
                    <a href="https://github.com/juliand1221" target="_blank" rel="noreferrer" className="a" title="Github">Visitar mi Github</a>
                </li>
                <li className="li">
                    <a href="https://www.linkedin.com/in/juliand1221/" target="_blank"  rel="noreferrer" className="a" title="Linkedin">Visitar mi Linkedin</a>
                </li>
            </ul>
        </div>
    )
}