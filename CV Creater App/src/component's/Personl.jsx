import '../style/Personal.css'

function Personal(props){
    return (
        <div className="personal">
            <h1>{props.text}</h1>
            <hr/><br/>
            <label>Full Name</label>
            <input placeholder={props.text} /><br/>
            <label>Email</label>
            <input  /><br/>
            <label>Phone</label>
            <input  /><br></br>
            <button>Save</button>
        </div>
    )
}

export default Personal