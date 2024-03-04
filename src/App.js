import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('devs');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jeremiah",
      role: "Developer",
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
    },
    {
      id: 2,
      name: "Caleb",
      role: "Mentor",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
      id: 3,
      name: "Sarah",
      role: "Manager",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      id: 4,
      name: "John",
      role: "Officer",
      img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg"
    },
    {
      id: 5,
      name: "Corey",
      role: "Security",
      img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg"
    },
    {
      id: 6,
      name: "Julia",
      role: "Accountant",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if(id == employee.id) {
        return {...employee, name: newName, role: newRole};  
      }
    return employee;
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
