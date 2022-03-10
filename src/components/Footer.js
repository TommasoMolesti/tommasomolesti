import React from "react";
import instagram from '../social-icons/instagram.png'
import github from '../social-icons/github.png'
import linkedin from '../social-icons/linkedin.png'
import { NavLink } from 'react-router-dom';

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <hr></hr>
                <div className="footer">
                    <div className="footerElement2">
                        <div className="footerTitle">Follow Me</div>
                        <div className="footerContent">
                        <div class="social-icons">
                            <a target="blank" href="https://www.instagram.com/tommaso_molesti/"><img className="icon" src={instagram}/></a>
                            <a target="blank" href="https://github.com/TommasoMolesti"><img className="icon" src={github}/></a>
                            <a target="blank" href="https://www.linkedin.com/in/tommaso-molesti/"><img className="icon" src={linkedin}/></a>
                        </div>
                        </div>
                    </div>
                    <div className="footerElement">
                        <div className="footerTitle">Information</div>
                        <div><a className="footerContent" href="mailto:info@tommasomolesti.com">info@tommasomolesti.com</a></div>
                        <NavLink className="footerContent" target="_blank" to="privacy-and-cookie-policy"><a>Privacy & Cookie Policy</a></NavLink>
                    </div>
                    <div class="copy">&copy; {new Date().getFullYear()} by Tommaso Molesti</div>
                </div>
            </div>
        ) 
    }
}