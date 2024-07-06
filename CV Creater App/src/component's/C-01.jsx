import { useState } from "react";
import "../style/form.css"
function Comp(props){
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        let {name, value} = e.target
        setInput({...input,[name] : value
        });
    }
    const submitButton = (e) => {
        e.preventDefault();
        props.formLoad(input);
        props.edit('none');
    }
    const resetButton = (e) =>{
        setInput();
        props.edit('block')
    }
    return (
        <form className="form" onSubmit={submitButton} onReset={resetButton}>
            <h1>Personal</h1>
            <hr/>
            <label>
                FullName:
                <input name="fullname" type="text" onChange={handleChange} />
            </label>
            <label>
                Phone:
                <input name="phone"  type="phone" onChange={handleChange} />
            </label>
            <label>
                contact:
                <input type="email" name="email" onChange={handleChange} />
            </label>
            <hr/>
            <h1>Education</h1>
            <label>
                School:
                <input name="school"  type="text" onChange={handleChange} />
            </label>
            <label>
                Course:
                <input name="course"  type="text" onChange={handleChange} />
            </label>
            <label>
                Year started:
                <input type="date" name="edyearstart" onChange={handleChange} />
            </label>
            <label>
                Year Ended:
                <input type="date" name="edyearend" onChange={handleChange} />
            </label>
            <hr/>
            <h1>Work</h1>
            <label>
                Company Name:
                <input name="company"  type="text" onChange={handleChange} />
            </label>
            <label>
                Position:
                <input name="position"  type="text" onChange={handleChange} />
            </label>
            <label>
                Job description:
                <input name="job"  type="text" onChange={handleChange} />
            </label>
            <label>
                Year started:
                <input type="date" name="workyearstart" onChange={handleChange} />
            </label>
            <label>
                Year Ended:
                <input type="date" name="workyearend" onChange={handleChange} />
            </label>
            <div className="button">
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Comp;