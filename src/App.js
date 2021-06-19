
import './App.css';
import ItemContainer from './ItemContainer';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
     <Navbar/>

     <div style={{paddingTop: "5rem"}}> 
     <ItemContainer/>
     </div>
     
    </div>
  );
}

export default App;
