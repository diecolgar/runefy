import {React, useState, useEffect} from 'react'
import '../Styles/TranslatorApp.css'
import TranslatedOutput from './SubComponents/TranslatedOutput';


export default function TranslatorApp() {

    const [input, inputState] = useState('')
    const [output, outputState] = useState('')
    function onInputChange(value) {
        inputState(value)
    }

    // This useEffect hook will be the translator
    useEffect(() => {
        const inputArray = input.split('')
        
        // outputState(inputArray[2])
    });

    return (
    <div className='tra-container'>
        <div id='firsttitle' className='header'>TEXT TO RUNES</div>
        <textarea 
            id='texttotranslate'
            onChange={e => onInputChange(e.target.value)}
        />
        {output}
    </div>
  )
}