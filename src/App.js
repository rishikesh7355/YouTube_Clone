import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Filter from './Filter'

function App() {
  return (
    <div className="App">
      <Header/>
        <Sidebar/>
      <div className='main-display'>
        <Filter/>
      </div>
    </div>
  );
}

export default App;
