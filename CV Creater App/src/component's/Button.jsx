import '../style/Button.css';

function Button(props){

    return (
        <button type={props.type} className="tab">{props.text}</button>
    )
}

export default Button;
