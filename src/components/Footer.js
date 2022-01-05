import React from "react";
import instagram from '../social-icons/instagram.png'
import facebook from '../social-icons/facebook.png'
import github from '../social-icons/github.png'
import linkedin from '../social-icons/linkedin.png'
export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="bar"></div>
                <div className="footerElement">
                    <div className="footerTitle">Phone</div>
                    <div className="footerContent">123-456-789</div>
                </div>
                <div className="footerElement">
                    <div className="footerTitle">Email</div>
                    <div className="footerContent">prova@prova.com</div>
                </div>
                <div className="footerElement">
                    <div className="footerTitle">Follow Me</div>
                    <div className="footerContent">
                    <ul class="social-icons">
                        <a href="https://www.instagram.com/tommaso_molesti/"><img className="icon" src={instagram}/></a>
                        <a href="https://www.facebook.com/tommaso.molesti"><img className="icon" src={facebook}/></a>
                        <a href="https://github.com/TommasoMolesti"><img className="icon" src={github}/></a>
                        <a href="https://www.linkedin.com/in/tommaso-molesti/"><img className="icon" src={linkedin}/></a>
                    </ul>
                    </div>
                </div>
                <small>&copy; {new Date().getFullYear()} by Tommaso Molesti</small>
            </div>
        ) 
    }
}