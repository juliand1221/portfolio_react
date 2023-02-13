import "styles/contact.css"
import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

    
    export default function Contact (){

    const form =useRef();

    const sendEmail = (e) =>{
        e.preventDefault();
        

        emailjs.sendForm('service_buno8cr','template_ctfp7hg',form.current,'2SFrW9jc4N2Tj8-IV')
        .then((result)=>{
            alert('Se ha enviado el correo');
            console.log(result);
            e.target.reset();
  

        });
    };



        return(
        <div className="cuerpo">
            <div className="contenedor">
                <div className="content">
                    <div className="left-side">
                        <div className="adress details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="topic">Address</div>
                            <div className="text-one">Cali, 760021</div>
                            <div className="text-two">Valle del Cauca, Colombia</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Phone</div>
                            <div className="text-one">+57 (321) 721-9328</div>
                        </div>
                        <div className="whatsapp details">
                            <i className="fab fa-whatsapp"></i>
                            <div className="topic">Whatsapp</div>
                            <div className="text-one">+57 (321) 721-9328</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div>
                            <div className="text-one">Judt1221@hotmail.com</div>
                            <div className="text-two">Jdt1221@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text"> Send Me a Message</div>
                        <p>If you have any work from me or any types of quries related to my portfolio,
                            you can send me message from here. It's my pleasure to help you.</p>


                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input-box">
                                <input type="text" placeholder="Enter Your Name" name="name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter Your Email" name="email" />
                            </div>
                            <div className="input-box message-box">
                                <textarea type="text" placeholder="Message" name="message" ></textarea>
                            </div>
                            <div className="button">
                                <button type="submit" id="button-final">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
