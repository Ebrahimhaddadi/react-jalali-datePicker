import React from 'react'
import { DatePicker } from "jalali-react-datepicker";
const App = () => {
  return (
    <div>
      <DatePicker onClickSubmitButton={(value)=>{console.log(value)}}/>
    </div>
  )
}

export default App
