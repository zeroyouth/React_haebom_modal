import './App.css';

import MainPage from '../src/components/mainpage/mainPage.js';
import ServicePage from './components/table/servicepage';
import RsearchBar from './components/searchbar/rsearchbar';
import OpenModal from './components/openModal/openModal';

function App() {
  return (
    <div className="App">
      <OpenModal />
      {/* <ServicePage/> */}
    </div>
  );
}

export default App;
