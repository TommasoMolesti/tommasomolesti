import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Body from './Body'
import Footer from './Footer'
import { send } from 'emailjs-com';
import { useState } from 'react';


function Contact(){
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
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
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
        }
    return(
        <div className="App">
        <NavigatorBar />
        <div className='titleContatti'>Contatti</div>
        <div className='testoContatti'>Un modo semplice per contattarmi</div>
        <div className="subTitleContatti">Telefono</div>
        <div className='testoContatti'>+39 366 4341755</div>
        <div className='subTitleContatti'>Email</div>
        <div className='testoContatti'>tommymolesti246@gmail.com</div>

        <form onSubmit={onSubmit}>
            <input
                type='text'
                name='from_name'
                placeholder='Nome'
                value={toSend.from_name}
                onChange={handleChange}
            />
            <input
                type='text'
                name='to_name'
                placeholder='to name'
                value={toSend.to_name}
                onChange={handleChange}
            />
            <input
                type='text'
                name='message'
                placeholder='Messaggio'
                value={toSend.message}
                onChange={handleChange}
            />
            <input
                type='text'
                name='reply_to'
                placeholder='La tua email'
                value={toSend.reply_to}
                onChange={handleChange}
            />
            <button type='submit'>Invia</button>
            </form>

        <Footer />
      </div>
    )
}
export default Contact;