import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Body from './Body'
import Footer from './Footer'
import { send } from 'emailjs-com';
import { useState } from 'react';



function Contacts(){
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
          'service_3c9uamt',
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
        <div>
          <NavigatorBar />
          <div className='titlePage'>Contatti</div>
          <div className='contactsContainer'>
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
            </div>
          <Footer />
        </div>
    )
}
export default Contacts;