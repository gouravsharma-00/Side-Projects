import { useState } from 'react'
import '../style/box.css'

export default function Box(props){
    let loaderStyle={
        display: props.loader
    }
    return (
        <div className="box" >
            <div className="formdata">
                <header>
                    <h1>{props.detail.fullname}</h1>
                    <div className="contact">
                        <h4>Contact</h4>
                        <span>Phone: +91 {props.detail.phone}</span>
                        <span>Email: {props.detail.email}</span>
                    </div>
                </header>
                <h3>Education</h3>
            <h5>{props.detail.school}</h5>
            <span>{props.detail.course} {props.detail.edyearstart}-to-{props.detail.edyearend}</span>
            <hr/>
            <h3>Work</h3>
            <h5>{props.detail.company}</h5>
            <span>{props.detail.position} : {props.detail.job}</span><br/>
            <span>{props.detail.workyearstart}-to-{props.detail.workyearend}</span>
            </div>
            <div className="data" style={loaderStyle}></div>
            <div className="loader" style={loaderStyle}></div>
        </div>
    )
}