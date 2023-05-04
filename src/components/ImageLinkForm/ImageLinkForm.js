import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div> 
            <p className="f3 grow br2 pa2 bg-yellow w-50 center">
                This Arsenal magic is a face detector!
            </p>
            <div className='center grow'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' alt='Text' type='text' onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-green'
                        onClick={onButtonSubmit}
                        >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;