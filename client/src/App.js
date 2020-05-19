import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch('/users')
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(users => {
        console.log(users)
        setUsers(users)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          users          
        {
            users && users.map(user => (
              <div key={user.id}>{user.username}</div>
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
