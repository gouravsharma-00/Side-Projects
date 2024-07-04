import '../style/Personal.css'

function Personal({text, input}){
    return (
        <div className="personal">
            <h1>{text}</h1>
            <hr/>
            {input.map((field) => {
                return <input placeholder={field} />
            })}
        </div>
    )
}

export default Personal
