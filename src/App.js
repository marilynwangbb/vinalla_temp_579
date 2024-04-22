import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import './App.css';
import NavBar from './components/NavBar';
import SummaryContainer from './components/Summary/SummaryContainer';
import InteractiveTable from './components/ApplicationTracker/InteractiveTable';
import StatusTagsContainer from './components/ApplicationTracker/StatusTagsContainer';
import AffirmationItem from './components/Affirmation/AffirmationItem';
import NotesManager from './components/Note/NotesManager';
import Divider from './components/Divider';
function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      
      
      
      <h1 id="job-application">Job Application</h1>

      <AffirmationItem />

      <div id="summary">
      <SummaryContainer  />
      </div>
 
      <DndProvider backend={HTML5Backend}>
      <StatusTagsContainer />
      <InteractiveTable />
      </DndProvider>

      
      
      <Divider />
      <h1 id="notes-manager">Recap Note</h1>
      <NotesManager />
      <Divider />
      <h1 id="news-area">News</h1>
    </div>
  );
}

export default App;