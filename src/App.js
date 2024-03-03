import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('devs');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
      <>
        <input 
          type='text' 
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
        />
        <Employee name="Jeremiah" role="intern"></Employee>
        <Employee name="John"></Employee>
        <Employee name="Abby" role={role}/>
        </>
      :
        <p>You cannot see the employees</p>
      }
  </div>
  );
}

export default App;
