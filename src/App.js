import './App.css';
import { ColoredCardsList } from './ColoredCards';
import { OverviewChart } from './OverviewChart';
import { ProjectsList } from './Projects';
import { MenuBar } from './MenuBar';
import { StatusCardsList } from './StatusCards';
import { Illustrations } from './Illustrations';
import { DevelopmentApproach } from './DevelopmentApproach';


//admin dashboard - day4 task
//preview link - https://startbootstrap.com/previews/sb-admin-2

function App() {
  return (
    <div className="App">
      <div>
        <MenuBar />
      </div>
      <div>
        <StatusCardsList />
        <OverviewChart />
        <ProjectsList />
        <Illustrations />
        <DevelopmentApproach />
        <ColoredCardsList />
      </div>
    </div>
  );
}

export default App;
