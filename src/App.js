import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import './App.css';

function App() {
  let [TODOList, setTODOList] = useState([]);
  let funTodoList = (event) => {
    
    let toname = event.target.toname.value;
   
    if (!TODOList.includes(toname)) {
      let AddList = [...TODOList, toname];
      setTODOList(AddList);

    } else {
      NotificationManager.warning('Warning message', `Already ${TODOList} Exist`);
    }
    event.preventDefault();
  }

  let AforTodo = TODOList.map((value, index) => {
    return (
      <ForShowList value={value} key={index} TODOList={TODOList} indexNumber={index} setTODOList={ setTODOList} />
    )
  })
  return (
    <div>
      <NotificationContainer/>
      <h1>todo list</h1>
      <form onSubmit={funTodoList }>
        <input type="text" name="toname"></input>
        <button>Save</button>
      </form>

      <div className='outerdiv'>
        <ul>
               {AforTodo}
           </ul>
      </div>
    </div>
  );
}
export default App;

function ForShowList({ value, indexNumber, TODOList, setTODOList }) {
  let [check, setcheck] = useState(false);

  const deleteFun = () => {
    let final = TODOList.filter((v, i) => i !== indexNumber);
    setTODOList(final);
  }

  const checkStatus = () => {
    setcheck(!check);
  }
  
  return (
    <li className={check ? 'todocheck' : ''} onClick={checkStatus}>
      {value}
      <span onClick={deleteFun} style={{ cursor: 'pointer' }}>&times;</span>
    </li>
  )
}
