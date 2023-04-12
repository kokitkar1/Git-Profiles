import './App.css';
import React,{ useState } from 'react';



function App() {

  const [userName, setUserName] = useState("kokitkar1")
  const [data, setData] = useState({})


  const searchHandle = (e) =>{
    setUserName(e.target.value)
  }


  const gitHandle = (e)=>{
    e.preventDefault()
    fetch(`https://api.github.com/users/${userName}`)
    .then((result) =>{
      return result.json();
    })
    .then((value) =>{
      setData(value)
    })
  }




  return (
    <div className="App">
    <form className="d-flex" role="search" onSubmit={gitHandle} >
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={userName} onChange={searchHandle} />
    <button className="btn btn-outline-success" type="submit">Search</button>
    </form>

    <div className='container'>
  <div className="card">
    <img src={data.avatar_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{data.login}</h3>
        <div className='details'>
        <p className="card-text"><span>Name:</span>  {data.name} </p>
        <p className="card-text"><span>Public Repository:</span>  {data.public_repos} </p>
        <p className="card-text"><span>Public Gists:</span>  {data.public_gists} </p>
        <p className="card-text"><span>Created At:</span> {data.created_at}</p>
        </div>
      </div>
    </div>
  </div>

    </div>
  );
}

export default App;
