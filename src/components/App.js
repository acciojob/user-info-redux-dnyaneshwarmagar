
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateName, updateEmail } from './../app/dataSlice'
import './../styles/App.css';

const App = () => {
  const {name,email} = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div>
       <h1>User Information</h1>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={(e)=>dispatch(updateName(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={(e)=>dispatch(updateEmail(e.target.value))} />
        </label>
      </div>
      <div>
        <h2>Current values in store</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
