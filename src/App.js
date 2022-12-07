import './App.css';
import { OverviewChart } from './OverviewChart';
import { StatusCardsList } from './StatusCards';


//admin dashboard - day4 task
//preview link - https://startbootstrap.com/previews/sb-admin-2

function App() {
  return (
    <div className="App">
      <h1 className='title'>Dashboard</h1>
      <StatusCardsList />
      <OverviewChart />
    </div>
  );
}

export default App;
