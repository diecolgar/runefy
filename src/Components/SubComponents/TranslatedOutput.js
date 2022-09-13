import React, { useState } from 'react'

export default function TranslatedOutput( {inputToTranslate} ) {

    const [output, outputState] = useState('')

    return (
    <div>{inputToTranslate}</div>
    )
}
