import emailjs from 'emailjs-com'

export default function enviarEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_buno8cr','template_ctfp7hg',e.target,'2SFrW9jc4N2Tj8-IV')
    .then((result)=>{
        console.log(result.text);
    }, (error) => {
        console.log(error.text)
    });
};
