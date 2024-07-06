import Comp from "./component's/C-01";
import './App.css'
import Box from "./component's/C-02";
import { useState } from "react";
export default function App(){
  const [isEditing, setIsEditing] = useState('block');
  const [formData, setFormData] = useState({
    fullname: 'Gourav',
  });
  const call = (flag) => {
    setIsEditing(flag);
  }

  return(
    <div className='container'>
      <Comp edit={call} formLoad={setFormData}/>
      <Box loader={isEditing} detail={formData}/>
    </div>
  )
};
