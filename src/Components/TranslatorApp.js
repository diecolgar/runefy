import {React, useState, useEffect} from 'react'
import '../Styles/TranslatorApp.css'


export default function TranslatorApp() {

    const alphLatin = 'abcdefghijklmnopqrstuvwxyz.,'
    const alphYoungerFuthrak = 'ᛅᛒᚴᛏᛁᚠᚴᚼᛁᛁᚴᛚᛘᚾᚬᛒᚴᚱᛋᛏᚢᚢᚢᚴᛋᛁᛋ.,'
    const alphElderFuthrak = 'ᚨᛒᚲᛞᛖᚠᚷᚺᛁᛃᚲᛚᛗᚾᛟᛈᚲᚱᛊᛏᚢᚢᚹᛊᛁᛉ.,'
    const alphShortTwig = 'ᛆᛓᚴᛐᛁᚠᚴᚽᛁᛁᚴᛚᛙᚿᚭᛓᚴᚱᛌᛐᚢᚢᚢᛁᛌ.,'
    // const alphStavelessHälsingeFuthark = '⸝ިᛍ⸍ᛁᛙᛍᚽᛁᛁᛍ⸌⠃⸜ˎިᛍ◟╵⸍╮╮╮ᛍ╵ᛁ╵.,'
    const alphAngloSaxon = 'ᚪᛒᚳᛞᛖᚠᚷᚻᛁᛄᚳᛚᛘᚾᚩᛈᚳᚱᛋᛏᚢᚠᚹᚳᛋᛁᛋ.,'

    const [input, inputState] = useState('')
    const [outputYF, outputStateYF] = useState('')
    const [outputEF, outputStateEF] = useState('')
    const [outputSF, outputStateSF] = useState('')
    const [outputAS, outputStateAS] = useState('')

    function onInputChange(value) {
        inputState(value)
    }

    function TranslateToRunes(alphabetKey, inputArray) {
        let outputArray = []
        let alphCompareArray = []
        const alphLatinArray = alphLatin.split('')

        console.log(alphabetKey)

        if (alphabetKey === 'YF') {
            alphCompareArray = alphYoungerFuthrak.split('');
        } else if (alphabetKey === 'EF') {
            alphCompareArray = alphElderFuthrak.split('');
        } else if (alphabetKey === 'SF') {
            alphCompareArray = alphShortTwig.split('');
        } else if (alphabetKey === 'AS') {
            alphCompareArray = alphAngloSaxon.split('');
        }

        console.log(alphCompareArray)

        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] === ' ') {
                outputArray.push(' ')
            } else if ((inputArray[i] === ':') || (inputArray[i] === ';') || (inputArray[i] === ',') || (inputArray[i] === '.')) {
                outputArray.push(' × ')
            }
            else {
                for (let j = 0; j < alphLatinArray.length; j++) {
                    if (inputArray[i].toLowerCase() === alphLatinArray[j]) {
                        // Here we should check for special cases
                        outputArray.push(alphCompareArray[j])
                    }
                }
            }
        }

        return outputArray.join('')

    }

    // This useEffect hook will be the translator
    useEffect(() => {
        const inputArray = input.split('')

        // console.log(input)
        outputStateYF(TranslateToRunes('YF', inputArray))
        outputStateEF(TranslateToRunes('EF', inputArray))    
        outputStateSF(TranslateToRunes('SF', inputArray))
        outputStateAS(TranslateToRunes('AS', inputArray))

    }, [input]);

    return (
    <div className='tra-container'>
        <div id='landinglogo'></div>
        <div id='firsttitle' className='header'>rune converter</div>
        <textarea 
            id='texttotranslate'
            onChange={e => onInputChange(e.target.value)}
        />
        <div className='tag'> Elder Futhrak </div>
        <div className='language'> {outputEF} </div>
        <div className='tag'> Younger Futhrak </div>
        <div className='language'> {outputYF} </div>
        <div className='tag'> Short-Twig Furthark </div>
        <div className='language'> {outputSF} </div>
        <div className='tag'> Anglo-Saxon </div>
        <div className='language'> {outputAS} </div>
    </div>
  )
}

