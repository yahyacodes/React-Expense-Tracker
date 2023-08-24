import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactioList from "./Components/TransactioList";
import AddTransaction from "./Components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactioList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
