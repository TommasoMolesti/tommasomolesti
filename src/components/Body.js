import React from "react";
import { NavLink } from 'react-router-dom';
import imageHome from '../imageHome.jpeg'
import computerImage from '../components/computerIcon.png'
import pencilImage from '../components/pencilIcon.png'
import runningImage from '../components/runningIcon.png'
export default class Body extends React.Component{
    render(){
        function getAge(dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
        return(
            <div>
                
                {/*<div>Mi chiamo Tommaso, ho {getAge('August 22, 2001 00:01:00')} anni</div><br/>*/}
                <div className="containerImageHome">
                    <img className="imageHome" src={imageHome}/>
                </div>
                <div className="containerTextHome">
                    <div className="textHome"><NavLink to="/portfolio" style={{textDecoration:"none"}}><img className="iconsHome" src={computerImage}/>Web developer</NavLink></div>
                    <div className="textHome"><img className="iconsHome" src={pencilImage}/>Computer Engineering Student</div>
                    <div className="textHome"><img className="iconsHome" src={runningImage}/>Half Marathoner</div>
                </div>
                
            </div>
        )
    }
}
