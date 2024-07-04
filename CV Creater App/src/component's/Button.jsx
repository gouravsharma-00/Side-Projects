import '../style/Button.css';

function Button(props){
    return (
        <button  className="tab">{props.text}</button>
    )
}

export default Button;