import React, { useState } from "react";


const App = () => {
  const [username, setUsername] = useState('');
  const doit=(e)=>{
    e.preventDefault()
    setUsername("")
    console.log("submited")
  }
  return (
    <div >
      <form onSubmit={(e)=>{
            doit(e)
          }}>
        <input
        value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          type="text"
          className="bg-amber-400 m-2 py-2"
          placeholder='enter u name'
          />
        <button type="submit" className="bg-emerald-500 m-2 p-2 rounded-2xl">submit</button>
      </form>
    </div>
  );
}

export default App;
