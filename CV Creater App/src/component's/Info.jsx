import './Info.css';

function InfoPanel(props){
    let background = {
        width: props.width + '%',
        borderRadius: props.borderRadius,
        backgroundColor: props.color
    }

    return (
        <div className="infoPanel" style={background}></div>
    )
}

export default InfoPanel;
