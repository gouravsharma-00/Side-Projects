import '../style/Info.css';
import Personal from './Personl';

function InfoPanel(props){
    let background = {
        width: props.width + '%',
        borderRadius: props.borderRadius,
        backgroundColor: props.color
    }

    let personalList = ['FullName', 'Email', 'Phone'];
    let educationList = ['Course','School','Year Started','Year Ended']
    let workList = ['Company Name', 'Position', 'Job Description', 'Year Started', 'Year Ended'];

    return (
        <div className="infoPanel flex" style={background}>
            <Personal text="Personal" />
            <Personal text="Education" />
            <Personal text="Work" />
        </div>
    )
}

export default InfoPanel;
