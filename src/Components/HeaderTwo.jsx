import { Component } from "react";
import "styles/HeaderTwo.css"
import logo from "media/icon.png"
import { Link } from "react-router-dom";



class HeaderTwo extends Component {

    state={clicked : false};
    handleClick =() => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render(){
        return(
            <div>
                <nav className="header">
                    <div className="logo">
                        <img alt="Logo"className="circular-square" src={logo}/>
                    </div>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li className="link" id="active">
                                <Link className="link" to="/">Inicio</Link> 
                            </li>
                            <li className="link">
                                <Link className="link" to="about">Acerca</Link>
                            </li>
                            <li className="link">
                                <Link className="link" to="contact">Contacto</Link>
                            </li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderTwo;