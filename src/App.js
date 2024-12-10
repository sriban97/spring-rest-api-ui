import React, { useEffect, useState } from 'react';
import './App.css';
import ActiveUser from './active-user';
import AllUserName from './all-user-name';

function App() {

  const paths = [{ id: 0, name: '/user/getActiveUser' }, { id: 1, name: '/user/all-user-name' }];
  const api = 'http://localhost:8080';

  const [path, setPath] = React.useState("0");
  const [datas, setDatas] = useState([])
 
  useEffect(() => {
  }, []);

  const onChangePath = (event) => {
    setDatas([]);
    setPath(event.target.value);
  }
  const onSubmit = () => {
    fetch(api + paths[path].name)
      .then((response) => response.json())
      .then((data) => {
        console.log(['data', data]);
        setDatas(data);
      })
      .catch((err) => {
        console.log(['error', err.message]);
      });
  }

  // const data = [
  //   { "id": "1", "firstName": "SRIBAN", "lastName": "MARI", "eMail": "sri@gmail.com", "phone": "123456", "password": "1235", "active": "Y" },
  //   { "id": "2", "firstName": "MYTHILI", "lastName": "MARI", "eMail": "sri@gmail.com", "phone": "123456", "password": "1235", "active": "Y" },
  // ]
  return (
    <div className="App">
      <div>
        <select value={path} onChange={onChangePath}>
          {paths.map((m, index) => {
            return (<option key={index} value={m.id}>{m.name}</option>)
          })}
        </select>
        <button onClick={onSubmit} >Submit</button>
      </div>
      {(path === "0") && <ActiveUser data={datas}/>}
      {(path === "1") && <AllUserName data={datas}/>}
    </div>
  );
}

export default App;
