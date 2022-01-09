import { Counter } from './features/counter/Counter';
import Budgets from './features/budgets/Budgets';
import Collateral from './features/collateral/Collateral';
import Loans from './features/loans/Loans';

import './App.css';

function App() {
  return (
    <div className="App">
        <Counter />
        <Loans />
        <Budgets />
        <Collateral />
    </div>
  );
}

export default App;
