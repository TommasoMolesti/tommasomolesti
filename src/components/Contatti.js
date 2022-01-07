import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Body from './Body'
import Footer from './Footer'
import { send } from 'emailjs-com';
import { useState } from 'react';



function Contact(){
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_84ptekq',
          'template_on7dxbw',
          toSend,
          "user_xvca7As9yGUC6b2y4vJou"
        )
          .then((response) => {
            //console.log('SUCCESS!', response.status, response.text);
            alert("Messaggio inviato correttamente")
          })
          .catch((err) => {
            //console.log('FAILED...', err);
            alert("Errore nell'invio del messaggio")
          });
        }
    return(
        <div className="App">
        <NavigatorBar />
        <div className='titlePage'>Contatti</div>
        <div className='testoPage'>Un modo semplice per contattarmi</div>
        <div className="subTitlePage">Telefono</div>
        <div className='testoPage'><a href="tel:+393664341755">+39 366 4341755</a></div>
        <div className='subTitlePage'>Email</div>
        <div className='testoPage'><a href="mailto:tommymolesti246@gmail.com">tommymolesti246@gmail.com</a></div>
        <div className='subTitlePage'>Contattami via email da qui</div>
        <form onSubmit={onSubmit}>
            <div>Il tuo nome</div>
            <input
                type='text'
                name='from_name'
                value={toSend.from_name}
                onChange={handleChange}
                className='inputForm'
                required
            />
            <div>La tua email</div>
            <input
                type='text'
                name='reply_to'
                value={toSend.reply_to}
                onChange={handleChange}
                className='inputForm'
                required
            />
            <div>Messaggio</div>
            <input
                type='text'
                name='message'
                value={toSend.message}
                onChange={handleChange}
                className='inputFormMessage'
                required
            />
            <button className="buttonForm" type='submit'>Invia</button>
          </form>
          <div>
    </div>
        <Footer />
      </div>
    )
}
export default Contact;