import React from 'react';
import Tilt from 'react-tilt';
import  Arsene from './Arsene.jpg';
import './Logo.css';

const Logo = () => {
    return(
        <div className='ma1 mt0'>
            <Tilt className="Tilt br2 shadow-2" 
                options={{ max : 55 }} 
                style={{ height: "120px", width: "100px" }} >
                    <div className="Tilt-inner pa3">
                        <img style={{padding: '1px 1px', height: 80, width: 100}} 
                        alt="ArseneLogo" src={Arsene}/>
                    </div>
            </Tilt>
        </div>
    );
}

export default Logo;