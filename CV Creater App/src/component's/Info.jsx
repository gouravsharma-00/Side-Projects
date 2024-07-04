import '../style/Info.css';
import { useState } from 'react';
import Personal from './Personl';
import Button from './Button'

function InfoPanel(props){
    let background = {
        width: props.width + '%',
        borderRadius: props.borderRadius,
        backgroundColor: props.color
    }

    let personalList = ['FullName', 'Email', 'Phone'];
    let educationList = ['Course','School','Edu. Year Started','Edu. Year Ended']
    let workList = ['Company Name', 'Position', 'Job Description', 'Job Year Started', 'Job Year Ended'];

    return (
        <form className="infoPanel flex" style={background} >
            <Personal text="Personal" input={personalList} />
            <Personal text="Education" input={educationList} />
            <Personal text="Work" input={workList} />
            <div className="button flex">
                <Button type="submit" text="Save" /><Button text="Edit" />
            </div>
        </form>
    )
}
function ShowPanel(props){

    let background = {
        width: props.width + '%',
        borderRadius: props.borderRadius,
        backgroundColor: props.color
    }

    return (
        <div className="infoPanel flex" style={background}>
            <div className="cv">
                <div className="header">
                    <h1>Name</h1>
                    <div className="contact">
                        <h5>Contact</h5>
                        <p>Phone</p>
                        <p>Email</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export {InfoPanel, ShowPanel};
