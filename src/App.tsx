import Budgets from './features/budgets/Budgets';
import Collateral from './features/collateral/Collateral';
import Loans from './features/loans/Loans';

import './App.css';

function App() {
  return (
    <div className="App">
        <Loans />
        <Budgets />
        <Collateral setCollateral={() => void 0} collateralData={[]} />
    </div>
  );
}

export default App;
