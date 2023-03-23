import React ,{useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Income from './components/Income';
import Transactions from './components/Transactions';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [expense, setExpense] = useState([]);

  useEffect(() =>{
    let t = 0;
    for (let i = 0 ; i <income.length; i++){
      t += parseInt(income[i].amount);
    }

    setTotalIncome(t)

  }, [income])


  return (
    <div className="App">
    
      <Header totalIncome={totalIncome} />
      <Income income={income} setIncome={setIncome}/>
      <Transactions income={income} setIncome={setIncome}/>
      
  
    </div>
  );
}

export default App;
