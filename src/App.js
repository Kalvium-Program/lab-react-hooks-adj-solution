import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

 }

 useEffect(()=>{
  alert("submitted")
},[submitting])

  return(
    <div className="main">
      <h1>Hey Kalvians</h1>
      {submitting &&
       <div>Submitted</div>
     }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;