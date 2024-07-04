import '../style/Personal.css'
import { useState } from 'react'

function Personal({text, input}){
    return (
        <div className="personal">
            <h1>{text}</h1>
            <hr/>
            {input.map((field) => {
                return <input name={field} placeholder={field} />
            })}
        </div>
    )
}

export default Personal
