import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
      <>
        <Employee name="Jeremiah" role="intern"></Employee>
        <Employee name="John"></Employee>
        <Employee name="Abby"/>
        </>
      :
        <p>You cannot see the employees</p>
      }
  </div>
  );
}

export default App;
