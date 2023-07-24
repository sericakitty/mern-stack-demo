import React, { useState, useEffect } from 'react';
import {getAll, create} from './controllers/user.js'
import './App.css';

const App = () => {

  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [objectList, setObjectList] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await getAll()
    if (!response.status === 200) {
      setError(true)
      setIsLoading(false)
    } else {
      setObjectList(response.data)
      setIsLoading(false)
    }
  }

  const pushData = async (event) => {
    event.preventDefault()
    const newObject = {
      name,
      text
    }
    const response = await create(newObject)
    if (response.status === 201) {
      setName('')
      setText('')
      fetchData()
    }

    
  }


  return (
    <div className="App">
      {
      isloading ? <div>Loading...</div> : 
      error ? <div>Unable to connect database</div> : 
      <div>{objectList.map((object, index) => 
        <div key={index} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
          {object.name}
          {<br/>}
          {<br/>}
          {object.text}
        </div>)}
      </div>
      }
      <div>
        <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
        <input type="text" placeholder="text" value={text} onChange={(event) => setText(event.target.value)}/>
        <button onClick={pushData}>Submit</button>
      </div>
    </div>
  );
}

export default App;
