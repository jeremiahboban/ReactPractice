import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('devs');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
        <input 
          type='text' 
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
        />
        <div className="flex flex-wrap justify-center">
          <Employee 
            name="Jeremiah" 
            role="intern" 
            img="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Employee 
            name="Jeremiah" 
            role="intern" 
            img="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Employee 
            name="Jeremiah" 
            role="intern" 
            img="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Employee 
            name="Jeremiah" 
            role="intern" 
            img="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Employee 
            name="Jeremiah" 
            role="intern" 
            img="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Employee 
            name="Jeremiah" 
            role="intern" 
            img="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          
        </div>
      </>
      ) :(
        <p>You cannot see the employees</p>
      )}
  </div>
  );
}

export default App;
