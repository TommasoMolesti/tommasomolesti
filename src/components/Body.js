import React from "react";
import imageHome from '../imageHome.jpeg'
export default class Body extends React.Component{
    render(){
        return(
            <div>
                <div className="helloHome">Ciao</div><br/>
                <div>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to
                tell a story and let your users know a little more about you.</div><br/>
                <img style={{borderRadius:"50%",marginLeft:"5%",marginRight:"5%"}} src={imageHome} height="90%" width="90%"/>
                <div className="container-cerchi">
                    <div class="cerchio1">Resume</div>
                    <div class="cerchio2">Projects</div>
                    <div class="cerchio3">Contact</div>
                </div>
            </div>
        )
    }
}
