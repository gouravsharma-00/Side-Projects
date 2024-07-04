import '../style/Info.css';
import Personal from './Personl';
import Button from './Button'

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
            <Personal text="Personal" input={personalList} />
            <Personal text="Education" input={educationList} />
            <Personal text="Work" input={workList} />
            <div className="button flex">
                <Button text="Save" /><Button text="Edit" />
            </div>
        </div>
    )
}

export default InfoPanel;
