import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Filter from './Filter'
import Videos from './Videos';

function App() {
  return (
    <div className="App">
      <Header/>
        <Sidebar/>
        <Videos/>
      <div className='main-display'>
        <Filter/>
      </div>
    </div>
  );
}

export default App;
