import "styles/Footer.css"
import twitter from "media/redes/gorjeo.png" 
import facebook from "media/redes/facebook.png" 
import instagram from "media/redes/instagram.png" 


export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-content">
                <h3>Junior Developer</h3>
                <p>I am Julian David Tenorio, I am a junior developer.</p>
                <p>My experience is based in web designe, HTML, CSS, JavaScript, React, Node.js. </p>
                <p> Follow me in my social media.</p>
                <ul className="socials">
                    <li>
                        <a href="https://twitter.com/juliantenorio" target="_blank" rel="noreferrer" >
                            <img alt="twitter" src={twitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/julian.tenorio1/" target="_blank" rel="noreferrer" >
                            <img alt="facebook" src={facebook} />
                        </ a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/julian.tenorio1/" target="_blank" rel="noreferrer" >
                            <img alt="instagram" src={instagram} />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-bottom">
                <p>copyright &copy;2023 <a href="/">foolishdeveloper</a> </p>
            </div> 


        </div>
    )
}